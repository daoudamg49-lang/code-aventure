const Effects = {
  audioCtx: null,

  ping(success = true){
    try{
      this.audioCtx = this.audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const ctx = this.audioCtx;
      const notes = success ? [523.25, 659.25, 783.99] : [300, 220];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.value = 0.08;
        osc.connect(gain); gain.connect(ctx.destination);
        const start = ctx.currentTime + i * 0.11;
        osc.start(start);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.35);
        osc.stop(start + 0.36);
      });
    }catch(e){}
  },

  confetti(count = 60){
    const layer = document.getElementById('confetti-layer');
    const colors = ['#6c4ef0', '#ff5d8f', '#22c1c3', '#ffc93c', '#ffa63d'];
    for(let i = 0; i < count; i++){
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      const size = 6 + Math.random() * 6;
      piece.style.width = size + 'px';
      piece.style.height = (size * 0.4) + 'px';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (1.8 + Math.random() * 1.6) + 's';
      piece.style.opacity = 0.85 + Math.random() * 0.15;
      layer.appendChild(piece);
      setTimeout(() => piece.remove(), 3600);
    }
  },

  toast(message, icon = '🎉'){
    const container = document.getElementById('toast-container');
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<span class="t-icon">${icon}</span><span>${Utils.esc(message)}</span>`;
    container.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .4s'; setTimeout(() => el.remove(), 400); }, 3200);
  },

  mascotSay(text, duration = 3500){
    const bubble = document.getElementById('mascot-bubble');
    bubble.textContent = text;
    bubble.classList.remove('hidden');
    clearTimeout(this._mascotTimer);
    this._mascotTimer = setTimeout(() => bubble.classList.add('hidden'), duration);
  }
};
