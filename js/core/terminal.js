const GitSim = {
  createState(files){
    return {
      initialized: false,
      files: (files || []).reduce((acc, f) => { acc[f] = { staged: false, committed: false }; return acc; }, {}),
      commits: [],
      history: []
    };
  },

  execute(state, rawCmd){
    const cmd = (rawCmd || '').trim();
    const out = [];
    if(!cmd) return { output: out, state };
    state.history.push(cmd);
    const parts = cmd.split(/\s+/);

    if(parts[0] !== 'git'){
      out.push(`Commande inconnue : "${cmd}". Ici, on tape des commandes qui commencent par "git".`);
      return { output: out, state };
    }
    const sub = parts[1];

    if(sub === 'init'){
      if(state.initialized) out.push('Ce dossier est déjà un dépôt Git.');
      else { state.initialized = true; out.push('Dépôt Git initialisé ! 🎉 (un dossier caché .git a été créé)'); }
    }
    else if(sub === 'status'){
      if(!state.initialized){ out.push("Ce n'est pas encore un dépôt Git. Tape d'abord : git init"); }
      else {
        const staged = Object.keys(state.files).filter(f => state.files[f].staged && !state.files[f].committed);
        const unstaged = Object.keys(state.files).filter(f => !state.files[f].staged);
        out.push('Sur la branche main');
        if(staged.length) out.push('✅ Prêts à être sauvegardés : ' + staged.join(', '));
        if(unstaged.length) out.push('📄 Fichiers non suivis : ' + unstaged.join(', '));
        if(!staged.length && !unstaged.length) out.push('Rien à valider, tout est déjà sauvegardé.');
      }
    }
    else if(sub === 'add'){
      if(!state.initialized){ out.push('Tape git init avant git add.'); }
      else {
        const targets = parts.slice(2);
        if(targets.length === 0){ out.push('Il faut préciser un fichier : git add nom-du-fichier (ou git add .)'); }
        else if(targets.includes('.')){
          Object.keys(state.files).forEach(f => { state.files[f].staged = true; });
          out.push('Tous les fichiers ont été ajoutés à la zone de préparation.');
        } else {
          const added = [];
          const unknown = [];
          targets.forEach(target => {
            if(state.files[target]){ state.files[target].staged = true; added.push(target); }
            else { unknown.push(target); }
          });
          if(added.length) out.push(`${added.join(', ')} ajouté(s) à la zone de préparation. ✅`);
          if(unknown.length) out.push(`Fichier(s) inconnu(s) : ${unknown.join(', ')}. Fichiers disponibles : ${Object.keys(state.files).join(', ')}`);
        }
      }
    }
    else if(sub === 'commit'){
      if(!state.initialized){ out.push('Tape git init avant git commit.'); }
      else {
        const mIdx = cmd.indexOf('-m');
        const message = mIdx !== -1 ? cmd.slice(mIdx + 2).trim().replace(/^["']|["']$/g, '') : null;
        const stagedFiles = Object.keys(state.files).filter(f => state.files[f].staged && !state.files[f].committed);
        if(!message){ out.push('Il manque un message ! Utilise : git commit -m "ton message"'); }
        else if(stagedFiles.length === 0){ out.push("Rien n'est prêt à être sauvegardé (utilise git add d'abord)."); }
        else {
          stagedFiles.forEach(f => { state.files[f].committed = true; });
          state.commits.push({ message, files: stagedFiles.slice() });
          out.push(`[main ${String(state.commits.length).padStart(2,'0')}x${(1000+state.commits.length*37).toString(16)}] ${message}`);
          out.push(`${stagedFiles.length} fichier(s) sauvegardé(s) : ${stagedFiles.join(', ')}`);
        }
      }
    }
    else if(sub === 'log'){
      if(!state.commits.length) out.push('Aucune sauvegarde (commit) pour le moment.');
      else {
        state.commits.slice().reverse().forEach((c, i) => {
          out.push(`commit #${state.commits.length - i}`);
          out.push(`  ${c.message}`);
        });
      }
    }
    else {
      out.push(`Commande git inconnue : "${sub}". Essaie : init, status, add, commit, log`);
    }
    return { output: out, state };
  }
};

const FileSystemSim = {
  createState(){
    return {
      tree: { type:'dir', children: {
        'Documents': { type:'dir', children: {} },
        'Images': { type:'dir', children: {} },
        'notes.txt': { type:'file', content:'', perms:'644' },
        'systeme': { type:'dir', children:{}, protected:true }
      }},
      path: ['~'],
      history: [],
      user: 'daouda',
      installed: [],
      processes: [
        { pid: 1, name: 'systeme', protected: true },
        { pid: 42, name: 'navigateur' },
        { pid: 101, name: 'code-aventure' }
      ]
    };
  },

  currentDir(state){
    let node = state.tree;
    for(let i = 1; i < state.path.length; i++){
      node = node.children[state.path[i]];
    }
    return node;
  },

  tokenize(cmd){
    const tokens = [];
    const re = /"([^"]*)"|(\S+)/g;
    let m;
    while((m = re.exec(cmd))){ tokens.push(m[1] !== undefined ? m[1] : m[2]); }
    return tokens;
  },

  runSimple(state, tokens, elevated){
    const out = [];
    const dir = this.currentDir(state);
    const cmdName = tokens[0];
    let dataOut = null;

    if(cmdName === 'pwd'){
      out.push(state.path.join('/'));
    }
    else if(cmdName === 'ls'){
      const names = Object.keys(dir.children);
      if(names.length === 0) out.push('(dossier vide)');
      else out.push(names.map(n => dir.children[n].type === 'dir' ? n + '/' : n).join('   '));
    }
    else if(cmdName === 'cd'){
      const target = tokens[1];
      if(!target){ out.push('Utilise : cd nom-du-dossier'); }
      else if(target === '..'){
        if(state.path.length > 1) state.path.pop();
        else out.push('Tu es déjà à la racine (~).');
      }
      else if(target === '~'){ state.path = ['~']; }
      else if(dir.children[target] && dir.children[target].type === 'dir'){ state.path.push(target); }
      else { out.push(`Dossier introuvable : "${target}"`); }
    }
    else if(cmdName === 'mkdir'){
      const name = tokens[1];
      if(!name) out.push('Utilise : mkdir nom-du-dossier');
      else if(dir.children[name]) out.push('Ce nom existe déjà ici.');
      else { dir.children[name] = { type:'dir', children:{} }; out.push(`Dossier "${name}" créé. 📁`); }
    }
    else if(cmdName === 'touch'){
      const name = tokens[1];
      if(!name) out.push('Utilise : touch nom-du-fichier');
      else if(dir.children[name]) out.push('Ce nom existe déjà ici.');
      else { dir.children[name] = { type:'file', content:'', perms:'644' }; out.push(`Fichier "${name}" créé. 📄`); }
    }
    else if(cmdName === 'rm'){
      const name = tokens[1];
      if(!name) out.push('Utilise : rm nom');
      else if(!dir.children[name]) out.push(`Introuvable : "${name}"`);
      else if(dir.children[name].protected && !elevated) out.push(`Permission refusée : "${name}" est protégé. Essaie avec sudo.`);
      else { delete dir.children[name]; out.push(`"${name}" supprimé.`); }
    }
    else if(cmdName === 'cat'){
      const name = tokens[1];
      if(!name) out.push('Utilise : cat nom-du-fichier');
      else if(!dir.children[name] || dir.children[name].type !== 'file') out.push(`Fichier introuvable : "${name}"`);
      else { const c = dir.children[name].content || ''; out.push(c || '(fichier vide)'); dataOut = c; }
    }
    else if(cmdName === 'echo'){
      const gtIdx = tokens.indexOf('>');
      const appendIdx = tokens.indexOf('>>');
      if(gtIdx !== -1 || appendIdx !== -1){
        const idx = gtIdx !== -1 ? gtIdx : appendIdx;
        const text = tokens.slice(1, idx).join(' ');
        const filename = tokens[idx + 1];
        if(!filename){ out.push('Utilise : echo "texte" > fichier'); }
        else {
          if(!dir.children[filename]) dir.children[filename] = { type:'file', content:'', perms:'644' };
          if(appendIdx !== -1) dir.children[filename].content = (dir.children[filename].content || '') + text;
          else dir.children[filename].content = text;
          out.push(`Écrit dans "${filename}".`);
        }
      } else {
        const text = tokens.slice(1).join(' ');
        out.push(text);
        dataOut = text;
      }
    }
    else if(cmdName === 'grep'){
      const motIdx = 1;
      const mot = tokens[motIdx];
      const filename = tokens[motIdx + 1];
      let haystack = null;
      if(filename){
        if(!dir.children[filename] || dir.children[filename].type !== 'file'){ out.push(`Fichier introuvable : "${filename}"`); }
        else { haystack = dir.children[filename].content || ''; }
      } else if(this.__pipedInput !== undefined){
        haystack = this.__pipedInput;
      } else {
        out.push('Utilise : grep "mot" fichier');
      }
      if(haystack !== null){
        const lines = haystack.split('\n').filter(l => l.toLowerCase().includes((mot || '').toLowerCase()));
        if(lines.length === 0) out.push('(aucune ligne trouvée)');
        else lines.forEach(l => out.push(l));
        dataOut = lines.join('\n');
      }
    }
    else if(cmdName === 'cp'){
      const src = tokens[1], destName = tokens[2];
      if(!src || !destName) out.push('Utilise : cp source destination');
      else if(!dir.children[src]) out.push(`Introuvable : "${src}"`);
      else { dir.children[destName] = JSON.parse(JSON.stringify(dir.children[src])); out.push(`"${src}" copié vers "${destName}".`); }
    }
    else if(cmdName === 'mv'){
      const src = tokens[1], destName = tokens[2];
      if(!src || !destName) out.push('Utilise : mv source destination');
      else if(!dir.children[src]) out.push(`Introuvable : "${src}"`);
      else { dir.children[destName] = dir.children[src]; delete dir.children[src]; out.push(`"${src}" renommé/déplacé en "${destName}".`); }
    }
    else if(cmdName === 'chmod'){
      const mode = tokens[1], name = tokens[2];
      if(!mode || !name) out.push('Utilise : chmod 755 nom-du-fichier');
      else if(!dir.children[name]) out.push(`Introuvable : "${name}"`);
      else { dir.children[name].perms = mode; out.push(`Permissions de "${name}" changées en ${mode}.`); }
    }
    else if(cmdName === 'whoami'){
      out.push(elevated ? 'root' : state.user);
    }
    else if(cmdName === 'sudo'){
      const inner = tokens.slice(1);
      if(inner.length === 0) out.push('Utilise : sudo une-commande');
      else {
        const result = this.runSimple(state, inner, true);
        return result;
      }
    }
    else if(cmdName === 'ps'){
      out.push('PID   COMMANDE');
      state.processes.forEach(p => out.push(`${p.pid}     ${p.name}`));
    }
    else if(cmdName === 'kill'){
      const pid = Number(tokens[1]);
      const proc = state.processes.find(p => p.pid === pid);
      if(!pid) out.push('Utilise : kill numero-de-pid');
      else if(!proc) out.push(`Aucun processus avec le PID ${pid}.`);
      else if(proc.protected && !elevated) out.push(`Permission refusée : le processus ${pid} (${proc.name}) est protégé. Essaie avec sudo.`);
      else { state.processes = state.processes.filter(p => p.pid !== pid); out.push(`Processus ${pid} (${proc.name}) arrêté.`); }
    }
    else if(cmdName === 'installer'){
      const name = tokens[1];
      if(!name) out.push('Utilise : installer nom-du-logiciel');
      else { state.installed.push(name); out.push(`"${name}" installé avec succès. ✅`); }
    }
    else if(cmdName === 'logiciels-installes'){
      if(state.installed.length === 0) out.push('(aucun logiciel installé)');
      else out.push(state.installed.join('   '));
    }
    else {
      out.push(`Commande inconnue : "${cmdName}". Essaie : ls, pwd, cd, mkdir, touch, rm, cat, echo, grep, cp, mv, chmod, whoami, sudo, ps, kill, installer`);
    }
    return { output: out, dataOut, state };
  },

  execute(state, rawCmd){
    const cmd = (rawCmd || '').trim();
    if(!cmd) return { output: [], state };
    state.history.push(cmd);

    if(cmd.includes('|')){
      const [leftRaw, rightRaw] = cmd.split('|').map(s => s.trim());
      const left = this.runSimple(state, this.tokenize(leftRaw), false);
      this.__pipedInput = left.dataOut !== null ? left.dataOut : left.output.join('\n');
      const right = this.runSimple(state, this.tokenize(rightRaw), false);
      this.__pipedInput = undefined;
      return { output: right.output, state };
    }

    const tokens = this.tokenize(cmd);
    const result = this.runSimple(state, tokens, false);
    return { output: result.output, state };
  }
};

