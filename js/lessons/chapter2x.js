const CHAPTER_2X = {
  id: 'ch2x',
  title: 'HTML & CSS Expert',
  subtitle: "Les techniques avancées, puis 3 examens de vrais sites (sans JavaScript)",
  icon: '🎓',
  lessons: [

  // ============ LEÇON 1 : OMBRES ET TRANSFORMATIONS ============
  {
    id: 'ch2x-l1',
    title: "Ombres et transformations en détail",
    icon: '🌗',
    explanation: [
      { type:'text', heading:"box-shadow : chaque nombre a un sens précis", html:
        "<p><code>box-shadow</code> prend JUSQU'À 5 valeurs, toujours dans cet ordre :</p><ul><li><strong>décalage horizontal</strong> (positif = vers la droite, négatif = vers la gauche)</li><li><strong>décalage vertical</strong> (positif = vers le bas, négatif = vers le haut)</li><li><strong>flou</strong> (0 = ombre nette, un grand nombre = ombre très diffuse)</li><li><strong>étendue</strong> (optionnelle, agrandit ou réduit la taille de l'ombre elle-même)</li><li><strong>couleur</strong> (souvent en <code>rgba()</code> pour la rendre semi-transparente)</li></ul>" },
      { type:'code', code: "box-shadow: 0 4px 10px rgba(0,0,0,0.3);\n/*           ↑  ↑    ↑    ↑\n             |  |    |    couleur (noir à 30% d'opacité)\n             |  |    flou (10px de diffusion)\n             |  décalage vertical (4px vers le bas)\n             décalage horizontal (0 = pas de décalage) */" },
      { type:'text', heading:"rgba() : le 4ᵉ nombre, c'est la transparence", html:
        "<p><code>rgba(rouge, vert, bleu, alpha)</code> ajoute un 4ᵉ nombre appelé <strong>alpha</strong> à <code>rgb()</code> : il va de <code>0</code> (complètement invisible) à <code>1</code> (complètement opaque). <code>rgba(0,0,0,0.3)</code> = du noir vu à travers un voile, à 30% de sa force — parfait pour une ombre douce qui ne cache pas ce qu'il y a derrière.</p>" },
      { type:'code', code: "rgba(0, 0, 0, 1)    → noir plein, opaque\nrgba(0, 0, 0, 0.5)  → noir à moitié transparent\nrgba(0, 0, 0, 0.1)  → noir presque invisible" },
      { type:'text', heading:"L'étendue et inset, les valeurs cachées", html:
        "<p>Une 4ᵉ valeur numérique AVANT la couleur agrandit l'ombre dans toutes les directions (<strong>étendue</strong>, souvent négative pour une ombre plus discrète). Le mot-clé <code>inset</code> au début transforme l'ombre extérieure en ombre <strong>intérieure</strong> (comme un creux, au lieu d'un relief).</p>" },
      { type:'code', code: "box-shadow: 0 4px 15px -5px rgba(0,0,0,0.5);  /* étendue négative = ombre resserrée */\nbox-shadow: inset 0 0 10px rgba(0,0,0,0.4);   /* ombre VERS L'INTÉRIEUR, effet \"creux\" */" },
      { type:'text', heading:"transform : bouger, agrandir, tourner SANS changer la mise en page", html:
        "<p><code>transform</code> déplace ou déforme visuellement un élément sans jamais pousser ses voisins (contrairement à <code>margin</code> ou <code>width</code>). Ses fonctions principales : <code>translate(x, y)</code> (déplacer), <code>scale(nombre)</code> (agrandir/rétrécir), <code>rotate(deg)</code> (tourner), <code>skew(deg)</code> (incliner). On peut même les <strong>combiner</strong> en les mettant à la suite, séparées par un espace !</p>" },
      { type:'code', code: "transform: translateY(-5px);       /* monte de 5px */\ntransform: scale(1.1);             /* 10% plus grand */\ntransform: rotate(5deg);           /* tourne de 5 degrés */\ntransform: scale(1.1) rotate(3deg); /* les deux à la fois ! */" },
      { type:'text', heading:"transition : plusieurs propriétés à la fois", html:
        "<p>Tu as déjà utilisé <code>transition: propriete duree;</code> pour UNE seule propriété. On peut en animer PLUSIEURS en les séparant par une <strong>virgule</strong>. Et le mot-clé <code>all</code> anime automatiquement TOUT ce qui change (pratique, mais un peu moins précis et plus coûteux en performance sur un vrai site professionnel).</p>" },
      { type:'code', code: "transition: transform 0.3s, background-color 0.3s;  /* 2 propriétés précises */\ntransition: all 0.3s ease;                            /* tout, avec une accélération douce */" },
      { type:'tip', html:"<code>ease</code> (défaut, démarre et finit en douceur), <code>linear</code> (vitesse constante), <code>ease-in-out</code> (très doux aux deux bouts) sont les mots-clés de <code>transition-timing-function</code> les plus utilisés en vrai." },
      { type:'demo', tabs:[
        { type:'html', starter:'<div class="carte">Survole-moi</div>', readonly:true },
        { type:'css', starter:'.carte {\n  width: 160px;\n  padding: 24px;\n  background: white;\n  border-radius: 14px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.carte:hover {\n  transform: translateY(-6px) scale(1.03);\n  box-shadow: 0 12px 24px rgba(0,0,0,0.25);\n}' }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Donne à <code>.carte</code> une ombre PRÉCISE avec <code>box-shadow: 2px 6px 15px rgba(0,0,0,0.4);</code> (décalage x=2, y=6, flou=15, noir à 40%).",
        tabs: [
          { type:'html', starter:'<div class="carte">Ma carte</div>', readonly:true },
          { type:'css', starter:'.carte {\n  width: 150px;\n  padding: 20px;\n  background: white;\n  \n}' }
        ],
        hints: ["Utilise exactement box-shadow: 2px 6px 15px rgba(0,0,0,0.4);"],
        solution: { css: '.carte {\n  width: 150px;\n  padding: 20px;\n  background: white;\n  box-shadow: 2px 6px 15px rgba(0,0,0,0.4);\n}' },
        check(doc, win, C){
          const sh = C.style('.carte', 'boxShadow');
          if(!sh || sh === 'none') return { success:false, message:"Il manque un box-shadow." };
          if(!sh.includes('rgba(0, 0, 0, 0.4)')) return { success:false, message:"La couleur doit être rgba(0,0,0,0.4) exactement (noir à 40%)." };
          return { success:true, message:"Tu maîtrises les 4 valeurs du box-shadow !" };
        }
      },
      moyen: {
        instructions: "Applique à <code>.carte</code> une transformation qui COMBINE un agrandissement et une rotation : <code>transform: scale(1.1) rotate(3deg);</code>.",
        tabs: [
          { type:'html', starter:'<div class="carte">Transforme-moi</div>', readonly:true },
          { type:'css', starter:'.carte {\n  width: 150px;\n  padding: 20px;\n  background: lightblue;\n  \n}' }
        ],
        hints: ["Écris transform: scale(1.1) rotate(3deg); (les deux fonctions séparées par un espace)."],
        solution: { css: '.carte {\n  width: 150px;\n  padding: 20px;\n  background: lightblue;\n  transform: scale(1.1) rotate(3deg);\n}' },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '').toLowerCase().replace(/\s+/g, ' ');
          if(!css.includes('scale')) return { success:false, message:"Il manque scale(...) dans transform." };
          if(!css.includes('rotate')) return { success:false, message:"Il manque rotate(...) dans transform." };
          if(!/transform:\s*scale\([^)]*\)\s*rotate/.test(css)) return { success:false, message:"scale(...) et rotate(...) doivent être dans LA MÊME propriété transform, l'un après l'autre." };
          return { success:true, message:"Tu combines plusieurs transformations comme un pro !" };
        }
      },
      difficile: {
        instructions: "Crée une carte avec une transition sur DEUX propriétés séparées par une virgule (<code>transform</code> et <code>box-shadow</code>), qui au survol (<code>:hover</code>) monte légèrement (<code>translateY(-8px)</code>) ET obtient une ombre plus grande et plus diffuse.",
        tabs: [
          { type:'html', starter:'<div class="carte">Effet waouh</div>', readonly:true },
          { type:'css', starter:'' }
        ],
        hints: [
          ".carte { transition: transform 0.3s, box-shadow 0.3s; box-shadow: 0 2px 6px rgba(0,0,0,0.2); }",
          ".carte:hover { transform: translateY(-8px); box-shadow: 0 16px 30px rgba(0,0,0,0.3); }"
        ],
        solution: { css: '.carte {\n  width: 160px;\n  padding: 24px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 6px rgba(0,0,0,0.2);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.carte:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 16px 30px rgba(0,0,0,0.3);\n}' },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '').toLowerCase().replace(/\s+/g, ' ');
          if(!/transition:[^;]*,/.test(css)) return { success:false, message:"La transition doit lister au moins 2 propriétés séparées par une virgule." };
          if(!css.includes('translatey')) return { success:false, message:"Il manque translateY(...) dans le :hover." };
          if(!/:hover\s*\{[^}]*box-shadow/.test(css)) return { success:false, message:"Le :hover doit changer aussi le box-shadow." };
          return { success:true, message:"Une vraie carte de site professionnel, fluide et raffinée !" };
        }
      }
    }
  },

  // ============ LEÇON 2 : LE POSITIONNEMENT ============
  {
    id: 'ch2x-l2',
    title: "Le positionnement CSS",
    icon: '📌',
    explanation: [
      { type:'text', heading:"5 façons de positionner un élément", html:
        "<p>La propriété <code>position</code> change complètement le comportement d'un élément : <code>static</code> (par défaut, comportement normal), <code>relative</code> (décalé par rapport à SA PROPRE position d'origine, avec <code>top/left/right/bottom</code>), <code>absolute</code> (sorti du flux normal, positionné par rapport à son PARENT positionné le plus proche), <code>fixed</code> (collé à l'écran, ne bouge jamais même si on scroll), <code>sticky</code> (normal jusqu'à un seuil de scroll, puis se colle).</p>" },
      { type:'code', code: "header {\n  position: sticky;\n  top: 0;   /* se colle en haut de l'écran dès qu'on scrolle jusque là */\n}" },
      { type:'text', heading:"absolute a besoin d'un parent relative", html:
        "<p>La règle la plus importante : un élément en <code>position: absolute</code> se positionne par rapport à son ANCÊTRE le plus proche qui a lui-même <code>position: relative</code> (ou absolute/fixed). Sans ce parent \"repère\", il se positionne par rapport à toute la page ! C'est LA technique pour superposer un badge, une icône, ou un texte sur une image.</p>" },
      { type:'code', code: ".carte {\n  position: relative;  /* devient le \"repère\" */\n}\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;  /* collé en haut à droite DE LA CARTE, pas de la page */\n}" },
      { type:'text', heading:"z-index : qui est devant, qui est derrière", html:
        "<p>Quand des éléments positionnés se superposent, <code>z-index</code> (un simple nombre) décide de l'ordre d'empilement : plus le nombre est grand, plus l'élément est \"au-dessus\". <code>z-index</code> ne fonctionne QUE sur un élément qui a déjà une <code>position</code> différente de <code>static</code> !</p>" },
      { type:'code', code: ".overlay {\n  position: absolute;\n  inset: 0;      /* raccourci pour top:0; right:0; bottom:0; left:0; */\n  z-index: 5;\n  background: rgba(0,0,0,0.5);\n}" },
      { type:'tip', html:"<code>inset: 0;</code> est un raccourci moderne très utilisé pour faire qu'un élément absolute recouvre TOUT son parent relative." },
      { type:'demo', tabs:[
        { type:'html', starter:'<div class="carte">\n  <span class="badge">Nouveau</span>\n  <p>Le badge est collé en haut à droite de la carte.</p>\n</div>', readonly:true },
        { type:'css', starter:'.carte {\n  position: relative;\n  width: 220px;\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.15);\n}\n.badge {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background: crimson;\n  color: white;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: bold;\n}' }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Rends <code>.encart</code> \"collant\" en haut de l'écran quand on scrolle, avec <code>position: sticky;</code> et <code>top: 0;</code>.",
        tabs: [
          { type:'html', starter:'<div class="encart">Je me colle en haut !</div>', readonly:true },
          { type:'css', starter:'.encart {\n  background: gold;\n  padding: 16px;\n  \n}' }
        ],
        hints: ["position: sticky; top: 0;"],
        solution: { css: '.encart {\n  background: gold;\n  padding: 16px;\n  position: sticky;\n  top: 0;\n}' },
        check(doc, win, C){
          if(C.style('.encart', 'position') !== 'sticky') return { success:false, message:"Il manque position: sticky;" };
          const top = C.style('.encart', 'top');
          if(top !== '0px') return { success:false, message:"Il manque top: 0; pour dire OÙ ça se colle." };
          return { success:true, message:"Ton encart va rester visible en scrollant !" };
        }
      },
      moyen: {
        instructions: "Place <code>.badge</code> en <code>absolute</code> dans le coin haut-droit de <code>.carte</code> (qui doit être en <code>position: relative;</code>) avec <code>top: -10px; right: -10px;</code>.",
        tabs: [
          { type:'html', starter:'<div class="carte">\n  <span class="badge">Promo</span>\n  Contenu de la carte\n</div>', readonly:true },
          { type:'css', starter:'.carte {\n  width: 200px;\n  padding: 20px;\n  background: white;\n  \n}\n.badge {\n  background: red;\n  color: white;\n  padding: 4px 10px;\n  \n}' }
        ],
        hints: [".carte { position: relative; }", ".badge { position: absolute; top: -10px; right: -10px; }"],
        solution: { css: '.carte {\n  width: 200px;\n  padding: 20px;\n  background: white;\n  position: relative;\n}\n.badge {\n  background: red;\n  color: white;\n  padding: 4px 10px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n}' },
        check(doc, win, C){
          if(C.style('.carte', 'position') !== 'relative') return { success:false, message:"Il manque position: relative; sur .carte (le \"repère\")." };
          if(C.style('.badge', 'position') !== 'absolute') return { success:false, message:"Il manque position: absolute; sur .badge." };
          return { success:true, message:"Le badge est parfaitement épinglé sur la carte !" };
        }
      },
      difficile: {
        instructions: "Crée un overlay sombre semi-transparent qui recouvre TOUTE une image : <code>.conteneur</code> en <code>relative</code>, <code>.overlay</code> en <code>absolute</code> avec <code>inset: 0;</code>, un fond <code>rgba(0,0,0,0.5)</code>, et un <code>z-index</code> plus grand que l'image.",
        tabs: [
          { type:'html', starter:'<div class="conteneur">\n  <img src="https://placehold.co/300x180/999/fff?text=Photo" alt="Photo">\n  <div class="overlay">Texte par-dessus</div>\n</div>', readonly:true },
          { type:'css', starter:'.conteneur {\n  width: 300px;\n  \n}\nimg {\n  display: block;\n  width: 100%;\n}\n.overlay {\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n}' }
        ],
        hints: [".conteneur { position: relative; }", ".overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.5); z-index: 2; }"],
        solution: { css: '.conteneur {\n  width: 300px;\n  position: relative;\n}\nimg {\n  display: block;\n  width: 100%;\n}\n.overlay {\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  inset: 0;\n  background: rgba(0,0,0,0.5);\n  z-index: 2;\n}' },
        check(doc, win, C){
          if(C.style('.conteneur', 'position') !== 'relative') return { success:false, message:"Il manque position: relative; sur .conteneur." };
          if(C.style('.overlay', 'position') !== 'absolute') return { success:false, message:"Il manque position: absolute; sur .overlay." };
          const top = C.style('.overlay', 'top'), left = C.style('.overlay', 'left');
          if(top !== '0px' || left !== '0px') return { success:false, message:"L'overlay doit recouvrir tout le conteneur (inset: 0; ou top/left/right/bottom: 0;)." };
          const bg = C.style('.overlay', 'backgroundColor');
          if(!bg || !bg.includes('0.5')) return { success:false, message:"Le fond doit être semi-transparent (opacité 0.5)." };
          return { success:true, message:"Un vrai overlay d'image, comme sur les sites professionnels !" };
        }
      }
    }
  },

  // ============ LEÇON 3 : CSS GRID ============
  {
    id: 'ch2x-l3',
    title: "CSS Grid, la mise en page moderne",
    icon: '🔲',
    explanation: [
      { type:'text', heading:"Flexbox en une ligne, Grid en deux dimensions", html:
        "<p>Flexbox aligne des éléments sur UNE seule direction (ligne OU colonne). <code>display: grid</code> permet de créer un vrai quadrillage avec des LIGNES et des COLONNES en même temps — parfait pour des galeries, des catalogues de produits, ou la mise en page générale d'une page entière.</p>" },
      { type:'code', code: ".grille {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;  /* 3 colonnes de largeur égale */\n  gap: 20px;                            /* espace entre les cases */\n}" },
      { type:'text', heading:"L'unité fr et repeat()", html:
        "<p><code>fr</code> (\"fraction\") représente une part de l'espace disponible. <code>1fr 2fr</code> = 2 colonnes, la deuxième deux fois plus large. <code>repeat(3, 1fr)</code> est un raccourci pour répéter \"1fr\" 3 fois, très utilisé pour ne pas se répéter dans le code.</p>" },
      { type:'code', code: "grid-template-columns: repeat(4, 1fr);        /* 4 colonnes égales */\ngrid-template-columns: repeat(3, minmax(150px, 1fr)); /* jamais plus petit que 150px ! */" },
      { type:'text', heading:"Faire qu'un élément prenne plusieurs cases", html:
        "<p><code>grid-column: span 2;</code> fait qu'un élément occupe 2 colonnes au lieu d'une seule — pratique pour mettre en avant un article ou une image plus grande au milieu d'une grille normale.</p>" },
      { type:'code', code: ".grand-article {\n  grid-column: span 2;\n  grid-row: span 2;\n}" },
      { type:'tip', html:"<code>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</code> est une astuce magique : le nombre de colonnes s'adapte AUTOMATIQUEMENT à la largeur de l'écran, sans même écrire de media query !" },
      { type:'demo', tabs:[
        { type:'html', starter:'<div class="grille">\n  <div class="case">1</div>\n  <div class="case">2</div>\n  <div class="case grand">3 (plus grand)</div>\n  <div class="case">4</div>\n</div>', readonly:true },
        { type:'css', starter:'.grille {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.case {\n  background: dodgerblue;\n  color: white;\n  padding: 30px;\n  text-align: center;\n  border-radius: 8px;\n}\n.grand {\n  grid-column: span 2;\n  background: crimson;\n}' }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Transforme <code>.grille</code> en grille CSS avec <code>display: grid;</code> et <code>grid-template-columns: repeat(3, 1fr);</code> (3 colonnes égales).",
        tabs: [
          { type:'html', starter:'<div class="grille">\n  <div class="case">A</div>\n  <div class="case">B</div>\n  <div class="case">C</div>\n</div>', readonly:true },
          { type:'css', starter:'.grille {\n  \n}\n.case {\n  background: teal;\n  color: white;\n  padding: 20px;\n  text-align: center;\n}' }
        ],
        hints: ["display: grid; grid-template-columns: repeat(3, 1fr);"],
        solution: { css: '.grille {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n.case {\n  background: teal;\n  color: white;\n  padding: 20px;\n  text-align: center;\n}' },
        check(doc, win, C){
          if(C.style('.grille', 'display') !== 'grid') return { success:false, message:"Il manque display: grid; sur .grille." };
          const cols = C.style('.grille', 'gridTemplateColumns');
          if(!cols || cols.trim().split(/\s+/).length < 3) return { success:false, message:"Il faut 3 colonnes (repeat(3, 1fr))." };
          return { success:true, message:"Ta première grille CSS fonctionne !" };
        }
      },
      moyen: {
        instructions: "Ajoute un espacement de 16px entre les cases avec <code>gap: 16px;</code>, et fais en sorte que la case <code>.grande</code> occupe 2 colonnes avec <code>grid-column: span 2;</code>.",
        tabs: [
          { type:'html', starter:'<div class="grille">\n  <div class="case grande">Grande case</div>\n  <div class="case">B</div>\n  <div class="case">C</div>\n</div>', readonly:true },
          { type:'css', starter:'.grille {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  \n}\n.case {\n  background: teal;\n  color: white;\n  padding: 20px;\n}' }
        ],
        hints: ["gap: 16px; sur .grille", ".grande { grid-column: span 2; }"],
        solution: { css: '.grille {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.case {\n  background: teal;\n  color: white;\n  padding: 20px;\n}\n.grande {\n  grid-column: span 2;\n}' },
        check(doc, win, C, logs, errors, raw){
          const gap = C.style('.grille', 'gap') || C.style('.grille', 'columnGap');
          if(!gap || parseInt(gap) < 10) return { success:false, message:"Il manque un gap d'au moins 16px." };
          const css = (raw && raw.css || '').toLowerCase().replace(/\s+/g, ' ');
          if(!/\.grande\s*\{[^}]*grid-column[^}]*span/.test(css)) return { success:false, message:"Il manque grid-column: span 2; sur .grande." };
          return { success:true, message:"Tu sais faire varier la taille des cases dans une grille !" };
        }
      },
      difficile: {
        instructions: "Crée une grille responsive AUTOMATIQUE avec <code>grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));</code> : le nombre de colonnes s'adaptera tout seul à la largeur disponible.",
        tabs: [
          { type:'html', starter:'<div class="galerie">\n  <div class="photo">1</div>\n  <div class="photo">2</div>\n  <div class="photo">3</div>\n  <div class="photo">4</div>\n  <div class="photo">5</div>\n</div>', readonly:true },
          { type:'css', starter:'.photo {\n  background: slateblue;\n  color: white;\n  padding: 40px;\n  text-align: center;\n  border-radius: 8px;\n}' }
        ],
        hints: [".galerie { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 14px; }"],
        solution: { css: '.galerie {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 14px;\n}\n.photo {\n  background: slateblue;\n  color: white;\n  padding: 40px;\n  text-align: center;\n  border-radius: 8px;\n}' },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '').toLowerCase().replace(/\s+/g, ' ');
          if(!css.includes('display: grid') && !css.includes('display:grid')) return { success:false, message:"Il manque display: grid; sur .galerie." };
          if(!css.includes('auto-fit')) return { success:false, message:"Il manque repeat(auto-fit, ...) pour une grille qui s'adapte toute seule." };
          if(!css.includes('minmax')) return { success:false, message:"Il manque minmax(...) pour donner une taille minimum aux cases." };
          return { success:true, message:"Une grille responsive sans la moindre media query, du grand art !" };
        }
      }
    }
  },

  // ============ LEÇON 4 : PSEUDO-CLASSES ET PSEUDO-ÉLÉMENTS ============
  {
    id: 'ch2x-l4',
    title: "Pseudo-classes et pseudo-éléments avancés",
    icon: '🎭',
    explanation: [
      { type:'text', heading:"::before et ::after : ajouter du contenu en CSS", html:
        "<p><code>::before</code> et <code>::after</code> insèrent un élément \"fantôme\" juste avant ou après le contenu réel, SANS toucher au HTML. Ils ont TOUJOURS besoin d'une propriété <code>content</code> (même vide : <code>content: \"\";</code>) pour apparaître.</p>" },
      { type:'code', code: ".citation::before {\n  content: \"« \";\n  font-weight: bold;\n  color: gray;\n}\n.citation::after {\n  content: \" »\";\n}" },
      { type:'text', heading:"Une astuce très utilisée : les badges et rubans", html:
        "<p>Combiné avec <code>position: absolute</code>, <code>::before</code> permet de créer un badge \"PROMO\" ou un ruban décoratif sans ajouter de <code>&lt;span&gt;</code> supplémentaire dans le HTML.</p>" },
      { type:'code', code: ".produit {\n  position: relative;\n}\n.produit.promo::before {\n  content: \"PROMO\";\n  position: absolute;\n  top: 10px;\n  left: -8px;\n  background: crimson;\n  color: white;\n  padding: 2px 10px;\n  transform: rotate(-8deg);\n}" },
      { type:'text', heading:"Les pseudo-classes de position dans une liste", html:
        "<p><code>:first-child</code> et <code>:last-child</code> ciblent le premier ou dernier enfant d'un parent. <code>:nth-child(2)</code> cible le 2ᵉ précisément. <code>:nth-child(odd)</code> / <code>:nth-child(even)</code> ciblent une ligne sur deux — parfait pour \"zébrer\" un tableau !</p>" },
      { type:'code', code: "tr:nth-child(even) {\n  background: #f2f2f2;  /* une ligne sur deux légèrement grisée */\n}\nli:first-child {\n  font-weight: bold;\n}" },
      { type:'text', heading:":not() et :focus-within", html:
        "<p><code>:not(.actif)</code> cible TOUT SAUF ce qui a la classe <code>actif</code>. <code>:focus-within</code> s'applique à un élément QUAND un de ses enfants a le focus — la technique numéro 1 pour créer un menu déroulant en CSS pur, sans une seule ligne de JavaScript !</p>" },
      { type:'code', code: ".menu:hover .sous-menu, .menu:focus-within .sous-menu {\n  display: block;  /* le sous-menu apparaît au survol OU au clic clavier */\n}" },
      { type:'tip', html:"Un menu déroulant CSS pur fonctionne comme ceci : le <code>.sous-menu</code> est caché par défaut (<code>display: none;</code>), et seul <code>:hover</code>/<code>:focus-within</code> sur le parent le révèle." },
      { type:'demo', tabs:[
        { type:'html', starter:'<blockquote class="citation">Le code, c\'est de la magie qu\'on peut expliquer.</blockquote>\n<ul>\n  <li>Pomme</li>\n  <li>Banane</li>\n  <li>Cerise</li>\n</ul>', readonly:true },
        { type:'css', starter:'.citation::before { content: "« "; color: gray; font-weight: bold; }\n.citation::after { content: " »"; color: gray; font-weight: bold; }\nli:nth-child(even) { background: #f0f0f0; }\nli:first-child { color: crimson; font-weight: bold; }' }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Ajoute un <code>::before</code> à <code>.alerte</code> qui affiche <code>\"⚠️ \"</code> avant le texte, grâce à <code>content: \"⚠️ \";</code>.",
        tabs: [
          { type:'html', starter:'<div class="alerte">Attention à cette information !</div>', readonly:true },
          { type:'css', starter:'.alerte {\n  padding: 12px;\n  background: #fff3cd;\n  \n}' }
        ],
        hints: [".alerte::before { content: \"⚠️ \"; }"],
        solution: { css: '.alerte {\n  padding: 12px;\n  background: #fff3cd;\n}\n.alerte::before {\n  content: "⚠️ ";\n}' },
        check(doc, win, C){
          const content = C.pseudoStyle('.alerte', '::before', 'content');
          if(!content || content === 'none' || content === '""') return { success:false, message:"Il manque un ::before avec un content non vide sur .alerte." };
          return { success:true, message:"Tu ajoutes du contenu visuel en pur CSS !" };
        }
      },
      moyen: {
        instructions: "Zèbre le tableau : donne aux lignes paires (<code>tr:nth-child(even)</code>) un fond gris clair <code>#f2f2f2</code>.",
        tabs: [
          { type:'html', starter:'<table>\n  <tr><td>Ligne 1</td></tr>\n  <tr><td>Ligne 2</td></tr>\n  <tr><td>Ligne 3</td></tr>\n  <tr><td>Ligne 4</td></tr>\n</table>', readonly:true },
          { type:'css', starter:'table { width: 100%; border-collapse: collapse; }\ntd { padding: 10px; }\n' }
        ],
        hints: ["tr:nth-child(even) { background: #f2f2f2; }"],
        solution: { css: 'table { width: 100%; border-collapse: collapse; }\ntd { padding: 10px; }\ntr:nth-child(even) { background: #f2f2f2; }' },
        check(doc, win, C){
          const rows = C.all('tr');
          if(rows.length < 4) return { success:false, message:"Il faut au moins 4 lignes dans le tableau." };
          const bg2 = getComputedStyle(rows[1]).backgroundColor;
          const bg1 = getComputedStyle(rows[0]).backgroundColor;
          if(bg2 === bg1) return { success:false, message:"Les lignes paires devraient avoir un fond différent des lignes impaires." };
          return { success:true, message:"Ton tableau est zébré comme un vrai tableau de données professionnel !" };
        }
      },
      difficile: {
        instructions: "Crée un menu déroulant 100% CSS : <code>.sous-menu</code> est caché (<code>display: none;</code>) par défaut, et devient visible (<code>display: block;</code>) quand on survole <code>.menu</code> grâce à <code>.menu:hover .sous-menu</code>.",
        tabs: [
          { type:'html', starter:'<div class="menu">\n  Produits ▾\n  <div class="sous-menu">\n    <a href="#">Chaussures</a>\n    <a href="#">Vêtements</a>\n  </div>\n</div>', readonly:true },
          { type:'css', starter:'.menu {\n  position: relative;\n  padding: 12px 20px;\n  background: #222;\n  color: white;\n  width: 150px;\n}\n.sous-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background: white;\n  color: #222;\n  width: 150px;\n  \n}\n.sous-menu a {\n  display: block;\n  padding: 10px;\n}' }
        ],
        hints: [".sous-menu { display: none; }", ".menu:hover .sous-menu { display: block; }"],
        solution: { css: '.menu {\n  position: relative;\n  padding: 12px 20px;\n  background: #222;\n  color: white;\n  width: 150px;\n}\n.sous-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background: white;\n  color: #222;\n  width: 150px;\n  display: none;\n}\n.sous-menu a {\n  display: block;\n  padding: 10px;\n}\n.menu:hover .sous-menu {\n  display: block;\n}' },
        check(doc, win, C){
          if(C.style('.sous-menu', 'display') !== 'none') return { success:false, message:"Le sous-menu doit être caché (display: none;) par défaut." };
          if(C.style('.menu', 'position') !== 'relative') return { success:false, message:"Il manque position: relative; sur .menu pour bien positionner le sous-menu." };
          return { success:true, message:"Un menu déroulant sans une seule ligne de JavaScript, bravo !" };
        }
      }
    }
  },

  // ============ LEÇON 5 : VARIABLES CSS ET CASCADE ============
  {
    id: 'ch2x-l5',
    title: "Variables CSS et la cascade",
    icon: '🎨',
    explanation: [
      { type:'text', heading:"Des couleurs qu'on ne tape qu'une seule fois", html:
        "<p>Une <strong>variable CSS</strong> (ou \"custom property\") se déclare avec deux tirets : <code>--nom-de-variable: valeur;</code>, en général sur <code>:root</code> (la racine de toute la page). On la réutilise ensuite partout avec <code>var(--nom-de-variable)</code>. Change UNE ligne, et toute la couleur du site change !</p>" },
      { type:'code', code: ":root {\n  --couleur-principale: #ff6b35;\n  --radius: 12px;\n}\nbutton {\n  background: var(--couleur-principale);\n  border-radius: var(--radius);\n}" },
      { type:'text', heading:"Une valeur de secours", html:
        "<p><code>var(--nom, valeur-de-secours)</code> fournit une valeur par défaut si la variable n'existe pas. Très utile pour des composants réutilisables sur plusieurs projets.</p>" },
      { type:'code', code: "color: var(--texte-clair, white);" },
      { type:'text', heading:"La cascade : qui gagne quand deux règles se contredisent ?", html:
        "<p>Quand plusieurs règles CSS visent le même élément, le navigateur choisit selon la <strong>spécificité</strong> : un <code>id</code> (<code>#titre</code>) bat une <code>classe</code> (<code>.titre</code>), qui bat une <code>balise</code> (<code>h1</code>). À spécificité égale, la règle écrite EN DERNIER dans le fichier gagne.</p>" },
      { type:'code', code: "h1 { color: blue; }        /* spécificité : 1 (balise) */\n.titre { color: red; }    /* spécificité : 10 (classe) → GAGNE */\n#principal { color: green; } /* spécificité : 100 (id) → GAGNE ENCORE PLUS */" },
      { type:'tip', html:"<code>!important</code> force une règle à gagner quoi qu'il arrive — mais évite-le en vrai projet, il devient vite impossible à débugger ! Préfère toujours une meilleure organisation des classes." },
      { type:'demo', tabs:[
        { type:'html', starter:'<div class="carte">\n  <h2>Titre de la carte</h2>\n  <button>Action</button>\n</div>', readonly:true },
        { type:'css', starter:':root {\n  --couleur: teal;\n  --radius: 14px;\n}\n.carte {\n  border: 2px solid var(--couleur);\n  border-radius: var(--radius);\n  padding: 20px;\n}\nbutton {\n  background: var(--couleur);\n  color: white;\n  border: none;\n  border-radius: var(--radius);\n  padding: 10px 18px;\n}' }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Déclare une variable <code>--couleur-theme: indigo;</code> sur <code>:root</code>, puis utilise-la avec <code>var(--couleur-theme)</code> pour la couleur de fond de <code>.bouton</code>.",
        tabs: [
          { type:'html', starter:'<button class="bouton">Clique-moi</button>', readonly:true },
          { type:'css', starter:':root {\n  \n}\n.bouton {\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  \n}' }
        ],
        hints: [":root { --couleur-theme: indigo; }", ".bouton { background: var(--couleur-theme); }"],
        solution: { css: ':root {\n  --couleur-theme: indigo;\n}\n.bouton {\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  background: var(--couleur-theme);\n}' },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '');
          if(!/--couleur-theme\s*:/.test(css)) return { success:false, message:"Il manque la déclaration --couleur-theme: ...; sur :root." };
          if(!/var\(\s*--couleur-theme\s*\)/.test(css)) return { success:false, message:"Il faut utiliser var(--couleur-theme) pour appliquer la variable." };
          return { success:true, message:"Ta première variable CSS fonctionne !" };
        }
      },
      moyen: {
        instructions: "Ajoute une 2ᵉ variable <code>--radius: 10px;</code>, et utilise LES DEUX variables (<code>--couleur-theme</code> et <code>--radius</code>) sur <code>.carte</code> ET sur <code>.bouton</code> pour qu'ils partagent le même style.",
        tabs: [
          { type:'html', starter:'<div class="carte">\n  <button class="bouton">Action</button>\n</div>', readonly:true },
          { type:'css', starter:':root {\n  --couleur-theme: teal;\n  \n}\n.carte {\n  border: 2px solid var(--couleur-theme);\n  padding: 20px;\n  \n}\n.bouton {\n  background: var(--couleur-theme);\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  \n}' }
        ],
        hints: [":root { --radius: 10px; }", "Ajoute border-radius: var(--radius); sur .carte ET .bouton."],
        solution: { css: ':root {\n  --couleur-theme: teal;\n  --radius: 10px;\n}\n.carte {\n  border: 2px solid var(--couleur-theme);\n  padding: 20px;\n  border-radius: var(--radius);\n}\n.bouton {\n  background: var(--couleur-theme);\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: var(--radius);\n}' },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '');
          if(!/--radius\s*:/.test(css)) return { success:false, message:"Il manque la déclaration --radius: ...; sur :root." };
          const uses = (css.match(/var\(\s*--radius\s*\)/g) || []).length;
          if(uses < 2) return { success:false, message:"var(--radius) doit être utilisé au moins 2 fois (sur .carte et .bouton)." };
          return { success:true, message:"Un vrai système de design cohérent avec des variables partagées !" };
        }
      },
      difficile: {
        instructions: "Trois règles ciblent <code>.texte</code> : une balise <code>p</code>, une classe <code>.texte</code>, et un id <code>#principal</code>. Sans rien supprimer, ajoute une 4ᵉ règle qui gagne quand même grâce à une meilleure spécificité (combine classe ET id, ou ajoute <code>!important</code> en dernier recours) pour que le texte final soit <code>orange</code>.",
        tabs: [
          { type:'html', starter:'<p id="principal" class="texte">Quelle couleur vais-je avoir ?</p>', readonly:true },
          { type:'css', starter:'p { color: blue; }\n.texte { color: red; }\n#principal { color: green; }\n/* Ajoute ta règle ici pour que le texte devienne orange */' }
        ],
        hints: ["#principal.texte { color: orange; } (id + classe = spécificité encore plus grande)"],
        solution: { css: 'p { color: blue; }\n.texte { color: red; }\n#principal { color: green; }\n#principal.texte { color: orange; }' },
        check(doc, win, C){
          if(!C.colorEquals('.texte', 'color', 'orange')) return { success:false, message:"Le texte final doit être orange malgré les 3 règles concurrentes." };
          return { success:true, message:"Tu maîtrises la spécificité CSS, une compétence rare et précieuse !" };
        }
      }
    }
  },

  // ============ LEÇON 6 : ANIMATIONS AVEC @keyframes ============
  {
    id: 'ch2x-l6',
    title: "Animations avec @keyframes",
    icon: '🎬',
    explanation: [
      { type:'text', heading:"Au-delà du survol : de vraies animations", html:
        "<p><code>transition</code> ne réagit qu'à un changement (comme <code>:hover</code>). <code>@keyframes</code> permet de créer une VRAIE animation, avec plusieurs étapes, qui peut se jouer automatiquement au chargement de la page ou en boucle infinie.</p>" },
      { type:'code', code: "@keyframes apparition {\n  from { opacity: 0; transform: translateY(20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n.carte {\n  animation: apparition 0.6s ease-out;\n}" },
      { type:'text', heading:"Plusieurs étapes avec des pourcentages", html:
        "<p>Au lieu de <code>from</code>/<code>to</code> (0% et 100%), on peut définir des étapes intermédiaires précises avec des pourcentages — utile pour un effet de rebond ou de pulsation.</p>" },
      { type:'code', code: "@keyframes pulsation {\n  0%   { transform: scale(1); }\n  50%  { transform: scale(1.15); }\n  100% { transform: scale(1); }\n}\n.bouton-attirant {\n  animation: pulsation 1.5s infinite;\n}" },
      { type:'text', heading:"Le raccourci animation", html:
        "<p><code>animation: nom durée timing-function délai itération direction;</code> — les plus utilisés : <code>infinite</code> (boucle sans fin), <code>ease-out</code> (ralentit à la fin, parfait pour une apparition), <code>alternate</code> (fait l'aller-retour au lieu de recommencer brutalement).</p>" },
      { type:'code', code: "animation: pulsation 1.5s ease-in-out infinite alternate;" },
      { type:'tip', html:"Anime <code>transform</code> et <code>opacity</code> en priorité : ce sont les seules propriétés que le navigateur peut animer de façon ultra fluide, même sur les vieux téléphones !" },
      { type:'demo', tabs:[
        { type:'html', starter:'<div class="carte">J\'apparais en douceur</div>\n<button class="cta">Je pulse !</button>', readonly:true },
        { type:'css', starter:'@keyframes apparition {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n@keyframes pulsation {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.08); }\n}\n.carte {\n  padding: 20px;\n  background: white;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.15);\n  animation: apparition 0.6s ease-out;\n  margin-bottom: 16px;\n}\n.cta {\n  padding: 12px 24px;\n  background: crimson;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  animation: pulsation 1.2s ease-in-out infinite;\n}' }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Crée une animation <code>@keyframes apparition</code> qui va de <code>opacity: 0;</code> à <code>opacity: 1;</code>, et applique-la à <code>.carte</code> avec <code>animation: apparition 1s;</code>.",
        tabs: [
          { type:'html', starter:'<div class="carte">J\'apparais</div>', readonly:true },
          { type:'css', starter:'.carte {\n  padding: 20px;\n  background: lightyellow;\n  \n}\n/* @keyframes ici */' }
        ],
        hints: ["@keyframes apparition { from { opacity: 0; } to { opacity: 1; } }", ".carte { animation: apparition 1s; }"],
        solution: { css: '.carte {\n  padding: 20px;\n  background: lightyellow;\n  animation: apparition 1s;\n}\n@keyframes apparition {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}' },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '');
          if(!/@keyframes\s+\w+/.test(css)) return { success:false, message:"Il manque une règle @keyframes." };
          const animName = C.style('.carte', 'animationName');
          if(!animName || animName === 'none') return { success:false, message:"Il manque animation: ...; sur .carte pour utiliser ton @keyframes." };
          return { success:true, message:"Ta première vraie animation CSS !" };
        }
      },
      moyen: {
        instructions: "Crée une animation de pulsation avec 3 étapes (<code>0%</code>, <code>50%</code>, <code>100%</code>) qui alterne entre <code>scale(1)</code> et <code>scale(1.1)</code>, et fais-la tourner EN BOUCLE avec <code>infinite</code>.",
        tabs: [
          { type:'html', starter:'<button class="cta">Clique-moi !</button>', readonly:true },
          { type:'css', starter:'.cta {\n  padding: 14px 28px;\n  background: teal;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  \n}' }
        ],
        hints: ["@keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }", ".cta { animation: pulse 1s infinite; }"],
        solution: { css: '.cta {\n  padding: 14px 28px;\n  background: teal;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  animation: pulse 1s infinite;\n}\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n}' },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '').toLowerCase();
          if(!css.includes('infinite')) return { success:false, message:"L'animation doit tourner en boucle avec infinite." };
          if(!/@keyframes[^{]*\{[^}]*0%/.test(css.replace(/\s+/g,' '))) return { success:false, message:"Il manque une étape à 0% (ou 0%,100%) dans @keyframes." };
          if(!css.includes('50%')) return { success:false, message:"Il manque l'étape intermédiaire à 50%." };
          return { success:true, message:"Un bouton qui attire vraiment l'œil, en boucle infinie !" };
        }
      },
      difficile: {
        instructions: "Combine <code>transition</code> ET <code>@keyframes</code> : la carte a une animation d'apparition au chargement (<code>animation: apparition 0.6s ease-out;</code>) ET une transition fluide au survol (<code>transition: transform 0.3s;</code> avec <code>transform: translateY(-8px)</code> sur <code>:hover</code>).",
        tabs: [
          { type:'html', starter:'<div class="carte">Double effet !</div>', readonly:true },
          { type:'css', starter:'' }
        ],
        hints: [
          "@keyframes apparition { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }",
          ".carte { animation: apparition 0.6s ease-out; transition: transform 0.3s; }",
          ".carte:hover { transform: translateY(-8px); }"
        ],
        solution: { css: '@keyframes apparition {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n.carte {\n  padding: 24px;\n  background: white;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.15);\n  border-radius: 12px;\n  animation: apparition 0.6s ease-out;\n  transition: transform 0.3s;\n}\n.carte:hover {\n  transform: translateY(-8px);\n}' },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '').toLowerCase().replace(/\s+/g, ' ');
          if(!css.includes('@keyframes')) return { success:false, message:"Il manque une règle @keyframes pour l'apparition." };
          const animName = C.style('.carte', 'animationName');
          if(!animName || animName === 'none') return { success:false, message:"Il manque animation: ...; sur .carte." };
          if(!css.includes('transition')) return { success:false, message:"Il manque une transition pour l'effet au survol." };
          if(!/:hover\s*\{[^}]*transform/.test(css)) return { success:false, message:"Il manque transform sur :hover." };
          return { success:true, message:"Animation d'entrée + interaction fluide, un vrai travail de niveau professionnel !" };
        }
      }
    }
  },

  // ============ LEÇON 7 : HTML SÉMANTIQUE ET ACCESSIBLE, NIVEAU PRO ============
  {
    id: 'ch2x-l7',
    title: "HTML sémantique et accessible, niveau pro",
    icon: '♿',
    explanation: [
      { type:'text', heading:"article, section, aside, figure : le bon tag pour le bon usage", html:
        "<p><code>&lt;article&gt;</code> = un contenu autonome qui aurait du sens tout seul (un article de blog, une fiche produit). <code>&lt;section&gt;</code> = un regroupement thématique à l'intérieur d'une page. <code>&lt;aside&gt;</code> = un contenu secondaire (encadré, pub, lien connexe). <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code> = une image AVEC sa légende, liées ensemble.</p>" },
      { type:'code', code: "<article>\n  <h2>Notre spécialité du jour</h2>\n  <figure>\n    <img src=\"tarte.jpg\" alt=\"Tarte aux pommes\">\n    <figcaption>Notre tarte aux pommes maison</figcaption>\n  </figure>\n</article>" },
      { type:'text', heading:"fieldset et legend pour de vrais formulaires", html:
        "<p>Dans un formulaire un peu complexe, <code>&lt;fieldset&gt;</code> regroupe visuellement des champs liés, et <code>&lt;legend&gt;</code> leur donne un titre — comme \"Informations de livraison\" qui regroupe adresse, ville, code postal.</p>" },
      { type:'code', code: "<fieldset>\n  <legend>Informations de livraison</legend>\n  <label for=\"adresse\">Adresse</label>\n  <input id=\"adresse\" type=\"text\">\n</fieldset>" },
      { type:'text', heading:"L'accessibilité n'est pas optionnelle sur un vrai site", html:
        "<p>Chaque <code>&lt;img&gt;</code> a besoin d'un <code>alt</code> qui décrit VRAIMENT l'image (pas juste \"image1.jpg\"). Chaque <code>&lt;input&gt;</code> a besoin d'un <code>&lt;label for=\"...\"&gt;</code> associé par son <code>id</code> — sinon les personnes malvoyantes utilisant un lecteur d'écran ne savent pas à quoi sert le champ. <code>aria-label</code> ajoute une description invisible à l'écran mais lue par ces lecteurs, pour un bouton qui n'a qu'une icône par exemple.</p>" },
      { type:'code', code: "<button aria-label=\"Fermer la fenêtre\">✕</button>\n<label for=\"email\">Ton email</label>\n<input id=\"email\" type=\"email\">" },
      { type:'tip', html:"Un vrai recruteur ou client professionnel remarque IMMÉDIATEMENT un site sans <code>alt</code>, sans <code>&lt;label&gt;</code>, ou qui n'utilise que des <code>&lt;div&gt;</code> partout : ce sont des signes de débutant. Utilise toujours le bon tag sémantique !" },
      { type:'demo', tabs:[
        { type:'html', starter:'<article>\n  <h2>Notre spécialité du jour</h2>\n  <figure>\n    <img src="https://placehold.co/200x140/f5deb3/6b4226?text=Tarte" alt="Tarte aux pommes maison, dorée et parsemée de cannelle">\n    <figcaption>Notre tarte aux pommes maison</figcaption>\n  </figure>\n  <p>Préparée chaque matin avec des pommes locales.</p>\n</article>', readonly:true },
        { type:'css', starter:'article { max-width: 300px; font-family: sans-serif; }\nfigcaption { font-style: italic; color: gray; font-size: 14px; }\nimg { border-radius: 8px; }' }
      ]}
    ],
    exercises: {
      facile: {
        instructions: "Structure ce contenu avec <code>&lt;figure&gt;</code> autour de l'image et <code>&lt;figcaption&gt;</code> pour sa légende, et donne à l'image un <code>alt</code> descriptif.",
        tabs: [
          { type:'html', starter:'<!-- Ajoute figure/figcaption ici -->\n<img src="https://placehold.co/200x140" >\n<p>Coucher de soleil sur la mer</p>' },
          { type:'css', starter:'' }
        ],
        hints: ["<figure>\n  <img src=\"...\" alt=\"Coucher de soleil orange sur la mer calme\">\n  <figcaption>Coucher de soleil sur la mer</figcaption>\n</figure>"],
        solution: { html: '<figure>\n  <img src="https://placehold.co/200x140" alt="Coucher de soleil orange sur la mer calme">\n  <figcaption>Coucher de soleil sur la mer</figcaption>\n</figure>' },
        check(doc, win, C){
          if(!C.exists('figure')) return { success:false, message:"Il manque une balise <figure>." };
          if(!C.exists('figcaption')) return { success:false, message:"Il manque une balise <figcaption>." };
          if(!C.childOf('img', 'figure')) return { success:false, message:"L'image doit être À L'INTÉRIEUR de <figure>." };
          const alt = C.attr('img', 'alt');
          if(!alt || alt.length < 5) return { success:false, message:"L'image doit avoir un attribut alt descriptif (pas vide)." };
          return { success:true, message:"Une image bien structurée et accessible !" };
        }
      },
      moyen: {
        instructions: "Regroupe les 2 champs dans un <code>&lt;fieldset&gt;</code> avec une <code>&lt;legend&gt;</code> intitulée \"Coordonnées\", et associe chaque <code>&lt;label&gt;</code> à son <code>&lt;input&gt;</code> via <code>for</code>/<code>id</code>.",
        tabs: [
          { type:'html', starter:'<!-- Utilise fieldset + legend, et relie chaque label à son input -->\nNom\n<input type="text">\nEmail\n<input type="email">' },
          { type:'css', starter:'' }
        ],
        hints: [
          "<fieldset>\n  <legend>Coordonnées</legend>\n  <label for=\"nom\">Nom</label>\n  <input id=\"nom\" type=\"text\">\n  <label for=\"email\">Email</label>\n  <input id=\"email\" type=\"email\">\n</fieldset>"
        ],
        solution: { html: '<fieldset>\n  <legend>Coordonnées</legend>\n  <label for="nom">Nom</label>\n  <input id="nom" type="text">\n  <label for="email">Email</label>\n  <input id="email" type="email">\n</fieldset>' },
        check(doc, win, C){
          if(!C.exists('fieldset')) return { success:false, message:"Il manque un <fieldset>." };
          if(!C.exists('legend')) return { success:false, message:"Il manque une <legend>." };
          const labels = C.all('label');
          if(labels.length < 2) return { success:false, message:"Il faut un <label> pour chaque champ." };
          for(const lbl of labels){
            const forAttr = lbl.getAttribute('for');
            if(!forAttr || !doc.getElementById(forAttr)) return { success:false, message:"Chaque label doit avoir un for=\"...\" correspondant à l'id d'un input." };
          }
          return { success:true, message:"Un formulaire correctement structuré et accessible !" };
        }
      },
      difficile: {
        instructions: "Ce bouton n'a qu'une icône (✕) et serait incompréhensible pour un lecteur d'écran. Ajoute-lui <code>aria-label=\"Fermer\"</code>. Structure aussi la page avec <code>&lt;article&gt;</code> pour le contenu principal ET <code>&lt;aside&gt;</code> pour l'encart \"Voir aussi\" à côté.",
        tabs: [
          { type:'html', starter:'<!-- Structure avec article + aside, et ajoute aria-label au bouton -->\n<button>✕</button>\n<div>\n  <h2>Article principal</h2>\n  <p>Contenu de l\'article...</p>\n</div>\n<div>\n  <h3>Voir aussi</h3>\n  <p>Liens connexes...</p>\n</div>' },
          { type:'css', starter:'' }
        ],
        hints: [
          "<button aria-label=\"Fermer\">✕</button>",
          "<article><h2>Article principal</h2><p>...</p></article>",
          "<aside><h3>Voir aussi</h3><p>...</p></aside>"
        ],
        solution: { html: '<button aria-label="Fermer">✕</button>\n<article>\n  <h2>Article principal</h2>\n  <p>Contenu de l\'article...</p>\n</article>\n<aside>\n  <h3>Voir aussi</h3>\n  <p>Liens connexes...</p>\n</aside>' },
        check(doc, win, C){
          const ariaOk = C.hasAttr('button', 'aria-label');
          if(!ariaOk) return { success:false, message:"Il manque aria-label=\"Fermer\" sur le bouton." };
          if(!C.exists('article')) return { success:false, message:"Il manque une balise <article> pour le contenu principal." };
          if(!C.exists('aside')) return { success:false, message:"Il manque une balise <aside> pour l'encart secondaire." };
          return { success:true, message:"Une page sémantique et accessible, digne d'un vrai site professionnel !" };
        }
      }
    }
  },

  // ============ EXAMEN 1 ============
  {
    id: 'ch2x-l8',
    title: "🎓 Examen 1 : Site vitrine — Pâtisserie \"Douceur Sucrée\"",
    icon: '🧁',
    explanation: [
      { type:'text', heading:"Ton premier vrai contrat client !", html:
        "<p>La pâtisserie <strong>\"Douceur Sucrée\"</strong> te demande un site vitrine d'une seule page. Voici le <strong>cahier des charges</strong> exact que tu dois respecter — comme un vrai freelance recevrait d'un client.</p>" },
      { type:'text', heading:"Sections obligatoires", html:
        "<ul><li><code>&lt;header&gt;</code> avec le nom <strong>\"Douceur Sucrée\"</strong> et une navigation (<code>&lt;nav&gt;</code>) avec 3 liens : Accueil, Spécialités, Contact — en <code>display: flex;</code></li><li>Une section <code>&lt;section class=\"hero\"&gt;</code> : un grand titre d'accroche + un bouton \"Découvrir\"</li><li>Une section <code>&lt;section class=\"specialites\"&gt;</code> avec AU MOINS 3 <code>&lt;article class=\"produit\"&gt;</code> (image + nom + prix), alignés avec Flexbox ou Grid</li><li>Une section <code>&lt;section class=\"apropos\"&gt;</code> avec une image et un texte de présentation</li><li>Un <code>&lt;footer&gt;</code> avec les informations de contact</li></ul>" },
      { type:'text', heading:"Images à utiliser (fournies, pas besoin d'en chercher)", html:
        "<p>Utilise ces adresses de substitution (elles fonctionnent vraiment et sont aux couleurs du thème) :</p><ul><li>Photo de fond hero : <code>https://placehold.co/1200x500/f5deb3/6b4226?text=Notre+P%C3%A2tisserie</code></li><li>Produit 1 : <code>https://placehold.co/300x220/ffe4ec/c2185b?text=Tarte+aux+Fraises</code></li><li>Produit 2 : <code>https://placehold.co/300x220/fff3cd/6b4226?text=Croissant</code></li><li>Produit 3 : <code>https://placehold.co/300x220/e8d5c4/6b4226?text=Macarons</code></li><li>Photo \"à propos\" : <code>https://placehold.co/350x300/f5deb3/6b4226?text=Notre+Boutique</code></li></ul>" },
      { type:'tip', html:"Cet examen se construit en 3 étapes (comme les 3 niveaux d'exercice) : d'abord la STRUCTURE HTML complète, puis la MISE EN PAGE CSS, puis les FINITIONS (ombres, transitions, coins arrondis). Chaque étape se base sur la précédente." }
    ],
    exercises: {
      facile: {
        instructions: "ÉTAPE 1 — STRUCTURE HTML. Crée la structure sémantique complète : <code>&lt;header&gt;</code> (nom + <code>&lt;nav&gt;</code> avec 3 liens), <code>&lt;section class=\"hero\"&gt;</code> (titre + bouton), <code>&lt;section class=\"specialites\"&gt;</code> avec 3 <code>&lt;article class=\"produit\"&gt;</code> (chacun avec une image ayant un <code>alt</code>, un nom, un prix), <code>&lt;section class=\"apropos\"&gt;</code> (image + texte), et <code>&lt;footer&gt;</code>. Aucun style requis pour l'instant.",
        tabs: [
          { type:'html', starter:'<!-- Construis toute la structure HTML sémantique ici -->\n' },
          { type:'css', starter:'' }
        ],
        hints: [
          "<header><h1>Douceur Sucrée</h1><nav><a href=\"#\">Accueil</a><a href=\"#\">Spécialités</a><a href=\"#\">Contact</a></nav></header>",
          "<section class=\"specialites\"><article class=\"produit\"><img src=\"...\" alt=\"...\"><h3>...</h3><p>Prix</p></article> (x3)</section>",
          "N'oublie pas <footer> à la fin."
        ],
        solution: { html: '<header>\n  <h1>Douceur Sucrée</h1>\n  <nav>\n    <a href="#accueil">Accueil</a>\n    <a href="#specialites">Spécialités</a>\n    <a href="#contact">Contact</a>\n  </nav>\n</header>\n<section class="hero">\n  <h2>Des douceurs faites avec amour, chaque jour</h2>\n  <button>Découvrir</button>\n</section>\n<section class="specialites">\n  <article class="produit">\n    <img src="https://placehold.co/300x220/ffe4ec/c2185b?text=Tarte+aux+Fraises" alt="Tarte aux fraises fraîches">\n    <h3>Tarte aux fraises</h3>\n    <p>6,50 €</p>\n  </article>\n  <article class="produit">\n    <img src="https://placehold.co/300x220/fff3cd/6b4226?text=Croissant" alt="Croissant au beurre doré">\n    <h3>Croissant</h3>\n    <p>1,80 €</p>\n  </article>\n  <article class="produit">\n    <img src="https://placehold.co/300x220/e8d5c4/6b4226?text=Macarons" alt="Assortiment de macarons colorés">\n    <h3>Macarons (x6)</h3>\n    <p>9,00 €</p>\n  </article>\n</section>\n<section class="apropos">\n  <img src="https://placehold.co/350x300/f5deb3/6b4226?text=Notre+Boutique" alt="Devanture de la boutique Douceur Sucrée">\n  <p>Depuis 2015, notre pâtisserie familiale prépare chaque douceur à la main, avec des ingrédients locaux.</p>\n</section>\n<footer>\n  <p>Douceur Sucrée — 12 rue des Gourmands — 01 23 45 67 89</p>\n</footer>' },
        check(doc, win, C){
          if(!C.exists('header')) return { success:false, message:"Il manque un <header>." };
          if(!C.exists('header nav')) return { success:false, message:"Il manque un <nav> dans le header." };
          if(C.count('header nav a') < 3) return { success:false, message:"La navigation doit avoir au moins 3 liens." };
          if(!C.exists('.hero')) return { success:false, message:"Il manque une section .hero." };
          if(!C.exists('.hero button')) return { success:false, message:"Il manque un bouton dans .hero." };
          if(!C.exists('.specialites')) return { success:false, message:"Il manque une section .specialites." };
          if(C.count('.specialites .produit') < 3) return { success:false, message:"Il faut au moins 3 .produit dans .specialites." };
          const imgs = C.all('.produit img');
          for(const img of imgs){ if(!img.getAttribute('alt')) return { success:false, message:"Chaque image de produit doit avoir un attribut alt." }; }
          if(!C.exists('.apropos')) return { success:false, message:"Il manque une section .apropos." };
          if(!C.exists('footer')) return { success:false, message:"Il manque un <footer>." };
          return { success:true, message:"Structure HTML complète et sémantique, l'étape 1 est validée !" };
        }
      },
      moyen: {
        instructions: "ÉTAPE 2 — MISE EN PAGE CSS. Mets le <code>&lt;nav&gt;</code> en <code>display: flex;</code> avec un <code>gap</code>. Mets <code>.specialites</code> en <code>display: flex;</code> (ou grid) pour aligner les 3 produits côte à côte avec un <code>gap</code>. Mets <code>.apropos</code> en <code>display: flex;</code> pour mettre l'image et le texte côte à côte.",
        tabs: [
          { type:'html', starter:'<header>\n  <h1>Douceur Sucrée</h1>\n  <nav>\n    <a href="#accueil">Accueil</a>\n    <a href="#specialites">Spécialités</a>\n    <a href="#contact">Contact</a>\n  </nav>\n</header>\n<section class="hero">\n  <h2>Des douceurs faites avec amour, chaque jour</h2>\n  <button>Découvrir</button>\n</section>\n<section class="specialites">\n  <article class="produit">\n    <img src="https://placehold.co/300x220/ffe4ec/c2185b?text=Tarte+aux+Fraises" alt="Tarte aux fraises fraîches">\n    <h3>Tarte aux fraises</h3>\n    <p>6,50 €</p>\n  </article>\n  <article class="produit">\n    <img src="https://placehold.co/300x220/fff3cd/6b4226?text=Croissant" alt="Croissant au beurre doré">\n    <h3>Croissant</h3>\n    <p>1,80 €</p>\n  </article>\n  <article class="produit">\n    <img src="https://placehold.co/300x220/e8d5c4/6b4226?text=Macarons" alt="Assortiment de macarons colorés">\n    <h3>Macarons (x6)</h3>\n    <p>9,00 €</p>\n  </article>\n</section>\n<section class="apropos">\n  <img src="https://placehold.co/350x300/f5deb3/6b4226?text=Notre+Boutique" alt="Devanture de la boutique Douceur Sucrée">\n  <p>Depuis 2015, notre pâtisserie familiale prépare chaque douceur à la main, avec des ingrédients locaux.</p>\n</section>\n<footer>\n  <p>Douceur Sucrée — 12 rue des Gourmands — 01 23 45 67 89</p>\n</footer>', readonly:true },
          { type:'css', starter:'/* Mets en page avec Flexbox : header nav, .specialites, .apropos */\nimg { max-width: 100%; }' }
        ],
        hints: [
          "header nav { display: flex; gap: 20px; }",
          ".specialites { display: flex; gap: 20px; }",
          ".apropos { display: flex; gap: 20px; align-items: center; }"
        ],
        solution: { css: 'header nav { display: flex; gap: 20px; }\n.specialites { display: flex; gap: 20px; }\n.apropos { display: flex; gap: 20px; align-items: center; }\nimg { max-width: 100%; }' },
        check(doc, win, C){
          if(C.style('header nav', 'display') !== 'flex') return { success:false, message:"header nav doit être en display: flex;" };
          if(C.style('.specialites', 'display') !== 'flex' && C.style('.specialites', 'display') !== 'grid') return { success:false, message:".specialites doit être en display: flex; ou grid." };
          if(C.style('.apropos', 'display') !== 'flex' && C.style('.apropos', 'display') !== 'grid') return { success:false, message:".apropos doit être en display: flex; ou grid." };
          return { success:true, message:"Ta mise en page prend forme, étape 2 validée !" };
        }
      },
      difficile: {
        instructions: "ÉTAPE 3 — FINITIONS. Ajoute des coins arrondis et une ombre (<code>box-shadow</code>) sur chaque <code>.produit</code>, avec une transition fluide et un effet <code>transform: translateY(...)</code> au survol. Le bouton \"Découvrir\" doit aussi avoir une transition sur son survol. Ajoute enfin une media query (<code>max-width: 700px</code>) qui remet <code>.specialites</code> et <code>.apropos</code> en colonne (<code>flex-direction: column;</code>) sur petit écran.",
        tabs: [
          { type:'html', starter:'<header>\n  <h1>Douceur Sucrée</h1>\n  <nav>\n    <a href="#accueil">Accueil</a>\n    <a href="#specialites">Spécialités</a>\n    <a href="#contact">Contact</a>\n  </nav>\n</header>\n<section class="hero">\n  <h2>Des douceurs faites avec amour, chaque jour</h2>\n  <button>Découvrir</button>\n</section>\n<section class="specialites">\n  <article class="produit">\n    <img src="https://placehold.co/300x220/ffe4ec/c2185b?text=Tarte+aux+Fraises" alt="Tarte aux fraises fraîches">\n    <h3>Tarte aux fraises</h3>\n    <p>6,50 €</p>\n  </article>\n  <article class="produit">\n    <img src="https://placehold.co/300x220/fff3cd/6b4226?text=Croissant" alt="Croissant au beurre doré">\n    <h3>Croissant</h3>\n    <p>1,80 €</p>\n  </article>\n  <article class="produit">\n    <img src="https://placehold.co/300x220/e8d5c4/6b4226?text=Macarons" alt="Assortiment de macarons colorés">\n    <h3>Macarons (x6)</h3>\n    <p>9,00 €</p>\n  </article>\n</section>\n<section class="apropos">\n  <img src="https://placehold.co/350x300/f5deb3/6b4226?text=Notre+Boutique" alt="Devanture de la boutique Douceur Sucrée">\n  <p>Depuis 2015, notre pâtisserie familiale prépare chaque douceur à la main, avec des ingrédients locaux.</p>\n</section>\n<footer>\n  <p>Douceur Sucrée — 12 rue des Gourmands — 01 23 45 67 89</p>\n</footer>', readonly:true },
          { type:'css', starter:'header nav { display: flex; gap: 20px; }\n.specialites { display: flex; gap: 20px; }\n.apropos { display: flex; gap: 20px; align-items: center; }\nimg { max-width: 100%; }\n\n/* Ajoute tes finitions ici : box-shadow, border-radius, transition, transform, media query */' }
        ],
        hints: [
          ".produit { border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.15); transition: transform 0.3s; overflow: hidden; }",
          ".produit:hover { transform: translateY(-6px); }",
          "@media (max-width: 700px) { .specialites, .apropos { flex-direction: column; } }"
        ],
        solution: { css: 'header nav { display: flex; gap: 20px; }\n.specialites { display: flex; gap: 20px; }\n.apropos { display: flex; gap: 20px; align-items: center; }\nimg { max-width: 100%; display: block; }\n.produit {\n  border-radius: 12px;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.15);\n  transition: transform 0.3s;\n  overflow: hidden;\n}\n.produit:hover {\n  transform: translateY(-6px);\n}\n.hero button {\n  transition: background 0.3s;\n}\n.hero button:hover {\n  background: #c2185b;\n  color: white;\n}\n@media (max-width: 700px) {\n  .specialites, .apropos {\n    flex-direction: column;\n  }\n}' },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '').toLowerCase().replace(/\s+/g, ' ');
          const sh = C.style('.produit', 'boxShadow');
          if(!sh || sh === 'none') return { success:false, message:"Il manque un box-shadow sur .produit." };
          const br = C.style('.produit', 'borderTopLeftRadius');
          if(!br || parseFloat(br) < 4) return { success:false, message:"Il manque un border-radius sur .produit." };
          if(!css.includes('transition')) return { success:false, message:"Il manque une transition (sur .produit ou le bouton)." };
          if(!/:hover\s*\{[^}]*transform/.test(css)) return { success:false, message:"Il manque transform sur un :hover (effet au survol)." };
          if(!css.includes('@media')) return { success:false, message:"Il manque une media query pour le responsive." };
          if(!css.includes('flex-direction: column') && !css.includes('flex-direction:column')) return { success:false, message:"La media query doit passer en flex-direction: column;." };
          return { success:true, message:"🎉 Examen 1 réussi ! Un vrai site vitrine professionnel, du HTML sémantique aux finitions responsive." };
        }
      }
    }
  },

  // ============ EXAMEN 2 ============
  {
    id: 'ch2x-l9',
    title: "🎓 Examen 2 : Restaurant \"Le Jardin Gourmand\"",
    icon: '🍽️',
    explanation: [
      { type:'text', heading:"Un projet plus ambitieux", html:
        "<p>Le restaurant <strong>\"Le Jardin Gourmand\"</strong> veut un site plus riche que la pâtisserie : menu déroulant, galerie photo, carte en grille, formulaire de réservation. Voici le cahier des charges complet.</p>" },
      { type:'text', heading:"Sections obligatoires", html:
        "<ul><li><code>&lt;header class=\"entete\"&gt;</code> en <code>position: sticky;</code>, avec un <code>&lt;nav&gt;</code> contenant un item <code>&lt;div class=\"menu-item\"&gt;</code> \"Notre Carte ▾\" qui révèle un <code>&lt;div class=\"sous-menu\"&gt;</code> au survol (CSS pur, sans JavaScript)</li><li><code>&lt;section class=\"hero\"&gt;</code> avec une image de fond et un titre en overlay (texte positionné par-dessus l'image avec <code>position: absolute;</code>)</li><li><code>&lt;section class=\"carte-menu\"&gt;</code> : la carte du restaurant en <code>display: grid;</code>, avec AU MOINS 3 <code>&lt;article class=\"plat\"&gt;</code></li><li><code>&lt;section class=\"galerie\"&gt;</code> : au moins 4 images en grille avec un effet de zoom au survol</li><li><code>&lt;section class=\"reservation\"&gt;</code> : un formulaire avec <code>&lt;fieldset&gt;</code>/<code>&lt;legend&gt;</code>, des <code>&lt;label&gt;</code> bien associés</li><li><code>&lt;footer class=\"pied\"&gt;</code> en <code>display: grid;</code> avec au moins 2 colonnes (contact / horaires)</li></ul>" },
      { type:'text', heading:"Images à utiliser", html:
        "<ul><li>Fond hero : <code>https://placehold.co/1400x600/1a1a1a/d4af37?text=Le+Jardin+Gourmand</code></li><li>Plat 1 : <code>https://placehold.co/280x200/2d4a2b/f5f0e1?text=Entr%C3%A9e</code></li><li>Plat 2 : <code>https://placehold.co/280x200/2d4a2b/f5f0e1?text=Plat+Principal</code></li><li>Plat 3 : <code>https://placehold.co/280x200/2d4a2b/f5f0e1?text=Dessert</code></li><li>Galerie (x4) : <code>https://placehold.co/300x300/d4af37/1a1a1a?text=Galerie+1</code> (change juste le chiffre à la fin pour les 3 autres)</li></ul>" },
      { type:'tip', html:"Le menu déroulant CSS pur utilise EXACTEMENT la technique vue à la leçon \"Pseudo-classes et pseudo-éléments avancés\" : <code>.sous-menu { display:none; }</code> puis <code>.menu-item:hover .sous-menu { display:block; }</code>." }
    ],
    exercises: {
      facile: {
        instructions: "ÉTAPE 1 — STRUCTURE. Construis : <code>&lt;header class=\"entete\"&gt;</code> avec logo + <code>&lt;nav&gt;</code> (incluant un <code>&lt;div class=\"menu-item\"&gt;</code> contenant un lien \"Notre Carte\" ET un <code>&lt;div class=\"sous-menu\"&gt;</code> avec 2 liens à l'intérieur), <code>&lt;section class=\"hero\"&gt;</code> avec un <code>&lt;h1&gt;</code>, <code>&lt;section class=\"carte-menu\"&gt;</code> avec 3 <code>&lt;article class=\"plat\"&gt;</code> (image+alt, nom, prix), <code>&lt;section class=\"galerie\"&gt;</code> avec 4 images, <code>&lt;section class=\"reservation\"&gt;</code> avec un <code>&lt;fieldset&gt;</code>/<code>&lt;legend&gt;</code> et 2 champs labellisés, et <code>&lt;footer class=\"pied\"&gt;</code>.",
        tabs: [
          { type:'html', starter:'<!-- Construis toute la structure HTML sémantique du restaurant -->\n' },
          { type:'css', starter:'' }
        ],
        hints: [
          "<div class=\"menu-item\">Notre Carte ▾<div class=\"sous-menu\"><a href=\"#\">Déjeuner</a><a href=\"#\">Dîner</a></div></div>",
          "<section class=\"carte-menu\"><article class=\"plat\"><img alt=\"...\"><h3>...</h3><p>Prix</p></article> x3</section>",
          "<fieldset><legend>Réservation</legend><label for=\"nom\">Nom</label><input id=\"nom\">...</fieldset>"
        ],
        solution: { html: '<header class="entete">\n  <h1>Le Jardin Gourmand</h1>\n  <nav>\n    <a href="#accueil">Accueil</a>\n    <div class="menu-item">\n      Notre Carte ▾\n      <div class="sous-menu">\n        <a href="#dejeuner">Déjeuner</a>\n        <a href="#diner">Dîner</a>\n      </div>\n    </div>\n    <a href="#reservation">Réservation</a>\n  </nav>\n</header>\n<section class="hero">\n  <h1>Une cuisine authentique au cœur du jardin</h1>\n</section>\n<section class="carte-menu">\n  <article class="plat">\n    <img src="https://placehold.co/280x200/2d4a2b/f5f0e1?text=Entr%C3%A9e" alt="Entrée du jour, salade fraîche">\n    <h3>Salade du potager</h3>\n    <p>8,50 €</p>\n  </article>\n  <article class="plat">\n    <img src="https://placehold.co/280x200/2d4a2b/f5f0e1?text=Plat+Principal" alt="Plat principal, poisson grillé">\n    <h3>Poisson grillé</h3>\n    <p>18,00 €</p>\n  </article>\n  <article class="plat">\n    <img src="https://placehold.co/280x200/2d4a2b/f5f0e1?text=Dessert" alt="Dessert, fondant au chocolat">\n    <h3>Fondant au chocolat</h3>\n    <p>7,00 €</p>\n  </article>\n</section>\n<section class="galerie">\n  <img src="https://placehold.co/300x300/d4af37/1a1a1a?text=Galerie+1" alt="Salle du restaurant">\n  <img src="https://placehold.co/300x300/d4af37/1a1a1a?text=Galerie+2" alt="Terrasse extérieure">\n  <img src="https://placehold.co/300x300/d4af37/1a1a1a?text=Galerie+3" alt="Cuisine ouverte">\n  <img src="https://placehold.co/300x300/d4af37/1a1a1a?text=Galerie+4" alt="Jardin du restaurant">\n</section>\n<section class="reservation">\n  <form>\n    <fieldset>\n      <legend>Réserver une table</legend>\n      <label for="nom">Nom</label>\n      <input id="nom" type="text">\n      <label for="date">Date</label>\n      <input id="date" type="date">\n    </fieldset>\n    <button type="submit">Réserver</button>\n  </form>\n</section>\n<footer class="pied">\n  <div>Contact : 01 23 45 67 89</div>\n  <div>Horaires : 12h-14h / 19h-22h</div>\n</footer>' },
        check(doc, win, C){
          if(!C.exists('.entete')) return { success:false, message:"Il manque un header.entete." };
          if(!C.exists('.menu-item')) return { success:false, message:"Il manque un .menu-item dans la navigation." };
          if(!C.exists('.menu-item .sous-menu')) return { success:false, message:"Il manque un .sous-menu à l'intérieur de .menu-item." };
          if(C.count('.menu-item .sous-menu a') < 2) return { success:false, message:"Le sous-menu doit contenir au moins 2 liens." };
          if(!C.exists('.hero')) return { success:false, message:"Il manque une section .hero." };
          if(C.count('.carte-menu .plat') < 3) return { success:false, message:"Il faut au moins 3 .plat dans .carte-menu." };
          if(C.count('.galerie img') < 4) return { success:false, message:"Il faut au moins 4 images dans .galerie." };
          if(!C.exists('.reservation fieldset')) return { success:false, message:"Il manque un fieldset dans .reservation." };
          if(!C.exists('.reservation legend')) return { success:false, message:"Il manque une legend." };
          const labels = C.all('.reservation label');
          if(labels.length < 2) return { success:false, message:"Il faut au moins 2 labels dans le formulaire." };
          if(!C.exists('.pied')) return { success:false, message:"Il manque un footer.pied." };
          return { success:true, message:"Structure complète, y compris le menu déroulant et le formulaire, étape 1 validée !" };
        }
      },
      moyen: {
        instructions: "ÉTAPE 2 — MISE EN PAGE. Rends <code>.entete</code> <code>position: sticky; top: 0;</code>. Mets <code>nav</code> en <code>display: flex;</code>. Cache <code>.sous-menu</code> par défaut (<code>display: none;</code>) et révèle-le avec <code>.menu-item:hover .sous-menu { display: block; }</code> (le <code>.menu-item</code> doit être en <code>position: relative;</code> et le <code>.sous-menu</code> en <code>position: absolute;</code>). Mets <code>.carte-menu</code> et <code>.galerie</code> en <code>display: grid;</code> avec <code>grid-template-columns: repeat(3, 1fr)</code> ou <code>repeat(auto-fit, minmax(...))</code>.",
        tabs: [
          { type:'html', starter:'<header class="entete">\n  <h1>Le Jardin Gourmand</h1>\n  <nav>\n    <a href="#accueil">Accueil</a>\n    <div class="menu-item">\n      Notre Carte ▾\n      <div class="sous-menu">\n        <a href="#dejeuner">Déjeuner</a>\n        <a href="#diner">Dîner</a>\n      </div>\n    </div>\n    <a href="#reservation">Réservation</a>\n  </nav>\n</header>\n<section class="hero">\n  <h1>Une cuisine authentique au cœur du jardin</h1>\n</section>\n<section class="carte-menu">\n  <article class="plat"><img src="https://placehold.co/280x200/2d4a2b/f5f0e1?text=Entr%C3%A9e" alt="Entrée"><h3>Salade</h3><p>8,50 €</p></article>\n  <article class="plat"><img src="https://placehold.co/280x200/2d4a2b/f5f0e1?text=Plat" alt="Plat"><h3>Poisson grillé</h3><p>18,00 €</p></article>\n  <article class="plat"><img src="https://placehold.co/280x200/2d4a2b/f5f0e1?text=Dessert" alt="Dessert"><h3>Fondant</h3><p>7,00 €</p></article>\n</section>\n<section class="galerie">\n  <img src="https://placehold.co/300x300/d4af37/1a1a1a?text=1" alt="Salle">\n  <img src="https://placehold.co/300x300/d4af37/1a1a1a?text=2" alt="Terrasse">\n  <img src="https://placehold.co/300x300/d4af37/1a1a1a?text=3" alt="Cuisine">\n  <img src="https://placehold.co/300x300/d4af37/1a1a1a?text=4" alt="Jardin">\n</section>\n<section class="reservation">\n  <form>\n    <fieldset>\n      <legend>Réserver</legend>\n      <label for="nom">Nom</label><input id="nom">\n      <label for="date">Date</label><input id="date" type="date">\n    </fieldset>\n  </form>\n</section>\n<footer class="pied">\n  <div>Contact</div>\n  <div>Horaires</div>\n</footer>', readonly:true },
          { type:'css', starter:'img { max-width: 100%; display: block; }\n/* Mets en page ici : sticky header, menu déroulant, grid */' }
        ],
        hints: [
          ".entete { position: sticky; top: 0; } nav { display: flex; gap: 20px; }",
          ".menu-item { position: relative; } .sous-menu { position: absolute; display: none; } .menu-item:hover .sous-menu { display: block; }",
          ".carte-menu, .galerie { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }"
        ],
        solution: { css: 'img { max-width: 100%; display: block; }\n.entete { position: sticky; top: 0; background: white; }\nnav { display: flex; gap: 20px; align-items: center; }\n.menu-item { position: relative; }\n.sous-menu { position: absolute; top: 100%; left: 0; display: none; background: white; }\n.menu-item:hover .sous-menu { display: block; }\n.carte-menu { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }\n.galerie { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }' },
        check(doc, win, C){
          if(C.style('.entete', 'position') !== 'sticky') return { success:false, message:"Il manque position: sticky; sur .entete." };
          if(C.style('nav', 'display') !== 'flex') return { success:false, message:"Il manque display: flex; sur nav." };
          if(C.style('.sous-menu', 'display') !== 'none') return { success:false, message:"Le .sous-menu doit être caché par défaut (display: none;)." };
          if(C.style('.menu-item', 'position') !== 'relative') return { success:false, message:"Il manque position: relative; sur .menu-item." };
          if(C.style('.sous-menu', 'position') !== 'absolute') return { success:false, message:"Il manque position: absolute; sur .sous-menu." };
          const cmDisplay = C.style('.carte-menu', 'display');
          if(cmDisplay !== 'grid') return { success:false, message:"Il manque display: grid; sur .carte-menu." };
          if(C.style('.galerie', 'display') !== 'grid') return { success:false, message:"Il manque display: grid; sur .galerie." };
          return { success:true, message:"Menu déroulant en CSS pur et grilles en place, étape 2 validée !" };
        }
      },
      difficile: {
        instructions: "ÉTAPE 3 — FINITIONS. Ajoute une variable CSS <code>--couleur-or: #d4af37;</code> sur <code>:root</code> et utilise-la pour styliser un élément. Ajoute un effet de zoom (<code>transform: scale(1.1);</code> + <code>transition</code> + <code>overflow: hidden</code> sur le parent) au survol des images de <code>.galerie</code>. Ajoute une animation <code>@keyframes</code> d'apparition en fondu sur <code>.hero h1</code>. Fais que <code>.pied</code> passe en <code>display: grid;</code> avec au moins 2 colonnes.",
        tabs: [
          { type:'html', starter:'<header class="entete">\n  <h1>Le Jardin Gourmand</h1>\n  <nav>\n    <a href="#accueil">Accueil</a>\n    <div class="menu-item">\n      Notre Carte ▾\n      <div class="sous-menu">\n        <a href="#dejeuner">Déjeuner</a>\n        <a href="#diner">Dîner</a>\n      </div>\n    </div>\n  </nav>\n</header>\n<section class="hero">\n  <h1>Une cuisine authentique au cœur du jardin</h1>\n</section>\n<section class="carte-menu">\n  <article class="plat"><img src="https://placehold.co/280x200/2d4a2b/f5f0e1?text=Entr%C3%A9e" alt="Entrée"><h3>Salade</h3><p>8,50 €</p></article>\n  <article class="plat"><img src="https://placehold.co/280x200/2d4a2b/f5f0e1?text=Plat" alt="Plat"><h3>Poisson grillé</h3><p>18,00 €</p></article>\n</section>\n<section class="galerie">\n  <div class="galerie-item"><img src="https://placehold.co/300x300/d4af37/1a1a1a?text=1" alt="Salle"></div>\n  <div class="galerie-item"><img src="https://placehold.co/300x300/d4af37/1a1a1a?text=2" alt="Terrasse"></div>\n</section>\n<footer class="pied">\n  <div>Contact : 01 23 45 67 89</div>\n  <div>Horaires : 12h-22h</div>\n</footer>', readonly:true },
          { type:'css', starter:'img { max-width: 100%; display: block; }\n.entete { position: sticky; top: 0; background: white; }\nnav { display: flex; gap: 20px; }\n.menu-item { position: relative; }\n.sous-menu { position: absolute; display: none; background: white; }\n.menu-item:hover .sous-menu { display: block; }\n.carte-menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }\n.galerie { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }\n.galerie-item { overflow: hidden; }\n\n/* Ajoute : variable CSS, zoom galerie, animation hero, footer en grid */' }
        ],
        hints: [
          ":root { --couleur-or: #d4af37; }",
          ".galerie-item img { transition: transform 0.3s; } .galerie-item:hover img { transform: scale(1.1); }",
          "@keyframes apparition { from{opacity:0;} to{opacity:1;} } .hero h1 { animation: apparition 1s; }",
          ".pied { display: grid; grid-template-columns: repeat(2, 1fr); }"
        ],
        solution: { css: 'img { max-width: 100%; display: block; }\n:root { --couleur-or: #d4af37; }\n.entete { position: sticky; top: 0; background: white; border-bottom: 2px solid var(--couleur-or); }\nnav { display: flex; gap: 20px; }\n.menu-item { position: relative; }\n.sous-menu { position: absolute; display: none; background: white; }\n.menu-item:hover .sous-menu { display: block; }\n.carte-menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }\n.galerie { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }\n.galerie-item { overflow: hidden; }\n.galerie-item img { transition: transform 0.3s; }\n.galerie-item:hover img { transform: scale(1.1); }\n@keyframes apparition {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n.hero h1 {\n  animation: apparition 1.2s ease-out;\n  color: var(--couleur-or);\n}\n.pied {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}' },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '');
          if(!/--couleur-or\s*:/.test(css)) return { success:false, message:"Il manque une variable CSS --couleur-or sur :root." };
          if(!/var\(\s*--couleur-or\s*\)/.test(css)) return { success:false, message:"La variable --couleur-or doit être utilisée avec var(...)." };
          if(!css.includes('@keyframes')) return { success:false, message:"Il manque une animation @keyframes pour le hero." };
          const heroAnim = C.style('.hero h1', 'animationName');
          if(!heroAnim || heroAnim === 'none') return { success:false, message:"Il manque animation: ...; sur .hero h1." };
          if(!/:hover[^{]*\{[^}]*transform/.test(css.replace(/\s+/g,' '))) return { success:false, message:"Il manque un effet transform au survol de la galerie." };
          if(C.style('.pied', 'display') !== 'grid') return { success:false, message:"Il manque display: grid; sur .pied." };
          return { success:true, message:"🎉 Examen 2 réussi ! Menu CSS pur, grilles, variables et animations : un site de restaurant complet et professionnel." };
        }
      }
    }
  },

  // ============ EXAMEN 3 ============
  {
    id: 'ch2x-l10',
    title: "🎓 Examen 3 : Boutique en ligne \"TechStyle\"",
    icon: '🛍️',
    explanation: [
      { type:'text', heading:"Le projet le plus ambitieux du parcours", html:
        "<p><strong>\"TechStyle\"</strong>, une boutique en ligne, te confie la page d'accueil ET une fiche produit complète. C'est le site le plus complexe que tu aies construit : badges superposés, grille de produits, fiche produit à deux colonnes, responsive à deux niveaux.</p>" },
      { type:'text', heading:"Sections obligatoires", html:
        "<ul><li><code>&lt;header class=\"entete\"&gt;</code> sticky avec logo, <code>&lt;nav&gt;</code>, et un <code>&lt;div class=\"menu-item\"&gt;</code> \"Catégories ▾\" avec sous-menu déroulant CSS pur</li><li><code>&lt;section class=\"hero\"&gt;</code> en <code>display: grid;</code> à 2 colonnes (texte à gauche, image à droite)</li><li><code>&lt;section class=\"produits\"&gt;</code> : AU MOINS 4 <code>&lt;article class=\"produit\"&gt;</code> en grille, chacun avec une image, un nom, un prix, ET pour au moins un produit un badge <code>&lt;span class=\"badge\"&gt;Promo&lt;/span&gt;</code> positionné en haut à gauche par-dessus l'image (<code>position: absolute;</code>)</li><li><code>&lt;section class=\"fiche-produit\"&gt;</code> : une fiche produit détaillée en <code>display: grid;</code> à 2 colonnes (galerie d'image à gauche, informations + bouton \"Ajouter au panier\" à droite)</li><li><code>&lt;section class=\"newsletter\"&gt;</code> avec un formulaire d'inscription email</li><li><code>&lt;footer class=\"pied\"&gt;</code> en grid à AU MOINS 3 colonnes</li></ul>" },
      { type:'text', heading:"Images à utiliser", html:
        "<ul><li>Hero : <code>https://placehold.co/500x400/0f172a/38bdf8?text=TechStyle</code></li><li>Produits (x4) : <code>https://placehold.co/280x280/f8f9fa/212529?text=Produit+1</code> (change le chiffre pour les 3 autres)</li><li>Fiche produit, image principale : <code>https://placehold.co/450x450/f8f9fa/212529?text=Vue+Principale</code></li><li>Fiche produit, miniatures (x3) : <code>https://placehold.co/100x100/f8f9fa/212529?text=Vue+1</code> (change le chiffre)</li></ul>" },
      { type:'tip', html:"Cet examen doit être responsive à DEUX niveaux : une media query pour tablette (<code>max-width: 900px</code>) ET une pour mobile (<code>max-width: 500px</code>), chacune simplifiant un peu plus la mise en page." }
    ],
    exercises: {
      facile: {
        instructions: "ÉTAPE 1 — STRUCTURE. Construis toutes les sections listées dans le cahier des charges : header avec menu déroulant, hero, au moins 4 <code>.produit</code> dans <code>.produits</code> (dont un avec un <code>&lt;span class=\"badge\"&gt;</code>), une <code>.fiche-produit</code> avec galerie + infos + bouton, une <code>.newsletter</code> avec un formulaire email, et un <code>.pied</code> avec au moins 3 blocs.",
        tabs: [
          { type:'html', starter:'<!-- Construis toute la structure de la boutique TechStyle -->\n' },
          { type:'css', starter:'' }
        ],
        hints: [
          "<article class=\"produit\"><span class=\"badge\">Promo</span><img alt=\"...\"><h3>...</h3><p>Prix</p></article>",
          "<section class=\"fiche-produit\"><div class=\"galerie-produit\"><img>...</div><div class=\"infos-produit\"><h2>...</h2><p>Prix</p><button>Ajouter au panier</button></div></section>",
          "<section class=\"newsletter\"><form><label for=\"email\">Email</label><input id=\"email\" type=\"email\"><button>S'inscrire</button></form></section>"
        ],
        solution: { html: '<header class="entete">\n  <h1>TechStyle</h1>\n  <nav>\n    <a href="#accueil">Accueil</a>\n    <div class="menu-item">\n      Catégories ▾\n      <div class="sous-menu">\n        <a href="#pcs">Ordinateurs</a>\n        <a href="#accessoires">Accessoires</a>\n      </div>\n    </div>\n  </nav>\n</header>\n<section class="hero">\n  <div class="hero-texte">\n    <h2>La technologie, en toute simplicité</h2>\n    <button>Voir la boutique</button>\n  </div>\n  <img src="https://placehold.co/500x400/0f172a/38bdf8?text=TechStyle" alt="Illustration de produits technologiques">\n</section>\n<section class="produits">\n  <article class="produit">\n    <span class="badge">Promo</span>\n    <img src="https://placehold.co/280x280/f8f9fa/212529?text=Produit+1" alt="Casque audio sans fil">\n    <h3>Casque audio</h3>\n    <p>79,99 €</p>\n  </article>\n  <article class="produit">\n    <img src="https://placehold.co/280x280/f8f9fa/212529?text=Produit+2" alt="Souris sans fil">\n    <h3>Souris sans fil</h3>\n    <p>24,99 €</p>\n  </article>\n  <article class="produit">\n    <img src="https://placehold.co/280x280/f8f9fa/212529?text=Produit+3" alt="Clavier mécanique">\n    <h3>Clavier mécanique</h3>\n    <p>59,99 €</p>\n  </article>\n  <article class="produit">\n    <img src="https://placehold.co/280x280/f8f9fa/212529?text=Produit+4" alt="Webcam HD">\n    <h3>Webcam HD</h3>\n    <p>39,99 €</p>\n  </article>\n</section>\n<section class="fiche-produit">\n  <div class="galerie-produit">\n    <img class="image-principale" src="https://placehold.co/450x450/f8f9fa/212529?text=Vue+Principale" alt="Casque audio, vue principale">\n    <div class="miniatures">\n      <img src="https://placehold.co/100x100/f8f9fa/212529?text=Vue+1" alt="Casque, vue de côté">\n      <img src="https://placehold.co/100x100/f8f9fa/212529?text=Vue+2" alt="Casque, vue arrière">\n      <img src="https://placehold.co/100x100/f8f9fa/212529?text=Vue+3" alt="Casque, vue de dessus">\n    </div>\n  </div>\n  <div class="infos-produit">\n    <h2>Casque audio sans fil</h2>\n    <p>79,99 €</p>\n    <p>Réduction de bruit active, autonomie 30h, confortable et léger.</p>\n    <button>Ajouter au panier</button>\n  </div>\n</section>\n<section class="newsletter">\n  <form>\n    <label for="email-news">Reste informé de nos offres</label>\n    <input id="email-news" type="email" placeholder="ton-email@exemple.fr">\n    <button type="submit">S\'inscrire</button>\n  </form>\n</section>\n<footer class="pied">\n  <div>À propos de TechStyle</div>\n  <div>Aide et contact</div>\n  <div>Suivez-nous</div>\n</footer>' },
        check(doc, win, C){
          if(!C.exists('.entete .menu-item .sous-menu')) return { success:false, message:"Il manque le menu déroulant (.menu-item > .sous-menu) dans le header." };
          if(!C.exists('.hero')) return { success:false, message:"Il manque une section .hero." };
          if(C.count('.produits .produit') < 4) return { success:false, message:"Il faut au moins 4 .produit dans .produits." };
          if(!C.exists('.produit .badge')) return { success:false, message:"Il manque un .badge sur au moins un produit." };
          if(!C.exists('.fiche-produit')) return { success:false, message:"Il manque une section .fiche-produit." };
          if(!C.exists('.fiche-produit button')) return { success:false, message:"Il manque un bouton \"Ajouter au panier\" dans .fiche-produit." };
          if(!C.exists('.newsletter input[type="email"]') && !C.exists('.newsletter input')) return { success:false, message:"Il manque un champ email dans .newsletter." };
          if(C.count('.pied > *') < 3) return { success:false, message:"Le footer .pied doit contenir au moins 3 blocs." };
          return { success:true, message:"Structure complète de la boutique, étape 1 validée !" };
        }
      },
      moyen: {
        instructions: "ÉTAPE 2 — MISE EN PAGE. <code>.hero</code> en <code>display: grid; grid-template-columns: 1fr 1fr;</code>. <code>.produits</code> en <code>display: grid;</code> avec <code>repeat(auto-fit, minmax(200px, 1fr))</code>. Chaque <code>.produit</code> en <code>position: relative;</code> pour que son <code>.badge</code> (en <code>position: absolute; top: 10px; left: 10px;</code>) se place correctement dessus. <code>.fiche-produit</code> en <code>display: grid; grid-template-columns: 1fr 1fr;</code>. <code>.pied</code> en <code>display: grid;</code> avec 3 colonnes.",
        tabs: [
          { type:'html', starter:'<header class="entete">\n  <h1>TechStyle</h1>\n  <nav><div class="menu-item">Catégories ▾<div class="sous-menu"><a href="#">Ordinateurs</a></div></div></nav>\n</header>\n<section class="hero">\n  <div class="hero-texte"><h2>La technologie, en toute simplicité</h2></div>\n  <img src="https://placehold.co/500x400/0f172a/38bdf8?text=TechStyle" alt="Produits tech">\n</section>\n<section class="produits">\n  <article class="produit"><span class="badge">Promo</span><img src="https://placehold.co/280x280/f8f9fa/212529?text=1" alt="Produit 1"><h3>Casque</h3><p>79,99 €</p></article>\n  <article class="produit"><img src="https://placehold.co/280x280/f8f9fa/212529?text=2" alt="Produit 2"><h3>Souris</h3><p>24,99 €</p></article>\n  <article class="produit"><img src="https://placehold.co/280x280/f8f9fa/212529?text=3" alt="Produit 3"><h3>Clavier</h3><p>59,99 €</p></article>\n  <article class="produit"><img src="https://placehold.co/280x280/f8f9fa/212529?text=4" alt="Produit 4"><h3>Webcam</h3><p>39,99 €</p></article>\n</section>\n<section class="fiche-produit">\n  <div class="galerie-produit"><img src="https://placehold.co/450x450/f8f9fa/212529?text=Vue" alt="Vue principale"></div>\n  <div class="infos-produit"><h2>Casque audio</h2><button>Ajouter au panier</button></div>\n</section>\n<footer class="pied">\n  <div>À propos</div>\n  <div>Aide</div>\n  <div>Réseaux</div>\n</footer>', readonly:true },
          { type:'css', starter:'img { max-width: 100%; display: block; }\n.menu-item { position: relative; } .sous-menu { position: absolute; display: none; background: white; } .menu-item:hover .sous-menu { display: block; }\n/* Mets en page : hero, produits, badge, fiche-produit, pied */' }
        ],
        hints: [
          ".hero { display: grid; grid-template-columns: 1fr 1fr; align-items: center; }",
          ".produits { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }",
          ".produit { position: relative; } .badge { position: absolute; top: 10px; left: 10px; }",
          ".fiche-produit { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }",
          ".pied { display: grid; grid-template-columns: repeat(3, 1fr); }"
        ],
        solution: { css: 'img { max-width: 100%; display: block; }\n.menu-item { position: relative; } .sous-menu { position: absolute; display: none; background: white; } .menu-item:hover .sous-menu { display: block; }\n.hero { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 20px; }\n.produits { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }\n.produit { position: relative; }\n.badge { position: absolute; top: 10px; left: 10px; background: crimson; color: white; padding: 4px 10px; border-radius: 20px; }\n.fiche-produit { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }\n.pied { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }' },
        check(doc, win, C){
          if(C.style('.hero', 'display') !== 'grid') return { success:false, message:"Il manque display: grid; sur .hero." };
          if(C.style('.produits', 'display') !== 'grid') return { success:false, message:"Il manque display: grid; sur .produits." };
          if(C.style('.produit', 'position') !== 'relative') return { success:false, message:"Il manque position: relative; sur .produit (pour placer le badge)." };
          if(C.style('.badge', 'position') !== 'absolute') return { success:false, message:"Il manque position: absolute; sur .badge." };
          if(C.style('.fiche-produit', 'display') !== 'grid') return { success:false, message:"Il manque display: grid; sur .fiche-produit." };
          const piedCols = C.style('.pied', 'gridTemplateColumns');
          if(C.style('.pied', 'display') !== 'grid' || !piedCols || piedCols.trim().split(/\s+/).length < 3) return { success:false, message:"Il manque display: grid; avec 3 colonnes sur .pied." };
          return { success:true, message:"Mise en page complexe maîtrisée : grilles, badges superposés, tout y est. Étape 2 validée !" };
        }
      },
      difficile: {
        instructions: "ÉTAPE 3 — FINITIONS PRO. Ajoute des variables CSS pour le thème (<code>--fond-sombre</code>, <code>--accent</code>). Donne à <code>.produit</code> une transition + effet de survol (ombre + translateY). Ajoute une media query <code>max-width: 900px</code> qui passe <code>.hero</code> et <code>.fiche-produit</code> en 1 colonne (<code>grid-template-columns: 1fr;</code>). Ajoute une 2ᵉ media query <code>max-width: 500px</code> qui passe <code>.pied</code> en 1 colonne.",
        tabs: [
          { type:'html', starter:'<header class="entete">\n  <h1>TechStyle</h1>\n  <nav><div class="menu-item">Catégories ▾<div class="sous-menu"><a href="#">Ordinateurs</a></div></div></nav>\n</header>\n<section class="hero">\n  <div class="hero-texte"><h2>La technologie, en toute simplicité</h2></div>\n  <img src="https://placehold.co/500x400/0f172a/38bdf8?text=TechStyle" alt="Produits tech">\n</section>\n<section class="produits">\n  <article class="produit"><span class="badge">Promo</span><img src="https://placehold.co/280x280/f8f9fa/212529?text=1" alt="Produit 1"><h3>Casque</h3><p>79,99 €</p></article>\n  <article class="produit"><img src="https://placehold.co/280x280/f8f9fa/212529?text=2" alt="Produit 2"><h3>Souris</h3><p>24,99 €</p></article>\n</section>\n<section class="fiche-produit">\n  <div class="galerie-produit"><img src="https://placehold.co/450x450/f8f9fa/212529?text=Vue" alt="Vue principale"></div>\n  <div class="infos-produit"><h2>Casque audio</h2><button>Ajouter au panier</button></div>\n</section>\n<footer class="pied">\n  <div>À propos</div>\n  <div>Aide</div>\n  <div>Réseaux</div>\n</footer>', readonly:true },
          { type:'css', starter:'img { max-width: 100%; display: block; }\n.menu-item { position: relative; } .sous-menu { position: absolute; display: none; background: white; } .menu-item:hover .sous-menu { display: block; }\n.hero { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: center; }\n.produits { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }\n.produit { position: relative; }\n.badge { position: absolute; top: 10px; left: 10px; background: crimson; color: white; padding: 4px 10px; border-radius: 20px; }\n.fiche-produit { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }\n.pied { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }\n\n/* Ajoute : variables CSS, hover sur .produit, 2 media queries */' }
        ],
        hints: [
          ":root { --fond-sombre: #0f172a; --accent: #38bdf8; }",
          ".produit { transition: transform 0.3s, box-shadow 0.3s; } .produit:hover { transform: translateY(-6px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }",
          "@media (max-width: 900px) { .hero, .fiche-produit { grid-template-columns: 1fr; } }",
          "@media (max-width: 500px) { .pied { grid-template-columns: 1fr; } }"
        ],
        solution: { css: 'img { max-width: 100%; display: block; }\n:root { --fond-sombre: #0f172a; --accent: #38bdf8; }\n.menu-item { position: relative; } .sous-menu { position: absolute; display: none; background: white; } .menu-item:hover .sous-menu { display: block; }\n.entete { background: var(--fond-sombre); color: white; }\n.hero { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: center; }\n.produits { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }\n.produit {\n  position: relative;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.produit:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 10px 20px rgba(0,0,0,0.15);\n}\n.badge { position: absolute; top: 10px; left: 10px; background: var(--accent); color: white; padding: 4px 10px; border-radius: 20px; }\n.fiche-produit { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }\n.pied { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }\n@media (max-width: 900px) {\n  .hero, .fiche-produit { grid-template-columns: 1fr; }\n}\n@media (max-width: 500px) {\n  .pied { grid-template-columns: 1fr; }\n}' },
        check(doc, win, C, logs, errors, raw){
          const css = (raw && raw.css || '');
          if(!/--\w[\w-]*\s*:/.test(css)) return { success:false, message:"Il manque au moins une variable CSS personnalisée sur :root." };
          if(!/var\(--/.test(css)) return { success:false, message:"Il manque une utilisation de var(--...) quelque part." };
          const lc = css.toLowerCase().replace(/\s+/g, ' ');
          if(!/\.produit:hover\s*\{[^}]*transform/.test(lc)) return { success:false, message:"Il manque un effet transform au survol de .produit." };
          const mediaCount = (lc.match(/@media/g) || []).length;
          if(mediaCount < 2) return { success:false, message:"Il faut AU MOINS 2 media queries différentes (tablette et mobile)." };
          if(!lc.includes('max-width: 900px') && !lc.includes('max-width:900px')) return { success:false, message:"Il manque la media query pour tablette (max-width: 900px)." };
          if(!lc.includes('max-width: 500px') && !lc.includes('max-width:500px')) return { success:false, message:"Il manque la media query pour mobile (max-width: 500px)." };
          return { success:true, message:"🏆 Examen 3 réussi ! Tu viens de construire une vraie boutique en ligne complète, responsive et professionnelle. Tu es prêt(e) pour JavaScript, niveau expert !" };
        }
      }
    }
  }

  ]
};
