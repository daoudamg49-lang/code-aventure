const CHAPTER_11 = {
  id: 'ch11',
  title: 'Les réseaux',
  subtitle: "Comment les ordinateurs du monde entier se parlent",
  icon: '🌐',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch11-l1',
    title: "Qu'est-ce qu'un réseau ?",
    icon: '🌐',
    explanation: [
      { type:'text', heading:"Des ordinateurs qui se parlent", html:
        "<p>Un <strong>réseau</strong>, c'est simplement plusieurs appareils reliés entre eux pour échanger des informations. Comme un réseau de routes relie des villes entre elles, un réseau informatique relie des ordinateurs, téléphones, et serveurs !</p>" },
      { type:'text', heading:"Réseau local et Internet", html:
        "<p>Un <strong>réseau local</strong> (LAN) relie les appareils d'un même endroit (ta maison, ton école). <strong>Internet</strong> est le plus grand réseau du monde : c'est en fait un \"réseau de réseaux\", qui relie des milliards d'appareils partout sur Terre !</p>" },
      { type:'code', code: "function estUnReseau(appareils) {\n  return appareils.length >= 2;\n}" },
      { type:'tip', html:"Internet n'est pas \"un endroit\" quelque part : ce sont des câbles (parfois sous l'océan !), des antennes et des satellites qui relient des ordinateurs entre eux." },
      { type:'demo', tabs:[{ type:'js', starter:
        "function estUnReseau(appareils) {\n  return appareils.length >= 2;\n}\nconsole.log(estUnReseau([\"PC\", \"Téléphone\"]));\nconsole.log(estUnReseau([\"PC\"]));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète la fonction <code>estUnReseau(appareils)</code> qui retourne <code>true</code> si la liste contient au moins 2 appareils, sinon <code>false</code>.",
        tabs: [{ type:'js', starter: "function estUnReseau(appareils) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return appareils.length >= 2;"],
        solution: { js: "function estUnReseau(appareils) {\n  return appareils.length >= 2;\n}" },
        check(doc, win){
          if(typeof win.estUnReseau !== 'function') return { success:false, message:"Il manque une fonction estUnReseau." };
          if(win.estUnReseau(['PC','Tel']) !== true) return { success:false, message:"Avec 2 appareils, ça devrait être true." };
          if(win.estUnReseau(['PC']) !== false) return { success:false, message:"Avec 1 seul appareil, ça devrait être false." };
          return { success:true, message:"Tu as compris ce qu'est un réseau !" };
        }
      },
      moyen: {
        instructions: "Complète <code>typeDeReseau(nom)</code> : retourne <code>\"Local\"</code> si le nom est <code>\"maison\"</code> ou <code>\"ecole\"</code>, sinon <code>\"Internet\"</code>.",
        tabs: [{ type:'js', starter: "function typeDeReseau(nom) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (nom === \"maison\" || nom === \"ecole\") { return \"Local\"; } return \"Internet\";"],
        solution: { js: "function typeDeReseau(nom) {\n  if (nom === \"maison\" || nom === \"ecole\") {\n    return \"Local\";\n  }\n  return \"Internet\";\n}" },
        check(doc, win){
          if(typeof win.typeDeReseau !== 'function') return { success:false, message:"Il manque une fonction typeDeReseau." };
          if(win.typeDeReseau('maison') !== 'Local') return { success:false, message:"typeDeReseau(\"maison\") devrait donner \"Local\"." };
          if(win.typeDeReseau('google') !== 'Internet') return { success:false, message:"typeDeReseau(\"google\") devrait donner \"Internet\"." };
          return { success:true, message:"Tu distingues bien réseau local et Internet !" };
        }
      },
      difficile: {
        instructions: "Complète <code>ajouterAppareil(reseau, nom)</code> qui retourne un NOUVEAU tableau contenant tous les appareils de <code>reseau</code> PLUS <code>nom</code> à la fin (astuce : <code>.concat(...)</code> ou le spread <code>[...reseau, nom]</code>).",
        tabs: [{ type:'js', starter: "function ajouterAppareil(reseau, nom) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return [...reseau, nom];", "ou : return reseau.concat(nom);"],
        solution: { js: "function ajouterAppareil(reseau, nom) {\n  return [...reseau, nom];\n}" },
        check(doc, win){
          if(typeof win.ajouterAppareil !== 'function') return { success:false, message:"Il manque une fonction ajouterAppareil." };
          const r = win.ajouterAppareil(['PC'], 'Tablette');
          if(!Array.isArray(r) || r.length !== 2 || !r.includes('Tablette')) return { success:false, message:"Le nouveau tableau devrait contenir PC ET Tablette." };
          return { success:true, message:"Tu sais faire grandir un réseau, un appareil à la fois !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch11-l2',
    title: "L'adresse IP, la carte d'identité",
    icon: '🏷️',
    explanation: [
      { type:'text', heading:"Chaque appareil a sa propre adresse", html:
        "<p>Pour qu'un message arrive au bon endroit, chaque appareil connecté a une <strong>adresse IP</strong> : quatre nombres (de 0 à 255) séparés par des points, comme <code>192.168.1.42</code>. C'est un peu comme une adresse postale, mais pour un ordinateur !</p>" },
      { type:'text', heading:"IP privée et IP publique", html:
        "<p>Chez toi, tes appareils ont une <strong>adresse IP privée</strong> (souvent <code>192.168.x.x</code>), visible seulement sur ton réseau local. Ta box a aussi une <strong>adresse IP publique</strong>, visible depuis tout Internet.</p>" },
      { type:'code', code: "192.168.1.42  ← adresse IP privée (à la maison)\n203.0.113.10  ← adresse IP publique (sur Internet)" },
      { type:'tip', html:"Une adresse IPv4 a toujours EXACTEMENT 4 nombres, chacun entre 0 et 255 (jamais plus, jamais moins) !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function estIPPrivee(ip) {\n  return ip.startsWith(\"192.168.\");\n}\nconsole.log(estIPPrivee(\"192.168.1.42\"));\nconsole.log(estIPPrivee(\"203.0.113.10\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>estUneIP(texte)</code> : retourne <code>true</code> si le texte contient exactement 4 parties séparées par des points (astuce : <code>texte.split(\".\").length === 4</code>).",
        tabs: [{ type:'js', starter: "function estUneIP(texte) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return texte.split(\".\").length === 4;"],
        solution: { js: "function estUneIP(texte) {\n  return texte.split(\".\").length === 4;\n}" },
        check(doc, win){
          if(typeof win.estUneIP !== 'function') return { success:false, message:"Il manque une fonction estUneIP." };
          if(win.estUneIP('192.168.1.42') !== true) return { success:false, message:"192.168.1.42 devrait être reconnue comme une IP." };
          if(win.estUneIP('bonjour') !== false) return { success:false, message:"\"bonjour\" ne devrait pas être reconnu comme une IP." };
          return { success:true, message:"Tu sais reconnaître le format d'une adresse IP !" };
        }
      },
      moyen: {
        instructions: "Complète <code>estIPPrivee(ip)</code> : retourne <code>true</code> si l'adresse commence par <code>\"192.168.\"</code>, sinon <code>false</code>.",
        tabs: [{ type:'js', starter: "function estIPPrivee(ip) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return ip.startsWith(\"192.168.\");"],
        solution: { js: "function estIPPrivee(ip) {\n  return ip.startsWith(\"192.168.\");\n}" },
        check(doc, win){
          if(typeof win.estIPPrivee !== 'function') return { success:false, message:"Il manque une fonction estIPPrivee." };
          if(win.estIPPrivee('192.168.1.1') !== true) return { success:false, message:"192.168.1.1 devrait être une IP privée." };
          if(win.estIPPrivee('203.0.113.10') !== false) return { success:false, message:"203.0.113.10 ne devrait pas être une IP privée." };
          return { success:true, message:"Tu distingues les adresses privées des adresses publiques !" };
        }
      },
      difficile: {
        instructions: "Complète <code>extraireDernierNombre(ip)</code> qui retourne le DERNIER nombre d'une adresse IP, sous forme de vrai nombre (pas du texte). Exemple : <code>\"192.168.1.42\"</code> → <code>42</code>.",
        tabs: [{ type:'js', starter: "function extraireDernierNombre(ip) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["let parties = ip.split(\".\");", "return Number(parties[parties.length - 1]);"],
        solution: { js: "function extraireDernierNombre(ip) {\n  let parties = ip.split(\".\");\n  return Number(parties[parties.length - 1]);\n}" },
        check(doc, win){
          if(typeof win.extraireDernierNombre !== 'function') return { success:false, message:"Il manque une fonction extraireDernierNombre." };
          if(win.extraireDernierNombre('192.168.1.42') !== 42) return { success:false, message:"Pour \"192.168.1.42\", le résultat devrait être 42 (un nombre, pas du texte)." };
          return { success:true, message:"Tu découpes et convertis une adresse IP comme un pro !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch11-l3',
    title: "Premiers pas avec le terminal réseau",
    icon: '🖧',
    explanation: [
      { type:'text', heading:"De vraies commandes réseau", html:
        "<p>Les professionnels utilisent un terminal pour explorer un réseau. <code>ipconfig</code> (ou <code>monip</code>) affiche TON adresse IP locale. <code>ping adresse</code> vérifie si un autre appareil répond, en lui envoyant un petit signal et en mesurant le temps de réponse.</p>" },
      { type:'code', code: "ipconfig\nping code-aventure.fr" },
      { type:'tip', html:"<code>ping</code> peut aussi utiliser une adresse IP directement, pas seulement un nom de domaine !" },
      { type:'terminal-demo', terminalType:'net', intro:["Essaie : ipconfig, puis ping code-aventure.fr"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Tape <code>ipconfig</code> pour découvrir ta propre adresse IP locale.",
        hints: ["Tape simplement : ipconfig"],
        solution: { terminal: "ipconfig" },
        check(state){
          if(!state.history.some(h => h.trim() === 'ipconfig' || h.trim() === 'monip')) return { success:false, message:"Il manque la commande ipconfig." };
          return { success:true, message:"Tu connais maintenant ta propre adresse IP !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Utilise <code>ping code-aventure.fr</code> pour vérifier que ce site répond.",
        hints: ["ping code-aventure.fr"],
        solution: { terminal: "ping code-aventure.fr" },
        check(state){
          const ok = state.history.some(h => {
            const parts = h.trim().split(/\s+/);
            return parts[0] === 'ping' && NetworkSim.resolve(state, parts[1]);
          });
          if(!ok) return { success:false, message:"Il manque un ping réussi vers une adresse connue." };
          return { success:true, message:"Ta première commande ping a fonctionné !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Utilise <code>ping</code> directement avec une adresse IP (par exemple <code>203.0.113.10</code>), sans nom de domaine cette fois.",
        hints: ["ping 203.0.113.10"],
        solution: { terminal: "ping 203.0.113.10" },
        check(state){
          const ok = state.history.some(h => {
            const parts = h.trim().split(/\s+/);
            return parts[0] === 'ping' && /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(parts[1] || '');
          });
          if(!ok) return { success:false, message:"Il manque un ping utilisant directement une adresse IP." };
          return { success:true, message:"ping fonctionne aussi bien avec un nom qu'avec une IP directe !" };
        }
      }
    }
  },

  // ============ LEÇON 4 ============
  {
    id: 'ch11-l4',
    title: "Les ports : plusieurs portes",
    icon: '🚪',
    explanation: [
      { type:'text', heading:"Une adresse, plusieurs portes", html:
        "<p>Une adresse IP, c'est comme l'adresse d'un immeuble. Mais un immeuble a plusieurs appartements ! Le <strong>port</strong> (un numéro) précise à QUELLE porte on frappe. Le port <code>80</code> est réservé au HTTP, le port <code>443</code> au HTTPS.</p>" },
      { type:'code', code: "Port 80  → HTTP (web, non sécurisé)\nPort 443 → HTTPS (web, sécurisé)\nPort 21  → FTP (transfert de fichiers)\nPort 22  → SSH (contrôle à distance)" },
      { type:'tip', html:"Rappelle-toi le Chapitre 7 : quand tu appelais <code>server.listen()</code>, ton serveur \"écoutait\" en fait sur un port précis !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function nomDuPort(port) {\n  if (port === 80) return \"HTTP\";\n  if (port === 443) return \"HTTPS\";\n  return \"Inconnu\";\n}\nconsole.log(nomDuPort(443));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>nomDuPort(port)</code> : retourne <code>\"HTTP\"</code> si le port est 80, sinon <code>\"Inconnu\"</code>.",
        tabs: [{ type:'js', starter: "function nomDuPort(port) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (port === 80) { return \"HTTP\"; } return \"Inconnu\";"],
        solution: { js: "function nomDuPort(port) {\n  if (port === 80) return \"HTTP\";\n  return \"Inconnu\";\n}" },
        check(doc, win){
          if(typeof win.nomDuPort !== 'function') return { success:false, message:"Il manque une fonction nomDuPort." };
          if(win.nomDuPort(80) !== 'HTTP') return { success:false, message:"Le port 80 devrait donner \"HTTP\"." };
          if(win.nomDuPort(9999) !== 'Inconnu') return { success:false, message:"Un port inconnu devrait donner \"Inconnu\"." };
          return { success:true, message:"Tu reconnais le port du web !" };
        }
      },
      moyen: {
        instructions: "Ajoute la reconnaissance du port <code>443</code> (\"HTTPS\") en plus du port 80.",
        tabs: [{ type:'js', starter: "function nomDuPort(port) {\n  if (port === 80) return \"HTTP\";\n  // ajoute le port 443 ici\n  return \"Inconnu\";\n}" }],
        showConsole: true,
        hints: ["if (port === 443) { return \"HTTPS\"; }"],
        solution: { js: "function nomDuPort(port) {\n  if (port === 80) return \"HTTP\";\n  if (port === 443) return \"HTTPS\";\n  return \"Inconnu\";\n}" },
        check(doc, win){
          if(typeof win.nomDuPort !== 'function') return { success:false, message:"Il manque une fonction nomDuPort." };
          if(win.nomDuPort(80) !== 'HTTP' || win.nomDuPort(443) !== 'HTTPS') return { success:false, message:"Les ports 80 et 443 doivent donner HTTP et HTTPS." };
          return { success:true, message:"Les deux ports du web bien reconnus !" };
        }
      },
      difficile: {
        instructions: "Ajoute aussi les ports <code>21</code> (\"FTP\") et <code>22</code> (\"SSH\"), pour reconnaître 4 ports au total.",
        tabs: [{ type:'js', starter: "function nomDuPort(port) {\n  if (port === 80) return \"HTTP\";\n  if (port === 443) return \"HTTPS\";\n  // ajoute 21 et 22 ici\n  return \"Inconnu\";\n}" }],
        showConsole: true,
        hints: ["if (port === 21) { return \"FTP\"; }", "if (port === 22) { return \"SSH\"; }"],
        solution: { js: "function nomDuPort(port) {\n  if (port === 80) return \"HTTP\";\n  if (port === 443) return \"HTTPS\";\n  if (port === 21) return \"FTP\";\n  if (port === 22) return \"SSH\";\n  return \"Inconnu\";\n}" },
        check(doc, win){
          if(typeof win.nomDuPort !== 'function') return { success:false, message:"Il manque une fonction nomDuPort." };
          const tests = [[80,'HTTP'],[443,'HTTPS'],[21,'FTP'],[22,'SSH']];
          for(const [port, expected] of tests){
            if(win.nomDuPort(port) !== expected) return { success:false, message:`Le port ${port} devrait donner "${expected}".` };
          }
          return { success:true, message:"Tu connais les 4 ports les plus utilisés d'Internet !" };
        }
      }
    }
  },

  // ============ LEÇON 5 ============
  {
    id: 'ch11-l5',
    title: "DNS, l'annuaire géant d'Internet",
    icon: '📖',
    explanation: [
      { type:'text', heading:"Des noms plus faciles que des chiffres", html:
        "<p>Personne ne retient \"203.0.113.10\" ! Le <strong>DNS</strong> (Domain Name System) est un immense annuaire qui transforme un nom de domaine (comme <code>code-aventure.fr</code>) en la vraie adresse IP du serveur. La commande <code>nslookup</code> permet de faire cette recherche toi-même.</p>" },
      { type:'code', code: "nslookup code-aventure.fr\n→ code-aventure.fr → 203.0.113.10" },
      { type:'tip', html:"Le DNS, c'est en fait... une base de données géante (comme au Chapitre 8) ! Elle associe des noms à des adresses, exactement comme une table avec des id." },
      { type:'terminal-demo', terminalType:'net', intro:["Essaie : nslookup code-aventure.fr, puis nslookup ecole.fr"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Utilise <code>nslookup code-aventure.fr</code> pour trouver sa vraie adresse IP.",
        hints: ["nslookup code-aventure.fr"],
        solution: { terminal: "nslookup code-aventure.fr" },
        check(state){
          if(!state.history.some(h => h.trim().startsWith('nslookup'))) return { success:false, message:"Il manque une commande nslookup." };
          return { success:true, message:"Tu as trouvé l'adresse cachée derrière un nom !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Utilise <code>nslookup</code> sur DEUX domaines différents parmi : <code>code-aventure.fr</code>, <code>ecole.fr</code>, <code>jeuxenligne.fr</code>.",
        hints: ["nslookup ecole.fr", "nslookup jeuxenligne.fr"],
        solution: { terminal: "nslookup code-aventure.fr\nnslookup ecole.fr" },
        check(state){
          const lookups = state.history.filter(h => h.trim().startsWith('nslookup'));
          const targets = new Set(lookups.map(h => h.trim().split(/\s+/)[1]));
          if(targets.size < 2) return { success:false, message:"Il faut utiliser nslookup sur au moins 2 domaines différents." };
          return { success:true, message:"Tu explores l'annuaire d'Internet comme un pro !" };
        }
      },
      difficile: {
        instructions: "Complète <code>chercherDansAnnuaire(annuaire, nom)</code> qui retourne l'adresse associée à <code>nom</code> dans l'objet <code>annuaire</code>, ou <code>\"Introuvable\"</code> si le nom n'existe pas.",
        tabs: [{ type:'js', starter: "function chercherDansAnnuaire(annuaire, nom) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (annuaire[nom]) { return annuaire[nom]; } return \"Introuvable\";", "ou : return annuaire[nom] || \"Introuvable\";"],
        solution: { js: "function chercherDansAnnuaire(annuaire, nom) {\n  return annuaire[nom] || \"Introuvable\";\n}" },
        check(doc, win){
          if(typeof win.chercherDansAnnuaire !== 'function') return { success:false, message:"Il manque une fonction chercherDansAnnuaire." };
          const annuaire = { 'ecole.fr': '203.0.113.20' };
          if(win.chercherDansAnnuaire(annuaire, 'ecole.fr') !== '203.0.113.20') return { success:false, message:"La recherche d'un nom existant a échoué." };
          if(win.chercherDansAnnuaire(annuaire, 'inconnu.fr') !== 'Introuvable') return { success:false, message:"Un nom absent devrait donner \"Introuvable\"." };
          return { success:true, message:"Tu viens de recréer le fonctionnement du DNS toi-même !" };
        }
      }
    }
  },

  // ============ LEÇON 6 ============
  {
    id: 'ch11-l6',
    title: "Le modèle Client-Serveur, en détail",
    icon: '🔁',
    explanation: [
      { type:'text', heading:"Rappel du Chapitre 7, avec les réseaux en plus", html:
        "<p>Chaque fois que ton navigateur (le client) demande une page, la requête voyage à travers TOUT ce que tu viens d'apprendre : elle passe par ta box, ton FAI, utilise le DNS pour trouver l'adresse, et arrive sur le bon port du bon serveur !</p>" },
      { type:'code', code: "const server = createServer();\nserver.get(\"/qui-es-tu\", function(req, res) {\n  res.send(\"Je suis un serveur, sur le port 443 !\");\n});\nserver.listen();" },
      { type:'tip', html:"Une seule page web peut demander PLUSIEURS choses au serveur (le HTML, le CSS, les images...) — regarde l'onglet Network du Chapitre 9, tu verras toutes ces requêtes !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "const server = createServer();\nserver.get(\"/qui-es-tu\", function(req, res) {\n  res.send(\"Je suis un serveur !\");\n});\nserver.listen();\nconsole.log(request(\"GET\", \"/qui-es-tu\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée un serveur avec une route <code>/qui-es-tu</code> qui répond une phrase d'au moins 5 caractères.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["server.get(\"/qui-es-tu\", function(req, res) { res.send(\"Je suis un serveur web !\"); });"],
        solution: { js: "const server = createServer();\nserver.get(\"/qui-es-tu\", function(req, res) {\n  res.send(\"Je suis un serveur web !\");\n});\nserver.listen();" },
        check(doc, win, C){
          const r = C.request('GET', '/qui-es-tu');
          if(r.status === 404) return { success:false, message:"Il manque la route /qui-es-tu." };
          if(!r.body || String(r.body).length < 5) return { success:false, message:"La réponse devrait être une vraie phrase." };
          return { success:true, message:"Ton serveur répond correctement au client !" };
        }
      },
      moyen: {
        instructions: "Ajoute une deuxième route <code>/heure</code> qui répond avec un message différent.",
        tabs: [{ type:'js', starter: "const server = createServer();\nserver.get(\"/qui-es-tu\", function(req, res) {\n  res.send(\"Je suis un serveur web !\");\n});\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["server.get(\"/heure\", function(req, res) { res.send(\"Il est l'heure de coder !\"); });"],
        solution: { js: "const server = createServer();\nserver.get(\"/qui-es-tu\", function(req, res) {\n  res.send(\"Je suis un serveur web !\");\n});\nserver.get(\"/heure\", function(req, res) {\n  res.send(\"Il est l'heure de coder !\");\n});\nserver.listen();" },
        check(doc, win, C){
          const r1 = C.request('GET', '/qui-es-tu'), r2 = C.request('GET', '/heure');
          if(r1.status === 404 || r2.status === 404) return { success:false, message:"Il manque une des deux routes." };
          if(String(r1.body) === String(r2.body)) return { success:false, message:"Les deux routes doivent répondre des messages différents." };
          return { success:true, message:"Ton serveur gère plusieurs demandes différentes !" };
        }
      },
      difficile: {
        instructions: "Ajoute une route <code>/statut</code> qui répond en JSON un objet avec <code>en_ligne: true</code> et <code>port: 443</code>.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["res.json({ en_ligne: true, port: 443 });"],
        solution: { js: "const server = createServer();\nserver.get(\"/statut\", function(req, res) {\n  res.json({ en_ligne: true, port: 443 });\n});\nserver.listen();" },
        check(doc, win, C){
          const r = C.request('GET', '/statut');
          if(r.status === 404) return { success:false, message:"Il manque la route /statut." };
          if(!r.body || r.body.en_ligne !== true || r.body.port !== 443) return { success:false, message:"La réponse JSON devrait contenir en_ligne: true et port: 443." };
          return { success:true, message:"Un vrai statut de serveur, exactement comme sur un vrai réseau !" };
        }
      }
    }
  },

  // ============ LEÇON 7 ============
  {
    id: 'ch11-l7',
    title: "HTTP vs HTTPS : sécuriser les échanges",
    icon: '🔒',
    explanation: [
      { type:'text', heading:"Carte postale ou enveloppe scellée ?", html:
        "<p><strong>HTTP</strong> envoie les informations \"en clair\", comme une carte postale que n'importe qui pourrait lire en chemin. <strong>HTTPS</strong> (le \"S\" veut dire \"Secure\") chiffre les informations, comme une lettre dans une enveloppe scellée que seul le destinataire peut ouvrir.</p>" },
      { type:'text', heading:"Le petit cadenas", html:
        "<p>Regarde la barre d'adresse de ton navigateur : un petit <strong>cadenas 🔒</strong> à côté de l'adresse veut dire que le site utilise HTTPS. Ne tape JAMAIS de mot de passe sur un site sans ce cadenas !</p>" },
      { type:'code', code: "http://exemple.fr   ← non sécurisé\nhttps://exemple.fr  ← sécurisé (chiffré)" },
      { type:'tip', html:"Presque tous les grands sites utilisent maintenant HTTPS partout. Si tu vois \"HTTP\" sans le S sur un site qui demande des infos personnelles, sois très prudent !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function estSecurise(url) {\n  return url.startsWith(\"https://\");\n}\nconsole.log(estSecurise(\"https://exemple.fr\"));\nconsole.log(estSecurise(\"http://exemple.fr\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>estSecurise(url)</code> : retourne <code>true</code> si l'url commence par <code>\"https://\"</code>.",
        tabs: [{ type:'js', starter: "function estSecurise(url) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return url.startsWith(\"https://\");"],
        solution: { js: "function estSecurise(url) {\n  return url.startsWith(\"https://\");\n}" },
        check(doc, win){
          if(typeof win.estSecurise !== 'function') return { success:false, message:"Il manque une fonction estSecurise." };
          if(win.estSecurise('https://exemple.fr') !== true) return { success:false, message:"Une url https:// devrait être sécurisée." };
          if(win.estSecurise('http://exemple.fr') !== false) return { success:false, message:"Une url http:// ne devrait pas être sécurisée." };
          return { success:true, message:"Tu sais repérer un site sécurisé !" };
        }
      },
      moyen: {
        instructions: "Complète <code>nomDuProtocole(url)</code> : retourne <code>\"HTTPS\"</code> ou <code>\"HTTP\"</code> selon le début de l'url.",
        tabs: [{ type:'js', starter: "function nomDuProtocole(url) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (url.startsWith(\"https://\")) { return \"HTTPS\"; } return \"HTTP\";"],
        solution: { js: "function nomDuProtocole(url) {\n  if (url.startsWith(\"https://\")) return \"HTTPS\";\n  return \"HTTP\";\n}" },
        check(doc, win){
          if(typeof win.nomDuProtocole !== 'function') return { success:false, message:"Il manque une fonction nomDuProtocole." };
          if(win.nomDuProtocole('https://a.fr') !== 'HTTPS') return { success:false, message:"Une url https:// devrait donner \"HTTPS\"." };
          if(win.nomDuProtocole('http://a.fr') !== 'HTTP') return { success:false, message:"Une url http:// devrait donner \"HTTP\"." };
          return { success:true, message:"Tu identifies le bon protocole à chaque fois !" };
        }
      },
      difficile: {
        instructions: "Complète <code>urlVersHttps(url)</code> qui transforme une url <code>http://...</code> en sa version <code>https://...</code> (astuce : <code>.replace(...)</code>).",
        tabs: [{ type:'js', starter: "function urlVersHttps(url) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return url.replace(\"http://\", \"https://\");"],
        solution: { js: "function urlVersHttps(url) {\n  return url.replace(\"http://\", \"https://\");\n}" },
        check(doc, win){
          if(typeof win.urlVersHttps !== 'function') return { success:false, message:"Il manque une fonction urlVersHttps." };
          if(win.urlVersHttps('http://exemple.fr') !== 'https://exemple.fr') return { success:false, message:"http://exemple.fr devrait devenir https://exemple.fr." };
          return { success:true, message:"Tu sais sécuriser une adresse, comme un vrai expert !" };
        }
      }
    }
  },

  // ============ LEÇON 8 ============
  {
    id: 'ch11-l8',
    title: "TCP/IP : les données voyagent en paquets",
    icon: '📦',
    explanation: [
      { type:'text', heading:"Un message découpé en petits morceaux", html:
        "<p>Internet n'envoie jamais un gros message d'un coup : il le découpe en petits <strong>paquets</strong> numérotés, les envoie séparément (parfois par des chemins différents !), et l'ordinateur qui les reçoit les REMET dans l'ordre grâce à leur numéro.</p>" },
      { type:'code', code: "Message : \"Bonjour\"\nPaquet 1 : \"Bon\"\nPaquet 2 : \"jour\"" },
      { type:'tip', html:"C'est pour ça que ça marche même si un paquet met plus de temps qu'un autre à arriver : grâce aux numéros, l'ordre final est toujours correct !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "let paquets = [{num:2, data:\"jour\"}, {num:1, data:\"Bon\"}];\npaquets.sort(function(a, b) { return a.num - b.num; });\nlet message = paquets.map(function(p) { return p.data; }).join(\"\");\nconsole.log(message);" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Ces paquets sont déjà dans l'ordre. Reconstruis le message en joignant leurs <code>.data</code> (astuce : <code>.map(...).join(\"\")</code>), et affiche-le.",
        tabs: [{ type:'js', starter: "let paquets = [{num:1, data:\"Sa\"}, {num:2, data:\"lut\"}];\n\n// Reconstruis le message ici" }],
        showConsole: true,
        hints: ["let message = paquets.map(function(p) { return p.data; }).join(\"\");", "console.log(message);"],
        solution: { js: "let paquets = [{num:1, data:\"Sa\"}, {num:2, data:\"lut\"}];\nlet message = paquets.map(function(p) { return p.data; }).join(\"\");\nconsole.log(message);" },
        check(doc, win, C){
          if(!C.logsInclude('Salut')) return { success:false, message:"Le message reconstruit devrait être \"Salut\"." };
          return { success:true, message:"Ton premier message reconstruit à partir de paquets !" };
        }
      },
      moyen: {
        instructions: "Ces paquets sont MÉLANGÉS ! Trie-les d'abord par <code>.num</code> (avec <code>.sort(...)</code>), puis reconstruis le message.",
        tabs: [{ type:'js', starter: "let paquets = [{num:3, data:\"!\"}, {num:1, data:\"Co\"}, {num:2, data:\"de\"}];\n\n// Trie puis reconstruis le message ici" }],
        showConsole: true,
        hints: ["paquets.sort(function(a, b) { return a.num - b.num; });", "let message = paquets.map(function(p) { return p.data; }).join(\"\"); console.log(message);"],
        solution: { js: "let paquets = [{num:3, data:\"!\"}, {num:1, data:\"Co\"}, {num:2, data:\"de\"}];\npaquets.sort(function(a, b) { return a.num - b.num; });\nlet message = paquets.map(function(p) { return p.data; }).join(\"\");\nconsole.log(message);" },
        check(doc, win, C){
          if(!C.logsInclude('Code!')) return { success:false, message:"Une fois triés et reconstruits, le message devrait être \"Code!\"." };
          return { success:true, message:"Tu remets les paquets dans l'ordre comme un vrai réseau !" };
        }
      },
      difficile: {
        instructions: "Ces paquets contiennent un paquet EN TROP (corrompu, avec le même <code>num</code> qu'un autre). Filtre-le pour ne garder qu'un paquet par numéro, trie, puis reconstruis le message.",
        tabs: [{ type:'js', starter: "let paquets = [{num:2, data:\"jou\"}, {num:1, data:\"Bon\"}, {num:2, data:\"XX\"}, {num:3, data:\"r!\"}];\n\n// Filtre le doublon (garde le premier de chaque num), trie, reconstruis" }],
        showConsole: true,
        hints: [
          "let vus = []; let propres = paquets.filter(function(p) { if (vus.includes(p.num)) return false; vus.push(p.num); return true; });",
          "propres.sort(function(a, b) { return a.num - b.num; }); let message = propres.map(function(p) { return p.data; }).join(\"\"); console.log(message);"
        ],
        solution: { js: "let paquets = [{num:2, data:\"jou\"}, {num:1, data:\"Bon\"}, {num:2, data:\"XX\"}, {num:3, data:\"r!\"}];\nlet vus = [];\nlet propres = paquets.filter(function(p) {\n  if (vus.includes(p.num)) return false;\n  vus.push(p.num);\n  return true;\n});\npropres.sort(function(a, b) { return a.num - b.num; });\nlet message = propres.map(function(p) { return p.data; }).join(\"\");\nconsole.log(message);" },
        check(doc, win, C){
          if(!C.logsInclude('Bonjour!')) return { success:false, message:"Une fois le doublon filtré, trié et reconstruit, le message devrait être \"Bonjour!\"." };
          return { success:true, message:"Tu sais nettoyer et reconstruire des données réseau, impressionnant !" };
        }
      }
    }
  },

  // ============ LEÇON 9 ============
  {
    id: 'ch11-l9',
    title: "Le Wi-Fi et ta box internet",
    icon: '📶',
    explanation: [
      { type:'text', heading:"Le carrefour de ta maison", html:
        "<p>Ta <strong>box internet</strong> (le routeur) est le carrefour qui connecte tous tes appareils à la maison (par câble ou en <strong>Wi-Fi</strong>, des ondes radio invisibles) et les relie ensuite à Internet via ton FAI (Fournisseur d'Accès Internet).</p>" },
      { type:'text', heading:"Un chef d'orchestre local", html:
        "<p>Ta box donne une adresse IP privée à chaque appareil connecté, et se souvient de qui a demandé quoi, pour renvoyer les bonnes réponses au bon appareil !</p>" },
      { type:'tip', html:"Le mot de passe Wi-Fi n'est pas juste pour \"faire joli\" : sans lui, n'importe qui à proximité pourrait utiliser ta connexion, voire essayer d'espionner ton réseau !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function estAppareilConnectable(type) {\n  const connectables = [\"telephone\", \"ordinateur\", \"tablette\", \"tele\"];\n  return connectables.includes(type);\n}\nconsole.log(estAppareilConnectable(\"telephone\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>estAppareilConnectable(type)</code> : retourne <code>true</code> si le type est <code>\"telephone\"</code>, <code>\"ordinateur\"</code>, ou <code>\"tablette\"</code>.",
        tabs: [{ type:'js', starter: "function estAppareilConnectable(type) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["const liste = [\"telephone\", \"ordinateur\", \"tablette\"]; return liste.includes(type);"],
        solution: { js: "function estAppareilConnectable(type) {\n  const liste = [\"telephone\", \"ordinateur\", \"tablette\"];\n  return liste.includes(type);\n}" },
        check(doc, win){
          if(typeof win.estAppareilConnectable !== 'function') return { success:false, message:"Il manque une fonction estAppareilConnectable." };
          if(win.estAppareilConnectable('ordinateur') !== true) return { success:false, message:"\"ordinateur\" devrait être reconnu." };
          if(win.estAppareilConnectable('grille-pain') !== false) return { success:false, message:"\"grille-pain\" ne devrait pas être reconnu (sauf s'il est connecté, ce qui existe... mais pas ici !)." };
          return { success:true, message:"Tu identifies les appareils qui se connectent au Wi-Fi !" };
        }
      },
      moyen: {
        instructions: "Complète <code>compterAppareilsWifi(appareils)</code> qui retourne le NOMBRE d'appareils dans le tableau (astuce : <code>.length</code>).",
        tabs: [{ type:'js', starter: "function compterAppareilsWifi(appareils) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return appareils.length;"],
        solution: { js: "function compterAppareilsWifi(appareils) {\n  return appareils.length;\n}" },
        check(doc, win){
          if(typeof win.compterAppareilsWifi !== 'function') return { success:false, message:"Il manque une fonction compterAppareilsWifi." };
          if(win.compterAppareilsWifi(['PC','Tel','Tablette']) !== 3) return { success:false, message:"Avec 3 appareils dans le tableau, le résultat devrait être 3." };
          return { success:true, message:"Tu sais compter les appareils connectés au réseau de la maison !" };
        }
      },
      difficile: {
        instructions: "Complète <code>appareilsActifs(appareils)</code> qui retourne uniquement les objets où <code>connecte</code> vaut <code>true</code> (astuce : <code>.filter(...)</code>). Exemple d'entrée : <code>[{nom:\"PC\", connecte:true}, {nom:\"Tablette\", connecte:false}]</code>",
        tabs: [{ type:'js', starter: "function appareilsActifs(appareils) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return appareils.filter(function(a) { return a.connecte === true; });"],
        solution: { js: "function appareilsActifs(appareils) {\n  return appareils.filter(function(a) { return a.connecte === true; });\n}" },
        check(doc, win){
          if(typeof win.appareilsActifs !== 'function') return { success:false, message:"Il manque une fonction appareilsActifs." };
          const r = win.appareilsActifs([{nom:'PC',connecte:true},{nom:'Tablette',connecte:false},{nom:'Tel',connecte:true}]);
          if(!Array.isArray(r) || r.length !== 2) return { success:false, message:"Le résultat devrait contenir exactement 2 appareils actifs." };
          return { success:true, message:"Tu filtres les appareils vraiment connectés, comme une vraie box internet !" };
        }
      }
    }
  },

  // ============ LEÇON 10 ============
  {
    id: 'ch11-l10',
    title: "ping et traceroute : suivre le chemin",
    icon: '🛰️',
    explanation: [
      { type:'text', heading:"Voir le trajet complet d'une donnée", html:
        "<p><code>traceroute</code> (ou <code>tracert</code>) montre TOUS les \"arrêts\" (appelés \"sauts\") que fait ta donnée avant d'arriver à destination : ta box, ton FAI, puis le serveur final !</p>" },
      { type:'code', code: "traceroute ecole.fr\n1  TaBox      192.168.1.1\n2  Ton FAI    198.51.100.1\n3  Serveur    203.0.113.20" },
      { type:'tip', html:"En vrai, un vrai traceroute peut montrer 10, 15, voire 20 sauts avant d'arriver à destination — internet, c'est un énorme réseau de relais !" },
      { type:'terminal-demo', terminalType:'net', intro:["Essaie : traceroute ecole.fr"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Utilise <code>ping ecole.fr</code> pour vérifier que ce site répond.",
        hints: ["ping ecole.fr"],
        solution: { terminal: "ping ecole.fr" },
        check(state){
          const ok = state.history.some(h => {
            const parts = h.trim().split(/\s+/);
            return parts[0] === 'ping' && NetworkSim.resolve(state, parts[1]);
          });
          if(!ok) return { success:false, message:"Il manque un ping réussi." };
          return { success:true, message:"Le site répond bien !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Utilise <code>traceroute ecole.fr</code> pour voir tout le chemin parcouru jusqu'au serveur.",
        hints: ["traceroute ecole.fr"],
        solution: { terminal: "traceroute ecole.fr" },
        check(state){
          const ok = state.history.some(h => {
            const parts = h.trim().split(/\s+/);
            return (parts[0] === 'traceroute' || parts[0] === 'tracert') && NetworkSim.resolve(state, parts[1]);
          });
          if(!ok) return { success:false, message:"Il manque un traceroute réussi." };
          return { success:true, message:"Tu as vu les 3 étapes du voyage de ta requête !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Essaie d'abord <code>traceroute</code> vers un domaine qui N'EXISTE PAS (regarde le message d'erreur), puis fais un vrai <code>traceroute</code> qui réussit.",
        hints: ["traceroute domaine-invente.fr", "traceroute jeuxenligne.fr"],
        solution: { terminal: "traceroute domaine-invente.fr\ntraceroute jeuxenligne.fr" },
        check(state){
          const traces = state.history.filter(h => { const p = h.trim().split(/\s+/); return p[0] === 'traceroute' || p[0] === 'tracert'; });
          if(traces.length < 2) return { success:false, message:"Il faut essayer traceroute deux fois : une qui échoue, une qui réussit." };
          const success = traces.some(h => NetworkSim.resolve(state, h.trim().split(/\s+/)[1]));
          if(!success) return { success:false, message:"Au moins un des traceroute doit réussir." };
          return { success:true, message:"Tu as vu la différence entre un échec et une réussite réseau !" };
        }
      }
    }
  },

  // ============ LEÇON 11 ============
  {
    id: 'ch11-l11',
    title: "Le pare-feu : le videur à l'entrée",
    icon: '🧱',
    explanation: [
      { type:'text', heading:"Un videur numérique", html:
        "<p>Un <strong>pare-feu</strong> (firewall) est comme le videur à l'entrée d'une soirée : il regarde chaque connexion qui essaie d'entrer ou de sortir, et décide si elle est <strong>autorisée</strong> ou <strong>bloquée</strong>, selon des règles précises.</p>" },
      { type:'text', heading:"Premier pas vers la cybersécurité", html:
        "<p>Un pare-feu peut bloquer un port dangereux, une adresse IP suspecte, ou un programme qui essaie de communiquer sans permission. C'est l'une des toutes premières protections d'un ordinateur ou d'un réseau !</p>" },
      { type:'code', code: "function pareFeu(port) {\n  return port === 80 || port === 443; // seuls ces ports sont autorisés\n}" },
      { type:'tip', html:"On dit souvent qu'un bon pare-feu \"bloque tout par défaut\", et n'autorise QUE ce qui est nécessaire — jamais l'inverse !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function pareFeu(port) {\n  return port === 80 || port === 443;\n}\nconsole.log(pareFeu(443));\nconsole.log(pareFeu(9999));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>pareFeu(port)</code> : retourne <code>true</code> (autorisé) si le port est 80 OU 443, sinon <code>false</code> (bloqué).",
        tabs: [{ type:'js', starter: "function pareFeu(port) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return port === 80 || port === 443;"],
        solution: { js: "function pareFeu(port) {\n  return port === 80 || port === 443;\n}" },
        check(doc, win){
          if(typeof win.pareFeu !== 'function') return { success:false, message:"Il manque une fonction pareFeu." };
          if(win.pareFeu(443) !== true) return { success:false, message:"Le port 443 devrait être autorisé." };
          if(win.pareFeu(9999) !== false) return { success:false, message:"Le port 9999 devrait être bloqué." };
          return { success:true, message:"Ton premier pare-feu fonctionne !" };
        }
      },
      moyen: {
        instructions: "Complète <code>pareFeuIP(ip, listeNoire)</code> : retourne <code>false</code> (bloqué) si <code>ip</code> est dans le tableau <code>listeNoire</code>, sinon <code>true</code> (autorisé).",
        tabs: [{ type:'js', starter: "function pareFeuIP(ip, listeNoire) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return !listeNoire.includes(ip);"],
        solution: { js: "function pareFeuIP(ip, listeNoire) {\n  return !listeNoire.includes(ip);\n}" },
        check(doc, win){
          if(typeof win.pareFeuIP !== 'function') return { success:false, message:"Il manque une fonction pareFeuIP." };
          if(win.pareFeuIP('1.2.3.4', ['1.2.3.4']) !== false) return { success:false, message:"Une IP dans la liste noire devrait être bloquée (false)." };
          if(win.pareFeuIP('5.6.7.8', ['1.2.3.4']) !== true) return { success:false, message:"Une IP hors liste noire devrait être autorisée (true)." };
          return { success:true, message:"Tu sais bloquer des adresses suspectes !" };
        }
      },
      difficile: {
        instructions: "Complète <code>pareFeuComplet(port, ip, listeNoire)</code> : retourne <code>true</code> SEULEMENT si le port est autorisé (80 ou 443) ET si l'IP n'est PAS dans la liste noire (utilise <code>&&</code>).",
        tabs: [{ type:'js', starter: "function pareFeuComplet(port, ip, listeNoire) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["let portOk = (port === 80 || port === 443);", "let ipOk = !listeNoire.includes(ip);", "return portOk && ipOk;"],
        solution: { js: "function pareFeuComplet(port, ip, listeNoire) {\n  let portOk = (port === 80 || port === 443);\n  let ipOk = !listeNoire.includes(ip);\n  return portOk && ipOk;\n}" },
        check(doc, win){
          if(typeof win.pareFeuComplet !== 'function') return { success:false, message:"Il manque une fonction pareFeuComplet." };
          if(win.pareFeuComplet(443, '9.9.9.9', ['1.2.3.4']) !== true) return { success:false, message:"Bon port + IP propre devrait être autorisé." };
          if(win.pareFeuComplet(443, '1.2.3.4', ['1.2.3.4']) !== false) return { success:false, message:"Bon port mais IP dans la liste noire devrait être bloqué." };
          if(win.pareFeuComplet(9999, '9.9.9.9', ['1.2.3.4']) !== false) return { success:false, message:"Mauvais port devrait être bloqué, même avec une IP propre." };
          return { success:true, message:"Un vrai pare-feu à deux niveaux, tu es prêt pour la cybersécurité !" };
        }
      }
    }
  },

  // ============ LEÇON 12 — PROJET FINAL ============
  {
    id: 'ch11-l12',
    title: "🏆 Projet : le grand voyage d'une requête",
    icon: '🏆',
    explanation: [
      { type:'text', heading:"Tout combiner : DNS, ping, traceroute", html:
        "<p>Tu connais maintenant tout le voyage d'une requête : trouver l'adresse avec le <strong>DNS</strong>, vérifier que ça répond avec <strong>ping</strong>, et voir le chemin complet avec <strong>traceroute</strong>. Il est temps de tout combiner dans une vraie mission !</p>" },
      { type:'tip', html:"C'est exactement ce que fait ton navigateur à chaque fois que tu tapes une adresse — en une fraction de seconde, sans que tu le voies !" },
      { type:'terminal-demo', terminalType:'net', intro:["Essaie la mission complète : nslookup, puis ping, puis traceroute sur jeuxenligne.fr"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Étape 1 : utilise <code>nslookup jeuxenligne.fr</code> pour trouver son adresse IP.",
        hints: ["nslookup jeuxenligne.fr"],
        solution: { terminal: "nslookup jeuxenligne.fr" },
        check(state){
          if(!state.history.some(h => h.trim() === 'nslookup jeuxenligne.fr')) return { success:false, message:"Il manque nslookup jeuxenligne.fr." };
          return { success:true, message:"Étape 1 réussie, tu as trouvé l'adresse !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Étape 2 : maintenant utilise <code>ping jeuxenligne.fr</code> pour vérifier que le site répond bien.",
        hints: ["ping jeuxenligne.fr"],
        solution: { terminal: "ping jeuxenligne.fr" },
        check(state){
          const ok = state.history.some(h => h.trim() === 'ping jeuxenligne.fr');
          if(!ok) return { success:false, message:"Il manque ping jeuxenligne.fr." };
          return { success:true, message:"Étape 2 réussie, le site répond !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Étape 3 (finale) : utilise <code>traceroute jeuxenligne.fr</code> pour voir le chemin complet jusqu'au serveur.",
        hints: ["traceroute jeuxenligne.fr"],
        solution: { terminal: "traceroute jeuxenligne.fr" },
        check(state){
          const ok = state.history.some(h => { const p = h.trim().split(/\s+/); return (p[0]==='traceroute'||p[0]==='tracert') && p[1]==='jeuxenligne.fr'; });
          if(!ok) return { success:false, message:"Il manque traceroute jeuxenligne.fr." };
          return { success:true, message:"🏆 BRAVO ! Tu as suivi le voyage complet d'une requête, du nom de domaine jusqu'au serveur final. Chapitre 11 terminé — tu es prêt pour la cybersécurité !" };
        }
      }
    }
  }

  ]
};
