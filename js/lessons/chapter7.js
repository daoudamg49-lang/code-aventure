const CHAPTER_7 = {
  id: 'ch7',
  title: 'Backend — Node.js',
  subtitle: "Découvre l'ordinateur qui répond, loin derrière ton écran",
  icon: '🖥️',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch7-l1',
    title: "Client et serveur",
    icon: '🍽️',
    explanation: [
      { type:'text', heading:"Le restaurant : client et serveur", html:
        "<p>Imagine un restaurant. TOI, à table, tu es le <strong>client</strong> : tu demandes un plat. La <strong>cuisine</strong>, c'est le <strong>serveur</strong> : elle prépare la réponse et te l'envoie. Sur internet, ton navigateur est le client, et un ordinateur loin, allumé jour et nuit, est le serveur !</p>" },
      { type:'text', heading:"Node.js : le même JavaScript, ailleurs", html:
        "<p><strong>Node.js</strong> permet d'utiliser le JavaScript que tu connais déjà, mais pour construire un <strong>serveur</strong> au lieu d'une page web. Avec <code>createServer()</code>, on crée un serveur. Avec <code>server.get(chemin, fonction)</code>, on dit quoi répondre quand quelqu'un demande une adresse précise.</p>" },
      { type:'code', code: "const server = createServer();\nserver.get(\"/\", function(req, res) {\n  res.send(\"Bonjour depuis le serveur !\");\n});\nserver.listen();" },
      { type:'tip', html:"Dans cette appli, tu vas t'entraîner sur un <strong>vrai faux serveur</strong> qui comprend les mêmes commandes que Node.js !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "const server = createServer();\nserver.get(\"/\", function(req, res) {\n  res.send(\"Bonjour depuis le serveur !\");\n});\nserver.listen();\n\n// On simule une demande du client :\nconsole.log(request(\"GET\", \"/\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée un serveur avec <code>createServer()</code>, ajoute une route <code>server.get(\"/\", ...)</code> qui répond \"Bonjour !\" avec <code>res.send(...)</code>, puis appelle <code>server.listen()</code>.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n// Ta route ici\n\nserver.listen();" }],
        showConsole: true,
        hints: ["server.get(\"/\", function(req, res) { res.send(\"Bonjour !\"); });"],
        solution: { js: "const server = createServer();\nserver.get(\"/\", function(req, res) {\n  res.send(\"Bonjour !\");\n});\nserver.listen();" },
        check(doc, win, C){
          const r = C.request('GET', '/');
          if(r.status === 404) return { success:false, message:"Je ne trouve pas de route pour \"/\". Utilise server.get(\"/\", ...)." };
          if(!r.body || !String(r.body).toLowerCase().includes('bonjour')) return { success:false, message:"Ta route devrait répondre avec un message contenant \"Bonjour\"." };
          return { success:true, message:"Ton premier serveur répond correctement !" };
        }
      },
      moyen: {
        instructions: "Crée deux routes différentes : <code>/accueil</code> et <code>/contact</code>, chacune avec un message différent.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["Deux server.get(...) avec des chemins différents."],
        solution: { js: "const server = createServer();\nserver.get(\"/accueil\", function(req, res) {\n  res.send(\"Bienvenue chez moi !\");\n});\nserver.get(\"/contact\", function(req, res) {\n  res.send(\"Écris-moi !\");\n});\nserver.listen();" },
        check(doc, win, C){
          const r1 = C.request('GET', '/accueil');
          const r2 = C.request('GET', '/contact');
          if(r1.status === 404) return { success:false, message:"Il manque la route /accueil." };
          if(r2.status === 404) return { success:false, message:"Il manque la route /contact." };
          if(String(r1.body) === String(r2.body)) return { success:false, message:"Les deux routes devraient répondre des messages différents." };
          return { success:true, message:"Deux routes bien distinctes, ton serveur sait s'orienter !" };
        }
      },
      difficile: {
        instructions: "Crée une route <code>/nouveau</code> qui utilise <code>res.status(201)</code> AVANT <code>res.send(...)</code>, pour dire \"quelque chose a été créé\" (comme un vrai serveur professionnel).",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["server.get(\"/nouveau\", function(req, res) { res.status(201).send(\"Créé !\"); });"],
        solution: { js: "const server = createServer();\nserver.get(\"/nouveau\", function(req, res) {\n  res.status(201).send(\"Créé !\");\n});\nserver.listen();" },
        check(doc, win, C){
          const r = C.request('GET', '/nouveau');
          if(r.status !== 201) return { success:false, message:"Le statut de la réponse devrait être 201." };
          if(!r.body) return { success:false, message:"Il manque un message dans la réponse." };
          return { success:true, message:"Tu sais utiliser les codes de statut comme un vrai serveur !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch7-l2',
    title: "Plusieurs routes, comme plusieurs pages",
    icon: '🗂️',
    explanation: [
      { type:'text', heading:"Organiser son serveur", html:
        "<p>Un vrai site a souvent beaucoup de routes : une pour l'accueil, une pour chaque produit, une pour le compte utilisateur... Chaque route est indépendante et répond à sa propre adresse.</p>" },
      { type:'code', code: "server.get(\"/accueil\", ...);\nserver.get(\"/produits\", ...);\nserver.get(\"/panier\", ...);" },
      { type:'tip', html:"Si tu demandes une route qui n'existe pas, le serveur répond automatiquement avec le code <strong>404</strong> (\"Non trouvé\") — tu as sûrement déjà vu cette erreur sur un vrai site !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "const server = createServer();\nserver.get(\"/accueil\", function(req, res) { res.send(\"Accueil\"); });\nserver.get(\"/blog\", function(req, res) { res.send(\"Mon blog\"); });\nserver.listen();\n\nconsole.log(request(\"GET\", \"/accueil\"));\nconsole.log(request(\"GET\", \"/inconnue\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée les routes <code>/accueil</code> et <code>/apropos</code>, chacune avec un texte d'au moins 5 caractères.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["Deux server.get(...) avec des textes assez longs."],
        solution: { js: "const server = createServer();\nserver.get(\"/accueil\", function(req, res) { res.send(\"Bienvenue sur mon site\"); });\nserver.get(\"/apropos\", function(req, res) { res.send(\"Voici qui je suis\"); });\nserver.listen();" },
        check(doc, win, C){
          const r1 = C.request('GET', '/accueil'), r2 = C.request('GET', '/apropos');
          if(r1.status === 404 || String(r1.body || '').length < 5) return { success:false, message:"La route /accueil doit répondre un texte d'au moins 5 caractères." };
          if(r2.status === 404 || String(r2.body || '').length < 5) return { success:false, message:"La route /apropos doit répondre un texte d'au moins 5 caractères." };
          return { success:true, message:"Deux pages bien organisées !" };
        }
      },
      moyen: {
        instructions: "Crée TROIS routes : <code>/accueil</code>, <code>/produits</code>, <code>/contact</code>, avec des messages tous différents.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["Trois server.get(...) au total."],
        solution: { js: "const server = createServer();\nserver.get(\"/accueil\", function(req, res) { res.send(\"Page d'accueil\"); });\nserver.get(\"/produits\", function(req, res) { res.send(\"Nos produits\"); });\nserver.get(\"/contact\", function(req, res) { res.send(\"Contactez-nous\"); });\nserver.listen();" },
        check(doc, win, C){
          const paths = ['/accueil', '/produits', '/contact'];
          const bodies = paths.map(p => C.request('GET', p));
          if(bodies.some(r => r.status === 404)) return { success:false, message:"Il manque au moins une des trois routes." };
          const texts = bodies.map(r => String(r.body).toLowerCase());
          if(new Set(texts).size < 3) return { success:false, message:"Les trois routes doivent répondre des messages différents." };
          return { success:true, message:"Un serveur avec trois pages bien distinctes !" };
        }
      },
      difficile: {
        instructions: "Crée un serveur avec 4 routes représentant un vrai site (accueil, produits, contact, mentions-legales). Vérifie ensuite qu'une route qui n'existe PAS (comme <code>/inconnue</code>) répond bien avec le statut 404.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\n\n\nserver.listen();\n\nconsole.log(request(\"GET\", \"/inconnue\"));" }],
        showConsole: true,
        hints: ["Quatre routes différentes.", "Regarde le résultat affiché pour /inconnue dans la console : le status doit être 404."],
        solution: { js: "const server = createServer();\nserver.get(\"/accueil\", function(req, res) { res.send(\"Accueil\"); });\nserver.get(\"/produits\", function(req, res) { res.send(\"Produits\"); });\nserver.get(\"/contact\", function(req, res) { res.send(\"Contact\"); });\nserver.get(\"/mentions-legales\", function(req, res) { res.send(\"Mentions légales\"); });\nserver.listen();\nconsole.log(request(\"GET\", \"/inconnue\"));" },
        check(doc, win, C){
          const paths = ['/accueil', '/produits', '/contact', '/mentions-legales'];
          if(paths.some(p => C.request('GET', p).status === 404)) return { success:false, message:"Il manque au moins une des 4 routes attendues." };
          const unknown = C.request('GET', '/inconnue');
          if(unknown.status !== 404) return { success:false, message:"Une route inconnue devrait automatiquement répondre 404." };
          return { success:true, message:"Ton serveur gère 4 vraies pages, comme un site professionnel !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch7-l3',
    title: "Envoyer des données au serveur",
    icon: '📨',
    explanation: [
      { type:'text', heading:"GET pour demander, POST pour envoyer", html:
        "<p><code>GET</code> sert à DEMANDER quelque chose (comme lire une page). <code>POST</code> sert à ENVOYER des données au serveur (comme remplir un formulaire et l'envoyer). Avec <code>server.post(...)</code>, on peut lire ce que le client a envoyé grâce à <code>req.body</code>.</p>" },
      { type:'code', code: "server.post(\"/bonjour\", function(req, res) {\n  res.send(\"Salut \" + req.body.nom + \" !\");\n});" },
      { type:'tip', html:"<code>req</code> veut dire \"request\" (la demande), <code>res</code> veut dire \"response\" (la réponse). Tu vas voir ces deux mots PARTOUT en programmation serveur !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "const server = createServer();\nserver.post(\"/bonjour\", function(req, res) {\n  res.send(\"Salut \" + req.body.nom + \" !\");\n});\nserver.listen();\n\nconsole.log(request(\"POST\", \"/bonjour\", { nom: \"Daouda\" }));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée une route POST <code>/bonjour</code> qui lit <code>req.body.nom</code> et répond \"Salut \" suivi du nom.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["server.post(\"/bonjour\", function(req, res) { res.send(\"Salut \" + req.body.nom); });"],
        solution: { js: "const server = createServer();\nserver.post(\"/bonjour\", function(req, res) {\n  res.send(\"Salut \" + req.body.nom);\n});\nserver.listen();" },
        check(doc, win, C){
          const r = C.request('POST', '/bonjour', { nom: 'Daouda' });
          if(r.status === 404) return { success:false, message:"Il manque la route POST /bonjour." };
          if(!String(r.body || '').includes('Daouda')) return { success:false, message:"La réponse devrait contenir le nom envoyé (Daouda)." };
          return { success:true, message:"Ton serveur sait lire ce que le client envoie !" };
        }
      },
      moyen: {
        instructions: "Crée une route POST <code>/presentation</code> qui lit <code>req.body.nom</code> ET <code>req.body.age</code>, et répond une phrase avec les deux.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["res.send(req.body.nom + \" a \" + req.body.age + \" ans\");"],
        solution: { js: "const server = createServer();\nserver.post(\"/presentation\", function(req, res) {\n  res.send(req.body.nom + \" a \" + req.body.age + \" ans\");\n});\nserver.listen();" },
        check(doc, win, C){
          const r = C.request('POST', '/presentation', { nom: 'Daouda', age: 7 });
          if(r.status === 404) return { success:false, message:"Il manque la route POST /presentation." };
          const body = String(r.body || '');
          if(!body.includes('Daouda') || !body.includes('7')) return { success:false, message:"La réponse devrait contenir le nom ET l'âge envoyés." };
          return { success:true, message:"Tu combines plusieurs informations envoyées, bravo !" };
        }
      },
      difficile: {
        instructions: "Crée une route POST <code>/inscription</code> : si <code>req.body.nom</code> est vide ou manquant, réponds avec le statut <code>400</code> et un message d'erreur. Sinon, réponds <code>200</code> avec un message de bienvenue.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["if (!req.body.nom) { res.status(400).send(\"Il manque le nom !\"); } else { res.send(\"Bienvenue \" + req.body.nom); }"],
        solution: { js: "const server = createServer();\nserver.post(\"/inscription\", function(req, res) {\n  if (!req.body.nom) {\n    res.status(400).send(\"Il manque le nom !\");\n  } else {\n    res.send(\"Bienvenue \" + req.body.nom);\n  }\n});\nserver.listen();" },
        check(doc, win, C){
          const bad = C.request('POST', '/inscription', {});
          if(bad.status !== 400) return { success:false, message:"Sans nom envoyé, le statut devrait être 400." };
          const good = C.request('POST', '/inscription', { nom: 'Daouda' });
          if(good.status === 404) return { success:false, message:"Il manque la route POST /inscription." };
          if(good.status === 400) return { success:false, message:"Avec un nom envoyé, ça ne devrait plus être une erreur 400." };
          return { success:true, message:"Ton serveur valide les données comme un vrai professionnel !" };
        }
      }
    }
  },

  // ============ LEÇON 4 ============
  {
    id: 'ch7-l4',
    title: "Répondre avec du JSON",
    icon: '📦',
    explanation: [
      { type:'text', heading:"Envoyer des vraies données structurées", html:
        "<p>Au lieu d'un simple texte, un serveur peut répondre avec des données organisées : une liste, ou un objet avec plusieurs informations. On utilise <code>res.json(...)</code> au lieu de <code>res.send(...)</code>. C'est comme ça que fonctionnent presque toutes les vraies APIs sur internet !</p>" },
      { type:'code', code: "server.get(\"/animaux\", function(req, res) {\n  res.json([\"chat\", \"chien\", \"lapin\"]);\n});" },
      { type:'tip', html:"Une <strong>API</strong> est un serveur pensé pour parler à d'autres programmes (pas directement à des humains) : elle répond avec des données brutes, pas une jolie page." },
      { type:'demo', tabs:[{ type:'js', starter:
        "const server = createServer();\nserver.get(\"/animaux\", function(req, res) {\n  res.json([\"chat\", \"chien\", \"lapin\"]);\n});\nserver.listen();\n\nconsole.log(request(\"GET\", \"/animaux\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée une route <code>/animaux</code> qui répond avec un tableau de 3 animaux grâce à <code>res.json(...)</code>.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["res.json([\"chat\", \"chien\", \"lapin\"]);"],
        solution: { js: "const server = createServer();\nserver.get(\"/animaux\", function(req, res) {\n  res.json([\"chat\", \"chien\", \"lapin\"]);\n});\nserver.listen();" },
        check(doc, win, C){
          const r = C.request('GET', '/animaux');
          if(r.status === 404) return { success:false, message:"Il manque la route /animaux." };
          if(!Array.isArray(r.body) || r.body.length < 3) return { success:false, message:"La réponse devrait être un tableau d'au moins 3 animaux." };
          return { success:true, message:"Ta première réponse JSON fonctionne !" };
        }
      },
      moyen: {
        instructions: "Crée une route <code>/utilisateur</code> qui répond avec un objet contenant <code>nom</code> et <code>age</code> grâce à <code>res.json({...})</code>.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["res.json({ nom: \"Daouda\", age: 7 });"],
        solution: { js: "const server = createServer();\nserver.get(\"/utilisateur\", function(req, res) {\n  res.json({ nom: \"Daouda\", age: 7 });\n});\nserver.listen();" },
        check(doc, win, C){
          const r = C.request('GET', '/utilisateur');
          if(r.status === 404) return { success:false, message:"Il manque la route /utilisateur." };
          if(!r.body || typeof r.body !== 'object' || Array.isArray(r.body)) return { success:false, message:"La réponse devrait être un objet avec res.json({...})." };
          if(!r.body.nom || !r.body.age) return { success:false, message:"L'objet devrait contenir nom et age." };
          return { success:true, message:"Un objet bien structuré, exactement comme une vraie API !" };
        }
      },
      difficile: {
        instructions: "Crée une route POST <code>/verifier</code> qui reçoit <code>req.body.pseudo</code>, et répond en JSON un objet avec le pseudo reçu ET un champ <code>valide: true</code>.",
        tabs: [{ type:'js', starter: "const server = createServer();\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["res.json({ pseudo: req.body.pseudo, valide: true });"],
        solution: { js: "const server = createServer();\nserver.post(\"/verifier\", function(req, res) {\n  res.json({ pseudo: req.body.pseudo, valide: true });\n});\nserver.listen();" },
        check(doc, win, C){
          const r = C.request('POST', '/verifier', { pseudo: 'Renardeau7' });
          if(r.status === 404) return { success:false, message:"Il manque la route POST /verifier." };
          if(!r.body || typeof r.body !== 'object') return { success:false, message:"La réponse devrait être un objet JSON." };
          if(r.body.pseudo !== 'Renardeau7') return { success:false, message:"L'objet devrait contenir le pseudo reçu." };
          if(r.body.valide !== true) return { success:false, message:"L'objet devrait contenir valide: true." };
          return { success:true, message:"Une vraie petite API qui valide des données, bravo !" };
        }
      }
    }
  },

  // ============ LEÇON 5 — PROJET FINAL ============
  {
    id: 'ch7-l5',
    title: "🏆 Projet : mon serveur d'API",
    icon: '🏆',
    explanation: [
      { type:'text', heading:"Le grand final du Chapitre 7", html:
        "<p>Tu vas construire une vraie petite API qui se SOUVIENT des choses : quand on ajoute quelque chose avec POST, le serveur le garde en mémoire, et quand on demande avec GET, il montre tout ce qui a été ajouté. C'est exactement comme ça que fonctionnent les vraies applications !</p>" },
      { type:'tip', html:"Astuce : crée un tableau AVANT tes routes (par exemple <code>let taches = [];</code>), et utilise-le dans plusieurs routes différentes : elles peuvent toutes y accéder !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "let taches = [];\nconst server = createServer();\nserver.get(\"/taches\", function(req, res) {\n  res.json(taches);\n});\nserver.post(\"/taches\", function(req, res) {\n  taches.push(req.body.texte);\n  res.status(201).send(\"Ajouté !\");\n});\nserver.listen();\n\nconsole.log(request(\"POST\", \"/taches\", { texte: \"Faire mes devoirs\" }));\nconsole.log(request(\"GET\", \"/taches\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée une route <code>/taches</code> qui répond en JSON avec un tableau (même vide au début) grâce à une variable <code>taches</code>.",
        tabs: [{ type:'js', starter: "let taches = [];\nconst server = createServer();\n\n\n\nserver.listen();" }],
        showConsole: true,
        hints: ["server.get(\"/taches\", function(req, res) { res.json(taches); });"],
        solution: { js: "let taches = [];\nconst server = createServer();\nserver.get(\"/taches\", function(req, res) {\n  res.json(taches);\n});\nserver.listen();" },
        check(doc, win, C){
          const r = C.request('GET', '/taches');
          if(r.status === 404) return { success:false, message:"Il manque la route GET /taches." };
          if(!Array.isArray(r.body)) return { success:false, message:"La route /taches devrait répondre un tableau (res.json)." };
          return { success:true, message:"Ta liste de tâches est prête à être remplie !" };
        }
      },
      moyen: {
        instructions: "Ajoute une route POST <code>/taches</code> qui ajoute <code>req.body.texte</code> au tableau <code>taches</code>, et répond avec le statut <code>201</code>.",
        tabs: [{ type:'js', starter: "let taches = [];\nconst server = createServer();\nserver.get(\"/taches\", function(req, res) {\n  res.json(taches);\n});\n\n// Ta route POST ici\n\nserver.listen();" }],
        showConsole: true,
        hints: ["server.post(\"/taches\", function(req, res) {\n  taches.push(req.body.texte);\n  res.status(201).send(\"Ajouté !\");\n});"],
        solution: { js: "let taches = [];\nconst server = createServer();\nserver.get(\"/taches\", function(req, res) {\n  res.json(taches);\n});\nserver.post(\"/taches\", function(req, res) {\n  taches.push(req.body.texte);\n  res.status(201).send(\"Ajouté !\");\n});\nserver.listen();" },
        check(doc, win, C){
          const post = C.request('POST', '/taches', { texte: 'Ranger ma chambre' });
          if(post.status === 404) return { success:false, message:"Il manque la route POST /taches." };
          if(post.status !== 201) return { success:false, message:"La réponse du POST devrait avoir le statut 201." };
          const get = C.request('GET', '/taches');
          if(!Array.isArray(get.body) || get.body.length < 1) return { success:false, message:"Après le POST, la liste GET /taches devrait contenir la nouvelle tâche." };
          if(!get.body.includes('Ranger ma chambre')) return { success:false, message:"La tâche ajoutée ne se retrouve pas dans la liste." };
          return { success:true, message:"Ton API se souvient de ce qu'on lui envoie, exactement comme un vrai serveur !" };
        }
      },
      difficile: {
        instructions: "Ajoute plusieurs tâches d'affilée (au moins 2) avec POST, puis vérifie avec GET que TOUTES apparaissent dans l'ordre.",
        tabs: [{ type:'js', starter: "let taches = [];\nconst server = createServer();\nserver.get(\"/taches\", function(req, res) {\n  res.json(taches);\n});\nserver.post(\"/taches\", function(req, res) {\n  taches.push(req.body.texte);\n  res.status(201).send(\"Ajouté !\");\n});\nserver.listen();\n\n// Simule plusieurs ajouts avec request(\"POST\", \"/taches\", { texte: \"...\" });" }],
        showConsole: true,
        hints: ["Appelle request(\"POST\", \"/taches\", { texte: \"...\" }); plusieurs fois avec des textes différents.", "Termine par console.log(request(\"GET\", \"/taches\"));"],
        solution: { js: "let taches = [];\nconst server = createServer();\nserver.get(\"/taches\", function(req, res) {\n  res.json(taches);\n});\nserver.post(\"/taches\", function(req, res) {\n  taches.push(req.body.texte);\n  res.status(201).send(\"Ajouté !\");\n});\nserver.listen();\nrequest(\"POST\", \"/taches\", { texte: \"Faire mes devoirs\" });\nrequest(\"POST\", \"/taches\", { texte: \"Ranger ma chambre\" });\nconsole.log(request(\"GET\", \"/taches\"));" },
        check(doc, win, C){
          const get = C.request('GET', '/taches');
          if(!Array.isArray(get.body) || get.body.length < 2) return { success:false, message:"Il devrait y avoir au moins 2 tâches déjà ajoutées avant cette vérification." };
          return { success:true, message:"🏆 BRAVO ! Ton API se souvient de plusieurs éléments, exactement comme un vrai backend professionnel. Chapitre 7 terminé !" };
        }
      }
    }
  }

  ]
};
