const STORAGE_KEY = 'codeaventure_progress_v1';
const XP_BY_DIFF = { facile: 10, moyen: 20, difficile: 35 };
const LEVELS = [
  'Débutant', 'Apprenti Codeur', 'Codeur en herbe', 'Codeur futé',
  'Codeur pro', 'Super Codeur', 'Maître du Code', 'Légende du Code'
];

const State = {
  data: null,

  load(){
    this.data = Utils.storageGet(STORAGE_KEY, {
      xp: 0,
      completed: {},
      unlocked: {},
      lastVisited: null,
      codeCache: {}
    });
    if(!this.data.codeCache) this.data.codeCache = {};
    return this.data;
  },
  save(){ Utils.storageSet(STORAGE_KEY, this.data); },

  reset(){
    this.data = { xp: 0, completed: {}, unlocked: {}, lastVisited: null, codeCache: {} };
    this.save();
  },

  getCachedCode(exerciseId){
    return this.data.codeCache[exerciseId] || null;
  },
  setCachedCode(exerciseId, codes){
    this.data.codeCache[exerciseId] = codes;
    this.save();
  },

  ensureLesson(lessonId){
    if(!this.data.completed[lessonId]) this.data.completed[lessonId] = {};
    return this.data.completed[lessonId];
  },

  isExerciseDone(lessonId, diff){
    return !!(this.data.completed[lessonId] && this.data.completed[lessonId][diff]);
  },

  lessonDoneCount(lessonId){
    const c = this.data.completed[lessonId] || {};
    return ['facile','moyen','difficile'].filter(d => c[d]).length;
  },

  isLessonComplete(lessonId){
    return this.lessonDoneCount(lessonId) === 3;
  },

  markExerciseDone(lessonId, diff){
    const lesson = this.ensureLesson(lessonId);
    if(lesson[diff]) return { alreadyDone: true, xpGained: 0 };
    lesson[diff] = true;
    const xpGained = XP_BY_DIFF[diff] || 10;
    this.data.xp += xpGained;
    this.save();
    return { alreadyDone: false, xpGained };
  },

  unlockLesson(lessonId){
    this.data.unlocked[lessonId] = true;
    this.save();
  },

  syncUnlocks(){
    let changed = false;
    App.FLAT.forEach((f, i) => {
      if(this.isExerciseDone(f.lesson.id, 'facile')){
        const next = App.FLAT[i + 1];
        if(next && !this.data.unlocked[next.lesson.id]){
          this.data.unlocked[next.lesson.id] = true;
          changed = true;
        }
      }
    });
    if(changed) this.save();
  },

  isLessonUnlocked(lessonId, index){
    if(index === 0) return true;
    return !!this.data.unlocked[lessonId];
  },

  setLastVisited(lessonId){
    this.data.lastVisited = lessonId;
    this.save();
  },

  levelInfo(){
    const xp = this.data.xp;
    const levelIdx = Utils.clamp(Math.floor(xp / 100), 0, LEVELS.length - 1);
    const floor = levelIdx * 100;
    const ceil = (levelIdx + 1) * 100;
    const pct = levelIdx === LEVELS.length - 1 ? 100 : Utils.clamp(((xp - floor) / (ceil - floor)) * 100, 0, 100);
    return { xp, levelIdx, label: LEVELS[levelIdx], pct, nextAt: levelIdx === LEVELS.length - 1 ? null : ceil };
  },

  chapterProgress(chapter){
    const total = chapter.lessons.length * 3;
    let done = 0;
    chapter.lessons.forEach(l => { done += this.lessonDoneCount(l.id); });
    return { done, total, pct: total ? Math.round((done/total)*100) : 0 };
  }
};
