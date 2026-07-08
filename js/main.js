/* ============================================
   The Wellbeing Hub — shared behaviour
   Nothing here is saved, stored or tracked.
   ============================================ */

/* ---------- Scroll reveal ---------- */
(function () {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = (!reduced && 'IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
    : null;

  function revealScan() {
    const els = document.querySelectorAll('.reveal:not(.revealed)');
    if (!observer) {
      els.forEach(el => el.classList.add('revealed'));
      return;
    }
    els.forEach(el => observer.observe(el));
  }

  window.revealScan = revealScan;
  revealScan();
})();

/* ---------- Mobile nav ---------- */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
})();

/* ---------- Mood check-in ---------- */
(function () {
  const buttons = document.querySelectorAll('.mood-btn');
  const response = document.getElementById('mood-response');
  if (!buttons.length || !response) return;

  const messages = {
    great: [
      "Yes!! Bottle that feeling — you're glowing today. 🌟",
      "Amazing! Days like this remind you what you're capable of. ✨",
      "Love that for you. Share a little of that sunshine with someone today. ☀️",
      "Brilliant! Whatever you did today, do more of it. 🎈",
      "Great days look good on you. Enjoy every second. 😎",
      "Amazing energy — someone around you is probably feeling it too. ⚡",
      "Days like today are worth remembering. Maybe write this one down? 📖"
    ],
    good: [
      "Good is great. Steady days build strong people. 🌱",
      "Nice one — keep doing whatever you're doing, it's working. 💛",
      "A good day is worth celebrating too. Well done, you. 🎉",
      "Solid day! Those add up to something big over time. 🧱",
      "Good days are quiet wins. Take a second to enjoy this one. 🌤️",
      "You're doing better than you probably give yourself credit for. 🏅"
    ],
    okay: [
      "Okay is completely okay. Not every day has to sparkle. 🍃",
      "Middling days count too. You're still moving forward. 🐢",
      "Thanks for checking in honestly — that takes more courage than people think. 💛",
      "An okay day is still a day you showed up for. That matters. 🌾",
      "Somewhere-in-the-middle is a real place to be. No pressure to be anywhere else. ⚖️",
      "Even an ordinary day can hide one small good thing. Keep an eye out for it. 🔍"
    ],
    low: [
      "It's alright to feel low. Feelings are visitors — this one won't stay forever. 🌧️→🌈",
      "Be gentle with yourself today. Small things count: water, fresh air, a kind word. 🫶",
      "You noticed how you feel — that's a real strength. Maybe try the breathing bubble? 🌬️",
      "Low days are heavy. You don't have to fix everything today — just get through it kindly. 🧸",
      "Feelings aren't forever, even when they feel like it. Be soft with yourself. 🌙",
      "One small comfort can help: a warm drink, a favourite song, a familiar face. Pick one. ☕"
    ],
    tough: [
      "That sounds really hard. You matter, and you don't have to carry this alone. 💛",
      "Tough days are heavy — but you've made it through every single one so far. 🕯️",
      "Please be kind to yourself. If you need someone to talk to, Childline is free on 0800 1111, any time. 🤍",
      "You were brave to be honest about this. Telling someone you trust could be the next brave step. 💪",
      "Really hard days deserve really gentle care. You deserve support — Shout is there any time, just text SHOUT to 85258. 📱",
      "This feeling is real, and so is the fact that it can change. Hold on — and reach out to someone. 🌅"
    ]
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mood = btn.dataset.mood;
      const options = messages[mood] || messages.okay;
      const msg = options[Math.floor(Math.random() * options.length)];
      response.textContent = msg;
      response.classList.remove('show');
      // restart the pop animation
      void response.offsetWidth;
      response.classList.add('show');
    });
  });
})();

/* ---------- Breathing bubble ---------- */
(function () {
  const bubble = document.getElementById('breath-bubble');
  const label = document.getElementById('breath-label');
  const toggle = document.getElementById('breath-toggle');
  if (!bubble || !toggle) return;

  let running = false;
  let timer = null;
  const phases = [
    { text: 'Breathe in…', ms: 4000 },
    { text: 'Hold…', ms: 4000 },
    { text: 'Breathe out…', ms: 6000 }
  ];

  function cycle(i) {
    if (!running) return;
    label.textContent = phases[i].text;
    timer = setTimeout(() => cycle((i + 1) % phases.length), phases[i].ms);
  }

  toggle.addEventListener('click', () => {
    running = !running;
    if (running) {
      bubble.classList.add('animating');
      toggle.textContent = 'Stop';
      cycle(0);
    } else {
      bubble.classList.remove('animating');
      clearTimeout(timer);
      label.textContent = 'Well done 💛';
      toggle.textContent = 'Start breathing';
    }
  });
})();

