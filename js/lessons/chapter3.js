const CHAPTER_3 = {
  id: 'ch3',
  title: 'JavaScript — Donner la vie',
  subtitle: 'Apprends à rendre tes pages interactives',
  icon: '⚡',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch3-l1',
    title: "C'est quoi JavaScript ?",
    icon: '⚡',
    explanation: [
      { type:'text', heading:"Donner vie à ta page", html:
        "<p>Le HTML construit, le CSS décore, et <strong>JavaScript</strong> fait <em>bouger</em> les choses ! Avec JavaScript, tu peux réagir aux clics, faire des calculs, et changer la page en temps réel.</p>" },
      { type:'code', code: "console.log(\"Bonjour depuis JavaScript !\");" },
      { type:'text', heading:"La console : ton meilleur ami", html:
        "<p><code>console.log(...)</code> affiche un message dans la <strong>console</strong> (une zone spéciale pour voir ce que fait ton code). C'est l'outil numéro 1 pour comprendre et déboguer ton code !</p>" },
      { type:'tip', html:"Dans cette appli, écris ton JavaScript dans l'onglet <strong>JavaScript</strong>, et regarde les résultats apparaître dans la console en bas à droite." },
      { type:'demo', tabs:[{ type:'js', starter:"console.log(\"Coucou Daouda !\");\nconsole.log(2 + 2);" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Utilise <code>console.log(...)</code> pour afficher le message <strong>\"Bonjour !\"</strong> dans la console.",
        tabs: [{ type:'js', starter:"// Écris ton code ici" }],
        showConsole: true,
        hints: ["Écris console.log(\"Bonjour !\");", "N'oublie pas les guillemets autour du texte !"],
        solution: { js: "console.log(\"Bonjour !\");" },
        check(doc, win, C){
          if(!C.logsInclude('bonjour')) return { success:false, message:"Je ne vois pas \"Bonjour !\" dans la console." };
          return { success:true, message:"Ton premier message JavaScript est affiché !" };
        }
      },
      moyen: {
        instructions: "Affiche DEUX messages différents dans la console, avec deux <code>console.log(...)</code>.",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["Utilise deux lignes, chacune avec console.log(\"...\");"],
        solution: { js: "console.log(\"Premier message\");\nconsole.log(\"Deuxième message\");" },
        check(doc, win, C, logs){
          if(logs.length < 2) return { success:false, message:"Il me faut deux messages affichés dans la console." };
          if(logs[0].text.trim().toLowerCase() === logs[1].text.trim().toLowerCase()) return { success:false, message:"Tes deux messages doivent être différents." };
          return { success:true, message:"Deux messages, bravo !" };
        }
      },
      difficile: {
        instructions: "Utilise <code>console.log(...)</code> pour afficher le résultat du calcul <strong>7 fois 6</strong> (utilise le symbole <code>*</code> pour multiplier).",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["Écris console.log(7 * 6);", "Pas besoin de guillemets pour un calcul !"],
        solution: { js: "console.log(7 * 6);" },
        check(doc, win, C){
          if(!C.logsInclude('42')) return { success:false, message:"Je ne vois pas le résultat 42 dans la console." };
          return { success:true, message:"JavaScript sait déjà faire des calculs pour toi !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch3-l2',
    title: "Les variables",
    icon: '📦',
    explanation: [
      { type:'text', heading:"Des boîtes pour garder des infos", html:
        "<p>Une <strong>variable</strong> est une boîte qui garde une valeur en mémoire, avec un nom. On la crée avec <code>let</code> (si elle peut changer) ou <code>const</code> (si elle ne changera jamais).</p>" },
      { type:'code', code: "let prenom = \"Daouda\";\nconst age = 7;\nconsole.log(prenom);\nconsole.log(age);" },
      { type:'text', heading:"Les types de base", html:
        "<p>Une variable peut contenir du <strong>texte</strong> (entre guillemets, ex: <code>\"salut\"</code>), un <strong>nombre</strong> (sans guillemets, ex: <code>7</code>), ou un <strong>booléen</strong> (<code>true</code> ou <code>false</code>, qui répond à une question par vrai ou faux).</p>" },
      { type:'text', heading:"Le template string : insérer une variable dans une phrase", html:
        "<p>Pour écrire une phrase QUI CONTIENT une variable, utilise un <strong>template string</strong> : au lieu de guillemets <code>\" \"</code>, utilise des <strong>accents graves</strong> <code>&#96; &#96;</code> (la touche à gauche du 1, avec Shift). À l'intérieur, <code>${nomDeLaVariable}</code> insère automatiquement sa valeur dans le texte.</p>" },
      { type:'code', code: "let prenom = \"Daouda\";\nlet age = 7;\nconsole.log(`Je m'appelle ${prenom} et j'ai ${age} ans.`);\n// Affiche : Je m'appelle Daouda et j'ai 7 ans." },
      { type:'tip', html:"Utilise <code>const</code> par défaut, et <code>let</code> seulement si tu sais que la valeur va changer plus tard ! Et retiens bien : accents graves <code>&#96; &#96;</code> pour un template string, pas des guillemets classiques." },
      { type:'demo', tabs:[{ type:'js', starter:"let animal = \"renard\";\nconst nombrePattes = 4;\nconsole.log(animal);\nconsole.log(nombrePattes);" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée une variable <code>prenom</code> avec ton prénom (<code>let prenom = \"...\";</code>), puis affiche-la avec <code>console.log(prenom)</code>.",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["let prenom = \"Daouda\";", "console.log(prenom);  (sans guillemets autour de prenom !)"],
        solution: { js: "let prenom = \"Daouda\";\nconsole.log(prenom);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/(let|const)\s+\w+/.test(js)) return { success:false, message:"Il manque une déclaration de variable avec let ou const." };
          if(logs.length < 1 || logs[0].text.trim().length < 1) return { success:false, message:"Ta variable ne s'affiche pas encore dans la console." };
          return { success:true, message:"Ta première variable fonctionne !" };
        }
      },
      moyen: {
        instructions: "Crée une variable pour ton prénom (texte) ET une variable pour ton âge (nombre), puis affiche les deux avec console.log.",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["Deux variables : une avec des guillemets (texte), une sans (nombre).", "Deux console.log, un pour chaque variable."],
        solution: { js: "let prenom = \"Daouda\";\nlet age = 7;\nconsole.log(prenom);\nconsole.log(age);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          const decls = (js.match(/(let|const)\s+\w+/g) || []).length;
          if(decls < 2) return { success:false, message:"Il me faut deux variables déclarées." };
          if(logs.length < 2) return { success:false, message:"Il me faut deux affichages dans la console." };
          return { success:true, message:"Deux variables bien utilisées !" };
        }
      },
      difficile: {
        instructions: "Crée une variable booléenne <code>aimeCoder</code> qui vaut <code>true</code>, et affiche une phrase complète avec un <strong>template string</strong> : <code>console.log(&#96;J'aime coder : ${aimeCoder}&#96;)</code>.",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["let aimeCoder = true;", "Utilise des accents graves ` ` (pas des guillemets) pour le template string, avec ${aimeCoder} à l'intérieur."],
        solution: { js: "let aimeCoder = true;\nconsole.log(`J'aime coder : ${aimeCoder}`);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/(let|const)\s+\w+\s*=\s*true/.test(js) && !/(let|const)\s+\w+\s*=\s*false/.test(js)) return { success:false, message:"Il manque une variable booléenne (true ou false)." };
          if(!js.includes('`') || !js.includes('${')) return { success:false, message:"Utilise un template string avec des accents graves ` et ${...}." };
          if(!C.logsInclude('true') && !C.logsInclude('false')) return { success:false, message:"Le résultat affiché doit contenir true ou false." };
          return { success:true, message:"Un booléen et un template string, tu progresses vite !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch3-l3',
    title: "Calculer et afficher",
    icon: '🧮',
    explanation: [
      { type:'text', heading:"Les opérateurs mathématiques", html:
        "<p>JavaScript sait calculer : <code>+</code> (addition), <code>-</code> (soustraction), <code>*</code> (multiplication), <code>/</code> (division). On peut stocker un calcul dans une variable, puis l'afficher.</p>" },
      { type:'code', code: "let a = 10;\nlet b = 3;\nlet somme = a + b;\nconsole.log(somme);" },
      { type:'text', heading:"Mélanger texte et variables", html:
        "<p>Avec un <strong>template string</strong> (texte entre accents graves <code>&#96; &#96;</code>), tu peux insérer une variable avec <code>${variable}</code> directement dans une phrase !</p>" },
      { type:'tip', html:"Essaie de calculer avec des parenthèses, comme en maths : <code>(a + b) * 2</code> !" },
      { type:'demo', tabs:[{ type:'js', starter:"let largeur = 5;\nlet hauteur = 3;\nlet aire = largeur * hauteur;\nconsole.log(`L'aire est de ${aire}`);" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Affiche dans la console le résultat de <code>15 + 27</code>.",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["console.log(15 + 27);"],
        solution: { js: "console.log(15 + 27);" },
        check(doc, win, C){
          if(!C.logsInclude('42')) return { success:false, message:"Je ne vois pas 42 dans la console." };
          return { success:true, message:"Bien calculé !" };
        }
      },
      moyen: {
        instructions: "Crée deux variables numériques, calcule leur produit (multiplication) dans une troisième variable, puis affiche le résultat.",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["let a = ...; let b = ...; let resultat = a * b; console.log(resultat);"],
        solution: { js: "let a = 6;\nlet b = 7;\nlet resultat = a * b;\nconsole.log(resultat);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('*')) return { success:false, message:"Il manque une multiplication avec *." };
          if(logs.length < 1) return { success:false, message:"Il manque un console.log pour voir le résultat." };
          return { success:true, message:"Ton calcul fonctionne parfaitement !" };
        }
      },
      difficile: {
        instructions: "Calcule l'aire d'un rectangle (largeur × hauteur) et affiche une phrase complète avec un template string, par exemple : <code>&#96;L'aire est de ${aire}&#96;</code>.",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["Utilise ` ` (accents graves) et ${aire} dans ton console.log."],
        solution: { js: "let largeur = 8;\nlet hauteur = 4;\nlet aire = largeur * hauteur;\nconsole.log(`L'aire est de ${aire}`);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('*')) return { success:false, message:"Il manque une multiplication pour calculer l'aire." };
          if(!js.includes('`') || !js.includes('${')) return { success:false, message:"Utilise un template string avec ` et ${...}." };
          if(logs.length < 1 || logs[0].text.length < 4) return { success:false, message:"Ta phrase ne s'affiche pas encore correctement." };
          return { success:true, message:"Une belle phrase avec un calcul intégré, superbe !" };
        }
      }
    }
  },

  // ============ LEÇON 4 ============
  {
    id: 'ch3-l4',
    title: "Les conditions",
    icon: '🔀',
    explanation: [
      { type:'text', heading:"Si... alors... sinon...", html:
        "<p>Avec <code>if</code> et <code>else</code>, ton code peut prendre des décisions ! Il faut comparer des valeurs avec <code>===</code> (égal à), <code>&gt;</code> (plus grand que), <code>&lt;</code> (plus petit que).</p>" },
      { type:'code', code: "let age = 7;\nif (age < 10) {\n  console.log(\"Tu es un enfant\");\n} else {\n  console.log(\"Tu es plus grand\");\n}" },
      { type:'tip', html:"Utilise toujours <code>===</code> (trois signes égal) pour comparer, pas <code>=</code> (qui sert à donner une valeur à une variable) !" },
      { type:'demo', tabs:[{ type:'js', starter:"let score = 8;\nif (score >= 5) {\n  console.log(\"Réussi !\");\n} else {\n  console.log(\"Réessaie\");\n}" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée une variable <code>note</code> qui vaut 15. Si elle est supérieure ou égale à 10, affiche \"Réussi\", sinon affiche \"Échoué\".",
        tabs: [{ type:'js', starter:"let note = 15;\n\n// Ton if/else ici" }],
        showConsole: true,
        hints: ["if (note >= 10) { console.log(\"Réussi\"); } else { console.log(\"Échoué\"); }"],
        solution: { js: "let note = 15;\nif (note >= 10) {\n  console.log(\"Réussi\");\n} else {\n  console.log(\"Échoué\");\n}" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/\bif\s*\(/.test(js)) return { success:false, message:"Il manque un if dans ton code." };
          if(!/\belse\b/.test(js)) return { success:false, message:"Il manque un else dans ton code." };
          if(!C.logsInclude('réussi') && !C.logsInclude('reussi')) return { success:false, message:"Avec note = 15, ton code devrait afficher \"Réussi\"." };
          return { success:true, message:"Ta condition fonctionne parfaitement !" };
        }
      },
      moyen: {
        instructions: "Crée une variable <code>meteo</code> qui vaut <code>\"pluie\"</code>. Si elle vaut \"pluie\", affiche \"Prends un parapluie\", sinon affiche \"Profite du soleil\".",
        tabs: [{ type:'js', starter:"let meteo = \"pluie\";\n\n// Ton if/else ici" }],
        showConsole: true,
        hints: ["Compare avec ===  :  if (meteo === \"pluie\") { ... }"],
        solution: { js: "let meteo = \"pluie\";\nif (meteo === \"pluie\") {\n  console.log(\"Prends un parapluie\");\n} else {\n  console.log(\"Profite du soleil\");\n}" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('===')) return { success:false, message:"Utilise === pour comparer le texte." };
          if(!/\belse\b/.test(js)) return { success:false, message:"Il manque un else." };
          if(!C.logsInclude('parapluie')) return { success:false, message:"Avec meteo = \"pluie\", ton code devrait parler de parapluie." };
          return { success:true, message:"Une condition sur du texte, bien joué !" };
        }
      },
      difficile: {
        instructions: "Crée une variable <code>note</code> qui vaut 12. Utilise <code>if</code>, <code>else if</code> ET <code>else</code> pour afficher \"Excellent\" si &gt;= 16, \"Bien\" si &gt;= 10, sinon \"À améliorer\".",
        tabs: [{ type:'js', starter:"let note = 12;\n\n// Ton if / else if / else ici" }],
        showConsole: true,
        hints: ["if (note >= 16) { ... } else if (note >= 10) { ... } else { ... }"],
        solution: { js: "let note = 12;\nif (note >= 16) {\n  console.log(\"Excellent\");\n} else if (note >= 10) {\n  console.log(\"Bien\");\n} else {\n  console.log(\"À améliorer\");\n}" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/else\s+if/.test(js)) return { success:false, message:"Il manque un else if dans ton code." };
          if(!C.logsInclude('bien')) return { success:false, message:"Avec note = 12, ton code devrait afficher \"Bien\"." };
          return { success:true, message:"Trois chemins possibles, ton code sait bien décider !" };
        }
      }
    }
  },

  // ============ LEÇON 5 ============
  {
    id: 'ch3-l5',
    title: "Les boucles",
    icon: '🔁',
    explanation: [
      { type:'text', heading:"Répéter sans se fatiguer", html:
        "<p>Une boucle répète une action plusieurs fois. La boucle <code>for</code> est parfaite quand tu sais combien de fois répéter : <code>for (let i = 0; i &lt; 5; i++)</code> répète 5 fois, avec <code>i</code> qui vaut 0, 1, 2, 3, puis 4.</p>" },
      { type:'code', code: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}" },
      { type:'tip', html:"⚠️ Attention aux boucles infinies ! Vérifie toujours que ta condition finit par devenir fausse, sinon ton navigateur va bloquer." },
      { type:'demo', tabs:[{ type:'js', starter:"for (let i = 1; i <= 5; i++) {\n  console.log(\"Tour numéro \" + i);\n}" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Utilise une boucle <code>for</code> pour afficher les nombres de 1 à 5 (un console.log à chaque tour).",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["for (let i = 1; i <= 5; i++) { console.log(i); }"],
        solution: { js: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/\bfor\s*\(/.test(js)) return { success:false, message:"Il manque une boucle for." };
          if(logs.length < 5) return { success:false, message:"Ta boucle n'affiche pas encore 5 nombres." };
          if(!C.logsInclude('5')) return { success:false, message:"Je ne vois pas le nombre 5 dans les résultats." };
          return { success:true, message:"Ta boucle compte parfaitement jusqu'à 5 !" };
        }
      },
      moyen: {
        instructions: "Utilise une boucle <code>for</code> pour afficher les <strong>10 premiers</strong> nombres (de 1 à 10).",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["for (let i = 1; i <= 10; i++) { console.log(i); }"],
        solution: { js: "for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}" },
        check(doc, win, C, logs){
          if(logs.length < 10) return { success:false, message:"Ta boucle doit afficher 10 nombres." };
          if(!C.logsInclude('10')) return { success:false, message:"Je ne vois pas le nombre 10 dans les résultats." };
          return { success:true, message:"Dix tours de boucle, parfait !" };
        }
      },
      difficile: {
        instructions: "Utilise une boucle <code>for</code> pour additionner les nombres de 1 à 10 dans une variable <code>total</code>, puis affiche le résultat final (qui doit être 55).",
        tabs: [{ type:'js', starter:"let total = 0;\n\n// Ta boucle ici\n\nconsole.log(total);" }],
        showConsole: true,
        hints: ["Dans la boucle, écris : total = total + i;", "N'oublie pas console.log(total); après la boucle."],
        solution: { js: "let total = 0;\nfor (let i = 1; i <= 10; i++) {\n  total = total + i;\n}\nconsole.log(total);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/\bfor\s*\(/.test(js)) return { success:false, message:"Il manque une boucle for." };
          if(!C.logsInclude('55')) return { success:false, message:"Le total affiché n'est pas encore 55." };
          return { success:true, message:"Une boucle qui additionne, tu es un champion des calculs !" };
        }
      }
    }
  },

  // ============ LEÇON 6 ============
  {
    id: 'ch3-l6',
    title: "Les fonctions",
    icon: '⚙️',
    explanation: [
      { type:'text', heading:"Créer tes propres pouvoirs", html:
        "<p>Une <strong>fonction</strong> est un bloc de code réutilisable, avec un nom. On la crée avec <code>function</code>, on peut lui donner des <strong>paramètres</strong> (des informations qu'elle reçoit), et elle peut <code>return</code> (renvoyer) un résultat.</p>" },
      { type:'code', code: "function direBonjour(prenom) {\n  return \"Bonjour \" + prenom + \" !\";\n}\nconsole.log(direBonjour(\"Daouda\"));" },
      { type:'tip', html:"Une fonction, c'est comme une recette de cuisine : tu lui donnes des ingrédients (paramètres), elle te rend un plat (le résultat avec return) !" },
      { type:'text', heading:"% : le reste d'une division", html:
        "<p>L'opérateur <code>%</code> (modulo) donne le <strong>reste</strong> d'une division. <code>7 % 2</code> vaut <code>1</code> (7 divisé par 2 = 3, reste 1). Astuce très utilisée : un nombre est <strong>pair</strong> si <code>nombre % 2 === 0</code> (aucun reste en le divisant par 2).</p>" },
      { type:'code', code: "console.log(7 % 2);   // 1 (reste de 7÷2)\nconsole.log(10 % 2);  // 0 (10 est pair, aucun reste)\nconsole.log(9 % 3);   // 0 (9 est un multiple de 3)" },
      { type:'demo', tabs:[{ type:'js', starter:"function addition(a, b) {\n  return a + b;\n}\nconsole.log(addition(3, 4));\nconsole.log(addition(10, 20));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée une fonction <code>carre(nombre)</code> qui retourne le carré du nombre (nombre × nombre).",
        tabs: [{ type:'js', starter:"function carre(nombre) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["Utilise return nombre * nombre;"],
        solution: { js: "function carre(nombre) {\n  return nombre * nombre;\n}" },
        check(doc, win, C){
          if(typeof win.carre !== 'function') return { success:false, message:"Il manque une fonction nommée carre." };
          if(win.carre(5) !== 25) return { success:false, message:"carre(5) devrait donner 25." };
          return { success:true, message:"Ta fonction calcule parfaitement les carrés !" };
        }
      },
      moyen: {
        instructions: "Crée une fonction <code>estPair(nombre)</code> qui retourne <code>true</code> si le nombre est pair, <code>false</code> sinon (astuce : utilise <code>nombre % 2 === 0</code>).",
        tabs: [{ type:'js', starter:"function estPair(nombre) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["% donne le reste d'une division.", "return nombre % 2 === 0;"],
        solution: { js: "function estPair(nombre) {\n  return nombre % 2 === 0;\n}" },
        check(doc, win, C){
          if(typeof win.estPair !== 'function') return { success:false, message:"Il manque une fonction nommée estPair." };
          if(win.estPair(4) !== true) return { success:false, message:"estPair(4) devrait donner true." };
          if(win.estPair(7) !== false) return { success:false, message:"estPair(7) devrait donner false." };
          return { success:true, message:"Ta fonction sait reconnaître les nombres pairs !" };
        }
      },
      difficile: {
        instructions: "Crée une fonction <code>plusGrand(a, b)</code> qui retourne le plus grand des deux nombres reçus.",
        tabs: [{ type:'js', starter:"function plusGrand(a, b) {\n  // ton code ici\n}" }],
        showConsole: true,
        hints: ["Utilise un if pour comparer a et b, et retourne le bon.", "if (a > b) { return a; } else { return b; }"],
        solution: { js: "function plusGrand(a, b) {\n  if (a > b) {\n    return a;\n  } else {\n    return b;\n  }\n}" },
        check(doc, win, C){
          if(typeof win.plusGrand !== 'function') return { success:false, message:"Il manque une fonction nommée plusGrand." };
          if(win.plusGrand(3, 8) !== 8) return { success:false, message:"plusGrand(3, 8) devrait donner 8." };
          if(win.plusGrand(10, 2) !== 10) return { success:false, message:"plusGrand(10, 2) devrait donner 10." };
          return { success:true, message:"Ta fonction compare parfaitement les nombres !" };
        }
      }
    }
  },

  // ============ LEÇON 7 ============
  {
    id: 'ch3-l7',
    title: "Les tableaux",
    icon: '🗃️',
    explanation: [
      { type:'text', heading:"Des listes de choses", html:
        "<p>Un <strong>tableau</strong> (array) contient plusieurs valeurs dans l'ordre, entre crochets <code>[ ]</code>. On accède à un élément avec son <strong>index</strong> (sa position, en commençant à 0 !).</p>" },
      { type:'code', code: "let fruits = [\"pomme\", \"banane\", \"kiwi\"];\nconsole.log(fruits[0]);\nconsole.log(fruits.length);" },
      { type:'tip', html:"<code>tableau.length</code> te donne le nombre d'éléments. <code>tableau.push(x)</code> ajoute <code>x</code> à la fin du tableau !" },
      { type:'demo', tabs:[{ type:'js', starter:"let animaux = [\"chat\", \"chien\", \"lapin\"];\nconsole.log(animaux[1]);\nanimaux.push(\"tortue\");\nconsole.log(animaux.length);" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée un tableau <code>couleurs</code> avec 3 couleurs, puis affiche le premier élément (<code>couleurs[0]</code>).",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["let couleurs = [\"rouge\", \"vert\", \"bleu\"];", "console.log(couleurs[0]);"],
        solution: { js: "let couleurs = [\"rouge\", \"vert\", \"bleu\"];\nconsole.log(couleurs[0]);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('[') || !js.includes(']')) return { success:false, message:"Il manque un tableau avec des crochets [ ]." };
          if(logs.length < 1 || logs[0].text.trim().length < 1) return { success:false, message:"Rien ne s'affiche encore dans la console." };
          return { success:true, message:"Ton premier tableau fonctionne !" };
        }
      },
      moyen: {
        instructions: "Crée un tableau de 3 nombres, affiche sa <code>.length</code> (le nombre d'éléments), qui doit valoir 3.",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["let nombres = [10, 20, 30];", "console.log(nombres.length);"],
        solution: { js: "let nombres = [10, 20, 30];\nconsole.log(nombres.length);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('.length')) return { success:false, message:"Utilise .length pour compter les éléments." };
          if(!C.logsInclude('3')) return { success:false, message:"La longueur affichée n'est pas 3." };
          return { success:true, message:"Tu sais compter les éléments d'un tableau !" };
        }
      },
      difficile: {
        instructions: "Crée un tableau de 3 jouets, utilise <code>.push(...)</code> pour en ajouter un 4ème, puis affiche le tableau entier avec console.log.",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["let jouets = [\"a\", \"b\", \"c\"]; jouets.push(\"d\");", "console.log(jouets); affiche tout le tableau d'un coup."],
        solution: { js: "let jouets = [\"ballon\", \"robot\", \"puzzle\"];\njouets.push(\"cerf-volant\");\nconsole.log(jouets);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('.push(')) return { success:false, message:"Utilise .push(...) pour ajouter un élément." };
          if(logs.length < 1) return { success:false, message:"Il manque un console.log pour voir le résultat." };
          const lastLog = logs[logs.length - 1].text;
          const commaCount = (lastLog.match(/,/g) || []).length;
          if(commaCount < 3) return { success:false, message:"Ton tableau affiché ne semble pas avoir 4 éléments." };
          return { success:true, message:"Tu sais ajouter des éléments à un tableau !" };
        }
      }
    }
  },

  // ============ LEÇON 8 ============
  {
    id: 'ch3-l8',
    title: "Attraper des éléments de la page",
    icon: '🎣',
    explanation: [
      { type:'text', heading:"Parler au HTML depuis JavaScript", html:
        "<p><code>document.querySelector(\"sélecteur\")</code> attrape un élément de ta page (comme en CSS : <code>#id</code>, <code>.classe</code>, ou une balise). Ensuite, <code>.textContent</code> permet de lire ou changer son texte.</p>" },
      { type:'code', code: "let titre = document.querySelector(\"#titre\");\ntitre.textContent = \"Nouveau titre !\";" },
      { type:'tip', html:"<code>.innerHTML</code> fonctionne comme <code>.textContent</code>, mais permet aussi d'insérer de vraies balises HTML, comme <code>&lt;strong&gt;</code> !" },
      { type:'text', heading:"Attraper PLUSIEURS éléments avec querySelectorAll et forEach", html:
        "<p><code>document.querySelectorAll(\"sélecteur\")</code> attrape TOUS les éléments qui correspondent (pas un seul), sous forme d'une liste. Pour faire quelque chose sur chacun d'eux, on utilise <code>.forEach(function(element) { ... })</code> : cette fonction se répète automatiquement pour chaque élément de la liste, un peu comme une boucle <code>for</code> spécialisée. La fonction que tu écris entre parenthèses est appelée une <strong>fonction de rappel</strong> (callback) : tu ne l'appelles pas toi-même, c'est <code>.forEach</code> qui l'appelle pour toi, une fois par élément.</p>" },
      { type:'code', code: "let paragraphes = document.querySelectorAll(\"p\");\nparagraphes.forEach(function(p) {\n  p.style.color = \"blue\";\n});\n// Chaque <p> de la page devient bleu, un par un" },
      { type:'demo', tabs:[
        { type:'html', starter:"<p id=\"message\">Texte original</p>", readonly:true },
        { type:'js', starter:"let message = document.querySelector(\"#message\");\nmessage.textContent = \"Texte changé par JavaScript !\";" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Utilise <code>document.querySelector(\"#message\")</code> pour changer le texte du paragraphe en <strong>\"Nouveau texte\"</strong>.",
        tabs: [
          { type:'html', starter:"<p id=\"message\">Ancien texte</p>", readonly:true },
          { type:'js', starter:"// Ton code ici" }
        ],
        hints: ["let el = document.querySelector(\"#message\");", "el.textContent = \"Nouveau texte\";"],
        solution: { js: "let el = document.querySelector(\"#message\");\nel.textContent = \"Nouveau texte\";" },
        check(doc, win, C){
          const t = C.text('#message');
          if(t.toLowerCase().includes('ancien') || t.length < 3) return { success:false, message:"Le texte du paragraphe n'a pas encore changé." };
          return { success:true, message:"Tu as changé le texte depuis JavaScript !" };
        }
      },
      moyen: {
        instructions: "Sélectionne l'élément avec la classe <code>.titre</code> et change son <code>innerHTML</code> pour qu'il contienne un mot en <code>&lt;strong&gt;</code>.",
        tabs: [
          { type:'html', starter:"<h2 class=\"titre\">Titre</h2>", readonly:true },
          { type:'js', starter:"" }
        ],
        hints: ["let el = document.querySelector(\".titre\");", "el.innerHTML = \"Titre <strong>important</strong>\";"],
        solution: { js: "let el = document.querySelector(\".titre\");\nel.innerHTML = \"Titre <strong>important</strong>\";" },
        check(doc, win, C){
          if(!C.exists('.titre strong')) return { success:false, message:"Il manque une balise <strong> à l'intérieur du titre." };
          return { success:true, message:"Tu as inséré du vrai HTML depuis JavaScript !" };
        }
      },
      difficile: {
        instructions: "Utilise <code>document.querySelectorAll(\".item\")</code> pour attraper TOUS les éléments avec la classe .item, puis utilise <code>.forEach(...)</code> pour changer le texte de chacun.",
        tabs: [
          { type:'html', starter:"<p class=\"item\">Item 1</p>\n<p class=\"item\">Item 2</p>\n<p class=\"item\">Item 3</p>", readonly:true },
          { type:'js', starter:"let items = document.querySelectorAll(\".item\");\n\n// Utilise items.forEach(...) ici" }
        ],
        hints: ["items.forEach(function(item) { item.textContent = \"Changé !\"; });"],
        solution: { js: "let items = document.querySelectorAll(\".item\");\nitems.forEach(function(item) {\n  item.textContent = \"Changé !\";\n});" },
        check(doc, win, C){
          const items = C.all('.item');
          if(items.length < 3) return { success:false, message:"Il devrait y avoir 3 éléments .item." };
          if(items.some(i => i.textContent.includes('Item '))) return { success:false, message:"Tous les éléments .item doivent avoir un nouveau texte." };
          return { success:true, message:"Tu as changé plusieurs éléments avec une seule boucle, bravo !" };
        }
      }
    }
  },

  // ============ LEÇON 9 ============
  {
    id: 'ch3-l9',
    title: "Réagir aux clics",
    icon: '👆',
    explanation: [
      { type:'text', heading:"Écouter les événements", html:
        "<p><code>addEventListener(\"click\", function() { ... })</code> permet d'exécuter du code quand un élément est cliqué ! C'est ce qui rend une page vraiment interactive.</p>" },
      { type:'code', code: "let bouton = document.querySelector(\"#btn\");\nbouton.addEventListener(\"click\", function() {\n  console.log(\"Cliqué !\");\n});" },
      { type:'tip', html:"Le code à l'intérieur de la fonction ne s'exécute PAS tout de suite : il attend patiemment que quelqu'un clique !" },
      { type:'text', heading:"Inverser un booléen avec ! (NOT)", html:
        "<p>Le point d'exclamation <code>!</code> devant une valeur booléenne l'<strong>inverse</strong> : <code>!true</code> vaut <code>false</code>, et <code>!false</code> vaut <code>true</code>. Écrit <code>variable = !variable;</code>, ça bascule une variable entre vrai et faux à chaque fois — exactement ce qu'il faut pour un interrupteur !</p>" },
      { type:'code', code: "let allume = false;\nallume = !allume;  // allume devient true\nconsole.log(allume);\nallume = !allume;  // allume redevient false\nconsole.log(allume);" },
      { type:'demo', tabs:[
        { type:'html', starter:"<button id=\"btn\">Clique-moi</button>\n<p id=\"resultat\"></p>", readonly:true },
        { type:'js', starter:"let btn = document.querySelector(\"#btn\");\nlet resultat = document.querySelector(\"#resultat\");\nbtn.addEventListener(\"click\", function() {\n  resultat.textContent = \"Tu as cliqué !\";\n});" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Quand on clique sur le bouton <code>#btn</code>, change le texte de <code>#resultat</code> en \"Cliqué !\".",
        tabs: [
          { type:'html', starter:"<button id=\"btn\">Clique ici</button>\n<p id=\"resultat\">En attente...</p>", readonly:true },
          { type:'js', starter:"let btn = document.querySelector(\"#btn\");\nlet resultat = document.querySelector(\"#resultat\");\n\n// Ajoute ton addEventListener ici" }
        ],
        hints: ["btn.addEventListener(\"click\", function() {\n  resultat.textContent = \"Cliqué !\";\n});"],
        solution: { js: "let btn = document.querySelector(\"#btn\");\nlet resultat = document.querySelector(\"#resultat\");\nbtn.addEventListener(\"click\", function() {\n  resultat.textContent = \"Cliqué !\";\n});" },
        check(doc, win, C){
          const btn = doc.querySelector('#btn');
          if(!btn) return { success:false, message:"Il manque le bouton #btn." };
          btn.click();
          const t = C.text('#resultat');
          if(!t.toLowerCase().includes('cliqué') && !t.toLowerCase().includes('clique')) return { success:false, message:"Après un clic, le texte devrait parler d'un clic." };
          return { success:true, message:"Ton bouton réagit au clic, bravo !" };
        }
      },
      moyen: {
        instructions: "Crée un compteur : à chaque clic sur le bouton, augmente une variable de 1 et affiche-la dans <code>#compteur</code>.",
        tabs: [
          { type:'html', starter:"<button id=\"btn\">+1</button>\n<p id=\"compteur\">0</p>", readonly:true },
          { type:'js', starter:"let compte = 0;\nlet btn = document.querySelector(\"#btn\");\nlet affichage = document.querySelector(\"#compteur\");\n\n// Ton addEventListener ici" }
        ],
        hints: ["Dans la fonction : compte = compte + 1; affichage.textContent = compte;"],
        solution: { js: "let compte = 0;\nlet btn = document.querySelector(\"#btn\");\nlet affichage = document.querySelector(\"#compteur\");\nbtn.addEventListener(\"click\", function() {\n  compte = compte + 1;\n  affichage.textContent = compte;\n});" },
        check(doc, win, C){
          const btn = doc.querySelector('#btn');
          if(!btn) return { success:false, message:"Il manque le bouton #btn." };
          btn.click(); btn.click(); btn.click();
          const t = C.text('#compteur').trim();
          if(t !== '3') return { success:false, message:`Après 3 clics, le compteur devrait afficher 3 (j'ai vu "${t}").` };
          return { success:true, message:"Ton compteur fonctionne à la perfection !" };
        }
      },
      difficile: {
        instructions: "Crée un bouton qui change de texte à chaque clic : \"Éteint\" puis \"Allumé\", puis \"Éteint\" à nouveau (comme un interrupteur).",
        tabs: [
          { type:'html', starter:"<button id=\"interrupteur\">Éteint</button>", readonly:true },
          { type:'js', starter:"let btn = document.querySelector(\"#interrupteur\");\n\n// Ton code ici" }
        ],
        hints: ["Utilise une variable let allume = false; et un if/else dans le click pour inverser l'état et le texte."],
        solution: { js: "let btn = document.querySelector(\"#interrupteur\");\nlet allume = false;\nbtn.addEventListener(\"click\", function() {\n  allume = !allume;\n  if (allume) {\n    btn.textContent = \"Allumé\";\n  } else {\n    btn.textContent = \"Éteint\";\n  }\n});" },
        check(doc, win, C){
          const btn = doc.querySelector('#interrupteur');
          if(!btn) return { success:false, message:"Il manque le bouton #interrupteur." };
          const initial = btn.textContent.trim();
          btn.click();
          const after1 = btn.textContent.trim();
          if(after1 === initial) return { success:false, message:"Le texte du bouton ne change pas encore au clic." };
          btn.click();
          const after2 = btn.textContent.trim();
          if(after2 !== initial) return { success:false, message:"Après 2 clics, le bouton devrait revenir à son texte de départ." };
          return { success:true, message:"Un interrupteur qui fonctionne parfaitement, bravo !" };
        }
      }
    }
  },

  // ============ LEÇON 10 ============
  {
    id: 'ch3-l10',
    title: "Changer le style depuis le code",
    icon: '🖌️',
    explanation: [
      { type:'text', heading:"Modifier l'apparence en JavaScript", html:
        "<p>On peut changer le style directement avec <code>element.style.propriete = \"valeur\"</code>. Mais la meilleure méthode est souvent <code>classList.add(...)</code> / <code>.remove(...)</code> / <code>.toggle(...)</code> pour ajouter, enlever, ou basculer une classe CSS déjà préparée.</p>" },
      { type:'code', code: "let boite = document.querySelector(\"#boite\");\nboite.style.backgroundColor = \"yellow\";\nboite.classList.add(\"actif\");" },
      { type:'tip', html:"<code>classList.toggle(\"nom\")</code> est génial : si la classe est présente, elle est enlevée, sinon elle est ajoutée. Parfait pour un bouton on/off !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<style>.surligne { background: yellow; }</style>\n<p id=\"texte\">Survole-moi... (non, clique le bouton !)</p>\n<button id=\"btn\">Surligner</button>", readonly:true },
        { type:'js', starter:"let texte = document.querySelector(\"#texte\");\nlet btn = document.querySelector(\"#btn\");\nbtn.addEventListener(\"click\", function() {\n  texte.classList.toggle(\"surligne\");\n});" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Utilise <code>.style.backgroundColor</code> pour changer directement le fond de la boîte en \"yellow\".",
        tabs: [
          { type:'html', starter:"<div id=\"boite\">Une boîte</div>", readonly:true },
          { type:'js', starter:"let boite = document.querySelector(\"#boite\");\n\n// Ton code ici" }
        ],
        hints: ["boite.style.backgroundColor = \"yellow\";"],
        solution: { js: "let boite = document.querySelector(\"#boite\");\nboite.style.backgroundColor = \"yellow\";" },
        check(doc, win, C){
          if(!C.colorEquals('#boite', 'backgroundColor', 'yellow')) return { success:false, message:"La boîte n'est pas encore jaune." };
          return { success:true, message:"Tu changes le style directement depuis JavaScript !" };
        }
      },
      moyen: {
        instructions: "La page contient déjà une classe CSS <code>.surligne</code>. Utilise <code>classList.add(\"surligne\")</code> pour l'appliquer à la boîte.",
        tabs: [
          { type:'html', starter:"<style>.surligne { background: yellow; border: 2px solid orange; }</style>\n<div id=\"boite\">Une boîte</div>", readonly:true },
          { type:'js', starter:"let boite = document.querySelector(\"#boite\");\n\n// Ton code ici" }
        ],
        hints: ["boite.classList.add(\"surligne\");"],
        solution: { js: "let boite = document.querySelector(\"#boite\");\nboite.classList.add(\"surligne\");" },
        check(doc, win, C){
          const boite = doc.querySelector('#boite');
          if(!boite || !boite.classList.contains('surligne')) return { success:false, message:"La classe surligne n'est pas encore ajoutée à la boîte." };
          return { success:true, message:"Tu utilises classList comme un pro !" };
        }
      },
      difficile: {
        instructions: "Au clic sur le bouton, utilise <code>classList.toggle(\"surligne\")</code> sur la boîte pour l'allumer et l'éteindre à chaque clic.",
        tabs: [
          { type:'html', starter:"<style>.surligne { background: yellow; }</style>\n<div id=\"boite\">Une boîte</div>\n<button id=\"btn\">Basculer</button>", readonly:true },
          { type:'js', starter:"let boite = document.querySelector(\"#boite\");\nlet btn = document.querySelector(\"#btn\");\n\n// Ton addEventListener ici" }
        ],
        hints: ["btn.addEventListener(\"click\", function() {\n  boite.classList.toggle(\"surligne\");\n});"],
        solution: { js: "let boite = document.querySelector(\"#boite\");\nlet btn = document.querySelector(\"#btn\");\nbtn.addEventListener(\"click\", function() {\n  boite.classList.toggle(\"surligne\");\n});" },
        check(doc, win, C){
          const boite = doc.querySelector('#boite');
          const btn = doc.querySelector('#btn');
          if(!boite || !btn) return { success:false, message:"Il manque la boîte ou le bouton." };
          btn.click();
          const has1 = boite.classList.contains('surligne');
          if(!has1) return { success:false, message:"Après un clic, la classe surligne devrait être ajoutée." };
          btn.click();
          const has2 = boite.classList.contains('surligne');
          if(has2) return { success:false, message:"Après un deuxième clic, la classe surligne devrait être enlevée." };
          return { success:true, message:"Ton interrupteur visuel fonctionne parfaitement !" };
        }
      }
    }
  },

  // ============ LEÇON 11 ============
  {
    id: 'ch3-l11',
    title: "Mini-projet : le compteur",
    icon: '🧮',
    explanation: [
      { type:'text', heading:"Combiner tout ce que tu as appris", html:
        "<p>Il est temps de mélanger variables, fonctions, événements et manipulation du DOM pour construire un vrai petit outil interactif : un compteur avec un bouton pour augmenter et un bouton pour réinitialiser !</p>" },
      { type:'tip', html:"N'hésite pas à revenir sur les leçons précédentes si tu as un doute sur une technique." },
      { type:'demo', tabs:[
        { type:'html', starter:"<p id=\"valeur\">0</p>\n<button id=\"plus\">+1</button>\n<button id=\"reset\">Réinitialiser</button>", readonly:true },
        { type:'js', starter:"let compte = 0;\nlet valeur = document.querySelector(\"#valeur\");\ndocument.querySelector(\"#plus\").addEventListener(\"click\", function() {\n  compte = compte + 1;\n  valeur.textContent = compte;\n});\ndocument.querySelector(\"#reset\").addEventListener(\"click\", function() {\n  compte = 0;\n  valeur.textContent = compte;\n});" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Fais fonctionner le bouton <code>#plus</code> pour qu'il augmente le nombre affiché dans <code>#valeur</code> de 1 à chaque clic.",
        tabs: [
          { type:'html', starter:"<p id=\"valeur\">0</p>\n<button id=\"plus\">+1</button>", readonly:true },
          { type:'js', starter:"let compte = 0;\nlet valeur = document.querySelector(\"#valeur\");\n\n// Ton addEventListener ici" }
        ],
        hints: ["document.querySelector(\"#plus\").addEventListener(\"click\", function() {\n  compte = compte + 1;\n  valeur.textContent = compte;\n});"],
        solution: { js: "let compte = 0;\nlet valeur = document.querySelector(\"#valeur\");\ndocument.querySelector(\"#plus\").addEventListener(\"click\", function() {\n  compte = compte + 1;\n  valeur.textContent = compte;\n});" },
        check(doc, win, C){
          const btn = doc.querySelector('#plus');
          if(!btn) return { success:false, message:"Il manque le bouton #plus." };
          btn.click(); btn.click();
          if(C.text('#valeur').trim() !== '2') return { success:false, message:"Après 2 clics, #valeur devrait afficher 2." };
          return { success:true, message:"Ton compteur augmente parfaitement !" };
        }
      },
      moyen: {
        instructions: "Ajoute un bouton <code>#reset</code> qui remet le compteur à 0 quand on clique dessus.",
        tabs: [
          { type:'html', starter:"<p id=\"valeur\">0</p>\n<button id=\"plus\">+1</button>\n<button id=\"reset\">Réinitialiser</button>", readonly:true },
          { type:'js', starter:"let compte = 0;\nlet valeur = document.querySelector(\"#valeur\");\ndocument.querySelector(\"#plus\").addEventListener(\"click\", function() {\n  compte = compte + 1;\n  valeur.textContent = compte;\n});\n\n// Ton addEventListener pour #reset ici" }
        ],
        hints: ["document.querySelector(\"#reset\").addEventListener(\"click\", function() {\n  compte = 0;\n  valeur.textContent = compte;\n});"],
        solution: { js: "let compte = 0;\nlet valeur = document.querySelector(\"#valeur\");\ndocument.querySelector(\"#plus\").addEventListener(\"click\", function() {\n  compte = compte + 1;\n  valeur.textContent = compte;\n});\ndocument.querySelector(\"#reset\").addEventListener(\"click\", function() {\n  compte = 0;\n  valeur.textContent = compte;\n});" },
        check(doc, win, C){
          const plus = doc.querySelector('#plus'), reset = doc.querySelector('#reset');
          if(!plus || !reset) return { success:false, message:"Il manque les boutons #plus ou #reset." };
          plus.click(); plus.click(); plus.click();
          reset.click();
          if(C.text('#valeur').trim() !== '0') return { success:false, message:"Après reset, #valeur devrait afficher 0." };
          return { success:true, message:"Ton bouton reset fonctionne parfaitement !" };
        }
      },
      difficile: {
        instructions: "Ajoute un bouton <code>#moins</code> qui diminue le compteur de 1, mais qui ne descend <strong>jamais en dessous de 0</strong>.",
        tabs: [
          { type:'html', starter:"<p id=\"valeur\">0</p>\n<button id=\"plus\">+1</button>\n<button id=\"moins\">-1</button>", readonly:true },
          { type:'js', starter:"let compte = 0;\nlet valeur = document.querySelector(\"#valeur\");\ndocument.querySelector(\"#plus\").addEventListener(\"click\", function() {\n  compte = compte + 1;\n  valeur.textContent = compte;\n});\n\n// Ton addEventListener pour #moins ici (avec une protection contre le négatif !)" }
        ],
        hints: ["Dans la fonction de #moins, vérifie avec if (compte > 0) avant de faire compte = compte - 1;"],
        solution: { js: "let compte = 0;\nlet valeur = document.querySelector(\"#valeur\");\ndocument.querySelector(\"#plus\").addEventListener(\"click\", function() {\n  compte = compte + 1;\n  valeur.textContent = compte;\n});\ndocument.querySelector(\"#moins\").addEventListener(\"click\", function() {\n  if (compte > 0) {\n    compte = compte - 1;\n  }\n  valeur.textContent = compte;\n});" },
        check(doc, win, C){
          const moins = doc.querySelector('#moins');
          if(!moins) return { success:false, message:"Il manque le bouton #moins." };
          moins.click(); moins.click(); moins.click();
          if(C.text('#valeur').trim() !== '0') return { success:false, message:"Le compteur ne doit jamais descendre en dessous de 0." };
          return { success:true, message:"Ton compteur est maintenant complet et protégé, bravo !" };
        }
      }
    }
  },

  // ============ LEÇON 12 — PROJET FINAL ============
  {
    id: 'ch3-l12',
    title: "🏆 Projet final : le nombre mystère",
    icon: '🏆',
    explanation: [
      { type:'text', heading:"Le grand projet final !", html:
        "<p>Tu vas créer un vrai mini-jeu : le joueur doit deviner un nombre mystère entre 1 et 10 en tapant sa réponse, et ton code lui dira s'il a gagné, ou si c'est trop grand ou trop petit !</p>" },
      { type:'text', heading:".value : lire ce qu'un champ contient", html:
        "<p>Pour un <code>&lt;p&gt;</code> ou un <code>&lt;h1&gt;</code>, on lit/change le texte avec <code>.textContent</code>. Mais pour un <code>&lt;input&gt;</code> (une case où l'utilisateur tape quelque chose), on utilise <code>.value</code> à la place : il contient ce que la personne a tapé.</p>" },
      { type:'text', heading:"Number() : convertir du texte en nombre", html:
        "<p>Piège important : <code>input.value</code> est TOUJOURS du texte (une chaîne de caractères), même si l'utilisateur tape des chiffres ! <code>\"7\"</code> (texte) et <code>7</code> (nombre) ne sont pas pareils pour JavaScript. <code>Number(\"7\")</code> convertit le texte <code>\"7\"</code> en vrai nombre <code>7</code>, pour pouvoir le comparer correctement avec <code>&gt;</code>, <code>&lt;</code>, etc.</p>" },
      { type:'code', code: "let input = document.querySelector(\"#guess\");\n// Si l'utilisateur tape 7 :\nconsole.log(input.value);           // \"7\" (texte, entre guillemets)\nconsole.log(Number(input.value));   // 7 (vrai nombre)\nconsole.log(Number(input.value) === 7); // true !" },
      { type:'tip', html:"Le nombre mystère est déjà préparé dans le code (<code>const MYSTERE = 7;</code>), ne le change pas, sinon les vérifications ne fonctionneront plus !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<input id=\"guess\" type=\"number\" placeholder=\"Ton nombre\">\n<button id=\"valider\">Valider</button>\n<p id=\"feedback\"></p>", readonly:true },
        { type:'js', starter:"const MYSTERE = 7;\nlet input = document.querySelector(\"#guess\");\nlet feedback = document.querySelector(\"#feedback\");\ndocument.querySelector(\"#valider\").addEventListener(\"click\", function() {\n  let proposition = Number(input.value);\n  if (proposition === MYSTERE) {\n    feedback.textContent = \"Bravo, tu as trouvé !\";\n  } else if (proposition > MYSTERE) {\n    feedback.textContent = \"Trop grand !\";\n  } else {\n    feedback.textContent = \"Trop petit !\";\n  }\n});" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Complète le code pour qu'en cliquant sur \"Valider\" avec le nombre 7 dans la case, le message \"Bravo\" s'affiche dans <code>#feedback</code>.",
        tabs: [
          { type:'html', starter:"<input id=\"guess\" type=\"number\" placeholder=\"Ton nombre\">\n<button id=\"valider\">Valider</button>\n<p id=\"feedback\"></p>", readonly:true },
          { type:'js', starter:"const MYSTERE = 7;\nlet input = document.querySelector(\"#guess\");\nlet feedback = document.querySelector(\"#feedback\");\n\ndocument.querySelector(\"#valider\").addEventListener(\"click\", function() {\n  let proposition = Number(input.value);\n  // Complète ici : si proposition === MYSTERE, affiche \"Bravo\"\n});" }
        ],
        hints: ["if (proposition === MYSTERE) { feedback.textContent = \"Bravo\"; }"],
        solution: { js: "const MYSTERE = 7;\nlet input = document.querySelector(\"#guess\");\nlet feedback = document.querySelector(\"#feedback\");\ndocument.querySelector(\"#valider\").addEventListener(\"click\", function() {\n  let proposition = Number(input.value);\n  if (proposition === MYSTERE) {\n    feedback.textContent = \"Bravo\";\n  }\n});" },
        check(doc, win, C){
          const input = doc.querySelector('#guess'), btn = doc.querySelector('#valider');
          if(!input || !btn) return { success:false, message:"Il manque l'input #guess ou le bouton #valider." };
          input.value = '7';
          btn.click();
          if(!C.text('#feedback').toLowerCase().includes('bravo')) return { success:false, message:"Avec 7, le message devrait contenir \"Bravo\"." };
          return { success:true, message:"Ton jeu reconnaît la bonne réponse !" };
        }
      },
      moyen: {
        instructions: "Ajoute la gestion des mauvaises réponses : \"Trop grand !\" si la proposition est plus grande que le mystère, \"Trop petit !\" sinon.",
        tabs: [
          { type:'html', starter:"<input id=\"guess\" type=\"number\" placeholder=\"Ton nombre\">\n<button id=\"valider\">Valider</button>\n<p id=\"feedback\"></p>", readonly:true },
          { type:'js', starter:"const MYSTERE = 7;\nlet input = document.querySelector(\"#guess\");\nlet feedback = document.querySelector(\"#feedback\");\ndocument.querySelector(\"#valider\").addEventListener(\"click\", function() {\n  let proposition = Number(input.value);\n  if (proposition === MYSTERE) {\n    feedback.textContent = \"Bravo\";\n  }\n  // Ajoute else if et else ici\n});" }
        ],
        hints: ["else if (proposition > MYSTERE) { feedback.textContent = \"Trop grand !\"; } else { feedback.textContent = \"Trop petit !\"; }"],
        solution: { js: "const MYSTERE = 7;\nlet input = document.querySelector(\"#guess\");\nlet feedback = document.querySelector(\"#feedback\");\ndocument.querySelector(\"#valider\").addEventListener(\"click\", function() {\n  let proposition = Number(input.value);\n  if (proposition === MYSTERE) {\n    feedback.textContent = \"Bravo\";\n  } else if (proposition > MYSTERE) {\n    feedback.textContent = \"Trop grand !\";\n  } else {\n    feedback.textContent = \"Trop petit !\";\n  }\n});" },
        check(doc, win, C){
          const input = doc.querySelector('#guess'), btn = doc.querySelector('#valider');
          if(!input || !btn) return { success:false, message:"Il manque l'input ou le bouton." };
          input.value = '9';
          btn.click();
          if(!C.text('#feedback').toLowerCase().includes('grand')) return { success:false, message:"Avec 9 (plus grand que 7), le message devrait parler de \"trop grand\"." };
          input.value = '2';
          btn.click();
          if(!C.text('#feedback').toLowerCase().includes('petit')) return { success:false, message:"Avec 2 (plus petit que 7), le message devrait parler de \"trop petit\"." };
          return { success:true, message:"Ton jeu guide bien le joueur, excellent !" };
        }
      },
      difficile: {
        instructions: "Ajoute un compteur d'essais : à chaque clic sur Valider, affiche aussi le nombre total de tentatives quelque part dans <code>#feedback</code> (par exemple : \"Trop grand ! (essai 2)\").",
        tabs: [
          { type:'html', starter:"<input id=\"guess\" type=\"number\" placeholder=\"Ton nombre\">\n<button id=\"valider\">Valider</button>\n<p id=\"feedback\"></p>", readonly:true },
          { type:'js', starter:"const MYSTERE = 7;\nlet essais = 0;\nlet input = document.querySelector(\"#guess\");\nlet feedback = document.querySelector(\"#feedback\");\ndocument.querySelector(\"#valider\").addEventListener(\"click\", function() {\n  essais = essais + 1;\n  let proposition = Number(input.value);\n  if (proposition === MYSTERE) {\n    feedback.textContent = \"Bravo ! (essai \" + essais + \")\";\n  } else if (proposition > MYSTERE) {\n    feedback.textContent = \"Trop grand ! (essai \" + essais + \")\";\n  } else {\n    feedback.textContent = \"Trop petit ! (essai \" + essais + \")\";\n  }\n});" }
        ],
        hints: ["Une variable essais commence à 0, et on fait essais = essais + 1; à chaque clic, avant d'afficher le message."],
        solution: { js: "const MYSTERE = 7;\nlet essais = 0;\nlet input = document.querySelector(\"#guess\");\nlet feedback = document.querySelector(\"#feedback\");\ndocument.querySelector(\"#valider\").addEventListener(\"click\", function() {\n  essais = essais + 1;\n  let proposition = Number(input.value);\n  if (proposition === MYSTERE) {\n    feedback.textContent = \"Bravo ! (essai \" + essais + \")\";\n  } else if (proposition > MYSTERE) {\n    feedback.textContent = \"Trop grand ! (essai \" + essais + \")\";\n  } else {\n    feedback.textContent = \"Trop petit ! (essai \" + essais + \")\";\n  }\n});" },
        check(doc, win, C){
          const input = doc.querySelector('#guess'), btn = doc.querySelector('#valider');
          if(!input || !btn) return { success:false, message:"Il manque l'input ou le bouton." };
          input.value = '2'; btn.click();
          input.value = '9'; btn.click();
          const t = C.text('#feedback');
          if(!/2/.test(t)) return { success:false, message:"Après 2 essais, le message devrait contenir le nombre 2." };
          return { success:true, message:"🏆 BRAVO ! Ton jeu du nombre mystère est complet et fonctionnel. Chapitre 3 terminé — tu es un vrai développeur, Daouda !" };
        }
      }
    }
  }

  ]
};
