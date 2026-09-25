const CHAPTER_14 = {
  id: 'ch14',
  title: 'Ton labo de hacker éthique',
  subtitle: "Installer et utiliser VirtualBox + Kali Linux en toute sécurité",
  icon: '🧪',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch14-l1',
    title: "Pourquoi un labo virtuel ?",
    icon: '🔬',
    explanation: [
      { type:'text', heading:"S'entraîner sans jamais faire de mal", html:
        "<p>Depuis le Chapitre 13, tu sais qu'un hacker éthique n'agit <strong>JAMAIS</strong> sans autorisation. Alors comment s'entraîner à scanner, attaquer, trouver des failles… sans toucher au vrai Internet ? Réponse : on construit un <strong>labo virtuel</strong>, un petit monde fermé rien qu'à toi, avec tes propres machines, où tu as le droit de tout essayer.</p>" },
      { type:'text', heading:"Deux machines, un seul ordinateur", html:
        "<p>Dans ton labo, tu vas créer <strong>deux machines virtuelles</strong> à l'intérieur de ton vrai ordinateur : <strong>VM-Kali</strong> (l'attaquant, avec tous les outils de sécurité) et <strong>VM-Cible</strong> (une machine volontairement pleine de failles, faite EXPRÈS pour être attaquée). Les deux t'appartiennent, donc tu as le droit d'agir dessus.</p>" },
      { type:'code', code: "function estDansMonLabo(machine) {\n  const monLabo = [\"VM-Kali\", \"VM-Cible\"];\n  return monLabo.includes(machine);\n}" },
      { type:'tip', html:"Une machine virtuelle qui n'est PAS dans ton labo (le site d'une entreprise, l'ordinateur d'un ami...) reste soumise à la même règle d'or : jamais sans autorisation écrite." },
      { type:'demo', tabs:[{ type:'js', starter:
        "function estDansMonLabo(machine) {\n  const monLabo = [\"VM-Kali\", \"VM-Cible\"];\n  return monLabo.includes(machine);\n}\nconsole.log(estDansMonLabo(\"VM-Kali\"));\nconsole.log(estDansMonLabo(\"site-de-la-banque.fr\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>estDansMonLabo(machine)</code> : retourne <code>true</code> seulement si <code>machine</code> est <code>\"VM-Kali\"</code> ou <code>\"VM-Cible\"</code>.",
        tabs: [{ type:'js', starter: "function estDansMonLabo(machine) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["const monLabo = [\"VM-Kali\", \"VM-Cible\"];", "return monLabo.includes(machine);"],
        solution: { js: "function estDansMonLabo(machine) {\n  const monLabo = [\"VM-Kali\", \"VM-Cible\"];\n  return monLabo.includes(machine);\n}" },
        check(doc, win){
          if(typeof win.estDansMonLabo !== 'function') return { success:false, message:"Il manque une fonction estDansMonLabo." };
          if(win.estDansMonLabo('VM-Kali') !== true) return { success:false, message:"\"VM-Kali\" fait partie de ton labo." };
          if(win.estDansMonLabo('site-de-la-banque.fr') !== false) return { success:false, message:"Un vrai site externe n'est PAS dans ton labo." };
          return { success:true, message:"Tu sais reconnaître ce qui t'appartient !" };
        }
      },
      moyen: {
        instructions: "Complète <code>peutSentrainer(machine, aAutorisationEcrite)</code> : retourne <code>true</code> si la machine est dans ton labo, <strong>OU</strong> si tu as une autorisation écrite pour une machine externe.",
        tabs: [{ type:'js', starter: "function estDansMonLabo(machine) {\n  const monLabo = [\"VM-Kali\", \"VM-Cible\"];\n  return monLabo.includes(machine);\n}\n\nfunction peutSentrainer(machine, aAutorisationEcrite) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return estDansMonLabo(machine) || aAutorisationEcrite === true;"],
        solution: { js: "function estDansMonLabo(machine) {\n  const monLabo = [\"VM-Kali\", \"VM-Cible\"];\n  return monLabo.includes(machine);\n}\nfunction peutSentrainer(machine, aAutorisationEcrite) {\n  return estDansMonLabo(machine) || aAutorisationEcrite === true;\n}" },
        check(doc, win){
          if(typeof win.peutSentrainer !== 'function') return { success:false, message:"Il manque une fonction peutSentrainer." };
          if(win.peutSentrainer('VM-Cible', false) !== true) return { success:false, message:"Ta propre VM-Cible est toujours autorisée." };
          if(win.peutSentrainer('site-externe.fr', false) !== false) return { success:false, message:"Sans autorisation écrite, un site externe est interdit." };
          if(win.peutSentrainer('site-externe.fr', true) !== true) return { success:false, message:"Avec autorisation écrite, un site externe devient possible." };
          return { success:true, message:"Tu combines bien les deux conditions !" };
        }
      },
      difficile: {
        instructions: "Complète <code>listeMachinesAutorisees(machines, autorisations)</code> : reçoit un tableau de noms et un tableau de booléens (même longueur), et retourne un tableau contenant uniquement les noms des machines autorisées (dans le labo OU avec autorisation écrite).",
        tabs: [{ type:'js', starter: "function estDansMonLabo(machine) {\n  const monLabo = [\"VM-Kali\", \"VM-Cible\"];\n  return monLabo.includes(machine);\n}\n\nfunction listeMachinesAutorisees(machines, autorisations) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: [
          "let resultat = [];",
          "for (let i = 0; i < machines.length; i++) { if (estDansMonLabo(machines[i]) || autorisations[i]) resultat.push(machines[i]); }",
          "return resultat;"
        ],
        solution: { js: "function estDansMonLabo(machine) {\n  const monLabo = [\"VM-Kali\", \"VM-Cible\"];\n  return monLabo.includes(machine);\n}\nfunction listeMachinesAutorisees(machines, autorisations) {\n  let resultat = [];\n  for (let i = 0; i < machines.length; i++) {\n    if (estDansMonLabo(machines[i]) || autorisations[i]) resultat.push(machines[i]);\n  }\n  return resultat;\n}" },
        check(doc, win){
          if(typeof win.listeMachinesAutorisees !== 'function') return { success:false, message:"Il manque une fonction listeMachinesAutorisees." };
          const r = win.listeMachinesAutorisees(['VM-Kali', 'ecole.fr', 'jeuxenligne.fr'], [false, true, false]);
          if(!Array.isArray(r) || r.length !== 2 || !r.includes('VM-Kali') || !r.includes('ecole.fr')) return { success:false, message:"Le résultat devrait contenir exactement [\"VM-Kali\", \"ecole.fr\"]." };
          return { success:true, message:"Tu sais filtrer une liste entière de cibles autorisées, comme un vrai audit !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch14-l2',
    title: "Qu'est-ce qu'une machine virtuelle ?",
    icon: '💻',
    explanation: [
      { type:'text', heading:"Un ordinateur dans l'ordinateur", html:
        "<p>Une <strong>machine virtuelle</strong> (VM) est un ordinateur complet simulé par un logiciel, qui tourne À L'INTÉRIEUR de ton vrai ordinateur. Ton vrai ordinateur s'appelle l'<strong>hôte</strong>. Chaque machine virtuelle dedans s'appelle un <strong>invité</strong>. Le logiciel qui gère tout ça s'appelle un <strong>hyperviseur</strong> — <strong>VirtualBox</strong> en est un, gratuit et très utilisé.</p>" },
      { type:'text', heading:"Pourquoi c'est parfait pour s'entraîner", html:
        "<p>Une VM est <strong>isolée</strong> : ce qui se passe dedans (virus, mauvaise commande, fichier supprimé par erreur) ne peut normalement pas sortir et abîmer ton vrai ordinateur. Si tu casses tout dans ta VM… tu la supprimes et tu en recrées une neuve en quelques minutes !</p>" },
      { type:'code', code: "function role(machine) {\n  if (machine === \"hôte\") return \"Ton vrai ordinateur, celui qui fait tourner tout le reste\";\n  if (machine === \"invité\") return \"La machine virtuelle simulée à l'intérieur\";\n}" },
      { type:'tip', html:"Une VM te donne un super-pouvoir : le droit à l'erreur total. Aucun vrai hacker ne s'entraîne directement sur son vrai système !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function role(machine) {\n  if (machine === \"hôte\") return \"Ton vrai ordinateur, celui qui fait tourner tout le reste\";\n  if (machine === \"invité\") return \"La machine virtuelle simulée à l'intérieur\";\n  return \"Inconnu\";\n}\nconsole.log(role(\"hôte\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>role(machine)</code> : retourne la bonne description pour <code>\"hôte\"</code> et <code>\"invité\"</code>, sinon <code>\"Inconnu\"</code>.",
        tabs: [{ type:'js', starter: "function role(machine) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (machine === \"hôte\") return \"Ton vrai ordinateur, celui qui fait tourner tout le reste\";", "if (machine === \"invité\") return \"La machine virtuelle simulée à l'intérieur\";", "return \"Inconnu\";"],
        solution: { js: "function role(machine) {\n  if (machine === \"hôte\") return \"Ton vrai ordinateur, celui qui fait tourner tout le reste\";\n  if (machine === \"invité\") return \"La machine virtuelle simulée à l'intérieur\";\n  return \"Inconnu\";\n}" },
        check(doc, win){
          if(typeof win.role !== 'function') return { success:false, message:"Il manque une fonction role." };
          if(win.role('hôte') !== "Ton vrai ordinateur, celui qui fait tourner tout le reste") return { success:false, message:"La description de \"hôte\" n'est pas correcte." };
          if(win.role('invité') !== "La machine virtuelle simulée à l'intérieur") return { success:false, message:"La description de \"invité\" n'est pas correcte." };
          return { success:true, message:"Tu distingues bien l'hôte et l'invité !" };
        }
      },
      moyen: {
        instructions: "Complète <code>peutRecreer(typeMachine)</code> : retourne <code>true</code> seulement pour <code>\"invité\"</code> (une VM se recrée facilement en cas de casse ; l'hôte, non !).",
        tabs: [{ type:'js', starter: "function peutRecreer(typeMachine) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return typeMachine === \"invité\";"],
        solution: { js: "function peutRecreer(typeMachine) {\n  return typeMachine === \"invité\";\n}" },
        check(doc, win){
          if(typeof win.peutRecreer !== 'function') return { success:false, message:"Il manque une fonction peutRecreer." };
          if(win.peutRecreer('invité') !== true) return { success:false, message:"Une VM (invité) se recrée facilement." };
          if(win.peutRecreer('hôte') !== false) return { success:false, message:"L'hôte (ton vrai ordinateur) ne se recrée pas en un clic !" };
          return { success:true, message:"Tu comprends l'avantage principal des VM !" };
        }
      },
      difficile: {
        instructions: "Complète <code>ramSuffisante(ramHoteMo, nbVmSimultanees)</code> : chaque VM a besoin d'au moins 2048 Mo pour bien tourner, PLUS il faut garder au moins 2048 Mo pour l'hôte. Retourne <code>true</code> si <code>ramHoteMo</code> est suffisante pour faire tourner <code>nbVmSimultanees</code> VM en même temps.",
        tabs: [{ type:'js', starter: "function ramSuffisante(ramHoteMo, nbVmSimultanees) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["let besoin = (nbVmSimultanees * 2048) + 2048;", "return ramHoteMo >= besoin;"],
        solution: { js: "function ramSuffisante(ramHoteMo, nbVmSimultanees) {\n  let besoin = (nbVmSimultanees * 2048) + 2048;\n  return ramHoteMo >= besoin;\n}" },
        check(doc, win){
          if(typeof win.ramSuffisante !== 'function') return { success:false, message:"Il manque une fonction ramSuffisante." };
          if(win.ramSuffisante(8192, 2) !== true) return { success:false, message:"8192 Mo devraient suffire pour 2 VM (2048*2 + 2048 = 6144)." };
          if(win.ramSuffisante(4096, 2) !== false) return { success:false, message:"4096 Mo ne devraient PAS suffire pour 2 VM (il en faudrait 6144)." };
          return { success:true, message:"Tu sais calculer si un ordinateur peut faire tourner ton labo complet !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch14-l3',
    title: "Installer VirtualBox",
    icon: '📦',
    explanation: [
      { type:'text', heading:"Le guide, étape par étape (avec un adulte)", html:
        "<p>VirtualBox est <strong>gratuit</strong> et fonctionne sur Windows, Mac et Linux. Voici les vraies étapes à suivre avec un adulte :</p><p>1. Va sur <strong>virtualbox.org</strong> (toujours l'adresse officielle !)<br>2. Clique sur \"Downloads\", puis choisis la version pour ton système (Windows/Mac/Linux)<br>3. Lance le fichier téléchargé et suis l'installation (les réglages par défaut suffisent)<br>4. Redémarre l'ordinateur si on te le demande</p>" },
      { type:'text', heading:"Vérifier avant d'installer", html:
        "<p>Ton ordinateur a besoin d'un minimum de ressources : au moins <strong>4 Go de RAM</strong> disponibles (8 Go ou plus, c'est confortable) et au moins <strong>20 Go d'espace disque libre</strong> par machine virtuelle que tu comptes créer.</p>" },
      { type:'code', code: "function configValide(ramDispoMo, disqueLibreGo) {\n  return ramDispoMo >= 4096 && disqueLibreGo >= 20;\n}" },
      { type:'tip', html:"Ne télécharge JAMAIS VirtualBox depuis un autre site qu'virtualbox.org, même si un résultat de recherche semble officiel : c'est une technique classique pour piéger les gens (rappelle-toi le phishing, Chapitre 13) !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function configValide(ramDispoMo, disqueLibreGo) {\n  return ramDispoMo >= 4096 && disqueLibreGo >= 20;\n}\nconsole.log(configValide(8192, 50));\nconsole.log(configValide(2048, 50));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>configValide(ramDispoMo, disqueLibreGo)</code> : retourne <code>true</code> seulement si la RAM disponible est d'au moins 4096 Mo ET le disque libre d'au moins 20 Go.",
        tabs: [{ type:'js', starter: "function configValide(ramDispoMo, disqueLibreGo) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return ramDispoMo >= 4096 && disqueLibreGo >= 20;"],
        solution: { js: "function configValide(ramDispoMo, disqueLibreGo) {\n  return ramDispoMo >= 4096 && disqueLibreGo >= 20;\n}" },
        check(doc, win){
          if(typeof win.configValide !== 'function') return { success:false, message:"Il manque une fonction configValide." };
          if(win.configValide(8192, 50) !== true) return { success:false, message:"8192 Mo de RAM et 50 Go de disque devraient être valides." };
          if(win.configValide(2048, 50) !== false) return { success:false, message:"2048 Mo de RAM ne suffisent pas." };
          return { success:true, message:"Tu sais vérifier si un ordinateur est prêt pour VirtualBox !" };
        }
      },
      moyen: {
        instructions: "Complète <code>estSiteOfficiel(url)</code> : retourne <code>true</code> seulement si l'url commence exactement par <code>\"https://www.virtualbox.org\"</code>.",
        tabs: [{ type:'js', starter: "function estSiteOfficiel(url) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return url.startsWith(\"https://www.virtualbox.org\");"],
        solution: { js: "function estSiteOfficiel(url) {\n  return url.startsWith(\"https://www.virtualbox.org\");\n}" },
        check(doc, win){
          if(typeof win.estSiteOfficiel !== 'function') return { success:false, message:"Il manque une fonction estSiteOfficiel." };
          if(win.estSiteOfficiel('https://www.virtualbox.org/wiki/Downloads') !== true) return { success:false, message:"Le vrai site officiel devrait être accepté." };
          if(win.estSiteOfficiel('https://virtualbox-telecharger-gratuit.com') !== false) return { success:false, message:"Un site imitant le nom ne devrait pas être accepté." };
          return { success:true, message:"Tu sais repérer la vraie source officielle !" };
        }
      },
      difficile: {
        instructions: "Complète <code>peutInstaller(url, ramDispoMo, disqueLibreGo)</code> qui combine les deux vérifications précédentes : le site doit être officiel ET la configuration doit être valide.",
        tabs: [{ type:'js', starter: "function estSiteOfficiel(url) {\n  return url.startsWith(\"https://www.virtualbox.org\");\n}\nfunction configValide(ramDispoMo, disqueLibreGo) {\n  return ramDispoMo >= 4096 && disqueLibreGo >= 20;\n}\n\nfunction peutInstaller(url, ramDispoMo, disqueLibreGo) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return estSiteOfficiel(url) && configValide(ramDispoMo, disqueLibreGo);"],
        solution: { js: "function estSiteOfficiel(url) {\n  return url.startsWith(\"https://www.virtualbox.org\");\n}\nfunction configValide(ramDispoMo, disqueLibreGo) {\n  return ramDispoMo >= 4096 && disqueLibreGo >= 20;\n}\nfunction peutInstaller(url, ramDispoMo, disqueLibreGo) {\n  return estSiteOfficiel(url) && configValide(ramDispoMo, disqueLibreGo);\n}" },
        check(doc, win){
          if(typeof win.peutInstaller !== 'function') return { success:false, message:"Il manque une fonction peutInstaller." };
          if(win.peutInstaller('https://www.virtualbox.org/wiki/Downloads', 8192, 50) !== true) return { success:false, message:"Avec un site officiel et une bonne config, ça devrait être true." };
          if(win.peutInstaller('https://faux-site.com', 8192, 50) !== false) return { success:false, message:"Un faux site devrait toujours être refusé, même avec une bonne config." };
          if(win.peutInstaller('https://www.virtualbox.org/wiki/Downloads', 1024, 50) !== false) return { success:false, message:"Une config insuffisante devrait toujours être refusée." };
          return { success:true, message:"Tu es prêt(e) à installer VirtualBox correctement et en sécurité !" };
        }
      }
    }
  },

  // ============ LEÇON 4 ============
  {
    id: 'ch14-l4',
    title: "Installer Kali Linux",
    icon: '🐉',
    explanation: [
      { type:'text', heading:"Qu'est-ce que Kali Linux ?", html:
        "<p><strong>Kali Linux</strong> est une distribution Linux (souviens-toi du Chapitre 12 !) spécialement conçue pour la cybersécurité : elle arrive déjà avec des centaines d'outils préinstallés (nmap, Metasploit, Wireshark...). C'est l'outil de travail numéro 1 des hackers éthiques professionnels.</p>" },
      { type:'text', heading:"Les vraies étapes d'installation", html:
        "<p>1. Va sur <strong>kali.org</strong>, section \"Get Kali\" → \"Virtual Machines\" (choisis directement l'image toute prête pour VirtualBox, c'est le plus simple)<br>2. Télécharge le fichier <code>.ova</code><br>3. Dans VirtualBox, fais \"Fichier → Importer un appareil virtuel\" et sélectionne le fichier téléchargé<br>4. Donne-lui au moins 2 Go de RAM et 2 processeurs virtuels, puis démarre-la<br>5. Connecte-toi avec les identifiants par défaut indiqués sur le site officiel</p>" },
      { type:'code', code: "function estImageOfficielle(nomFichier) {\n  return nomFichier.endsWith(\".ova\") && !nomFichier.includes(\"crack\");\n}" },
      { type:'tip', html:"Vérifie toujours le <strong>checksum</strong> (l'empreinte numérique) du fichier téléchargé par rapport à celui affiché sur kali.org : ça garantit que le fichier n'a pas été modifié par quelqu'un de malveillant en cours de route !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function checksumValide(recu, attendu) {\n  return recu === attendu;\n}\nconsole.log(checksumValide(\"a1b2c3\", \"a1b2c3\"));\nconsole.log(checksumValide(\"a1b2c3\", \"x9y8z7\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>checksumValide(recu, attendu)</code> : retourne <code>true</code> si les deux empreintes sont identiques.",
        tabs: [{ type:'js', starter: "function checksumValide(recu, attendu) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return recu === attendu;"],
        solution: { js: "function checksumValide(recu, attendu) {\n  return recu === attendu;\n}" },
        check(doc, win){
          if(typeof win.checksumValide !== 'function') return { success:false, message:"Il manque une fonction checksumValide." };
          if(win.checksumValide('a1b2c3', 'a1b2c3') !== true) return { success:false, message:"Deux empreintes identiques devraient être valides." };
          if(win.checksumValide('a1b2c3', 'x9y8z7') !== false) return { success:false, message:"Deux empreintes différentes ne devraient PAS être valides." };
          return { success:true, message:"Tu sais vérifier l'intégrité d'un téléchargement !" };
        }
      },
      moyen: {
        instructions: "Complète <code>configVmValide(ramMo, nbCpu)</code> : retourne <code>true</code> si <code>ramMo >= 2048</code> ET <code>nbCpu >= 2</code>, les réglages minimum recommandés pour Kali.",
        tabs: [{ type:'js', starter: "function configVmValide(ramMo, nbCpu) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return ramMo >= 2048 && nbCpu >= 2;"],
        solution: { js: "function configVmValide(ramMo, nbCpu) {\n  return ramMo >= 2048 && nbCpu >= 2;\n}" },
        check(doc, win){
          if(typeof win.configVmValide !== 'function') return { success:false, message:"Il manque une fonction configVmValide." };
          if(win.configVmValide(4096, 2) !== true) return { success:false, message:"4096 Mo et 2 CPU devraient être valides." };
          if(win.configVmValide(1024, 1) !== false) return { success:false, message:"1024 Mo et 1 CPU ne sont pas suffisants." };
          return { success:true, message:"Tu sais configurer correctement ta VM Kali !" };
        }
      },
      difficile: {
        instructions: "Complète <code>peutDemarrerKali(source, checksumOk, ramMo, nbCpu)</code> : retourne <code>true</code> SEULEMENT si la source est <code>\"kali.org\"</code>, ET le checksum est bon, ET la config VM est valide (au moins 2048 Mo et 2 CPU).",
        tabs: [{ type:'js', starter: "function peutDemarrerKali(source, checksumOk, ramMo, nbCpu) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: [
          "let sourceOk = source === \"kali.org\";",
          "let configOk = ramMo >= 2048 && nbCpu >= 2;",
          "return sourceOk && checksumOk && configOk;"
        ],
        solution: { js: "function peutDemarrerKali(source, checksumOk, ramMo, nbCpu) {\n  let sourceOk = source === \"kali.org\";\n  let configOk = ramMo >= 2048 && nbCpu >= 2;\n  return sourceOk && checksumOk && configOk;\n}" },
        check(doc, win){
          if(typeof win.peutDemarrerKali !== 'function') return { success:false, message:"Il manque une fonction peutDemarrerKali." };
          if(win.peutDemarrerKali('kali.org', true, 4096, 2) !== true) return { success:false, message:"Toutes les conditions réunies devraient donner true." };
          if(win.peutDemarrerKali('site-pirate.com', true, 4096, 2) !== false) return { success:false, message:"Une mauvaise source devrait toujours être refusée." };
          if(win.peutDemarrerKali('kali.org', false, 4096, 2) !== false) return { success:false, message:"Un checksum invalide devrait toujours être refusé." };
          return { success:true, message:"Ta VM Kali est prête à démarrer en toute confiance !" };
        }
      }
    }
  },

  // ============ LEÇON 5 ============
  {
    id: 'ch14-l5',
    title: "Premiers pas dans le terminal de Kali",
    icon: '⌨️',
    explanation: [
      { type:'text', heading:"Retour au terminal Linux", html:
        "<p>Kali Linux utilise EXACTEMENT les commandes que tu as apprises au Chapitre 12 ! <code>whoami</code>, <code>ls</code>, <code>pwd</code>, <code>cd</code>, <code>sudo</code>... tout fonctionne pareil. La différence : plein d'outils de sécurité sont déjà installés et prêts à l'emploi.</p>" },
      { type:'text', heading:"sudo, le mot magique", html:
        "<p>Beaucoup d'outils de sécurité ont besoin des <strong>droits administrateur</strong> pour fonctionner (par exemple pour scanner un réseau en profondeur). On les lance alors avec <code>sudo</code> devant, comme tu l'as appris au Chapitre 12.</p>" },
      { type:'code', code: "whoami\n→ kali\n\nsudo nmap -sS cible.lab\n→ (lance un scan avec les droits administrateur)" },
      { type:'tip', html:"Entraîne-toi ci-dessous avec le simulateur de terminal, exactement comme au Chapitre 12 !" },
      { type:'terminal-demo', terminalType:'fs', intro:["Bienvenue sur ta VM Kali (simulée) !", "Essaie : whoami, puis ls, puis sudo ls systeme"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Tape <code>whoami</code> pour vérifier avec quel utilisateur tu es connecté sur ta VM Kali.",
        hints: ["whoami"],
        solution: { terminal: "whoami" },
        check(state){
          if(!state.history.some(h => h.trim() === 'whoami')) return { success:false, message:"Il manque la commande whoami." };
          return { success:true, message:"Tu sais qui tu es dans ton terminal Kali !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Le dossier <code>systeme</code> est protégé. Essaie d'y entrer avec <code>cd systeme</code>, puis utilise <code>sudo</code> pour l'explorer avec les droits administrateur : <code>sudo ls systeme</code>.",
        hints: ["cd systeme", "sudo ls systeme"],
        solution: { terminal: "cd systeme\nsudo ls systeme" },
        check(state){
          if(!state.history.some(h => h.trim().startsWith('sudo'))) return { success:false, message:"Il manque une commande avec sudo." };
          return { success:true, message:"Tu sais utiliser les droits administrateur quand c'est nécessaire !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Crée un dossier <code>rapport-labo</code>, entre dedans, et crée un fichier <code>notes.txt</code> à l'intérieur — pour garder une trace de tes futures expériences.",
        hints: ["mkdir rapport-labo", "cd rapport-labo", "touch notes.txt"],
        solution: { terminal: "mkdir rapport-labo\ncd rapport-labo\ntouch notes.txt" },
        check(state){
          const hasDir = state.history.some(h => h.trim() === 'mkdir rapport-labo');
          const hasCd = state.history.some(h => h.trim() === 'cd rapport-labo');
          const hasTouch = state.history.some(h => h.trim() === 'touch notes.txt');
          if(!hasDir || !hasCd || !hasTouch) return { success:false, message:"Il faut créer le dossier, y entrer, ET créer le fichier notes.txt." };
          return { success:true, message:"Ton dossier de rapport de labo est prêt, comme un vrai professionnel !" };
        }
      }
    }
  },

  // ============ LEÇON 6 ============
  {
    id: 'ch14-l6',
    title: "Isoler le réseau de ton labo",
    icon: '🔌',
    explanation: [
      { type:'text', heading:"La règle de sécurité la plus importante du chapitre", html:
        "<p>Quand tu crées une VM, VirtualBox te demande son <strong>mode réseau</strong>. C'est une décision CRUCIALE : elle détermine si ta VM (surtout ta VM-Cible, pleine de failles exprès) peut être vue depuis l'extérieur.</p>" },
      { type:'text', heading:"Les 3 modes principaux", html:
        "<p><strong>NAT</strong> : la VM peut sortir vers Internet, mais personne dehors ne peut entrer directement (assez sûr). <strong>Bridged (Pont)</strong> : la VM apparaît comme un vrai appareil sur TON réseau local, visible par tous les autres appareils de la maison (risqué pour une cible volontairement vulnérable !). <strong>Host-only / Interne</strong> : la VM ne parle qu'aux autres VM du labo, complètement coupée d'Internet (le plus sûr pour attaquer ta VM-Cible).</p>" },
      { type:'code', code: "function modeSecuritaire(mode) {\n  return mode === \"host-only\" || mode === \"interne\";\n}" },
      { type:'tip', html:"Pour ta VM-Cible volontairement truffée de failles : utilise TOUJOURS le mode Host-only ou Interne. En mode Bridged, elle serait visible (et attaquable !) par n'importe qui sur ton réseau Wi-Fi." },
      { type:'demo', tabs:[{ type:'js', starter:
        "function modeSecuritaire(mode) {\n  return mode === \"host-only\" || mode === \"interne\";\n}\nconsole.log(modeSecuritaire(\"host-only\"));\nconsole.log(modeSecuritaire(\"bridged\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>modeSecuritaire(mode)</code> : retourne <code>true</code> seulement pour <code>\"host-only\"</code> ou <code>\"interne\"</code>.",
        tabs: [{ type:'js', starter: "function modeSecuritaire(mode) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return mode === \"host-only\" || mode === \"interne\";"],
        solution: { js: "function modeSecuritaire(mode) {\n  return mode === \"host-only\" || mode === \"interne\";\n}" },
        check(doc, win){
          if(typeof win.modeSecuritaire !== 'function') return { success:false, message:"Il manque une fonction modeSecuritaire." };
          if(win.modeSecuritaire('host-only') !== true) return { success:false, message:"\"host-only\" est un mode sécuritaire." };
          if(win.modeSecuritaire('bridged') !== false) return { success:false, message:"\"bridged\" n'est PAS sécuritaire pour une cible vulnérable." };
          return { success:true, message:"Tu connais les modes réseau sûrs pour ton labo !" };
        }
      },
      moyen: {
        instructions: "Complète <code>choisirMode(vmEstVulnerable)</code> : si la VM est volontairement vulnérable, retourne <code>\"host-only\"</code>, sinon retourne <code>\"NAT\"</code> (pour une VM normale qui a juste besoin d'Internet).",
        tabs: [{ type:'js', starter: "function choisirMode(vmEstVulnerable) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (vmEstVulnerable) return \"host-only\";", "return \"NAT\";"],
        solution: { js: "function choisirMode(vmEstVulnerable) {\n  if (vmEstVulnerable) return \"host-only\";\n  return \"NAT\";\n}" },
        check(doc, win){
          if(typeof win.choisirMode !== 'function') return { success:false, message:"Il manque une fonction choisirMode." };
          if(win.choisirMode(true) !== 'host-only') return { success:false, message:"Une VM vulnérable devrait être en host-only." };
          if(win.choisirMode(false) !== 'NAT') return { success:false, message:"Une VM normale peut être en NAT." };
          return { success:true, message:"Tu sais choisir le bon mode selon la situation !" };
        }
      },
      difficile: {
        instructions: "Complète <code>configReseauValide(modeKali, modeCible)</code> : la VM-Kali peut être en <code>\"NAT\"</code> ou <code>\"host-only\"</code>, MAIS la VM-Cible DOIT toujours être en <code>\"host-only\"</code>. Retourne <code>true</code> seulement si les deux respectent ces règles.",
        tabs: [{ type:'js', starter: "function configReseauValide(modeKali, modeCible) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: [
          "let kaliOk = modeKali === \"NAT\" || modeKali === \"host-only\";",
          "let cibleOk = modeCible === \"host-only\";",
          "return kaliOk && cibleOk;"
        ],
        solution: { js: "function configReseauValide(modeKali, modeCible) {\n  let kaliOk = modeKali === \"NAT\" || modeKali === \"host-only\";\n  let cibleOk = modeCible === \"host-only\";\n  return kaliOk && cibleOk;\n}" },
        check(doc, win){
          if(typeof win.configReseauValide !== 'function') return { success:false, message:"Il manque une fonction configReseauValide." };
          if(win.configReseauValide('NAT', 'host-only') !== true) return { success:false, message:"Kali en NAT et Cible en host-only devrait être valide." };
          if(win.configReseauValide('NAT', 'bridged') !== false) return { success:false, message:"La Cible en bridged devrait TOUJOURS être refusée." };
          return { success:true, message:"Ton labo est configuré de façon totalement sécurisée !" };
        }
      }
    }
  },

  // ============ LEÇON 7 ============
  {
    id: 'ch14-l7',
    title: "Créer une VM-Cible volontairement vulnérable",
    icon: '🎯',
    explanation: [
      { type:'text', heading:"Des machines faites EXPRÈS pour être piratées", html:
        "<p>Il existe des machines virtuelles téléchargeables gratuitement, créées volontairement avec plein de failles de sécurité, pour que les gens s'entraînent légalement. Les plus connues : <strong>Metasploitable2</strong> (un serveur Linux troué de partout) et <strong>DVWA</strong> (\"Damn Vulnerable Web Application\", un site web plein de failles classiques).</p>" },
      { type:'text', heading:"Pourquoi c'est légal", html:
        "<p>Contrairement à un vrai site, ces machines sont <strong>publiées exprès</strong> par leurs créateurs pour être attaquées, dans un cadre d'apprentissage — c'est écrit noir sur blanc dans leur documentation. Ça change tout : l'autorisation existe déjà !</p>" },
      { type:'code', code: "function estCibleAutorisee(nom) {\n  const ciblesConnues = [\"Metasploitable\", \"DVWA\"];\n  return ciblesConnues.includes(nom);\n}" },
      { type:'tip', html:"Télécharge toujours ces machines cibles depuis leur page officielle (sourceforge.net pour Metasploitable, GitHub officiel pour DVWA), jamais depuis un lien random trouvé ailleurs." },
      { type:'demo', tabs:[{ type:'js', starter:
        "function estCibleAutorisee(nom) {\n  const ciblesConnues = [\"Metasploitable\", \"DVWA\"];\n  return ciblesConnues.includes(nom);\n}\nconsole.log(estCibleAutorisee(\"Metasploitable\"));\nconsole.log(estCibleAutorisee(\"vrai-site-inconnu.com\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>estCibleAutorisee(nom)</code> : retourne <code>true</code> seulement pour <code>\"Metasploitable\"</code> ou <code>\"DVWA\"</code>.",
        tabs: [{ type:'js', starter: "function estCibleAutorisee(nom) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["const ciblesConnues = [\"Metasploitable\", \"DVWA\"];", "return ciblesConnues.includes(nom);"],
        solution: { js: "function estCibleAutorisee(nom) {\n  const ciblesConnues = [\"Metasploitable\", \"DVWA\"];\n  return ciblesConnues.includes(nom);\n}" },
        check(doc, win){
          if(typeof win.estCibleAutorisee !== 'function') return { success:false, message:"Il manque une fonction estCibleAutorisee." };
          if(win.estCibleAutorisee('Metasploitable') !== true) return { success:false, message:"\"Metasploitable\" est une cible autorisée." };
          if(win.estCibleAutorisee('vrai-site-inconnu.com') !== false) return { success:false, message:"Un vrai site inconnu n'est pas une cible autorisée d'office." };
          return { success:true, message:"Tu reconnais les cibles d'entraînement légales !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Simule l'installation de ta cible d'entraînement : utilise <code>installer Metasploitable</code>, puis vérifie avec <code>logiciels-installes</code>.",
        hints: ["installer Metasploitable", "logiciels-installes"],
        solution: { terminal: "installer Metasploitable\nlogiciels-installes" },
        check(state){
          if(!state.history.some(h => h.trim() === 'installer Metasploitable')) return { success:false, message:"Il manque la commande installer Metasploitable." };
          if(!state.history.some(h => h.trim() === 'logiciels-installes')) return { success:false, message:"Vérifie l'installation avec logiciels-installes." };
          return { success:true, message:"Ta cible d'entraînement est prête dans ton labo !" };
        }
      },
      difficile: {
        instructions: "Complète <code>rapportInstallation(nom, source)</code> : retourne <code>\"OK\"</code> seulement si <code>nom</code> est une cible connue (Metasploitable ou DVWA) ET <code>source</code> est <code>\"officielle\"</code>. Sinon retourne <code>\"REFUSÉ\"</code>.",
        tabs: [{ type:'js', starter: "function estCibleAutorisee(nom) {\n  const ciblesConnues = [\"Metasploitable\", \"DVWA\"];\n  return ciblesConnues.includes(nom);\n}\n\nfunction rapportInstallation(nom, source) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (estCibleAutorisee(nom) && source === \"officielle\") return \"OK\";", "return \"REFUSÉ\";"],
        solution: { js: "function estCibleAutorisee(nom) {\n  const ciblesConnues = [\"Metasploitable\", \"DVWA\"];\n  return ciblesConnues.includes(nom);\n}\nfunction rapportInstallation(nom, source) {\n  if (estCibleAutorisee(nom) && source === \"officielle\") return \"OK\";\n  return \"REFUSÉ\";\n}" },
        check(doc, win){
          if(typeof win.rapportInstallation !== 'function') return { success:false, message:"Il manque une fonction rapportInstallation." };
          if(win.rapportInstallation('Metasploitable', 'officielle') !== 'OK') return { success:false, message:"Une cible connue depuis une source officielle devrait donner OK." };
          if(win.rapportInstallation('Metasploitable', 'lien-inconnu') !== 'REFUSÉ') return { success:false, message:"Même une bonne cible depuis une mauvaise source doit être refusée." };
          return { success:true, message:"Tu vérifies toujours la cible ET la source avant d'installer, en vrai pro !" };
        }
      }
    }
  },

  // ============ LEÇON 8 ============
  {
    id: 'ch14-l8',
    title: "Scanner ta cible avec nmap",
    icon: '📡',
    explanation: [
      { type:'text', heading:"nmap, l'outil numéro 1", html:
        "<p><strong>nmap</strong> est l'outil de scan réseau le plus utilisé au monde par les professionnels de la sécurité. Rappelle-toi le Chapitre 13 : <code>scan adresse</code> montre les ports ouverts. C'est une version simplifiée de la vraie commande <code>nmap adresse</code> que tu taperais dans ta vraie VM Kali !</p>" },
      { type:'text', heading:"Lire un résultat de scan", html:
        "<p>Chaque port ouvert est une porte potentielle. Sur ta VM-Cible (volontairement truffée de failles), tu vas trouver BEAUCOUP plus de portes ouvertes que sur un serveur normal bien configuré : c'est fait exprès pour que tu t'entraînes à toutes les repérer !</p>" },
      { type:'code', code: "scan cible-entrainement.lab\nPort 21 (FTP) : OUVERT\nPort 22 (SSH) : OUVERT\nPort 80 (HTTP) : OUVERT\nPort 3306 (MySQL) : OUVERT   ← une base de données exposée, très risqué !" },
      { type:'tip', html:"Une base de données (MySQL, port 3306) directement accessible depuis l'extérieur est une faille grave : dans un vrai audit, ce serait un des tout premiers points signalés !" },
      { type:'terminal-demo', terminalType:'net', intro:["Essaie : scan cible-entrainement.lab, puis compare avec scan code-aventure.fr"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Scanne ta cible d'entraînement avec <code>scan cible-entrainement.lab</code> et regarde tous les ports ouverts.",
        hints: ["scan cible-entrainement.lab"],
        solution: { terminal: "scan cible-entrainement.lab" },
        check(state){
          if(!state.history.some(h => h.trim() === 'scan cible-entrainement.lab')) return { success:false, message:"Il manque la commande scan cible-entrainement.lab." };
          return { success:true, message:"Tu as scanné ta première cible d'entraînement !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Scanne ta cible, puis utilise <code>ping cible-entrainement.lab</code> pour vérifier qu'elle répond bien avant l'attaque.",
        hints: ["scan cible-entrainement.lab", "ping cible-entrainement.lab"],
        solution: { terminal: "scan cible-entrainement.lab\nping cible-entrainement.lab" },
        check(state){
          const hasScan = state.history.some(h => h.trim() === 'scan cible-entrainement.lab');
          const hasPing = state.history.some(h => h.trim() === 'ping cible-entrainement.lab');
          if(!hasScan || !hasPing) return { success:false, message:"Il faut scanner ET pinguer la cible." };
          return { success:true, message:"Tu combines plusieurs outils de reconnaissance, comme un vrai audit !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Scanne à la fois <code>cible-entrainement.lab</code> (ta cible volontairement vulnérable) et <code>code-aventure.fr</code> (un site normal), pour comparer le nombre de ports ouverts sur chacun.",
        hints: ["scan cible-entrainement.lab", "scan code-aventure.fr"],
        solution: { terminal: "scan cible-entrainement.lab\nscan code-aventure.fr" },
        check(state){
          const scans = new Set(state.history.filter(h => h.trim().startsWith('scan')).map(h => h.trim().split(/\s+/)[1]));
          if(!scans.has('cible-entrainement.lab') || !scans.has('code-aventure.fr')) return { success:false, message:"Il faut scanner les deux domaines pour comparer." };
          return { success:true, message:"Tu viens de comparer la surface d'attaque d'une machine truffée de failles et d'un site bien configuré, exactement comme un vrai audit de sécurité !" };
        }
      }
    }
  },

  // ============ LEÇON 9 ============
  {
    id: 'ch14-l9',
    title: "La charte du hacker éthique",
    icon: '📜',
    explanation: [
      { type:'text', heading:"Ce que dit vraiment la loi", html:
        "<p>Accéder à un système informatique sans autorisation est un <strong>délit</strong> dans presque tous les pays (en France par exemple, la \"loi Godfrain\"), même si tu ne voles rien et même si tu \"répares\" la faille après. Peu importe ton intention : sans autorisation écrite, c'est interdit.</p>" },
      { type:'text', heading:"Que faire si tu trouves une vraie faille ?", html:
        "<p>Si un jour (bien plus tard) tu remarques une faille sur un vrai site par accident : tu ne l'exploites JAMAIS. Tu en parles à un adulte, qui peut la signaler via un programme officiel de \"divulgation responsable\" (\"responsible disclosure\") de l'entreprise concernée. Beaucoup de grandes entreprises récompensent même ceux qui signalent ainsi (\"bug bounty\") !</p>" },
      { type:'code', code: "function queFaireSi(situation) {\n  if (situation === \"faille trouvée sur vrai site\") return \"En parler à un adulte, jamais l'exploiter\";\n  if (situation === \"faille trouvée sur VM-Cible\") return \"S'entraîner librement, c'est ton labo\";\n}" },
      { type:'tip', html:"La différence entre un hacker éthique respecté et un criminel n'est presque jamais la compétence technique : c'est TOUJOURS l'autorisation." },
      { type:'demo', tabs:[{ type:'js', starter:
        "function queFaireSi(situation) {\n  if (situation === \"faille trouvée sur vrai site\") return \"En parler à un adulte, jamais l'exploiter\";\n  if (situation === \"faille trouvée sur VM-Cible\") return \"S'entraîner librement, c'est ton labo\";\n  return \"Réfléchir avant d'agir\";\n}\nconsole.log(queFaireSi(\"faille trouvée sur vrai site\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>queFaireSi(situation)</code> : retourne la bonne réaction pour les deux situations données, sinon <code>\"Réfléchir avant d'agir\"</code>.",
        tabs: [{ type:'js', starter: "function queFaireSi(situation) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (situation === \"faille trouvée sur vrai site\") return \"En parler à un adulte, jamais l'exploiter\";", "if (situation === \"faille trouvée sur VM-Cible\") return \"S'entraîner librement, c'est ton labo\";", "return \"Réfléchir avant d'agir\";"],
        solution: { js: "function queFaireSi(situation) {\n  if (situation === \"faille trouvée sur vrai site\") return \"En parler à un adulte, jamais l'exploiter\";\n  if (situation === \"faille trouvée sur VM-Cible\") return \"S'entraîner librement, c'est ton labo\";\n  return \"Réfléchir avant d'agir\";\n}" },
        check(doc, win){
          if(typeof win.queFaireSi !== 'function') return { success:false, message:"Il manque une fonction queFaireSi." };
          if(win.queFaireSi('faille trouvée sur vrai site') !== "En parler à un adulte, jamais l'exploiter") return { success:false, message:"Sur un vrai site, il ne faut jamais exploiter la faille soi-même." };
          if(win.queFaireSi('faille trouvée sur VM-Cible') !== "S'entraîner librement, c'est ton labo") return { success:false, message:"Sur ta propre VM-Cible, tu peux t'entraîner librement." };
          return { success:true, message:"Tu sais réagir de la bonne façon selon la situation !" };
        }
      },
      moyen: {
        instructions: "Complète <code>estDelit(cible, aAutorisation)</code> : retourne <code>true</code> (c'est un délit) si <code>cible</code> n'est PAS dans ton labo ET tu n'as PAS d'autorisation écrite.",
        tabs: [{ type:'js', starter: "function estDelit(cible, aAutorisation) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["const monLabo = [\"VM-Kali\", \"VM-Cible\"];", "if (monLabo.includes(cible)) return false;", "return aAutorisation !== true;"],
        solution: { js: "function estDelit(cible, aAutorisation) {\n  const monLabo = [\"VM-Kali\", \"VM-Cible\"];\n  if (monLabo.includes(cible)) return false;\n  return aAutorisation !== true;\n}" },
        check(doc, win){
          if(typeof win.estDelit !== 'function') return { success:false, message:"Il manque une fonction estDelit." };
          if(win.estDelit('VM-Cible', false) !== false) return { success:false, message:"Attaquer ta propre VM-Cible n'est jamais un délit." };
          if(win.estDelit('site-inconnu.com', false) !== true) return { success:false, message:"Attaquer un site externe sans autorisation EST un délit." };
          if(win.estDelit('site-inconnu.com', true) !== false) return { success:false, message:"Avec une autorisation écrite, ce n'est plus un délit." };
          return { success:true, message:"Tu comprends précisément où se trouve la limite légale !" };
        }
      },
      difficile: {
        instructions: "Complète <code>signalerFaille(cible, gravite)</code> : si <code>cible</code> est un vrai site externe, retourne toujours <code>\"Signaler à un adulte + divulgation responsable\"</code>. Si c'est dans ton labo ET la gravité est <code>\"élevée\"</code>, retourne <code>\"Noter dans le rapport de labo\"</code>. Sinon retourne <code>\"Continuer l'entraînement\"</code>.",
        tabs: [{ type:'js', starter: "function signalerFaille(cible, gravite) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: [
          "const monLabo = [\"VM-Kali\", \"VM-Cible\"];",
          "if (!monLabo.includes(cible)) return \"Signaler à un adulte + divulgation responsable\";",
          "if (gravite === \"élevée\") return \"Noter dans le rapport de labo\";",
          "return \"Continuer l'entraînement\";"
        ],
        solution: { js: "function signalerFaille(cible, gravite) {\n  const monLabo = [\"VM-Kali\", \"VM-Cible\"];\n  if (!monLabo.includes(cible)) return \"Signaler à un adulte + divulgation responsable\";\n  if (gravite === \"élevée\") return \"Noter dans le rapport de labo\";\n  return \"Continuer l'entraînement\";\n}" },
        check(doc, win){
          if(typeof win.signalerFaille !== 'function') return { success:false, message:"Il manque une fonction signalerFaille." };
          if(win.signalerFaille('vrai-site.com', 'élevée') !== "Signaler à un adulte + divulgation responsable") return { success:false, message:"Un vrai site externe doit toujours être signalé à un adulte, jamais exploité." };
          if(win.signalerFaille('VM-Cible', 'élevée') !== "Noter dans le rapport de labo") return { success:false, message:"Une faille grave dans ton labo doit être notée dans ton rapport." };
          if(win.signalerFaille('VM-Cible', 'faible') !== "Continuer l'entraînement") return { success:false, message:"Une faille mineure dans ton labo, tu peux juste continuer." };
          return { success:true, message:"Tu maîtrises la charte complète du hacker éthique !" };
        }
      }
    }
  },

  // ============ LEÇON 10 ============
  {
    id: 'ch14-l10',
    title: "Les snapshots : ton bouton retour en arrière",
    icon: '📸',
    explanation: [
      { type:'text', heading:"Sauvegarder l'état de ta VM", html:
        "<p>Un <strong>snapshot</strong> (instantané) est une photo complète de l'état de ta machine virtuelle à un instant donné. Dans VirtualBox : clique droit sur ta VM → \"Instantané\" → \"Prendre\". Si tu casses tout ensuite (mauvaise commande, VM plantée...), tu peux <strong>restaurer</strong> ce snapshot et tout redevient comme avant, en quelques secondes !</p>" },
      { type:'text', heading:"Quand en prendre un", html:
        "<p>La bonne habitude : prends un snapshot <strong>juste après l'installation</strong> (avant de toucher à quoi que ce soit), et un autre avant chaque grosse expérience. Comme ça, tu peux toujours revenir à un point stable.</p>" },
      { type:'code', code: "function actionSiCasse(vmFonctionne) {\n  if (!vmFonctionne) return \"Restaurer le dernier snapshot\";\n  return \"Continuer normalement\";\n}" },
      { type:'tip', html:"Un snapshot n'est PAS une sauvegarde de secours permanente : il reste sur le même disque dur. Pour un vrai projet important, il faut aussi une sauvegarde externe !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function actionSiCasse(vmFonctionne) {\n  if (!vmFonctionne) return \"Restaurer le dernier snapshot\";\n  return \"Continuer normalement\";\n}\nconsole.log(actionSiCasse(false));\nconsole.log(actionSiCasse(true));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>actionSiCasse(vmFonctionne)</code> : si <code>vmFonctionne</code> est <code>false</code>, retourne <code>\"Restaurer le dernier snapshot\"</code>, sinon <code>\"Continuer normalement\"</code>.",
        tabs: [{ type:'js', starter: "function actionSiCasse(vmFonctionne) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (!vmFonctionne) return \"Restaurer le dernier snapshot\";", "return \"Continuer normalement\";"],
        solution: { js: "function actionSiCasse(vmFonctionne) {\n  if (!vmFonctionne) return \"Restaurer le dernier snapshot\";\n  return \"Continuer normalement\";\n}" },
        check(doc, win){
          if(typeof win.actionSiCasse !== 'function') return { success:false, message:"Il manque une fonction actionSiCasse." };
          if(win.actionSiCasse(false) !== "Restaurer le dernier snapshot") return { success:false, message:"Si la VM ne fonctionne plus, il faut restaurer le snapshot." };
          if(win.actionSiCasse(true) !== "Continuer normalement") return { success:false, message:"Si la VM fonctionne bien, pas besoin de restaurer." };
          return { success:true, message:"Tu sais réagir face à une VM cassée !" };
        }
      },
      moyen: {
        instructions: "Complète <code>momentIdealPourSnapshot(avantExperience, vmStable)</code> : retourne <code>true</code> si les deux conditions sont vraies (juste avant une expérience risquée, ET la VM est actuellement stable).",
        tabs: [{ type:'js', starter: "function momentIdealPourSnapshot(avantExperience, vmStable) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return avantExperience === true && vmStable === true;"],
        solution: { js: "function momentIdealPourSnapshot(avantExperience, vmStable) {\n  return avantExperience === true && vmStable === true;\n}" },
        check(doc, win){
          if(typeof win.momentIdealPourSnapshot !== 'function') return { success:false, message:"Il manque une fonction momentIdealPourSnapshot." };
          if(win.momentIdealPourSnapshot(true, true) !== true) return { success:false, message:"Avant une expérience, avec une VM stable, c'est le bon moment." };
          if(win.momentIdealPourSnapshot(true, false) !== false) return { success:false, message:"Si la VM n'est pas stable, ce n'est pas encore le bon moment." };
          return { success:true, message:"Tu sais reconnaître le bon moment pour sauvegarder !" };
        }
      },
      difficile: {
        instructions: "Complète <code>nomSnapshot(etape, numero)</code> qui génère un nom clair au format <code>\"etape-numero\"</code> (par exemple <code>nomSnapshot(\"apres-install\", 1)</code> doit retourner <code>\"apres-install-1\"</code>). Utilise les template literals (<code>`...`</code>) vus au Chapitre 3.",
        tabs: [{ type:'js', starter: "function nomSnapshot(etape, numero) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return `${etape}-${numero}`;"],
        solution: { js: "function nomSnapshot(etape, numero) {\n  return `${etape}-${numero}`;\n}" },
        check(doc, win){
          if(typeof win.nomSnapshot !== 'function') return { success:false, message:"Il manque une fonction nomSnapshot." };
          if(win.nomSnapshot('apres-install', 1) !== 'apres-install-1') return { success:false, message:"nomSnapshot(\"apres-install\", 1) devrait donner \"apres-install-1\"." };
          if(win.nomSnapshot('avant-scan', 3) !== 'avant-scan-3') return { success:false, message:"nomSnapshot(\"avant-scan\", 3) devrait donner \"avant-scan-3\"." };
          return { success:true, message:"Tu sais organiser tes snapshots comme un vrai professionnel !" };
        }
      }
    }
  },

  // ============ LEÇON 11 ============
  {
    id: 'ch14-l11',
    title: "Continuer à progresser, légalement",
    icon: '🗺️',
    explanation: [
      { type:'text', heading:"Des terrains de jeu légaux pour aller plus loin", html:
        "<p>Une fois ton labo prêt, il existe des <strong>plateformes en ligne 100% légales</strong>, créées exprès pour que les hackers éthiques s'entraînent sur de vraies machines, sans jamais enfreindre la loi : <strong>TryHackMe</strong>, <strong>HackTheBox</strong>, <strong>OverTheWire</strong>, <strong>Root-Me</strong>. Elles proposent des défis progressifs, du plus simple au plus expert.</p>" },
      { type:'text', heading:"Toujours avec un adulte", html:
        "<p>Certaines demandent un compte (donc l'accord d'un adulte), et certains défis avancés touchent à des sujets sensibles — continue à progresser accompagné(e), comme pour tout ce chapitre.</p>" },
      { type:'code', code: "function estPlateformeLegale(nom) {\n  const plateformes = [\"TryHackMe\", \"HackTheBox\", \"OverTheWire\", \"Root-Me\"];\n  return plateformes.includes(nom);\n}" },
      { type:'tip', html:"Ces plateformes existent justement parce que s'entraîner \"pour de vrai\" est important : elles offrent ce terrain légalement, pas besoin de jamais toucher à un vrai site sans permission !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function estPlateformeLegale(nom) {\n  const plateformes = [\"TryHackMe\", \"HackTheBox\", \"OverTheWire\", \"Root-Me\"];\n  return plateformes.includes(nom);\n}\nconsole.log(estPlateformeLegale(\"TryHackMe\"));\nconsole.log(estPlateformeLegale(\"site-au-hasard.com\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>estPlateformeLegale(nom)</code> : retourne <code>true</code> seulement pour <code>\"TryHackMe\"</code>, <code>\"HackTheBox\"</code>, <code>\"OverTheWire\"</code>, ou <code>\"Root-Me\"</code>.",
        tabs: [{ type:'js', starter: "function estPlateformeLegale(nom) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["const plateformes = [\"TryHackMe\", \"HackTheBox\", \"OverTheWire\", \"Root-Me\"];", "return plateformes.includes(nom);"],
        solution: { js: "function estPlateformeLegale(nom) {\n  const plateformes = [\"TryHackMe\", \"HackTheBox\", \"OverTheWire\", \"Root-Me\"];\n  return plateformes.includes(nom);\n}" },
        check(doc, win){
          if(typeof win.estPlateformeLegale !== 'function') return { success:false, message:"Il manque une fonction estPlateformeLegale." };
          if(win.estPlateformeLegale('TryHackMe') !== true) return { success:false, message:"\"TryHackMe\" est une plateforme légale connue." };
          if(win.estPlateformeLegale('site-au-hasard.com') !== false) return { success:false, message:"Un site inconnu n'est pas automatiquement une plateforme d'entraînement légale." };
          return { success:true, message:"Tu connais les meilleures plateformes légales pour progresser !" };
        }
      },
      moyen: {
        instructions: "Complète <code>peutRejoindre(plateforme, accordAdulte)</code> : retourne <code>true</code> seulement si la plateforme est légale ET qu'un adulte est d'accord.",
        tabs: [{ type:'js', starter: "function estPlateformeLegale(nom) {\n  const plateformes = [\"TryHackMe\", \"HackTheBox\", \"OverTheWire\", \"Root-Me\"];\n  return plateformes.includes(nom);\n}\n\nfunction peutRejoindre(plateforme, accordAdulte) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return estPlateformeLegale(plateforme) && accordAdulte === true;"],
        solution: { js: "function estPlateformeLegale(nom) {\n  const plateformes = [\"TryHackMe\", \"HackTheBox\", \"OverTheWire\", \"Root-Me\"];\n  return plateformes.includes(nom);\n}\nfunction peutRejoindre(plateforme, accordAdulte) {\n  return estPlateformeLegale(plateforme) && accordAdulte === true;\n}" },
        check(doc, win){
          if(typeof win.peutRejoindre !== 'function') return { success:false, message:"Il manque une fonction peutRejoindre." };
          if(win.peutRejoindre('TryHackMe', true) !== true) return { success:false, message:"Une plateforme légale avec l'accord d'un adulte devrait être acceptée." };
          if(win.peutRejoindre('TryHackMe', false) !== false) return { success:false, message:"Sans l'accord d'un adulte, ce n'est pas encore le moment." };
          return { success:true, message:"Tu sais comment progresser de façon responsable !" };
        }
      },
      difficile: {
        instructions: "Complète <code>niveauRecommande(moisDePratique)</code> : moins de 3 mois → <code>\"Défis débutant (OverTheWire Bandit)\"</code>, moins de 12 mois → <code>\"Défis intermédiaires (TryHackMe)\"</code>, sinon → <code>\"Défis avancés (HackTheBox)\"</code>.",
        tabs: [{ type:'js', starter: "function niveauRecommande(moisDePratique) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (moisDePratique < 3) return \"Défis débutant (OverTheWire Bandit)\";", "if (moisDePratique < 12) return \"Défis intermédiaires (TryHackMe)\";", "return \"Défis avancés (HackTheBox)\";"],
        solution: { js: "function niveauRecommande(moisDePratique) {\n  if (moisDePratique < 3) return \"Défis débutant (OverTheWire Bandit)\";\n  if (moisDePratique < 12) return \"Défis intermédiaires (TryHackMe)\";\n  return \"Défis avancés (HackTheBox)\";\n}" },
        check(doc, win){
          if(typeof win.niveauRecommande !== 'function') return { success:false, message:"Il manque une fonction niveauRecommande." };
          if(win.niveauRecommande(1) !== "Défis débutant (OverTheWire Bandit)") return { success:false, message:"1 mois de pratique devrait donner le niveau débutant." };
          if(win.niveauRecommande(6) !== "Défis intermédiaires (TryHackMe)") return { success:false, message:"6 mois de pratique devrait donner le niveau intermédiaire." };
          if(win.niveauRecommande(24) !== "Défis avancés (HackTheBox)") return { success:false, message:"24 mois de pratique devrait donner le niveau avancé." };
          return { success:true, message:"Tu as ta feuille de route complète pour continuer à progresser !" };
        }
      }
    }
  },

  // ============ LEÇON 12 ============
  {
    id: 'ch14-l12',
    title: "Bilan : ton parcours complet",
    icon: '🏆',
    explanation: [
      { type:'text', heading:"Regarde le chemin parcouru !", html:
        "<p>HTML, CSS, JavaScript, un vrai mini-site, Git, du frontend avancé, un serveur, une base de données, les DevTools, le fonctionnement d'un ordinateur, les réseaux, Linux, la cybersécurité, et maintenant ton propre labo virtuel de hacker éthique. Tu as construit, brique par brique, les bases d'un(e) vrai(e) professionnel(le) de l'informatique !</p>" },
      { type:'text', heading:"Le plus important à retenir", html:
        "<p>Peu importe jusqu'où tu iras dans ce domaine : la compétence technique n'a de valeur que si elle est utilisée pour <strong>protéger</strong>, avec <strong>autorisation</strong>, et avec <strong>responsabilité</strong>. C'est ce qui distingue un(e) expert(e) respecté(e) d'un simple pirate.</p>" },
      { type:'code', code: "function quelChapitre(sujet) {\n  const carte = {\n    \"structure d'une page\": \"HTML\",\n    \"couleurs et mise en page\": \"CSS\",\n    \"interactivité\": \"JavaScript\",\n    \"isolation des VM\": \"Labo virtuel\"\n  };\n  return carte[sujet];\n}" },
      { type:'tip', html:"Ce chapitre clôt ton parcours de fondations. La suite, c'est la pratique continue, la curiosité, et toujours plus de projets réels à construire !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function quelChapitre(sujet) {\n  const carte = {\n    \"structure d'une page\": \"HTML\",\n    \"couleurs et mise en page\": \"CSS\",\n    \"interactivité\": \"JavaScript\",\n    \"isolation des VM\": \"Labo virtuel\"\n  };\n  return carte[sujet] || \"Inconnu\";\n}\nconsole.log(quelChapitre(\"structure d'une page\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>quelChapitre(sujet)</code> en utilisant l'objet <code>carte</code> fourni pour retrouver le bon chapitre associé à un sujet, sinon <code>\"Inconnu\"</code>.",
        tabs: [{ type:'js', starter: "function quelChapitre(sujet) {\n  const carte = {\n    \"structure d'une page\": \"HTML\",\n    \"couleurs et mise en page\": \"CSS\",\n    \"interactivité\": \"JavaScript\",\n    \"isolation des VM\": \"Labo virtuel\"\n  };\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return carte[sujet] || \"Inconnu\";"],
        solution: { js: "function quelChapitre(sujet) {\n  const carte = {\n    \"structure d'une page\": \"HTML\",\n    \"couleurs et mise en page\": \"CSS\",\n    \"interactivité\": \"JavaScript\",\n    \"isolation des VM\": \"Labo virtuel\"\n  };\n  return carte[sujet] || \"Inconnu\";\n}" },
        check(doc, win){
          if(typeof win.quelChapitre !== 'function') return { success:false, message:"Il manque une fonction quelChapitre." };
          if(win.quelChapitre("structure d'une page") !== 'HTML') return { success:false, message:"\"structure d'une page\" devrait donner \"HTML\"." };
          if(win.quelChapitre('sujet-inconnu') !== 'Inconnu') return { success:false, message:"Un sujet inconnu devrait donner \"Inconnu\"." };
          return { success:true, message:"Tu relies chaque notion à son chapitre, ta carte mentale est solide !" };
        }
      },
      moyen: {
        instructions: "Complète <code>resumeParcours(nbChapitresTermines)</code> : moins de 5 → <code>\"Les fondations se construisent\"</code>, moins de 13 → <code>\"Tu maîtrises déjà beaucoup de choses\"</code>, 14 ou plus → <code>\"Parcours complet, bravo !\"</code>.",
        tabs: [{ type:'js', starter: "function resumeParcours(nbChapitresTermines) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (nbChapitresTermines < 5) return \"Les fondations se construisent\";", "if (nbChapitresTermines < 14) return \"Tu maîtrises déjà beaucoup de choses\";", "return \"Parcours complet, bravo !\";"],
        solution: { js: "function resumeParcours(nbChapitresTermines) {\n  if (nbChapitresTermines < 5) return \"Les fondations se construisent\";\n  if (nbChapitresTermines < 14) return \"Tu maîtrises déjà beaucoup de choses\";\n  return \"Parcours complet, bravo !\";\n}" },
        check(doc, win){
          if(typeof win.resumeParcours !== 'function') return { success:false, message:"Il manque une fonction resumeParcours." };
          if(win.resumeParcours(3) !== "Les fondations se construisent") return { success:false, message:"3 chapitres devrait donner le message des fondations." };
          if(win.resumeParcours(14) !== "Parcours complet, bravo !") return { success:false, message:"14 chapitres devrait donner le message de parcours complet." };
          return { success:true, message:"Tu sais résumer une progression avec des seuils clairs !" };
        }
      },
      difficile: {
        instructions: "Complète <code>carteMentaleComplete()</code> qui ne prend aucun paramètre et retourne un tableau des 4 grandes règles d'or de ce chapitre, dans cet ordre exact : <code>[\"Autorisation d'abord\", \"Isolation réseau\", \"Snapshots réguliers\", \"Signaler, jamais exploiter\"]</code>.",
        tabs: [{ type:'js', starter: "function carteMentaleComplete() {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return [\"Autorisation d'abord\", \"Isolation réseau\", \"Snapshots réguliers\", \"Signaler, jamais exploiter\"];"],
        solution: { js: "function carteMentaleComplete() {\n  return [\"Autorisation d'abord\", \"Isolation réseau\", \"Snapshots réguliers\", \"Signaler, jamais exploiter\"];\n}" },
        check(doc, win){
          if(typeof win.carteMentaleComplete !== 'function') return { success:false, message:"Il manque une fonction carteMentaleComplete." };
          const r = win.carteMentaleComplete();
          const attendu = ["Autorisation d'abord", "Isolation réseau", "Snapshots réguliers", "Signaler, jamais exploiter"];
          if(!Array.isArray(r) || r.length !== 4 || r.some((v,i) => v !== attendu[i])) return { success:false, message:"Le tableau doit contenir exactement les 4 règles, dans le bon ordre." };
          return { success:true, message:"🏆 Félicitations Daouda ! Tu as terminé tout le parcours, des balises HTML jusqu'à ton propre labo de hacker éthique. Tu es prêt(e) pour la suite de ton aventure de codeur !" };
        }
      }
    }
  }

  ]
};