/* ---------- Kind Words Generator ---------- */
(function () {
  const box = document.getElementById('affirmation-box');
  const btn = document.getElementById('affirmation-btn');
  if (!box || !btn) return;

  const affirmations = [
    "You are allowed to take up space.",
    "Your feelings make sense — all of them.",
    "You've survived 100% of your hardest days so far.",
    "You don't have to be perfect to be worth caring about.",
    "Someone out there is glad you exist. Really.",
    "It's brave to ask for help. It's brave to keep going.",
    "Your story is still being written — this is not the last chapter.",
    "You are more than your worst day.",
    "Small steps still count as moving forward.",
    "You bring something to this world nobody else can.",
    "Rest is not laziness. You're allowed to recharge.",
    "The way you see the world matters.",
    "You're doing better than you think you are.",
    "Being kind to yourself is a skill — and you can learn it.",
    "You are not too much. You are not too little. You are you, and that's enough.",
    "Growing is allowed to be messy. You're still growing.",
    "You don't have to have it all figured out today.",
    "Your pace is a real pace. Slow counts.",
    "Mistakes mean you're trying — and trying is the whole game.",
    "The kindest voice you hear today could be your own.",
    "You've changed someone's day for the better without even knowing it.",
    "Feeling things deeply isn't a weakness. It's a superpower in training.",
    "You are allowed to change your mind, your style, your dreams.",
    "Nobody else gets to decide what you're capable of.",
    "Even on quiet days, you matter loudly.",
    "You are someone's reason to smile — probably more people than you think.",
    "Asking questions doesn't make you less clever. It makes you braver.",
    "The world is better with you in it. Full stop.",
    "You're not behind. You're on your own timeline.",
    "One day you'll look back and be proud of how far you've come."
  ];

  btn.addEventListener('click', () => {
    const a = affirmations[Math.floor(Math.random() * affirmations.length)];
    box.textContent = '"' + a + '"';
    box.style.animation = 'none';
    void box.offsetWidth;
    box.style.animation = 'pop 0.35s ease';
  });
})();

/* ---------- Journal Prompt Spinner ---------- */
(function () {
  const box = document.getElementById('prompt-box');
  const btn = document.getElementById('prompt-btn');
  if (!box || !btn) return;

  const prompts = [
    "What made you smile recently — even a tiny bit?",
    "If your feelings today were weather, what would the forecast be?",
    "What's one thing you'd tell your younger self?",
    "Who is someone that makes you feel safe? What do they do?",
    "What's something you're better at than you were a year ago?",
    "If you could design a perfect calm room, what would be in it?",
    "What song matches your mood today, and why?",
    "What's one worry you could shrink by talking to someone about it?",
    "Describe a moment you felt proud of yourself.",
    "What's one small thing you could do tomorrow just for you?",
    "If your best friend felt how you feel right now, what would you say to them?",
    "What are three things around you right now that you're glad exist?",
    "What's a compliment someone gave you that you still remember?",
    "If today had a colour, what would it be — and why?",
    "What's something you're looking forward to, big or small?",
    "Describe your perfect Saturday, from waking up to falling asleep.",
    "What's one thing you wish adults understood better about being your age?",
    "Who made you laugh most recently? What happened?",
    "If you could send a one-sentence message to the whole world, what would it say?",
    "What's a small act of kindness you could do tomorrow?",
    "What's something hard you did that nobody knows about?",
    "If your life were a book, what would this chapter be called?",
    "What place makes you feel most like yourself?",
    "What's one thing you can hear, see and feel right now?",
    "What would you do tomorrow if you knew you couldn't fail?",
    "What's a food, smell or sound that instantly makes you feel at home?"
  ];

  btn.addEventListener('click', () => {
    const p = prompts[Math.floor(Math.random() * prompts.length)];
    box.textContent = p;
    box.style.animation = 'none';
    void box.offsetWidth;
    box.style.animation = 'pop 0.35s ease';
  });
})();

