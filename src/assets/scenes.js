const gallery = document.querySelector('.scene-gallery');
const dialog = document.querySelector('#scene-dialog');
const title = dialog.querySelector('#scene-title');
const display = dialog.querySelector('.scene-dialog-visual');
const actions = dialog.querySelector('.scene-dialog-actions');
const pauseButton = actions.querySelector('[data-pause]');
const nextQuote = actions.querySelector('[data-next-quote]');
const quotes = JSON.parse(dialog.dataset.quotes);
const animatedScenes = new Set(['radar', 'bounce', 'clock', 'rain']);
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const clockFormat = new Intl.DateTimeFormat(document.documentElement.lang, {
  hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
});
let frameTimer;
let opener;
let paused = false;
let quoteIndex = 0;

function setPaused(value) {
  paused = value;
  display.classList.toggle('scene-paused', value);
  pauseButton.setAttribute('aria-pressed', String(value));
  pauseButton.textContent = value ? pauseButton.dataset.resume : pauseButton.dataset.pause;
}

function renderClock(clock) {
  const time = clockFormat.formatToParts();
  const digits = time.filter(({ type }) => ['hour', 'minute', 'second'].includes(type));
  clock.setAttribute('aria-label', time.map(({ value }) => value).join(''));
  [...clock.children].forEach((element, index) => {
    element.textContent = digits[index].value;
  });
}

function startScene(button) {
  const id = button.dataset.scene;
  const visual = button.querySelector('.scene-visual').cloneNode(true);
  const percent = visual.querySelector('[data-scene-percent]');
  const clock = visual.querySelector('[data-scene-clock]');
  const quote = visual.querySelector('[data-scene-quote]');
  opener = button;
  title.textContent = button.querySelector('.scene-name').textContent;
  display.replaceChildren(visual);
  pauseButton.hidden = !percent && !animatedScenes.has(id);
  nextQuote.hidden = !quote;
  actions.hidden = pauseButton.hidden && nextQuote.hidden;
  setPaused(motion.matches && !pauseButton.hidden);
  if (percent || clock || quote) visual.removeAttribute('aria-hidden');
  if (clock) {
    clock.setAttribute('role', 'img');
    renderClock(clock);
    frameTimer = setInterval(() => {
      if (!paused) renderClock(clock);
    }, 250);
  }
  if (percent) {
    let progress = 0;
    const update = () => {
      percent.textContent = progress + '%';
      visual.style.setProperty('--progress', progress + '%');
    };
    update();
    frameTimer = setInterval(() => {
      if (paused) return;
      progress = Math.min(100, progress + 2);
      update();
      if (progress === 100) clearInterval(frameTimer);
    }, 420);
  }
  quoteIndex = 0;
  dialog.showModal();
}

gallery.addEventListener('click', (event) => {
  const button = event.target.closest('[data-scene]');
  if (button && !dialog.open) startScene(button);
});

pauseButton.addEventListener('click', () => setPaused(!paused));
nextQuote.addEventListener('click', () => {
  const quote = display.querySelector('[data-scene-quote]');
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quote.textContent = quotes[quoteIndex];
});

dialog.addEventListener('close', () => {
  clearInterval(frameTimer);
  display.replaceChildren();
  opener?.focus({ preventScroll: true });
});
