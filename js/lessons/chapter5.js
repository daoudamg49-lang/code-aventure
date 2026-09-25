const CHAPTER_5 = {
  id: 'ch5',
  title: 'Git & GitHub — La machine à remonter le temps',
  subtitle: 'Apprends à sauvegarder et suivre l\'histoire de ton code',
  icon: '🕰️',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch5-l1',
    title: "C'est quoi Git ?",
    icon: '🕰️',
    explanation: [
      { type:'text', heading:"Une machine à remonter le temps pour ton code", html:
        "<p><strong>Git</strong> est un outil qui garde en mémoire toutes les versions de ton code, comme un album photo qui capture chaque étape de ton projet. Si tu fais une erreur, tu peux toujours revenir en arrière !</p>" },
      { type:'text', heading:"Le terminal : parler à l'ordinateur avec des mots", html:
        "<p>Pour utiliser Git, on tape des commandes dans un <strong>terminal</strong> (au lieu de cliquer sur des boutons). Une commande Git commence toujours par le mot <code>git</code>, suivi d'une action. Par exemple : <code>git init</code> crée un nouveau dépôt (un projet suivi par Git).</p>" },
      { type:'tip', html:"Dans cette appli, tu vas t'entraîner sur un <strong>vrai faux terminal</strong> qui comprend les commandes Git : tu ne peux rien casser, alors n'hésite pas à essayer plein de choses !" },
      { type:'terminal-demo', files:['index.html','style.css'], intro:["Essaie de taper : git init"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        files: ['index.html'],
        instructions: "Initialise un dépôt Git dans ton dossier avec la commande <code>git init</code>.",
        hints: ["Tape exactement : git init", "Puis appuie sur la touche Entrée."],
        solution: { terminal: "git init" },
        check(state){
          if(!state.initialized) return { success:false, message:"Je ne vois pas encore de dépôt Git initialisé. Tape : git init" };
          return { success:true, message:"Bravo, ton dépôt Git est prêt !" };
        }
      },
      moyen: {
        kind: 'terminal',
        files: ['index.html', 'style.css'],
        instructions: "Initialise ton dépôt avec <code>git init</code>, puis vérifie son état avec <code>git status</code>.",
        hints: ["D'abord : git init", "Ensuite : git status"],
        solution: { terminal: "git init\ngit status" },
        check(state){
          if(!state.initialized) return { success:false, message:"Il manque git init." };
          if(!state.history.some(h => h.trim() === 'git status')) return { success:false, message:"Il manque la commande git status." };
          return { success:true, message:"Tu sais initialiser un dépôt et vérifier son état !" };
        }
      },
      difficile: {
        kind: 'terminal',
        files: ['index.html'],
        instructions: "Initialise ton dépôt, ajoute <code>index.html</code> avec <code>git add index.html</code>, puis vérifie avec <code>git status</code> qu'il est bien prêt à être sauvegardé.",
        hints: ["git init, puis git add index.html, puis git status", "Regarde bien le message affiché par git status : il doit parler du fichier prêt."],
        solution: { terminal: "git init\ngit add index.html\ngit status" },
        check(state){
          if(!state.initialized) return { success:false, message:"Il manque git init." };
          if(!state.files['index.html'] || !state.files['index.html'].staged) return { success:false, message:"index.html n'est pas encore ajouté (git add)." };
          if(!state.history.some(h => h.trim() === 'git status')) return { success:false, message:"Il manque un git status à la fin pour vérifier." };
          return { success:true, message:"Parfait enchaînement : init, add, status !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch5-l2',
    title: "La zone de préparation : git add",
    icon: '📥',
    explanation: [
      { type:'text', heading:"Choisir ce qu'on va sauvegarder", html:
        "<p>Avant de sauvegarder ton travail, tu dois d'abord dire à Git QUELS fichiers tu veux inclure. C'est la <strong>zone de préparation</strong> (ou \"staging\"). On y ajoute des fichiers avec <code>git add nom-du-fichier</code>.</p>" },
      { type:'code', code: "git add index.html\ngit add style.css" },
      { type:'tip', html:"Astuce : <code>git add .</code> (avec un point) ajoute TOUS les fichiers d'un coup, au lieu de les taper un par un !" },
      { type:'terminal-demo', files:['index.html','style.css','app.js'], intro:["Essaie : git init puis git add ."] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        files: ['index.html'],
        instructions: "Initialise ton dépôt, puis ajoute <code>index.html</code> à la zone de préparation.",
        hints: ["git init", "git add index.html"],
        solution: { terminal: "git init\ngit add index.html" },
        check(state){
          if(!state.initialized) return { success:false, message:"Il manque git init." };
          if(!state.files['index.html'] || !state.files['index.html'].staged) return { success:false, message:"index.html n'est pas encore ajouté." };
          return { success:true, message:"Ton fichier est prêt à être sauvegardé !" };
        }
      },
      moyen: {
        kind: 'terminal',
        files: ['index.html', 'style.css', 'app.js'],
        instructions: "Initialise ton dépôt, puis ajoute TOUS les fichiers d'un coup avec <code>git add .</code>",
        hints: ["git init", "git add .  (n'oublie pas le point !)"],
        solution: { terminal: "git init\ngit add ." },
        check(state){
          if(!state.initialized) return { success:false, message:"Il manque git init." };
          const allStaged = Object.keys(state.files).every(f => state.files[f].staged);
          if(!allStaged) return { success:false, message:"Tous tes fichiers ne sont pas encore ajoutés. Utilise git add ." };
          return { success:true, message:"Les trois fichiers sont prêts d'un seul coup, excellent !" };
        }
      },
      difficile: {
        kind: 'terminal',
        files: ['index.html', 'style.css'],
        instructions: "Ajoute SEULEMENT <code>index.html</code> (pas style.css), puis utilise <code>git status</code> pour vérifier que style.css est bien encore \"non suivi\".",
        hints: ["git init, puis git add index.html (rien d'autre !)", "Termine par git status pour vérifier."],
        solution: { terminal: "git init\ngit add index.html\ngit status" },
        check(state){
          if(!state.initialized) return { success:false, message:"Il manque git init." };
          if(!state.files['index.html'] || !state.files['index.html'].staged) return { success:false, message:"index.html devrait être ajouté." };
          if(state.files['style.css'] && state.files['style.css'].staged) return { success:false, message:"style.css ne devrait PAS être ajouté pour cet exercice." };
          if(!state.history.some(h => h.trim() === 'git status')) return { success:false, message:"Il manque un git status à la fin." };
          return { success:true, message:"Tu maîtrises l'ajout sélectif de fichiers !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch5-l3',
    title: "Sauvegarder pour de vrai : git commit",
    icon: '💾',
    explanation: [
      { type:'text', heading:"Prendre une vraie photo de ton code", html:
        "<p>Une fois tes fichiers ajoutés (<code>git add</code>), tu peux les sauvegarder pour de vrai avec <code>git commit</code>. Chaque commit a besoin d'un <strong>message</strong> qui explique ce que tu as fait : <code>git commit -m \"mon message\"</code>.</p>" },
      { type:'code', code: "git add index.html\ngit commit -m \"Ajout de la page d'accueil\"" },
      { type:'tip', html:"Écris toujours un message clair, comme si tu expliquais à un ami ce que tu viens de faire. \"Truc\" n'est pas un bon message, \"Ajout du menu de navigation\" est parfait !" },
      { type:'terminal-demo', files:['index.html'], intro:["Essaie : git init, puis git add index.html, puis git commit -m \"Premier essai\""] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        files: ['index.html'],
        instructions: "Initialise ton dépôt, ajoute <code>index.html</code>, puis fais ton premier commit avec un message.",
        hints: ["git init", "git add index.html", "git commit -m \"Ton message ici\""],
        solution: { terminal: "git init\ngit add index.html\ngit commit -m \"Premier commit\"" },
        check(state){
          if(state.commits.length < 1) return { success:false, message:"Je ne vois pas encore de commit. N'oublie pas : init, add, puis commit -m \"...\"." };
          return { success:true, message:"Ton premier commit est sauvegardé pour toujours !" };
        }
      },
      moyen: {
        kind: 'terminal',
        files: ['index.html', 'style.css'],
        instructions: "Fais DEUX commits séparés : un pour <code>index.html</code>, puis un autre pour <code>style.css</code>.",
        hints: ["git init, git add index.html, git commit -m \"...\"", "Puis : git add style.css, git commit -m \"...\" (message différent)"],
        solution: { terminal: "git init\ngit add index.html\ngit commit -m \"Ajout HTML\"\ngit add style.css\ngit commit -m \"Ajout CSS\"" },
        check(state){
          if(state.commits.length < 2) return { success:false, message:"Il me faut deux commits séparés." };
          return { success:true, message:"Deux sauvegardes bien distinctes, parfait !" };
        }
      },
      difficile: {
        kind: 'terminal',
        files: ['index.html'],
        instructions: "Essaie de faire <code>git commit -m \"test\"</code> SANS avoir fait <code>git add</code> avant, regarde le message d'erreur, puis corrige en ajoutant le fichier avant de committer.",
        hints: ["Tape d'abord git init puis directement git commit -m \"test\" : regarde ce que ça affiche.", "Puis fais git add index.html avant de recommencer le commit."],
        solution: { terminal: "git init\ngit commit -m \"test\"\ngit add index.html\ngit commit -m \"Ça marche maintenant\"" },
        check(state){
          if(state.commits.length < 1) return { success:false, message:"Ton commit final n'a pas encore réussi. N'oublie pas git add avant git commit !" };
          return { success:true, message:"Tu as compris pourquoi git add est indispensable avant de committer !" };
        }
      }
    }
  },

  // ============ LEÇON 4 ============
  {
    id: 'ch5-l4',
    title: "Consulter l'historique",
    icon: '🔍',
    explanation: [
      { type:'text', heading:"Revoir toutes tes sauvegardes", html:
        "<p><code>git log</code> affiche la liste de tous tes commits, du plus récent au plus ancien. C'est comme feuilleter l'album photo de ton projet ! Et <code>git status</code> te dit toujours où tu en es en ce moment.</p>" },
      { type:'code', code: "git log" },
      { type:'tip', html:"Utilise <code>git status</code> très souvent : c'est la commande la plus utile pour ne jamais être perdu !" },
      { type:'terminal-demo', files:['index.html'], intro:["Fais quelques commits, puis tape : git log"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        files: ['index.html'],
        instructions: "Fais un commit, puis affiche l'historique avec <code>git log</code>.",
        hints: ["git init, git add index.html, git commit -m \"...\"", "Puis : git log"],
        solution: { terminal: "git init\ngit add index.html\ngit commit -m \"Premier commit\"\ngit log" },
        check(state){
          if(state.commits.length < 1) return { success:false, message:"Il manque un commit avant de consulter l'historique." };
          if(!state.history.some(h => h.trim() === 'git log')) return { success:false, message:"Il manque la commande git log." };
          return { success:true, message:"Tu sais maintenant consulter ton historique !" };
        }
      },
      moyen: {
        kind: 'terminal',
        files: ['index.html', 'style.css'],
        instructions: "Fais deux commits séparés, puis vérifie avec <code>git log</code> qu'ils apparaissent bien tous les deux.",
        hints: ["Deux paires add+commit avec des messages différents.", "Termine par git log."],
        solution: { terminal: "git init\ngit add index.html\ngit commit -m \"HTML\"\ngit add style.css\ngit commit -m \"CSS\"\ngit log" },
        check(state){
          if(state.commits.length < 2) return { success:false, message:"Il me faut deux commits avant de vérifier le log." };
          if(!state.history.some(h => h.trim() === 'git log')) return { success:false, message:"Il manque git log à la fin." };
          return { success:true, message:"Ton historique montre bien les deux étapes !" };
        }
      },
      difficile: {
        kind: 'terminal',
        files: ['index.html', 'style.css', 'app.js'],
        instructions: "Fais TROIS commits séparés (un par fichier, avec des messages différents et clairs), puis vérifie avec <code>git log</code>.",
        hints: ["Trois paires add+commit, une par fichier.", "Chaque message doit être différent et décrire ce que tu as fait."],
        solution: { terminal: "git init\ngit add index.html\ngit commit -m \"Structure de la page\"\ngit add style.css\ngit commit -m \"Ajout des couleurs\"\ngit add app.js\ngit commit -m \"Ajout de l'interactivité\"\ngit log" },
        check(state){
          if(state.commits.length < 3) return { success:false, message:"Il me faut 3 commits séparés." };
          const messages = state.commits.map(c => c.message.toLowerCase().trim());
          if(new Set(messages).size < 3) return { success:false, message:"Tes 3 messages de commit doivent être différents." };
          if(!state.history.some(h => h.trim() === 'git log')) return { success:false, message:"Il manque git log à la fin." };
          return { success:true, message:"Trois commits bien séparés et documentés, tu es prêt pour GitHub !" };
        }
      }
    }
  },

  // ============ LEÇON 5 — PROJET FINAL ============
  {
    id: 'ch5-l5',
    title: "🏆 Projet : versionner mon mini-site",
    icon: '🏆',
    explanation: [
      { type:'text', heading:"Et GitHub dans tout ça ?", html:
        "<p><strong>GitHub</strong> est un site web où l'on peut envoyer (\"push\") ses commits, pour les partager avec le monde entier ou travailler à plusieurs sur le même projet. C'est comme mettre ton album photo Git en ligne, dans le cloud !</p>" },
      { type:'text', heading:"Le grand final de ce chapitre", html:
        "<p>Tu vas maintenant versionner un mini-site complet, comme un vrai développeur : plusieurs fichiers, plusieurs commits bien organisés, avec des messages clairs.</p>" },
      { type:'tip', html:"Plus tard, quand tu auras un vrai ordinateur configuré avec Git installé, tu pourras créer un compte sur github.com et faire un vrai <code>git push</code> pour la première fois !" },
      { type:'terminal-demo', files:['index.html','style.css','app.js'], intro:["À toi de jouer avec ton mini-site complet !"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        files: ['index.html', 'style.css', 'app.js'],
        instructions: "Initialise ton dépôt, ajoute tous les fichiers d'un coup, et fais un premier commit \"Version 1 de mon site\".",
        hints: ["git init", "git add .", "git commit -m \"Version 1 de mon site\""],
        solution: { terminal: "git init\ngit add .\ngit commit -m \"Version 1 de mon site\"" },
        check(state){
          if(!state.initialized) return { success:false, message:"Il manque git init." };
          if(state.commits.length < 1) return { success:false, message:"Il manque ton premier commit." };
          return { success:true, message:"Ta première version est sauvegardée !" };
        }
      },
      moyen: {
        kind: 'terminal',
        files: ['index.html', 'style.css', 'app.js'],
        instructions: "Fais un premier commit avec seulement <code>index.html</code>, puis un deuxième commit regroupant <code>style.css</code> ET <code>app.js</code> ensemble.",
        hints: ["git add index.html, git commit -m \"...\"", "git add style.css app.js (ou git add . après), puis git commit -m \"...\""],
        solution: { terminal: "git init\ngit add index.html\ngit commit -m \"Structure de la page\"\ngit add style.css app.js\ngit commit -m \"Style et interactivité\"" },
        check(state){
          if(state.commits.length < 2) return { success:false, message:"Il me faut deux commits." };
          if(state.commits[state.commits.length - 1].files.length < 2) return { success:false, message:"Le deuxième commit devrait regrouper 2 fichiers." };
          return { success:true, message:"Un historique bien organisé, comme un vrai projet !" };
        }
      },
      difficile: {
        kind: 'terminal',
        files: ['index.html', 'style.css', 'app.js'],
        instructions: "Sauvegarde chaque fichier dans son propre commit (3 commits), avec des messages clairs et différents, puis vérifie ton travail avec <code>git log</code> et <code>git status</code>.",
        hints: ["Trois paires add+commit, une par fichier, messages différents.", "Termine par git log puis git status."],
        solution: { terminal: "git init\ngit add index.html\ngit commit -m \"Structure HTML de la page\"\ngit add style.css\ngit commit -m \"Habillage CSS\"\ngit add app.js\ngit commit -m \"Ajout du JavaScript interactif\"\ngit log\ngit status" },
        check(state){
          if(state.commits.length < 3) return { success:false, message:"Il me faut 3 commits séparés." };
          const messages = new Set(state.commits.map(c => c.message.toLowerCase().trim()));
          if(messages.size < 3) return { success:false, message:"Tes 3 messages doivent être différents." };
          if(!state.history.some(h => h.trim() === 'git log')) return { success:false, message:"Il manque git log." };
          if(!state.history.some(h => h.trim() === 'git status')) return { success:false, message:"Il manque git status à la fin." };
          return { success:true, message:"🏆 BRAVO ! Tu sais maintenant versionner un vrai projet comme un développeur professionnel. Chapitre Git terminé !" };
        }
      }
    }
  }

  ]
};
