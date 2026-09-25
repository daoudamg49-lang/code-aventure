const MODE_MAP = { html: 'htmlmixed', css: 'css', js: 'javascript' };
const TAB_LABEL = { html: 'HTML', css: 'CSS', js: 'JavaScript' };

const Editor = {
  createPlayground(container, opts){
    const {
      tabs,
      autoRun = true,
      showConsole = false,
      checkFnSource = null,
      onResult = null,
      onSnapshot = null,
      runLabel = 'Exécuter ▶',
      height = null
    } = opts;

    const wrap = document.createElement('div');
    wrap.className = 'playground';

    const tabsBar = document.createElement('div');
    tabsBar.className = 'pg-tabs';
    tabs.forEach((t, i) => {
      const btn = document.createElement('button');
      btn.className = 'pg-tab' + (i === 0 ? ' active' : '');
      btn.textContent = TAB_LABEL[t.type] + (t.readonly ? ' 🔒' : '');
      btn.dataset.idx = i;
      tabsBar.appendChild(btn);
    });
    wrap.appendChild(tabsBar);

    const body = document.createElement('div');
    body.className = 'pg-body';

    const editorPane = document.createElement('div');
    editorPane.className = 'pg-editor-pane';
    const cmInstances = [];
    tabs.forEach((t, i) => {
      const holder = document.createElement('div');
      holder.style.display = i === 0 ? 'block' : 'none';
      editorPane.appendChild(holder);
      const cm = CodeMirror(holder, {
        value: t.starter || '',
        mode: MODE_MAP[t.type] || 'htmlmixed',
        theme: 'default',
        lineNumbers: true,
        readOnly: !!t.readonly,
        lineWrapping: true,
        tabSize: 2,
        viewportMargin: Infinity
      });
      if(height) cm.setSize(null, height);
      cmInstances.push(cm);
    });
    body.appendChild(editorPane);

    const previewPane = document.createElement('div');
    previewPane.className = 'pg-preview-pane';

    // ---- Mini-browser tab bar ----
    const browserBar = document.createElement('div');
    browserBar.className = 'browser-tabbar';
    const addTabBtn = document.createElement('button');
    addTabBtn.className = 'browser-tab-add';
    addTabBtn.title = 'Nouvel onglet';
    addTabBtn.textContent = '+';
    previewPane.appendChild(browserBar);

    const addressRow = document.createElement('div');
    addressRow.className = 'browser-addressbar';
    addressRow.style.display = 'none';
    const addressInput = document.createElement('input');
    addressInput.className = 'browser-address-input';
    addressInput.placeholder = 'Tape une adresse, ex : wikipedia.org';
    addressInput.setAttribute('autocomplete', 'off');
    addressInput.setAttribute('spellcheck', 'false');
    const goBtn = document.createElement('button');
    goBtn.className = 'browser-go-btn';
    goBtn.textContent = '→';
    addressRow.appendChild(addressInput);
    addressRow.appendChild(goBtn);
    previewPane.appendChild(addressRow);

    const framesContainer = document.createElement('div');
    framesContainer.className = 'browser-frames';
    previewPane.appendChild(framesContainer);

    const iframe = document.createElement('iframe');
    iframe.sandbox = 'allow-scripts';
    iframe.dataset.tabId = 'code';
    framesContainer.appendChild(iframe);

    let consoleEl = null;
    if(showConsole){
      consoleEl = document.createElement('div');
      consoleEl.className = 'pg-console';
      consoleEl.innerHTML = '<span style="opacity:.5">Console : les résultats de console.log() apparaîtront ici…</span>';
      previewPane.appendChild(consoleEl);
    }
    body.appendChild(previewPane);
    wrap.appendChild(body);

    const toolbar = document.createElement('div');
    toolbar.className = 'pg-toolbar';
    const runBtn = document.createElement('button');
    runBtn.className = 'run-btn';
    runBtn.textContent = runLabel;
    const resetBtn = document.createElement('button');
    resetBtn.className = 'reset-btn';
    resetBtn.textContent = '↺ Réinitialiser';
    toolbar.appendChild(runBtn);
    toolbar.appendChild(resetBtn);
    wrap.appendChild(toolbar);

    container.appendChild(wrap);
    setTimeout(() => cmInstances.forEach(cm => cm.refresh()), 0);

    tabsBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.pg-tab');
      if(!btn) return;
      const idx = Number(btn.dataset.idx);
      [...tabsBar.children].forEach((b, i) => b.classList.toggle('active', i === idx));
      [...editorPane.children].forEach((h, i) => h.style.display = i === idx ? 'block' : 'none');
      cmInstances[idx].refresh();
    });

    // ---- Mini-browser tab management ----
    let browserTabs = [{ id: 'code', title: '📝 Mon code', url: null }];
    let activeTabId = 'code';
    let nextTabNum = 1;

    function normalizeUrl(raw){
      let u = (raw || '').trim();
      if(!u) return '';
      if(!/^https?:\/\//i.test(u)) u = 'https://' + u;
      return u;
    }

    function hostnameOf(url){
      try{ return new URL(url).hostname.replace(/^www\./, ''); }
      catch(e){ return url; }
    }

    function renderTabBar(){
      if(!browserBar.contains(addTabBtn)) browserBar.appendChild(addTabBtn);
      [...browserBar.querySelectorAll('.browser-tab')].forEach(el => el.remove());
      browserTabs.forEach(t => {
        const chip = document.createElement('div');
        chip.className = 'browser-tab' + (t.id === activeTabId ? ' active' : '');
        const label = document.createElement('span');
        label.className = 'browser-tab-label';
        label.textContent = t.title;
        chip.appendChild(label);
        if(t.id !== 'code'){
          const closeBtn = document.createElement('button');
          closeBtn.className = 'browser-tab-close';
          closeBtn.textContent = '✕';
          closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeTab(t.id); });
          chip.appendChild(closeBtn);
        }
        chip.addEventListener('click', () => switchTab(t.id));
        browserBar.insertBefore(chip, addTabBtn);
      });
    }

    function switchTab(id){
      activeTabId = id;
      [...framesContainer.children].forEach(f => { f.style.display = f.dataset.tabId === id ? 'block' : 'none'; });
      const tab = browserTabs.find(t => t.id === id);
      if(id === 'code'){
        addressRow.style.display = 'none';
        if(consoleEl) consoleEl.style.display = '';
      } else {
        addressRow.style.display = 'flex';
        addressInput.value = tab.url || '';
        if(consoleEl) consoleEl.style.display = 'none';
      }
      renderTabBar();
    }

    function openWebTab(url){
      const id = 'tab' + (nextTabNum++);
      const frame = document.createElement('iframe');
      frame.className = 'browser-web-frame';
      frame.dataset.tabId = id;
      frame.sandbox = 'allow-scripts allow-same-origin allow-forms allow-popups';
      const finalUrl = normalizeUrl(url);
      frame.src = finalUrl;
      framesContainer.appendChild(frame);
      browserTabs.push({ id, title: url ? hostnameOf(finalUrl) : 'Nouvel onglet', url: url ? finalUrl : '' });
      switchTab(id);
      if(!url) setTimeout(() => addressInput.focus(), 30);
    }

    function closeTab(id){
      const frame = framesContainer.querySelector(`[data-tab-id="${id}"]`);
      if(frame) frame.remove();
      browserTabs = browserTabs.filter(t => t.id !== id);
      if(activeTabId === id) switchTab('code');
      else renderTabBar();
    }

    function navigateActiveTab(){
      if(activeTabId === 'code') return;
      const tab = browserTabs.find(t => t.id === activeTabId);
      const url = normalizeUrl(addressInput.value);
      if(!url || !tab) return;
      const frame = framesContainer.querySelector(`[data-tab-id="${activeTabId}"]`);
      if(frame) frame.src = url;
      tab.url = url;
      tab.title = hostnameOf(url);
      renderTabBar();
    }

    addTabBtn.addEventListener('click', () => openWebTab(null));
    goBtn.addEventListener('click', navigateActiveTab);
    addressInput.addEventListener('keydown', (e) => { if(e.key === 'Enter') navigateActiveTab(); });
    renderTabBar();

    function closeAllWebTabs(){
      browserTabs.filter(t => t.id !== 'code').forEach(t => {
        const frame = framesContainer.querySelector(`[data-tab-id="${t.id}"]`);
        if(frame) frame.remove();
      });
      browserTabs = [{ id: 'code', title: '📝 Mon code', url: null }];
      switchTab('code');
    }

    function getCode(type){
      const idx = tabs.findIndex(t => t.type === type);
      return idx === -1 ? '' : cmInstances[idx].getValue();
    }

    function doRun(withCheck){
      if(consoleEl) consoleEl.innerHTML = '';
      if(onSnapshot) onSnapshot({ html: getCode('html'), css: getCode('css'), js: getCode('js') });
      Sandbox.run(iframe, {
        html: getCode('html'),
        css: getCode('css'),
        js: getCode('js'),
        checkFnSource: withCheck ? checkFnSource : null
      }, {
        onConsole(d){
          if(!consoleEl) return;
          const line = document.createElement('div');
          if(d.level === 'error') line.className = 'log-err';
          line.textContent = '› ' + d.text;
          consoleEl.appendChild(line);
          consoleEl.scrollTop = consoleEl.scrollHeight;
        },
        onError(desc, raw){
          if(consoleEl){
            const line = document.createElement('div');
            line.className = 'log-err';
            line.textContent = '⚠ ' + raw.message;
            consoleEl.appendChild(line);
          }
          if(withCheck && onResult) onResult({ success:false, message: desc.text, errorType: desc.type, errorTitle: desc.title, isRuntimeError: true });
        },
        onResult(data){
          if(withCheck && onResult) onResult(data);
        },
        onOpenTab(url){
          openWebTab(url);
        }
      });
    }

    runBtn.addEventListener('click', () => doRun(true));
    resetBtn.addEventListener('click', () => {
      closeAllWebTabs();
      tabs.forEach((t, i) => cmInstances[i].setValue(t.starter || ''));
      doRun(false);
    });

    const debouncedPreview = Utils.debounce(() => doRun(false), 700);
    cmInstances.forEach(cm => cm.on('change', debouncedPreview));

    if(autoRun) setTimeout(() => doRun(false), 60);

    return {
      run: doRun,
      getCode,
      setCode(type, val){
        const idx = tabs.findIndex(t => t.type === type);
        if(idx !== -1) cmInstances[idx].setValue(val);
      },
      refresh(){ cmInstances.forEach(cm => cm.refresh()); }
    };
  }
};
