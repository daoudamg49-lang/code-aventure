const PRAISE = [
  "Trop fort ! 🎉", "Bravo Daouda ! 🥳", "Génial, continue comme ça ! 🚀",
  "Tu deviens un vrai codeur ! 🦊", "Excellent travail ! ⭐", "Tu as tout compris ! 💪"
];
const DIFF_LABEL = { facile: '🟢 Facile', moyen: '🟡 Moyen', difficile: '🔴 Difficile' };

const UI = {
  activeExerciseTab: {},

  init(){
    this.renderSidebar();
    this.updateXpUI();
    window.addEventListener('hashchange', () => this.renderRoute());
    document.getElementById('sidebar-toggle').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
    });
    document.getElementById('reset-progress-btn').addEventListener('click', () => {
      if(confirm('Veux-tu vraiment recommencer toute ta progression depuis le début ?')){
        State.reset();
        this.renderSidebar();
        this.updateXpUI();
        this.renderRoute();
        Effects.toast('Progression réinitialisée !', '↺');
      }
    });
    this.renderRoute();
  },

  updateXpUI(){
    const info = State.levelInfo();
    document.getElementById('xp-total').textContent = info.xp;
    document.getElementById('xp-bar-fill').style.width = info.pct + '%';
    document.getElementById('xp-level-label').textContent = `Niveau ${info.levelIdx + 1} — ${info.label}`;
  },

  renderSidebar(activeLessonId){
    const nav = document.getElementById('chapter-nav');
    nav.innerHTML = '';
    App.CHAPTERS.forEach((chapter, ci) => {
      const prog = State.chapterProgress(chapter);
      const group = document.createElement('div');
      group.className = 'chapter-group';
      const containsActive = chapter.lessons.some(l => l.id === activeLessonId);
      if(containsActive || ci === 0) group.classList.add('open');

      const header = document.createElement('div');
      header.className = 'chapter-header';
      header.innerHTML = `<span class="ch-icon">${chapter.icon}</span><span>${Utils.esc(chapter.title)}</span><span class="ch-progress">${prog.done}/${prog.total}</span><span class="ch-caret">▶</span>`;
      header.addEventListener('click', () => group.classList.toggle('open'));
      group.appendChild(header);

      const list = document.createElement('div');
      list.className = 'lesson-list';
      chapter.lessons.forEach((lesson, li) => {
        const globalIdx = App.flatIndex(lesson.id);
        const unlocked = State.isLessonUnlocked(lesson.id, globalIdx);
        const done = State.isLessonComplete(lesson.id);
        const item = document.createElement('div');
        item.className = 'lesson-item' + (lesson.id === activeLessonId ? ' active' : '') + (!unlocked ? ' locked' : '');
        const statusIcon = done ? '✅' : (unlocked ? '○' : '🔒');
        item.innerHTML = `<span class="li-status">${statusIcon}</span><span>${li + 1}. ${Utils.esc(lesson.title)}</span>`;
        if(unlocked){
          item.addEventListener('click', () => { location.hash = `#/lesson/${lesson.id}`; document.getElementById('sidebar').classList.remove('open'); });
        }
        list.appendChild(item);
      });
      group.appendChild(list);
      nav.appendChild(group);
    });
  },

  scrollTopReset(){
    window.scrollTo({ top: 0, behavior: 'instant' });
    if(App.windowScroll) App.windowScroll.reset();
  },

  renderRoute(){
    const hash = location.hash || '#/home';
    const m = hash.match(/^#\/lesson\/(.+)$/);
    if(m){
      this.renderLesson(m[1]);
    } else {
      this.renderHome();
    }
  },

  renderHome(){
    this.scrollTopReset();
    document.getElementById('breadcrumb').textContent = 'Accueil';
    const content = document.getElementById('content');
    const totalDone = App.FLAT.reduce((acc, f) => acc + State.lessonDoneCount(f.lesson.id), 0);
    const totalAll = App.FLAT.length * 3;
    content.innerHTML = `
      <div class="hero">
        <span class="hero-emoji">🦊</span>
        <h1>Salut Daouda !</h1>
        <p>Bienvenue dans ton aventure pour devenir un vrai créateur de sites web. Choisis un chapitre pour commencer à apprendre en t'amusant : tu vas écrire du vrai code et le voir fonctionner tout de suite !</p>
        <p><strong>Progression totale : ${totalDone} / ${totalAll} exercices réussis</strong></p>
      </div>
      <div class="chapters-grid" id="home-chapters"></div>
    `;
    const grid = document.getElementById('home-chapters');
    App.CHAPTERS.forEach(chapter => {
      const prog = State.chapterProgress(chapter);
      const card = document.createElement('div');
      card.className = 'chapter-card';
      card.innerHTML = `
        <div class="cc-icon">${chapter.icon}</div>
        <h3>${Utils.esc(chapter.title)}</h3>
        <div style="color:var(--text-soft); font-size:13.5px;">${Utils.esc(chapter.subtitle || '')}</div>
        <div class="cc-bar-track"><div class="cc-bar-fill" style="width:${prog.pct}%"></div></div>
        <div class="cc-count">${prog.done}/${prog.total} exercices • ${chapter.lessons.length} leçons</div>
      `;
      card.addEventListener('click', () => {
        const target = State.data.lastVisited && chapter.lessons.some(l => l.id === State.data.lastVisited)
          ? State.data.lastVisited : chapter.lessons[0].id;
        location.hash = `#/lesson/${target}`;
      });
      grid.appendChild(card);
    });
    this.renderSidebar();
  },

  renderLesson(lessonId){
    const found = App.findLesson(lessonId);
    if(!found){ location.hash = '#/home'; return; }
    const { lesson, chapter, globalIndex } = found;
    if(!State.isLessonUnlocked(lesson.id, globalIndex)){
      Effects.toast('Termine la leçon précédente pour débloquer celle-ci !', '🔒');
      location.hash = '#/home';
      return;
    }
    State.setLastVisited(lesson.id);
    this.renderSidebar(lesson.id);
    document.getElementById('breadcrumb').innerHTML = `<span class="crumb-chap">${Utils.esc(chapter.title)} ›</span> ${Utils.esc(lesson.title)}`;

    const content = document.getElementById('content');
    content.innerHTML = `
      <div class="lesson-header">
        <div class="lh-icon">${lesson.icon}</div>
        <div>
          <h1>${Utils.esc(lesson.title)}</h1>
          <div class="lh-sub">${Utils.esc(chapter.title)} · Leçon ${found.lessonIndex + 1}/${chapter.lessons.length}</div>
        </div>
      </div>
      <div class="card" id="explain-container"></div>
      <div class="card" id="exercises-card">
        <h2>🎯 À toi de jouer !</h2>
        <div class="exercise-tabs" id="exercise-tabs"></div>
        <div id="exercise-mount"></div>
      </div>
      <div class="lesson-nav-btns">
        <button class="reset-btn" id="prev-lesson-btn">⬅ Précédent</button>
        <button class="primary-btn" id="next-lesson-btn">Suivant ➡</button>
      </div>
    `;

    this.renderExplanation(document.getElementById('explain-container'), lesson);
    this.renderExerciseTabs(lesson);

    const prevBtn = document.getElementById('prev-lesson-btn');
    const nextBtn = document.getElementById('next-lesson-btn');
    const prevId = App.prevId(lesson.id);
    const nextId = App.nextId(lesson.id);
    prevBtn.disabled = !prevId;
    if(prevId) prevBtn.addEventListener('click', () => location.hash = `#/lesson/${prevId}`);
    if(!nextId){ nextBtn.textContent = '🏁 Dernière leçon !'; nextBtn.disabled = true; }
    else {
      nextBtn.addEventListener('click', () => {
        const nIdx = App.flatIndex(nextId);
        if(!State.isLessonUnlocked(nextId, nIdx)){
          Effects.toast('Réussis au moins l\'exercice Facile pour débloquer la suite !', '🔒');
          return;
        }
        location.hash = `#/lesson/${nextId}`;
      });
    }
    this.scrollTopReset();
  },

  renderExplanation(container, lesson){
    container.innerHTML = '';
    lesson.explanation.forEach((block, i) => {
      const div = document.createElement('div');
      div.className = 'explain-block';
      if(block.type === 'text'){
        div.innerHTML = `${block.heading ? `<h3>${Utils.esc(block.heading)}</h3>` : ''}${block.html}`;
        container.appendChild(div);
      } else if(block.type === 'code'){
        div.innerHTML = `<div class="code-block">${Utils.esc(block.code)}</div>`;
        container.appendChild(div);
      } else if(block.type === 'tip'){
        div.innerHTML = `<div class="tip-box">${block.html}</div>`;
        container.appendChild(div);
      } else if(block.type === 'demo'){
        div.innerHTML = `<div class="demo-label">🧪 Essaie toi-même !</div>`;
        const mount = document.createElement('div');
        div.appendChild(mount);
        container.appendChild(div);
        Editor.createPlayground(mount, {
          tabs: block.tabs,
          showConsole: !!block.showConsole,
          runLabel: 'Exécuter ▶'
        });
      } else if(block.type === 'terminal-demo'){
        div.innerHTML = `<div class="demo-label">🧪 Essaie toi-même !</div>`;
        const mount = document.createElement('div');
        div.appendChild(mount);
        container.appendChild(div);
        if(block.terminalType === 'fs'){
          Terminal.createFS(mount, { prompt: block.prompt || 'daouda@code-aventure:~$', intro: block.intro || [] });
        } else if(block.terminalType === 'net'){
          Terminal.createNet(mount, { prompt: block.prompt || 'daouda@code-aventure:~$', intro: block.intro || [] });
        } else {
          Terminal.create(mount, { files: block.files || [], prompt: block.prompt || 'daouda@code-aventure:~$', intro: block.intro || [] });
        }
      }
    });
  },

  renderExerciseTabs(lesson){
    const tabsEl = document.getElementById('exercise-tabs');
    tabsEl.innerHTML = '';
    const diffs = ['facile', 'moyen', 'difficile'];
    let defaultDiff = diffs.find(d => !State.isExerciseDone(lesson.id, d)) || 'facile';
    if(this.activeExerciseTab[lesson.id]) defaultDiff = this.activeExerciseTab[lesson.id];

    diffs.forEach(diff => {
      const btn = document.createElement('button');
      btn.className = 'ex-tab' + (diff === defaultDiff ? ' active' : '');
      btn.dataset.diff = diff;
      const done = State.isExerciseDone(lesson.id, diff);
      btn.innerHTML = `${DIFF_LABEL[diff]} ${done ? '<span class="ex-check">✅</span>' : ''}`;
      btn.addEventListener('click', () => {
        this.activeExerciseTab[lesson.id] = diff;
        [...tabsEl.children].forEach(b => b.classList.toggle('active', b === btn));
        this.mountExercise(lesson, diff);
      });
      tabsEl.appendChild(btn);
    });
    this.mountExercise(lesson, defaultDiff);
  },

  mountExercise(lesson, diff){
    const mount = document.getElementById('exercise-mount');
    mount.innerHTML = '';
    const ex = lesson.exercises[diff];
    const exerciseKey = lesson.id + '::' + diff;

    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <div class="difficulty-pill ${diff}">${DIFF_LABEL[diff]}</div>
      <div class="ex-instructions">${ex.instructions}</div>
    `;
    mount.appendChild(wrap);

    const pgMount = document.createElement('div');
    mount.appendChild(pgMount);

    const cached = State.getCachedCode(exerciseKey);
    const tabs = ex.tabs ? ex.tabs.map(t => ({ ...t, starter: (cached && cached[t.type] !== undefined) ? cached[t.type] : t.starter })) : [];

    const resultBanner = document.createElement('div');
    resultBanner.id = 'result-banner';
    mount.appendChild(resultBanner);

    const actions = document.createElement('div');
    actions.className = 'ex-actions';
    const hintBtn = document.createElement('button');
    hintBtn.className = 'hint-btn';
    hintBtn.textContent = '💡 Un indice ?';
    const solBtn = document.createElement('button');
    solBtn.className = 'solution-btn';
    solBtn.textContent = '🔓 Voir la solution';
    actions.appendChild(hintBtn);
    actions.appendChild(solBtn);
    mount.insertBefore(actions, resultBanner);

    const hintBox = document.createElement('div');
    hintBox.className = 'hint-box';
    hintBox.style.display = 'none';
    mount.insertBefore(hintBox, resultBanner);

    let hintIdx = 0;
    hintBtn.addEventListener('click', () => {
      if(!ex.hints || ex.hints.length === 0) return;
      hintBox.style.display = 'block';
      hintBox.innerHTML = `<strong>Indice ${hintIdx + 1}/${ex.hints.length} :</strong> ${Utils.esc(ex.hints[hintIdx])}`;
      hintIdx = Math.min(hintIdx + 1, ex.hints.length - 1);
      if(hintIdx === ex.hints.length - 1){
        setTimeout(() => { hintBtn.textContent = '💡 Un indice ? (dernier)'; }, 0);
      }
    });

    let solutionShown = false;
    solBtn.addEventListener('click', () => {
      solutionShown = !solutionShown;
      if(solutionShown){
        hintBox.style.display = 'block';
        const sol = ex.solution || {};
        const blocks = Object.keys(sol).map(k => `<div class="code-block">${Utils.esc(sol[k])}</div>`).join('');
        hintBox.innerHTML = `<strong>✨ Voici une solution possible :</strong>${blocks}<div style="margin-top:6px;font-weight:600;">Essaie de bien la comprendre avant de continuer !</div>`;
        solBtn.textContent = '🙈 Cacher la solution';
      } else {
        solBtn.textContent = '🔓 Voir la solution';
        hintBox.style.display = ex.hints && hintIdx > 0 ? 'block' : 'none';
      }
    });

    if(ex.kind === 'terminal'){
      UI.mountTerminalExercise(pgMount, lesson, diff, ex, resultBanner);
    } else if(ex.kind === 'devtools'){
      UI.mountDevtoolsExercise(pgMount, lesson, diff, ex, resultBanner);
    } else {
      Editor.createPlayground(pgMount, {
        tabs,
        showConsole: !!ex.showConsole,
        checkFnSource: 'function ' + ex.check.toString(),
        runLabel: '✅ Vérifier mon code',
        onSnapshot(codes){ State.setCachedCode(exerciseKey, codes); },
        onResult: (data) => UI.handleExerciseResult(lesson, diff, data, resultBanner)
      });
    }
  },

  mountDevtoolsExercise(pgMount, lesson, diff, ex, resultBanner){
    function build(){
      pgMount.innerHTML = '';
      const wrap = document.createElement('div');
      wrap.className = 'devtools-zone-wrap';
      const label = document.createElement('div');
      label.className = 'devtools-zone-label';
      label.innerHTML = `🎯 Zone d'entraînement — id : <code>#${ex.zoneId}</code>`;
      const zone = document.createElement('div');
      zone.id = ex.zoneId;
      zone.className = 'devtools-zone';
      zone.innerHTML = ex.zoneHtml || "Zone d'entraînement";
      if(ex.zoneStyle) zone.style.cssText += ex.zoneStyle;
      wrap.appendChild(label);
      wrap.appendChild(zone);
      pgMount.appendChild(wrap);

      const toolbar = document.createElement('div');
      toolbar.className = 'pg-toolbar';
      toolbar.style.borderRadius = '0 0 16px 16px';
      const runBtn = document.createElement('button');
      runBtn.className = 'run-btn';
      runBtn.textContent = '✅ Vérifier mon code';
      const resetBtn = document.createElement('button');
      resetBtn.className = 'reset-btn';
      resetBtn.textContent = '↺ Réinitialiser';
      toolbar.appendChild(runBtn);
      toolbar.appendChild(resetBtn);
      pgMount.appendChild(toolbar);

      runBtn.addEventListener('click', () => {
        let result;
        try{ result = ex.check(document.getElementById(ex.zoneId)); }
        catch(e){ result = { success:false, message:"Le vérificateur a rencontré un souci : " + e.message }; }
        UI.handleExerciseResult(lesson, diff, result, resultBanner);
      });
      resetBtn.addEventListener('click', build);
    }
    build();
  },

  mountTerminalExercise(pgMount, lesson, diff, ex, resultBanner){
    function build(){
      pgMount.innerHTML = '';
      let term;
      if(ex.terminalType === 'fs') term = Terminal.createFS(pgMount, { prompt: ex.prompt || 'daouda@code-aventure:~$', intro: ex.intro || [] });
      else if(ex.terminalType === 'net') term = Terminal.createNet(pgMount, { prompt: ex.prompt || 'daouda@code-aventure:~$', intro: ex.intro || [] });
      else term = Terminal.create(pgMount, { files: ex.files || [], prompt: ex.prompt || 'daouda@code-aventure:~$', intro: ex.intro || [] });
      const toolbar = document.createElement('div');
      toolbar.className = 'pg-toolbar';
      toolbar.style.borderRadius = '0 0 16px 16px';
      const runBtn = document.createElement('button');
      runBtn.className = 'run-btn';
      runBtn.textContent = '✅ Vérifier mon code';
      const resetBtn = document.createElement('button');
      resetBtn.className = 'reset-btn';
      resetBtn.textContent = '↺ Réinitialiser';
      toolbar.appendChild(runBtn);
      toolbar.appendChild(resetBtn);
      pgMount.appendChild(toolbar);
      runBtn.addEventListener('click', () => {
        let result;
        try{ result = ex.check(term.getState()); }
        catch(e){ result = { success:false, message:"Le vérificateur a rencontré un souci : " + e.message }; }
        UI.handleExerciseResult(lesson, diff, result, resultBanner);
      });
      resetBtn.addEventListener('click', build);
      term.focus();
    }
    build();
  },

  handleExerciseResult(lesson, diff, data, bannerEl){
    if(data.success){
      bannerEl.className = 'result-banner success';
      bannerEl.innerHTML = `<span class="rb-icon">✅</span><div><div>${Utils.esc(data.message || 'Bravo, c\'est réussi !')}</div></div>`;
      const { alreadyDone, xpGained } = State.markExerciseDone(lesson.id, diff);
      if(!alreadyDone){
        Effects.confetti();
        Effects.ping(true);
        Effects.toast(`+${xpGained} XP !`, '⭐');
        Effects.mascotSay(PRAISE[Math.floor(Math.random() * PRAISE.length)]);
        UI.updateXpUI();
        if(diff === 'facile'){
          const nextId = App.nextId(lesson.id);
          if(nextId) State.unlockLesson(nextId);
        }
        UI.renderSidebar(lesson.id);
        UI.renderExerciseTabs(lesson);
      }
    } else {
      bannerEl.className = 'result-banner error';
      const tag = data.errorType ? `<div class="error-type-tag">${Utils.esc(data.errorTitle || data.errorType)}</div>` : '';
      bannerEl.innerHTML = `<span class="rb-icon">🤔</span><div><div>${Utils.esc(data.message || 'Pas encore tout à fait ça, essaie encore !')}</div>${tag}</div>`;
      Effects.ping(false);
    }
  }
};
