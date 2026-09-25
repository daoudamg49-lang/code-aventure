const CHAPTER_9 = {
  id: 'ch9',
  title: 'Les outils du développeur (F12)',
  subtitle: "Découvre les super-pouvoirs cachés de ton navigateur",
  icon: '🛠️',
  lessons: [

  // ============ LEÇON 1 ============
  {
    id: 'ch9-l1',
    title: "Découvrir la Console",
    icon: '🖥️',
    explanation: [
      { type:'text', heading:"Un super-pouvoir caché dans ton navigateur", html:
        "<p>Chaque navigateur (Chrome, Firefox, Edge...) cache un outil incroyable : les <strong>outils de développeur</strong> (DevTools). Pour les ouvrir, appuie sur la touche <code>F12</code>, ou fais un clic droit sur une page puis choisis <strong>\"Inspecter\"</strong>.</p>" },
      { type:'text', heading:"Les onglets importants", html:
        "<p>En haut des outils de développeur, tu verras plusieurs onglets : <strong>Elements</strong> (ou \"Éléments\", pour voir et modifier le HTML/CSS en direct), <strong>Console</strong> (pour taper du JavaScript et voir les messages), et <strong>Network</strong> (\"Réseau\", pour voir les vraies requêtes entre le client et le serveur — comme au Chapitre 7 !).</p>" },
      { type:'tip', html:"Tu peux ouvrir les outils de développeur sur <strong>N'IMPORTE QUEL site</strong> — même tes jeux en ligne préférés — pour regarder comment ils sont construits ! (Mais attention : ce que tu modifies dans la console n'est visible que par TOI, et disparaît si tu recharges la page.)" },
      { type:'text', heading:"À toi de jouer, pour de vrai !", html:
        "<p>Les exercices de ce chapitre sont différents : ouvre <strong>vraiment</strong> les outils de développeur de ton navigateur (F12), trouve l'onglet <strong>Console</strong>, et tape les commandes demandées directement dedans. Reviens ensuite ici cliquer sur \"Vérifier mon code\" !</p>" }
    ],
    exercises: {
      facile: {
        kind: 'devtools',
        zoneId: 'zone-ch9-l1-facile',
        zoneHtml: "Zone d'entraînement",
        instructions: "Ouvre la Console (F12 puis onglet <strong>Console</strong>). Tape cette commande et appuie sur Entrée : <div class=\"code-block\">document.getElementById(\"zone-ch9-l1-facile\").style.backgroundColor = \"yellow\";</div>",
        hints: ["N'oublie pas les guillemets et le point-virgule à la fin.", "La zone doit devenir jaune une fois la commande exécutée."],
        solution: { console: "document.getElementById(\"zone-ch9-l1-facile\").style.backgroundColor = \"yellow\";" },
        check(zone){
          if(!zone) return { success:false, message:"Zone introuvable, réinitialise l'exercice." };
          const bg = getComputedStyle(zone).backgroundColor;
          if(!Utils.colorsEqual(bg, 'yellow')) return { success:false, message:"La zone n'est pas encore jaune. As-tu bien tapé la commande dans la Console ?" };
          return { success:true, message:"Tu as changé une vraie page avec la Console !" };
        }
      },
      moyen: {
        kind: 'devtools',
        zoneId: 'zone-ch9-l1-moyen',
        zoneHtml: "Zone d'entraînement",
        instructions: "Dans la Console, tape cette commande pour changer le texte de la zone : <div class=\"code-block\">document.getElementById(\"zone-ch9-l1-moyen\").textContent = \"J'ai réussi !\";</div>",
        hints: ["Utilise .textContent = \"...\" pour changer le texte affiché."],
        solution: { console: "document.getElementById(\"zone-ch9-l1-moyen\").textContent = \"J'ai réussi !\";" },
        check(zone){
          if(!zone) return { success:false, message:"Zone introuvable, réinitialise l'exercice." };
          if(!zone.textContent.includes("J'ai réussi")) return { success:false, message:"Le texte de la zone n'a pas encore changé comme attendu." };
          return { success:true, message:"Tu contrôles le texte de la page depuis la Console !" };
        }
      },
      difficile: {
        kind: 'devtools',
        zoneId: 'zone-ch9-l1-difficile',
        zoneHtml: "Zone d'entraînement",
        instructions: "Dans la Console, tape ces 3 lignes (une par une, Entrée après chaque ligne) pour changer PLUSIEURS choses à la fois : <div class=\"code-block\">let zone = document.getElementById(\"zone-ch9-l1-difficile\");\nzone.style.border = \"4px solid green\";\nzone.style.fontWeight = \"bold\";</div>",
        hints: ["Tape chaque ligne séparément, puis Entrée.", "Après les 3 lignes, la zone doit avoir une bordure verte ET un texte en gras."],
        solution: { console: "let zone = document.getElementById(\"zone-ch9-l1-difficile\");\nzone.style.border = \"4px solid green\";\nzone.style.fontWeight = \"bold\";" },
        check(zone){
          if(!zone) return { success:false, message:"Zone introuvable, réinitialise l'exercice." };
          const s = getComputedStyle(zone);
          if(parseInt(s.borderTopWidth) < 2) return { success:false, message:"Il manque une bordure sur la zone." };
          if(!(s.fontWeight === 'bold' || parseInt(s.fontWeight) >= 700)) return { success:false, message:"Le texte n'est pas encore en gras." };
          return { success:true, message:"Tu combines plusieurs commandes dans la vraie Console, bravo !" };
        }
      }
    }
  },

  // ============ LEÇON 2 ============
  {
    id: 'ch9-l2',
    title: "Inspecter et modifier avec Elements",
    icon: '🔍',
    explanation: [
      { type:'text', heading:"Voir et changer le HTML en direct", html:
        "<p>L'onglet <strong>Elements</strong> (ou \"Éléments\") montre tout le HTML de la page, comme du code. <strong>Double-clique</strong> sur un texte pour le modifier directement ! Tu peux aussi cliquer sur une balise pour voir ses styles CSS à droite, et même en ajouter de nouveaux.</p>" },
      { type:'text', heading:"Clic droit = super pouvoirs", html:
        "<p>Fais un clic droit sur n'importe quel élément dans l'onglet Elements : tu peux <strong>\"Supprimer l'élément\"</strong>, <strong>\"Modifier en HTML\"</strong>, et bien plus !</p>" },
      { type:'tip', html:"Tu peux résoudre les exercices suivants avec la Console (comme avant) OU avec l'onglet Elements directement : les deux fonctionnent, choisis ce que tu préfères !" }
    ],
    exercises: {
      facile: {
        kind: 'devtools',
        zoneId: 'zone-ch9-l2-facile',
        zoneHtml: "Texte à changer",
        instructions: "Ouvre l'onglet <strong>Elements</strong>, trouve la zone (id <code>zone-ch9-l2-facile</code>), <strong>double-clique</strong> sur son texte et remplace-le par \"Modifié !\". (Ou utilise la Console si tu préfères.)",
        hints: ["Dans Elements, double-clique directement sur le texte pour le rendre modifiable.", "Ou en Console : document.getElementById(\"zone-ch9-l2-facile\").textContent = \"Modifié !\";"],
        solution: { console: "document.getElementById(\"zone-ch9-l2-facile\").textContent = \"Modifié !\";" },
        check(zone){
          if(!zone) return { success:false, message:"Zone introuvable, réinitialise l'exercice." };
          if(zone.textContent.trim() === "Texte à changer" || zone.textContent.trim().length < 2) return { success:false, message:"Le texte de la zone n'a pas encore changé." };
          return { success:true, message:"Tu modifies le HTML en direct, comme un vrai développeur !" };
        }
      },
      moyen: {
        kind: 'devtools',
        zoneId: 'zone-ch9-l2-moyen',
        zoneHtml: "Arrondis-moi !",
        instructions: "Dans l'onglet Elements, sélectionne la zone, et dans le panneau Styles à droite, ajoute une nouvelle règle : <code>border-radius: 30px;</code>. (Ou en Console.)",
        hints: ["Dans Elements > Styles, clique sur la zone vide et tape border-radius: 30px;", "Ou en Console : document.getElementById(\"zone-ch9-l2-moyen\").style.borderRadius = \"30px\";"],
        solution: { console: "document.getElementById(\"zone-ch9-l2-moyen\").style.borderRadius = \"30px\";" },
        check(zone){
          if(!zone) return { success:false, message:"Zone introuvable, réinitialise l'exercice." };
          const r = parseFloat(getComputedStyle(zone).borderTopLeftRadius);
          if(!r || r < 10) return { success:false, message:"La zone n'a pas encore de coins arrondis." };
          return { success:true, message:"Tu ajoutes du CSS en direct, exactement comme un designer !" };
        }
      },
      difficile: {
        kind: 'devtools',
        zoneId: 'zone-ch9-l2-difficile',
        zoneHtml: "<span>Garde-moi</span><span id=\"a-supprimer-ch9\" style=\"color:red;\"> — Supprime-moi !</span>",
        instructions: "Dans l'onglet Elements, trouve l'élément avec l'id <code>a-supprimer-ch9</code> (le texte rouge), clique droit dessus puis choisis <strong>\"Supprimer l'élément\"</strong>. (Ou en Console avec <code>.remove()</code>.)",
        hints: ["Clic droit sur l'élément dans Elements > \"Delete element\" / \"Supprimer l'élément\".", "Ou en Console : document.getElementById(\"a-supprimer-ch9\").remove();"],
        solution: { console: "document.getElementById(\"a-supprimer-ch9\").remove();" },
        check(zone){
          if(!zone) return { success:false, message:"Zone introuvable, réinitialise l'exercice." };
          if(document.getElementById('a-supprimer-ch9')) return { success:false, message:"L'élément à supprimer est encore présent." };
          return { success:true, message:"Tu sais retirer un élément de la page, tu es un vrai pro d'Elements !" };
        }
      }
    }
  },

  // ============ LEÇON 3 — PROJET FINAL ============
  {
    id: 'ch9-l3',
    title: "🏆 Mission : répare la page",
    icon: '🛠️',
    explanation: [
      { type:'text', heading:"Tout combiner : la Console, Elements, et le Network", html:
        "<p>Tu maîtrises maintenant la Console et l'onglet Elements. Il existe aussi l'onglet <strong>Network</strong> (\"Réseau\") : ouvre-le, puis recharge une vraie page (F5) — tu verras apparaître, un par un, TOUS les fichiers demandés au serveur (images, styles, scripts...). C'est exactement ce dont on parlait au Chapitre 7, mais en vrai, sous tes yeux !</p>" },
      { type:'tip', html:"Les développeurs professionnels utilisent la Console et Elements TOUS LES JOURS pour trouver et réparer des bugs (\"déboguer\"). Tu viens d'apprendre une vraie compétence de développeur !" }
    ],
    exercises: {
      facile: {
        kind: 'devtools',
        zoneId: 'zone-ch9-l3-facile',
        zoneHtml: "Erreur 404 !",
        instructions: "Cette zone affiche un message d'erreur cassé. Utilise la Console ou Elements pour changer son texte en \"Tout fonctionne !\".",
        hints: ["document.getElementById(\"zone-ch9-l3-facile\").textContent = \"Tout fonctionne !\";"],
        solution: { console: "document.getElementById(\"zone-ch9-l3-facile\").textContent = \"Tout fonctionne !\";" },
        check(zone){
          if(!zone) return { success:false, message:"Zone introuvable, réinitialise l'exercice." };
          if(!zone.textContent.toLowerCase().includes('fonctionne')) return { success:false, message:"Le message d'erreur n'a pas encore été réparé." };
          return { success:true, message:"Bug réparé, comme un vrai développeur !" };
        }
      },
      moyen: {
        kind: 'devtools',
        zoneId: 'zone-ch9-l3-moyen',
        zoneHtml: "Cette page est cassée",
        zoneStyle: "color:red;text-decoration:line-through;",
        instructions: "Cette zone a un style cassé (texte barré et rouge). Répare-la : remets <code>color</code> à <code>black</code> et enlève le <code>text-decoration</code> (mets-le à <code>\"none\"</code>).",
        hints: [
          "document.getElementById(\"zone-ch9-l3-moyen\").style.color = \"black\";",
          "document.getElementById(\"zone-ch9-l3-moyen\").style.textDecoration = \"none\";"
        ],
        solution: { console: "let z = document.getElementById(\"zone-ch9-l3-moyen\");\nz.style.color = \"black\";\nz.style.textDecoration = \"none\";" },
        check(zone){
          if(!zone) return { success:false, message:"Zone introuvable, réinitialise l'exercice." };
          const s = getComputedStyle(zone);
          if(Utils.colorsEqual(s.color, 'red')) return { success:false, message:"Le texte est encore rouge." };
          if(s.textDecorationLine !== 'none') return { success:false, message:"Le texte est encore barré." };
          return { success:true, message:"Page réparée, plus aucune trace du bug !" };
        }
      },
      difficile: {
        kind: 'devtools',
        zoneId: 'zone-ch9-l3-difficile',
        zoneHtml: "<span id=\"message-cache-ch9\" style=\"display:none;\">🎉 Message secret débloqué !</span><span id=\"element-inutile-ch9\">(à supprimer)</span>",
        instructions: "Deux missions : 1) Affiche le message caché (<code>#message-cache-ch9</code>, actuellement en <code>display:none</code>). 2) Supprime l'élément inutile (<code>#element-inutile-ch9</code>).",
        hints: [
          "document.getElementById(\"message-cache-ch9\").style.display = \"inline\";",
          "document.getElementById(\"element-inutile-ch9\").remove();"
        ],
        solution: { console: "document.getElementById(\"message-cache-ch9\").style.display = \"inline\";\ndocument.getElementById(\"element-inutile-ch9\").remove();" },
        check(zone){
          if(!zone) return { success:false, message:"Zone introuvable, réinitialise l'exercice." };
          const msg = document.getElementById('message-cache-ch9');
          if(!msg || getComputedStyle(msg).display === 'none') return { success:false, message:"Le message secret est encore caché." };
          if(document.getElementById('element-inutile-ch9')) return { success:false, message:"L'élément inutile est encore présent." };
          return { success:true, message:"🏆 BRAVO ! Tu as réussi ta première vraie mission de débogage avec les outils de développeur. Chapitre 9 terminé !" };
        }
      }
    }
  }

  ]
};