const NetworkSim = {
  selfIp: '192.168.1.42',
  router: { name: 'TaBox (routeur)', ip: '192.168.1.1' },
  isp: { name: 'FAI (Fournisseur Internet)', ip: '198.51.100.1' },
  dnsTable: {
    'code-aventure.fr': '203.0.113.10',
    'ecole.fr': '203.0.113.20',
    'jeuxenligne.fr': '203.0.113.30',
    'cible-entrainement.lab': '10.0.0.50'
  },
  portsTable: {
    'code-aventure.fr': [80, 443],
    'ecole.fr': [80, 443],
    'jeuxenligne.fr': [80, 443, 21],
    'cible-entrainement.lab': [21, 22, 80, 3306]
  },
  portName(p){
    if(p === 80) return 'HTTP';
    if(p === 443) return 'HTTPS';
    if(p === 21) return 'FTP';
    if(p === 22) return 'SSH';
    if(p === 3306) return 'MySQL';
    return 'Inconnu';
  },

  createState(){
    return { history: [], dns: Object.assign({}, this.dnsTable) };
  },

  resolve(state, target){
    if(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(target)) return target;
    return state.dns[target] || null;
  },

  execute(state, rawCmd){
    const cmd = (rawCmd || '').trim();
    const out = [];
    if(!cmd) return { output: out, state };
    state.history.push(cmd);
    const parts = cmd.split(/\s+/);
    const self = NetworkSim;

    if(parts[0] === 'ipconfig' || parts[0] === 'monip'){
      out.push('Adresse IP locale : ' + self.selfIp);
      out.push('Passerelle (routeur) : ' + self.router.ip);
    }
    else if(parts[0] === 'nslookup'){
      const name = parts[1];
      if(!name){ out.push('Utilise : nslookup nom-de-domaine'); }
      else {
        const ip = state.dns[name];
        if(ip){ out.push(`${name} → ${ip}`); }
        else { out.push(`Nom introuvable : "${name}" (ce domaine n'existe pas dans le DNS)`); }
      }
    }
    else if(parts[0] === 'ping'){
      const target = parts[1];
      if(!target){ out.push('Utilise : ping adresse-ou-domaine'); }
      else {
        const ip = self.resolve(state, target);
        if(!ip){ out.push(`Impossible de joindre "${target}" : hôte inconnu.`); }
        else {
          out.push(`Envoi d'une requête ping vers ${target} [${ip}] :`);
          for(let i = 0; i < 4; i++){ out.push(`Réponse de ${ip} : temps=${12 + i * 3}ms`); }
        }
      }
    }
    else if(parts[0] === 'traceroute' || parts[0] === 'tracert'){
      const target = parts[1];
      if(!target){ out.push('Utilise : traceroute adresse-ou-domaine'); }
      else {
        const ip = self.resolve(state, target);
        if(!ip){ out.push(`Impossible de tracer la route vers "${target}" : hôte inconnu.`); }
        else {
          out.push(`Traçage de route vers ${target} [${ip}] :`);
          out.push(`1  ${self.router.name}  ${self.router.ip}`);
          out.push(`2  ${self.isp.name}  ${self.isp.ip}`);
          out.push(`3  Serveur distant  ${ip}`);
        }
      }
    }
    else if(parts[0] === 'scan'){
      const target = parts[1];
      if(!target){ out.push('Utilise : scan adresse-ou-domaine'); }
      else {
        const ip = self.resolve(state, target);
        if(!ip){ out.push(`Impossible de scanner "${target}" : hôte inconnu.`); }
        else {
          const ports = self.portsTable[target] || [80, 443];
          out.push(`Scan de ${target} [${ip}] :`);
          ports.forEach(p => out.push(`Port ${p} (${self.portName(p)}) : OUVERT`));
        }
      }
    }
    else {
      out.push(`Commande inconnue : "${parts[0]}". Essaie : ipconfig, ping, nslookup, traceroute, scan`);
    }
    return { output: out, state };
  }
};

