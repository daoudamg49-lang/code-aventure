const CHAPTER_2 = {
  id: 'ch2',
  title: 'CSS — Peindre et décorer',
  subtitle: 'Apprends à rendre tes pages belles',
  icon: '🎨',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch2-l1',
    title: "C'est quoi le CSS ?",
    icon: '🎨',
    explanation: [
      { type:'text', heading:"Peindre ta page", html:
        "<p>Le HTML construit la structure (comme les murs d'une maison), et le <strong>CSS</strong> ajoute les couleurs et la décoration ! On écrit le CSS dans une balise <code>&lt;style&gt;</code>, avec des règles qui disent : \"Pour CET élément, utilise CETTE apparence\".</p>" },
      { type:'code', code: "p {\n  color: red;\n}" },
      { type:'text', heading:"Comment lire une règle CSS", html:
        "<p><code>p</code> est le <strong>sélecteur</strong> (\"quel élément je veux changer\"). <code>color</code> est la <strong>propriété</strong> (\"quoi changer\"). <code>red</code> est la <strong>valeur</strong> (\"comment le changer\"). N'oublie jamais le point-virgule <code>;</code> à la fin !</p>" },
      { type:'tip', html:"Dans cette appli, tu écriras ton CSS directement dans l'onglet <strong>CSS</strong> à côté de HTML, pas besoin d'écrire la balise &lt;style&gt; toi-même !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<p>Coucou !</p>", readonly:true },
        { type:'css', starter:"p {\n  color: blue;\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Utilise le sélecteur <code>p</code> pour changer la couleur du texte en <strong>rouge</strong> (<code>color: red;</code>).",
        tabs: [
          { type:'html', starter:"<p>Bonjour !</p>", readonly:true },
          { type:'css', starter:"p {\n  \n}" }
        ],
        hints: ["Écris color: red; à l'intérieur des accolades { }.", "N'oublie pas le point-virgule à la fin !"],
        solution: { css: "p {\n  color: red;\n}" },
        check(doc, win, C){
          if(!C.colorEquals('p', 'color', 'red')) return { success:false, message:"Le texte de ton paragraphe n'est pas encore rouge." };
          return { success:true, message:"Ton premier style CSS fonctionne, le texte est rouge !" };
        }
      },
      moyen: {
        instructions: "Mets le texte de TOUS les paragraphes en <strong>bleu</strong>, ET donne à la page un fond <strong>gris clair</strong> avec le sélecteur <code>body</code>.",
        tabs: [
          { type:'html', starter:"<p>Premier paragraphe</p>\n<p>Deuxième paragraphe</p>", readonly:true },
          { type:'css', starter:"p {\n  \n}\nbody {\n  \n}" }
        ],
        hints: ["Utilise color: blue; dans la règle p.", "Utilise background-color: lightgray; dans la règle body."],
        solution: { css: "p {\n  color: blue;\n}\nbody {\n  background-color: lightgray;\n}" },
        check(doc, win, C){
          if(!C.colorEquals('p', 'color', 'blue')) return { success:false, message:"Tes paragraphes ne sont pas encore bleus." };
          if(!C.colorEquals('body', 'backgroundColor', 'lightgray')) return { success:false, message:"Le fond de la page n'est pas encore gris clair." };
          return { success:true, message:"Ta page a maintenant de vraies couleurs !" };
        }
      },
      difficile: {
        instructions: "Style un <code>&lt;h1&gt;</code> en <strong>violet (purple)</strong>, des <code>&lt;p&gt;</code> en <strong>vert foncé (darkgreen)</strong>, et le fond de la page en <strong>blanc cassé (ivory)</strong>.",
        tabs: [
          { type:'html', starter:"<h1>Titre</h1>\n<p>Un paragraphe</p>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["Il te faut 3 règles différentes : h1, p, et body.", "N'oublie pas les points-virgules après chaque valeur."],
        solution: { css: "h1 {\n  color: purple;\n}\np {\n  color: darkgreen;\n}\nbody {\n  background-color: ivory;\n}" },
        check(doc, win, C){
          if(!C.colorEquals('h1', 'color', 'purple')) return { success:false, message:"Ton h1 n'est pas encore violet." };
          if(!C.colorEquals('p', 'color', 'darkgreen')) return { success:false, message:"Tes paragraphes ne sont pas encore vert foncé." };
          if(!C.colorEquals('body', 'backgroundColor', 'ivory')) return { success:false, message:"Le fond n'est pas encore blanc cassé (ivory)." };
          return { success:true, message:"Une belle palette de couleurs bien appliquée !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch2-l2',
    title: "Les couleurs",
    icon: '🌈',
    explanation: [
      { type:'text', heading:"Trois façons d'écrire une couleur", html:
        "<p>On peut écrire une couleur par son <strong>nom</strong> (<code>red</code>, <code>gold</code>...), en <strong>hexadécimal</strong> (<code>#ff0000</code>), ou en <strong>RGB</strong> (<code>rgb(255, 0, 0)</code> = rouge, vert, bleu). Les trois donnent la même couleur !</p>" },
      { type:'code', code: "h1 {\n  color: #ff0000;\n}\np {\n  color: rgb(0, 128, 0);\n}" },
      { type:'tip', html:"Le fond avec <code>background-color</code>, le texte avec <code>color</code>. Facile à confondre au début, fais attention !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<h1>Titre</h1>\n<p>Texte</p>", readonly:true },
        { type:'css', starter:"h1 {\n  color: #ff6600;\n}\np {\n  color: rgb(0, 100, 200);\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Utilise un code hexadécimal pour mettre le titre <code>h1</code> en orange : <code>#ffa500</code>.",
        tabs: [
          { type:'html', starter:"<h1>Mon titre</h1>", readonly:true },
          { type:'css', starter:"h1 {\n  \n}" }
        ],
        hints: ["Utilise color: #ffa500; dans la règle h1."],
        solution: { css: "h1 {\n  color: #ffa500;\n}" },
        check(doc, win, C){
          if(!C.colorEquals('h1', 'color', '#ffa500')) return { success:false, message:"Le titre n'est pas encore orange." };
          return { success:true, message:"Bravo, tu sais utiliser les codes hexadécimaux !" };
        }
      },
      moyen: {
        instructions: "Utilise <code>rgb(...)</code> pour mettre le texte du paragraphe en violet : <code>rgb(128, 0, 128)</code>, et le fond de la page en <code>#f0f0f0</code>.",
        tabs: [
          { type:'html', starter:"<p>Un texte violet sur fond clair</p>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["Utilise color: rgb(128, 0, 128); pour le p.", "Utilise background-color: #f0f0f0; pour le body."],
        solution: { css: "p {\n  color: rgb(128, 0, 128);\n}\nbody {\n  background-color: #f0f0f0;\n}" },
        check(doc, win, C){
          if(!C.colorEquals('p', 'color', 'rgb(128,0,128)')) return { success:false, message:"Le texte n'est pas encore violet en rgb(128, 0, 128)." };
          if(!C.colorEquals('body', 'backgroundColor', '#f0f0f0')) return { success:false, message:"Le fond de page n'est pas encore #f0f0f0." };
          return { success:true, message:"Tu maîtrises les trois façons d'écrire les couleurs !" };
        }
      },
      difficile: {
        instructions: "Crée un <code>&lt;h1&gt;</code> avec une couleur en nom, un <code>&lt;p&gt;</code> avec une couleur en hexadécimal, et un fond de page en rgb — les trois couleurs doivent être différentes.",
        tabs: [
          { type:'html', starter:"<h1>Titre</h1>\n<p>Paragraphe</p>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["h1 avec un nom comme 'teal', p avec un hexadécimal comme '#ff00ff', body avec rgb(...)."],
        solution: { css: "h1 {\n  color: teal;\n}\np {\n  color: #ff00ff;\n}\nbody {\n  background-color: rgb(230, 230, 250);\n}" },
        check(doc, win, C){
          const h1c = C.style('h1', 'color'), pc = C.style('p', 'color'), bc = C.style('body', 'backgroundColor');
          if(!h1c || h1c === 'rgb(0, 0, 0)') return { success:false, message:"Donne une couleur à ton h1." };
          if(!pc || pc === 'rgb(0, 0, 0)') return { success:false, message:"Donne une couleur à ton p." };
          if(!bc || bc === 'rgba(0, 0, 0, 0)') return { success:false, message:"Donne une couleur de fond au body." };
          if(h1c === pc || pc === bc || h1c === bc) return { success:false, message:"Les trois couleurs doivent être différentes !" };
          return { success:true, message:"Trois couleurs, trois techniques différentes, bravo !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch2-l3',
    title: "Le texte joli",
    icon: '🔤',
    explanation: [
      { type:'text', heading:"Personnaliser le texte", html:
        "<p><code>font-size</code> change la taille (en <code>px</code>), <code>font-family</code> change la police d'écriture, <code>font-weight</code> peut le mettre en gras (<code>bold</code>), et <code>text-align</code> aligne le texte (<code>left</code>, <code>center</code>, <code>right</code>).</p>" },
      { type:'code', code: "h1 {\n  font-size: 40px;\n  text-align: center;\n  font-weight: bold;\n}" },
      { type:'tip', html:"<code>text-align: center;</code> est très utile pour centrer des titres, essaie-le souvent !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<h1>Grand Titre</h1>", readonly:true },
        { type:'css', starter:"h1 {\n  font-size: 50px;\n  text-align: center;\n  color: crimson;\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Rends le titre <code>h1</code> deux fois plus gros avec <code>font-size: 48px;</code>.",
        tabs: [
          { type:'html', starter:"<h1>Titre</h1>", readonly:true },
          { type:'css', starter:"h1 {\n  \n}" }
        ],
        hints: ["Utilise font-size: 48px; dans la règle h1."],
        solution: { css: "h1 {\n  font-size: 48px;\n}" },
        check(doc, win, C){
          const fs = parseInt(C.style('h1', 'fontSize'));
          if(!fs || fs < 40) return { success:false, message:"Ton titre n'est pas encore assez grand (essaie 48px)." };
          return { success:true, message:"Un titre bien plus grand !" };
        }
      },
      moyen: {
        instructions: "Centre le titre avec <code>text-align: center;</code> ET mets-le en gras avec <code>font-weight: bold;</code>.",
        tabs: [
          { type:'html', starter:"<h1>Titre centré</h1>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["Une seule règle h1 avec deux propriétés dedans."],
        solution: { css: "h1 {\n  text-align: center;\n  font-weight: bold;\n}" },
        check(doc, win, C){
          if(!C.styleEquals('h1', 'textAlign', 'center')) return { success:false, message:"Ton titre n'est pas encore centré." };
          const fw = C.style('h1', 'fontWeight');
          if(!(fw === 'bold' || parseInt(fw) >= 700)) return { success:false, message:"Ton titre n'est pas encore en gras." };
          return { success:true, message:"Un titre centré et bien en évidence !" };
        }
      },
      difficile: {
        instructions: "Style un paragraphe avec une police différente (<code>font-family: Georgia, serif;</code>), une taille de <code>20px</code>, ET aligne-le à droite (<code>text-align: right;</code>).",
        tabs: [
          { type:'html', starter:"<p>Un texte bien stylé</p>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["Trois propriétés dans la règle p : font-family, font-size, text-align."],
        solution: { css: "p {\n  font-family: Georgia, serif;\n  font-size: 20px;\n  text-align: right;\n}" },
        check(doc, win, C){
          const ff = (C.style('p', 'fontFamily') || '').toLowerCase();
          if(!ff.includes('georgia')) return { success:false, message:"La police de ton paragraphe n'est pas encore Georgia." };
          const fs = parseInt(C.style('p', 'fontSize'));
          if(fs < 18) return { success:false, message:"Ton paragraphe n'est pas encore assez grand (essaie 20px)." };
          if(!C.styleEquals('p', 'textAlign', 'right')) return { success:false, message:"Ton paragraphe n'est pas encore aligné à droite." };
          return { success:true, message:"Un texte magnifiquement mis en forme !" };
        }
      }
    }
  },

  // ============ LEÇON 4 ============
  {
    id: 'ch2-l4',
    title: "La boîte magique",
    icon: '📦',
    explanation: [
      { type:'text', heading:"Chaque élément est une boîte", html:
        "<p>Tout élément HTML est en fait une boîte invisible avec 4 couches : le contenu, le <code>padding</code> (l'espace intérieur), la <code>border</code> (la bordure), et le <code>margin</code> (l'espace extérieur, entre les boîtes).</p>" },
      { type:'code', code: "div {\n  width: 200px;\n  padding: 20px;\n  border: 3px solid black;\n  margin: 10px;\n}" },
      { type:'tip', html:"Imagine une boîte cadeau : le <strong>padding</strong> c'est le papier de soie à l'intérieur, la <strong>border</strong> c'est le carton, et le <strong>margin</strong> c'est la distance avec les autres cadeaux !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<div>Une boîte</div>", readonly:true },
        { type:'css', starter:"div {\n  width: 150px;\n  padding: 20px;\n  border: 4px solid teal;\n  margin: 20px;\n  background-color: lightcyan;\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Donne à ta <code>div</code> un espace intérieur avec <code>padding: 20px;</code>.",
        tabs: [
          { type:'html', starter:"<div>Contenu</div>", readonly:true },
          { type:'css', starter:"div {\n  \n}" }
        ],
        hints: ["Utilise padding: 20px; dans la règle div."],
        solution: { css: "div {\n  padding: 20px;\n}" },
        check(doc, win, C){
          const p = parseInt(C.style('div', 'paddingTop'));
          if(!p || p < 15) return { success:false, message:"Ta div n'a pas encore assez de padding (essaie 20px)." };
          return { success:true, message:"Ta boîte respire mieux avec du padding !" };
        }
      },
      moyen: {
        instructions: "Ajoute à ta <code>div</code> une bordure de <code>3px solid black</code> ET une largeur fixe de <code>200px</code>.",
        tabs: [
          { type:'html', starter:"<div>Ma boîte</div>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["border: 3px solid black; et width: 200px;"],
        solution: { css: "div {\n  border: 3px solid black;\n  width: 200px;\n}" },
        check(doc, win, C){
          const bw = parseInt(C.style('div', 'borderTopWidth'));
          if(!bw || bw < 2) return { success:false, message:"Ta div n'a pas encore de bordure visible." };
          const w = parseInt(C.style('div', 'width'));
          if(!w || w < 150) return { success:false, message:"Ta div n'a pas encore la bonne largeur (essaie 200px)." };
          return { success:true, message:"Une boîte bien cadrée avec une jolie bordure !" };
        }
      },
      difficile: {
        instructions: "Crée une boîte complète : largeur <code>200px</code>, padding <code>15px</code>, bordure <code>2px solid navy</code>, ET margin <code>30px</code> pour l'éloigner des autres éléments.",
        tabs: [
          { type:'html', starter:"<div>Boîte 1</div>\n<div>Boîte 2</div>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["4 propriétés dans la règle div : width, padding, border, margin."],
        solution: { css: "div {\n  width: 200px;\n  padding: 15px;\n  border: 2px solid navy;\n  margin: 30px;\n}" },
        check(doc, win, C){
          if(parseInt(C.style('div', 'width')) < 150) return { success:false, message:"Il manque la bonne largeur (200px)." };
          if(parseInt(C.style('div', 'paddingTop')) < 10) return { success:false, message:"Il manque assez de padding." };
          if(parseInt(C.style('div', 'borderTopWidth')) < 1) return { success:false, message:"Il manque une bordure." };
          if(parseInt(C.style('div', 'marginTop')) < 15) return { success:false, message:"Il manque assez de margin." };
          return { success:true, message:"Tu maîtrises maintenant toute la boîte magique !" };
        }
      }
    }
  },

  // ============ LEÇON 5 ============
  {
    id: 'ch2-l5',
    title: "Cibler précisément",
    icon: '🎯',
    explanation: [
      { type:'text', heading:"Les classes et les ids", html:
        "<p>Pour styliser un élément précis (et pas tous les éléments du même type), on lui donne un nom avec l'attribut <code>class</code>, puis on le cible en CSS avec un <strong>point</strong> : <code>.mon-nom</code>. On peut aussi utiliser <code>id</code> avec un <strong>dièse</strong> : <code>#mon-id</code> (mais un id doit être unique sur la page).</p>" },
      { type:'code', code: "<p class=\"important\">Ce texte est spécial</p>\n\n.important {\n  color: red;\n  font-weight: bold;\n}" },
      { type:'tip', html:"Utilise une <strong>classe</strong> quand plusieurs éléments doivent partager le même style, et un <strong>id</strong> pour un seul élément unique sur la page." },
      { type:'demo', tabs:[
        { type:'html', starter:"<p class=\"alerte\">Attention !</p>\n<p>Texte normal</p>\n<p class=\"alerte\">Encore attention !</p>", readonly:true },
        { type:'css', starter:".alerte {\n  color: red;\n  font-weight: bold;\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Utilise la classe <code>.special</code> pour mettre le paragraphe qui l'a en couleur <strong>orange</strong>.",
        tabs: [
          { type:'html', starter:"<p class=\"special\">Je suis spécial</p>\n<p>Je suis normal</p>", readonly:true },
          { type:'css', starter:".special {\n  \n}" }
        ],
        hints: ["N'oublie pas le point avant le nom de la classe : .special { }"],
        solution: { css: ".special {\n  color: orange;\n}" },
        check(doc, win, C){
          if(!C.colorEquals('.special', 'color', 'orange')) return { success:false, message:"L'élément avec la classe special n'est pas encore orange." };
          return { success:true, message:"Tu as ciblé précisément le bon élément !" };
        }
      },
      moyen: {
        instructions: "Utilise l'id <code>#titre-principal</code> pour mettre CE titre en bleu et centré, sans changer les autres titres.",
        tabs: [
          { type:'html', starter:"<h2 id=\"titre-principal\">Titre important</h2>\n<h2>Autre titre</h2>", readonly:true },
          { type:'css', starter:"#titre-principal {\n  \n}" }
        ],
        hints: ["N'oublie pas le dièse # avant le nom de l'id : #titre-principal { }"],
        solution: { css: "#titre-principal {\n  color: blue;\n  text-align: center;\n}" },
        check(doc, win, C){
          if(!C.colorEquals('#titre-principal', 'color', 'blue')) return { success:false, message:"Le titre avec l'id titre-principal n'est pas encore bleu." };
          if(!C.styleEquals('#titre-principal', 'textAlign', 'center')) return { success:false, message:"Le titre avec l'id titre-principal n'est pas encore centré." };
          return { success:true, message:"Bravo, l'id cible exactement ce qu'il faut !" };
        }
      },
      difficile: {
        instructions: "Deux paragraphes ont la classe <code>.carte</code> : donne-leur un fond gris clair et une bordure. Un des paragraphes a AUSSI l'id <code>#top</code> : donne-lui en plus un texte en gras.",
        tabs: [
          { type:'html', starter:"<p class=\"carte\" id=\"top\">Carte du haut</p>\n<p class=\"carte\">Carte normale</p>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["Une règle .carte pour le style commun, une règle #top pour le style en plus."],
        solution: { css: ".carte {\n  background-color: lightgray;\n  border: 1px solid gray;\n}\n#top {\n  font-weight: bold;\n}" },
        check(doc, win, C){
          if(!C.colorEquals('.carte', 'backgroundColor', 'lightgray')) return { success:false, message:"Les éléments .carte n'ont pas encore le bon fond." };
          if(parseInt(C.style('.carte', 'borderTopWidth')) < 1) return { success:false, message:"Les éléments .carte n'ont pas encore de bordure." };
          const fw = C.style('#top', 'fontWeight');
          if(!(fw === 'bold' || parseInt(fw) >= 700)) return { success:false, message:"L'élément #top n'est pas encore en gras." };
          return { success:true, message:"Classes ET id combinés parfaitement !" };
        }
      }
    }
  },

  // ============ LEÇON 6 ============
  {
    id: 'ch2-l6',
    title: "Cacher, afficher, organiser",
    icon: '👁️',
    explanation: [
      { type:'text', heading:"La propriété display", html:
        "<p><code>display</code> contrôle comment un élément se comporte. <code>block</code> prend toute la largeur (comme une div), <code>inline</code> ne prend que la place du contenu (comme un span), et <code>none</code> <strong>cache complètement</strong> l'élément !</p>" },
      { type:'code', code: "span {\n  display: block;\n}\n.cache {\n  display: none;\n}" },
      { type:'tip', html:"<code>display: none;</code> est très utile pour cacher des éléments temporairement, comme un message qui n'apparaît que dans certains cas." },
      { type:'demo', tabs:[
        { type:'html', starter:"<p>Visible</p>\n<p class=\"secret\">Invisible</p>\n<p>Visible aussi</p>", readonly:true },
        { type:'css', starter:".secret {\n  display: none;\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Cache complètement le paragraphe qui a la classe <code>.cache</code> avec <code>display: none;</code>.",
        tabs: [
          { type:'html', starter:"<p>Je reste visible</p>\n<p class=\"cache\">Je dois disparaître</p>", readonly:true },
          { type:'css', starter:".cache {\n  \n}" }
        ],
        hints: ["Utilise display: none; pour la classe .cache."],
        solution: { css: ".cache {\n  display: none;\n}" },
        check(doc, win, C){
          if(!C.styleEquals('.cache', 'display', 'none')) return { success:false, message:"L'élément .cache est encore visible." };
          return { success:true, message:"Ton élément a disparu comme par magie !" };
        }
      },
      moyen: {
        instructions: "Transforme les <code>&lt;span&gt;</code> (normalement en ligne) en blocs avec <code>display: block;</code>, pour qu'ils s'affichent chacun sur leur propre ligne.",
        tabs: [
          { type:'html', starter:"<span>Ligne 1</span>\n<span>Ligne 2</span>", readonly:true },
          { type:'css', starter:"span {\n  \n}" }
        ],
        hints: ["Utilise display: block; dans la règle span."],
        solution: { css: "span {\n  display: block;\n}" },
        check(doc, win, C){
          if(!C.styleEquals('span', 'display', 'block')) return { success:false, message:"Tes span ne sont pas encore en display: block." };
          return { success:true, message:"Tes span se comportent maintenant comme des blocs !" };
        }
      },
      difficile: {
        instructions: "Trois paragraphes ont la classe <code>.item</code>. Affiche-les en ligne les uns à côté des autres avec <code>display: inline-block;</code> et donne-leur un peu de <code>margin</code>.",
        tabs: [
          { type:'html', starter:"<p class=\"item\">A</p>\n<p class=\"item\">B</p>\n<p class=\"item\">C</p>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["display: inline-block; et margin: 10px; dans la règle .item."],
        solution: { css: ".item {\n  display: inline-block;\n  margin: 10px;\n}" },
        check(doc, win, C){
          if(!C.styleEquals('.item', 'display', 'inline-block')) return { success:false, message:"Tes éléments .item ne sont pas encore en inline-block." };
          if(parseInt(C.style('.item', 'marginTop')) < 5) return { success:false, message:"Il manque un peu de margin sur .item." };
          return { success:true, message:"Tes éléments s'organisent bien côte à côte !" };
        }
      }
    }
  },

  // ============ LEÇON 7 ============
  {
    id: 'ch2-l7',
    title: "Flexbox : aligner comme des jouets",
    icon: '🧸',
    explanation: [
      { type:'text', heading:"Ranger des éléments facilement", html:
        "<p><code>display: flex;</code> transforme une boîte en \"étagère\" magique : tous les éléments à l'intérieur se rangent automatiquement en ligne ! Ensuite, <code>justify-content</code> les aligne horizontalement, et <code>align-items</code> les aligne verticalement.</p>" },
      { type:'code', code: ".etagere {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}" },
      { type:'tip', html:"<code>justify-content: space-between;</code> pousse les éléments chacun à un bout, avec de l'espace régulier entre eux. Essaie-le !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<div class=\"etagere\">\n  <span>🧸</span>\n  <span>🚗</span>\n  <span>⚽</span>\n</div>", readonly:true },
        { type:'css', starter:".etagere {\n  display: flex;\n  justify-content: space-around;\n  font-size: 40px;\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Transforme la <code>div</code> avec la classe <code>.rangee</code> en conteneur flex avec <code>display: flex;</code>.",
        tabs: [
          { type:'html', starter:"<div class=\"rangee\">\n  <p>Un</p>\n  <p>Deux</p>\n  <p>Trois</p>\n</div>", readonly:true },
          { type:'css', starter:".rangee {\n  \n}" }
        ],
        hints: ["Utilise display: flex; dans la règle .rangee."],
        solution: { css: ".rangee {\n  display: flex;\n}" },
        check(doc, win, C){
          if(!C.styleEquals('.rangee', 'display', 'flex')) return { success:false, message:"Ta div .rangee n'est pas encore en display: flex." };
          return { success:true, message:"Tes éléments sont maintenant rangés en ligne !" };
        }
      },
      moyen: {
        instructions: "Avec flex activé, centre tous les éléments horizontalement grâce à <code>justify-content: center;</code>.",
        tabs: [
          { type:'html', starter:"<div class=\"rangee\">\n  <p>Un</p>\n  <p>Deux</p>\n</div>", readonly:true },
          { type:'css', starter:".rangee {\n  display: flex;\n  \n}" }
        ],
        hints: ["Ajoute justify-content: center; à la suite de display: flex;."],
        solution: { css: ".rangee {\n  display: flex;\n  justify-content: center;\n}" },
        check(doc, win, C){
          if(!C.styleEquals('.rangee', 'display', 'flex')) return { success:false, message:"N'oublie pas display: flex;." };
          if(!C.styleEquals('.rangee', 'justifyContent', 'center')) return { success:false, message:"Tes éléments ne sont pas encore centrés horizontalement." };
          return { success:true, message:"Tout est parfaitement centré !" };
        }
      },
      difficile: {
        instructions: "Crée une rangée flex où les éléments sont espacés avec <code>justify-content: space-between;</code> ET centrés verticalement avec <code>align-items: center;</code>. Donne à la rangée une hauteur de <code>100px</code>.",
        tabs: [
          { type:'html', starter:"<div class=\"rangee\">\n  <span>🐱</span>\n  <span>🐶</span>\n  <span>🐰</span>\n</div>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["4 propriétés dans .rangee : display, justify-content, align-items, height."],
        solution: { css: ".rangee {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100px;\n}" },
        check(doc, win, C){
          if(!C.styleEquals('.rangee', 'display', 'flex')) return { success:false, message:"N'oublie pas display: flex;." };
          if(!C.styleEquals('.rangee', 'justifyContent', 'space-between')) return { success:false, message:"Il manque justify-content: space-between;." };
          if(!C.styleEquals('.rangee', 'alignItems', 'center')) return { success:false, message:"Il manque align-items: center;." };
          if(parseInt(C.style('.rangee', 'height')) < 80) return { success:false, message:"La hauteur n'est pas encore de 100px." };
          return { success:true, message:"Un alignement flexbox parfait, digne d'un pro !" };
        }
      }
    }
  },

  // ============ LEÇON 8 ============
  {
    id: 'ch2-l8',
    title: "Fonds et dégradés",
    icon: '🌅',
    explanation: [
      { type:'text', heading:"Des fonds qui claquent", html:
        "<p>En plus des couleurs simples, on peut créer un <strong>dégradé</strong> (plusieurs couleurs qui se mélangent) avec <code>linear-gradient()</code>. C'est une valeur qu'on donne à <code>background</code> ou <code>background-image</code>.</p>" },
      { type:'code', code: "div {\n  background: linear-gradient(to right, red, yellow);\n}" },
      { type:'tip', html:"<code>to right</code> veut dire que le dégradé va de gauche à droite. Tu peux aussi essayer <code>to bottom</code>, <code>45deg</code>, etc." },
      { type:'demo', tabs:[
        { type:'html', starter:"<div class=\"fond\">Un beau dégradé</div>", readonly:true },
        { type:'css', starter:".fond {\n  background: linear-gradient(to right, deeppink, orange);\n  padding: 30px;\n  color: white;\n  font-weight: bold;\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Donne à ta div un dégradé du bleu vers le vert avec <code>background: linear-gradient(to right, blue, green);</code>.",
        tabs: [
          { type:'html', starter:"<div class=\"boite\">Coucou</div>", readonly:true },
          { type:'css', starter:".boite {\n  \n}" }
        ],
        hints: ["Utilise background: linear-gradient(to right, blue, green); dans .boite."],
        solution: { css: ".boite {\n  background: linear-gradient(to right, blue, green);\n}" },
        check(doc, win, C){
          const bg = (C.style('.boite', 'backgroundImage') || '').toLowerCase();
          if(!bg.includes('gradient')) return { success:false, message:"Ta boîte n'a pas encore de dégradé." };
          return { success:true, message:"Un joli dégradé de couleurs !" };
        }
      },
      moyen: {
        instructions: "Crée un dégradé avec 3 couleurs de ton choix, ET ajoute un padding de 20px pour que le texte ne colle pas aux bords.",
        tabs: [
          { type:'html', starter:"<div class=\"boite\">Trois couleurs !</div>", readonly:true },
          { type:'css', starter:".boite {\n  \n}" }
        ],
        hints: ["Sépare les 3 couleurs par des virgules dans linear-gradient(...).", "N'oublie pas padding: 20px;"],
        solution: { css: ".boite {\n  background: linear-gradient(to right, red, yellow, green);\n  padding: 20px;\n}" },
        check(doc, win, C){
          const bg = (C.style('.boite', 'backgroundImage') || '').toLowerCase();
          if(!bg.includes('gradient')) return { success:false, message:"Ta boîte n'a pas encore de dégradé." };
          const commas = (bg.match(/,/g) || []).length;
          if(commas < 3) return { success:false, message:"Il faut au moins 3 couleurs séparées par des virgules dans ton dégradé." };
          if(parseInt(C.style('.boite', 'paddingTop')) < 15) return { success:false, message:"Il manque du padding (essaie 20px)." };
          return { success:true, message:"Un magnifique dégradé à trois couleurs !" };
        }
      },
      difficile: {
        instructions: "Crée une carte avec un dégradé de fond, du padding, des coins arrondis (<code>border-radius: 15px;</code>) et un texte blanc et en gras.",
        tabs: [
          { type:'html', starter:"<div class=\"carte\">Ma super carte</div>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["Il te faut : background (gradient), padding, border-radius, color: white, font-weight: bold."],
        solution: { css: ".carte {\n  background: linear-gradient(135deg, purple, deeppink);\n  padding: 25px;\n  border-radius: 15px;\n  color: white;\n  font-weight: bold;\n}" },
        check(doc, win, C){
          const bg = (C.style('.carte', 'backgroundImage') || '').toLowerCase();
          if(!bg.includes('gradient')) return { success:false, message:"Il manque le dégradé de fond." };
          if(parseInt(C.style('.carte', 'paddingTop')) < 10) return { success:false, message:"Il manque du padding." };
          if(parseFloat(C.style('.carte', 'borderTopLeftRadius')) < 5) return { success:false, message:"Il manque des coins arrondis." };
          if(!C.colorEquals('.carte', 'color', 'white')) return { success:false, message:"Le texte n'est pas encore blanc." };
          const fw = C.style('.carte', 'fontWeight');
          if(!(fw === 'bold' || parseInt(fw) >= 700)) return { success:false, message:"Le texte n'est pas encore en gras." };
          return { success:true, message:"Une carte magnifique digne d'un vrai designer !" };
        }
      }
    }
  },

  // ============ LEÇON 9 ============
  {
    id: 'ch2-l9',
    title: "Coins ronds et ombres",
    icon: '✨',
    explanation: [
      { type:'text', heading:"Adoucir et faire flotter", html:
        "<p><code>border-radius</code> arrondit les coins d'une boîte (plus le nombre est grand, plus c'est rond). <code>box-shadow</code> ajoute une ombre, pour donner l'impression que l'élément flotte au-dessus de la page !</p>" },
      { type:'code', code: "div {\n  border-radius: 20px;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.3);\n}" },
      { type:'tip', html:"Avec un <code>border-radius</code> égal à la moitié de la largeur et de la hauteur, tu obtiens un cercle parfait !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<div class=\"carte\">Je flotte !</div>", readonly:true },
        { type:'css', starter:".carte {\n  width: 150px;\n  padding: 20px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 6px 14px rgba(0,0,0,0.25);\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Arrondis les coins de ta div avec <code>border-radius: 20px;</code>.",
        tabs: [
          { type:'html', starter:"<div class=\"boite\">Coins ronds</div>", readonly:true },
          { type:'css', starter:".boite {\n  width: 150px;\n  height: 80px;\n  background: lightblue;\n  \n}" }
        ],
        hints: ["Ajoute border-radius: 20px; dans .boite."],
        solution: { css: ".boite {\n  width: 150px;\n  height: 80px;\n  background: lightblue;\n  border-radius: 20px;\n}" },
        check(doc, win, C){
          if(parseFloat(C.style('.boite', 'borderTopLeftRadius')) < 10) return { success:false, message:"Les coins de ta boîte ne sont pas encore assez arrondis." };
          return { success:true, message:"De beaux coins tout ronds !" };
        }
      },
      moyen: {
        instructions: "Ajoute une ombre à ta boîte avec <code>box-shadow: 0 4px 10px rgba(0,0,0,0.3);</code> pour qu'elle semble flotter.",
        tabs: [
          { type:'html', starter:"<div class=\"boite\">Je flotte</div>", readonly:true },
          { type:'css', starter:".boite {\n  width: 150px;\n  height: 80px;\n  background: white;\n  \n}" }
        ],
        hints: ["Utilise box-shadow: 0 4px 10px rgba(0,0,0,0.3);"],
        solution: { css: ".boite {\n  width: 150px;\n  height: 80px;\n  background: white;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.3);\n}" },
        check(doc, win, C){
          const sh = C.style('.boite', 'boxShadow');
          if(!sh || sh === 'none') return { success:false, message:"Ta boîte n'a pas encore d'ombre." };
          return { success:true, message:"Ta boîte flotte magnifiquement !" };
        }
      },
      difficile: {
        instructions: "Crée un cercle parfait : une div de <code>100px</code> sur <code>100px</code>, avec <code>border-radius: 50%;</code>, une couleur de fond, et une ombre.",
        tabs: [
          { type:'html', starter:"<div class=\"cercle\"></div>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["width: 100px; height: 100px; border-radius: 50%; background-color: ...; box-shadow: ...;"],
        solution: { css: ".cercle {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: tomato;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.3);\n}" },
        check(doc, win, C){
          if(parseInt(C.style('.cercle', 'width')) < 80) return { success:false, message:"Il manque la bonne largeur (100px)." };
          if(parseInt(C.style('.cercle', 'height')) < 80) return { success:false, message:"Il manque la bonne hauteur (100px)." };
          const br = C.style('.cercle', 'borderTopLeftRadius');
          if(!br || (!br.includes('%') && parseFloat(br) < 40)) return { success:false, message:"Il manque border-radius: 50%; pour faire un cercle." };
          const bg = C.style('.cercle', 'backgroundColor');
          if(!bg || bg === 'rgba(0, 0, 0, 0)') return { success:false, message:"Il manque une couleur de fond." };
          const sh = C.style('.cercle', 'boxShadow');
          if(!sh || sh === 'none') return { success:false, message:"Il manque une ombre." };
          return { success:true, message:"Un cercle parfait avec une belle ombre, bravo !" };
        }
      }
    }
  },

  // ============ LEÇON 10 ============
  {
    id: 'ch2-l10',
    title: "Animer au survol",
    icon: '🖱️',
    explanation: [
      { type:'text', heading:"Réagir à la souris", html:
        "<p>Avec <code>:hover</code>, on peut donner un style spécial quand la souris passe sur un élément ! Et avec <code>transition</code>, le changement se fait en douceur au lieu d'être brusque.</p>" },
      { type:'code', code: "button {\n  background: dodgerblue;\n  transition: background 0.3s;\n}\nbutton:hover {\n  background: navy;\n}" },
      { type:'tip', html:"Mets toujours <code>transition</code> sur l'élément normal (pas sur le <code>:hover</code>) pour que l'effet soit fluide dans les deux sens." },
      { type:'demo', tabs:[
        { type:'html', starter:"<button>Survole-moi !</button>", readonly:true },
        { type:'css', starter:"button {\n  padding: 12px 24px;\n  font-size: 16px;\n  background: deeppink;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  transition: transform 0.3s, background 0.3s;\n}\nbutton:hover {\n  background: purple;\n  transform: scale(1.1);\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Fais en sorte que le bouton devienne <strong>rouge</strong> quand la souris le survole, avec <code>button:hover { background-color: red; }</code>.",
        tabs: [
          { type:'html', starter:"<button>Clique-moi</button>", readonly:true },
          { type:'css', starter:"button {\n  padding: 10px 20px;\n}\n\n/* Ajoute ta règle :hover ici */" }
        ],
        showConsole: false,
        hints: ["Écris button:hover { background-color: red; } (sans espace avant les deux-points)."],
        solution: { css: "button {\n  padding: 10px 20px;\n}\nbutton:hover {\n  background-color: red;\n}" },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '').toLowerCase();
          if(!css.includes(':hover')) return { success:false, message:"Il manque une règle :hover dans ton CSS." };
          if(!css.includes('red')) return { success:false, message:"Ta règle :hover doit changer la couleur en rouge." };
          return { success:true, message:"Ton bouton réagit maintenant à la souris !" };
        }
      },
      moyen: {
        instructions: "Ajoute une <code>transition</code> de 0.3s sur le bouton, ET une règle <code>:hover</code> qui change sa couleur de fond.",
        tabs: [
          { type:'html', starter:"<button>Survole-moi</button>", readonly:true },
          { type:'css', starter:"button {\n  padding: 10px 20px;\n  background-color: dodgerblue;\n  \n}\n" }
        ],
        hints: ["Ajoute transition: background-color 0.3s; dans la règle button.", "Ajoute une règle button:hover { background-color: ...; }"],
        solution: { css: "button {\n  padding: 10px 20px;\n  background-color: dodgerblue;\n  transition: background-color 0.3s;\n}\nbutton:hover {\n  background-color: navy;\n}" },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '').toLowerCase();
          if(!css.includes('transition')) return { success:false, message:"Il manque une propriété transition." };
          if(!css.includes(':hover')) return { success:false, message:"Il manque une règle :hover." };
          return { success:true, message:"Une transition tout en douceur, superbe !" };
        }
      },
      difficile: {
        instructions: "Crée un bouton qui, au survol, change de couleur ET grossit légèrement avec <code>transform: scale(1.1);</code>. N'oublie pas la transition pour que ce soit fluide.",
        tabs: [
          { type:'html', starter:"<button>Magique</button>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["Sur button : transition: all 0.3s;", "Sur button:hover : background-color: ...; transform: scale(1.1);"],
        solution: { css: "button {\n  padding: 14px 28px;\n  background-color: teal;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  transition: all 0.3s;\n}\nbutton:hover {\n  background-color: darkslategray;\n  transform: scale(1.1);\n}" },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '').toLowerCase();
          if(!css.includes('transition')) return { success:false, message:"Il manque une transition." };
          if(!css.includes(':hover')) return { success:false, message:"Il manque une règle :hover." };
          if(!css.includes('scale')) return { success:false, message:"Il manque transform: scale(...) dans ton :hover." };
          return { success:true, message:"Un bouton magique et fluide, tu es un artiste du CSS !" };
        }
      }
    }
  },

  // ============ LEÇON 11 ============
  {
    id: 'ch2-l11',
    title: "S'adapter à toutes les tailles",
    icon: '📱',
    explanation: [
      { type:'text', heading:"Le responsive, c'est quoi ?", html:
        "<p>Un site \"responsive\" s'adapte à la taille de l'écran : ordinateur, tablette, téléphone. Une astuce simple : utiliser <code>%</code> au lieu de <code>px</code> pour les largeurs, ou <code>max-width</code> pour qu'un élément ne dépasse jamais une certaine taille.</p>" },
      { type:'code', code: "div {\n  width: 80%;\n  max-width: 500px;\n  margin: 0 auto;\n}" },
      { type:'tip', html:"<code>margin: 0 auto;</code> est une astuce magique pour centrer horizontalement un élément qui a une largeur définie !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<div class=\"conteneur\">Je m'adapte à l'écran !</div>", readonly:true },
        { type:'css', starter:".conteneur {\n  width: 80%;\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 20px;\n  background: lavender;\n  text-align: center;\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Donne à ta div une largeur de <code>80%</code> au lieu d'une largeur fixe en pixels.",
        tabs: [
          { type:'html', starter:"<div class=\"boite\">Je suis flexible</div>", readonly:true },
          { type:'css', starter:".boite {\n  \n}" }
        ],
        hints: ["Utilise width: 80%; dans .boite."],
        solution: { css: ".boite {\n  width: 80%;\n}" },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '');
          if(!/width\s*:\s*80%/.test(css)) return { success:false, message:"Il manque width: 80%; sur ta boîte." };
          return { success:true, message:"Ta boîte s'adapte maintenant à la largeur de l'écran !" };
        }
      },
      moyen: {
        instructions: "Ajoute <code>max-width: 400px;</code> pour que ta boîte ne devienne jamais trop grande, ET centre-la avec <code>margin: 0 auto;</code>.",
        tabs: [
          { type:'html', starter:"<div class=\"boite\">Centrée et limitée</div>", readonly:true },
          { type:'css', starter:".boite {\n  width: 80%;\n  \n}" }
        ],
        hints: ["Ajoute max-width: 400px; et margin: 0 auto; à la suite de width: 80%;."],
        solution: { css: ".boite {\n  width: 80%;\n  max-width: 400px;\n  margin: 0 auto;\n}" },
        check(doc, win, C){
          const mw = parseInt(C.style('.boite', 'maxWidth'));
          if(!mw || mw < 300 || mw > 500) return { success:false, message:"Il manque max-width: 400px; sur ta boîte." };
          if(!C.styleEquals('.boite', 'marginLeft', C.style('.boite','marginRight'))) return { success:false, message:"Tes marges gauche et droite doivent être égales (utilise margin: 0 auto;)." };
          return { success:true, message:"Ta boîte est bien centrée et limitée en taille !" };
        }
      },
      difficile: {
        instructions: "Crée une carte responsive : largeur <code>90%</code>, <code>max-width: 350px</code>, centrée avec <code>margin: 0 auto;</code>, avec du padding et des coins arrondis.",
        tabs: [
          { type:'html', starter:"<div class=\"carte\">Une carte qui s'adapte à tous les écrans</div>", readonly:true },
          { type:'css', starter:"" }
        ],
        hints: ["5 propriétés : width, max-width, margin, padding, border-radius."],
        solution: { css: ".carte {\n  width: 90%;\n  max-width: 350px;\n  margin: 0 auto;\n  padding: 20px;\n  border-radius: 12px;\n  background: honeydew;\n}" },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '');
          if(!/width\s*:\s*90%/.test(css)) return { success:false, message:"Il manque width: 90%;." };
          const mw = parseInt(C.style('.carte', 'maxWidth'));
          if(!mw || mw > 450) return { success:false, message:"Il manque un max-width raisonnable (350px)." };
          if(parseInt(C.style('.carte', 'paddingTop')) < 5) return { success:false, message:"Il manque du padding." };
          if(parseFloat(C.style('.carte', 'borderTopLeftRadius')) < 5) return { success:false, message:"Il manque des coins arrondis." };
          return { success:true, message:"Une carte responsive parfaite, elle s'adaptera à tous les écrans !" };
        }
      }
    }
  },

  // ============ LEÇON 12 — PROJET FINAL ============
  {
    id: 'ch2-l12',
    title: "🏆 Projet : styliser ma carte",
    icon: '🏆',
    explanation: [
      { type:'text', heading:"Le grand projet du Chapitre 2 !", html:
        "<p>Tu as appris les couleurs, le texte, les boîtes, les classes, flexbox, les dégradés, les ombres, les animations et le responsive. Il est temps de transformer ta carte de présentation en une vraie œuvre d'art !</p>" },
      { type:'tip', html:"Prends ton temps, essaie plein de couleurs différentes, et amuse-toi. Il n'y a pas qu'une seule bonne réponse en design !" },
      { type:'demo', tabs:[
        { type:'html', starter:"<div class=\"carte\">\n  <h1>Daouda</h1>\n  <p>Futur champion du code !</p>\n  <button>Contacte-moi</button>\n</div>", readonly:true },
        { type:'css', starter:".carte {\n  max-width: 300px;\n  margin: 20px auto;\n  padding: 24px;\n  text-align: center;\n  background: linear-gradient(135deg, #ffecd2, #fcb69f);\n  border-radius: 20px;\n  box-shadow: 0 10px 25px rgba(0,0,0,0.2);\n}\nbutton {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background: white;\n  transition: transform 0.3s;\n}\nbutton:hover {\n  transform: scale(1.1);\n}" }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Donne à la carte (classe <code>.carte</code>) un fond en dégradé et des coins arrondis (<code>border-radius</code>).",
        tabs: [
          { type:'html', starter:"<div class=\"carte\">\n  <h1>Daouda</h1>\n  <p>J'apprends à coder !</p>\n</div>", readonly:true },
          { type:'css', starter:".carte {\n  \n}" }
        ],
        hints: ["background: linear-gradient(...); et border-radius: ...px;"],
        solution: { css: ".carte {\n  background: linear-gradient(135deg, #a1c4fd, #c2e9fb);\n  border-radius: 20px;\n  padding: 20px;\n}" },
        check(doc, win, C){
          const bg = (C.style('.carte', 'backgroundImage') || '').toLowerCase();
          if(!bg.includes('gradient')) return { success:false, message:"Il manque un dégradé de fond sur .carte." };
          if(parseFloat(C.style('.carte', 'borderTopLeftRadius')) < 5) return { success:false, message:"Il manque des coins arrondis sur .carte." };
          return { success:true, message:"Ta carte a déjà beaucoup plus de style !" };
        }
      },
      moyen: {
        instructions: "Centre tout le texte de la carte, ajoute une ombre avec <code>box-shadow</code>, et limite sa largeur avec <code>max-width: 320px;</code> centrée (<code>margin: 0 auto;</code>).",
        tabs: [
          { type:'html', starter:"<div class=\"carte\">\n  <h1>Daouda</h1>\n  <p>J'apprends à coder !</p>\n</div>", readonly:true },
          { type:'css', starter:".carte {\n  background: linear-gradient(135deg, #a1c4fd, #c2e9fb);\n  border-radius: 20px;\n  padding: 20px;\n  \n}" }
        ],
        hints: ["text-align: center; box-shadow: ...; max-width: 320px; margin: 0 auto;"],
        solution: { css: ".carte {\n  background: linear-gradient(135deg, #a1c4fd, #c2e9fb);\n  border-radius: 20px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 8px 20px rgba(0,0,0,0.2);\n  max-width: 320px;\n  margin: 0 auto;\n}" },
        check(doc, win, C){
          if(!C.styleEquals('.carte', 'textAlign', 'center')) return { success:false, message:"Le texte de la carte n'est pas encore centré." };
          const sh = C.style('.carte', 'boxShadow');
          if(!sh || sh === 'none') return { success:false, message:"Il manque une ombre sur la carte." };
          const mw = parseInt(C.style('.carte', 'maxWidth'));
          if(!mw || mw > 400) return { success:false, message:"Il manque un max-width raisonnable (320px)." };
          return { success:true, message:"Ta carte flotte magnifiquement au centre de l'écran !" };
        }
      },
      difficile: {
        instructions: "Ajoute un <code>&lt;button&gt;</code> dans ta carte, stylé joliment, avec une règle <code>:hover</code> et une <code>transition</code> pour qu'il grossisse légèrement au survol.",
        tabs: [
          { type:'html', starter:"<div class=\"carte\">\n  <h1>Daouda</h1>\n  <p>J'apprends à coder !</p>\n  <button>Bonjour</button>\n</div>", readonly:true },
          { type:'css', starter:".carte {\n  background: linear-gradient(135deg, #a1c4fd, #c2e9fb);\n  border-radius: 20px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 8px 20px rgba(0,0,0,0.2);\n  max-width: 320px;\n  margin: 0 auto;\n}\n\n/* Style ton bouton ici */" }
        ],
        hints: ["N'oublie pas transition sur button et transform: scale(...) sur button:hover."],
        solution: { css: ".carte {\n  background: linear-gradient(135deg, #a1c4fd, #c2e9fb);\n  border-radius: 20px;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 8px 20px rgba(0,0,0,0.2);\n  max-width: 320px;\n  margin: 0 auto;\n}\nbutton {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background: white;\n  transition: transform 0.3s;\n}\nbutton:hover {\n  transform: scale(1.1);\n}" },
        check(doc, win, C, logs, errors, raw){
          if(!C.exists('button')) return { success:false, message:"Il manque un bouton dans ta carte." };
          const css = (raw && raw.css || '').toLowerCase();
          if(!css.includes('button')) return { success:false, message:"Il manque une règle CSS pour le bouton." };
          if(!css.includes(':hover')) return { success:false, message:"Il manque une règle :hover sur le bouton." };
          if(!css.includes('transition')) return { success:false, message:"Il manque une transition sur le bouton." };
          return { success:true, message:"🏆 BRAVO ! Ta carte de présentation est magnifique et interactive. Chapitre 2 terminé !" };
        }
      }
    }
  }

  ]
};