/* ---------- Feel-Good Word Scramble ---------- */
(function () {
  const wordEl = document.getElementById('scramble-word');
  const input = document.getElementById('scramble-input');
  const msg = document.getElementById('scramble-msg');
  const checkBtn = document.getElementById('scramble-check');
  const newBtn = document.getElementById('scramble-new');
  if (!wordEl || !input) return;

  const words = [
    'KINDNESS', 'COURAGE', 'HOPE', 'FRIEND', 'CALM', 'SMILE', 'BRAVE',
    'DREAM', 'GROW', 'SHINE', 'TRUST', 'HAPPY', 'PEACE', 'STRONG', 'LAUGH',
    'GENTLE', 'PROUD', 'SPARKLE', 'BLOOM', 'CARING', 'WONDER', 'BELIEVE',
    'RAINBOW', 'SUNSHINE', 'HEART', 'GLOW', 'FEARLESS', 'JOYFUL', 'THRIVE',
    'BREATHE', 'CHEER', 'SAFE', 'LOVED', 'HONEST', 'PATIENT', 'CREATE'
  ];
  let current = '';

  function shuffle(word) {
    let arr = word.split('');
    let out = word;
    // keep shuffling until it's actually different
    while (out === word) {
      arr = arr.sort(() => Math.random() - 0.5);
      out = arr.join('');
    }
    return out;
  }

  function newWord() {
    current = words[Math.floor(Math.random() * words.length)];
    wordEl.textContent = shuffle(current);
    input.value = '';
    msg.textContent = '';
  }

  checkBtn.addEventListener('click', () => {
    if (input.value.trim().toUpperCase() === current) {
      msg.textContent = '🎉 Yes! It was "' + current + '" — great job!';
      msg.style.color = '#4C8C4A';
    } else {
      msg.textContent = 'Not quite — have another go, you\'ve got this! 💪';
      msg.style.color = '#C97E1E';
    }
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); checkBtn.click(); }
  });
  newBtn.addEventListener('click', newWord);
  newWord();
})();

/* ---------- Library: render, filter & search ---------- */
(function () {
  const grid = document.getElementById('resource-grid');
  const chipsWrap = document.getElementById('chips');
  const search = document.getElementById('search-input');
  const noResults = document.getElementById('no-results');
  if (!grid || typeof RESOURCES === 'undefined') return;

  let activeCategory = 'All';
  let query = '';

  // Build category chips
  const cats = ['All', ...CATEGORIES];
  cats.forEach(cat => {
    const chip = document.createElement('button');
    chip.className = 'chip' + (cat === 'All' ? ' active' : '');
    chip.textContent = cat;
    chip.addEventListener('click', () => {
      activeCategory = cat;
      chipsWrap.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      render();
    });
    chipsWrap.appendChild(chip);
  });

  if (search) {
    search.addEventListener('input', () => {
      query = search.value.trim().toLowerCase();
      render();
    });
  }

  function render() {
    grid.innerHTML = '';
    const tilts = ['tilt-l', '', 'tilt-r'];
    const hues = ['hue-cyan', 'hue-gold', 'hue-teal', 'hue-sage', 'hue-magenta'];
    let shown = 0;

    RESOURCES.forEach((r, i) => {
      const matchesCat = activeCategory === 'All' || r.category === activeCategory;
      const haystack = (r.title + ' ' + r.category + ' ' + r.description).toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      if (!matchesCat || !matchesQuery) return;

      const card = document.createElement('article');
      card.className = 'sticker resource-card reveal ' + tilts[i % 3] + ' ' + hues[i % hues.length];
      card.style.setProperty('--reveal-delay', ((shown % 6) * 0.06) + 's');

      const hasFile = (r.filePdf && r.filePdf.length > 0) || (r.fileDocx && r.fileDocx.length > 0);
      card.innerHTML =
        '<span class="cat-tag">' + r.category + '</span>' +
        '<h3>' + r.title + (r.isNew ? ' <span class="badge-new">New</span>' : '') + '</h3>' +
        '<p class="desc">' + r.description + '</p>' +
        '<div class="how"><strong>💡 How to use it</strong>' + r.how + '</div>' +
        '<div class="resource-actions">' +
        (hasFile
          ? (r.filePdf ? '<a class="btn btn-honey btn-small" href="' + r.filePdf + '" target="_blank" rel="noopener">Preview PDF</a>' : '') +
            (r.fileDocx ? '<a class="btn btn-outline btn-small" href="' + r.fileDocx + '" download>Download Word</a>' : '')
          : '<span class="badge-soon">Coming soon</span>') +
        '</div>';

      grid.appendChild(card);
      shown++;
    });

    if (noResults) noResults.style.display = shown === 0 ? 'block' : 'none';
    if (window.revealScan) window.revealScan();
  }

  render();
})();
