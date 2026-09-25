const CHAPTER_13 = {
  id: 'ch13',
  title: 'Cybersécurité',
  subtitle: "Protéger les ordinateurs, les réseaux et les gens",
  icon: '🛡️',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch13-l1',
    title: "Qu'est-ce que la cybersécurité ?",
    icon: '🛡️',
    explanation: [
      { type:'text', heading:"Protéger ce qui compte", html:
        "<p>La <strong>cybersécurité</strong>, c'est l'art de protéger les ordinateurs, les réseaux et les données contre les attaques et les accidents. Elle repose sur 3 grands piliers.</p>" },
      { type:'text', heading:"Les 3 piliers", html:
        "<p><strong>Confidentialité</strong> : les secrets restent secrets (seules les bonnes personnes y ont accès). <strong>Intégrité</strong> : personne ne modifie une information sans droit. <strong>Disponibilité</strong> : le système fonctionne quand on en a besoin.</p>" },
      { type:'code', code: "function pilierConcerne(probleme) {\n  if (probleme.includes(\"panne\")) return \"Disponibilité\";\n  if (probleme.includes(\"lu\")) return \"Confidentialité\";\n  if (probleme.includes(\"modifié\")) return \"Intégrité\";\n}" },
      { type:'tip', html:"Tout ce que tu as appris depuis le Chapitre 6 (localStorage), le Chapitre 7 (serveurs), et le Chapitre 11 (HTTPS) servait déjà, sans que tu le saches, à protéger ces 3 piliers !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function estConfidentiel(info) {\n  const secrets = [\"mot de passe\", \"numero de carte\", \"code secret\"];\n  return secrets.includes(info);\n}\nconsole.log(estConfidentiel(\"mot de passe\"));\nconsole.log(estConfidentiel(\"couleur préférée\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>estConfidentiel(info)</code> : retourne <code>true</code> si <code>info</code> est <code>\"mot de passe\"</code>, <code>\"numero de carte\"</code>, ou <code>\"code secret\"</code>.",
        tabs: [{ type:'js', starter: "function estConfidentiel(info) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["const secrets = [\"mot de passe\", \"numero de carte\", \"code secret\"]; return secrets.includes(info);"],
        solution: { js: "function estConfidentiel(info) {\n  const secrets = [\"mot de passe\", \"numero de carte\", \"code secret\"];\n  return secrets.includes(info);\n}" },
        check(doc, win){
          if(typeof win.estConfidentiel !== 'function') return { success:false, message:"Il manque une fonction estConfidentiel." };
          if(win.estConfidentiel('mot de passe') !== true) return { success:false, message:"\"mot de passe\" devrait être confidentiel." };
          if(win.estConfidentiel('couleur préférée') !== false) return { success:false, message:"\"couleur préférée\" ne devrait pas être confidentiel." };
          return { success:true, message:"Tu reconnais les informations sensibles !" };
        }
      },
      moyen: {
        instructions: "Complète <code>pilierConcerne(probleme)</code> : si le texte contient <code>\"panne\"</code> → <code>\"Disponibilité\"</code>, s'il contient <code>\"lu\"</code> → <code>\"Confidentialité\"</code>, sinon <code>\"Intégrité\"</code>.",
        tabs: [{ type:'js', starter: "function pilierConcerne(probleme) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (probleme.includes(\"panne\")) return \"Disponibilité\";", "if (probleme.includes(\"lu\")) return \"Confidentialité\";", "return \"Intégrité\";"],
        solution: { js: "function pilierConcerne(probleme) {\n  if (probleme.includes(\"panne\")) return \"Disponibilité\";\n  if (probleme.includes(\"lu\")) return \"Confidentialité\";\n  return \"Intégrité\";\n}" },
        check(doc, win){
          if(typeof win.pilierConcerne !== 'function') return { success:false, message:"Il manque une fonction pilierConcerne." };
          if(win.pilierConcerne('Le site est en panne') !== 'Disponibilité') return { success:false, message:"Un problème de panne concerne la Disponibilité." };
          if(win.pilierConcerne('Quelqu\'un a lu mon journal') !== 'Confidentialité') return { success:false, message:"Un problème de lecture non autorisée concerne la Confidentialité." };
          return { success:true, message:"Tu identifies le bon pilier à chaque fois !" };
        }
      },
      difficile: {
        instructions: "Complète <code>estUnPilier(nom)</code> qui retourne <code>true</code> SEULEMENT si <code>nom</code> est exactement <code>\"Confidentialité\"</code>, <code>\"Intégrité\"</code>, ou <code>\"Disponibilité\"</code>.",
        tabs: [{ type:'js', starter: "function estUnPilier(nom) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["const piliers = [\"Confidentialité\", \"Intégrité\", \"Disponibilité\"]; return piliers.includes(nom);"],
        solution: { js: "function estUnPilier(nom) {\n  const piliers = [\"Confidentialité\", \"Intégrité\", \"Disponibilité\"];\n  return piliers.includes(nom);\n}" },
        check(doc, win){
          if(typeof win.estUnPilier !== 'function') return { success:false, message:"Il manque une fonction estUnPilier." };
          if(win.estUnPilier('Intégrité') !== true) return { success:false, message:"\"Intégrité\" est bien un des 3 piliers." };
          if(win.estUnPilier('Rapidité') !== false) return { success:false, message:"\"Rapidité\" n'est pas un des 3 piliers." };
          return { success:true, message:"Tu maîtrises les 3 piliers de la cybersécurité !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch13-l2',
    title: "Hacker gentil vs hacker méchant",
    icon: '🎭',
    explanation: [
      { type:'text', heading:"Le même mot, deux réalités totalement différentes", html:
        "<p>Un <strong>hacker</strong> est juste quelqu'un de très doué en informatique. Un <strong>\"white hat\"</strong> (chapeau blanc) utilise ce talent pour PROTÉGER, toujours avec une autorisation écrite. Un <strong>\"black hat\"</strong> (chapeau noir) attaque sans permission : c'est illégal et ça fait du mal à de vraies personnes.</p>" },
      { type:'text', heading:"La règle d'or du hacking éthique", html:
        "<p>La règle absolue d'un hacker éthique : <strong>jamais sans autorisation</strong>. Même tester la sécurité de la porte d'un voisin sans lui demander, c'est un délit — pareil pour un ordinateur !</p>" },
      { type:'code', code: "function estEthique(aAutorisation) {\n  return aAutorisation === true;\n}" },
      { type:'tip', html:"Toute cette appli te prépare à devenir un futur \"white hat\" — un défenseur, pas un attaquant !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function estEthique(aAutorisation) {\n  return aAutorisation === true;\n}\nconsole.log(estEthique(true));\nconsole.log(estEthique(false));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>estEthique(aAutorisation)</code> : retourne <code>true</code> seulement si <code>aAutorisation</code> vaut <code>true</code>.",
        tabs: [{ type:'js', starter: "function estEthique(aAutorisation) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return aAutorisation === true;"],
        solution: { js: "function estEthique(aAutorisation) {\n  return aAutorisation === true;\n}" },
        check(doc, win){
          if(typeof win.estEthique !== 'function') return { success:false, message:"Il manque une fonction estEthique." };
          if(win.estEthique(true) !== true) return { success:false, message:"Avec autorisation, ça devrait être true." };
          if(win.estEthique(false) !== false) return { success:false, message:"Sans autorisation, ça devrait être false." };
          return { success:true, message:"La règle d'or est bien comprise !" };
        }
      },
      moyen: {
        instructions: "Complète <code>typeDeHacker(couleur)</code> : <code>\"blanc\"</code> → <code>\"Gentil (éthique)\"</code>, <code>\"noir\"</code> → <code>\"Méchant (illégal)\"</code>, sinon <code>\"Inconnu\"</code>.",
        tabs: [{ type:'js', starter: "function typeDeHacker(couleur) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (couleur === \"blanc\") return \"Gentil (éthique)\";", "if (couleur === \"noir\") return \"Méchant (illégal)\";", "return \"Inconnu\";"],
        solution: { js: "function typeDeHacker(couleur) {\n  if (couleur === \"blanc\") return \"Gentil (éthique)\";\n  if (couleur === \"noir\") return \"Méchant (illégal)\";\n  return \"Inconnu\";\n}" },
        check(doc, win){
          if(typeof win.typeDeHacker !== 'function') return { success:false, message:"Il manque une fonction typeDeHacker." };
          if(win.typeDeHacker('blanc') !== 'Gentil (éthique)') return { success:false, message:"\"blanc\" devrait donner \"Gentil (éthique)\"." };
          if(win.typeDeHacker('noir') !== 'Méchant (illégal)') return { success:false, message:"\"noir\" devrait donner \"Méchant (illégal)\"." };
          return { success:true, message:"Tu distingues les deux camps !" };
        }
      },
      difficile: {
        instructions: "Complète <code>peutTester(autorisationEcrite)</code> qui retourne <code>true</code> SEULEMENT si l'autorisation écrite est fournie (<code>true</code>), peu importe à quel point le système semble facile à tester.",
        tabs: [{ type:'js', starter: "function peutTester(autorisationEcrite) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return autorisationEcrite === true;"],
        solution: { js: "function peutTester(autorisationEcrite) {\n  return autorisationEcrite === true;\n}" },
        check(doc, win){
          if(typeof win.peutTester !== 'function') return { success:false, message:"Il manque une fonction peutTester." };
          if(win.peutTester(true) !== true) return { success:false, message:"Avec autorisation écrite, ça devrait être true." };
          if(win.peutTester(false) !== false) return { success:false, message:"Sans autorisation écrite, ça devrait TOUJOURS être false." };
          return { success:true, message:"Tu es prêt à agir comme un vrai hacker éthique !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch13-l3',
    title: "Créer un mot de passe solide",
    icon: '🔑',
    explanation: [
      { type:'text', heading:"La première ligne de défense", html:
        "<p>Un bon mot de passe doit être <strong>long</strong> (au moins 8 caractères, idéalement plus), contenir des <strong>majuscules</strong>, des <strong>minuscules</strong>, et des <strong>chiffres</strong>. Plus il est varié et long, plus il est difficile à deviner !</p>" },
      { type:'code', code: "\"1234\"          → terrible, trouvé en 1 seconde\n\"MonChat2024!\"  → beaucoup plus solide" },
      { type:'tip', html:"N'utilise JAMAIS le même mot de passe partout : si un site est piraté, tous tes autres comptes seraient en danger aussi !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function assezLong(mdp) {\n  return mdp.length >= 8;\n}\nconsole.log(assezLong(\"1234\"));\nconsole.log(assezLong(\"MonChat2024\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>assezLong(mdp)</code> : retourne <code>true</code> si le mot de passe a au moins 8 caractères.",
        tabs: [{ type:'js', starter: "function assezLong(mdp) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return mdp.length >= 8;"],
        solution: { js: "function assezLong(mdp) {\n  return mdp.length >= 8;\n}" },
        check(doc, win){
          if(typeof win.assezLong !== 'function') return { success:false, message:"Il manque une fonction assezLong." };
          if(win.assezLong('1234') !== false) return { success:false, message:"\"1234\" est trop court, ça devrait être false." };
          if(win.assezLong('MonChat2024') !== true) return { success:false, message:"\"MonChat2024\" a assez de caractères, ça devrait être true." };
          return { success:true, message:"Tu sais évaluer la longueur d'un mot de passe !" };
        }
      },
      moyen: {
        instructions: "Complète <code>contientChiffre(mdp)</code> qui retourne <code>true</code> si le mot de passe contient au moins un chiffre (astuce : <code>/[0-9]/.test(mdp)</code>).",
        tabs: [{ type:'js', starter: "function contientChiffre(mdp) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return /[0-9]/.test(mdp);"],
        solution: { js: "function contientChiffre(mdp) {\n  return /[0-9]/.test(mdp);\n}" },
        check(doc, win){
          if(typeof win.contientChiffre !== 'function') return { success:false, message:"Il manque une fonction contientChiffre." };
          if(win.contientChiffre('MonChat2024') !== true) return { success:false, message:"\"MonChat2024\" contient des chiffres, ça devrait être true." };
          if(win.contientChiffre('MonChat') !== false) return { success:false, message:"\"MonChat\" ne contient pas de chiffre, ça devrait être false." };
          return { success:true, message:"Tu sais détecter la présence de chiffres !" };
        }
      },
      difficile: {
        instructions: "Complète <code>estMotDePasseFort(mdp)</code> : retourne <code>true</code> SEULEMENT si le mot de passe a au moins 8 caractères, ET contient une majuscule, ET contient un chiffre.",
        tabs: [{ type:'js', starter: "function estMotDePasseFort(mdp) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: [
          "let long = mdp.length >= 8;",
          "let majuscule = /[A-Z]/.test(mdp);",
          "let chiffre = /[0-9]/.test(mdp);",
          "return long && majuscule && chiffre;"
        ],
        solution: { js: "function estMotDePasseFort(mdp) {\n  let long = mdp.length >= 8;\n  let majuscule = /[A-Z]/.test(mdp);\n  let chiffre = /[0-9]/.test(mdp);\n  return long && majuscule && chiffre;\n}" },
        check(doc, win){
          if(typeof win.estMotDePasseFort !== 'function') return { success:false, message:"Il manque une fonction estMotDePasseFort." };
          if(win.estMotDePasseFort('MonChat2024') !== true) return { success:false, message:"\"MonChat2024\" devrait être considéré comme fort." };
          if(win.estMotDePasseFort('monchat') !== false) return { success:false, message:"\"monchat\" (trop court, pas de majuscule ni de chiffre) devrait être faible." };
          if(win.estMotDePasseFort('password') !== false) return { success:false, message:"\"password\" (pas de majuscule ni de chiffre) devrait être faible." };
          return { success:true, message:"Tu sais évaluer la solidité complète d'un mot de passe !" };
        }
      }
    }
  },

  // ============ LEÇON 4 ============
  {
    id: 'ch13-l4',
    title: "Reconnaître le phishing",
    icon: '🎣',
    explanation: [
      { type:'text', heading:"Le piège de l'hameçon", html:
        "<p>Le <strong>phishing</strong> (hameçonnage) est une fausse page ou un faux message qui imite un site connu pour te voler tes informations. Les pièges classiques : un <strong>sentiment d'urgence</strong> (\"Agis maintenant !\"), et une <strong>adresse bizarre</strong> qui ressemble à un vrai site sans l'être vraiment.</p>" },
      { type:'code', code: "\"Ton compte sera supprimé dans 1 heure, clique ici URGENT !\"\nhttps://paypa1-securite.com  ← faux (regarde bien : paypa1, avec un chiffre 1 !)" },
      { type:'tip', html:"En cas de doute, ne clique JAMAIS sur le lien du message : va directement sur le vrai site en tapant toi-même l'adresse dans ton navigateur." },
      { type:'demo', tabs:[{ type:'js', starter:
        "function contientUrgence(texte) {\n  const motsUrgents = [\"urgent\", \"immédiatement\", \"maintenant\"];\n  return motsUrgents.some(function(mot) { return texte.toLowerCase().includes(mot); });\n}\nconsole.log(contientUrgence(\"Agis maintenant !\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>contientUrgence(texte)</code> : retourne <code>true</code> si le texte contient <code>\"urgent\"</code> ou <code>\"immédiatement\"</code> (en minuscules, utilise <code>.toLowerCase()</code>).",
        tabs: [{ type:'js', starter: "function contientUrgence(texte) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["let t = texte.toLowerCase();", "return t.includes(\"urgent\") || t.includes(\"immédiatement\");"],
        solution: { js: "function contientUrgence(texte) {\n  let t = texte.toLowerCase();\n  return t.includes(\"urgent\") || t.includes(\"immédiatement\");\n}" },
        check(doc, win){
          if(typeof win.contientUrgence !== 'function') return { success:false, message:"Il manque une fonction contientUrgence." };
          if(win.contientUrgence('Réponds URGENT !') !== true) return { success:false, message:"Un texte contenant \"URGENT\" devrait être détecté." };
          if(win.contientUrgence('Bonjour, comment vas-tu ?') !== false) return { success:false, message:"Un texte normal ne devrait pas être détecté." };
          return { success:true, message:"Tu repères le signal d'urgence classique du phishing !" };
        }
      },
      moyen: {
        instructions: "Complète <code>estHttpsValide(url)</code> qui retourne <code>true</code> seulement si l'url commence par <code>\"https://\"</code> (rappel du Chapitre 11 !).",
        tabs: [{ type:'js', starter: "function estHttpsValide(url) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return url.startsWith(\"https://\");"],
        solution: { js: "function estHttpsValide(url) {\n  return url.startsWith(\"https://\");\n}" },
        check(doc, win){
          if(typeof win.estHttpsValide !== 'function') return { success:false, message:"Il manque une fonction estHttpsValide." };
          if(win.estHttpsValide('https://banque.fr') !== true) return { success:false, message:"Une url https:// devrait être valide." };
          if(win.estHttpsValide('http://banque.fr') !== false) return { success:false, message:"Une url http:// (non sécurisée) ne devrait pas être valide." };
          return { success:true, message:"Tu vérifies toujours la sécurité d'un lien !" };
        }
      },
      difficile: {
        instructions: "Complète <code>estPhishing(message)</code> où <code>message</code> est un objet <code>{texte, url}</code> : retourne <code>true</code> si le texte contient de l'urgence <strong>OU</strong> si l'url ne commence pas par https://.",
        tabs: [{ type:'js', starter: "function estPhishing(message) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: [
          "let urgence = message.texte.toLowerCase().includes(\"urgent\");",
          "let httpsManquant = !message.url.startsWith(\"https://\");",
          "return urgence || httpsManquant;"
        ],
        solution: { js: "function estPhishing(message) {\n  let urgence = message.texte.toLowerCase().includes(\"urgent\");\n  let httpsManquant = !message.url.startsWith(\"https://\");\n  return urgence || httpsManquant;\n}" },
        check(doc, win){
          if(typeof win.estPhishing !== 'function') return { success:false, message:"Il manque une fonction estPhishing." };
          if(win.estPhishing({texte:'Agis URGENT', url:'https://vrai-site.fr'}) !== true) return { success:false, message:"Un texte urgent devrait être détecté comme phishing." };
          if(win.estPhishing({texte:'Bonjour', url:'http://faux-site.fr'}) !== true) return { success:false, message:"Une url non sécurisée devrait être détectée comme phishing." };
          if(win.estPhishing({texte:'Bonjour', url:'https://vrai-site.fr'}) !== false) return { success:false, message:"Un message normal et sécurisé ne devrait pas être détecté comme phishing." };
          return { success:true, message:"Tu combines plusieurs indices pour repérer le phishing, comme un vrai expert !" };
        }
      }
    }
  },

  // ============ LEÇON 5 ============
  {
    id: 'ch13-l5',
    title: "L'ingénierie sociale",
    icon: '🎪',
    explanation: [
      { type:'text', heading:"Attaquer les humains, pas les machines", html:
        "<p>L'<strong>ingénierie sociale</strong> consiste à manipuler une PERSONNE pour obtenir des informations, plutôt que d'attaquer un ordinateur. Exemple : quelqu'un t'appelle en prétendant être \"du support technique\" et te demande ton mot de passe.</p>" },
      { type:'text', heading:"La règle absolue", html:
        "<p>Une vraie entreprise, un vrai support technique, ne te demandera <strong>JAMAIS</strong> ton mot de passe complet, par téléphone, email, ou message. JAMAIS. Si quelqu'un le demande, c'est une arnaque.</p>" },
      { type:'code', code: "function doitDonnerMotDePasse() {\n  return false; // TOUJOURS false, peu importe qui demande !\n}" },
      { type:'tip', html:"Même si la personne prétend être ton meilleur ami, un professeur, ou la police : ton mot de passe ne regarde que TOI." },
      { type:'demo', tabs:[{ type:'js', starter:
        "function doitDonnerMotDePasse() {\n  return false;\n}\nconsole.log(doitDonnerMotDePasse());" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>doitDonnerMotDePasse()</code> : cette fonction ne prend AUCUN paramètre, et retourne TOUJOURS <code>false</code>.",
        tabs: [{ type:'js', starter: "function doitDonnerMotDePasse() {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return false;"],
        solution: { js: "function doitDonnerMotDePasse() {\n  return false;\n}" },
        check(doc, win){
          if(typeof win.doitDonnerMotDePasse !== 'function') return { success:false, message:"Il manque une fonction doitDonnerMotDePasse." };
          if(win.doitDonnerMotDePasse() !== false) return { success:false, message:"La réponse doit TOUJOURS être false." };
          return { success:true, message:"Tu ne donneras jamais ton mot de passe à personne, bravo !" };
        }
      },
      moyen: {
        instructions: "Complète <code>estDemandeSuspecte(texte)</code> : retourne <code>true</code> si le texte contient <code>\"mot de passe\"</code> ou <code>\"support technique\"</code>.",
        tabs: [{ type:'js', starter: "function estDemandeSuspecte(texte) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["let t = texte.toLowerCase();", "return t.includes(\"mot de passe\") || t.includes(\"support technique\");"],
        solution: { js: "function estDemandeSuspecte(texte) {\n  let t = texte.toLowerCase();\n  return t.includes(\"mot de passe\") || t.includes(\"support technique\");\n}" },
        check(doc, win){
          if(typeof win.estDemandeSuspecte !== 'function') return { success:false, message:"Il manque une fonction estDemandeSuspecte." };
          if(win.estDemandeSuspecte('Je suis du support technique, donne-moi ton accès') !== true) return { success:false, message:"Cette phrase devrait être détectée comme suspecte." };
          if(win.estDemandeSuspecte('Salut, ça va ?') !== false) return { success:false, message:"Cette phrase normale ne devrait pas être suspecte." };
          return { success:true, message:"Tu repères les tentatives de manipulation !" };
        }
      },
      difficile: {
        instructions: "Complète <code>reagir(demande)</code> : si <code>estDemandeSuspecte(demande)</code> est vrai, retourne <code>\"Je refuse et j'en parle à un adulte\"</code>, sinon retourne <code>\"Réponse normale\"</code>.",
        tabs: [{ type:'js', starter: "function estDemandeSuspecte(texte) {\n  let t = texte.toLowerCase();\n  return t.includes(\"mot de passe\") || t.includes(\"support technique\");\n}\n\nfunction reagir(demande) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (estDemandeSuspecte(demande)) { return \"Je refuse et j'en parle à un adulte\"; } return \"Réponse normale\";"],
        solution: { js: "function estDemandeSuspecte(texte) {\n  let t = texte.toLowerCase();\n  return t.includes(\"mot de passe\") || t.includes(\"support technique\");\n}\nfunction reagir(demande) {\n  if (estDemandeSuspecte(demande)) {\n    return \"Je refuse et j'en parle à un adulte\";\n  }\n  return \"Réponse normale\";\n}" },
        check(doc, win){
          if(typeof win.reagir !== 'function') return { success:false, message:"Il manque une fonction reagir." };
          if(win.reagir('Donne-moi ton mot de passe') !== "Je refuse et j'en parle à un adulte") return { success:false, message:"Face à une demande suspecte, il faut refuser et en parler à un adulte." };
          if(win.reagir('Comment tu vas ?') !== 'Réponse normale') return { success:false, message:"Face à une demande normale, la réaction devrait être normale." };
          return { success:true, message:"Tu sais exactement comment réagir face à la manipulation !" };
        }
      }
    }
  },

  // ============ LEÇON 6 ============
  {
    id: 'ch13-l6',
    title: "Les logiciels malveillants",
    icon: '🦠',
    explanation: [
      { type:'text', heading:"Les 4 grandes familles", html:
        "<p>Un <strong>virus</strong> s'accroche à un fichier et se propage quand on l'ouvre. Un <strong>ver</strong> se propage TOUT SEUL à travers un réseau, sans aide. Un <strong>cheval de Troie</strong> se cache dans un logiciel qui semble utile. Un <strong>rançongiciel</strong> (ransomware) bloque tes fichiers et demande de l'argent pour les débloquer.</p>" },
      { type:'code', code: "function typeDeMalware(nom) {\n  if (nom === \"rançongiciel\") return \"Bloque tes fichiers contre rançon\";\n  if (nom === \"ver\") return \"Se propage seul via le réseau\";\n}" },
      { type:'tip', html:"Le meilleur moyen de se protéger : ne jamais ouvrir de pièce jointe ou installer un logiciel venant d'une source inconnue !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function typeDeMalware(nom) {\n  if (nom === \"rançongiciel\") return \"Bloque tes fichiers contre rançon\";\n  if (nom === \"ver\") return \"Se propage seul via le réseau\";\n  return \"Inconnu\";\n}\nconsole.log(typeDeMalware(\"rançongiciel\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>typeDeMalware(nom)</code> : retourne <code>\"Bloque tes fichiers contre rançon\"</code> pour <code>\"rançongiciel\"</code>, sinon <code>\"Inconnu\"</code>.",
        tabs: [{ type:'js', starter: "function typeDeMalware(nom) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (nom === \"rançongiciel\") { return \"Bloque tes fichiers contre rançon\"; } return \"Inconnu\";"],
        solution: { js: "function typeDeMalware(nom) {\n  if (nom === \"rançongiciel\") return \"Bloque tes fichiers contre rançon\";\n  return \"Inconnu\";\n}" },
        check(doc, win){
          if(typeof win.typeDeMalware !== 'function') return { success:false, message:"Il manque une fonction typeDeMalware." };
          if(win.typeDeMalware('rançongiciel') !== 'Bloque tes fichiers contre rançon') return { success:false, message:"\"rançongiciel\" devrait donner la bonne description." };
          return { success:true, message:"Tu reconnais le rançongiciel, une des menaces les plus dangereuses !" };
        }
      },
      moyen: {
        instructions: "Ajoute <code>\"ver\"</code> → <code>\"Se propage seul via le réseau\"</code> et <code>\"virus\"</code> → <code>\"S'accroche à un fichier\"</code>.",
        tabs: [{ type:'js', starter: "function typeDeMalware(nom) {\n  if (nom === \"rançongiciel\") return \"Bloque tes fichiers contre rançon\";\n  // ajoute ver et virus ici\n  return \"Inconnu\";\n}" }],
        showConsole: true,
        hints: ["if (nom === \"ver\") { return \"Se propage seul via le réseau\"; }", "if (nom === \"virus\") { return \"S'accroche à un fichier\"; }"],
        solution: { js: "function typeDeMalware(nom) {\n  if (nom === \"rançongiciel\") return \"Bloque tes fichiers contre rançon\";\n  if (nom === \"ver\") return \"Se propage seul via le réseau\";\n  if (nom === \"virus\") return \"S'accroche à un fichier\";\n  return \"Inconnu\";\n}" },
        check(doc, win){
          if(typeof win.typeDeMalware !== 'function') return { success:false, message:"Il manque une fonction typeDeMalware." };
          if(win.typeDeMalware('ver') !== 'Se propage seul via le réseau') return { success:false, message:"\"ver\" devrait donner la bonne description." };
          if(win.typeDeMalware('virus') !== 'S\'accroche à un fichier') return { success:false, message:"\"virus\" devrait donner la bonne description." };
          return { success:true, message:"Tu connais 3 des 4 grandes familles de malwares !" };
        }
      },
      difficile: {
        instructions: "Ajoute <code>\"cheval de troie\"</code> → <code>\"Se cache dans un logiciel utile\"</code>, pour reconnaître les 4 familles au total.",
        tabs: [{ type:'js', starter: "function typeDeMalware(nom) {\n  if (nom === \"rançongiciel\") return \"Bloque tes fichiers contre rançon\";\n  if (nom === \"ver\") return \"Se propage seul via le réseau\";\n  if (nom === \"virus\") return \"S'accroche à un fichier\";\n  // ajoute cheval de troie ici\n  return \"Inconnu\";\n}" }],
        showConsole: true,
        hints: ["if (nom === \"cheval de troie\") { return \"Se cache dans un logiciel utile\"; }"],
        solution: { js: "function typeDeMalware(nom) {\n  if (nom === \"rançongiciel\") return \"Bloque tes fichiers contre rançon\";\n  if (nom === \"ver\") return \"Se propage seul via le réseau\";\n  if (nom === \"virus\") return \"S'accroche à un fichier\";\n  if (nom === \"cheval de troie\") return \"Se cache dans un logiciel utile\";\n  return \"Inconnu\";\n}" },
        check(doc, win){
          if(typeof win.typeDeMalware !== 'function') return { success:false, message:"Il manque une fonction typeDeMalware." };
          const tests = [['rançongiciel','Bloque tes fichiers contre rançon'],['ver','Se propage seul via le réseau'],['virus','S\'accroche à un fichier'],['cheval de troie','Se cache dans un logiciel utile']];
          for(const [n, expected] of tests){
            if(win.typeDeMalware(n) !== expected) return { success:false, message:`typeDeMalware("${n}") n'est pas encore correct.` };
          }
          return { success:true, message:"Tu connais les 4 grandes familles de logiciels malveillants !" };
        }
      }
    }
  },

  // ============ LEÇON 7 ============
  {
    id: 'ch13-l7',
    title: "La cryptographie : le chiffrement de César",
    icon: '🔐',
    explanation: [
      { type:'text', heading:"Cacher un message en le mélangeant", html:
        "<p>La <strong>cryptographie</strong> transforme un message lisible en texte incompréhensible, que seule la bonne personne peut décoder. Le <strong>chiffrement de César</strong> (utilisé par Jules César lui-même il y a 2000 ans !) décale chaque lettre de l'alphabet d'un nombre fixe.</p>" },
      { type:'code', code: "\"CHAT\" décalé de 1 → \"DIBU\"\n(C→D, H→I, A→B, T→U)" },
      { type:'tip', html:"<code>texte.charCodeAt(i)</code> donne le code numérique d'une lettre, et <code>String.fromCharCode(code)</code> fait l'inverse — parfait pour décaler des lettres !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function chiffrerCesar(texte, decalage) {\n  let resultat = \"\";\n  for (let i = 0; i < texte.length; i++) {\n    let code = texte.charCodeAt(i) - 65;\n    code = (code + decalage + 26) % 26;\n    resultat += String.fromCharCode(code + 65);\n  }\n  return resultat;\n}\nconsole.log(chiffrerCesar(\"CHAT\", 1));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>chiffrerCesar(texte, decalage)</code> qui décale chaque lettre MAJUSCULE de <code>texte</code> de <code>decalage</code> positions dans l'alphabet.",
        tabs: [{ type:'js', starter: "function chiffrerCesar(texte, decalage) {\n  let resultat = \"\";\n  for (let i = 0; i < texte.length; i++) {\n    // ton code ici\n  }\n  return resultat;\n}" }],
        showConsole: true,
        hints: [
          "let code = texte.charCodeAt(i) - 65;",
          "code = (code + decalage + 26) % 26;",
          "resultat += String.fromCharCode(code + 65);"
        ],
        solution: { js: "function chiffrerCesar(texte, decalage) {\n  let resultat = \"\";\n  for (let i = 0; i < texte.length; i++) {\n    let code = texte.charCodeAt(i) - 65;\n    code = (code + decalage + 26) % 26;\n    resultat += String.fromCharCode(code + 65);\n  }\n  return resultat;\n}" },
        check(doc, win){
          if(typeof win.chiffrerCesar !== 'function') return { success:false, message:"Il manque une fonction chiffrerCesar." };
          if(win.chiffrerCesar('ABC', 1) !== 'BCD') return { success:false, message:"chiffrerCesar(\"ABC\", 1) devrait donner \"BCD\"." };
          return { success:true, message:"Ton premier chiffrement fonctionne !" };
        }
      },
      moyen: {
        instructions: "Complète <code>dechiffrerCesar(texte, decalage)</code> qui fait l'inverse de <code>chiffrerCesar</code> (astuce : réutilise-la avec un décalage négatif !).",
        tabs: [{ type:'js', starter: "function chiffrerCesar(texte, decalage) {\n  let resultat = \"\";\n  for (let i = 0; i < texte.length; i++) {\n    let code = texte.charCodeAt(i) - 65;\n    code = (code + decalage + 26) % 26;\n    resultat += String.fromCharCode(code + 65);\n  }\n  return resultat;\n}\n\nfunction dechiffrerCesar(texte, decalage) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return chiffrerCesar(texte, -decalage);"],
        solution: { js: "function chiffrerCesar(texte, decalage) {\n  let resultat = \"\";\n  for (let i = 0; i < texte.length; i++) {\n    let code = texte.charCodeAt(i) - 65;\n    code = (code + decalage + 26) % 26;\n    resultat += String.fromCharCode(code + 65);\n  }\n  return resultat;\n}\nfunction dechiffrerCesar(texte, decalage) {\n  return chiffrerCesar(texte, -decalage);\n}" },
        check(doc, win){
          if(typeof win.dechiffrerCesar !== 'function') return { success:false, message:"Il manque une fonction dechiffrerCesar." };
          if(win.dechiffrerCesar('BCD', 1) !== 'ABC') return { success:false, message:"dechiffrerCesar(\"BCD\", 1) devrait redonner \"ABC\"." };
          return { success:true, message:"Tu sais déchiffrer un message secret !" };
        }
      },
      difficile: {
        instructions: "Un message <code>\"FSRNSYV\"</code> a été chiffré avec un décalage INCONNU (entre 1 et 25). Écris une boucle qui essaie TOUS les décalages possibles, et affiche chaque résultat, jusqu'à trouver le mot <code>\"BONJOUR\"</code>.",
        tabs: [{ type:'js', starter: "function chiffrerCesar(texte, decalage) {\n  let resultat = \"\";\n  for (let i = 0; i < texte.length; i++) {\n    let code = texte.charCodeAt(i) - 65;\n    code = (code + decalage + 26) % 26;\n    resultat += String.fromCharCode(code + 65);\n  }\n  return resultat;\n}\n\nlet messageSecret = \"FSRNSYV\";\n// Essaie tous les décalages de 1 à 25 avec une boucle for" }],
        showConsole: true,
        hints: [
          "for (let d = 1; d <= 25; d++) { console.log(d + \" : \" + chiffrerCesar(messageSecret, -d)); }",
          "Regarde la console pour trouver quel décalage donne \"BONJOUR\" !"
        ],
        solution: { js: "function chiffrerCesar(texte, decalage) {\n  let resultat = \"\";\n  for (let i = 0; i < texte.length; i++) {\n    let code = texte.charCodeAt(i) - 65;\n    code = (code + decalage + 26) % 26;\n    resultat += String.fromCharCode(code + 65);\n  }\n  return resultat;\n}\nlet messageSecret = \"FSRNSYV\";\nfor (let d = 1; d <= 25; d++) {\n  console.log(d + \" : \" + chiffrerCesar(messageSecret, -d));\n}" },
        check(doc, win, C, logs){
          if(!C.logsInclude('BONJOUR')) return { success:false, message:"Ta boucle doit finir par afficher \"BONJOUR\" pour un des décalages essayés." };
          return { success:true, message:"Tu viens de casser un code secret par force brute, comme un vrai cryptanalyste !" };
        }
      }
    }
  },

  // ============ LEÇON 8 ============
  {
    id: 'ch13-l8',
    title: "Mises à jour et vulnérabilités",
    icon: '🔄',
    explanation: [
      { type:'text', heading:"Des trous à colmater", html:
        "<p>Une <strong>vulnérabilité</strong> est une faille (une erreur de programmation) qu'un attaquant pourrait exploiter. Quand une entreprise découvre une faille, elle publie une <strong>mise à jour</strong> (patch) qui la corrige. Ignorer les mises à jour, c'est laisser une porte ouverte !</p>" },
      { type:'code', code: "function doitMettreAJour(version, derniereVersion) {\n  return version !== derniereVersion;\n}" },
      { type:'tip', html:"Certaines des plus grandes attaques de l'histoire ont exploité des failles connues... pour lesquelles une mise à jour existait déjà, mais n'avait pas été installée !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function doitMettreAJour(version, derniereVersion) {\n  return version !== derniereVersion;\n}\nconsole.log(doitMettreAJour(\"1.0\", \"2.0\"));\nconsole.log(doitMettreAJour(\"2.0\", \"2.0\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>estAJour(version, derniereVersion)</code> : retourne <code>true</code> si les deux versions sont identiques.",
        tabs: [{ type:'js', starter: "function estAJour(version, derniereVersion) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return version === derniereVersion;"],
        solution: { js: "function estAJour(version, derniereVersion) {\n  return version === derniereVersion;\n}" },
        check(doc, win){
          if(typeof win.estAJour !== 'function') return { success:false, message:"Il manque une fonction estAJour." };
          if(win.estAJour('2.0', '2.0') !== true) return { success:false, message:"Deux versions identiques devraient donner true." };
          if(win.estAJour('1.0', '2.0') !== false) return { success:false, message:"Deux versions différentes devraient donner false." };
          return { success:true, message:"Tu sais vérifier si un logiciel est à jour !" };
        }
      },
      moyen: {
        instructions: "Complète <code>doitMettreAJour(version, derniereVersion)</code> : l'inverse d'estAJour (retourne <code>true</code> si les versions sont différentes).",
        tabs: [{ type:'js', starter: "function doitMettreAJour(version, derniereVersion) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return version !== derniereVersion;"],
        solution: { js: "function doitMettreAJour(version, derniereVersion) {\n  return version !== derniereVersion;\n}" },
        check(doc, win){
          if(typeof win.doitMettreAJour !== 'function') return { success:false, message:"Il manque une fonction doitMettreAJour." };
          if(win.doitMettreAJour('1.0', '2.0') !== true) return { success:false, message:"Des versions différentes devraient donner true." };
          if(win.doitMettreAJour('2.0', '2.0') !== false) return { success:false, message:"Des versions identiques devraient donner false." };
          return { success:true, message:"Tu sais détecter quand une mise à jour est nécessaire !" };
        }
      },
      difficile: {
        instructions: "Complète <code>niveauRisque(joursSansMAJ)</code> : retourne <code>\"Faible\"</code> si moins de 7 jours, <code>\"Moyen\"</code> si moins de 30 jours, sinon <code>\"Élevé\"</code>.",
        tabs: [{ type:'js', starter: "function niveauRisque(joursSansMAJ) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["if (joursSansMAJ < 7) return \"Faible\";", "if (joursSansMAJ < 30) return \"Moyen\";", "return \"Élevé\";"],
        solution: { js: "function niveauRisque(joursSansMAJ) {\n  if (joursSansMAJ < 7) return \"Faible\";\n  if (joursSansMAJ < 30) return \"Moyen\";\n  return \"Élevé\";\n}" },
        check(doc, win){
          if(typeof win.niveauRisque !== 'function') return { success:false, message:"Il manque une fonction niveauRisque." };
          if(win.niveauRisque(2) !== 'Faible') return { success:false, message:"2 jours devrait donner \"Faible\"." };
          if(win.niveauRisque(15) !== 'Moyen') return { success:false, message:"15 jours devrait donner \"Moyen\"." };
          if(win.niveauRisque(60) !== 'Élevé') return { success:false, message:"60 jours devrait donner \"Élevé\"." };
          return { success:true, message:"Tu sais évaluer le risque d'un système non mis à jour !" };
        }
      }
    }
  },

  // ============ LEÇON 9 ============
  {
    id: 'ch13-l9',
    title: "Protéger ses comptes : la double authentification",
    icon: '🔒',
    explanation: [
      { type:'text', heading:"Une deuxième serrure", html:
        "<p>La <strong>double authentification</strong> (2FA) ajoute une deuxième vérification après le mot de passe : un code envoyé par SMS, ou généré par une appli. Même si quelqu'un vole ton mot de passe, il ne peut PAS se connecter sans ce deuxième code !</p>" },
      { type:'code', code: "function connexionSecurisee(mdpSaisi, mdpCorrect, codeSaisi, codeCorrect) {\n  return mdpSaisi === mdpCorrect && codeSaisi === codeCorrect;\n}" },
      { type:'tip', html:"Active la double authentification sur TOUS tes comptes importants dès que tu en auras (email, réseaux sociaux) : c'est une des meilleures protections qui existent !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "function connexionSecurisee(mdpSaisi, mdpCorrect, codeSaisi, codeCorrect) {\n  return mdpSaisi === mdpCorrect && codeSaisi === codeCorrect;\n}\nconsole.log(connexionSecurisee(\"abc\", \"abc\", \"123\", \"123\"));\nconsole.log(connexionSecurisee(\"abc\", \"abc\", \"999\", \"123\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Complète <code>verifierMotDePasse(saisi, correct)</code> : retourne <code>true</code> si les deux correspondent exactement.",
        tabs: [{ type:'js', starter: "function verifierMotDePasse(saisi, correct) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return saisi === correct;"],
        solution: { js: "function verifierMotDePasse(saisi, correct) {\n  return saisi === correct;\n}" },
        check(doc, win){
          if(typeof win.verifierMotDePasse !== 'function') return { success:false, message:"Il manque une fonction verifierMotDePasse." };
          if(win.verifierMotDePasse('abc123', 'abc123') !== true) return { success:false, message:"Deux mots de passe identiques devraient correspondre." };
          if(win.verifierMotDePasse('abc123', 'xyz789') !== false) return { success:false, message:"Deux mots de passe différents ne devraient pas correspondre." };
          return { success:true, message:"Ta première vérification de mot de passe fonctionne !" };
        }
      },
      moyen: {
        instructions: "Complète <code>verifierCode2FA(saisi, correct)</code> : même logique, mais pour le code de double authentification.",
        tabs: [{ type:'js', starter: "function verifierCode2FA(saisi, correct) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return saisi === correct;"],
        solution: { js: "function verifierCode2FA(saisi, correct) {\n  return saisi === correct;\n}" },
        check(doc, win){
          if(typeof win.verifierCode2FA !== 'function') return { success:false, message:"Il manque une fonction verifierCode2FA." };
          if(win.verifierCode2FA('123456', '123456') !== true) return { success:false, message:"Deux codes identiques devraient correspondre." };
          if(win.verifierCode2FA('111111', '123456') !== false) return { success:false, message:"Deux codes différents ne devraient pas correspondre." };
          return { success:true, message:"Tu vérifies aussi le deuxième facteur !" };
        }
      },
      difficile: {
        instructions: "Complète <code>connexionSecurisee(mdpSaisi, mdpCorrect, codeSaisi, codeCorrect)</code> : retourne <code>true</code> SEULEMENT si le mot de passe ET le code sont corrects tous les deux.",
        tabs: [{ type:'js', starter: "function connexionSecurisee(mdpSaisi, mdpCorrect, codeSaisi, codeCorrect) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["return mdpSaisi === mdpCorrect && codeSaisi === codeCorrect;"],
        solution: { js: "function connexionSecurisee(mdpSaisi, mdpCorrect, codeSaisi, codeCorrect) {\n  return mdpSaisi === mdpCorrect && codeSaisi === codeCorrect;\n}" },
        check(doc, win){
          if(typeof win.connexionSecurisee !== 'function') return { success:false, message:"Il manque une fonction connexionSecurisee." };
          if(win.connexionSecurisee('abc', 'abc', '123', '123') !== true) return { success:false, message:"Mot de passe ET code corrects devraient permettre la connexion." };
          if(win.connexionSecurisee('abc', 'abc', '999', '123') !== false) return { success:false, message:"Un mot de passe correct mais un mauvais code ne devrait PAS permettre la connexion." };
          if(win.connexionSecurisee('xxx', 'abc', '123', '123') !== false) return { success:false, message:"Un mauvais mot de passe ne devrait jamais permettre la connexion, même avec le bon code." };
          return { success:true, message:"Tu as recréé le fonctionnement de la double authentification !" };
        }
      }
    }
  },

  // ============ LEÇON 10 ============
  {
    id: 'ch13-l10',
    title: "Scanner un réseau",
    icon: '📡',
    explanation: [
      { type:'text', heading:"Regarder quelles portes sont ouvertes", html:
        "<p>Rappelle-toi les ports du Chapitre 11. La commande <code>scan adresse</code> vérifie quels ports sont <strong>ouverts</strong> sur une machine. Les vrais experts en cybersécurité utilisent cette technique pour trouver des faiblesses AVANT les attaquants (toujours avec autorisation !).</p>" },
      { type:'code', code: "scan jeuxenligne.fr\nPort 80 (HTTP) : OUVERT\nPort 443 (HTTPS) : OUVERT\nPort 21 (FTP) : OUVERT   ← un port de plus, donc un risque de plus !" },
      { type:'tip', html:"Plus un serveur a de ports ouverts inutilement, plus il offre de \"portes\" possibles à un attaquant. Les pros ferment tout ce qui n'est pas nécessaire !" },
      { type:'terminal-demo', terminalType:'net', intro:["Essaie : scan jeuxenligne.fr, puis scan code-aventure.fr"] }
    ],
    exercises: {
      facile: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Utilise <code>scan code-aventure.fr</code> pour voir quels ports sont ouverts.",
        hints: ["scan code-aventure.fr"],
        solution: { terminal: "scan code-aventure.fr" },
        check(state){
          if(!state.history.some(h => h.trim().startsWith('scan'))) return { success:false, message:"Il manque une commande scan." };
          return { success:true, message:"Ton premier scan de sécurité réussi !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Utilise <code>scan jeuxenligne.fr</code> et remarque qu'il a un port ouvert en plus des deux autres domaines (lequel ?).",
        hints: ["scan jeuxenligne.fr"],
        solution: { terminal: "scan jeuxenligne.fr" },
        check(state){
          if(!state.history.some(h => h.trim() === 'scan jeuxenligne.fr')) return { success:false, message:"Il manque la commande scan jeuxenligne.fr." };
          return { success:true, message:"Tu as repéré le port supplémentaire, un vrai œil d'expert !" };
        }
      },
      difficile: {
        kind: 'terminal',
        terminalType: 'net',
        instructions: "Scanne DEUX domaines différents (<code>code-aventure.fr</code> et <code>jeuxenligne.fr</code>) et compare mentalement le nombre de ports ouverts sur chacun.",
        hints: ["scan code-aventure.fr", "scan jeuxenligne.fr"],
        solution: { terminal: "scan code-aventure.fr\nscan jeuxenligne.fr" },
        check(state){
          const scans = new Set(state.history.filter(h => h.trim().startsWith('scan')).map(h => h.trim().split(/\s+/)[1]));
          if(scans.size < 2) return { success:false, message:"Il faut scanner au moins 2 domaines différents." };
          return { success:true, message:"Tu sais comparer la surface d'attaque de plusieurs serveurs, un vrai réflexe de pro !" };
        }
      }
    }
  },

  // ============ LEÇON 11 ============
  {
    id: 'ch13-l11',
    title: "Sécuriser son propre serveur",
    icon: '🛡️',
    explanation: [
      { type:'text', heading:"Ne jamais faire confiance aux données reçues", html:
        "<p>La règle d'or de la sécurité web : <strong>ne jamais faire confiance à ce qu'envoie le client</strong>, même s'il semble inoffensif. Un serveur doit toujours VÉRIFIER les données reçues avant de les utiliser (rappelle-toi le Chapitre 6 !).</p>" },
      { type:'code', code: "server.post(\"/message\", function(req, res) {\n  if (req.body.texte.includes(\"<script>\")) {\n    res.status(400).send(\"Contenu interdit détecté !\");\n  } else {\n    res.send(\"Message reçu !\");\n  }\n});" },
      { type:'tip', html:"Cette technique protège contre une vraie attaque appelée <strong>XSS</strong> (\"Cross-Site Scripting\"), où un attaquant essaie d'injecter du code malveillant dans un site web via un formulaire !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "const server = createServer();\nserver.post(\"/message\", function(req, res) {\n  if (req.body.texte.includes(\"<script>\")) {\n    res.status(400).send(\"Contenu interdit détecté !\");\n  } else {\n    res.send(\"Message reçu !\");\n  }\n});\nserver.listen();\nconsole.log(request(\"POST\", \"/message\", { texte: \"<script>alert(1)</script>\" }));\nconsole.log(request(\"POST\", \"/message\", { texte: \"Bonjour !\" }));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée une route POST <code>/message</code> qui répond <code>400</code> si <code>req.body.texte</code> est vide (chaîne vide), sinon <code>200</code>.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["if (req.body.texte === \"\") { res.status(400).send(\"Vide !\"); } else { res.send(\"Reçu !\"); }"],
        solution: { js: "const server = createServer();\nserver.post(\"/message\", function(req, res) {\n  if (req.body.texte === \"\") {\n    res.status(400).send(\"Message vide interdit\");\n  } else {\n    res.send(\"Message reçu !\");\n  }\n});\nserver.listen();" },
        check(doc, win, C){
          const bad = C.request('POST', '/message', { texte: '' });
          if(bad.status !== 400) return { success:false, message:"Un message vide devrait être rejeté avec le statut 400." };
          const good = C.request('POST', '/message', { texte: 'Bonjour' });
          if(good.status === 404 || good.status === 400) return { success:false, message:"Un message valide devrait être accepté." };
          return { success:true, message:"Ton serveur rejette déjà les données invalides !" };
        }
      },
      moyen: {
        instructions: "Ajoute une vérification : si <code>req.body.texte</code> contient <code>\"&lt;script&gt;\"</code>, réponds <code>400</code> (protection basique contre le code malveillant).",
        tabs: [{ type:'js', starter: "const server = createServer();\nserver.post(\"/message\", function(req, res) {\n  if (req.body.texte === \"\") {\n    res.status(400).send(\"Message vide interdit\");\n    return;\n  }\n  // Ajoute la vérification anti-script ici\n  res.send(\"Message reçu !\");\n});\nserver.listen();" }],
        showConsole: true,
        hints: ["if (req.body.texte.includes(\"<script>\")) { res.status(400).send(\"Contenu interdit\"); return; }"],
        solution: { js: "const server = createServer();\nserver.post(\"/message\", function(req, res) {\n  if (req.body.texte === \"\") {\n    res.status(400).send(\"Message vide interdit\");\n    return;\n  }\n  if (req.body.texte.includes(\"<script>\")) {\n    res.status(400).send(\"Contenu interdit détecté\");\n    return;\n  }\n  res.send(\"Message reçu !\");\n});\nserver.listen();" },
        check(doc, win, C){
          const malicious = C.request('POST', '/message', { texte: '<script>alert(1)</script>' });
          if(malicious.status !== 400) return { success:false, message:"Un message contenant <script> devrait être rejeté avec le statut 400." };
          const good = C.request('POST', '/message', { texte: 'Bonjour' });
          if(good.status === 404 || good.status === 400) return { success:false, message:"Un message normal devrait toujours être accepté." };
          return { success:true, message:"Ton serveur se défend maintenant contre les injections de code !" };
        }
      },
      difficile: {
        instructions: "Combine les deux vérifications précédentes (vide OU contient <code>&lt;script&gt;</code>) DANS UNE SEULE condition avec <code>||</code>, puis teste avec un message trop long (plus de 100 caractères) comme 3ème condition.",
        tabs: [{ type:'js', starter: "const server = createServer();\nserver.post(\"/message\", function(req, res) {\n  let texte = req.body.texte;\n  let invalide = texte === \"\" || texte.includes(\"<script>\") || texte.length > 100;\n  // Utilise la variable invalide ici\n});\nserver.listen();" }],
        showConsole: true,
        hints: ["if (invalide) { res.status(400).send(\"Message invalide\"); } else { res.send(\"Message reçu !\"); }"],
        solution: { js: "const server = createServer();\nserver.post(\"/message\", function(req, res) {\n  let texte = req.body.texte;\n  let invalide = texte === \"\" || texte.includes(\"<script>\") || texte.length > 100;\n  if (invalide) {\n    res.status(400).send(\"Message invalide\");\n  } else {\n    res.send(\"Message reçu !\");\n  }\n});\nserver.listen();" },
        check(doc, win, C){
          const empty = C.request('POST', '/message', { texte: '' });
          const script = C.request('POST', '/message', { texte: '<script>x</script>' });
          const tooLong = C.request('POST', '/message', { texte: 'a'.repeat(101) });
          const good = C.request('POST', '/message', { texte: 'Bonjour' });
          if(empty.status !== 400 || script.status !== 400 || tooLong.status !== 400) return { success:false, message:"Les 3 cas invalides (vide, script, trop long) devraient tous être rejetés." };
          if(good.status === 404 || good.status === 400) return { success:false, message:"Un message normal devrait être accepté." };
          return { success:true, message:"Ton serveur combine 3 vérifications de sécurité, comme un vrai professionnel !" };
        }
      }
    }
  },

  // ============ LEÇON 12 — PROJET FINAL ============
  {
    id: 'ch13-l12',
    title: "🏆 Projet final : mini défi de cybersécurité",
    icon: '🚩',
    explanation: [
      { type:'text', heading:"Ton premier CTF !", html:
        "<p>Un <strong>CTF</strong> (\"Capture The Flag\") est un jeu de cybersécurité où il faut résoudre des défis pour trouver des \"drapeaux\" (flags) cachés. C'est exactement ce que font les vrais professionnels pour s'entraîner ! Voici ton tout premier mini-CTF, qui combine TOUT ce que tu as appris.</p>" },
      { type:'tip', html:"Bravo d'être arrivé jusqu'ici, Daouda ! Tu as maintenant de vraies bases solides en développement web, réseaux, Linux, ET cybersécurité." },
      { type:'terminal-demo', terminalType:'fs', intro:["Le drapeau est caché quelque part... trouve-le !"] }
    ],
    exercises: {
      facile: {
        instructions: "Le mot <code>\"DRAPEAU\"</code> a été chiffré avec César et un décalage de 3, ce qui donne <code>\"GUDSHDX\"</code>. Utilise <code>dechiffrerCesar</code> pour le retrouver et l'afficher.",
        tabs: [{ type:'js', starter: "function chiffrerCesar(texte, decalage) {\n  let resultat = \"\";\n  for (let i = 0; i < texte.length; i++) {\n    let code = texte.charCodeAt(i) - 65;\n    code = (code + decalage + 26) % 26;\n    resultat += String.fromCharCode(code + 65);\n  }\n  return resultat;\n}\nfunction dechiffrerCesar(texte, decalage) {\n  return chiffrerCesar(texte, -decalage);\n}\n\nlet messageChiffre = \"GUDSHDX\";\n// Déchiffre-le et affiche le résultat" }],
        showConsole: true,
        hints: ["console.log(dechiffrerCesar(messageChiffre, 3));"],
        solution: { js: "function chiffrerCesar(texte, decalage) {\n  let resultat = \"\";\n  for (let i = 0; i < texte.length; i++) {\n    let code = texte.charCodeAt(i) - 65;\n    code = (code + decalage + 26) % 26;\n    resultat += String.fromCharCode(code + 65);\n  }\n  return resultat;\n}\nfunction dechiffrerCesar(texte, decalage) {\n  return chiffrerCesar(texte, -decalage);\n}\nlet messageChiffre = \"GUDSHDX\";\nconsole.log(dechiffrerCesar(messageChiffre, 3));" },
        check(doc, win, C){
          if(!C.logsInclude('DRAPEAU')) return { success:false, message:"Tu devrais afficher \"DRAPEAU\" dans la console." };
          return { success:true, message:"🚩 Premier flag trouvé !" };
        }
      },
      moyen: {
        kind: 'terminal',
        terminalType: 'fs',
        instructions: "Un fichier caché <code>secret.txt</code> contient le vrai flag. Écris-le avec <code>echo \"FLAG{bien_joue}\" > secret.txt</code>, puis retrouve-le avec <code>grep FLAG secret.txt</code>.",
        hints: ["echo \"FLAG{bien_joue}\" > secret.txt", "grep FLAG secret.txt"],
        solution: { terminal: "echo \"FLAG{bien_joue}\" > secret.txt\ngrep FLAG secret.txt" },
        check(state){
          const dir = FileSystemSim.currentDir(state);
          const f = dir.children['secret.txt'];
          if(!f || !f.content.includes('FLAG')) return { success:false, message:"secret.txt devrait contenir un texte commençant par FLAG." };
          if(!state.history.some(h => h.trim().startsWith('grep'))) return { success:false, message:"Il manque une commande grep pour retrouver le flag." };
          return { success:true, message:"🚩 Deuxième flag trouvé avec grep, exactement comme un vrai CTF !" };
        }
      },
      difficile: {
        instructions: "Le bon mot de passe se trouve dans cette liste de candidats : <code>[\"1234\", \"password\", \"Renard42!\", \"azerty\"]</code>. Écris une boucle qui teste chaque candidat avec <code>estMotDePasseFort</code>, et affiche celui qui est fort (le seul qui passe le test !).",
        tabs: [{ type:'js', starter: "function estMotDePasseFort(mdp) {\n  let long = mdp.length >= 8;\n  let majuscule = /[A-Z]/.test(mdp);\n  let chiffre = /[0-9]/.test(mdp);\n  return long && majuscule && chiffre;\n}\n\nlet candidats = [\"1234\", \"password\", \"Renard42!\", \"azerty\"];\n// Trouve et affiche le mot de passe fort" }],
        showConsole: true,
        hints: [
          "for (let i = 0; i < candidats.length; i++) {\n  if (estMotDePasseFort(candidats[i])) {\n    console.log(candidats[i]);\n  }\n}"
        ],
        solution: { js: "function estMotDePasseFort(mdp) {\n  let long = mdp.length >= 8;\n  let majuscule = /[A-Z]/.test(mdp);\n  let chiffre = /[0-9]/.test(mdp);\n  return long && majuscule && chiffre;\n}\nlet candidats = [\"1234\", \"password\", \"Renard42!\", \"azerty\"];\nfor (let i = 0; i < candidats.length; i++) {\n  if (estMotDePasseFort(candidats[i])) {\n    console.log(candidats[i]);\n  }\n}" },
        check(doc, win, C){
          if(!C.logsInclude('Renard42')) return { success:false, message:"Ta boucle devrait afficher \"Renard42!\", le seul mot de passe fort de la liste." };
          return { success:true, message:"🏆 BRAVO DAOUDA ! Tu as trouvé les 3 flags de ton premier CTF ! Chapitre 13 terminé — tu as maintenant de vraies bases en cybersécurité !" };
        }
      }
    }
  }

  ]
};
