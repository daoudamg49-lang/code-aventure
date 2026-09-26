const CHAPTER_3X = {
  id: 'ch3x',
  title: 'JavaScript Avancé',
  subtitle: "Objets, tableaux avancés, erreurs, promesses, classes : le niveau expert",
  icon: '🧠',
  lessons: [

  // ============ LEÇON 1 : LES OBJETS ============
  {
    id: 'ch3x-l1',
    title: "Les objets : ranger des informations liées",
    icon: '🗂️',
    explanation: [
      { type:'text', heading:"Un tableau range dans l'ordre, un objet range PAR NOM", html:
        "<p>Un tableau <code>[10, 20, 30]</code> accède aux valeurs par POSITION (<code>0</code>, <code>1</code>, <code>2</code>). Un <strong>objet</strong> <code>{ }</code> range des valeurs par NOM (on les appelle des <strong>clés</strong>, ou <strong>propriétés</strong>) — beaucoup plus clair quand on décrit une vraie chose, comme une personne ou un produit.</p>" },
      { type:'code', code: "let personnage = {\n  nom: \"Daouda\",\n  niveau: 7,\n  estHero: true\n};\nconsole.log(personnage.nom);      // \"Daouda\"\nconsole.log(personnage.niveau);   // 7" },
      { type:'text', heading:"Deux façons de lire une propriété", html:
        "<p>La <strong>notation point</strong> <code>objet.propriete</code> est la plus courante. La <strong>notation crochets</strong> <code>objet[\"propriete\"]</code> fait pareil, mais permet d'utiliser un NOM DE VARIABLE pour la clé — pratique quand le nom de la propriété n'est connu qu'au moment de l'exécution.</p>" },
      { type:'code', code: "let cle = \"niveau\";\nconsole.log(personnage[cle]);   // équivaut à personnage.niveau" },
      { type:'text', heading:"Modifier et ajouter des propriétés", html:
        "<p>On change une valeur exactement comme une variable : <code>objet.propriete = nouvelleValeur;</code>. Si la propriété n'existait pas encore, elle est simplement CRÉÉE.</p>" },
      { type:'code', code: "personnage.niveau = 8;          // modifie\npersonnage.arme = \"épée\";       // ajoute une nouvelle propriété" },
      { type:'tip', html:"Un objet peut aussi contenir un TABLEAU, ou même un AUTRE OBJET à l'intérieur — c'est ainsi qu'on construit des données complexes réalistes, comme la fiche complète d'un produit en ligne." },
      { type:'demo', tabs:[{ type:'js', starter:"let produit = {\n  nom: \"Casque audio\",\n  prix: 79.99,\n  enStock: true,\n  tags: [\"audio\", \"sans-fil\"]\n};\nconsole.log(produit.nom);\nconsole.log(produit.tags[0]);\nconsole.log(produit.tags.length);" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée un objet <code>utilisateur</code> avec deux propriétés : <code>nom</code> (une chaîne) et <code>age</code> (un nombre). Affiche <code>utilisateur.nom</code> avec console.log.",
        tabs: [{ type:'js', starter:"// ton code ici" }],
        showConsole: true,
        hints: ["let utilisateur = { nom: \"Daouda\", age: 7 };", "console.log(utilisateur.nom);"],
        solution: { js: "let utilisateur = { nom: \"Daouda\", age: 7 };\nconsole.log(utilisateur.nom);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/\{[^}]*:/.test(js)) return { success:false, message:"Il manque un objet avec au moins une propriété clé: valeur." };
          if(logs.length < 1 || logs[0].text.trim().length < 1) return { success:false, message:"Rien ne s'affiche encore dans la console." };
          return { success:true, message:"Ton premier objet fonctionne !" };
        }
      },
      moyen: {
        instructions: "Crée un objet <code>livre</code> avec <code>titre</code>, <code>auteur</code>, et <code>pages</code> (nombre). Modifie ensuite <code>livre.pages</code> pour ajouter 10 pages, et affiche la nouvelle valeur.",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["let livre = { titre: \"...\", auteur: \"...\", pages: 200 };", "livre.pages = livre.pages + 10;", "console.log(livre.pages);"],
        solution: { js: "let livre = { titre: \"Voyage\", auteur: \"Jules\", pages: 200 };\nlivre.pages = livre.pages + 10;\nconsole.log(livre.pages);" },
        check(doc, win, C, logs){
          if(!C.logsInclude('210') && !logs.some(l => /\d+/.test(l.text) && parseInt(l.text) > 0)) return { success:false, message:"Le nombre de pages affiché ne semble pas avoir été modifié correctement." };
          return { success:true, message:"Tu sais lire, modifier et afficher une propriété d'objet !" };
        }
      },
      difficile: {
        instructions: "Crée un objet <code>equipe</code> avec une propriété <code>nom</code> (texte) et une propriété <code>joueurs</code> qui est un TABLEAU de 3 noms. Affiche le deuxième joueur avec <code>equipe.joueurs[1]</code>.",
        tabs: [{ type:'js', starter:"" }],
        showConsole: true,
        hints: ["let equipe = { nom: \"Les Renards\", joueurs: [\"Ana\", \"Leo\", \"Zoé\"] };", "console.log(equipe.joueurs[1]);"],
        solution: { js: "let equipe = { nom: \"Les Renards\", joueurs: [\"Ana\", \"Leo\", \"Zoé\"] };\nconsole.log(equipe.joueurs[1]);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/joueurs\s*:\s*\[/.test(js)) return { success:false, message:"Il manque une propriété joueurs contenant un tableau." };
          if(logs.length < 1) return { success:false, message:"Il manque un console.log pour afficher un joueur." };
          return { success:true, message:"Un objet contenant un tableau, tu combines les deux structures !" };
        }
      }
    }
  },

  // ============ LEÇON 2 : TABLEAUX AVANCÉS ============
  {
    id: 'ch3x-l2',
    title: "Tableaux avancés : map, filter, find",
    icon: '🧰',
    explanation: [
      { type:'text', heading:"Transformer un tableau avec .map()", html:
        "<p><code>.map(function(element) { return ...; })</code> crée un NOUVEAU tableau en transformant chaque élément. Contrairement à <code>.forEach()</code> (qui ne renvoie rien), <code>.map()</code> RENVOIE le tableau transformé.</p>" },
      { type:'code', code: "let nombres = [1, 2, 3];\nlet doubles = nombres.map(function(n) {\n  return n * 2;\n});\nconsole.log(doubles);  // [2, 4, 6]\nconsole.log(nombres);  // [1, 2, 3] (inchangé !)" },
      { type:'text', heading:"Garder seulement certains éléments avec .filter()", html:
        "<p><code>.filter(function(element) { return condition; })</code> crée un nouveau tableau contenant SEULEMENT les éléments pour lesquels la fonction retourne <code>true</code>.</p>" },
      { type:'code', code: "let nombres = [1, 2, 3, 4, 5, 6];\nlet pairs = nombres.filter(function(n) {\n  return n % 2 === 0;\n});\nconsole.log(pairs);  // [2, 4, 6]" },
      { type:'text', heading:"Trouver un seul élément avec .find()", html:
        "<p><code>.find(function(element) { return condition; })</code> renvoie le PREMIER élément qui correspond (ou <code>undefined</code> si aucun ne correspond) — utile pour chercher \"le produit avec cet id\" dans une liste.</p>" },
      { type:'code', code: "let produits = [{id:1, nom:\"Stylo\"}, {id:2, nom:\"Cahier\"}];\nlet trouve = produits.find(function(p) {\n  return p.id === 2;\n});\nconsole.log(trouve.nom);  // \"Cahier\"" },
      { type:'tip', html:"<code>map</code>, <code>filter</code> et <code>find</code> ne modifient JAMAIS le tableau d'origine : ils en créent un nouveau (ou renvoient un élément). C'est une habitude essentielle pour écrire du code fiable." },
      { type:'demo', tabs:[{ type:'js', starter:"let ages = [12, 25, 7, 40, 3];\nlet majeurs = ages.filter(function(a) { return a >= 18; });\nconsole.log(majeurs);\nlet plusUnAn = ages.map(function(a) { return a + 1; });\nconsole.log(plusUnAn);" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Utilise <code>.map(...)</code> sur le tableau <code>[1, 2, 3, 4]</code> pour créer un tableau où chaque nombre est multiplié par 10, puis affiche-le.",
        tabs: [{ type:'js', starter:"let nombres = [1, 2, 3, 4];\n\n// ton code ici" }],
        showConsole: true,
        hints: ["let resultat = nombres.map(function(n) { return n * 10; });", "console.log(resultat);"],
        solution: { js: "let nombres = [1, 2, 3, 4];\nlet resultat = nombres.map(function(n) { return n * 10; });\nconsole.log(resultat);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('.map(')) return { success:false, message:"Il manque un appel à .map(...)." };
          const found = logs.some(l => /10.*20.*30.*40|\[10,\s*20,\s*30,\s*40\]/.test(l.text));
          if(!found) return { success:false, message:"Le résultat affiché ne semble pas être [10, 20, 30, 40]." };
          return { success:true, message:"Tu transformes un tableau entier avec map !" };
        }
      },
      moyen: {
        instructions: "Utilise <code>.filter(...)</code> sur <code>[3, 8, 12, 5, 20, 1]</code> pour garder seulement les nombres supérieurs à 10, puis affiche le résultat.",
        tabs: [{ type:'js', starter:"let nombres = [3, 8, 12, 5, 20, 1];\n\n// ton code ici" }],
        showConsole: true,
        hints: ["let grands = nombres.filter(function(n) { return n > 10; });", "console.log(grands);"],
        solution: { js: "let nombres = [3, 8, 12, 5, 20, 1];\nlet grands = nombres.filter(function(n) { return n > 10; });\nconsole.log(grands);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('.filter(')) return { success:false, message:"Il manque un appel à .filter(...)." };
          const found = logs.some(l => l.text.includes('12') && l.text.includes('20') && !l.text.includes('3,'));
          if(!found) return { success:false, message:"Le résultat devrait contenir seulement 12 et 20." };
          return { success:true, message:"Tu sais garder uniquement ce qui t'intéresse dans un tableau !" };
        }
      },
      difficile: {
        instructions: "Tu as un tableau d'objets <code>eleves</code>. Utilise <code>.find(...)</code> pour trouver l'élève dont le <code>nom</code> est <code>\"Léa\"</code>, puis affiche sa <code>note</code>.",
        tabs: [{ type:'js', starter:"let eleves = [\n  { nom: \"Max\", note: 14 },\n  { nom: \"Léa\", note: 18 },\n  { nom: \"Tom\", note: 9 }\n];\n\n// ton code ici" }],
        showConsole: true,
        hints: ["let trouve = eleves.find(function(e) { return e.nom === \"Léa\"; });", "console.log(trouve.note);"],
        solution: { js: "let eleves = [\n  { nom: \"Max\", note: 14 },\n  { nom: \"Léa\", note: 18 },\n  { nom: \"Tom\", note: 9 }\n];\nlet trouve = eleves.find(function(e) { return e.nom === \"Léa\"; });\nconsole.log(trouve.note);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('.find(')) return { success:false, message:"Il manque un appel à .find(...)." };
          if(!C.logsInclude('18')) return { success:false, message:"La note affichée devrait être 18 (celle de Léa)." };
          return { success:true, message:"Tu sais chercher précisément un élément dans une liste d'objets, une compétence très utilisée en vrai !" };
        }
      }
    }
  },

  // ============ LEÇON 3 : DÉSTRUCTURATION ET SPREAD ============
  {
    id: 'ch3x-l3',
    title: "Déstructuration et spread",
    icon: '📤',
    explanation: [
      { type:'text', heading:"Déstructurer un objet : extraire plusieurs propriétés d'un coup", html:
        "<p>Au lieu d'écrire <code>let nom = objet.nom;</code> puis <code>let age = objet.age;</code>, la <strong>déstructuration</strong> fait les deux en une seule ligne, avec des accolades qui \"imitent\" la forme de l'objet.</p>" },
      { type:'code', code: "let personnage = { nom: \"Daouda\", age: 7, niveau: 3 };\nlet { nom, age } = personnage;\nconsole.log(nom);   // \"Daouda\"\nconsole.log(age);   // 7" },
      { type:'text', heading:"Déstructurer un tableau", html:
        "<p>Pour un tableau, la déstructuration se fait avec des CROCHETS, et prend les éléments DANS L'ORDRE.</p>" },
      { type:'code', code: "let couleurs = [\"rouge\", \"vert\", \"bleu\"];\nlet [premiere, deuxieme] = couleurs;\nconsole.log(premiere);   // \"rouge\"\nconsole.log(deuxieme);   // \"vert\"" },
      { type:'text', heading:"L'opérateur spread ... : étaler un tableau ou un objet", html:
        "<p><code>...</code> (spread, \"étaler\") copie tous les éléments d'un tableau (ou toutes les propriétés d'un objet) à l'intérieur d'un nouveau. Très utilisé pour COPIER ou FUSIONNER sans modifier l'original.</p>" },
      { type:'code', code: "let base = [1, 2, 3];\nlet etendu = [...base, 4, 5];\nconsole.log(etendu);  // [1, 2, 3, 4, 5]\n\nlet infos = { nom: \"Daouda\" };\nlet complet = { ...infos, age: 7 };\nconsole.log(complet); // { nom: \"Daouda\", age: 7 }" },
      { type:'tip', html:"Le spread est la façon MODERNE de copier un tableau ou un objet sans risquer de modifier l'original par accident — un piège très courant chez les débutants !" },
      { type:'demo', tabs:[{ type:'js', starter:"let produit = { nom: \"Clavier\", prix: 50 };\nlet { nom, prix } = produit;\nconsole.log(nom, prix);\nlet panier = [\"Souris\"];\nlet nouveauPanier = [...panier, \"Clavier\"];\nconsole.log(nouveauPanier);" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Déstructure l'objet <code>ville</code> pour extraire <code>nom</code> et <code>population</code> en une seule ligne, puis affiche les deux.",
        tabs: [{ type:'js', starter:"let ville = { nom: \"Paris\", population: 2000000, pays: \"France\" };\n\n// ton code ici" }],
        showConsole: true,
        hints: ["let { nom, population } = ville;", "console.log(nom);", "console.log(population);"],
        solution: { js: "let ville = { nom: \"Paris\", population: 2000000, pays: \"France\" };\nlet { nom, population } = ville;\nconsole.log(nom);\nconsole.log(population);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/\{\s*\w+.*\}\s*=/.test(js)) return { success:false, message:"Il manque une déstructuration d'objet (let { ... } = ...)." };
          if(!C.logsInclude('paris')) return { success:false, message:"Il manque l'affichage du nom." };
          return { success:true, message:"Tu extrais plusieurs valeurs d'un objet en une seule ligne !" };
        }
      },
      moyen: {
        instructions: "Déstructure le tableau <code>coordonnees</code> pour récupérer <code>x</code> et <code>y</code> (dans cet ordre), puis affiche <code>&#96;Position : ${x}, ${y}&#96;</code>.",
        tabs: [{ type:'js', starter:"let coordonnees = [12, 8];\n\n// ton code ici" }],
        showConsole: true,
        hints: ["let [x, y] = coordonnees;", "console.log(`Position : ${x}, ${y}`);"],
        solution: { js: "let coordonnees = [12, 8];\nlet [x, y] = coordonnees;\nconsole.log(`Position : ${x}, ${y}`);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/\[\s*\w+\s*,\s*\w+\s*\]\s*=/.test(js)) return { success:false, message:"Il manque une déstructuration de tableau (let [a, b] = ...)." };
          if(!C.logsInclude('12') || !C.logsInclude('8')) return { success:false, message:"L'affichage devrait contenir 12 et 8." };
          return { success:true, message:"Tu déstructures aussi bien les tableaux que les objets !" };
        }
      },
      difficile: {
        instructions: "Utilise le spread <code>...</code> pour créer un nouveau tableau <code>panierComplet</code> qui contient tous les éléments de <code>panier</code> PLUS <code>\"Cadeau\"</code> à la fin, SANS modifier <code>panier</code>. Affiche les deux tableaux.",
        tabs: [{ type:'js', starter:"let panier = [\"Livre\", \"Stylo\"];\n\n// ton code ici" }],
        showConsole: true,
        hints: ["let panierComplet = [...panier, \"Cadeau\"];", "console.log(panier);", "console.log(panierComplet);"],
        solution: { js: "let panier = [\"Livre\", \"Stylo\"];\nlet panierComplet = [...panier, \"Cadeau\"];\nconsole.log(panier);\nconsole.log(panierComplet);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('...')) return { success:false, message:"Il manque l'opérateur spread ... ." };
          if(logs.length < 2) return { success:false, message:"Il faut afficher les deux tableaux (panier original ET panierComplet)." };
          const original = logs[0].text;
          if(original.includes('Cadeau')) return { success:false, message:"Le tableau panier original NE DOIT PAS contenir \"Cadeau\" (il doit rester inchangé)." };
          const complet = logs[logs.length - 1].text;
          if(!complet.includes('Cadeau')) return { success:false, message:"panierComplet doit contenir \"Cadeau\"." };
          return { success:true, message:"Tu sais copier et étendre un tableau sans jamais modifier l'original, un vrai réflexe professionnel !" };
        }
      }
    }
  },

  // ============ LEÇON 4 : FONCTIONS FLÉCHÉES ET CALLBACKS ============
  {
    id: 'ch3x-l4',
    title: "Fonctions fléchées et callbacks",
    icon: '🏹',
    explanation: [
      { type:'text', heading:"Une écriture plus courte : les fonctions fléchées", html:
        "<p>Une <strong>fonction fléchée</strong> (<em>arrow function</em>) <code>(parametres) => { ... }</code> est une autre façon d'écrire une fonction, plus courte que <code>function(parametres) { ... }</code>. Elle est TRÈS utilisée en JavaScript moderne, notamment avec <code>map</code>, <code>filter</code>, <code>forEach</code>.</p>" },
      { type:'code', code: "// Ces deux fonctions font exactement la même chose :\nfunction carre(n) {\n  return n * n;\n}\nconst carreFleche = (n) => {\n  return n * n;\n};" },
      { type:'text', heading:"La version ultra-courte : retour implicite", html:
        "<p>Si la fonction ne fait QU'UN SEUL <code>return</code>, on peut retirer les accolades et le mot <code>return</code> : le résultat de l'expression est renvoyé automatiquement !</p>" },
      { type:'code', code: "const carre = (n) => n * n;\nconst nombres = [1, 2, 3];\nconst doubles = nombres.map((n) => n * 2);\nconsole.log(doubles);  // [2, 4, 6]" },
      { type:'text', heading:"Callback : une fonction donnée EN ARGUMENT à une autre", html:
        "<p>Un <strong>callback</strong> est une fonction qu'on passe comme argument à une autre fonction, pour qu'elle soit appelée PLUS TARD (au bon moment). <code>.map()</code>, <code>.filter()</code>, <code>.forEach()</code>, et <code>addEventListener()</code> attendent TOUS un callback : c'est un des concepts les plus importants de tout JavaScript !</p>" },
      { type:'code', code: "bouton.addEventListener(\"click\", () => {\n  console.log(\"Cliqué !\");\n});\n// La fonction fléchée ici EST le callback : elle ne s'exécute qu'au clic" },
      { type:'tip', html:"Fonction classique ou fonction fléchée : le résultat est presque toujours identique pour ce que tu écris dans cette appli. Choisis la fléchée pour un code plus court et plus moderne !" },
      { type:'demo', tabs:[{ type:'js', starter:"const nombres = [1, 2, 3, 4, 5];\nconst carres = nombres.map((n) => n * n);\nconsole.log(carres);\nconst grands = nombres.filter((n) => n > 2);\nconsole.log(grands);" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Réécris cette fonction classique en fonction fléchée stockée dans <code>const double</code>, puis appelle <code>double(5)</code> et affiche le résultat.",
        tabs: [{ type:'js', starter:"// Transforme cette fonction en fléchée :\n// function double(n) { return n * 2; }\n\n// ton code ici" }],
        showConsole: true,
        hints: ["const double = (n) => n * 2;", "console.log(double(5));"],
        solution: { js: "const double = (n) => n * 2;\nconsole.log(double(5));" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('=>')) return { success:false, message:"Il manque une fonction fléchée (=>)." };
          if(!C.logsInclude('10')) return { success:false, message:"double(5) devrait afficher 10." };
          return { success:true, message:"Ta première fonction fléchée fonctionne !" };
        }
      },
      moyen: {
        instructions: "Utilise <code>.map(...)</code> avec une fonction FLÉCHÉE (version courte, sans accolades) pour transformer <code>[1, 2, 3]</code> en mettant chaque nombre au carré, puis affiche le résultat.",
        tabs: [{ type:'js', starter:"let nombres = [1, 2, 3];\n\n// ton code ici" }],
        showConsole: true,
        hints: ["let carres = nombres.map((n) => n * n);", "console.log(carres);"],
        solution: { js: "let nombres = [1, 2, 3];\nlet carres = nombres.map((n) => n * n);\nconsole.log(carres);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('=>')) return { success:false, message:"Utilise une fonction fléchée avec =>." };
          if(!js.includes('.map(')) return { success:false, message:"Il manque .map(...)." };
          const found = logs.some(l => l.text.includes('1') && l.text.includes('4') && l.text.includes('9'));
          if(!found) return { success:false, message:"Le résultat devrait être [1, 4, 9]." };
          return { success:true, message:"Tu combines map et fonction fléchée comme un vrai développeur moderne !" };
        }
      },
      difficile: {
        instructions: "Crée une fonction <code>executerDeuxFois(callback)</code> qui appelle le <code>callback</code> qu'on lui donne DEUX fois de suite. Passe-lui une fonction fléchée qui affiche \"Coucou\" pour tester.",
        tabs: [{ type:'js', starter:"function executerDeuxFois(callback) {\n  // ton code ici : appelle callback() deux fois\n}\n\n// Appelle executerDeuxFois avec une fonction fléchée qui affiche \"Coucou\"" }],
        showConsole: true,
        hints: ["callback(); callback();", "executerDeuxFois(() => console.log(\"Coucou\"));"],
        solution: { js: "function executerDeuxFois(callback) {\n  callback();\n  callback();\n}\nexecuterDeuxFois(() => console.log(\"Coucou\"));" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(typeof win.executerDeuxFois !== 'function') return { success:false, message:"Il manque une fonction executerDeuxFois." };
          if(!js.includes('=>')) return { success:false, message:"Utilise une fonction fléchée comme callback." };
          if(logs.length < 2) return { success:false, message:"Le callback devrait s'exécuter 2 fois (2 messages dans la console)." };
          return { success:true, message:"Tu as créé et utilisé ton propre système de callback, un concept avancé maîtrisé !" };
        }
      }
    }
  },

  // ============ LEÇON 5 : GESTION DES ERREURS ============
  {
    id: 'ch3x-l5',
    title: "La gestion des erreurs : try, catch, throw",
    icon: '🧯',
    explanation: [
      { type:'text', heading:"Anticiper que quelque chose peut mal se passer", html:
        "<p>Rappelle-toi le Chapitre 9 (DevTools) : une erreur JavaScript non gérée ARRÊTE tout le reste du code ! <code>try { ... } catch (erreur) { ... }</code> permet d'ESSAYER un code risqué, et de RATTRAPER l'erreur proprement si elle se produit, sans planter toute la page.</p>" },
      { type:'code', code: "try {\n  let resultat = uneFonctionQuiNexistePas();\n  console.log(resultat);\n} catch (erreur) {\n  console.log(\"Une erreur est survenue : \" + erreur.message);\n}\nconsole.log(\"Le programme continue normalement !\");" },
      { type:'text', heading:"throw : déclencher soi-même une erreur", html:
        "<p><code>throw new Error(\"message\")</code> permet de créer et déclencher SA PROPRE erreur, par exemple quand une fonction reçoit une valeur invalide qu'elle refuse de traiter.</p>" },
      { type:'code', code: "function diviser(a, b) {\n  if (b === 0) {\n    throw new Error(\"Division par zéro impossible !\");\n  }\n  return a / b;\n}\ntry {\n  console.log(diviser(10, 0));\n} catch (e) {\n  console.log(e.message);\n}" },
      { type:'text', heading:"finally : le code qui s'exécute toujours", html:
        "<p><code>finally { ... }</code> (optionnel) s'exécute TOUJOURS après le try/catch, que ça ait réussi ou échoué — utile pour un \"nettoyage\" final.</p>" },
      { type:'code', code: "try {\n  console.log(\"On essaie\");\n} catch (e) {\n  console.log(\"Erreur !\");\n} finally {\n  console.log(\"Fait, dans tous les cas\");\n}" },
      { type:'tip', html:"N'utilise <code>try/catch</code> QUE pour du code qui peut vraiment échouer (données externes, calculs risqués) : l'utiliser partout cacherait de vrais bugs au lieu de les corriger !" },
      { type:'demo', tabs:[{ type:'js', starter:"function verifierAge(age) {\n  if (age < 0) {\n    throw new Error(\"L'âge ne peut pas être négatif\");\n  }\n  return \"Âge valide : \" + age;\n}\ntry {\n  console.log(verifierAge(-5));\n} catch (e) {\n  console.log(\"Erreur attrapée : \" + e.message);\n}" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Mets ce code risqué (<code>JSON.parse(\"texte invalide\")</code>) dans un <code>try/catch</code>, et affiche <code>\"Erreur attrapée !\"</code> dans le catch.",
        tabs: [{ type:'js', starter:"// Entoure cette ligne d'un try/catch :\n// let data = JSON.parse(\"texte invalide\");" }],
        showConsole: true,
        hints: ["try {\n  let data = JSON.parse(\"texte invalide\");\n} catch (e) {\n  console.log(\"Erreur attrapée !\");\n}"],
        solution: { js: "try {\n  let data = JSON.parse(\"texte invalide\");\n} catch (e) {\n  console.log(\"Erreur attrapée !\");\n}" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/\btry\s*\{/.test(js) || !/\bcatch\s*\(/.test(js)) return { success:false, message:"Il manque un bloc try/catch." };
          if(errors.length > 0) return { success:false, message:"Une erreur est remontée jusqu'à la console : ton catch ne l'a pas bien attrapée." };
          if(!C.logsInclude('erreur')) return { success:false, message:"Il manque l'affichage \"Erreur attrapée !\" dans le catch." };
          return { success:true, message:"Ton code résiste à une erreur sans planter !" };
        }
      },
      moyen: {
        instructions: "Complète la fonction <code>diviser(a, b)</code> : si <code>b</code> vaut 0, utilise <code>throw new Error(\"Division par zéro\");</code>. Sinon, retourne <code>a / b</code>. Teste-la avec un try/catch autour de <code>diviser(10, 0)</code>.",
        tabs: [{ type:'js', starter:"function diviser(a, b) {\n  // ton code ici\n}\n\n// Teste avec try/catch ici" }],
        showConsole: true,
        hints: ["if (b === 0) { throw new Error(\"Division par zéro\"); }", "return a / b;", "try { console.log(diviser(10, 0)); } catch (e) { console.log(e.message); }"],
        solution: { js: "function diviser(a, b) {\n  if (b === 0) {\n    throw new Error(\"Division par zéro\");\n  }\n  return a / b;\n}\ntry {\n  console.log(diviser(10, 0));\n} catch (e) {\n  console.log(e.message);\n}" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('throw')) return { success:false, message:"Il manque un throw new Error(...) dans diviser." };
          if(!/\btry\s*\{/.test(js)) return { success:false, message:"Il manque un try/catch pour tester ta fonction." };
          if(errors.length > 0) return { success:false, message:"L'erreur n'est pas bien attrapée (elle remonte jusqu'à la console)." };
          if(!C.logsInclude('division')) return { success:false, message:"Le message d'erreur affiché devrait parler de division par zéro." };
          return { success:true, message:"Tu sais déclencher ET attraper tes propres erreurs, un vrai réflexe pro !" };
        }
      },
      difficile: {
        instructions: "Crée une fonction <code>analyserJSON(texte)</code> qui essaie de faire <code>JSON.parse(texte)</code> dans un try, retourne le résultat si ça marche, et retourne <code>null</code> dans le catch si ça échoue (au lieu de laisser planter). Ajoute un <code>finally</code> qui affiche <code>\"Analyse terminée\"</code> à chaque fois.",
        tabs: [{ type:'js', starter:"function analyserJSON(texte) {\n  // ton code ici\n}\n\nconsole.log(analyserJSON('{\"ok\":true}'));\nconsole.log(analyserJSON('pas du json'));" }],
        showConsole: true,
        hints: [
          "try { return JSON.parse(texte); } catch (e) { return null; } finally { console.log(\"Analyse terminée\"); }"
        ],
        solution: { js: "function analyserJSON(texte) {\n  try {\n    return JSON.parse(texte);\n  } catch (e) {\n    return null;\n  } finally {\n    console.log(\"Analyse terminée\");\n  }\n}\nconsole.log(analyserJSON('{\"ok\":true}'));\nconsole.log(analyserJSON('pas du json'));" },
        check(doc, win, C, logs, errors){
          if(typeof win.analyserJSON !== 'function') return { success:false, message:"Il manque une fonction analyserJSON." };
          if(errors.length > 0) return { success:false, message:"Une erreur remonte encore jusqu'à la console : ton try/catch n'est pas complet." };
          const r1 = win.analyserJSON('{"ok":true}');
          if(!r1 || r1.ok !== true) return { success:false, message:"analyserJSON('{\"ok\":true}') devrait retourner un objet avec ok: true." };
          const r2 = win.analyserJSON('pas du json');
          if(r2 !== null) return { success:false, message:"Avec un texte invalide, analyserJSON doit retourner null (pas planter)." };
          if(!C.logsInclude('analyse')) return { success:false, message:"Il manque l'affichage \"Analyse terminée\" (dans le finally)." };
          return { success:true, message:"Une fonction robuste qui ne plante jamais, exactement ce qu'on attend d'un code professionnel !" };
        }
      }
    }
  },

  // ============ LEÇON 6 : PROMESSES ET ASYNC/AWAIT ============
  {
    id: 'ch3x-l6',
    title: "Promesses et async/await",
    icon: '⏳',
    explanation: [
      { type:'text', heading:"Le problème : des choses qui prennent du temps", html:
        "<p>Charger des données depuis Internet, attendre un minuteur : ces actions ne se terminent pas INSTANTANÉMENT. Une <strong>Promise</strong> (\"promesse\") représente une valeur qui sera peut-être disponible PLUS TARD — elle est soit en attente, soit tenue (\"resolved\"), soit rompue (\"rejected\").</p>" },
      { type:'code', code: "let promesse = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve(\"Terminé !\");\n  }, 1000);\n});\npromesse.then((resultat) => {\n  console.log(resultat);  // \"Terminé !\" après 1 seconde\n});" },
      { type:'text', heading:"async/await : écrire du code asynchrone comme s'il était normal", html:
        "<p><code>async function</code> déclare une fonction qui peut utiliser <code>await</code> à l'intérieur. <code>await unePromesse</code> \"met en pause\" la fonction JUSTE POUR ELLE (pas toute la page !) jusqu'à ce que la promesse soit tenue, puis continue avec le résultat. C'est beaucoup plus lisible que d'enchaîner des <code>.then()</code>.</p>" },
      { type:'code', code: "function attendre(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\nasync function demo() {\n  console.log(\"Début\");\n  await attendre(1000);\n  console.log(\"1 seconde plus tard !\");\n}\ndemo();" },
      { type:'text', heading:"Dans un vrai projet : fetch()", html:
        "<p>Sur un vrai site (pas dans cette appli, pour des raisons de sécurité du bac à sable), on récupère des données d'un serveur avec <code>fetch(url)</code>, qui renvoie une Promise : <code>const reponse = await fetch(url); const donnees = await reponse.json();</code>. Tu retrouveras ce principe exact avec la fonction <code>request(...)</code> du Chapitre 7 !</p>" },
      { type:'tip', html:"Une fonction <code>async</code> retourne TOUJOURS une Promise, même si tu ne le vois pas directement. Et on ne peut utiliser <code>await</code> qu'À L'INTÉRIEUR d'une fonction <code>async</code> !" },
      { type:'demo', tabs:[{ type:'js', starter:"function attendre(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\nasync function jeu() {\n  console.log(\"3...\");\n  await attendre(300);\n  console.log(\"2...\");\n  await attendre(300);\n  console.log(\"1...\");\n  await attendre(300);\n  console.log(\"GO !\");\n}\njeu();" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée une <code>Promise</code> qui se résout immédiatement avec la valeur <code>\"Bonjour\"</code>, puis utilise <code>.then(...)</code> pour l'afficher.",
        tabs: [{ type:'js', starter:"// ton code ici" }],
        showConsole: true,
        hints: ["let p = new Promise((resolve) => resolve(\"Bonjour\"));", "p.then((r) => console.log(r));"],
        solution: { js: "let p = new Promise((resolve) => resolve(\"Bonjour\"));\np.then((r) => console.log(r));" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('new Promise')) return { success:false, message:"Il manque new Promise(...)." };
          if(!js.includes('.then(')) return { success:false, message:"Il manque .then(...) pour récupérer le résultat." };
          return { success:true, message:"Ta première Promise fonctionne (le résultat apparaîtra dans la console très vite) !" };
        }
      },
      moyen: {
        instructions: "Crée une fonction <code>async attendreEtSaluer()</code> qui affiche \"Attends...\", utilise <code>await</code> sur <code>new Promise((resolve) => setTimeout(resolve, 200))</code>, puis affiche \"Bonjour !\". Appelle-la.",
        tabs: [{ type:'js', starter:"// ton code ici" }],
        showConsole: true,
        hints: [
          "async function attendreEtSaluer() {\n  console.log(\"Attends...\");\n  await new Promise((resolve) => setTimeout(resolve, 200));\n  console.log(\"Bonjour !\");\n}",
          "attendreEtSaluer();"
        ],
        solution: { js: "async function attendreEtSaluer() {\n  console.log(\"Attends...\");\n  await new Promise((resolve) => setTimeout(resolve, 200));\n  console.log(\"Bonjour !\");\n}\nattendreEtSaluer();" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/async\s+function/.test(js)) return { success:false, message:"Il manque une fonction async." };
          if(!js.includes('await')) return { success:false, message:"Il manque await à l'intérieur de la fonction." };
          if(!C.logsInclude('attends')) return { success:false, message:"Il manque l'affichage \"Attends...\"." };
          return { success:true, message:"Tu écris du code asynchrone lisible avec async/await !" };
        }
      },
      difficile: {
        instructions: "Crée une fonction <code>verifier(motDePasse)</code> qui retourne une <code>Promise</code> : si le mot de passe fait au moins 8 caractères, <code>resolve(\"Valide\")</code>, sinon <code>reject(\"Trop court\")</code>. Utilise-la dans une fonction <code>async</code> avec un <code>try/await/catch</code> pour afficher le résultat, en testant avec un mot de passe trop court.",
        tabs: [{ type:'js', starter:"function verifier(motDePasse) {\n  // retourne une Promise ici\n}\n\nasync function tester() {\n  // utilise try/await/catch ici avec verifier(\"abc\")\n}\ntester();" }],
        showConsole: true,
        hints: [
          "function verifier(motDePasse) { return new Promise((resolve, reject) => { if (motDePasse.length >= 8) resolve(\"Valide\"); else reject(\"Trop court\"); }); }",
          "async function tester() { try { let r = await verifier(\"abc\"); console.log(r); } catch (e) { console.log(e); } }"
        ],
        solution: { js: "function verifier(motDePasse) {\n  return new Promise((resolve, reject) => {\n    if (motDePasse.length >= 8) {\n      resolve(\"Valide\");\n    } else {\n      reject(\"Trop court\");\n    }\n  });\n}\nasync function tester() {\n  try {\n    let r = await verifier(\"abc\");\n    console.log(r);\n  } catch (e) {\n    console.log(e);\n  }\n}\ntester();" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(typeof win.verifier !== 'function') return { success:false, message:"Il manque une fonction verifier." };
          if(!js.includes('reject')) return { success:false, message:"Il manque reject(...) pour le cas d'échec." };
          if(!/async\s+function/.test(js) || !js.includes('await')) return { success:false, message:"Il manque une fonction async avec await." };
          if(!/\btry\s*\{/.test(js) || !/\bcatch\s*\(/.test(js)) return { success:false, message:"Il manque try/catch autour de l'await." };
          return { success:true, message:"Promises, async/await, ET gestion d'erreur combinés : tu maîtrises l'asynchrone à un niveau avancé !" };
        }
      }
    }
  },

  // ============ LEÇON 7 : CLASSES ET PROGRAMMATION ORIENTÉE OBJET ============
  {
    id: 'ch3x-l7',
    title: "Les classes : créer ses propres modèles d'objets",
    icon: '🏗️',
    explanation: [
      { type:'text', heading:"Un objet, mais fabriqué à partir d'un modèle réutilisable", html:
        "<p>Une <strong>classe</strong> est un modèle pour créer plusieurs objets qui se ressemblent (même structure, mêmes actions possibles). On crée un objet à partir d'une classe avec <code>new NomDeClasse(...)</code> — cet objet s'appelle une <strong>instance</strong>.</p>" },
      { type:'code', code: "class Personnage {\n  constructor(nom, pointsDeVie) {\n    this.nom = nom;\n    this.pointsDeVie = pointsDeVie;\n  }\n}\nlet heros = new Personnage(\"Daouda\", 100);\nconsole.log(heros.nom);           // \"Daouda\"\nconsole.log(heros.pointsDeVie);   // 100" },
      { type:'text', heading:"this : \"cette instance précise\"", html:
        "<p>À l'intérieur d'une classe, <code>this</code> désigne l'objet EN TRAIN D'ÊTRE créé ou utilisé. <code>this.nom = nom;</code> veut dire \"stocke le paramètre nom sur CET objet précis\" — chaque instance garde ses propres valeurs séparément.</p>" },
      { type:'text', heading:"Ajouter des méthodes : des actions que l'objet sait faire", html:
        "<p>Une classe peut aussi contenir des <strong>méthodes</strong> (des fonctions qui appartiennent à la classe), qui utilisent souvent <code>this</code> pour agir sur les propriétés de l'instance.</p>" },
      { type:'code', code: "class Personnage {\n  constructor(nom, pointsDeVie) {\n    this.nom = nom;\n    this.pointsDeVie = pointsDeVie;\n  }\n  subirDegats(nombre) {\n    this.pointsDeVie = this.pointsDeVie - nombre;\n  }\n}\nlet heros = new Personnage(\"Daouda\", 100);\nheros.subirDegats(30);\nconsole.log(heros.pointsDeVie);  // 70" },
      { type:'tip', html:"Une classe, c'est un plan de construction (comme le plan d'une maison) ; chaque <code>new Classe(...)</code> construit une maison SÉPARÉE à partir de ce même plan, avec ses propres meubles (propriétés) !" },
      { type:'demo', tabs:[{ type:'js', starter:"class Animal {\n  constructor(nom, cri) {\n    this.nom = nom;\n    this.cri = cri;\n  }\n  faireDuBruit() {\n    return this.nom + \" fait \" + this.cri;\n  }\n}\nlet chat = new Animal(\"Le chat\", \"Miaou\");\nlet chien = new Animal(\"Le chien\", \"Wouf\");\nconsole.log(chat.faireDuBruit());\nconsole.log(chien.faireDuBruit());" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée une classe <code>Livre</code> avec un <code>constructor(titre, auteur)</code> qui stocke les deux dans <code>this.titre</code> et <code>this.auteur</code>. Crée une instance et affiche son titre.",
        tabs: [{ type:'js', starter:"// ta classe ici" }],
        showConsole: true,
        hints: ["class Livre {\n  constructor(titre, auteur) {\n    this.titre = titre;\n    this.auteur = auteur;\n  }\n}", "let l = new Livre(\"Le Petit Prince\", \"Saint-Exupéry\");", "console.log(l.titre);"],
        solution: { js: "class Livre {\n  constructor(titre, auteur) {\n    this.titre = titre;\n    this.auteur = auteur;\n  }\n}\nlet l = new Livre(\"Le Petit Prince\", \"Saint-Exupéry\");\nconsole.log(l.titre);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/class\s+\w+/.test(js)) return { success:false, message:"Il manque une classe (mot-clé class)." };
          if(!js.includes('constructor')) return { success:false, message:"Il manque un constructor dans la classe." };
          if(!js.includes('new ')) return { success:false, message:"Il manque la création d'une instance avec new." };
          if(logs.length < 1) return { success:false, message:"Il manque un console.log pour afficher le titre." };
          return { success:true, message:"Ta première classe fonctionne, avec une vraie instance !" };
        }
      },
      moyen: {
        instructions: "Ajoute une méthode <code>presenter()</code> à la classe <code>Livre</code>, qui retourne <code>&#96;${this.titre} par ${this.auteur}&#96;</code>. Affiche le résultat de <code>l.presenter()</code>.",
        tabs: [{ type:'js', starter:"class Livre {\n  constructor(titre, auteur) {\n    this.titre = titre;\n    this.auteur = auteur;\n  }\n  // ta méthode ici\n}\nlet l = new Livre(\"Le Petit Prince\", \"Saint-Exupéry\");\n\n// ton code ici" }],
        showConsole: true,
        hints: ["presenter() {\n  return `${this.titre} par ${this.auteur}`;\n}", "console.log(l.presenter());"],
        solution: { js: "class Livre {\n  constructor(titre, auteur) {\n    this.titre = titre;\n    this.auteur = auteur;\n  }\n  presenter() {\n    return `${this.titre} par ${this.auteur}`;\n  }\n}\nlet l = new Livre(\"Le Petit Prince\", \"Saint-Exupéry\");\nconsole.log(l.presenter());" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/presenter\s*\(/.test(js)) return { success:false, message:"Il manque une méthode presenter() dans la classe." };
          if(!js.includes('this.titre') || !js.includes('this.auteur')) return { success:false, message:"La méthode doit utiliser this.titre ET this.auteur." };
          if(!C.logsInclude('petit prince')) return { success:false, message:"Le résultat affiché devrait contenir le titre du livre." };
          return { success:true, message:"Ta classe a maintenant un vrai comportement, pas juste des données !" };
        }
      },
      difficile: {
        instructions: "Crée une classe <code>CompteBancaire</code> avec un <code>constructor(solde)</code>, une méthode <code>deposer(montant)</code> qui augmente le solde, et une méthode <code>retirer(montant)</code> qui DIMINUE le solde SEULEMENT si le solde est suffisant (sinon elle ne fait rien). Teste avec un solde de départ de 100 : dépose 50, puis essaie de retirer 500 (qui doit échouer), puis affiche le solde final.",
        tabs: [{ type:'js', starter:"class CompteBancaire {\n  constructor(solde) {\n    this.solde = solde;\n  }\n  // tes méthodes ici\n}\n\n// teste ta classe ici" }],
        showConsole: true,
        hints: [
          "deposer(montant) { this.solde = this.solde + montant; }",
          "retirer(montant) { if (this.solde >= montant) { this.solde = this.solde - montant; } }",
          "let compte = new CompteBancaire(100); compte.deposer(50); compte.retirer(500); console.log(compte.solde);"
        ],
        solution: { js: "class CompteBancaire {\n  constructor(solde) {\n    this.solde = solde;\n  }\n  deposer(montant) {\n    this.solde = this.solde + montant;\n  }\n  retirer(montant) {\n    if (this.solde >= montant) {\n      this.solde = this.solde - montant;\n    }\n  }\n}\nlet compte = new CompteBancaire(100);\ncompte.deposer(50);\ncompte.retirer(500);\nconsole.log(compte.solde);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!/class\s+CompteBancaire/.test(js)) return { success:false, message:"Il manque la classe CompteBancaire." };
          if(!js.includes('deposer')) return { success:false, message:"Il manque une méthode deposer." };
          if(!js.includes('retirer')) return { success:false, message:"Il manque une méthode retirer." };
          if(!C.logsInclude('150')) return { success:false, message:"Le solde final devrait être 150 (100 + 50, le retrait de 500 devant échouer)." };
          return { success:true, message:"Une classe complète avec une vraie règle métier protégée, du code de niveau professionnel !" };
        }
      }
    }
  },

  // ============ LEÇON 8 : JSON ============
  {
    id: 'ch3x-l8',
    title: "JSON : le langage universel des données",
    icon: '🔄',
    explanation: [
      { type:'text', heading:"Pourquoi JSON existe", html:
        "<p><strong>JSON</strong> (JavaScript Object Notation) est un format de texte pour représenter des objets et tableaux, utilisé PARTOUT sur le web pour échanger des données entre un site et un serveur (rappelle-toi le Chapitre 7 !), ou pour les sauvegarder (rappelle-toi <code>localStorage</code> au Chapitre 6, qui ne stocke QUE du texte).</p>" },
      { type:'code', code: "let personnage = { nom: \"Daouda\", niveau: 7 };\n\n// Convertir un objet EN texte JSON :\nlet texte = JSON.stringify(personnage);\nconsole.log(texte);  // '{\"nom\":\"Daouda\",\"niveau\":7}'\nconsole.log(typeof texte);  // \"string\" !" },
      { type:'text', heading:"Faire l'inverse : du texte vers un objet", html:
        "<p><code>JSON.parse(texte)</code> fait l'inverse de <code>JSON.stringify</code> : il transforme un texte JSON en vrai objet JavaScript utilisable (avec de vraies propriétés accessibles par point).</p>" },
      { type:'code', code: "let texte = '{\"nom\":\"Daouda\",\"niveau\":7}';\nlet objet = JSON.parse(texte);\nconsole.log(objet.nom);      // \"Daouda\" (accès normal à la propriété)\nconsole.log(typeof objet);   // \"object\"" },
      { type:'tip', html:"C'est EXACTEMENT ce que fait <code>localStorage</code> en coulisses : comme il ne sait stocker que du texte, on utilise toujours <code>JSON.stringify</code> avant de sauvegarder un objet, et <code>JSON.parse</code> après l'avoir relu !" },
      { type:'demo', tabs:[{ type:'js', starter:"let scores = { alice: 10, bob: 8 };\nlet sauvegarde = JSON.stringify(scores);\nconsole.log(sauvegarde);\nlet relu = JSON.parse(sauvegarde);\nconsole.log(relu.alice);" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Convertis l'objet <code>joueur</code> en texte JSON avec <code>JSON.stringify(...)</code>, et affiche le résultat.",
        tabs: [{ type:'js', starter:"let joueur = { nom: \"Zoé\", score: 42 };\n\n// ton code ici" }],
        showConsole: true,
        hints: ["let texte = JSON.stringify(joueur);", "console.log(texte);"],
        solution: { js: "let joueur = { nom: \"Zoé\", score: 42 };\nlet texte = JSON.stringify(joueur);\nconsole.log(texte);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('JSON.stringify')) return { success:false, message:"Il manque JSON.stringify(...)." };
          if(!C.logsInclude('zoé') && !C.logsInclude('zo')) return { success:false, message:"Le texte JSON affiché devrait contenir le nom." };
          return { success:true, message:"Tu convertis un objet en texte, prêt à être sauvegardé ou envoyé !" };
        }
      },
      moyen: {
        instructions: "Utilise <code>JSON.parse(...)</code> sur le texte <code>'{\"ville\":\"Lyon\",\"code\":69000}'</code> pour obtenir un vrai objet, puis affiche <code>objet.ville</code>.",
        tabs: [{ type:'js', starter:"let texte = '{\"ville\":\"Lyon\",\"code\":69000}';\n\n// ton code ici" }],
        showConsole: true,
        hints: ["let objet = JSON.parse(texte);", "console.log(objet.ville);"],
        solution: { js: "let texte = '{\"ville\":\"Lyon\",\"code\":69000}';\nlet objet = JSON.parse(texte);\nconsole.log(objet.ville);" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('JSON.parse')) return { success:false, message:"Il manque JSON.parse(...)." };
          if(!C.logsInclude('lyon')) return { success:false, message:"L'affichage devrait contenir \"Lyon\"." };
          return { success:true, message:"Tu transformes du texte JSON en objet utilisable !" };
        }
      },
      difficile: {
        instructions: "Simule une vraie sauvegarde : convertis l'objet <code>progression</code> en JSON avec <code>JSON.stringify</code>, stocke ce texte dans une variable <code>sauvegarde</code>, puis \"recharge-le\" avec <code>JSON.parse</code> dans une variable <code>rechargee</code>, et vérifie avec un <code>if</code> que <code>rechargee.niveau</code> est bien égal à <code>progression.niveau</code> (affiche \"Sauvegarde fiable !\" si oui).",
        tabs: [{ type:'js', starter:"let progression = { niveau: 5, xp: 320 };\n\n// ton code ici" }],
        showConsole: true,
        hints: [
          "let sauvegarde = JSON.stringify(progression);",
          "let rechargee = JSON.parse(sauvegarde);",
          "if (rechargee.niveau === progression.niveau) { console.log(\"Sauvegarde fiable !\"); }"
        ],
        solution: { js: "let progression = { niveau: 5, xp: 320 };\nlet sauvegarde = JSON.stringify(progression);\nlet rechargee = JSON.parse(sauvegarde);\nif (rechargee.niveau === progression.niveau) {\n  console.log(\"Sauvegarde fiable !\");\n}" },
        check(doc, win, C, logs, errors, raw){
          const js = (raw && raw.js) || '';
          if(!js.includes('JSON.stringify') || !js.includes('JSON.parse')) return { success:false, message:"Il faut utiliser à la fois JSON.stringify ET JSON.parse." };
          if(!C.logsInclude('fiable')) return { success:false, message:"Il manque l'affichage \"Sauvegarde fiable !\" après la vérification." };
          return { success:true, message:"🏆 Tu maîtrises le cycle complet stringify → parse, exactement comme le fait localStorage en coulisses. JavaScript Avancé terminé !" };
        }
      }
    }
  }

  ]
};
