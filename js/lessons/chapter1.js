const CHAPTER_1 = {
  id: 'ch1',
  title: 'HTML — Construire la maison',
  subtitle: 'Apprends à écrire la structure des pages web',
  icon: '📄',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch1-l1',
    title: "C'est quoi un site web ?",
    icon: '🌐',
    explanation: [
      { type:'text', heading:"Le langage secret des pages web", html:
        "<p>Quand tu regardes un site web, ton navigateur (Chrome, Firefox...) lit un fichier écrit dans un langage spécial qui s'appelle le <strong>HTML</strong>. Ce langage utilise des <strong>balises</strong> pour dire au navigateur quoi afficher.</p>" },
      { type:'code', code: "<p>Bonjour tout le monde !</p>" },
      { type:'text', heading:"Comment ça marche ?", html:
        "<p>Une balise s'écrit entre chevrons <code>&lt; &gt;</code>. Il y a presque toujours une balise pour <strong>ouvrir</strong> (<code>&lt;p&gt;</code>) et une pour <strong>fermer</strong> (<code>&lt;/p&gt;</code>), avec un slash <code>/</code>. Tout ce qui est entre les deux, c'est le contenu !</p>" },
      { type:'tip', html:"La balise <code>&lt;p&gt;</code> veut dire <strong>paragraphe</strong> : c'est comme un petit bloc de texte." },
      { type:'demo', tabs:[{ type:'html', starter:"<p>Coucou, j'écris ma première phrase !</p>\n<p>Change ce texte et regarde à droite !</p>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Écris une phrase pour te présenter, à l'intérieur d'une balise <code>&lt;p&gt;</code>. Exemple : <code>&lt;p&gt;Je m'appelle Daouda&lt;/p&gt;</code>",
        tabs: [{ type:'html', starter: "<!-- Écris ta phrase ici, entre <p> et </p> -->\n" }],
        hints: [
          "N'oublie pas d'ouvrir avec <p> et de fermer avec </p>.",
          "Écris ta phrase entre les deux balises, comme ceci : <p>Bonjour !</p>"
        ],
        solution: { html: "<p>Je m'appelle Daouda et j'apprends à coder !</p>" },
        check(doc, win, C){
          if(!C.exists('p')) return { success:false, message:"Je ne trouve pas de balise <p> dans ton code. Ajoute <p>...</p> !", errorType:'missing-tag', errorTitle:'Balise manquante' };
          if(C.text('p').length < 2) return { success:false, message:"Ta balise <p> est vide ! Écris une phrase à l'intérieur." };
          return { success:true, message:"Bravo, ta première balise HTML fonctionne parfaitement !" };
        }
      },
      moyen: {
        instructions: "Écris <strong>deux phrases différentes</strong>, chacune dans sa propre balise <code>&lt;p&gt;</code>.",
        tabs: [{ type:'html', starter: "<p>Ma première phrase</p>\n<p>Ma deuxième phrase</p>" }],
        hints: [
          "Utilise deux balises <p>...</p> séparées.",
          "Les deux phrases doivent être différentes l'une de l'autre !"
        ],
        solution: { html: "<p>J'aime les jeux vidéo.</p>\n<p>J'apprends à créer des sites web.</p>" },
        check(doc, win, C){
          const ps = C.all('p');
          if(ps.length < 2) return { success:false, message:"Il me faut deux balises <p> différentes." };
          const t1 = ps[0].textContent.trim(), t2 = ps[1].textContent.trim();
          if(t1.length < 2 || t2.length < 2) return { success:false, message:"Une de tes balises <p> est vide, écris une vraie phrase dedans." };
          if(t1.toLowerCase() === t2.toLowerCase()) return { success:false, message:"Tes deux phrases sont identiques ! Écris deux phrases différentes." };
          return { success:true, message:"Super, deux paragraphes bien écrits !" };
        }
      },
      difficile: {
        instructions: "Écris <strong>quatre phrases différentes</strong> (quatre balises <code>&lt;p&gt;</code>), et une des phrases doit contenir le mot <strong>\"code\"</strong>.",
        tabs: [{ type:'html', starter: "<p>Phrase 1</p>\n<p>Phrase 2</p>\n<p>Phrase 3</p>\n<p>Phrase 4</p>" }],
        hints: [
          "Il te faut 4 balises <p>, toutes avec un texte différent.",
          "Une des 4 phrases doit contenir le mot \"code\" quelque part, par exemple : \"J'apprends à coder\"."
        ],
        solution: { html: "<p>Bonjour !</p>\n<p>J'aime le chocolat.</p>\n<p>Aujourd'hui j'écris du code.</p>\n<p>Coder c'est amusant.</p>" },
        check(doc, win, C){
          const ps = C.all('p').map(p => p.textContent.trim());
          if(ps.length < 4) return { success:false, message:"Il me faut 4 balises <p>." };
          if(ps.some(t => t.length < 2)) return { success:false, message:"Toutes tes balises <p> doivent contenir une vraie phrase." };
          const uniq = new Set(ps.map(t => t.toLowerCase()));
          if(uniq.size < 4) return { success:false, message:"Tes 4 phrases doivent toutes être différentes." };
          if(!ps.some(t => t.toLowerCase().includes('code'))) return { success:false, message:"Une de tes phrases doit contenir le mot \"code\"." };
          return { success:true, message:"Excellent ! Tu maîtrises déjà la balise <p> !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch1-l2',
    title: "Ta première page complète",
    icon: '🏗️',
    explanation: [
      { type:'text', heading:"Le squelette d'une page", html:
        "<p>Chaque page HTML a un squelette de base. La balise <code>&lt;html&gt;</code> contient toute la page. À l'intérieur, il y a deux parties : <code>&lt;head&gt;</code> (les informations cachées, comme le titre de l'onglet) et <code>&lt;body&gt;</code> (tout ce qui s'affiche à l'écran).</p>" },
      { type:'code', code:
        "<html>\n  <head>\n    <title>Ma Page</title>\n  </head>\n  <body>\n    <p>Ce que tout le monde voit !</p>\n  </body>\n</html>" },
      { type:'tip', html:"La balise <code>&lt;title&gt;</code> change le texte affiché dans l'onglet du navigateur, tout en haut !" },
      { type:'demo', tabs:[{ type:'html', starter:
        "<html>\n<head>\n  <title>Le monde de Daouda</title>\n</head>\n<body>\n  <p>Bienvenue sur ma page !</p>\n</body>\n</html>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Complète le squelette pour que le titre de l'onglet soit <strong>\"Ma Page\"</strong> (utilise la balise <code>&lt;title&gt;</code>).",
        tabs: [{ type:'html', starter: "<html>\n<head>\n  <!-- Ajoute ton titre ici -->\n</head>\n<body>\n  <p>Salut !</p>\n</body>\n</html>" }],
        hints: ["Ajoute <title>Ma Page</title> à l'intérieur de <head>."],
        solution: { html: "<html>\n<head>\n  <title>Ma Page</title>\n</head>\n<body>\n  <p>Salut !</p>\n</body>\n</html>" },
        check(doc){
          const t = (doc.title || '').trim();
          if(!t) return { success:false, message:"Je ne trouve pas de balise <title> avec du texte dedans." };
          return { success:true, message:`Parfait, le titre de l'onglet est maintenant "${t}" !` };
        }
      },
      moyen: {
        instructions: "Donne un titre à ta page ET ajoute un paragraphe dans le <code>&lt;body&gt;</code> qui parle de toi.",
        tabs: [{ type:'html', starter: "<html>\n<head>\n  <title></title>\n</head>\n<body>\n  \n</body>\n</html>" }],
        hints: ["N'oublie pas le titre entre <title> et </title>.", "Ajoute une balise <p> dans le <body> avec une phrase sur toi."],
        solution: { html: "<html>\n<head>\n  <title>La page de Daouda</title>\n</head>\n<body>\n  <p>Je m'appelle Daouda et j'ai 7 ans !</p>\n</body>\n</html>" },
        check(doc, win, C){
          if(!doc.title.trim()) return { success:false, message:"Il manque un titre dans <title>." };
          if(!C.exists('p') || C.text('p').length < 3) return { success:false, message:"Ajoute un vrai paragraphe <p> avec une phrase dans le body." };
          return { success:true, message:"Ta page a maintenant un titre et un contenu, bravo !" };
        }
      },
      difficile: {
        instructions: "Crée une page avec un titre, ET deux paragraphes différents dans le body qui parlent de tes deux jeux ou activités préférés.",
        tabs: [{ type:'html', starter: "<html>\n<head>\n  <title></title>\n</head>\n<body>\n\n</body>\n</html>" }],
        hints: ["Utilise deux balises <p> différentes dans le body.", "Vérifie que ton <title> n'est pas vide !"],
        solution: { html: "<html>\n<head>\n  <title>Mes passions</title>\n</head>\n<body>\n  <p>J'adore jouer au football.</p>\n  <p>Je regarde des dessins animés le soir.</p>\n</body>\n</html>" },
        check(doc, win, C){
          if(!doc.title.trim()) return { success:false, message:"Il manque un titre dans <title>." };
          const ps = C.all('p').map(p => p.textContent.trim()).filter(t => t.length > 2);
          if(ps.length < 2) return { success:false, message:"Il me faut deux paragraphes avec du vrai texte dans le body." };
          if(ps[0].toLowerCase() === ps[1].toLowerCase()) return { success:false, message:"Tes deux paragraphes doivent être différents." };
          return { success:true, message:"Ta première vraie page complète est prête, félicitations !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch1-l3',
    title: "Les titres",
    icon: '📢',
    explanation: [
      { type:'text', heading:"Des titres du plus grand au plus petit", html:
        "<p>Pour écrire des titres, on utilise les balises <code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code>. <code>&lt;h1&gt;</code> est le <strong>plus gros</strong> titre (le titre principal de la page), et <code>&lt;h6&gt;</code> est le plus petit.</p>" },
      { type:'code', code: "<h1>Titre principal</h1>\n<h2>Un sous-titre</h2>\n<h3>Un petit sous-titre</h3>" },
      { type:'tip', html:"Une page ne devrait avoir <strong>qu'un seul</strong> <code>&lt;h1&gt;</code> : c'est le titre le plus important, comme le titre d'un livre !" },
      { type:'demo', tabs:[{ type:'html', starter: "<h1>Mon super site</h1>\n<h2>Chapitre 1</h2>\n<h3>Introduction</h3>\n<p>Voici le texte...</p>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Crée un titre principal <code>&lt;h1&gt;</code> avec le nom de ton futur site web.",
        tabs: [{ type:'html', starter: "<!-- ton titre h1 ici -->" }],
        hints: ["Utilise <h1>Nom de ton site</h1>."],
        solution: { html: "<h1>Le monde de Daouda</h1>" },
        check(doc, win, C){
          if(!C.exists('h1')) return { success:false, message:"Je ne trouve pas de balise <h1>." };
          if(C.text('h1').length < 2) return { success:false, message:"Ton <h1> est vide, écris un vrai titre." };
          return { success:true, message:"Un magnifique titre principal !" };
        }
      },
      moyen: {
        instructions: "Ajoute un <code>&lt;h1&gt;</code> pour le titre principal, et un <code>&lt;h2&gt;</code> pour un sous-titre.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["N'oublie pas les deux balises différentes : h1 et h2.", "Chacune doit contenir du texte."],
        solution: { html: "<h1>Mon aventure</h1>\n<h2>Le premier chapitre</h2>" },
        check(doc, win, C){
          if(!C.exists('h1') || C.text('h1').length < 2) return { success:false, message:"Il manque un <h1> avec du texte." };
          if(!C.exists('h2') || C.text('h2').length < 2) return { success:false, message:"Il manque un <h2> avec du texte." };
          return { success:true, message:"Bravo, ta page a une belle hiérarchie de titres !" };
        }
      },
      difficile: {
        instructions: "Crée une petite page avec un <code>&lt;h1&gt;</code>, deux <code>&lt;h2&gt;</code> différents, et un paragraphe <code>&lt;p&gt;</code> sous chaque h2.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["Structure : h1, puis h2 + p, puis h2 + p.", "Les deux h2 doivent avoir un texte différent."],
        solution: { html: "<h1>Mon carnet</h1>\n<h2>Lundi</h2>\n<p>J'ai joué au foot.</p>\n<h2>Mardi</h2>\n<p>J'ai regardé un film.</p>" },
        check(doc, win, C){
          if(!C.exists('h1') || C.text('h1').length < 2) return { success:false, message:"Il manque un <h1> avec du texte." };
          const h2s = C.all('h2').map(e => e.textContent.trim());
          if(h2s.length < 2) return { success:false, message:"Il me faut deux balises <h2>." };
          if(h2s[0].toLowerCase() === h2s[1].toLowerCase()) return { success:false, message:"Tes deux <h2> doivent être différents." };
          if(C.count('p') < 2) return { success:false, message:"Il me faut au moins deux balises <p>." };
          return { success:true, message:"Génial, ta page est super bien organisée !" };
        }
      }
    }
  },

  // ============ LEÇON 4 ============
  {
    id: 'ch1-l4',
    title: "Écrire du texte stylé",
    icon: '✍️',
    explanation: [
      { type:'text', heading:"Mettre en valeur des mots", html:
        "<p>On peut mettre un mot en <strong>gras</strong> avec <code>&lt;strong&gt;</code>, ou en <em>italique</em> avec <code>&lt;em&gt;</code>. Pour aller à la ligne, on utilise <code>&lt;br&gt;</code> (cette balise n'a pas besoin de se fermer !).</p>" },
      { type:'code', code: "<p>J'aime <strong>beaucoup</strong> le chocolat.<br>Et toi ?</p>" },
      { type:'tip', html:"<code>&lt;br&gt;</code> veut dire \"break\" (couper) : ça fait un retour à la ligne, sans créer de nouveau paragraphe." },
      { type:'demo', tabs:[{ type:'html', starter: "<p>Ceci est <strong>important</strong> et ceci est <em>doux</em>.<br>Nouvelle ligne ici.</p>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Écris une phrase dans un <code>&lt;p&gt;</code> avec au moins un mot en <strong>gras</strong> grâce à <code>&lt;strong&gt;</code>.",
        tabs: [{ type:'html', starter: "<p></p>" }],
        hints: ["Mets un mot entre <strong> et </strong>, à l'intérieur de ton <p>."],
        solution: { html: "<p>J'aime <strong>vraiment</strong> coder !</p>" },
        check(doc, win, C){
          if(!C.exists('p')) return { success:false, message:"Il manque une balise <p>." };
          if(!C.exists('p strong') && !C.exists('strong')) return { success:false, message:"Utilise <strong>...</strong> pour mettre un mot en gras." };
          if(C.text('strong').length < 1) return { success:false, message:"Ta balise <strong> doit contenir un mot." };
          return { success:true, message:"Ton mot est bien en gras !" };
        }
      },
      moyen: {
        instructions: "Écris une phrase avec un mot en <strong>gras</strong> (<code>&lt;strong&gt;</code>) ET un mot en <em>italique</em> (<code>&lt;em&gt;</code>), dans le même paragraphe.",
        tabs: [{ type:'html', starter: "<p></p>" }],
        hints: ["Il te faut une balise <strong> et une balise <em> dans le même <p>."],
        solution: { html: "<p>Ce jeu est <strong>génial</strong> et <em>amusant</em> !</p>" },
        check(doc, win, C){
          if(!C.exists('p strong') || C.text('strong').length < 1) return { success:false, message:"Il manque un mot en <strong> dans ton paragraphe." };
          if(!C.exists('p em') || C.text('em').length < 1) return { success:false, message:"Il manque un mot en <em> dans ton paragraphe." };
          return { success:true, message:"Parfait mélange de gras et d'italique !" };
        }
      },
      difficile: {
        instructions: "Écris un paragraphe de deux lignes séparées par <code>&lt;br&gt;</code>. La première ligne doit avoir un mot en gras, la deuxième un mot en italique.",
        tabs: [{ type:'html', starter: "<p></p>" }],
        hints: ["Utilise <br> pour séparer les deux lignes à l'intérieur du même <p>.", "N'oublie pas <strong> sur la 1ère ligne et <em> sur la 2ème."],
        solution: { html: "<p>La <strong>magie</strong> du code commence.<br>C'est <em>fascinant</em> non ?</p>" },
        check(doc, win, C){
          if(!C.exists('p br')) return { success:false, message:"Il manque une balise <br> dans ton paragraphe." };
          if(!C.exists('p strong')) return { success:false, message:"Il manque un mot en <strong>." };
          if(!C.exists('p em')) return { success:false, message:"Il manque un mot en <em>." };
          return { success:true, message:"Superbe mise en forme, tu es un pro du texte !" };
        }
      }
    }
  },

  // ============ LEÇON 5 ============
  {
    id: 'ch1-l5',
    title: "Les listes",
    icon: '📋',
    explanation: [
      { type:'text', heading:"Ranger des choses dans une liste", html:
        "<p>Pour faire une liste à puces, on utilise <code>&lt;ul&gt;</code> (liste non-ordonnée) et pour une liste numérotée, <code>&lt;ol&gt;</code> (liste ordonnée). Chaque élément de la liste est écrit avec <code>&lt;li&gt;</code>.</p>" },
      { type:'code', code: "<ul>\n  <li>Pommes</li>\n  <li>Bananes</li>\n</ul>\n<ol>\n  <li>Se lever</li>\n  <li>Se brosser les dents</li>\n</ol>" },
      { type:'tip', html:"Utilise <code>&lt;ol&gt;</code> quand l'<strong>ordre</strong> compte (comme une recette), et <code>&lt;ul&gt;</code> quand ça ne compte pas (comme une liste de courses)." },
      { type:'demo', tabs:[{ type:'html', starter: "<ul>\n  <li>Chat</li>\n  <li>Chien</li>\n  <li>Poisson</li>\n</ul>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Crée une liste à puces (<code>&lt;ul&gt;</code>) avec 3 de tes jouets ou jeux préférés (3 balises <code>&lt;li&gt;</code>).",
        tabs: [{ type:'html', starter: "<ul>\n\n</ul>" }],
        hints: ["Chaque jouet doit être dans sa propre balise <li>, à l'intérieur du <ul>."],
        solution: { html: "<ul>\n  <li>Ballon de foot</li>\n  <li>Console de jeux</li>\n  <li>Peluche renard</li>\n</ul>" },
        check(doc, win, C){
          if(!C.exists('ul')) return { success:false, message:"Il manque une balise <ul>." };
          const lis = C.all('ul li').filter(li => li.parentElement.tagName === 'UL');
          if(lis.length < 3) return { success:false, message:"Il me faut au moins 3 <li> à l'intérieur de ton <ul>." };
          return { success:true, message:"Belle liste à puces !" };
        }
      },
      moyen: {
        instructions: "Crée une liste numérotée (<code>&lt;ol&gt;</code>) avec 3 étapes pour préparer un sandwich.",
        tabs: [{ type:'html', starter: "<ol>\n\n</ol>" }],
        hints: ["Utilise <ol> et non <ul> pour une liste avec un ordre.", "Il te faut 3 étapes différentes."],
        solution: { html: "<ol>\n  <li>Prendre deux tranches de pain</li>\n  <li>Ajouter du fromage</li>\n  <li>Refermer le sandwich</li>\n</ol>" },
        check(doc, win, C){
          if(!C.exists('ol')) return { success:false, message:"Il manque une balise <ol>." };
          const lis = C.all('ol li').filter(li => li.parentElement.tagName === 'OL');
          if(lis.length < 3) return { success:false, message:"Il me faut au moins 3 étapes (<li>) dans ton <ol>." };
          return { success:true, message:"Tes étapes sont bien numérotées !" };
        }
      },
      difficile: {
        instructions: "Crée UNE liste à puces avec 3 aliments que tu aimes, où au moins un des aliments est écrit en <strong>gras</strong>.",
        tabs: [{ type:'html', starter: "<ul>\n\n</ul>" }],
        hints: ["Mets <strong>...</strong> autour d'un des mots dans un <li>.", "Il te faut toujours 3 <li> minimum."],
        solution: { html: "<ul>\n  <li><strong>Pizza</strong></li>\n  <li>Pâtes</li>\n  <li>Glace</li>\n</ul>" },
        check(doc, win, C){
          const lis = C.all('ul li').filter(li => li.parentElement.tagName === 'UL');
          if(lis.length < 3) return { success:false, message:"Il me faut au moins 3 <li> dans ton <ul>." };
          if(!C.exists('ul li strong')) return { success:false, message:"Un des aliments doit être écrit avec <strong>." };
          return { success:true, message:"Une liste stylée et bien construite !" };
        }
      }
    }
  },

  // ============ LEÇON 6 ============
  {
    id: 'ch1-l6',
    title: "Les liens magiques",
    icon: '🔗',
    explanation: [
      { type:'text', heading:"Voyager entre les pages", html:
        "<p>La balise <code>&lt;a&gt;</code> (comme \"ancre\") crée un lien cliquable. On indique où le lien mène grâce à l'<strong>attribut</strong> <code>href</code>, toujours entre guillemets.</p>" },
      { type:'code', code: "<a href=\"https://www.wikipedia.org\">Aller sur Wikipédia</a>" },
      { type:'tip', html:"Un <strong>attribut</strong> donne une information supplémentaire à une balise. Il s'écrit toujours <code>nom=\"valeur\"</code> à l'intérieur du chevron ouvrant." },
      { type:'tip', html:"⚠️ Si tu cliques sur un lien vers Google (ou d'autres grands sites) dans l'aperçu, tu verras peut-être un message de refus : ce n'est pas une erreur ! Ces sites refusent volontairement de s'afficher \"à l'intérieur\" d'une autre page, pour se protéger. Wikipédia, lui, l'autorise, donc essaie plutôt avec <code>wikipedia.org</code> pour t'entraîner." },
      { type:'demo', tabs:[{ type:'html', starter: "<a href=\"https://www.wikipedia.org\">Visiter Wikipédia</a>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Crée un lien qui pointe vers <code>https://www.wikipedia.org</code> et affiche le texte \"Wikipédia\".",
        tabs: [{ type:'html', starter: "" }],
        hints: ["Utilise <a href=\"https://www.wikipedia.org\">Wikipédia</a>."],
        solution: { html: "<a href=\"https://www.wikipedia.org\">Wikipédia</a>" },
        check(doc, win, C){
          if(!C.exists('a')) return { success:false, message:"Il manque une balise <a>." };
          const href = C.attr('a', 'href');
          if(!href || !href.includes('wikipedia')) return { success:false, message:"Ton attribut href doit contenir une adresse vers wikipedia.org." };
          if(C.text('a').length < 2) return { success:false, message:"Ton lien doit avoir un texte visible entre <a> et </a>." };
          return { success:true, message:"Ton premier lien fonctionne !" };
        }
      },
      moyen: {
        instructions: "Crée DEUX liens différents vers deux adresses différentes, chacun avec un texte visible.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["Chaque <a> doit avoir un attribut href différent."],
        solution: { html: "<a href=\"https://www.wikipedia.org\">Wikipédia</a>\n<a href=\"https://www.nasa.gov\">La NASA</a>" },
        check(doc, win, C){
          const links = C.all('a');
          if(links.length < 2) return { success:false, message:"Il me faut deux balises <a>." };
          const h1 = links[0].getAttribute('href'), h2 = links[1].getAttribute('href');
          if(!h1 || !h2) return { success:false, message:"Chaque lien doit avoir un attribut href." };
          if(h1 === h2) return { success:false, message:"Tes deux liens doivent avoir des adresses différentes." };
          if(links[0].textContent.trim().length < 1 || links[1].textContent.trim().length < 1) return { success:false, message:"Chaque lien doit avoir un texte visible." };
          return { success:true, message:"Deux liens qui fonctionnent, bravo !" };
        }
      },
      difficile: {
        instructions: "Crée un lien qui s'ouvre dans un <strong>nouvel onglet</strong>. Astuce : ajoute l'attribut <code>target=\"_blank\"</code> en plus de <code>href</code>.",
        tabs: [{ type:'html', starter: "<a href=\"https://www.example.com\">Mon lien</a>" }],
        hints: ["Ajoute target=\"_blank\" dans la balise <a>, juste après le href.", "Exemple : <a href=\"...\" target=\"_blank\">texte</a>"],
        solution: { html: "<a href=\"https://www.example.com\" target=\"_blank\">Ouvrir dans un nouvel onglet</a>" },
        check(doc, win, C){
          if(!C.exists('a')) return { success:false, message:"Il manque une balise <a>." };
          if(!C.attrEquals('a', 'target', '_blank')) return { success:false, message:"Il manque l'attribut target=\"_blank\" sur ton lien." };
          if(!C.attr('a', 'href')) return { success:false, message:"Il manque l'attribut href." };
          return { success:true, message:"Ton lien s'ouvrira maintenant dans un nouvel onglet !" };
        }
      }
    }
  },

  // ============ LEÇON 7 ============
  {
    id: 'ch1-l7',
    title: "Les images",
    icon: '🖼️',
    explanation: [
      { type:'text', heading:"Afficher une image", html:
        "<p>La balise <code>&lt;img&gt;</code> affiche une image. Elle n'a pas de fermeture ! On lui donne l'adresse de l'image avec <code>src</code>, et un texte de remplacement avec <code>alt</code> (très important pour les personnes qui ne peuvent pas voir l'image).</p>" },
      { type:'code', code: "<img src=\"https://picsum.photos/200\" alt=\"Une photo aléatoire\">" },
      { type:'tip', html:"N'oublie <strong>jamais</strong> l'attribut <code>alt</code> ! Il décrit l'image en mots, c'est très important pour l'accessibilité." },
      { type:'text', heading:"Attention : l'adresse d'un SITE n'est pas l'adresse d'une IMAGE !", html:
        "<p>C'est un piège très courant : l'adresse d'un site (comme <code>wikipedia.org</code>) mène vers une <strong>page entière</strong> (texte, liens, images mélangés). L'adresse d'une <strong>image</strong> mène directement vers UN SEUL fichier, et se termine souvent par <code>.jpg</code>, <code>.png</code> ou <code>.gif</code>. Ce n'est jamais la même adresse !</p>" },
      { type:'text', heading:"Comment trouver la vraie adresse d'une image", html:
        "<p>Sur un vrai site, fais un <strong>clic droit sur l'image</strong> qui t'intéresse, puis choisis <strong>\"Copier l'adresse de l'image\"</strong> (\"Copy image address\" en anglais). C'est CETTE adresse-là qu'il faut mettre dans <code>src</code>, jamais l'adresse du site lui-même !</p>" },
      { type:'tip', html:"Certains grands sites (comme Google) refusent volontairement de s'afficher \"à l'intérieur\" d'une autre page, pour des raisons de sécurité — ce n'est pas une erreur de ta part si ça affiche un message de refus ! Pour t'entraîner sans souci, utilise <code>https://picsum.photos/200</code> (des photos aléatoires toujours disponibles) comme dans les exemples de cette leçon." },
      { type:'demo', tabs:[{ type:'html', starter: "<img src=\"https://picsum.photos/id/237/200/150\" alt=\"Un chien noir\">" }] }
    ],
    exercises: {
      facile: {
        instructions: "Affiche une image avec <code>src=\"https://picsum.photos/200\"</code> et un attribut <code>alt</code> qui décrit l'image.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["Utilise <img src=\"https://picsum.photos/200\" alt=\"...\">.", "N'oublie pas les guillemets autour des valeurs !"],
        solution: { html: "<img src=\"https://picsum.photos/200\" alt=\"Une jolie photo\">" },
        check(doc, win, C){
          if(!C.exists('img')) return { success:false, message:"Il manque une balise <img>." };
          if(!C.attr('img', 'src')) return { success:false, message:"Il manque l'attribut src sur ton image." };
          const alt = C.attr('img', 'alt');
          if(!alt || !alt.trim()) return { success:false, message:"Il manque l'attribut alt (une description de l'image) !", errorType:'accessibility', errorTitle:'Accessibilité' };
          return { success:true, message:"Ton image s'affiche avec une bonne description !" };
        }
      },
      moyen: {
        instructions: "Affiche DEUX images différentes, chacune avec son propre attribut alt qui les décrit.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["Utilise deux balises <img> avec des src différents."],
        solution: { html: "<img src=\"https://picsum.photos/id/1/200\" alt=\"Un ordinateur portable\">\n<img src=\"https://picsum.photos/id/2/200\" alt=\"Une table de travail\">" },
        check(doc, win, C){
          const imgs = C.all('img');
          if(imgs.length < 2) return { success:false, message:"Il me faut deux balises <img>." };
          if(imgs.some(i => !i.getAttribute('alt') || !i.getAttribute('alt').trim())) return { success:false, message:"Chaque image doit avoir un attribut alt non vide." };
          if(imgs[0].getAttribute('src') === imgs[1].getAttribute('src')) return { success:false, message:"Utilise deux adresses (src) différentes." };
          return { success:true, message:"Deux belles images bien décrites !" };
        }
      },
      difficile: {
        instructions: "Crée une image avec <code>src</code>, <code>alt</code>, ET donne-lui une largeur précise grâce à l'attribut <code>width=\"150\"</code>.",
        tabs: [{ type:'html', starter: "<img src=\"https://picsum.photos/300\" alt=\"...\">" }],
        hints: ["Ajoute width=\"150\" dans la balise <img>, comme un troisième attribut."],
        solution: { html: "<img src=\"https://picsum.photos/300\" alt=\"Une photo\" width=\"150\">" },
        check(doc, win, C){
          if(!C.exists('img')) return { success:false, message:"Il manque une balise <img>." };
          const alt = C.attr('img','alt');
          if(!alt || !alt.trim()) return { success:false, message:"Il manque l'attribut alt." };
          const w = C.attr('img', 'width');
          if(!w || isNaN(parseInt(w))) return { success:false, message:"Ajoute un attribut width avec un nombre, par exemple width=\"150\"." };
          return { success:true, message:"Ton image a maintenant une taille précise, bien joué !" };
        }
      }
    }
  },

  // ============ LEÇON 8 ============
  {
    id: 'ch1-l8',
    title: "Les tableaux",
    icon: '📊',
    explanation: [
      { type:'text', heading:"Ranger des infos en grille", html:
        "<p>Un tableau se construit avec <code>&lt;table&gt;</code>. Chaque ligne est un <code>&lt;tr&gt;</code> (table row). Dans chaque ligne, les cases sont des <code>&lt;td&gt;</code> (table data), sauf pour les titres de colonnes qui utilisent <code>&lt;th&gt;</code> (table header).</p>" },
      { type:'code', code: "<table>\n  <tr>\n    <th>Nom</th>\n    <th>Âge</th>\n  </tr>\n  <tr>\n    <td>Daouda</td>\n    <td>7</td>\n  </tr>\n</table>" },
      { type:'tip', html:"Pense au tableau comme une grille de mots croisés : <code>&lt;tr&gt;</code> = une ligne, <code>&lt;td&gt;</code>/<code>&lt;th&gt;</code> = une case dans cette ligne." },
      { type:'demo', tabs:[{ type:'html', starter: "<table>\n  <tr><th>Animal</th><th>Son</th></tr>\n  <tr><td>Chat</td><td>Miaou</td></tr>\n  <tr><td>Chien</td><td>Wouf</td></tr>\n</table>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Crée un tableau avec une seule ligne (<code>&lt;tr&gt;</code>) contenant deux cases (<code>&lt;td&gt;</code>).",
        tabs: [{ type:'html', starter: "<table>\n\n</table>" }],
        hints: ["Structure : <table><tr><td>...</td><td>...</td></tr></table>."],
        solution: { html: "<table>\n  <tr><td>Pomme</td><td>Rouge</td></tr>\n</table>" },
        check(doc, win, C){
          if(!C.exists('table')) return { success:false, message:"Il manque une balise <table>." };
          if(!C.exists('table tr')) return { success:false, message:"Il manque une ligne <tr> dans ton tableau." };
          if(C.count('table tr td') < 2) return { success:false, message:"Il me faut deux cases <td> dans ta ligne." };
          return { success:true, message:"Ton premier tableau est prêt !" };
        }
      },
      moyen: {
        instructions: "Crée un tableau avec une ligne d'en-tête (<code>&lt;th&gt;</code>) pour \"Nom\" et \"Âge\", puis une ligne avec tes infos.",
        tabs: [{ type:'html', starter: "<table>\n\n</table>" }],
        hints: ["Première ligne : deux <th>. Deuxième ligne : deux <td> avec tes infos."],
        solution: { html: "<table>\n  <tr><th>Nom</th><th>Âge</th></tr>\n  <tr><td>Daouda</td><td>7</td></tr>\n</table>" },
        check(doc, win, C){
          if(C.count('table th') < 2) return { success:false, message:"Il me faut deux <th> pour les titres de colonnes." };
          if(C.count('table td') < 2) return { success:false, message:"Il me faut deux <td> pour tes informations." };
          if(C.count('table tr') < 2) return { success:false, message:"Il me faut deux lignes <tr> (en-tête + données)." };
          return { success:true, message:"Un tableau bien organisé avec des en-têtes !" };
        }
      },
      difficile: {
        instructions: "Crée un tableau de 3 lignes (1 en-tête + 2 lignes de données) et 2 colonnes, pour comparer deux animaux (nom et cri).",
        tabs: [{ type:'html', starter: "<table>\n\n</table>" }],
        hints: ["3 balises <tr> en tout.", "La première ligne utilise <th>, les deux autres utilisent <td>."],
        solution: { html: "<table>\n  <tr><th>Animal</th><th>Cri</th></tr>\n  <tr><td>Chat</td><td>Miaou</td></tr>\n  <tr><td>Vache</td><td>Meuh</td></tr>\n</table>" },
        check(doc, win, C){
          if(C.count('table tr') < 3) return { success:false, message:"Il me faut 3 lignes <tr> en tout." };
          if(C.count('table th') < 2) return { success:false, message:"Il me faut une ligne d'en-tête avec deux <th>." };
          if(C.count('table td') < 4) return { success:false, message:"Il me faut 4 cases <td> au total (2 lignes de 2 colonnes)." };
          return { success:true, message:"Un tableau complet, tu es un champion des données !" };
        }
      }
    }
  },

  // ============ LEÇON 9 ============
  {
    id: 'ch1-l9',
    title: "Les formulaires",
    icon: '📝',
    explanation: [
      { type:'text', heading:"Demander des informations", html:
        "<p>Un formulaire permet de demander des informations à quelqu'un. On utilise <code>&lt;input&gt;</code> pour une case où écrire, et <code>&lt;button&gt;</code> pour un bouton cliquable. La balise <code>&lt;label&gt;</code> ajoute un texte explicatif.</p>" },
      { type:'code', code: "<label>Ton prénom :</label>\n<input type=\"text\" placeholder=\"Écris ici\">\n<button>Envoyer</button>" },
      { type:'tip', html:"L'attribut <code>type</code> d'un <code>&lt;input&gt;</code> change son comportement : <code>type=\"text\"</code> pour du texte, <code>type=\"number\"</code> pour des nombres !" },
      { type:'demo', tabs:[{ type:'html', starter: "<label>Ton âge :</label>\n<input type=\"number\" placeholder=\"7\">\n<button>Valider</button>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Crée une case de texte (<code>&lt;input type=\"text\"&gt;</code>) et un bouton (<code>&lt;button&gt;</code>) qui dit \"Envoyer\".",
        tabs: [{ type:'html', starter: "" }],
        hints: ["Il te faut une balise <input type=\"text\"> et une balise <button>Envoyer</button>."],
        solution: { html: "<input type=\"text\" placeholder=\"Ton nom\">\n<button>Envoyer</button>" },
        check(doc, win, C){
          if(!C.exists('input')) return { success:false, message:"Il manque une balise <input>." };
          if(!C.exists('button')) return { success:false, message:"Il manque une balise <button>." };
          if(C.text('button').length < 2) return { success:false, message:"Ton bouton doit avoir un texte, comme \"Envoyer\"." };
          return { success:true, message:"Ton mini-formulaire fonctionne !" };
        }
      },
      moyen: {
        instructions: "Ajoute un <code>&lt;label&gt;</code> qui explique ce qu'il faut écrire, un <code>&lt;input&gt;</code>, et un <code>&lt;button&gt;</code>.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["N'oublie pas la balise <label> avant l'input, avec un texte explicatif."],
        solution: { html: "<label>Ton prénom :</label>\n<input type=\"text\" placeholder=\"Prénom\">\n<button>Valider</button>" },
        check(doc, win, C){
          if(!C.exists('label') || C.text('label').length < 2) return { success:false, message:"Il manque un <label> avec un texte explicatif." };
          if(!C.exists('input')) return { success:false, message:"Il manque un <input>." };
          if(!C.exists('button')) return { success:false, message:"Il manque un <button>." };
          return { success:true, message:"Un formulaire clair et bien expliqué !" };
        }
      },
      difficile: {
        instructions: "Crée un formulaire avec un input de type <code>\"number\"</code> pour l'âge, un input de type <code>\"text\"</code> pour le prénom, chacun avec un <code>&lt;label&gt;</code>, et un bouton.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["Il te faut deux <input> avec des attributs type différents (text et number).", "N'oublie pas un <label> pour chaque input, et un bouton à la fin."],
        solution: { html: "<label>Prénom :</label>\n<input type=\"text\" placeholder=\"Prénom\">\n<label>Âge :</label>\n<input type=\"number\" placeholder=\"Âge\">\n<button>Envoyer</button>" },
        check(doc, win, C){
          const inputs = C.all('input');
          if(inputs.length < 2) return { success:false, message:"Il me faut deux balises <input>." };
          const types = inputs.map(i => i.getAttribute('type'));
          if(!types.includes('text')) return { success:false, message:"Il manque un input de type=\"text\"." };
          if(!types.includes('number')) return { success:false, message:"Il manque un input de type=\"number\"." };
          if(C.count('label') < 2) return { success:false, message:"Il me faut deux balises <label>." };
          if(!C.exists('button')) return { success:false, message:"Il manque un <button>." };
          return { success:true, message:"Un formulaire complet, digne d'un vrai site web !" };
        }
      }
    }
  },

  // ============ LEÇON 10 ============
  {
    id: 'ch1-l10',
    title: "Les boîtes invisibles",
    icon: '📦',
    explanation: [
      { type:'text', heading:"Organiser avec des boîtes", html:
        "<p>La balise <code>&lt;div&gt;</code> est une boîte invisible qui regroupe plusieurs éléments ensemble, un peu comme un carton de rangement. Elle prend toute la largeur disponible. La balise <code>&lt;span&gt;</code> fait la même chose mais seulement pour un petit bout de texte, sans prendre toute la ligne.</p>" },
      { type:'code', code: "<div>\n  <h2>Titre</h2>\n  <p>Un peu de <span>texte spécial</span> dans la phrase.</p>\n</div>" },
      { type:'tip', html:"<code>&lt;div&gt;</code> = grosse boîte (bloc complet). <code>&lt;span&gt;</code> = petite boîte (juste un morceau de texte)." },
      { type:'demo', tabs:[{ type:'html', starter: "<div>\n  <h2>Ma carte</h2>\n  <p>J'aime le <span>chocolat</span> !</p>\n</div>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Crée une <code>&lt;div&gt;</code> qui contient un titre <code>&lt;h2&gt;</code> et un paragraphe <code>&lt;p&gt;</code>.",
        tabs: [{ type:'html', starter: "<div>\n\n</div>" }],
        hints: ["Mets un <h2> et un <p> à l'intérieur des balises <div> et </div>."],
        solution: { html: "<div>\n  <h2>Ma boîte</h2>\n  <p>Voici du contenu à l'intérieur.</p>\n</div>" },
        check(doc, win, C){
          if(!C.exists('div')) return { success:false, message:"Il manque une balise <div>." };
          if(!C.exists('div h2')) return { success:false, message:"Il manque un <h2> à l'intérieur de ta <div>." };
          if(!C.exists('div p')) return { success:false, message:"Il manque un <p> à l'intérieur de ta <div>." };
          return { success:true, message:"Ta première boîte organisée !" };
        }
      },
      moyen: {
        instructions: "Dans un paragraphe, utilise une balise <code>&lt;span&gt;</code> pour mettre en valeur un seul mot au milieu de la phrase.",
        tabs: [{ type:'html', starter: "<p></p>" }],
        hints: ["Exemple : <p>J'adore <span>ce jeu</span> !</p>"],
        solution: { html: "<p>Mon animal préféré est le <span>renard</span>.</p>" },
        check(doc, win, C){
          if(!C.exists('p span')) return { success:false, message:"Il manque une balise <span> à l'intérieur d'un <p>." };
          if(C.text('span').length < 1) return { success:false, message:"Ta balise <span> doit contenir du texte." };
          return { success:true, message:"Bien utilisé, le span met en valeur juste ce qu'il faut !" };
        }
      },
      difficile: {
        instructions: "Crée deux <code>&lt;div&gt;</code> séparées, chacune avec un <code>&lt;h2&gt;</code> différent et un paragraphe contenant un <code>&lt;span&gt;</code>.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["Deux blocs <div> complets, chacun avec h2 + p + span dans le p."],
        solution: { html: "<div>\n  <h2>Section 1</h2>\n  <p>J'aime le <span>sport</span>.</p>\n</div>\n<div>\n  <h2>Section 2</h2>\n  <p>J'aime les <span>jeux vidéo</span>.</p>\n</div>" },
        check(doc, win, C){
          const divs = C.all('div');
          if(divs.length < 2) return { success:false, message:"Il me faut deux balises <div>." };
          const h2s = C.all('div h2').map(e => e.textContent.trim());
          if(h2s.length < 2 || h2s[0].toLowerCase() === h2s[1].toLowerCase()) return { success:false, message:"Chaque div doit avoir un h2 différent." };
          if(C.count('div p span') < 2) return { success:false, message:"Chaque div doit contenir un <p> avec un <span> dedans." };
          return { success:true, message:"Deux belles sections bien construites !" };
        }
      }
    }
  },

  // ============ LEÇON 11 ============
  {
    id: 'ch1-l11',
    title: "Bien ranger sa page",
    icon: '🗂️',
    explanation: [
      { type:'text', heading:"Les balises qui ont un sens", html:
        "<p>Il existe des balises spéciales pour organiser une page de façon claire : <code>&lt;header&gt;</code> (l'en-tête, en haut), <code>&lt;nav&gt;</code> (le menu de navigation), <code>&lt;main&gt;</code> (le contenu principal), et <code>&lt;footer&gt;</code> (le pied de page, en bas).</p>" },
      { type:'code', code: "<header>\n  <h1>Mon Site</h1>\n</header>\n<nav>\n  <a href=\"#\">Accueil</a>\n</nav>\n<main>\n  <p>Le contenu principal ici.</p>\n</main>\n<footer>\n  <p>Créé par Daouda</p>\n</footer>" },
      { type:'tip', html:"Ces balises ne changent rien visuellement (comme des <div>), mais elles donnent du <strong>sens</strong> à ta page, ce qui aide les moteurs de recherche et les personnes malvoyantes." },
      { type:'demo', tabs:[{ type:'html', starter: "<header><h1>Mon Blog</h1></header>\n<main><p>Bienvenue sur mon blog !</p></main>\n<footer><p>© Daouda</p></footer>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Crée une page avec un <code>&lt;header&gt;</code> contenant un <code>&lt;h1&gt;</code>, et un <code>&lt;footer&gt;</code> contenant un <code>&lt;p&gt;</code>.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["<header><h1>...</h1></header>", "<footer><p>...</p></footer>"],
        solution: { html: "<header>\n  <h1>Mon Site</h1>\n</header>\n<footer>\n  <p>Merci de ta visite !</p>\n</footer>" },
        check(doc, win, C){
          if(!C.exists('header h1')) return { success:false, message:"Il manque un <h1> dans un <header>." };
          if(!C.exists('footer p')) return { success:false, message:"Il manque un <p> dans un <footer>." };
          return { success:true, message:"Ta page a maintenant une vraie structure !" };
        }
      },
      moyen: {
        instructions: "Ajoute un <code>&lt;header&gt;</code>, un <code>&lt;main&gt;</code> avec un paragraphe, et un <code>&lt;footer&gt;</code>.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["Trois grandes sections : header, main, footer, chacune avec du contenu à l'intérieur."],
        solution: { html: "<header>\n  <h1>Bienvenue</h1>\n</header>\n<main>\n  <p>Voici le contenu principal de ma page.</p>\n</main>\n<footer>\n  <p>© Daouda 2026</p>\n</footer>" },
        check(doc, win, C){
          if(!C.exists('header')) return { success:false, message:"Il manque un <header>." };
          if(!C.exists('main p')) return { success:false, message:"Il manque un <p> dans un <main>." };
          if(!C.exists('footer')) return { success:false, message:"Il manque un <footer>." };
          return { success:true, message:"Une structure de page digne d'un pro !" };
        }
      },
      difficile: {
        instructions: "Construis une page complète : <code>&lt;header&gt;</code> (h1), <code>&lt;nav&gt;</code> (2 liens), <code>&lt;main&gt;</code> (un h2 et un p), <code>&lt;footer&gt;</code> (un p).",
        tabs: [{ type:'html', starter: "" }],
        hints: ["Le nav doit contenir au moins deux balises <a>.", "N'oublie aucune des 4 sections : header, nav, main, footer."],
        solution: { html: "<header>\n  <h1>Mon Site</h1>\n</header>\n<nav>\n  <a href=\"#accueil\">Accueil</a>\n  <a href=\"#contact\">Contact</a>\n</nav>\n<main>\n  <h2>À propos de moi</h2>\n  <p>J'apprends à coder avec Code Aventure !</p>\n</main>\n<footer>\n  <p>© Daouda</p>\n</footer>" },
        check(doc, win, C){
          if(!C.exists('header h1')) return { success:false, message:"Il manque un <h1> dans le <header>." };
          if(C.count('nav a') < 2) return { success:false, message:"Il me faut deux liens <a> dans le <nav>." };
          if(!C.exists('main h2') || !C.exists('main p')) return { success:false, message:"Le <main> doit contenir un <h2> et un <p>." };
          if(!C.exists('footer p')) return { success:false, message:"Le <footer> doit contenir un <p>." };
          return { success:true, message:"Bravo, tu as construit une page HTML complète et bien organisée !" };
        }
      }
    }
  },

  // ============ LEÇON 12 — PROJET FINAL ============
  {
    id: 'ch1-l12',
    title: "🏆 Projet : ma carte de présentation",
    icon: '🏆',
    explanation: [
      { type:'text', heading:"Le grand projet du Chapitre 1 !", html:
        "<p>Tu as appris énormément de choses : les paragraphes, les titres, les listes, les liens, les images, les tableaux, les formulaires et les boîtes. Il est temps de tout combiner pour créer <strong>ta carte de présentation personnelle</strong> !</p>" },
      { type:'tip', html:"Ne t'inquiète pas si c'est difficile : utilise les indices, régule ton rythme, et amuse-toi. Tu peux revenir sur les leçons précédentes si besoin !" },
      { type:'demo', tabs:[{ type:'html', starter:
        "<header>\n  <h1>Daouda</h1>\n  <p>Futur champion du code !</p>\n</header>\n<main>\n  <h2>Mes passions</h2>\n  <ul>\n    <li>Le foot</li>\n    <li>Les jeux vidéo</li>\n  </ul>\n  <img src=\"https://picsum.photos/150\" alt=\"Ma photo\">\n</main>\n<footer>\n  <p>Merci de ta visite !</p>\n</footer>" }] }
    ],
    exercises: {
      facile: {
        instructions: "Crée ta carte avec : un <code>&lt;h1&gt;</code> pour ton prénom, un <code>&lt;p&gt;</code> qui te décrit, et une liste <code>&lt;ul&gt;</code> d'au moins 2 choses que tu aimes.",
        tabs: [{ type:'html', starter: "" }],
        hints: ["N'oublie pas : h1, puis p, puis ul avec des li."],
        solution: { html: "<h1>Daouda</h1>\n<p>J'ai 7 ans et j'apprends à coder !</p>\n<ul>\n  <li>Le football</li>\n  <li>Les dessins animés</li>\n</ul>" },
        check(doc, win, C){
          if(!C.exists('h1') || C.text('h1').length < 2) return { success:false, message:"Il manque un <h1> avec ton prénom." };
          if(!C.exists('p') || C.text('p').length < 3) return { success:false, message:"Il manque un <p> qui te décrit." };
          if(C.count('ul li') < 2) return { success:false, message:"Il me faut une liste <ul> avec au moins 2 <li>." };
          return { success:true, message:"Ta carte de présentation prend forme !" };
        }
      },
      moyen: {
        instructions: "Ajoute à ta carte : une image (<code>&lt;img&gt;</code> avec <code>alt</code>) ET un lien (<code>&lt;a&gt;</code>) vers un site que tu aimes.",
        tabs: [{ type:'html', starter: "<h1>Daouda</h1>\n<p>Ma description</p>\n<ul>\n  <li>Passion 1</li>\n  <li>Passion 2</li>\n</ul>" }],
        hints: ["Ajoute <img src=\"...\" alt=\"...\"> et <a href=\"...\">texte</a> quelque part dans ta page."],
        solution: { html: "<h1>Daouda</h1>\n<p>J'ai 7 ans et j'apprends à coder !</p>\n<ul>\n  <li>Le football</li>\n  <li>Les dessins animés</li>\n</ul>\n<img src=\"https://picsum.photos/150\" alt=\"Moi\">\n<a href=\"https://www.disney.com\">Mon site préféré</a>" },
        check(doc, win, C){
          if(!C.exists('h1')) return { success:false, message:"Il manque toujours ton <h1>." };
          if(C.count('ul li') < 2) return { success:false, message:"Il me faut toujours ta liste de 2 <li>." };
          const alt = C.attr('img','alt');
          if(!C.exists('img') || !alt || !alt.trim()) return { success:false, message:"Il manque une image avec un attribut alt rempli." };
          if(!C.exists('a') || !C.attr('a','href')) return { success:false, message:"Il manque un lien <a> avec un href." };
          return { success:true, message:"Ta carte est de plus en plus complète, superbe travail !" };
        }
      },
      difficile: {
        instructions: "Organise toute ta carte avec <code>&lt;header&gt;</code> (h1+p), <code>&lt;main&gt;</code> (ta liste, ton image, ton lien), et <code>&lt;footer&gt;</code> (un petit mot de fin).",
        tabs: [{ type:'html', starter: "" }],
        hints: ["Reprends tout ce que tu as fait et range-le dans header/main/footer.", "header = h1+p, main = ul+img+a, footer = p."],
        solution: { html:
          "<header>\n  <h1>Daouda</h1>\n  <p>J'ai 7 ans et j'apprends à coder !</p>\n</header>\n<main>\n  <ul>\n    <li>Le football</li>\n    <li>Les dessins animés</li>\n  </ul>\n  <img src=\"https://picsum.photos/150\" alt=\"Moi\">\n  <a href=\"https://www.disney.com\">Mon site préféré</a>\n</main>\n<footer>\n  <p>Merci d'avoir visité ma carte !</p>\n</footer>" },
        check(doc, win, C){
          if(!C.exists('header h1') || !C.exists('header p')) return { success:false, message:"Le <header> doit contenir un <h1> et un <p>." };
          if(C.count('main ul li') < 2) return { success:false, message:"Le <main> doit contenir ta liste d'au moins 2 <li>." };
          if(!C.exists('main img')) return { success:false, message:"Le <main> doit contenir ton image." };
          if(!C.exists('main a')) return { success:false, message:"Le <main> doit contenir ton lien." };
          if(!C.exists('footer p')) return { success:false, message:"Le <footer> doit contenir un <p>." };
          return { success:true, message:"🏆 BRAVO ! Ta carte de présentation est complète et bien organisée. Chapitre 1 terminé !" };
        }
      }
    }
  }

  ]
};
