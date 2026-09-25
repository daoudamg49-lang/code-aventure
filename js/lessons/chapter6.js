const CHAPTER_6 = {
  id: 'ch6',
  title: 'Frontend avancé',
  subtitle: 'Formulaires complets et sauvegarde des données',
  icon: '🧰',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch6-l1',
    title: "Les formulaires avancés",
    icon: '📋',
    explanation: [
      { type:'text', heading:"Plus de types de champs", html:
        "<p>Au Chapitre 1, tu as appris <code>&lt;input type=\"text\"&gt;</code>. Il existe bien d'autres types : <code>checkbox</code> (une case à cocher), <code>radio</code> (un bouton rond, pour choisir UNE option parmi plusieurs), et deux nouvelles balises : <code>&lt;select&gt;</code> (une liste déroulante) et <code>&lt;textarea&gt;</code> (une grande zone de texte).</p>" },
      { type:'code', code: "<input type=\"checkbox\"> J'aime le chocolat\n\n<select>\n  <option>Rouge</option>\n  <option>Bleu</option>\n</select>\n\n<textarea></textarea>" },
      { type:'tip', html:"Pour des boutons radio qui fonctionnent ensemble (un seul choix possible), ils doivent tous avoir le même attribut <code>name</code> !" },
      { type:'demo', tabs:[{ type:'html', starter:
        "<label><input type=\"checkbox\"> J'aime les jeux vidéo</label>\n<br>\n<label><input type=\"radio\" name=\"couleur\"> Rouge</label>\n<label><input type=\"radio\" name=\"couleur\"> Bleu</label>\n<br>\n<select>\n  <option>Chat</option>\n  <option>Chien</option>\n</select>\n<br>\n<textarea placeholder=\"Écris un petit message...\"></textarea>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Crée une case à cocher (<code>&lt;input type=\"checkbox\"&gt;</code>) avec un texte à côté qui dit ce qu'elle représente.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["<input type=\"checkbox\"> suivi d'un texte."],
        solution: { html: "<input type=\"checkbox\"> J'aime le chocolat" },
        check(doc, win, C){
          if(!C.exists('input[type="checkbox"]')) return { success:false, message:"Il manque une case à cocher (input type=\"checkbox\")." };
          return { success:true, message:"Ta première case à cocher fonctionne !" };
        }
      },
      moyen: {
        instructions: "Crée une liste déroulante (<code>&lt;select&gt;</code>) avec au moins 3 <code>&lt;option&gt;</code> différentes.",
        tabs: [{ type:'html', starter: "<select>\n\n</select>" }],
        hints: ["Chaque <option>texte</option> à l'intérieur du <select>."],
        solution: { html: "<select>\n  <option>Rouge</option>\n  <option>Vert</option>\n  <option>Bleu</option>\n</select>" },
        check(doc, win, C){
          if(C.count('select option') < 3) return { success:false, message:"Il me faut au moins 3 options dans ton select." };
          return { success:true, message:"Une belle liste déroulante avec plusieurs choix !" };
        }
      },
      difficile: {
        instructions: "Crée 2 boutons radio avec le MÊME attribut <code>name</code> (pour qu'un seul soit sélectionnable), ET une <code>&lt;textarea&gt;</code>.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["<input type=\"radio\" name=\"choix\"> deux fois, avec le même name.", "N'oublie pas <textarea></textarea>."],
        solution: { html: "<label><input type=\"radio\" name=\"choix\"> Option A</label>\n<label><input type=\"radio\" name=\"choix\"> Option B</label>\n<textarea placeholder=\"Ton message\"></textarea>" },
        check(doc, win, C){
          const radios = C.all('input[type="radio"]');
          if(radios.length < 2) return { success:false, message:"Il me faut deux boutons radio." };
          const names = radios.map(r => r.getAttribute('name'));
          if(!names[0] || names[0] !== names[1]) return { success:false, message:"Tes deux boutons radio doivent avoir le même attribut name." };
          if(!C.exists('textarea')) return { success:false, message:"Il manque une balise <textarea>." };
          return { success:true, message:"Des boutons radio bien groupés et une zone de texte, parfait !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch6-l2',
    title: "Vérifier ce qu'on écrit",
    icon: '🛂',
    explanation: [
      { type:'text', heading:"Empêcher les erreurs avant qu'elles arrivent", html:
        "<p>HTML peut vérifier automatiquement ce que quelqu'un écrit, avant même d'utiliser JavaScript ! <code>required</code> rend un champ obligatoire, <code>minlength</code>/<code>maxlength</code> limitent le nombre de caractères, et <code>min</code>/<code>max</code> limitent un nombre.</p>" },
      { type:'code', code: "<input type=\"text\" required minlength=\"3\">\n<input type=\"number\" min=\"1\" max=\"10\">" },
      { type:'tip', html:"Essaie de valider un formulaire avec un champ <code>required</code> vide : le navigateur t'empêche automatiquement, sans une ligne de JavaScript !" },
      { type:'demo', tabs:[{ type:'html', starter:
        "<form>\n  <input type=\"text\" required minlength=\"2\" placeholder=\"Ton prénom (obligatoire)\">\n  <input type=\"number\" min=\"1\" max=\"12\" placeholder=\"Ton âge\">\n  <button>Envoyer</button>\n</form>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Rends un champ de texte obligatoire avec l'attribut <code>required</code>.",
        tabs: [{ type:'html', starter: "<input type=\"text\">" }],
        hints: ["Ajoute simplement required dans la balise input."],
        solution: { html: "<input type=\"text\" required>" },
        check(doc, win, C){
          if(!C.hasAttr('input', 'required')) return { success:false, message:"Il manque l'attribut required sur ton input." };
          return { success:true, message:"Ce champ est maintenant obligatoire !" };
        }
      },
      moyen: {
        instructions: "Crée un input de type <code>number</code> avec un minimum de 1 et un maximum de 10 (<code>min</code> et <code>max</code>).",
        tabs: [{ type:'html', starter: "<input type=\"number\">" }],
        hints: ["min=\"1\" max=\"10\" dans la balise input."],
        solution: { html: "<input type=\"number\" min=\"1\" max=\"10\">" },
        check(doc, win, C){
          if(C.attr('input', 'min') !== '1') return { success:false, message:"Il manque min=\"1\"." };
          if(C.attr('input', 'max') !== '10') return { success:false, message:"Il manque max=\"10\"." };
          return { success:true, message:"Ton champ numérique est bien limité !" };
        }
      },
      difficile: {
        instructions: "Crée un champ de texte avec <code>required</code>, <code>minlength=\"3\"</code> ET <code>maxlength=\"10\"</code> en même temps.",
        tabs: [{ type:'html', starter: "<input type=\"text\">" }],
        hints: ["Trois attributs sur la même balise input."],
        solution: { html: "<input type=\"text\" required minlength=\"3\" maxlength=\"10\">" },
        check(doc, win, C){
          if(!C.hasAttr('input', 'required')) return { success:false, message:"Il manque required." };
          if(C.attr('input', 'minlength') !== '3') return { success:false, message:"Il manque minlength=\"3\"." };
          if(C.attr('input', 'maxlength') !== '10') return { success:false, message:"Il manque maxlength=\"10\"." };
          return { success:true, message:"Un champ bien protégé avec plusieurs règles à la fois !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch6-l3',
    title: "Lire les valeurs en JavaScript",
    icon: '📖',
    explanation: [
      { type:'text', heading:"Récupérer ce que quelqu'un a écrit ou choisi", html:
        "<p>Pour un texte ou un nombre, <code>element.value</code> donne ce qui est écrit. Pour une case à cocher, <code>element.checked</code> donne <code>true</code> ou <code>false</code>. Pour un <code>&lt;select&gt;</code>, <code>.value</code> donne l'option choisie.</p>" },
      { type:'code', code: "let nom = document.querySelector(\"#nom\").value;\nlet coche = document.querySelector(\"#case\").checked;" },
      { type:'tip', html:"N'oublie pas : pour un input <code>type=\"number\"</code>, <code>.value</code> renvoie du TEXTE ! Utilise <code>Number(...)</code> pour le transformer en vrai nombre." },
      { type:'demo', tabs:[
        { type:'html', starter:"<input id=\"nom\" type=\"text\" value=\"Daouda\">\n<input id=\"case\" type=\"checkbox\" checked>\n<button id=\"btn\">Lire</button>\n<p id=\"resultat\"></p>", readonly:true },
        { type:'js', starter:"document.querySelector(\"#btn\").addEventListener(\"click\", function() {\n  let nom = document.querySelector(\"#nom\").value;\n  let coche = document.querySelector(\"#case\").checked;\n  document.querySelector(\"#resultat\").textContent = nom + \" - coché : \" + coche;\n});" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Au clic sur le bouton, lis la valeur de l'input <code>#pseudo</code> et affiche-la dans <code>#resultat</code>.",
        tabs: [
          { type:'html', starter:"<input id=\"pseudo\" type=\"text\">\n<button id=\"btn\">Valider</button>\n<p id=\"resultat\"></p>", readonly:true },
          { type:'js', starter:"let btn = document.querySelector(\"#btn\");\nlet input = document.querySelector(\"#pseudo\");\nlet resultat = document.querySelector(\"#resultat\");\n\n// Ton addEventListener ici" }
        ],
        hints: ["btn.addEventListener(\"click\", function() {\n  resultat.textContent = input.value;\n});"],
        solution: { js: "let btn = document.querySelector(\"#btn\");\nlet input = document.querySelector(\"#pseudo\");\nlet resultat = document.querySelector(\"#resultat\");\nbtn.addEventListener(\"click\", function() {\n  resultat.textContent = input.value;\n});" },
        check(doc, win, C){
          const input = doc.querySelector('#pseudo'), btn = doc.querySelector('#btn');
          if(!input || !btn) return { success:false, message:"Il manque l'input ou le bouton." };
          input.value = 'Daouda';
          btn.click();
          if(C.text('#resultat') !== 'Daouda') return { success:false, message:"Le résultat affiché ne correspond pas à la valeur tapée." };
          return { success:true, message:"Tu sais lire ce que quelqu'un a écrit !" };
        }
      },
      moyen: {
        instructions: "Au clic, lis si la case <code>#accepte</code> est cochée (<code>.checked</code>) et affiche \"Oui\" ou \"Non\" dans <code>#resultat</code>.",
        tabs: [
          { type:'html', starter:"<input id=\"accepte\" type=\"checkbox\">\n<button id=\"btn\">Vérifier</button>\n<p id=\"resultat\"></p>", readonly:true },
          { type:'js', starter:"let btn = document.querySelector(\"#btn\");\nlet accepte = document.querySelector(\"#accepte\");\nlet resultat = document.querySelector(\"#resultat\");\n\n// Ton code ici" }
        ],
        hints: ["Utilise un if (accepte.checked) { ... } else { ... } dans le click."],
        solution: { js: "let btn = document.querySelector(\"#btn\");\nlet accepte = document.querySelector(\"#accepte\");\nlet resultat = document.querySelector(\"#resultat\");\nbtn.addEventListener(\"click\", function() {\n  if (accepte.checked) {\n    resultat.textContent = \"Oui\";\n  } else {\n    resultat.textContent = \"Non\";\n  }\n});" },
        check(doc, win, C){
          const checkbox = doc.querySelector('#accepte'), btn = doc.querySelector('#btn');
          if(!checkbox || !btn) return { success:false, message:"Il manque la case ou le bouton." };
          checkbox.checked = true;
          btn.click();
          if(!C.text('#resultat').toLowerCase().includes('oui')) return { success:false, message:"Quand la case est cochée, le résultat devrait dire \"Oui\"." };
          checkbox.checked = false;
          btn.click();
          if(!C.text('#resultat').toLowerCase().includes('non')) return { success:false, message:"Quand la case n'est pas cochée, le résultat devrait dire \"Non\"." };
          return { success:true, message:"Tu sais lire l'état d'une case à cocher !" };
        }
      },
      difficile: {
        instructions: "Au clic, lis la valeur choisie dans le <code>&lt;select id=\"couleur\"&gt;</code> et affiche une phrase complète dans <code>#resultat</code>.",
        tabs: [
          { type:'html', starter:"<select id=\"couleur\">\n  <option>Rouge</option>\n  <option>Bleu</option>\n  <option>Vert</option>\n</select>\n<button id=\"btn\">Valider</button>\n<p id=\"resultat\"></p>", readonly:true },
          { type:'js', starter:"let btn = document.querySelector(\"#btn\");\nlet select = document.querySelector(\"#couleur\");\nlet resultat = document.querySelector(\"#resultat\");\n\n// Ton code ici" }
        ],
        hints: ["resultat.textContent = \"Tu as choisi : \" + select.value;"],
        solution: { js: "let btn = document.querySelector(\"#btn\");\nlet select = document.querySelector(\"#couleur\");\nlet resultat = document.querySelector(\"#resultat\");\nbtn.addEventListener(\"click\", function() {\n  resultat.textContent = \"Tu as choisi : \" + select.value;\n});" },
        check(doc, win, C){
          const select = doc.querySelector('#couleur'), btn = doc.querySelector('#btn');
          if(!select || !btn) return { success:false, message:"Il manque le select ou le bouton." };
          select.value = 'Bleu';
          btn.click();
          if(!C.text('#resultat').includes('Bleu')) return { success:false, message:"Le résultat devrait contenir la couleur choisie (Bleu)." };
          return { success:true, message:"Tu sais lire le choix d'une liste déroulante !" };
        }
      }
    }
  },

  // ============ LEÇON 4 ============
  {
    id: 'ch6-l4',
    title: "Sauvegarder pour la prochaine fois",
    icon: '💽',
    explanation: [
      { type:'text', heading:"localStorage : la mémoire du navigateur", html:
        "<p>D'habitude, si tu actualises la page, tout ce que JavaScript a fait est oublié ! <code>localStorage</code> est une mémoire spéciale du navigateur qui GARDE les informations, même après avoir fermé et rouvert la page.</p>" },
      { type:'code', code: "localStorage.setItem(\"prenom\", \"Daouda\");\nlet prenom = localStorage.getItem(\"prenom\");\nconsole.log(prenom);" },
      { type:'tip', html:"⚠️ localStorage ne peut sauvegarder que du TEXTE. Pour sauvegarder un tableau ou un objet, utilise <code>JSON.stringify(...)</code> avant de sauvegarder, et <code>JSON.parse(...)</code> après l'avoir récupéré." },
      { type:'demo', tabs:[{ type:'js', starter:"localStorage.setItem(\"animal\", \"renard\");\nconsole.log(\"Sauvegardé !\");\nlet valeur = localStorage.getItem(\"animal\");\nconsole.log(\"Relu : \" + valeur);" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Sauvegarde ton prénom dans localStorage avec la clé <code>\"prenom\"</code>, puis relis-le et affiche-le avec console.log.",
        tabs: [{ type:'js', starter: "" }],
        showConsole: true,
        hints: ["localStorage.setItem(\"prenom\", \"Daouda\");", "console.log(localStorage.getItem(\"prenom\"));"],
        solution: { js: "localStorage.setItem(\"prenom\", \"Daouda\");\nconsole.log(localStorage.getItem(\"prenom\"));" },
        check(doc, win, C){
          const v = win.localStorage.getItem('prenom');
          if(!v) return { success:false, message:"Rien n'est sauvegardé sous la clé \"prenom\"." };
          if(!C.logsInclude(v)) return { success:false, message:"Ta valeur sauvegardée n'est pas encore affichée dans la console." };
          return { success:true, message:"Ta première sauvegarde fonctionne !" };
        }
      },
      moyen: {
        instructions: "Deux boutons : <code>#sauver</code> enregistre la valeur de l'input dans localStorage (clé <code>\"pseudo\"</code>), <code>#charger</code> la relit et l'affiche dans <code>#resultat</code>.",
        tabs: [
          { type:'html', starter:"<input id=\"pseudo\" type=\"text\">\n<button id=\"sauver\">Sauvegarder</button>\n<button id=\"charger\">Charger</button>\n<p id=\"resultat\"></p>", readonly:true },
          { type:'js', starter:"let input = document.querySelector(\"#pseudo\");\nlet resultat = document.querySelector(\"#resultat\");\n\ndocument.querySelector(\"#sauver\").addEventListener(\"click\", function() {\n  // sauvegarde input.value dans localStorage sous la clé \"pseudo\"\n});\n\ndocument.querySelector(\"#charger\").addEventListener(\"click\", function() {\n  // relis la clé \"pseudo\" et affiche-la dans resultat\n});" }
        ],
        hints: ["localStorage.setItem(\"pseudo\", input.value); dans le premier bouton.", "resultat.textContent = localStorage.getItem(\"pseudo\"); dans le deuxième."],
        solution: { js: "let input = document.querySelector(\"#pseudo\");\nlet resultat = document.querySelector(\"#resultat\");\ndocument.querySelector(\"#sauver\").addEventListener(\"click\", function() {\n  localStorage.setItem(\"pseudo\", input.value);\n});\ndocument.querySelector(\"#charger\").addEventListener(\"click\", function() {\n  resultat.textContent = localStorage.getItem(\"pseudo\");\n});" },
        check(doc, win, C){
          win.localStorage.removeItem('pseudo');
          const input = doc.querySelector('#pseudo'), sauver = doc.querySelector('#sauver'), charger = doc.querySelector('#charger');
          if(!input || !sauver || !charger) return { success:false, message:"Il manque l'input ou les deux boutons." };
          input.value = 'Renardeau';
          sauver.click();
          charger.click();
          if(C.text('#resultat') !== 'Renardeau') return { success:false, message:"Après Sauvegarder puis Charger, le résultat devrait afficher la valeur tapée." };
          return { success:true, message:"Tu sais sauvegarder ET recharger une donnée !" };
        }
      },
      difficile: {
        instructions: "Sauvegarde un tableau de 3 fruits avec <code>JSON.stringify</code> sous la clé <code>\"fruits\"</code>, puis un bouton <code>#charger</code> le relit avec <code>JSON.parse</code> et affiche le nombre de fruits dans <code>#resultat</code>.",
        tabs: [
          { type:'html', starter:"<button id=\"sauver\">Sauvegarder les fruits</button>\n<button id=\"charger\">Charger</button>\n<p id=\"resultat\"></p>", readonly:true },
          { type:'js', starter:"document.querySelector(\"#sauver\").addEventListener(\"click\", function() {\n  let fruits = [\"pomme\", \"banane\", \"kiwi\"];\n  // sauvegarde fruits avec JSON.stringify sous la clé \"fruits\"\n});\n\ndocument.querySelector(\"#charger\").addEventListener(\"click\", function() {\n  // relis \"fruits\" avec JSON.parse et affiche fruits.length\n});" }
        ],
        hints: ["localStorage.setItem(\"fruits\", JSON.stringify(fruits));", "let fruits = JSON.parse(localStorage.getItem(\"fruits\")); puis affiche fruits.length"],
        solution: { js: "document.querySelector(\"#sauver\").addEventListener(\"click\", function() {\n  let fruits = [\"pomme\", \"banane\", \"kiwi\"];\n  localStorage.setItem(\"fruits\", JSON.stringify(fruits));\n});\ndocument.querySelector(\"#charger\").addEventListener(\"click\", function() {\n  let fruits = JSON.parse(localStorage.getItem(\"fruits\"));\n  document.querySelector(\"#resultat\").textContent = fruits.length;\n});" },
        check(doc, win, C){
          win.localStorage.removeItem('fruits');
          const sauver = doc.querySelector('#sauver'), charger = doc.querySelector('#charger');
          if(!sauver || !charger) return { success:false, message:"Il manque les deux boutons." };
          sauver.click();
          const raw = win.localStorage.getItem('fruits');
          if(!raw) return { success:false, message:"Rien n'est sauvegardé sous la clé \"fruits\"." };
          try{ JSON.parse(raw); } catch(e){ return { success:false, message:"La donnée sauvegardée n'est pas un JSON valide (utilise JSON.stringify)." }; }
          charger.click();
          if(C.text('#resultat').trim() !== '3') return { success:false, message:"Le résultat devrait afficher 3 (le nombre de fruits)." };
          return { success:true, message:"Tu sais sauvegarder et relire un tableau complet, bravo !" };
        }
      }
    }
  },

  // ============ LEÇON 5 — PROJET FINAL ============
  {
    id: 'ch6-l5',
    title: "🏆 Projet : mon carnet de scores",
    icon: '🏆',
    explanation: [
      { type:'text', heading:"Le grand projet du Chapitre 6", html:
        "<p>Tu vas construire un vrai petit outil : un carnet qui garde en mémoire une liste de scores (ou de noms, ou de n'importe quoi), en utilisant tout ce que tu as appris : formulaires, lecture de valeurs, et localStorage !</p>" },
      { type:'text', heading:"Et pourquoi les grands sites utilisent des \"frameworks\" ?", html:
        "<p>Tu as remarqué qu'on doit souvent réécrire du code très similaire (chercher un élément, mettre à jour l'affichage...) ? Sur les très gros sites (Instagram, Netflix...), les développeurs utilisent des <strong>frameworks</strong> comme <strong>React</strong> pour éviter de répéter ce travail : on décrit à quoi la page DOIT ressembler, et le framework se charge tout seul de mettre à jour l'affichage. C'est un outil plus avancé que tu pourras apprendre plus tard, une fois que tu maîtriseras bien le JavaScript \"pur\" comme maintenant !</p>" },
      { type:'tip', html:"Ne t'inquiète pas si les exercices suivants sont un peu longs : prends ton temps, tu combines maintenant plusieurs chapitres entiers dans un seul projet !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<input id=\"item\" type=\"text\" placeholder=\"Ajouter un score\">\n<button id=\"ajouter\">Ajouter</button>\n<ul id=\"liste\"></ul>", readonly:true },
        { type:'js', starter:"function charger() {\n  return JSON.parse(localStorage.getItem(\"scores\") || \"[]\");\n}\nfunction afficher() {\n  let liste = document.querySelector(\"#liste\");\n  liste.innerHTML = \"\";\n  charger().forEach(function(item) {\n    let li = document.createElement(\"li\");\n    li.textContent = item;\n    liste.appendChild(li);\n  });\n}\ndocument.querySelector(\"#ajouter\").addEventListener(\"click\", function() {\n  let input = document.querySelector(\"#item\");\n  let scores = charger();\n  scores.push(input.value);\n  localStorage.setItem(\"scores\", JSON.stringify(scores));\n  input.value = \"\";\n  afficher();\n});\nafficher();" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Au clic sur <code>#ajouter</code>, prends la valeur de l'input et ajoute-la comme <code>&lt;li&gt;</code> dans <code>#liste</code> (pas encore besoin de localStorage pour cet exercice).",
        tabs: [
          { type:'html', starter:"<input id=\"item\" type=\"text\">\n<button id=\"ajouter\">Ajouter</button>\n<ul id=\"liste\"></ul>", readonly:true },
          { type:'js', starter:"let input = document.querySelector(\"#item\");\nlet liste = document.querySelector(\"#liste\");\n\ndocument.querySelector(\"#ajouter\").addEventListener(\"click\", function() {\n  // crée un <li> avec le texte de input.value et ajoute-le à liste\n});" }
        ],
        hints: ["let li = document.createElement(\"li\"); li.textContent = input.value; liste.appendChild(li);"],
        solution: { js: "let input = document.querySelector(\"#item\");\nlet liste = document.querySelector(\"#liste\");\ndocument.querySelector(\"#ajouter\").addEventListener(\"click\", function() {\n  let li = document.createElement(\"li\");\n  li.textContent = input.value;\n  liste.appendChild(li);\n});" },
        check(doc, win, C){
          const input = doc.querySelector('#item'), btn = doc.querySelector('#ajouter');
          if(!input || !btn) return { success:false, message:"Il manque l'input ou le bouton." };
          input.value = 'Score 100';
          btn.click();
          if(C.count('#liste li') < 1) return { success:false, message:"Aucun <li> n'a été ajouté à la liste." };
          if(!C.text('#liste').includes('Score 100')) return { success:false, message:"Le texte du li ne correspond pas à ce qui a été tapé." };
          return { success:true, message:"Ta liste s'affiche correctement !" };
        }
      },
      moyen: {
        instructions: "Fais en sorte que chaque ajout soit aussi sauvegardé dans localStorage (clé <code>\"scores\"</code>, sous forme de tableau JSON), en plus de s'afficher.",
        tabs: [
          { type:'html', starter:"<input id=\"item\" type=\"text\">\n<button id=\"ajouter\">Ajouter</button>\n<ul id=\"liste\"></ul>", readonly:true },
          { type:'js', starter:"let input = document.querySelector(\"#item\");\nlet liste = document.querySelector(\"#liste\");\n\ndocument.querySelector(\"#ajouter\").addEventListener(\"click\", function() {\n  let li = document.createElement(\"li\");\n  li.textContent = input.value;\n  liste.appendChild(li);\n\n  // Sauvegarde aussi dans localStorage ici (clé \"scores\")\n});" }
        ],
        hints: ["let scores = JSON.parse(localStorage.getItem(\"scores\") || \"[]\"); scores.push(input.value); localStorage.setItem(\"scores\", JSON.stringify(scores));"],
        solution: { js: "let input = document.querySelector(\"#item\");\nlet liste = document.querySelector(\"#liste\");\ndocument.querySelector(\"#ajouter\").addEventListener(\"click\", function() {\n  let li = document.createElement(\"li\");\n  li.textContent = input.value;\n  liste.appendChild(li);\n\n  let scores = JSON.parse(localStorage.getItem(\"scores\") || \"[]\");\n  scores.push(input.value);\n  localStorage.setItem(\"scores\", JSON.stringify(scores));\n});" },
        check(doc, win, C){
          win.localStorage.removeItem('scores');
          const input = doc.querySelector('#item'), btn = doc.querySelector('#ajouter');
          if(!input || !btn) return { success:false, message:"Il manque l'input ou le bouton." };
          input.value = 'Alice'; btn.click();
          input.value = 'Bob'; btn.click();
          input.value = 'Chloé'; btn.click();
          if(C.count('#liste li') < 3) return { success:false, message:"Il manque des éléments affichés dans la liste." };
          let saved = [];
          try{ saved = JSON.parse(win.localStorage.getItem('scores') || '[]'); } catch(e){}
          if(saved.length < 3) return { success:false, message:"localStorage ne contient pas encore les 3 entrées sauvegardées." };
          return { success:true, message:"Ta liste est maintenant sauvegardée pour de vrai !" };
        }
      },
      difficile: {
        instructions: "Ajoute un bouton <code>#vider</code> qui efface toute la liste ET vide la clé <code>\"scores\"</code> dans localStorage.",
        tabs: [
          { type:'html', starter:"<input id=\"item\" type=\"text\">\n<button id=\"ajouter\">Ajouter</button>\n<button id=\"vider\">Tout effacer</button>\n<ul id=\"liste\"></ul>", readonly:true },
          { type:'js', starter:"let input = document.querySelector(\"#item\");\nlet liste = document.querySelector(\"#liste\");\ndocument.querySelector(\"#ajouter\").addEventListener(\"click\", function() {\n  let li = document.createElement(\"li\");\n  li.textContent = input.value;\n  liste.appendChild(li);\n  let scores = JSON.parse(localStorage.getItem(\"scores\") || \"[]\");\n  scores.push(input.value);\n  localStorage.setItem(\"scores\", JSON.stringify(scores));\n});\n\n// Ton bouton #vider ici" }
        ],
        hints: ["liste.innerHTML = \"\"; localStorage.removeItem(\"scores\"); dans le click de #vider."],
        solution: { js: "let input = document.querySelector(\"#item\");\nlet liste = document.querySelector(\"#liste\");\ndocument.querySelector(\"#ajouter\").addEventListener(\"click\", function() {\n  let li = document.createElement(\"li\");\n  li.textContent = input.value;\n  liste.appendChild(li);\n  let scores = JSON.parse(localStorage.getItem(\"scores\") || \"[]\");\n  scores.push(input.value);\n  localStorage.setItem(\"scores\", JSON.stringify(scores));\n});\ndocument.querySelector(\"#vider\").addEventListener(\"click\", function() {\n  liste.innerHTML = \"\";\n  localStorage.removeItem(\"scores\");\n});" },
        check(doc, win, C){
          win.localStorage.removeItem('scores');
          const input = doc.querySelector('#item'), ajouter = doc.querySelector('#ajouter'), vider = doc.querySelector('#vider');
          if(!ajouter || !vider) return { success:false, message:"Il manque le bouton ajouter ou le bouton vider." };
          input.value = 'Test'; ajouter.click();
          vider.click();
          if(C.count('#liste li') !== 0) return { success:false, message:"La liste affichée devrait être vide après avoir cliqué sur vider." };
          if(win.localStorage.getItem('scores')) return { success:false, message:"localStorage devrait aussi être vidé pour la clé \"scores\"." };
          return { success:true, message:"🏆 BRAVO ! Ton carnet de scores complet fonctionne : ajouter, sauvegarder, et tout effacer. Chapitre 6 terminé !" };
        }
      }
    }
  }

  ]
};
