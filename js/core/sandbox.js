const ErrorDictionary = {
  describe(err){
    const name = err.name || 'Error';
    const msg = err.message || '';
    if(name === 'SyntaxError'){
      return { type:'syntax', title:'🔤 Erreur de syntaxe',
        text:"Il y a une petite erreur d'écriture dans ton code : une parenthèse ( ), une accolade { } ou des guillemets \" \" sont peut-être mal fermés, en trop, ou il manque un point-virgule." };
    }
    if(name === 'ReferenceError'){
      return { type:'reference', title:'❓ Erreur de référence',
        text:`Le navigateur ne connaît pas ce que tu utilises. Vérifie l'orthographe, ou si tu as bien créé ta variable avec "let" ou "const" avant de l'utiliser. Détail : ${msg}` };
    }
    if(name === 'TypeError'){
      return { type:'type', title:'🧩 Erreur de type',
        text:`Tu essaies de faire une action impossible sur cette valeur (par exemple, utiliser une fonction sur quelque chose qui n'existe pas encore, ou qui est mal orthographié). Détail : ${msg}` };
    }
    if(name === 'RangeError'){
      return { type:'range', title:'♾️ Boucle trop longue',
        text:"Ta boucle tourne trop de fois, elle ne s'arrête peut-être jamais ! Vérifie ta condition d'arrêt (par exemple i < 10)." };
    }
    return { type:'runtime', title:'⚠️ Petite erreur', text: msg || "Quelque chose n'a pas fonctionné comme prévu." };
  }
};

