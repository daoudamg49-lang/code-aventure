const CHAPTER_8 = {
  id: 'ch8',
  title: 'Bases de données',
  subtitle: "Apprends à garder des informations pour toujours",
  icon: '🗄️',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch8-l1',
    title: "C'est quoi une base de données ?",
    icon: '🗄️',
    explanation: [
      { type:'text', heading:"Un grand classeur qui n'oublie jamais", html:
        "<p>Au Chapitre 7, ton serveur utilisait un simple tableau JavaScript pour se souvenir des tâches. Mais si le serveur redémarre, un tableau normal serait oublié ! Une <strong>base de données</strong> est un grand classeur spécial, conçu pour garder des milliers d'informations, organisées et jamais perdues.</p>" },
      { type:'text', heading:"Les tables : comme des feuilles de classeur", html:
        "<p>Une base de données range ses informations dans des <strong>tables</strong> (une table pour les utilisateurs, une pour les produits...). Chaque information ajoutée reçoit un <strong>id</strong> unique automatiquement, pour pouvoir la retrouver facilement plus tard.</p>" },
      { type:'code', code: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nconsole.log(animaux.tous());" },
      { type:'tip', html:"<strong>CRUD</strong> est un mot que tout développeur connaît : Créer, Lire (Read), Modifier (Update), Supprimer (Delete). Ce sont les 4 actions de base de toute base de données !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\", type: \"chien\" });\nanimaux.ajouter({ nom: \"Minou\", type: \"chat\" });\nconsole.log(animaux.tous());" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée une base de données avec <code>createDatabase()</code>, une table <code>\"animaux\"</code>, et ajoute-y un animal avec <code>.ajouter({...})</code>.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\n\n// Ajoute un animal ici" }],
        showConsole: true,
        hints: ["animaux.ajouter({ nom: \"Rex\" });"],
        solution: { js: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });" },
        check(doc, win, C){
          const db = C.db();
          if(!db) return { success:false, message:"Il manque createDatabase()." };
          const rows = db.table('animaux').tous();
          if(rows.length < 1) return { success:false, message:"Il manque au moins un animal ajouté dans la table." };
          return { success:true, message:"Ta première base de données fonctionne !" };
        }
      },
      moyen: {
        instructions: "Ajoute 3 animaux différents dans la table, puis affiche-les tous avec <code>console.log(animaux.tous())</code>.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\n\n\n\nconsole.log(animaux.tous());" }],
        showConsole: true,
        hints: ["Trois animaux.ajouter({...}); avec des noms différents."],
        solution: { js: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.ajouter({ nom: \"Minou\" });\nanimaux.ajouter({ nom: \"Titi\" });\nconsole.log(animaux.tous());" },
        check(doc, win, C){
          const db = C.db();
          if(!db) return { success:false, message:"Il manque createDatabase()." };
          const rows = db.table('animaux').tous();
          if(rows.length < 3) return { success:false, message:"Il me faut au moins 3 animaux dans la table." };
          return { success:true, message:"Trois entrées bien rangées dans ta base !" };
        }
      },
      difficile: {
        instructions: "Ajoute 3 animaux et vérifie (avec console.log) que chacun a bien reçu un <code>id</code> différent, automatiquement.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\n\n\n\nconsole.log(animaux.tous());" }],
        showConsole: true,
        hints: ["Regarde le résultat de animaux.tous() dans la console : chaque objet doit avoir un id différent (1, 2, 3)."],
        solution: { js: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.ajouter({ nom: \"Minou\" });\nanimaux.ajouter({ nom: \"Titi\" });\nconsole.log(animaux.tous());" },
        check(doc, win, C){
          const db = C.db();
          if(!db) return { success:false, message:"Il manque createDatabase()." };
          const rows = db.table('animaux').tous();
          if(rows.length < 3) return { success:false, message:"Il me faut au moins 3 animaux." };
          const ids = new Set(rows.map(r => r.id));
          if(ids.size < rows.length) return { success:false, message:"Chaque animal devrait avoir un id différent." };
          return { success:true, message:"Tu as compris que chaque entrée reçoit un identifiant unique !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch8-l2',
    title: "Trouver une information précise",
    icon: '🔎',
    explanation: [
      { type:'text', heading:"Retrouver UNE chose parmi des milliers", html:
        "<p>Grâce à l'<code>id</code> unique donné à chaque entrée, on peut retrouver exactement UNE information avec <code>.trouverParId(id)</code>, même s'il y en a des milliers dans la table !</p>" },
      { type:'code', code: "const animal = animaux.trouverParId(2);\nconsole.log(animal);" },
      { type:'tip', html:"Si l'id demandé n'existe pas, <code>.trouverParId(...)</code> répond <code>null</code> (rien) — pense toujours à vérifier avant de l'utiliser !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.ajouter({ nom: \"Minou\" });\nconsole.log(animaux.trouverParId(2));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Ajoute un animal, puis retrouve-le avec <code>.trouverParId(1)</code> et affiche-le.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\n\nconsole.log(animaux.trouverParId(1));" }],
        showConsole: true,
        hints: ["Le code est presque complet, vérifie juste que trouverParId(1) est bien appelé."],
        solution: { js: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nconsole.log(animaux.trouverParId(1));" },
        check(doc, win, C, logs){
          const db = C.db();
          if(!db) return { success:false, message:"Il manque createDatabase()." };
          const found = db.table('animaux').trouverParId(1);
          if(!found) return { success:false, message:"trouverParId(1) devrait renvoyer l'animal ajouté." };
          if(logs.length < 1) return { success:false, message:"Affiche le résultat avec console.log." };
          return { success:true, message:"Tu sais retrouver une entrée précise !" };
        }
      },
      moyen: {
        instructions: "Ajoute 3 animaux, puis retrouve précisément le DEUXIÈME (id 2) avec <code>.trouverParId(...)</code>.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.ajouter({ nom: \"Minou\" });\nanimaux.ajouter({ nom: \"Titi\" });\n\nconsole.log(animaux.trouverParId(2));" }],
        showConsole: true,
        hints: ["Le deuxième animal ajouté a l'id 2."],
        solution: { js: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.ajouter({ nom: \"Minou\" });\nanimaux.ajouter({ nom: \"Titi\" });\nconsole.log(animaux.trouverParId(2));" },
        check(doc, win, C){
          const db = C.db();
          if(!db) return { success:false, message:"Il manque createDatabase()." };
          const found = db.table('animaux').trouverParId(2);
          if(!found || found.nom !== 'Minou') return { success:false, message:"trouverParId(2) devrait renvoyer le deuxième animal ajouté (Minou)." };
          return { success:true, message:"Tu retrouves exactement la bonne entrée !" };
        }
      },
      difficile: {
        instructions: "Ajoute 2 animaux, puis essaie <code>.trouverParId(99)</code> (un id qui n'existe pas). Vérifie avec console.log que le résultat est bien <code>null</code>.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.ajouter({ nom: \"Minou\" });\n\nconsole.log(animaux.trouverParId(99));" }],
        showConsole: true,
        hints: ["Le code est déjà écrit : regarde bien ce que trouverParId(99) affiche dans la console."],
        solution: { js: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.ajouter({ nom: \"Minou\" });\nconsole.log(animaux.trouverParId(99));" },
        check(doc, win, C){
          const db = C.db();
          if(!db) return { success:false, message:"Il manque createDatabase()." };
          const found = db.table('animaux').trouverParId(99);
          if(found !== null) return { success:false, message:"Un id qui n'existe pas devrait renvoyer null." };
          return { success:true, message:"Tu as compris ce qui se passe quand une recherche ne trouve rien !" };
        }
      }
    }
  },

  // ============ LEÇON 3 ============
  {
    id: 'ch8-l3',
    title: "Modifier une donnée",
    icon: '✏️',
    explanation: [
      { type:'text', heading:"Corriger sans tout recommencer", html:
        "<p><code>.modifier(id, nouvellesValeurs)</code> change certaines informations d'une entrée SANS effacer le reste. Par exemple, changer juste l'âge d'un animal sans toucher à son nom.</p>" },
      { type:'code', code: "animaux.modifier(1, { age: 4 });\nconsole.log(animaux.trouverParId(1));" },
      { type:'tip', html:"C'est exactement ce qui se passe quand tu changes ta photo de profil sur une appli : seule la photo change, ton nom et tes autres informations restent les mêmes !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\", age: 2 });\nanimaux.modifier(1, { age: 3 });\nconsole.log(animaux.trouverParId(1));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Ajoute un animal avec un <code>nom</code>, puis modifie son nom avec <code>.modifier(1, { nom: \"...\" })</code>.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\n\n// Modifie le nom ici\n\nconsole.log(animaux.trouverParId(1));" }],
        showConsole: true,
        hints: ["animaux.modifier(1, { nom: \"Max\" });"],
        solution: { js: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.modifier(1, { nom: \"Max\" });\nconsole.log(animaux.trouverParId(1));" },
        check(doc, win, C){
          const db = C.db();
          if(!db) return { success:false, message:"Il manque createDatabase()." };
          const found = db.table('animaux').trouverParId(1);
          if(!found || found.nom === 'Rex') return { success:false, message:"Le nom de l'animal devrait avoir changé." };
          return { success:true, message:"Ta modification fonctionne !" };
        }
      },
      moyen: {
        instructions: "Ajoute 2 animaux, modifie SEULEMENT le premier, et vérifie que le deuxième n'a pas changé.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.ajouter({ nom: \"Minou\" });\n\n// Modifie seulement l'animal 1\n" }],
        showConsole: true,
        hints: ["animaux.modifier(1, { nom: \"Max\" }); (ne touche pas à l'id 2)"],
        solution: { js: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.ajouter({ nom: \"Minou\" });\nanimaux.modifier(1, { nom: \"Max\" });" },
        check(doc, win, C){
          const db = C.db();
          if(!db) return { success:false, message:"Il manque createDatabase()." };
          const t = db.table('animaux');
          const a1 = t.trouverParId(1), a2 = t.trouverParId(2);
          if(!a1 || a1.nom === 'Rex') return { success:false, message:"Le premier animal devrait avoir été modifié." };
          if(!a2 || a2.nom !== 'Minou') return { success:false, message:"Le deuxième animal ne devrait PAS avoir changé." };
          return { success:true, message:"Tu modifies précisément une entrée sans toucher aux autres !" };
        }
      },
      difficile: {
        instructions: "Ajoute un animal avec <code>nom</code> ET <code>type</code>. Modifie SEULEMENT le <code>type</code>, et vérifie que le <code>nom</code> original est toujours là (mise à jour partielle).",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\", type: \"chien\" });\n\n// Modifie seulement le type\n\nconsole.log(animaux.trouverParId(1));" }],
        showConsole: true,
        hints: ["animaux.modifier(1, { type: \"chiot\" }); ne modifie que le champ type."],
        solution: { js: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\", type: \"chien\" });\nanimaux.modifier(1, { type: \"chiot\" });\nconsole.log(animaux.trouverParId(1));" },
        check(doc, win, C){
          const db = C.db();
          if(!db) return { success:false, message:"Il manque createDatabase()." };
          const found = db.table('animaux').trouverParId(1);
          if(!found) return { success:false, message:"Il manque l'animal avec l'id 1." };
          if(found.nom !== 'Rex') return { success:false, message:"Le nom \"Rex\" devrait être resté intact." };
          if(found.type === 'chien') return { success:false, message:"Le type devrait avoir changé." };
          return { success:true, message:"Une mise à jour partielle parfaite, comme un vrai backend !" };
        }
      }
    }
  },

  // ============ LEÇON 4 ============
  {
    id: 'ch8-l4',
    title: "Supprimer une donnée",
    icon: '🗑️',
    explanation: [
      { type:'text', heading:"Effacer pour de bon", html:
        "<p><code>.supprimer(id)</code> enlève définitivement une entrée de la table. C'est la dernière des 4 actions CRUD : Créer, Lire, Modifier, <strong>Supprimer</strong> !</p>" },
      { type:'code', code: "animaux.supprimer(1);\nconsole.log(animaux.tous());" },
      { type:'tip', html:"Dans une vraie application, on demande souvent \"Es-tu sûr ?\" avant de supprimer, car une suppression dans une vraie base de données est très difficile à annuler !" },
      { type:'demo', tabs:[{ type:'js', starter:
        "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.ajouter({ nom: \"Minou\" });\nanimaux.supprimer(1);\nconsole.log(animaux.tous());" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Ajoute un animal, puis supprime-le avec <code>.supprimer(1)</code>. Vérifie que la table est vide.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\n\n// Supprime-le ici\n\nconsole.log(animaux.tous());" }],
        showConsole: true,
        hints: ["animaux.supprimer(1);"],
        solution: { js: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.supprimer(1);\nconsole.log(animaux.tous());" },
        check(doc, win, C){
          const db = C.db();
          if(!db) return { success:false, message:"Il manque createDatabase()." };
          if(db.table('animaux').compter() !== 0) return { success:false, message:"La table devrait être vide après la suppression." };
          return { success:true, message:"Ta première suppression fonctionne !" };
        }
      },
      moyen: {
        instructions: "Ajoute 3 animaux, supprime seulement celui avec l'id 2, et vérifie qu'il en reste exactement 2, sans le bon animal manquant.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.ajouter({ nom: \"Minou\" });\nanimaux.ajouter({ nom: \"Titi\" });\n\n// Supprime l'animal avec l'id 2\n" }],
        showConsole: true,
        hints: ["animaux.supprimer(2);"],
        solution: { js: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nanimaux.ajouter({ nom: \"Minou\" });\nanimaux.ajouter({ nom: \"Titi\" });\nanimaux.supprimer(2);" },
        check(doc, win, C){
          const db = C.db();
          if(!db) return { success:false, message:"Il manque createDatabase()." };
          const t = db.table('animaux');
          if(t.compter() !== 2) return { success:false, message:"Il devrait rester exactement 2 animaux." };
          if(t.trouverParId(2) !== null) return { success:false, message:"L'animal avec l'id 2 devrait avoir été supprimé." };
          if(!t.trouverParId(1) || !t.trouverParId(3)) return { success:false, message:"Les animaux 1 et 3 devraient toujours être là." };
          return { success:true, message:"Une suppression précise, sans toucher au reste !" };
        }
      },
      difficile: {
        instructions: "Essaie de supprimer un id qui n'existe pas (<code>.supprimer(99)</code>) : ça ne doit pas planter. Puis supprime un vrai animal et vérifie que ça fonctionne.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\n\nconsole.log(animaux.supprimer(99));\n\n// Supprime le vrai animal (id 1) ici\n" }],
        showConsole: true,
        hints: ["animaux.supprimer(99); devrait renvoyer false sans planter.", "animaux.supprimer(1); pour le vrai animal."],
        solution: { js: "const db = createDatabase();\nconst animaux = db.table(\"animaux\");\nanimaux.ajouter({ nom: \"Rex\" });\nconsole.log(animaux.supprimer(99));\nanimaux.supprimer(1);" },
        check(doc, win, C, logs, errors){
          const db = C.db();
          if(!db) return { success:false, message:"Il manque createDatabase()." };
          if(errors.length > 0) return { success:false, message:"Ton code plante en essayant de supprimer un id inexistant." };
          if(db.table('animaux').compter() !== 0) return { success:false, message:"L'animal réel aurait dû être supprimé à la fin." };
          return { success:true, message:"Ton code résiste même aux suppressions impossibles, très robuste !" };
        }
      }
    }
  },

  // ============ LEÇON 5 — PROJET FINAL ============
  {
    id: 'ch8-l5',
    title: "🏆 Projet : mon carnet d'adresses",
    icon: '🏆',
    explanation: [
      { type:'text', heading:"Le grand final : serveur + base de données", html:
        "<p>Il est temps de connecter TOUT ce que tu as appris : un serveur (Chapitre 7) qui utilise une vraie base de données (ce chapitre) au lieu d'un simple tableau. C'est exactement l'architecture des vraies applications professionnelles !</p>" },
      { type:'tip', html:"Crée ta base de données AVANT tes routes, pour que toutes les routes puissent y accéder." },
      { type:'demo', tabs:[{ type:'js', starter:
        "const db = createDatabase();\nconst contacts = db.table(\"contacts\");\nconst server = createServer();\n\nserver.post(\"/contacts\", function(req, res) {\n  const nouveau = contacts.ajouter(req.body);\n  res.status(201).json(nouveau);\n});\nserver.get(\"/contacts\", function(req, res) {\n  res.json(contacts.tous());\n});\nserver.listen();\n\nconsole.log(request(\"POST\", \"/contacts\", { nom: \"Alice\" }));\nconsole.log(request(\"GET\", \"/contacts\"));" }], showConsole:true }
    ],
    exercises: {
      facile: {
        instructions: "Crée une base de données avec une table <code>\"contacts\"</code>, un serveur, et une route POST <code>/contacts</code> qui ajoute <code>req.body</code> à la table.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst contacts = db.table(\"contacts\");\nconst server = createServer();\n\n// Ta route POST ici\n\nserver.listen();" }],
        showConsole: true,
        hints: ["server.post(\"/contacts\", function(req, res) {\n  contacts.ajouter(req.body);\n  res.status(201).send(\"Ajouté\");\n});"],
        solution: { js: "const db = createDatabase();\nconst contacts = db.table(\"contacts\");\nconst server = createServer();\nserver.post(\"/contacts\", function(req, res) {\n  contacts.ajouter(req.body);\n  res.status(201).send(\"Ajouté\");\n});\nserver.listen();" },
        check(doc, win, C){
          const r = C.request('POST', '/contacts', { nom: 'Alice' });
          if(r.status === 404) return { success:false, message:"Il manque la route POST /contacts." };
          const db = C.db();
          if(!db || db.table('contacts').compter() < 1) return { success:false, message:"Le contact devrait avoir été ajouté dans la base de données." };
          return { success:true, message:"Ton serveur enregistre maintenant dans une vraie base de données !" };
        }
      },
      moyen: {
        instructions: "Ajoute une route GET <code>/contacts</code> qui répond en JSON avec TOUS les contacts de la table.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst contacts = db.table(\"contacts\");\nconst server = createServer();\nserver.post(\"/contacts\", function(req, res) {\n  contacts.ajouter(req.body);\n  res.status(201).send(\"Ajouté\");\n});\n\n// Ta route GET ici\n\nserver.listen();" }],
        showConsole: true,
        hints: ["server.get(\"/contacts\", function(req, res) { res.json(contacts.tous()); });"],
        solution: { js: "const db = createDatabase();\nconst contacts = db.table(\"contacts\");\nconst server = createServer();\nserver.post(\"/contacts\", function(req, res) {\n  contacts.ajouter(req.body);\n  res.status(201).send(\"Ajouté\");\n});\nserver.get(\"/contacts\", function(req, res) {\n  res.json(contacts.tous());\n});\nserver.listen();" },
        check(doc, win, C){
          C.request('POST', '/contacts', { nom: 'Alice' });
          const get = C.request('GET', '/contacts');
          if(get.status === 404) return { success:false, message:"Il manque la route GET /contacts." };
          if(!Array.isArray(get.body) || get.body.length < 1) return { success:false, message:"La route GET devrait répondre un tableau contenant le contact ajouté." };
          return { success:true, message:"Ton API relie parfaitement serveur et base de données !" };
        }
      },
      difficile: {
        instructions: "Ajoute 3 contacts différents avec POST, puis vérifie avec GET qu'ils sont bien tous les 3 présents, chacun avec un id différent.",
        tabs: [{ type:'js', starter: "const db = createDatabase();\nconst contacts = db.table(\"contacts\");\nconst server = createServer();\nserver.post(\"/contacts\", function(req, res) {\n  const nouveau = contacts.ajouter(req.body);\n  res.status(201).json(nouveau);\n});\nserver.get(\"/contacts\", function(req, res) {\n  res.json(contacts.tous());\n});\nserver.listen();\n\n// Ajoute 3 contacts avec request(\"POST\", \"/contacts\", {...}) ici" }],
        showConsole: true,
        hints: ["Appelle request(\"POST\", \"/contacts\", { nom: \"...\" }); trois fois avec des noms différents."],
        solution: { js: "const db = createDatabase();\nconst contacts = db.table(\"contacts\");\nconst server = createServer();\nserver.post(\"/contacts\", function(req, res) {\n  const nouveau = contacts.ajouter(req.body);\n  res.status(201).json(nouveau);\n});\nserver.get(\"/contacts\", function(req, res) {\n  res.json(contacts.tous());\n});\nserver.listen();\nrequest(\"POST\", \"/contacts\", { nom: \"Alice\" });\nrequest(\"POST\", \"/contacts\", { nom: \"Bob\" });\nrequest(\"POST\", \"/contacts\", { nom: \"Chloé\" });" },
        check(doc, win, C){
          const get = C.request('GET', '/contacts');
          if(!Array.isArray(get.body) || get.body.length < 3) return { success:false, message:"Il devrait déjà y avoir 3 contacts ajoutés avant cette vérification." };
          const ids = new Set(get.body.map(c => c.id));
          if(ids.size < get.body.length) return { success:false, message:"Chaque contact devrait avoir un id différent." };
          return { success:true, message:"🏆 BRAVO ! Ton API complète avec base de données fonctionne parfaitement. Chapitre 8 terminé — tu maîtrises maintenant tout le backend !" };
        }
      }
    }
  }

  ]
};
