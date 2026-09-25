const App = {
  CHAPTERS: [],
  FLAT: [],

  build(){
    this.CHAPTERS = [CHAPTER_1, CHAPTER_2, CHAPTER_3, CHAPTER_4, CHAPTER_5, CHAPTER_6, CHAPTER_7, CHAPTER_8, CHAPTER_9, CHAPTER_10, CHAPTER_11, CHAPTER_12, CHAPTER_13, CHAPTER_14].filter(Boolean);
    this.FLAT = [];
    this.CHAPTERS.forEach(chapter => {
      chapter.lessons.forEach((lesson, lessonIndex) => {
        this.FLAT.push({ lesson, chapter, lessonIndex });
      });
    });
  },

  flatIndex(lessonId){
    return this.FLAT.findIndex(f => f.lesson.id === lessonId);
  },

  findLesson(lessonId){
    const idx = this.flatIndex(lessonId);
    if(idx === -1) return null;
    const f = this.FLAT[idx];
    return { lesson: f.lesson, chapter: f.chapter, lessonIndex: f.lessonIndex, globalIndex: idx };
  },

  nextId(lessonId){
    const idx = this.flatIndex(lessonId);
    if(idx === -1 || idx + 1 >= this.FLAT.length) return null;
    return this.FLAT[idx + 1].lesson.id;
  },

  prevId(lessonId){
    const idx = this.flatIndex(lessonId);
    if(idx <= 0) return null;
    return this.FLAT[idx - 1].lesson.id;
  }
};

function initGentleScroll(target, getPos, setPos, getMax, factor){
  let raf = null;
  let current = getPos();
  let goal = current;
  target.addEventListener('wheel', (e) => {
    if(e.target.closest && e.target.closest('.CodeMirror, .pg-console, .pg-preview-pane')) return;
    e.preventDefault();
    if(!raf) current = getPos();
    goal = Utils.clamp(goal + e.deltaY * factor, 0, getMax());
    if(!raf){
      const step = () => {
        current += (goal - current) * 0.22;
        if(Math.abs(goal - current) < 0.5) current = goal;
        setPos(current);
        if(current !== goal) raf = requestAnimationFrame(step);
        else raf = null;
      };
      raf = requestAnimationFrame(step);
    }
  }, { passive: false });
}

document.addEventListener('DOMContentLoaded', () => {
  App.build();
  State.load();
  UI.init();

  initGentleScroll(
    window,
    () => window.scrollY,
    (v) => window.scrollTo(0, v),
    () => document.documentElement.scrollHeight - window.innerHeight,
    0.45
  );
  const sidebar = document.getElementById('sidebar');
  initGentleScroll(
    sidebar,
    () => sidebar.scrollTop,
    (v) => { sidebar.scrollTop = v; },
    () => sidebar.scrollHeight - sidebar.clientHeight,
    0.45
  );
});