const Terminal = {
  _build(container, { prompt, intro, initialState, executor, welcomeLines }){
    let state = initialState;

    const wrap = document.createElement('div');
    wrap.className = 'terminal';
    const screen = document.createElement('div');
    screen.className = 'terminal-screen';
    wrap.appendChild(screen);

    const inputRow = document.createElement('div');
    inputRow.className = 'terminal-input-row';
    const promptSpan = document.createElement('span');
    promptSpan.className = 'terminal-prompt';
    promptSpan.textContent = prompt;
    const input = document.createElement('input');
    input.className = 'terminal-input';
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('spellcheck', 'false');
    inputRow.appendChild(promptSpan);
    inputRow.appendChild(input);
    wrap.appendChild(inputRow);
    container.appendChild(wrap);

    function println(text, cls){
      const line = document.createElement('div');
      line.className = 'terminal-line' + (cls ? ' ' + cls : '');
      line.textContent = text;
      screen.appendChild(line);
      screen.scrollTop = screen.scrollHeight;
    }

    (welcomeLines || []).forEach(l => println(l));
    (intro || []).forEach(l => println(l, 'terminal-intro'));
    println('Tape une commande et appuie sur Entrée ⏎');

    input.addEventListener('keydown', (e) => {
      if(e.key === 'Enter'){
        const cmd = input.value;
        if(!cmd.trim()) return;
        println(prompt + ' ' + cmd, 'terminal-cmd');
        input.value = '';
        const result = executor(state, cmd);
        state = result.state;
        result.output.forEach(line => println(line));
      }
    });

    return {
      getState: () => state,
      focus: () => input.focus(),
      el: wrap
    };
  },

  create(container, { files = [], prompt = 'daouda@code-aventure:~$', intro = [] } = {}){
    return this._build(container, {
      prompt, intro,
      initialState: GitSim.createState(files),
      executor: (state, cmd) => GitSim.execute(state, cmd),
      welcomeLines: ['📁 Dossier de travail : ' + (files.join(', ') || '(vide)')]
    });
  },

  createFS(container, { prompt = 'daouda@code-aventure:~$', intro = [] } = {}){
    return this._build(container, {
      prompt, intro,
      initialState: FileSystemSim.createState(),
      executor: (state, cmd) => FileSystemSim.execute(state, cmd),
      welcomeLines: ['💻 Un vrai petit système de fichiers ! Essaie : ls, pwd, cd, mkdir, touch, rm']
    });
  },

  createNet(container, { prompt = 'daouda@code-aventure:~$', intro = [] } = {}){
    return this._build(container, {
      prompt, intro,
      initialState: NetworkSim.createState(),
      executor: (state, cmd) => NetworkSim.execute(state, cmd),
      welcomeLines: ['🌐 Un vrai petit simulateur réseau ! Essaie : ipconfig, ping, nslookup, traceroute']
    });
  }
};
