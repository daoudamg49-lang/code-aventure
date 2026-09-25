const CHAPTER_10 = {
  id: 'ch10',
  title: "Comment fonctionne un ordinateur",
  subtitle: "Les fondations avant de parler réseaux et sécurité",
  icon: '💻',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch10-l1',
    title: "Fichiers et dossiers",
    icon: '📁',
    explanation: [
      { type:'text', heading:"Comme des tiroirs bien rangés", html:
        "<p>Ton ordinateur range TOUT dans des <strong>fichiers</strong> (un document, une photo, un jeu...) et des <strong>dossiers</strong> (des tiroirs qui contiennent des fichiers, ou même d'autres dossiers !). Tu as déjà utilisé un terminal au Chapitre 5 (Git) : ici, on va se déplacer dans un vrai petit système de fichiers !</p>" },
      { type:'code', code: "ls    → liste ce qu'il y a ici\npwd   → où suis-je ?\ncd dossier → entre dans un dossier\ncd .. → reviens en arrière" },
      { type:'tip', html:"<code>cd</code> veut dire \"change directory\" (changer de dossier), et <code>..</code> veut toujours dire \"le dossier juste au-dessus\"." },
      { type:'terminal-demo', terminalType:'fs', intro:["Essaie : ls, puis cd Documents, puis pwd"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Utilise la commande <code>ls</code> pour voir ce qu'il y a dans ton dossier de départ.",
        hints: ["Tape simplement : ls"],
        solution: { terminal: "ls" },
        check(state){
          if(!state.history.some(h => h.trim() === 'ls')) return { success:false, message:"Il manque la commande ls." };
          return { success:true, message:"Tu vois maintenant le contenu de ton dossier !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Entre dans le dossier <code>Documents</code> avec <code>cd Documents</code>, puis vérifie où tu es avec <code>pwd</code>.",
        hints: ["cd Documents", "pwd"],
        solution: { terminal: "cd Documents\npwd" },
        check(state){
          if(state.path[state.path.length - 1] !== 'Documents') return { success:false, message:"Tu ne sembles pas être dans le dossier Documents." };
          if(!state.history.some(h => h.trim() === 'pwd')) return { success:false, message:"Il manque la commande pwd pour vérifier." };
          return { success:true, message:"Tu sais te déplacer dans les dossiers !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Entre dans <code>Images</code>, puis reviens en arrière avec <code>cd ..</code>, et vérifie avec <code>pwd</code> que tu es revenu à la racine (<code>~</code>).",
        hints: ["cd Images", "cd ..", "pwd"],
        solution: { terminal: "cd Images\ncd ..\npwd" },
        check(state){
          const cdCount = state.history.filter(h => h.trim().startsWith('cd')).length;
          if(cdCount < 2) return { success:false, message:"Il faut utiliser cd deux fois (aller puis revenir)." };
          if(state.path.length !== 1) return { success:false, message:"Tu ne sembles pas être revenu à la racine." };
          return { success:true, message:"Aller et revenir, tu maîtrises la navigation !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch10-l2',
    title: "Créer et organiser",
    icon: '🗂️',
    explanation: [
      { type:'text', heading:"Construire son propre rangement", html:
        "<p><code>mkdir nom</code> crée un nouveau dossier (\"make directory\"). <code>touch nom</code> crée un nouveau fichier vide. C'est exactement ce qui se passe quand tu cliques sur \"Nouveau dossier\" avec la souris — sauf qu'ici, tu le fais avec des mots !</p>" },
      { type:'code', code: "mkdir Projets\ncd Projets\ntouch idee.txt" },
      { type:'tip', html:"Bien organiser ses dossiers dès le début, c'est comme ranger sa chambre : ça prend un peu de temps, mais on retrouve tout beaucoup plus vite après !" },
      { type:'terminal-demo', terminalType:'fs', intro:["Essaie : mkdir Projets, puis cd Projets, puis touch idee.txt"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Crée un nouveau dossier appelé <code>Projets</code> avec <code>mkdir Projets</code>.",
        hints: ["mkdir Projets"],
        solution: { terminal: "mkdir Projets" },
        check(state){
          if(!state.tree.children['Projets'] || state.tree.children['Projets'].type !== 'dir') return { success:false, message:"Le dossier Projets n'a pas encore été créé." };
          return { success:true, message:"Ton premier dossier créé avec le terminal !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Crée un dossier <code>Projets</code>, entre dedans, puis crée un fichier <code>idee.txt</code> à l'intérieur.",
        hints: ["mkdir Projets", "cd Projets", "touch idee.txt"],
        solution: { terminal: "mkdir Projets\ncd Projets\ntouch idee.txt" },
        check(state){
          const p = state.tree.children['Projets'];
          if(!p || p.type !== 'dir') return { success:false, message:"Le dossier Projets n'existe pas." };
          if(!p.children['idee.txt']) return { success:false, message:"Le fichier idee.txt n'a pas été créé à l'intérieur de Projets." };
          return { success:true, message:"Un dossier avec un fichier dedans, bien organisé !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Crée DEUX dossiers différents à la racine (par exemple <code>Projets</code> et <code>Archives</code>), puis vérifie avec <code>ls</code>.",
        hints: ["mkdir Projets", "mkdir Archives", "ls"],
        solution: { terminal: "mkdir Projets\nmkdir Archives\nls" },
        check(state){
          const dirs = Object.keys(state.tree.children).filter(n => state.tree.children[n].type === 'dir');
          if(dirs.length < 4) return { success:false, message:"Il me faut au moins 2 nouveaux dossiers en plus de ceux déjà présents." };
          if(!state.history.some(h => h.trim() === 'ls')) return { success:false, message:"Il manque un ls pour vérifier." };
          return { success:true, message:"Ton espace de travail s'organise bien !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch10-l3',
    title: "Mémoire vive et stockage",
    icon: '🧠',
    explanation: [
      { type:'text', heading:"Deux mémoires très différentes", html:
        "<p>Ton ordinateur a deux types de \"mémoire\". La <strong>RAM</strong> (mémoire vive) est comme une <strong>table de travail</strong> : super rapide, mais tout ce qui est dessus disparaît quand tu éteins l'ordinateur. Le <strong>disque dur</strong> (ou SSD) est comme une <strong>armoire</strong> : plus lent, mais tout ce que tu y ranges reste, même éteint !</p>" },
      { type:'text', heading:"Tu connais déjà ça !", html:
        "<p>Rappelle-toi le Chapitre 6 : une variable normale (<code>let x = ...</code>) fonctionne comme la RAM — elle disparaît quand la page recharge. <code>localStorage</code> fonctionne comme le disque dur : ça reste, même après avoir fermé la page !</p>" },
      { type:'code', code: "let enMemoire = \"Je vais disparaître\"; // RAM\nlocalStorage.setItem(\"surDisque\", \"Je reste !\"); // Disque dur" },
      { type:'tip', html:"C'est pour ça qu'un jeu vidéo te demande parfois de \"sauvegarder\" : sans ça, ta progression resterait seulement dans la RAM, et disparaîtrait en éteignant la console !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "let enRAM = \"Je disparais si tu recharges\";\nlocalStorage.setItem(\"surDisque\", \"Je reste enregistré !\");\nconsole.log(\"RAM : \" + enRAM);\nconsole.log(\"Disque : \" + localStorage.getItem(\"surDisque\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Sauvegarde ton prénom sur le \"disque dur\" avec <code>localStorage.setItem(\"prenom_disque\", ...)</code>, puis affiche-le avec console.log.",
        tabs: [{ type:'js', starter: "" }],
        showConsole: true,
        hints: ["localStorage.setItem(\"prenom_disque\", \"Daouda\");", "console.log(localStorage.getItem(\"prenom_disque\"));"],
        solution: { js: "localStorage.setItem(\"prenom_disque\", \"Daouda\");\nconsole.log(localStorage.getItem(\"prenom_disque\"));" },
        check(doc, win, C){
          const v = win.localStorage.getItem('prenom_disque');
          if(!v) return { success:false, message:"Rien n'est sauvegardé sous la clé \"prenom_disque\"." };
          if(!C.logsInclude(v)) return { success:false, message:"Affiche la valeur sauvegardée avec console.log." };
          return { success:true, message:"Cette donnée est maintenant \"sur le disque dur\" !" };
        }
      },
      moyen: {
        instructions: "Crée une variable normale (RAM) ET une entrée localStorage (disque) avec des valeurs différentes, puis affiche les deux avec console.log.",
        tabs: [{ type:'js', starter: "" }],
        showConsole: true,
        hints: ["let enRAM = \"...\"; localStorage.setItem(\"cle\", \"...\");", "console.log(enRAM); console.log(localStorage.getItem(\"cle\"));"],
        solution: { js: "let enRAM = \"Valeur temporaire\";\nlocalStorage.setItem(\"cle\", \"Valeur permanente\");\nconsole.log(enRAM);\nconsole.log(localStorage.getItem(\"cle\"));" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/(let|const)\s+\w+/.test(js)) return { success:false, message:"Il manque une variable normale (RAM)." };
          if(!js.includes('localStorage.setItem')) return { success:false, message:"Il manque une sauvegarde dans localStorage (disque)." };
          if(logs.length < 2) return { success:false, message:"Affiche les deux valeurs avec console.log." };
          return { success:true, message:"Tu distingues bien la RAM et le disque dur !" };
        }
      },
      difficile: {
        instructions: "Crée un compteur qui se sauvegarde sur le \"disque\" : lis la valeur actuelle (ou 0 si elle n'existe pas encore), ajoute 1, et sauvegarde le résultat.",
        tabs: [{ type:'js', starter: "// Lis la valeur actuelle de localStorage (ou 0 par défaut)\n// Ajoute 1\n// Sauvegarde le résultat\n// Affiche le résultat avec console.log" }],
        showConsole: true,
        hints: [
          "let compte = Number(localStorage.getItem(\"compteur\")) || 0;",
          "compte = compte + 1; localStorage.setItem(\"compteur\", compte); console.log(compte);"
        ],
        solution: { js: "let compte = Number(localStorage.getItem(\"compteur\")) || 0;\ncompte = compte + 1;\nlocalStorage.setItem(\"compteur\", compte);\nconsole.log(compte);" },
        check(doc, win, C){
          const v = win.localStorage.getItem('compteur');
          if(!v || Number(v) < 1) return { success:false, message:"Le compteur devrait être sauvegardé avec une valeur d'au moins 1." };
          if(!C.logsInclude(String(Number(v)))) return { success:false, message:"Affiche le résultat avec console.log." };
          return { success:true, message:"Un compteur persistant, exactement comme une vraie sauvegarde !" };
        }
      }
    }
  },

  // ============ LEÇON 4 — PROJET FINAL ============
  {
    id: 'ch10-l4',
    title: "🏆 Projet : organise ton espace de travail",
    icon: '🏆',
    explanation: [
      { type:'text', heading:"Le grand final du Chapitre 10", html:
        "<p>Tu vas construire une vraie petite arborescence de projet, comme le font les développeurs professionnels avant de commencer à coder !</p>" },
      { type:'tip', html:"Un bon système de dossiers, c'est un projet qui reste compréhensible même des mois plus tard !" },
      { type:'terminal-demo', terminalType:'fs', intro:["Construis : MonSite/ contenant index.html et un dossier images/"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Crée un dossier <code>MonSite</code> pour ton futur projet.",
        hints: ["mkdir MonSite"],
        solution: { terminal: "mkdir MonSite" },
        check(state){
          if(!state.tree.children['MonSite'] || state.tree.children['MonSite'].type !== 'dir') return { success:false, message:"Le dossier MonSite n'existe pas encore." };
          return { success:true, message:"Ton dossier de projet est créé !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Entre dans <code>MonSite</code> et crée deux fichiers : <code>index.html</code> et <code>style.css</code>.",
        hints: ["cd MonSite", "touch index.html", "touch style.css"],
        solution: { terminal: "mkdir MonSite\ncd MonSite\ntouch index.html\ntouch style.css" },
        check(state){
          const s = state.tree.children['MonSite'];
          if(!s || s.type !== 'dir') return { success:false, message:"Il manque le dossier MonSite." };
          if(!s.children['index.html'] || !s.children['style.css']) return { success:false, message:"Il manque index.html ou style.css à l'intérieur de MonSite." };
          return { success:true, message:"Tes fichiers de projet sont bien rangés !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "À l'intérieur de <code>MonSite</code>, crée un sous-dossier <code>images</code>, entre dedans, et vérifie avec <code>pwd</code> que tu es bien à <code>~/MonSite/images</code>.",
        hints: ["cd MonSite (si ce n'est pas déjà fait)", "mkdir images", "cd images", "pwd"],
        solution: { terminal: "mkdir MonSite\ncd MonSite\nmkdir images\ncd images\npwd" },
        check(state){
          if(state.path.join('/') !== '~/MonSite/images') return { success:false, message:"Tu ne sembles pas être dans ~/MonSite/images. Vérifie ton chemin avec pwd." };
          return { success:true, message:"🏆 BRAVO ! Tu sais construire une vraie arborescence de projet organisée. Chapitre 10 terminé !" };
        }
      }
    }
  }

  ]
};
