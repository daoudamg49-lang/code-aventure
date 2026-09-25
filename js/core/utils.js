const Utils = {
  esc(str){
    return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  },
  debounce(fn, wait){
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
  },
  uid(){ return Math.random().toString(36).slice(2, 10); },
  clamp(n, min, max){ return Math.max(min, Math.min(max, n)); },
  storageGet(key, fallback){
    try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch(e){ return fallback; }
  },
  storageSet(key, value){
    try{ localStorage.setItem(key, JSON.stringify(value)); } catch(e){}
  },
  colorsEqual(a, b){
    if(!a || !b) return false;
    const t1 = document.createElement('div'); t1.style.color = a; document.body.appendChild(t1);
    const c1 = getComputedStyle(t1).color; t1.remove();
    const t2 = document.createElement('div'); t2.style.color = b; document.body.appendChild(t2);
    const c2 = getComputedStyle(t2).color; t2.remove();
    return c1 === c2;
  }
};