const Sandbox = {
  escapeScriptClose(code){
    return String(code || '').replace(/<\/(script)/gi, '<\\/$1');
  },

  harnessInit(){
    return `<script>
window.__logs = [];
window.__errors = [];
function __send(msg){ try{ parent.postMessage(msg, '*'); }catch(e){} }
['log','warn','error','info'].forEach(function(level){
  var orig = console[level];
  console[level] = function(){
    var args = Array.prototype.slice.call(arguments);
    var text = args.map(function(a){
      try{ return (typeof a === 'object' && a !== null) ? JSON.stringify(a) : String(a); }catch(e){ return String(a); }
    }).join(' ');
    window.__logs.push({level: level, text: text});
    __send({type:'console', level: level, text: text});
    if(orig) orig.apply(console, args);
  };
});
window.onerror = function(message, source, lineno, colno, error){
  var name = (error && error.name) || 'Error';
  window.__errors.push({name:name, message:String(message)});
  __send({type:'error', name:name, message: String(message)});
  return true;
};
window.addEventListener('unhandledrejection', function(ev){
  var err = ev.reason || {};
  window.__errors.push({name: err.name || 'Error', message: err.message || String(err)});
  __send({type:'error', name: err.name || 'Error', message: err.message || String(err)});
});
try{
  var __store = {};
  var __fakeLocalStorage = {
    getItem: function(key){ key = String(key); return Object.prototype.hasOwnProperty.call(__store, key) ? __store[key] : null; },
    setItem: function(key, value){ __store[String(key)] = String(value); },
    removeItem: function(key){ delete __store[String(key)]; },
    clear: function(){ __store = {}; },
    key: function(i){ return Object.keys(__store)[i] || null; }
  };
  Object.defineProperty(__fakeLocalStorage, 'length', { get: function(){ return Object.keys(__store).length; } });
  Object.defineProperty(window, 'localStorage', { value: __fakeLocalStorage, writable: true, configurable: true });
}catch(e){}
function createServer(){
  var server = { routes: { GET: {}, POST: {} } };
  server.get = function(path, handler){ server.routes.GET[path] = handler; return server; };
  server.post = function(path, handler){ server.routes.POST[path] = handler; return server; };
  server.listen = function(){ server.listening = true; return server; };
  window.__lastServer = server;
  return server;
}
function __serverRequest(server, method, path, body){
  var handler = server && server.routes && server.routes[method] && server.routes[method][path];
  if(!handler) return { status: 404, body: 'Route non trouvée : ' + method + ' ' + path };
  var result = { status: 200, body: null };
  var req = { body: body || {} };
  var res = {
    send: function(data){ result.body = data; },
    status: function(code){ result.status = code; return res; },
    json: function(data){ result.body = data; result.isJson = true; }
  };
  try{ handler(req, res); } catch(e){ result.status = 500; result.body = 'Erreur serveur : ' + e.message; }
  return result;
}
function request(method, path, body){ return __serverRequest(window.__lastServer, method, path, body); }
function createDatabase(){
  var database = { tables: {} };
  database.table = function(name){
    if(!database.tables[name]) database.tables[name] = { rows: [], nextId: 1 };
    var t = database.tables[name];
    return {
      ajouter: function(data){
        var row = Object.assign({}, data, { id: t.nextId++ });
        t.rows.push(row);
        return row;
      },
      tous: function(){ return t.rows.slice(); },
      trouverParId: function(id){
        var found = null;
        t.rows.forEach(function(r){ if(r.id === id) found = r; });
        return found;
      },
      modifier: function(id, changes){
        var row = null;
        t.rows.forEach(function(r){ if(r.id === id) row = r; });
        if(row) Object.assign(row, changes);
        return row;
      },
      supprimer: function(id){
        var idx = -1;
        t.rows.forEach(function(r, i){ if(r.id === id) idx = i; });
        if(idx !== -1){ t.rows.splice(idx, 1); return true; }
        return false;
      },
      compter: function(){ return t.rows.length; }
    };
  };
  window.__lastDb = database;
  return database;
}
window.Checks = {
  request(method, path, body){ return __serverRequest(window.__lastServer, method, path, body); },
  db(){ return window.__lastDb; },
  el(sel){ return document.querySelector(sel); },
  all(sel){ return Array.prototype.slice.call(document.querySelectorAll(sel)); },
  exists(sel){ return !!document.querySelector(sel); },
  count(sel){ return document.querySelectorAll(sel).length; },
  text(sel){ var e = document.querySelector(sel); return e ? e.textContent.trim() : ''; },
  textContains(sel, sub){ return this.text(sel).toLowerCase().indexOf(String(sub).toLowerCase()) !== -1; },
  attr(sel, name){ var e = document.querySelector(sel); return e ? e.getAttribute(name) : null; },
  attrEquals(sel, name, val){ var a = this.attr(sel, name); return a !== null && a.trim().toLowerCase() === String(val).trim().toLowerCase(); },
  hasAttr(sel, name){ var e = document.querySelector(sel); return !!(e && e.hasAttribute(name)); },
  style(sel, prop){ var e = document.querySelector(sel); return e ? getComputedStyle(e)[prop] : null; },
  styleEquals(sel, prop, val){
    var s = this.style(sel, prop); if(s === null || s === undefined) return false;
    return String(s).replace(/\\s+/g,'').toLowerCase() === String(val).replace(/\\s+/g,'').toLowerCase();
  },
  colorEquals(sel, prop, val){
    var s = this.style(sel, prop); if(!s) return false;
    var tmp = document.createElement('div'); tmp.style.color = val; document.body.appendChild(tmp);
    var target = getComputedStyle(tmp).color; tmp.remove();
    return s === target;
  },
  logsInclude(sub){ return window.__logs.some(function(l){ return l.text.toLowerCase().indexOf(String(sub).toLowerCase()) !== -1; }); },
  noErrors(){ return window.__errors.length === 0; },
  global(name){ return window[name]; },
  childOf(childSel, parentSel){
    var c = document.querySelector(childSel); var p = document.querySelector(parentSel);
    return !!(c && p && c.parentElement === p);
  }
};
document.addEventListener('click', function(e){
  var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
  if(!a) return;
  var href = a.getAttribute('href') || '';
  if(!/^https?:\\/\\//i.test(href)) return;
  e.preventDefault();
  __send({type:'open-tab', url: href});
});
</script>`;
  },

  harnessFinalize(checkFnSource, rawCode){
    const rawJson = JSON.stringify(rawCode || {}).replace(/<\/(script)/gi, '<\\/$1');
    const safeCheckFnSource = this.escapeScriptClose(checkFnSource);
    return `<script>
(function(){
  var __checkFn = ${safeCheckFnSource};
  var __raw = ${rawJson};
  var __result;
  try{
    __result = __checkFn(document, window, window.Checks, window.__logs, window.__errors, __raw);
  }catch(e){
    __result = { success:false, message:"Le vérificateur a rencontré un souci pendant le test : " + e.message, errorType:'checker' };
  }
  __send({type:'result', success: !!(__result && __result.success), message: (__result && __result.message) || '', errorType: (__result && __result.errorType) || null});
})();
</script>`;
  },

  injectFullDoc(html, css, userScript, finalize, harnessInit){
    let out = html;
    const styleTag = css ? `<style>${css}</style>` : '';
    if(/<\/head>/i.test(out)){
      out = out.replace(/<\/head>/i, harnessInit + styleTag + '</head>');
    } else if(/<head[^>]*>/i.test(out)){
      out = out.replace(/<head[^>]*>/i, m => m + harnessInit + styleTag);
    } else if(/<html[^>]*>/i.test(out)){
      out = out.replace(/<html[^>]*>/i, m => m + '<head>' + harnessInit + styleTag + '</head>');
    } else {
      out = harnessInit + styleTag + out;
    }
    if(/<\/body>/i.test(out)){
      out = out.replace(/<\/body>/i, userScript + finalize + '</body>');
    } else {
      out += userScript + finalize;
    }
    return out;
  },

  buildDoc({ html = '', css = '', js = '', checkFnSource = null }){
    const safeJs = this.escapeScriptClose(js);
    const userScript = js ? `<script>${safeJs}</script>` : '';
    const finalize = checkFnSource ? this.harnessFinalize(checkFnSource, { html, css, js }) : '';
    const isFullDoc = /<html[\s>]/i.test(html);
    if(isFullDoc){
      return '<!DOCTYPE html>' + this.injectFullDoc(html, css, userScript, finalize, this.harnessInit());
    }
    return `<!DOCTYPE html><html><head><meta charset="utf-8">${this.harnessInit()}<style>${css}</style></head><body>${html}${userScript}${finalize}</body></html>`;
  },

  run(iframeEl, { html, css, js, checkFnSource }, { onConsole, onError, onResult, onOpenTab } = {}){
    if(iframeEl._msgHandler){
      window.removeEventListener('message', iframeEl._msgHandler);
    }
    const handler = (event) => {
      if(event.source !== iframeEl.contentWindow) return;
      const data = event.data || {};
      if(data.type === 'console' && onConsole) onConsole(data);
      else if(data.type === 'error' && onError) onError(ErrorDictionary.describe(data), data);
      else if(data.type === 'open-tab' && onOpenTab) onOpenTab(data.url);
      else if(data.type === 'result' && onResult){
        let errInfo = null;
        if(!data.success && data.errorType === 'checker') errInfo = null;
        onResult(data, errInfo);
      }
    };
    iframeEl._msgHandler = handler;
    window.addEventListener('message', handler);
    iframeEl.srcdoc = this.buildDoc({ html, css, js, checkFnSource });
  }
};
