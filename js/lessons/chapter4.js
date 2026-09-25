const CHAPTER_4 = {
  id: 'ch4',
  title: 'Projet Final — Mon Mini-Site',
  subtitle: 'Combine tout ce que tu as appris pour construire un vrai site',
  icon: '🚀',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch4-l1',
    title: "Construire plusieurs pages",
    icon: '🗺️',
    explanation: [
      { type:'text', heading:"Un site, plusieurs pages", html:
        "<p>Un vrai site web a souvent plusieurs pages : Accueil, À propos, Contact... Dans ce projet, chaque \"page\" sera une balise <code>&lt;section&gt;</code> avec un <code>id</code> unique. On les affichera une par une, comme de vraies pages séparées !</p>" },
      { type:'code', code: "<section id=\"accueil\">\n  <h2>Bienvenue</h2>\n  <p>Ceci est ma page d'accueil.</p>\n</section>\n\n<section id=\"contact\">\n  <h2>Contact</h2>\n  <p>Écris-moi ici !</p>\n</section>" },
      { type:'tip', html:"Chaque section doit avoir un <code>id</code> différent : c'est ce qui permettra de les relier avec des liens, comme tu l'as appris au Chapitre 1 !" },
      { type:'demo', tabs:[{ type:'html', starter:
        "<section id=\"accueil\">\n  <h2>Accueil</h2>\n  <p>Bienvenue sur mon site !</p>\n</section>\n<section id=\"apropos\">\n  <h2>À propos</h2>\n  <p>Je m'appelle Daouda.</p>\n</section>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Crée deux sections : une avec <code>id=\"accueil\"</code> et une avec <code>id=\"contact\"</code>, chacune avec un <code>&lt;h2&gt;</code> et un <code>&lt;p&gt;</code>.",
        tabs: [{ type:'html', starter:"" }],
        hints: ["<section id=\"accueil\"> ... </section> et <section id=\"contact\"> ... </section>", "Chaque section a besoin d'un h2 ET d'un p à l'intérieur."],
        solution: { html: "<section id=\"accueil\">\n  <h2>Accueil</h2>\n  <p>Bienvenue !</p>\n</section>\n<section id=\"contact\">\n  <h2>Contact</h2>\n  <p>Écris-moi !</p>\n</section>" },
        check(doc, win, C){
          if(!C.exists('section#accueil h2') || !C.exists('section#accueil p')) return { success:false, message:"La section #accueil doit contenir un h2 et un p." };
          if(!C.exists('section#contact h2') || !C.exists('section#contact p')) return { success:false, message:"La section #contact doit contenir un h2 et un p." };
          return { success:true, message:"Tes deux premières pages sont prêtes !" };
        }
      },
      moyen: {
        instructions: "Ajoute une troisième section <code>id=\"apropos\"</code> (À propos), toujours avec un h2 et un p. Les trois textes doivent être différents.",
        tabs: [{ type:'html', starter:"<section id=\"accueil\">\n  <h2>Accueil</h2>\n  <p>Bienvenue !</p>\n</section>\n<section id=\"contact\">\n  <h2>Contact</h2>\n  <p>Écris-moi !</p>\n</section>" }],
        hints: ["Ajoute une troisième section avec id=\"apropos\"."],
        solution: { html: "<section id=\"accueil\">\n  <h2>Accueil</h2>\n  <p>Bienvenue !</p>\n</section>\n<section id=\"apropos\">\n  <h2>À propos</h2>\n  <p>Je m'appelle Daouda.</p>\n</section>\n<section id=\"contact\">\n  <h2>Contact</h2>\n  <p>Écris-moi !</p>\n</section>" },
        check(doc, win, C){
          ['accueil', 'apropos', 'contact'].forEach(() => {});
          if(!C.exists('section#accueil') || !C.exists('section#apropos') || !C.exists('section#contact')) return { success:false, message:"Il me faut bien 3 sections : accueil, apropos et contact." };
          const texts = ['accueil','apropos','contact'].map(id => C.text('section#' + id + ' p').toLowerCase());
          if(new Set(texts).size < 3) return { success:false, message:"Les 3 paragraphes doivent avoir des textes différents." };
          return { success:true, message:"Trois pages bien construites, ton site prend forme !" };
        }
      },
      difficile: {
        instructions: "Ajoute un <code>&lt;nav&gt;</code> avec 3 liens (<code>&lt;a&gt;</code>) qui pointent vers chaque section : <code>href=\"#accueil\"</code>, <code>href=\"#apropos\"</code>, <code>href=\"#contact\"</code>.",
        tabs: [{ type:'html', starter:"<section id=\"accueil\">\n  <h2>Accueil</h2>\n  <p>Bienvenue !</p>\n</section>\n<section id=\"apropos\">\n  <h2>À propos</h2>\n  <p>Je m'appelle Daouda.</p>\n</section>\n<section id=\"contact\">\n  <h2>Contact</h2>\n  <p>Écris-moi !</p>\n</section>" }],
        hints: ["Ajoute <nav> tout en haut, avant les sections.", "Chaque lien : <a href=\"#accueil\">Accueil</a>"],
        solution: { html: "<nav>\n  <a href=\"#accueil\">Accueil</a>\n  <a href=\"#apropos\">À propos</a>\n  <a href=\"#contact\">Contact</a>\n</nav>\n<section id=\"accueil\">\n  <h2>Accueil</h2>\n  <p>Bienvenue !</p>\n</section>\n<section id=\"apropos\">\n  <h2>À propos</h2>\n  <p>Je m'appelle Daouda.</p>\n</section>\n<section id=\"contact\">\n  <h2>Contact</h2>\n  <p>Écris-moi !</p>\n</section>" },
        check(doc, win, C){
          if(C.count('nav a') < 3) return { success:false, message:"Il me faut 3 liens à l'intérieur de ton <nav>." };
          ['#accueil', '#apropos', '#contact'].forEach(() => {});
          const hrefs = C.all('nav a').map(a => a.getAttribute('href'));
          if(!hrefs.includes('#accueil') || !hrefs.includes('#apropos') || !hrefs.includes('#contact')) return { success:false, message:"Tes liens doivent pointer vers #accueil, #apropos et #contact." };
          return { success:true, message:"Un menu de navigation relié à toutes tes pages, excellent !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch4-l2',
    title: "Styliser la navigation",
    icon: '🧭',
    explanation: [
      { type:'text', heading:"Un menu qui en jette", html:
        "<p>Utilise tes connaissances en CSS (flexbox, couleurs, hover) pour transformer ton <code>&lt;nav&gt;</code> en un vrai menu de navigation moderne !</p>" },
      { type:'code', code: "nav {\n  display: flex;\n  gap: 20px;\n  background: #333;\n  padding: 16px;\n}\nnav a {\n  color: white;\n  text-decoration: none;\n}" },
      { type:'tip', html:"<code>text-decoration: none;</code> enlève le soulignement automatique des liens : très utilisé dans les menus de navigation !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<nav>\n  <a href=\"#accueil\">Accueil</a>\n  <a href=\"#apropos\">À propos</a>\n  <a href=\"#contact\">Contact</a>\n</nav>", readonly:true },
        { type:'css', starter:"nav {\n  display: flex;\n  gap: 24px;\n  background: #2c3e50;\n  padding: 16px 24px;\n}\nnav a {\n  color: white;\n  text-decoration: none;\n  font-weight: bold;\n  transition: color 0.2s;\n}\nnav a:hover {\n  color: gold;\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Transforme le <code>&lt;nav&gt;</code> en ligne flexible avec <code>display: flex;</code> et enlève le soulignement des liens avec <code>text-decoration: none;</code>.",
        tabs: [
          { type:'html', starter:"<nav>\n  <a href=\"#accueil\">Accueil</a>\n  <a href=\"#apropos\">À propos</a>\n  <a href=\"#contact\">Contact</a>\n</nav>", readonly:true },
          { type:'css', starter:"nav {\n  \n}\nnav a {\n  \n}" }
        ],
        hints: ["display: flex; dans nav.", "text-decoration: none; dans nav a."],
        solution: { css: "nav {\n  display: flex;\n}\nnav a {\n  text-decoration: none;\n}" },
        check(doc, win, C){
          if(!C.styleEquals('nav', 'display', 'flex')) return { success:false, message:"Ton nav n'est pas encore en display: flex." };
          if(!C.styleEquals('nav a', 'textDecorationLine', 'none')) return { success:false, message:"Tes liens ont encore un soulignement." };
          return { success:true, message:"Ton menu est maintenant aligné et propre !" };
        }
      },
      moyen: {
        instructions: "Donne au <code>&lt;nav&gt;</code> un fond sombre (ex: <code>#2c3e50</code>) et du padding, et mets les liens en blanc.",
        tabs: [
          { type:'html', starter:"<nav>\n  <a href=\"#accueil\">Accueil</a>\n  <a href=\"#apropos\">À propos</a>\n  <a href=\"#contact\">Contact</a>\n</nav>", readonly:true },
          { type:'css', starter:"nav {\n  display: flex;\n  \n}\nnav a {\n  text-decoration: none;\n  \n}" }
        ],
        hints: ["background-color: #2c3e50; et padding: 16px; sur nav.", "color: white; sur nav a."],
        solution: { css: "nav {\n  display: flex;\n  background-color: #2c3e50;\n  padding: 16px;\n  gap: 20px;\n}\nnav a {\n  text-decoration: none;\n  color: white;\n}" },
        check(doc, win, C){
          const bg = C.style('nav', 'backgroundColor');
          if(!bg || bg === 'rgba(0, 0, 0, 0)') return { success:false, message:"Ton nav n'a pas encore de couleur de fond." };
          if(parseInt(C.style('nav', 'paddingTop')) < 5) return { success:false, message:"Il manque du padding sur ton nav." };
          if(!C.colorEquals('nav a', 'color', 'white')) return { success:false, message:"Tes liens ne sont pas encore blancs." };
          return { success:true, message:"Un menu sombre et élégant, très pro !" };
        }
      },
      difficile: {
        instructions: "Ajoute une règle <code>:hover</code> sur les liens du menu, avec une <code>transition</code> pour un effet fluide.",
        tabs: [
          { type:'html', starter:"<nav>\n  <a href=\"#accueil\">Accueil</a>\n  <a href=\"#apropos\">À propos</a>\n  <a href=\"#contact\">Contact</a>\n</nav>", readonly:true },
          { type:'css', starter:"nav {\n  display: flex;\n  background-color: #2c3e50;\n  padding: 16px;\n  gap: 20px;\n}\nnav a {\n  text-decoration: none;\n  color: white;\n  \n}\n\n/* Ajoute ta règle :hover ici */" }
        ],
        hints: ["Ajoute transition: color 0.2s; dans nav a.", "nav a:hover { color: gold; }"],
        solution: { css: "nav {\n  display: flex;\n  background-color: #2c3e50;\n  padding: 16px;\n  gap: 20px;\n}\nnav a {\n  text-decoration: none;\n  color: white;\n  transition: color 0.2s;\n}\nnav a:hover {\n  color: gold;\n}" },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '').toLowerCase();
          if(!css.includes(':hover')) return { success:false, message:"Il manque une règle :hover sur tes liens." };
          if(!css.includes('transition')) return { success:false, message:"Il manque une transition pour un effet fluide." };
          return { success:true, message:"Un menu interactif et fluide, ton site a de l'allure !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch4-l3',
    title: "Afficher une seule page à la fois",
    icon: '🎭',
    explanation: [
      { type:'text', heading:"Le cœur de ton mini-site", html:
        "<p>Pour qu'on ne voie qu'une seule page à la fois, on cache toutes les sections avec CSS (<code>.page { display: none; }</code>), puis JavaScript affiche uniquement celle qu'on veut, en lui ajoutant la classe <code>active</code>.</p>" },
      { type:'code', code: ".page { display: none; }\n.page.active { display: block; }" },
      { type:'code', code: "let lien = document.querySelector(\".nav-link\");\nlien.addEventListener(\"click\", function() {\n  // cacher toutes les pages, puis afficher la bonne\n});" },
      { type:'tip', html:"Astuce : <code>document.querySelectorAll(\".page\").forEach(...)</code> permet de faire une action sur TOUTES les sections d'un coup, très utile pour toutes les cacher avant d'en afficher une seule !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<nav>\n  <a href=\"#accueil\" class=\"nav-link\">Accueil</a>\n  <a href=\"#apropos\" class=\"nav-link\">À propos</a>\n</nav>\n<section id=\"accueil\" class=\"page\">\n  <h2>Accueil</h2>\n</section>\n<section id=\"apropos\" class=\"page\">\n  <h2>À propos</h2>\n</section>", readonly:true },
        { type:'css', starter:".page { display: none; }\n.page.active { display: block; }\nnav { display: flex; gap: 16px; }", readonly:true },
        { type:'js', starter:"document.querySelector(\"#accueil\").classList.add(\"active\");\n\ndocument.querySelectorAll(\".nav-link\").forEach(function(lien) {\n  lien.addEventListener(\"click\", function() {\n    document.querySelectorAll(\".page\").forEach(function(page) {\n      page.classList.remove(\"active\");\n    });\n    let cible = lien.getAttribute(\"href\").substring(1);\n    document.querySelector(\"#\" + cible).classList.add(\"active\");\n  });\n});" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Affiche la page d'accueil par défaut en ajoutant la classe <code>\"active\"</code> à la section <code>#accueil</code>.",
        tabs: [
          { type:'html', starter:"<section id=\"accueil\" class=\"page\"><h2>Accueil</h2></section>\n<section id=\"contact\" class=\"page\"><h2>Contact</h2></section>", readonly:true },
          { type:'css', starter:".page { display: none; }\n.page.active { display: block; }", readonly:true },
          { type:'js', starter:"// Affiche #accueil par défaut" }
        ],
        hints: ["document.querySelector(\"#accueil\").classList.add(\"active\");"],
        solution: { js: "document.querySelector(\"#accueil\").classList.add(\"active\");" },
        check(doc){
          const accueil = doc.querySelector('#accueil');
          if(!accueil || !accueil.classList.contains('active')) return { success:false, message:"La section #accueil n'a pas encore la classe active." };
          return { success:true, message:"Ta page d'accueil s'affiche par défaut !" };
        }
      },
      moyen: {
        instructions: "Ajoute un clic sur chaque lien <code>.nav-link</code> : il doit cacher TOUTES les pages, puis afficher SEULEMENT celle qui correspond au lien cliqué.",
        tabs: [
          { type:'html', starter:"<nav>\n  <a href=\"#accueil\" class=\"nav-link\">Accueil</a>\n  <a href=\"#apropos\" class=\"nav-link\">À propos</a>\n  <a href=\"#contact\" class=\"nav-link\">Contact</a>\n</nav>\n<section id=\"accueil\" class=\"page active\"><h2>Accueil</h2></section>\n<section id=\"apropos\" class=\"page\"><h2>À propos</h2></section>\n<section id=\"contact\" class=\"page\"><h2>Contact</h2></section>", readonly:true },
          { type:'css', starter:".page { display: none; }\n.page.active { display: block; }\nnav { display: flex; gap: 16px; }", readonly:true },
          { type:'js', starter:"document.querySelectorAll(\".nav-link\").forEach(function(lien) {\n  lien.addEventListener(\"click\", function() {\n    // 1. Cache toutes les .page\n    // 2. Trouve l'id cible avec lien.getAttribute(\"href\")\n    // 3. Ajoute la classe active à la bonne section\n  });\n});" }
        ],
        hints: [
          "document.querySelectorAll(\".page\").forEach(function(page) { page.classList.remove(\"active\"); });",
          "let cible = lien.getAttribute(\"href\").substring(1); document.querySelector(\"#\" + cible).classList.add(\"active\");"
        ],
        solution: { js: "document.querySelectorAll(\".nav-link\").forEach(function(lien) {\n  lien.addEventListener(\"click\", function() {\n    document.querySelectorAll(\".page\").forEach(function(page) {\n      page.classList.remove(\"active\");\n    });\n    let cible = lien.getAttribute(\"href\").substring(1);\n    document.querySelector(\"#\" + cible).classList.add(\"active\");\n  });\n});" },
        check(doc){
          const lienApropos = doc.querySelector('a[href="#apropos"]');
          if(!lienApropos) return { success:false, message:"Il manque le lien vers #apropos." };
          lienApropos.click();
          const accueil = doc.querySelector('#accueil'), apropos = doc.querySelector('#apropos'), contact = doc.querySelector('#contact');
          if(!apropos.classList.contains('active')) return { success:false, message:"Après le clic sur 'À propos', cette page devrait s'afficher." };
          if(accueil.classList.contains('active') || contact.classList.contains('active')) return { success:false, message:"Les autres pages devraient être cachées après le clic." };
          return { success:true, message:"Ton mini-site change de page au clic, comme un vrai site !" };
        }
      },
      difficile: {
        instructions: "En plus de changer de page, mets en valeur le lien actuellement cliqué en lui ajoutant la classe <code>\"active-link\"</code> (et en l'enlevant des autres liens).",
        tabs: [
          { type:'html', starter:"<nav>\n  <a href=\"#accueil\" class=\"nav-link\">Accueil</a>\n  <a href=\"#apropos\" class=\"nav-link\">À propos</a>\n  <a href=\"#contact\" class=\"nav-link\">Contact</a>\n</nav>\n<section id=\"accueil\" class=\"page active\"><h2>Accueil</h2></section>\n<section id=\"apropos\" class=\"page\"><h2>À propos</h2></section>\n<section id=\"contact\" class=\"page\"><h2>Contact</h2></section>", readonly:true },
          { type:'css', starter:".page { display: none; }\n.page.active { display: block; }\nnav { display: flex; gap: 16px; }\n.active-link { font-weight: bold; text-decoration: underline; }", readonly:true },
          { type:'js', starter:"document.querySelectorAll(\".nav-link\").forEach(function(lien) {\n  lien.addEventListener(\"click\", function() {\n    document.querySelectorAll(\".page\").forEach(function(page) {\n      page.classList.remove(\"active\");\n    });\n    let cible = lien.getAttribute(\"href\").substring(1);\n    document.querySelector(\"#\" + cible).classList.add(\"active\");\n\n    // Ajoute ici la gestion de la classe active-link\n  });\n});" }
        ],
        hints: [
          "document.querySelectorAll(\".nav-link\").forEach(function(l) { l.classList.remove(\"active-link\"); }); avant d'ajouter la classe.",
          "lien.classList.add(\"active-link\"); à la fin de la fonction."
        ],
        solution: { js: "document.querySelectorAll(\".nav-link\").forEach(function(lien) {\n  lien.addEventListener(\"click\", function() {\n    document.querySelectorAll(\".page\").forEach(function(page) {\n      page.classList.remove(\"active\");\n    });\n    let cible = lien.getAttribute(\"href\").substring(1);\n    document.querySelector(\"#\" + cible).classList.add(\"active\");\n\n    document.querySelectorAll(\".nav-link\").forEach(function(l) {\n      l.classList.remove(\"active-link\");\n    });\n    lien.classList.add(\"active-link\");\n  });\n});" },
        check(doc){
          const lienContact = doc.querySelector('a[href="#contact"]');
          const lienAccueil = doc.querySelector('a[href="#accueil"]');
          if(!lienContact || !lienAccueil) return { success:false, message:"Il manque des liens de navigation." };
          lienContact.click();
          if(!lienContact.classList.contains('active-link')) return { success:false, message:"Le lien cliqué devrait avoir la classe active-link." };
          lienAccueil.click();
          if(lienContact.classList.contains('active-link')) return { success:false, message:"L'ancien lien actif devrait perdre la classe active-link." };
          if(!lienAccueil.classList.contains('active-link')) return { success:false, message:"Le nouveau lien cliqué devrait avoir la classe active-link." };
          return { success:true, message:"Ton menu indique maintenant où on se trouve, comme un vrai site pro !" };
        }
      }
    }
  },

  // ============ LEÇON 4 — PROJET FINAL ============
  {
    id: 'ch4-l4',
    title: "🏆 Projet final : mon mini-site complet",
    icon: '🏆',
    explanation: [
      { type:'text', heading:"Le grand final !", html:
        "<p>Tu as appris le HTML, le CSS, le JavaScript, et maintenant à construire un vrai mini-site avec plusieurs pages reliées. Il est temps de tout rassembler dans un projet complet, avec une touche d'interactivité en bonus !</p>" },
      { type:'tip', html:"Prends ton temps sur ce dernier projet, c'est la synthèse de TOUT ce que tu as appris depuis le début. Tu peux être fier de toi !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<nav>\n  <a href=\"#accueil\" class=\"nav-link\">Accueil</a>\n  <a href=\"#contact\" class=\"nav-link\">Contact</a>\n</nav>\n<section id=\"accueil\" class=\"page active\">\n  <h1>Le site de Daouda</h1>\n</section>\n<section id=\"contact\" class=\"page\">\n  <h2>Contact</h2>\n  <button id=\"btn-merci\">Dis bonjour</button>\n  <p id=\"message\"></p>\n</section>", readonly:true },
        { type:'css', starter:".page { display: none; }\n.page.active { display: block; }\nnav { display: flex; gap: 16px; background: #2c3e50; padding: 14px; }\nnav a { color: white; text-decoration: none; }", readonly:true },
        { type:'js', starter:"document.querySelectorAll(\".nav-link\").forEach(function(lien) {\n  lien.addEventListener(\"click\", function() {\n    document.querySelectorAll(\".page\").forEach(function(p) { p.classList.remove(\"active\"); });\n    document.querySelector(lien.getAttribute(\"href\")).classList.add(\"active\");\n  });\n});\ndocument.querySelector(\"#btn-merci\").addEventListener(\"click\", function() {\n  document.querySelector(\"#message\").textContent = \"Merci de ta visite !\";\n});" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Construis la structure de ton mini-site : un <code>&lt;nav&gt;</code> avec 3 liens (Accueil, Projets, Contact) et 3 <code>&lt;section&gt;</code> correspondantes, chacune avec la classe <code>\"page\"</code>.",
        tabs: [{ type:'html', starter:"" }],
        hints: ["3 liens avec class=\"nav-link\", 3 sections avec class=\"page\" et le bon id."],
        solution: { html: "<nav>\n  <a href=\"#accueil\" class=\"nav-link\">Accueil</a>\n  <a href=\"#projets\" class=\"nav-link\">Projets</a>\n  <a href=\"#contact\" class=\"nav-link\">Contact</a>\n</nav>\n<section id=\"accueil\" class=\"page\">\n  <h1>Mon Site</h1>\n</section>\n<section id=\"projets\" class=\"page\">\n  <h2>Mes projets</h2>\n</section>\n<section id=\"contact\" class=\"page\">\n  <h2>Contact</h2>\n</section>" },
        check(doc, win, C){
          if(C.count('nav a.nav-link') < 3) return { success:false, message:"Il me faut 3 liens avec la classe nav-link." };
          if(!C.exists('section#accueil.page') || !C.exists('section#projets.page') || !C.exists('section#contact.page')) return { success:false, message:"Il me faut 3 sections (accueil, projets, contact) avec la classe page." };
          return { success:true, message:"La structure de ton mini-site est prête !" };
        }
      },
      moyen: {
        instructions: "Ajoute le CSS pour cacher les pages inactives, styliser le nav en flexbox, et écris le JavaScript qui affiche la bonne page au clic (comme à la leçon précédente).",
        tabs: [
          { type:'html', starter:"<nav>\n  <a href=\"#accueil\" class=\"nav-link\">Accueil</a>\n  <a href=\"#projets\" class=\"nav-link\">Projets</a>\n  <a href=\"#contact\" class=\"nav-link\">Contact</a>\n</nav>\n<section id=\"accueil\" class=\"page\"><h1>Mon Site</h1></section>\n<section id=\"projets\" class=\"page\"><h2>Mes projets</h2></section>\n<section id=\"contact\" class=\"page\"><h2>Contact</h2></section>", readonly:true },
          { type:'css', starter:"/* Cache les pages inactives ici */\n\nnav {\n  display: flex;\n}" },
          { type:'js', starter:"// Affiche accueil par défaut, puis gère les clics sur les liens" }
        ],
        hints: [
          ".page { display: none; } .page.active { display: block; }",
          "document.querySelector(\"#accueil\").classList.add(\"active\"); puis la boucle forEach sur .nav-link comme à la leçon 3."
        ],
        solution: {
          css: ".page { display: none; }\n.page.active { display: block; }\nnav {\n  display: flex;\n  gap: 16px;\n}",
          js: "document.querySelector(\"#accueil\").classList.add(\"active\");\ndocument.querySelectorAll(\".nav-link\").forEach(function(lien) {\n  lien.addEventListener(\"click\", function() {\n    document.querySelectorAll(\".page\").forEach(function(p) { p.classList.remove(\"active\"); });\n    let cible = lien.getAttribute(\"href\").substring(1);\n    document.querySelector(\"#\" + cible).classList.add(\"active\");\n  });\n});"
        },
        check(doc, win, C){
          const accueil = doc.querySelector('#accueil');
          if(!accueil.classList.contains('active')) return { success:false, message:"La page accueil doit s'afficher par défaut." };
          const lienProjets = doc.querySelector('a[href="#projets"]');
          if(!lienProjets) return { success:false, message:"Il manque le lien vers #projets." };
          lienProjets.click();
          if(!doc.querySelector('#projets').classList.contains('active')) return { success:false, message:"Après le clic, la page projets devrait s'afficher." };
          if(accueil.classList.contains('active')) return { success:false, message:"La page accueil devrait se cacher après le clic sur un autre lien." };
          return { success:true, message:"Ton mini-site fonctionne comme un vrai site à plusieurs pages !" };
        }
      },
      difficile: {
        instructions: "Ajoute un bouton dans la page Contact qui, une fois cliqué, affiche un message de remerciement dans un <code>&lt;p id=\"message\"&gt;</code> (réutilise ce que tu as appris au Chapitre 3 !).",
        tabs: [
          { type:'html', starter:"<nav>\n  <a href=\"#accueil\" class=\"nav-link\">Accueil</a>\n  <a href=\"#contact\" class=\"nav-link\">Contact</a>\n</nav>\n<section id=\"accueil\" class=\"page active\"><h1>Mon Site</h1></section>\n<section id=\"contact\" class=\"page\">\n  <h2>Contact</h2>\n  <button id=\"btn-merci\">Dis bonjour</button>\n  <p id=\"message\"></p>\n</section>", readonly:true },
          { type:'css', starter:".page { display: none; }\n.page.active { display: block; }\nnav { display: flex; gap: 16px; }", readonly:true },
          { type:'js', starter:"document.querySelectorAll(\".nav-link\").forEach(function(lien) {\n  lien.addEventListener(\"click\", function() {\n    document.querySelectorAll(\".page\").forEach(function(p) { p.classList.remove(\"active\"); });\n    document.querySelector(lien.getAttribute(\"href\")).classList.add(\"active\");\n  });\n});\n\n// Ajoute ici le clic sur #btn-merci" }
        ],
        hints: ["document.querySelector(\"#btn-merci\").addEventListener(\"click\", function() {\n  document.querySelector(\"#message\").textContent = \"Merci de ta visite !\";\n});"],
        solution: { js: "document.querySelectorAll(\".nav-link\").forEach(function(lien) {\n  lien.addEventListener(\"click\", function() {\n    document.querySelectorAll(\".page\").forEach(function(p) { p.classList.remove(\"active\"); });\n    document.querySelector(lien.getAttribute(\"href\")).classList.add(\"active\");\n  });\n});\ndocument.querySelector(\"#btn-merci\").addEventListener(\"click\", function() {\n  document.querySelector(\"#message\").textContent = \"Merci de ta visite !\";\n});" },
        check(doc, win, C){
          const btn = doc.querySelector('#btn-merci');
          if(!btn) return { success:false, message:"Il manque le bouton #btn-merci." };
          btn.click();
          const msg = C.text('#message');
          if(!msg || msg.length < 3) return { success:false, message:"Après le clic, le message devrait s'afficher dans #message." };
          return { success:true, message:"🏆 BRAVO DAOUDA ! Ton mini-site complet fonctionne : plusieurs pages, un menu stylé, et de l'interactivité. Tu es un vrai développeur web !" };
        }
      }
    }
  }

  ]
};
