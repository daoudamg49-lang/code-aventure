const CHAPTER_12 = {
  id: 'ch12',
  title: 'Linux',
  subtitle: "Le système que presque tous les outils de sécurité utilisent",
  icon: '🐧',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch12-l1',
    title: "Qu'est-ce que Linux ?",
    icon: '🐧',
    explanation: [
      { type:'text', heading:"Un système d'exploitation pas comme les autres", html:
        "<p>Ton ordinateur utilise un <strong>système d'exploitation</strong> (rappelle-toi le Chapitre 10) : Windows (Microsoft), macOS (Apple), ou <strong>Linux</strong>. Linux est spécial : il est <strong>gratuit</strong> et <strong>\"open source\"</strong>, ce qui veut dire que son code est visible et modifiable par TOUT LE MONDE, partout dans le monde !</p>" },
      { type:'text', heading:"Le géant caché d'Internet", html:
        "<p>Tu ne le vois presque jamais, mais Linux fait tourner la majorité des serveurs d'Internet, et presque TOUS les outils de cybersécurité professionnels. Sa mascotte est un petit pingouin nommé <strong>Tux</strong> !</p>" },
      { type:'code', code: "function quiADeveloppe(systeme) {\n  if (systeme === \"Windows\") return \"Microsoft\";\n  if (systeme === \"macOS\") return \"Apple\";\n  if (systeme === \"Linux\") return \"la communauté (open source)\";\n}" },
      { type:'tip', html:"\"Open source\" veut dire que n'importe qui peut lire le code, l'améliorer, et le partager — c'est un peu comme une recette de cuisine que tout le monde peut modifier et repartager !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function quiADeveloppe(systeme) {\n  if (systeme === \"Windows\") return \"Microsoft\";\n  if (systeme === \"macOS\") return \"Apple\";\n  if (systeme === \"Linux\") return \"la communauté (open source)\";\n}\nconsole.log(quiADeveloppe(\"Linux\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>quiADeveloppe(systeme)</code> : retourne <code>\"Microsoft\"</code> pour <code>\"Windows\"</code>, sinon <code>\"Inconnu\"</code>.",
        tabs: [{ type:'js', starter: "function quiADeveloppe(systeme) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (systeme === \"Windows\") { return \"Microsoft\"; } return \"Inconnu\";"],
        solution: { js: "function quiADeveloppe(systeme) {\n  if (systeme === \"Windows\") return \"Microsoft\";\n  return \"Inconnu\";\n}" },
        check(doc, win){
          if(typeof win.quiADeveloppe !== 'function') return { success:false, message:"Il manque une fonction quiADeveloppe." };
          if(win.quiADeveloppe('Windows') !== 'Microsoft') return { success:false, message:"\"Windows\" devrait donner \"Microsoft\"." };
          return { success:true, message:"Tu connais l'origine de Windows !" };
        }
      },
      moyen: {
        instructions: "Ajoute <code>\"macOS\"</code> → <code>\"Apple\"</code> et <code>\"Linux\"</code> → <code>\"la communauté\"</code> à ta fonction.",
        tabs: [{ type:'js', starter: "function quiADeveloppe(systeme) {\n  if (systeme === \"Windows\") return \"Microsoft\";\n  // ajoute macOS et Linux ici\n  return \"Inconnu\";\n}" }],
        showConsole: true,
        hints: ["if (systeme === \"macOS\") { return \"Apple\"; }", "if (systeme === \"Linux\") { return \"la communauté\"; }"],
        solution: { js: "function quiADeveloppe(systeme) {\n  if (systeme === \"Windows\") return \"Microsoft\";\n  if (systeme === \"macOS\") return \"Apple\";\n  if (systeme === \"Linux\") return \"la communauté\";\n  return \"Inconnu\";\n}" },
        check(doc, win){
          if(typeof win.quiADeveloppe !== 'function') return { success:false, message:"Il manque une fonction quiADeveloppe." };
          if(win.quiADeveloppe('macOS') !== 'Apple') return { success:false, message:"\"macOS\" devrait donner \"Apple\"." };
          if(win.quiADeveloppe('Linux') !== 'la communauté') return { success:false, message:"\"Linux\" devrait donner \"la communauté\"." };
          return { success:true, message:"Tu connais les 3 grands systèmes d'exploitation !" };
        }
      },
      difficile: {
        instructions: "Complète <code>estOpenSource(systeme)</code> qui retourne <code>true</code> SEULEMENT pour <code>\"Linux\"</code>, sinon <code>false</code>.",
        tabs: [{ type:'js', starter: "function estOpenSource(systeme) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return systeme === \"Linux\";"],
        solution: { js: "function estOpenSource(systeme) {\n  return systeme === \"Linux\";\n}" },
        check(doc, win){
          if(typeof win.estOpenSource !== 'function') return { success:false, message:"Il manque une fonction estOpenSource." };
          if(win.estOpenSource('Linux') !== true) return { success:false, message:"\"Linux\" devrait donner true." };
          if(win.estOpenSource('Windows') !== false) return { success:false, message:"\"Windows\" devrait donner false." };
          return { success:true, message:"Tu comprends ce qui rend Linux unique !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch12-l2',
    title: "Le terminal Linux : les bases",
    icon: '⌨️',
    explanation: [
      { type:'text', heading:"Retour au terminal, en version Linux", html:
        "<p>Rappelle-toi le Chapitre 10 : <code>ls</code>, <code>pwd</code>, <code>cd</code> sont en fait de VRAIES commandes Linux ! Chaque professionnel de l'informatique, et surtout de la cybersécurité, tape ces commandes chaque jour.</p>" },
      { type:'code', code: "ls    → liste les fichiers\npwd   → où suis-je ?\ncd .. → dossier parent" },
      { type:'tip', html:"Tu vas retrouver TOUT ton petit système de fichiers du Chapitre 10 ici — mais avec beaucoup plus de commandes à découvrir dans ce chapitre !" },
      { type:'terminal-demo', terminalType:'fs', intro:["Rappel : ls, pwd, cd dossier, cd .."] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Utilise <code>ls</code> pour voir le contenu de ton dossier de départ (tu devrais voir un dossier <code>systeme</code> en plus, protégé).",
        hints: ["ls"],
        solution: { terminal: "ls" },
        check(state){
          if(!state.history.some(h => h.trim() === 'ls')) return { success:false, message:"Il manque la commande ls." };
          return { success:true, message:"Te revoilà dans le terminal, prêt pour Linux !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Entre dans <code>Images</code>, vérifie avec <code>pwd</code>, puis reviens avec <code>cd ..</code>.",
        hints: ["cd Images", "pwd", "cd .."],
        solution: { terminal: "cd Images\npwd\ncd .." },
        check(state){
          if(state.path.length !== 1) return { success:false, message:"Tu ne sembles pas être revenu à la racine." };
          if(!state.history.some(h => h.trim() === 'pwd')) return { success:false, message:"Il manque un pwd pour vérifier ta position." };
          return { success:true, message:"Navigation maîtrisée, comme un vrai utilisateur Linux !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Crée un dossier <code>Projets2</code>, entre dedans, et vérifie ta position avec <code>pwd</code> (elle doit finir par <code>Projets2</code>).",
        hints: ["mkdir Projets2", "cd Projets2", "pwd"],
        solution: { terminal: "mkdir Projets2\ncd Projets2\npwd" },
        check(state){
          if(state.path[state.path.length - 1] !== 'Projets2') return { success:false, message:"Tu ne sembles pas être dans Projets2." };
          return { success:true, message:"Tu es prêt pour la suite du chapitre !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch12-l3',
    title: "Copier et déplacer des fichiers",
    icon: '📑',
    explanation: [
      { type:'text', heading:"Dupliquer et renommer", html:
        "<p><code>cp source destination</code> copie un fichier (\"copy\"). <code>mv source destination</code> le renomme ou le déplace (\"move\"). Ce sont les mêmes actions qu'un clic droit \"Copier\"/\"Coller\" ou \"Renommer\" — mais en une seule commande !</p>" },
      { type:'code', code: "cp notes.txt notes-sauvegarde.txt\nmv notes-sauvegarde.txt archive.txt" },
      { type:'tip', html:"<code>mv</code> sert à la fois à renommer ET à déplacer : c'est la même commande pour les deux !" },
      { type:'terminal-demo', terminalType:'fs', intro:["Essaie : cp notes.txt copie.txt, puis mv copie.txt archive.txt"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Copie <code>notes.txt</code> vers un nouveau fichier <code>copie.txt</code> avec <code>cp</code>.",
        hints: ["cp notes.txt copie.txt"],
        solution: { terminal: "cp notes.txt copie.txt" },
        check(state){
          const dir = FileSystemSim.currentDir(state);
          if(!dir.children['copie.txt']) return { success:false, message:"Le fichier copie.txt n'existe pas encore." };
          if(!dir.children['notes.txt']) return { success:false, message:"notes.txt devrait toujours exister : cp garde l'original, contrairement à mv !" };
          return { success:true, message:"Ta copie a été créée avec succès !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Crée un fichier <code>brouillon.txt</code> avec <code>touch</code>, puis renomme-le en <code>final.txt</code> avec <code>mv</code>.",
        hints: ["touch brouillon.txt", "mv brouillon.txt final.txt"],
        solution: { terminal: "touch brouillon.txt\nmv brouillon.txt final.txt" },
        check(state){
          const dir = FileSystemSim.currentDir(state);
          if(dir.children['brouillon.txt']) return { success:false, message:"brouillon.txt ne devrait plus exister après le renommage." };
          if(!dir.children['final.txt']) return { success:false, message:"final.txt devrait exister." };
          return { success:true, message:"Renommage réussi avec mv !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Copie <code>notes.txt</code> vers <code>backup.txt</code>, puis renomme <code>backup.txt</code> en <code>archive.txt</code> (deux commandes différentes, l'une après l'autre).",
        hints: ["cp notes.txt backup.txt", "mv backup.txt archive.txt"],
        solution: { terminal: "cp notes.txt backup.txt\nmv backup.txt archive.txt" },
        check(state){
          const dir = FileSystemSim.currentDir(state);
          if(dir.children['backup.txt']) return { success:false, message:"backup.txt ne devrait plus exister (il a été renommé)." };
          if(!dir.children['archive.txt']) return { success:false, message:"archive.txt devrait exister à la fin." };
          if(!dir.children['notes.txt']) return { success:false, message:"notes.txt original devrait toujours exister." };
          return { success:true, message:"Tu combines cp et mv comme un pro du terminal !" };
        }
      }
    }
  },

  // ============ LEÇON 4 ============
  {
    id: 'ch12-l4',
    title: "Lire et écrire des fichiers",
    icon: '📝',
    explanation: [
      { type:'text', heading:"Voir et remplir un fichier sans éditeur", html:
        "<p><code>cat fichier</code> affiche tout le contenu d'un fichier texte (\"concatenate\"). <code>echo \"texte\" &gt; fichier</code> écrit du texte DANS un fichier (en effaçant ce qu'il y avait avant). <code>echo \"texte\" &gt;&gt; fichier</code> AJOUTE du texte à la fin, sans effacer.</p>" },
      { type:'code', code: "echo \"Bonjour !\" > message.txt\ncat message.txt\necho \"Deuxième ligne\" >> message.txt" },
      { type:'tip', html:"Un seul <code>&gt;</code> EFFACE le contenu existant. Deux <code>&gt;&gt;</code> AJOUTENT à la suite. Ne les confonds pas !" },
      { type:'terminal-demo', terminalType:'fs', intro:["Essaie : echo \"Salut !\" > message.txt, puis cat message.txt"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Écris <code>\"Bonjour Linux\"</code> dans un fichier <code>message.txt</code> avec <code>echo</code>, puis affiche son contenu avec <code>cat</code>.",
        hints: ["echo \"Bonjour Linux\" > message.txt", "cat message.txt"],
        solution: { terminal: "echo \"Bonjour Linux\" > message.txt\ncat message.txt" },
        check(state){
          const dir = FileSystemSim.currentDir(state);
          const f = dir.children['message.txt'];
          if(!f || !f.content || !f.content.includes('Bonjour Linux')) return { success:false, message:"message.txt devrait contenir \"Bonjour Linux\"." };
          if(!state.history.some(h => h.trim().startsWith('cat'))) return { success:false, message:"Il manque une commande cat pour afficher le fichier." };
          return { success:true, message:"Tu écris et lis des fichiers directement depuis le terminal !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Écris une première ligne dans <code>carnet.txt</code> avec <code>&gt;</code>, puis AJOUTE une deuxième ligne avec <code>&gt;&gt;</code> (sans effacer la première).",
        hints: ["echo \"Ligne 1\" > carnet.txt", "echo \"Ligne 2\" >> carnet.txt"],
        solution: { terminal: "echo \"Ligne 1\" > carnet.txt\necho \"Ligne 2\" >> carnet.txt" },
        check(state){
          const dir = FileSystemSim.currentDir(state);
          const f = dir.children['carnet.txt'];
          if(!f || !f.content.includes('Ligne 1') || !f.content.includes('Ligne 2')) return { success:false, message:"carnet.txt devrait contenir les deux lignes." };
          return { success:true, message:"Tu maîtrises la différence entre > et >> !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Crée DEUX fichiers différents avec des contenus différents (<code>a.txt</code> et <code>b.txt</code>), puis affiche chacun avec <code>cat</code>.",
        hints: ["echo \"Contenu A\" > a.txt", "echo \"Contenu B\" > b.txt", "cat a.txt", "cat b.txt"],
        solution: { terminal: "echo \"Contenu A\" > a.txt\necho \"Contenu B\" > b.txt\ncat a.txt\ncat b.txt" },
        check(state){
          const dir = FileSystemSim.currentDir(state);
          const a = dir.children['a.txt'], b = dir.children['b.txt'];
          if(!a || !b) return { success:false, message:"Il manque a.txt ou b.txt." };
          if(a.content === b.content || !a.content || !b.content) return { success:false, message:"Les deux fichiers doivent avoir des contenus différents et non vides." };
          return { success:true, message:"Deux fichiers bien remplis et lus, excellent !" };
        }
      }
    }
  },

  // ============ LEÇON 5 ============
  {
    id: 'ch12-l5',
    title: "Chercher avec grep",
    icon: '🔍',
    explanation: [
      { type:'text', heading:"Trouver une aiguille dans une botte de foin", html:
        "<p><code>grep \"mot\" fichier</code> cherche un mot précis à l'intérieur d'un fichier, et affiche seulement les lignes qui le contiennent. Imagine un fichier de mille lignes : <code>grep</code> te montre en une seconde exactement ce que tu cherches !</p>" },
      { type:'code', code: "grep \"erreur\" journal.txt" },
      { type:'tip', html:"Les professionnels de la cybersécurité utilisent <code>grep</code> TOUS LES JOURS pour fouiller des journaux d'activité (\"logs\") à la recherche de traces suspectes !" },
      { type:'terminal-demo', terminalType:'fs', intro:["Essaie : echo \"Le chat dort\" > phrase.txt, puis grep chat phrase.txt"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Écris <code>\"Le renard est rapide\"</code> dans <code>phrase.txt</code>, puis utilise <code>grep renard phrase.txt</code> pour le retrouver.",
        hints: ["echo \"Le renard est rapide\" > phrase.txt", "grep renard phrase.txt"],
        solution: { terminal: "echo \"Le renard est rapide\" > phrase.txt\ngrep renard phrase.txt" },
        check(state){
          const dir = FileSystemSim.currentDir(state);
          const f = dir.children['phrase.txt'];
          if(!f || !f.content.toLowerCase().includes('renard')) return { success:false, message:"phrase.txt devrait contenir le mot \"renard\"." };
          if(!state.history.some(h => h.trim().toLowerCase().startsWith('grep renard'))) return { success:false, message:"Il manque une commande grep pour chercher \"renard\"." };
          return { success:true, message:"Ta première recherche avec grep a réussi !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Utilise <code>grep</code> pour chercher un mot qui N'EXISTE PAS dans <code>notes.txt</code> (regarde le résultat), puis cherche un mot qui existe vraiment.",
        hints: ["grep zebre notes.txt", "echo \"chat\" > notes.txt puis grep chat notes.txt"],
        solution: { terminal: "grep zebre notes.txt\necho \"chat\" > notes.txt\ngrep chat notes.txt" },
        check(state){
          const greps = state.history.filter(h => h.trim().startsWith('grep'));
          if(greps.length < 2) return { success:false, message:"Il faut utiliser grep au moins 2 fois." };
          return { success:true, message:"Tu as vu la différence entre une recherche qui trouve et une qui ne trouve rien !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Utilise la version avec un <strong>pipe</strong> : <code>cat notes.txt | grep mot</code> (au lieu de <code>grep mot notes.txt</code>) — après avoir écrit un mot dedans avec echo.",
        hints: ["echo \"secret\" > notes.txt", "cat notes.txt | grep secret"],
        solution: { terminal: "echo \"secret\" > notes.txt\ncat notes.txt | grep secret" },
        check(state){
          const ok = state.history.some(h => h.includes('|') && h.toLowerCase().includes('grep'));
          if(!ok) return { success:false, message:"Il manque une commande utilisant le pipe | avec grep." };
          return { success:true, message:"Tu sais enchaîner deux commandes avec un pipe, une compétence très puissante !" };
        }
      }
    }
  },

  // ============ LEÇON 6 ============
  {
    id: 'ch12-l6',
    title: "Les permissions de fichiers",
    icon: '🔐',
    explanation: [
      { type:'text', heading:"Qui a le droit de faire quoi ?", html:
        "<p>Chaque fichier Linux a des <strong>permissions</strong> : qui peut le <strong>lire</strong> (r), <strong>écrire/modifier</strong> (w), ou <strong>exécuter</strong> (x). <code>chmod</code> change ces permissions. Elles s'écrivent souvent en 3 chiffres, comme <code>644</code> ou <code>755</code>.</p>" },
      { type:'code', code: "chmod 700 secret.txt   → seul le propriétaire peut tout faire\nchmod 644 public.txt   → tout le monde peut lire, seul toi peux modifier" },
      { type:'tip', html:"En cybersécurité, mal régler des permissions (par exemple, un fichier secret accessible à tout le monde) est une des erreurs les plus fréquentes et les plus dangereuses !" },
      { type:'terminal-demo', terminalType:'fs', intro:["Essaie : chmod 700 notes.txt"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Change les permissions de <code>notes.txt</code> en <code>700</code> (seul toi peux tout faire dessus).",
        hints: ["chmod 700 notes.txt"],
        solution: { terminal: "chmod 700 notes.txt" },
        check(state){
          const dir = FileSystemSim.currentDir(state);
          if(!dir.children['notes.txt'] || dir.children['notes.txt'].perms !== '700') return { success:false, message:"Les permissions de notes.txt ne sont pas encore 700." };
          return { success:true, message:"Tu protèges maintenant ce fichier rien que pour toi !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Crée un fichier <code>partage.txt</code>, puis règle ses permissions à <code>644</code> (tout le monde peut lire, toi seul peux modifier).",
        hints: ["touch partage.txt", "chmod 644 partage.txt"],
        solution: { terminal: "touch partage.txt\nchmod 644 partage.txt" },
        check(state){
          const dir = FileSystemSim.currentDir(state);
          if(!dir.children['partage.txt'] || dir.children['partage.txt'].perms !== '644') return { success:false, message:"partage.txt devrait avoir les permissions 644." };
          return { success:true, message:"Un fichier lisible par tous, modifiable par toi seul !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Crée un fichier <code>script.txt</code>, règle-le d'abord à <code>644</code>, puis change-le en <code>755</code> (ajout du droit d'exécution).",
        hints: ["touch script.txt", "chmod 644 script.txt", "chmod 755 script.txt"],
        solution: { terminal: "touch script.txt\nchmod 644 script.txt\nchmod 755 script.txt" },
        check(state){
          const dir = FileSystemSim.currentDir(state);
          if(!dir.children['script.txt'] || dir.children['script.txt'].perms !== '755') return { success:false, message:"script.txt devrait finir avec les permissions 755." };
          const changes = state.history.filter(h => h.trim().startsWith('chmod') && h.includes('script.txt'));
          if(changes.length < 2) return { success:false, message:"Il faut changer les permissions deux fois (644 puis 755)." };
          return { success:true, message:"Tu maîtrises les permissions comme un administrateur système !" };
        }
      }
    }
  },

  // ============ LEÇON 7 ============
  {
    id: 'ch12-l7',
    title: "Utilisateurs et super-utilisateur",
    icon: '🦸',
    explanation: [
      { type:'text', heading:"Tout le monde n'a pas les mêmes droits", html:
        "<p>Sur Linux, tu es normalement un <strong>utilisateur normal</strong>, avec des droits limités (pour ta sécurité !). Le <strong>super-utilisateur</strong> (\"root\") peut TOUT faire, même des choses dangereuses. <code>whoami</code> te dit qui tu es. <code>sudo</code> (\"super user do\") te donne les pouvoirs de root, juste pour UNE commande.</p>" },
      { type:'code', code: "whoami        → daouda\nsudo whoami   → root" },
      { type:'tip', html:"\"With great power comes great responsibility\" ! Utiliser sudo trop souvent, ou sans réfléchir, peut casser tout un système. Les vrais experts l'utilisent avec prudence." },
      { type:'terminal-demo', terminalType:'fs', intro:["Essaie : whoami, puis sudo whoami"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Utilise <code>whoami</code> pour voir quel utilisateur tu es actuellement.",
        hints: ["whoami"],
        solution: { terminal: "whoami" },
        check(state){
          if(!state.history.some(h => h.trim() === 'whoami')) return { success:false, message:"Il manque la commande whoami." };
          return { success:true, message:"Tu sais maintenant qui tu es sur le système !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Utilise <code>sudo whoami</code> pour voir ce que ça change (tu devrais voir \"root\" au lieu de ton nom).",
        hints: ["sudo whoami"],
        solution: { terminal: "sudo whoami" },
        check(state){
          if(!state.history.some(h => h.trim() === 'sudo whoami')) return { success:false, message:"Il manque la commande sudo whoami." };
          return { success:true, message:"Tu as vu la puissance (et le danger) de root !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Essaie d'abord <code>rm systeme</code> (ça va échouer, le dossier est protégé), puis réussis-le avec <code>sudo rm systeme</code>.",
        hints: ["rm systeme (échoue)", "sudo rm systeme (réussit)"],
        solution: { terminal: "rm systeme\nsudo rm systeme" },
        check(state){
          if(state.tree.children['systeme']) return { success:false, message:"Le dossier systeme existe encore : il faut réussir à le supprimer avec sudo." };
          if(!state.history.some(h => h.trim() === 'sudo rm systeme')) return { success:false, message:"Il manque la commande sudo rm systeme." };
          return { success:true, message:"Tu as vu concrètement pourquoi sudo est si puissant (et à utiliser avec précaution) !" };
        }
      }
    }
  },

  // ============ LEÇON 8 ============
  {
    id: 'ch12-l8',
    title: "Les processus",
    icon: '⚙️',
    explanation: [
      { type:'text', heading:"Tout ce qui tourne en ce moment", html:
        "<p>Un <strong>processus</strong> est un programme en train de s'exécuter, avec un numéro unique appelé <strong>PID</strong>. La commande <code>ps</code> liste tous les processus actifs. <code>kill numero-de-pid</code> arrête un processus (à utiliser avec précaution !).</p>" },
      { type:'code', code: "ps\nPID   COMMANDE\n1     systeme\n42    navigateur\n\nkill 42" },
      { type:'tip', html:"Le processus avec le PID 1 est toujours le processus \"chef d'orchestre\" du système : l'arrêter, c'est comme éteindre tout l'ordinateur d'un coup — Linux le protège donc spécialement !" },
      { type:'terminal-demo', terminalType:'fs', intro:["Essaie : ps, puis kill 42"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Utilise <code>ps</code> pour voir la liste des processus actifs.",
        hints: ["ps"],
        solution: { terminal: "ps" },
        check(state){
          if(!state.history.some(h => h.trim() === 'ps')) return { success:false, message:"Il manque la commande ps." };
          return { success:true, message:"Tu vois maintenant ce qui tourne sur le système !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Utilise <code>kill 42</code> pour arrêter le processus \"navigateur\", puis vérifie avec <code>ps</code> qu'il a disparu.",
        hints: ["kill 42", "ps"],
        solution: { terminal: "kill 42\nps" },
        check(state){
          if(state.processes.some(p => p.pid === 42)) return { success:false, message:"Le processus 42 devrait avoir été arrêté." };
          return { success:true, message:"Tu sais arrêter un processus !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Essaie <code>kill 1</code> (ça va échouer, PID 1 est protégé), puis réussis-le avec <code>sudo kill 1</code>.",
        hints: ["kill 1 (échoue)", "sudo kill 1 (réussit)"],
        solution: { terminal: "kill 1\nsudo kill 1" },
        check(state){
          if(state.processes.some(p => p.pid === 1)) return { success:false, message:"Le processus 1 devrait avoir été arrêté (avec sudo)." };
          if(!state.history.some(h => h.trim() === 'sudo kill 1')) return { success:false, message:"Il manque la commande sudo kill 1." };
          return { success:true, message:"Même le processus le plus protégé n'a pas résisté à sudo !" };
        }
      }
    }
  },

  // ============ LEÇON 9 ============
  {
    id: 'ch12-l9',
    title: "Installer des logiciels",
    icon: '📦',
    explanation: [
      { type:'text', heading:"Le magasin d'applications du terminal", html:
        "<p>Sur Linux, on installe des logiciels directement depuis le terminal, grâce à un <strong>gestionnaire de paquets</strong>. Ici, on utilise <code>installer nom-du-logiciel</code>, et <code>logiciels-installes</code> pour voir la liste de ce qu'on a déjà installé.</p>" },
      { type:'code', code: "installer nmap\nlogiciels-installes" },
      { type:'tip', html:"\"nmap\" est un vrai et célèbre outil de cybersécurité, qui sert à explorer un réseau — tu le rencontreras peut-être bientôt !" },
      { type:'terminal-demo', terminalType:'fs', intro:["Essaie : installer nmap, puis logiciels-installes"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Installe un logiciel de ton choix avec <code>installer nom-du-logiciel</code>.",
        hints: ["installer editeur-de-texte"],
        solution: { terminal: "installer editeur-de-texte" },
        check(state){
          if(state.installed.length < 1) return { success:false, message:"Il manque au moins un logiciel installé." };
          return { success:true, message:"Ton premier logiciel installé depuis le terminal !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Installe DEUX logiciels différents, puis vérifie avec <code>logiciels-installes</code>.",
        hints: ["installer navigateur", "installer editeur-de-texte", "logiciels-installes"],
        solution: { terminal: "installer navigateur\ninstaller editeur-de-texte\nlogiciels-installes" },
        check(state){
          if(state.installed.length < 2) return { success:false, message:"Il faut installer au moins 2 logiciels différents." };
          if(!state.history.some(h => h.trim() === 'logiciels-installes')) return { success:false, message:"Il manque la commande logiciels-installes pour vérifier." };
          return { success:true, message:"Tu gères tes logiciels comme un vrai administrateur !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Installe l'outil de cybersécurité <code>nmap</code>, puis vérifie qu'il apparaît bien dans <code>logiciels-installes</code>.",
        hints: ["installer nmap", "logiciels-installes"],
        solution: { terminal: "installer nmap\nlogiciels-installes" },
        check(state){
          if(!state.installed.includes('nmap')) return { success:false, message:"nmap devrait être installé." };
          return { success:true, message:"🔧 nmap installé ! Tu commences à préparer ta boîte à outils de cybersécurité." };
        }
      }
    }
  },

  // ============ LEÇON 10 ============
  {
    id: 'ch12-l10',
    title: "Combiner des commandes : les pipes",
    icon: '🔗',
    explanation: [
      { type:'text', heading:"Le pouvoir du symbole |", html:
        "<p>Le <strong>pipe</strong> (<code>|</code>) envoie le RÉSULTAT d'une commande directement comme ENTRÉE de la commande suivante. C'est la grande philosophie de Linux : plein de petits outils simples, qu'on combine pour faire des choses puissantes !</p>" },
      { type:'code', code: "cat journal.txt | grep \"erreur\"\n→ affiche seulement les lignes du journal contenant \"erreur\"" },
      { type:'tip', html:"Tu peux imaginer le pipe comme un tuyau : l'eau (les données) sort de la première commande et coule directement dans la deuxième !" },
      { type:'terminal-demo', terminalType:'fs', intro:["Essaie : echo \"chat chien poisson\" > animaux.txt, puis cat animaux.txt | grep chat"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Écris <code>\"chat chien poisson\"</code> dans <code>animaux.txt</code>, puis utilise <code>cat animaux.txt | grep chat</code>.",
        hints: ["echo \"chat chien poisson\" > animaux.txt", "cat animaux.txt | grep chat"],
        solution: { terminal: "echo \"chat chien poisson\" > animaux.txt\ncat animaux.txt | grep chat" },
        check(state){
          const ok = state.history.some(h => h.includes('|') && h.includes('grep'));
          if(!ok) return { success:false, message:"Il manque une commande avec un pipe et grep." };
          return { success:true, message:"Ton premier pipe fonctionne !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Crée un fichier avec plusieurs mots, puis utilise un pipe pour chercher un mot qui s'y trouve VRAIMENT (le résultat doit être trouvé).",
        hints: ["echo \"pomme banane cerise\" > fruits.txt", "cat fruits.txt | grep banane"],
        solution: { terminal: "echo \"pomme banane cerise\" > fruits.txt\ncat fruits.txt | grep banane" },
        check(state){
          const dir = FileSystemSim.currentDir(state);
          const pipes = state.history.filter(h => h.includes('|') && h.includes('grep'));
          if(pipes.length < 1) return { success:false, message:"Il manque une commande avec pipe + grep." };
          const target = pipes[pipes.length - 1].split('grep')[1].trim();
          const fileUsed = Object.values(dir.children).find(f => f.type === 'file' && f.content && f.content.toLowerCase().includes(target.toLowerCase()));
          if(!fileUsed) return { success:false, message:"Le mot cherché doit vraiment être présent dans un de tes fichiers." };
          return { success:true, message:"Un pipe qui trouve vraiment quelque chose, parfait !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Fais DEUX recherches par pipe : une où le mot existe, une où il n'existe PAS. Observe la différence entre les deux résultats.",
        hints: ["cat fruits.txt | grep banane (trouve)", "cat fruits.txt | grep zebre (ne trouve rien)"],
        solution: { terminal: "echo \"pomme banane cerise\" > fruits.txt\ncat fruits.txt | grep banane\ncat fruits.txt | grep zebre" },
        check(state){
          const pipes = state.history.filter(h => h.includes('|') && h.includes('grep'));
          if(pipes.length < 2) return { success:false, message:"Il faut essayer au moins 2 recherches par pipe différentes." };
          return { success:true, message:"Tu maîtrises maintenant l'un des outils les plus puissants de Linux !" };
        }
      }
    }
  },

  // ============ LEÇON 11 ============
  {
    id: 'ch12-l11',
    title: "Distributions Linux et cybersécurité",
    icon: '🎭',
    explanation: [
      { type:'text', heading:"Plein de saveurs différentes", html:
        "<p>Il existe plein de versions différentes de Linux, appelées <strong>distributions</strong>. <strong>Ubuntu</strong> est parfaite pour débuter. <strong>Debian</strong> est très stable, souvent utilisée sur les serveurs. Et <strong>Kali Linux</strong> est spécialement conçue pour la cybersécurité : elle arrive avec des CENTAINES d'outils de sécurité déjà installés !</p>" },
      { type:'code', code: "function role(distribution) {\n  if (distribution === \"Ubuntu\") return \"Débutant\";\n  if (distribution === \"Debian\") return \"Serveur\";\n  if (distribution === \"Kali\") return \"Cybersécurité\";\n  return \"Inconnu\";\n}" },
      { type:'tip', html:"Plus tard, quand tu seras prêt à installer une vraie machine virtuelle (avec un adulte), Kali Linux sera probablement la toute première distribution que tu utiliseras pour la cybersécurité !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function role(distribution) {\n  if (distribution === \"Ubuntu\") return \"Débutant\";\n  if (distribution === \"Debian\") return \"Serveur\";\n  if (distribution === \"Kali\") return \"Cybersécurité\";\n  return \"Inconnu\";\n}\nconsole.log(role(\"Kali\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>estDistributionLinux(nom)</code> : retourne <code>true</code> pour <code>\"Ubuntu\"</code>, <code>\"Debian\"</code>, ou <code>\"Kali\"</code>, sinon <code>false</code>.",
        tabs: [{ type:'js', starter: "function estDistributionLinux(nom) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["const liste = [\"Ubuntu\", \"Debian\", \"Kali\"]; return liste.includes(nom);"],
        solution: { js: "function estDistributionLinux(nom) {\n  const liste = [\"Ubuntu\", \"Debian\", \"Kali\"];\n  return liste.includes(nom);\n}" },
        check(doc, win){
          if(typeof win.estDistributionLinux !== 'function') return { success:false, message:"Il manque une fonction estDistributionLinux." };
          if(win.estDistributionLinux('Ubuntu') !== true) return { success:false, message:"\"Ubuntu\" devrait être reconnue." };
          if(win.estDistributionLinux('Windows') !== false) return { success:false, message:"\"Windows\" ne devrait pas être reconnue." };
          return { success:true, message:"Tu connais 3 grandes distributions Linux !" };
        }
      },
      moyen: {
        instructions: "Complète <code>distributionPourSecurite(nom)</code> : retourne <code>true</code> SEULEMENT pour <code>\"Kali\"</code>.",
        tabs: [{ type:'js', starter: "function distributionPourSecurite(nom) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return nom === \"Kali\";"],
        solution: { js: "function distributionPourSecurite(nom) {\n  return nom === \"Kali\";\n}" },
        check(doc, win){
          if(typeof win.distributionPourSecurite !== 'function') return { success:false, message:"Il manque une fonction distributionPourSecurite." };
          if(win.distributionPourSecurite('Kali') !== true) return { success:false, message:"\"Kali\" devrait donner true." };
          if(win.distributionPourSecurite('Ubuntu') !== false) return { success:false, message:"\"Ubuntu\" devrait donner false." };
          return { success:true, message:"Tu sais quelle distribution choisir pour la cybersécurité !" };
        }
      },
      difficile: {
        instructions: "Complète <code>role(distribution)</code> : <code>\"Ubuntu\"</code> → <code>\"Débutant\"</code>, <code>\"Debian\"</code> → <code>\"Serveur\"</code>, <code>\"Kali\"</code> → <code>\"Cybersécurité\"</code>, sinon <code>\"Inconnu\"</code>.",
        tabs: [{ type:'js', starter: "function role(distribution) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["Une chaîne de if / return, une par distribution, avec un return \"Inconnu\" à la fin."],
        solution: { js: "function role(distribution) {\n  if (distribution === \"Ubuntu\") return \"Débutant\";\n  if (distribution === \"Debian\") return \"Serveur\";\n  if (distribution === \"Kali\") return \"Cybersécurité\";\n  return \"Inconnu\";\n}" },
        check(doc, win){
          if(typeof win.role !== 'function') return { success:false, message:"Il manque une fonction role." };
          const tests = [['Ubuntu','Débutant'],['Debian','Serveur'],['Kali','Cybersécurité'],['Fedora','Inconnu']];
          for(const [d, expected] of tests){
            if(win.role(d) !== expected) return { success:false, message:`role("${d}") devrait donner "${expected}".` };
          }
          return { success:true, message:"Tu connais le monde des distributions Linux, prêt pour la suite !" };
        }
      }
    }
  },

  // ============ LEÇON 12 — PROJET FINAL ============
  {
    id: 'ch12-l12',
    title: "🏆 Projet : mission Linux complète",
    icon: '🏆',
    explanation: [
      { type:'text', heading:"Le grand final du Chapitre Linux", html:
        "<p>Il est temps de combiner TOUTES tes nouvelles compétences : navigation, fichiers, recherche, permissions, et super-utilisateur !</p>" },
      { type:'tip', html:"Ce chapitre t'a donné exactement les bases dont tu auras besoin pour utiliser de vrais outils de cybersécurité, qui tournent presque tous sur Linux !" },
      { type:'terminal-demo', terminalType:'fs', intro:["Mission : organise un dossier, écris un fichier, cherche dedans, protège-le"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Crée un dossier <code>MissionFinale</code>, entre dedans, et crée un fichier <code>rapport.txt</code>.",
        hints: ["mkdir MissionFinale", "cd MissionFinale", "touch rapport.txt"],
        solution: { terminal: "mkdir MissionFinale\ncd MissionFinale\ntouch rapport.txt" },
        check(state){
          const m = state.tree.children['MissionFinale'];
          if(!m || m.type !== 'dir') return { success:false, message:"Il manque le dossier MissionFinale." };
          if(!m.children['rapport.txt']) return { success:false, message:"Il manque rapport.txt à l'intérieur." };
          return { success:true, message:"Étape 1 terminée, ta mission commence bien !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Recrée ton dossier de mission (<code>mkdir MissionFinale</code>, <code>cd MissionFinale</code>), puis dans <code>rapport.txt</code>, écris <code>\"Mission accomplie\"</code> avec echo, et retrouve ce texte avec <code>grep</code>.",
        hints: ["mkdir MissionFinale", "cd MissionFinale", "echo \"Mission accomplie\" > rapport.txt", "grep accomplie rapport.txt"],
        solution: { terminal: "mkdir MissionFinale\ncd MissionFinale\necho \"Mission accomplie\" > rapport.txt\ngrep accomplie rapport.txt" },
        check(state){
          const m = state.tree.children['MissionFinale'];
          if(!m || !m.children['rapport.txt'] || !m.children['rapport.txt'].content.includes('Mission accomplie')) return { success:false, message:"rapport.txt devrait contenir \"Mission accomplie\"." };
          if(!state.history.some(h => h.trim().startsWith('grep'))) return { success:false, message:"Il manque une commande grep." };
          return { success:true, message:"Étape 2 terminée, ton rapport est rédigé et vérifié !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Recrée ton dossier de mission et ton rapport (<code>mkdir</code>, <code>cd</code>, <code>touch</code>), protège-le avec <code>chmod 700 rapport.txt</code>, puis vérifie tes droits avec <code>whoami</code> et <code>sudo whoami</code>.",
        hints: ["mkdir MissionFinale", "cd MissionFinale", "touch rapport.txt", "chmod 700 rapport.txt", "whoami", "sudo whoami"],
        solution: { terminal: "mkdir MissionFinale\ncd MissionFinale\ntouch rapport.txt\nchmod 700 rapport.txt\nwhoami\nsudo whoami" },
        check(state){
          const m = state.tree.children['MissionFinale'];
          if(!m || !m.children['rapport.txt'] || m.children['rapport.txt'].perms !== '700') return { success:false, message:"rapport.txt devrait avoir les permissions 700." };
          if(!state.history.some(h => h.trim() === 'sudo whoami')) return { success:false, message:"Il manque la commande sudo whoami." };
          return { success:true, message:"🏆 BRAVO ! Mission Linux complète réussie : navigation, fichiers, recherche, permissions et super-utilisateur. Chapitre 12 terminé — direction la cybersécurité !" };
        }
      }
    }
  }

  ]
};
