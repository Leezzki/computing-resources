// Data is kept near the top so teachers can edit or add new year groups later.
const LESSON_SETS = {
  year1: {
    title: "Technology Detectives",
    subtitle: "Can you find the things made by people to help us?",
    definition: "Technology = something made by people to help us.",
    identifyItems: [
      { name: "Pencil", icon: "✏️", isTechnology: true },
      { name: "Chair", icon: "🪑", isTechnology: true },
      { name: "Laptop", icon: "💻", isTechnology: true },
      { name: "Book", icon: "📘", isTechnology: true },
      { name: "Spoon", icon: "🥄", isTechnology: true },
      { name: "Tree", icon: "🌳", isTechnology: false },
      { name: "Rock", icon: "🪨", isTechnology: false },
      { name: "Tablet", icon: "📱", isTechnology: true },
      { name: "Door", icon: "🚪", isTechnology: true },
      { name: "Shoes", icon: "👟", isTechnology: true }
    ],
    helpItems: [
      {
        name: "Laptop",
        icon: "💻",
        correct: "helps us learn",
        choices: ["helps us learn", "helps us swim", "helps us sleep"]
      },
      {
        name: "Pencil",
        icon: "✏️",
        correct: "helps us write",
        choices: ["helps us write", "helps us cook", "helps us fly"]
      },
      {
        name: "Chair",
        icon: "🪑",
        correct: "helps us sit",
        choices: ["helps us sit", "helps us paint walls", "helps us drive"]
      }
    ],
    huntItems: [
      { name: "Laptop", icon: "💻", isTechnology: true },
      { name: "Pencil", icon: "✏️", isTechnology: true },
      { name: "Chair", icon: "🪑", isTechnology: true },
      { name: "Book", icon: "📘", isTechnology: true },
      { name: "Whiteboard", icon: "⬜", isTechnology: true },
      { name: "Scissors", icon: "✂️", isTechnology: true },
      { name: "Ruler", icon: "📏", isTechnology: true },
      { name: "Clock", icon: "🕘", isTechnology: true },
      { name: "Door", icon: "🚪", isTechnology: true },
      { name: "Plant", icon: "🪴", isTechnology: false },
      { name: "Rock", icon: "🪨", isTechnology: false },
      { name: "Banana", icon: "🍌", isTechnology: false },
      { name: "Puddle", icon: "💧", isTechnology: false },
      { name: "Leaf", icon: "🍃", isTechnology: false }
    ]
  }

  // Add a year2 object here later, then change currentLessonKey below.
  // year2: { ... }
};

const currentLessonKey = "year1";
const lesson = LESSON_SETS[currentLessonKey];

const app = document.querySelector("#app");
const starCounter = document.querySelector("#starCounter");
const homeButton = document.querySelector("#homeButton");

const totalStars =
  lesson.identifyItems.length +
  lesson.helpItems.length +
  lesson.huntItems.filter((item) => item.isTechnology).length;

let state = getFreshState();

function getFreshState() {
  return {
    screen: "welcome",
    stars: 0,
    identifyIndex: 0,
    helpIndex: 0,
    selectedHunt: new Set(),
    earned: {
      identify: new Set(),
      help: new Set(),
      hunt: new Set()
    }
  };
}

function render() {
  updateStars();

  if (state.screen === "welcome") {
    renderWelcome();
  } else if (state.screen === "identify") {
    renderIdentify();
  } else if (state.screen === "help") {
    renderHelp();
  } else if (state.screen === "hunt") {
    renderHunt();
  } else {
    renderFinal();
  }
}

function updateStars() {
  starCounter.textContent = `⭐ ${state.stars}/${totalStars} Stars`;
}

function renderWelcome() {
  app.innerHTML = `
    <section class="screen center panel">
      <h1>${lesson.title}</h1>
      <p class="subtitle">${lesson.subtitle}</p>
      <div class="definition">${lesson.definition}</div>
      <br>
      <button class="big-button" type="button" data-action="start">Start</button>
    </section>
  `;
}

function renderIdentify() {
  const item = lesson.identifyItems[state.identifyIndex];
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>Is it technology?</h2>
        <div class="step-label">${state.identifyIndex + 1} of ${lesson.identifyItems.length}</div>
      </div>
      <p class="prompt">Was this made by people to help us?</p>
      <div class="item-display">
        <div class="item-icon" aria-hidden="true">${item.icon}</div>
        <div class="item-name">${item.name}</div>
      </div>
      <div class="button-row">
        <button class="choice-button tech" type="button" data-answer="true">Technology</button>
        <button class="choice-button not-tech" type="button" data-answer="false">Not technology</button>
      </div>
      <div class="feedback" id="feedback">Choose an answer.</div>
    </section>
  `;
}

function renderHelp() {
  const item = lesson.helpItems[state.helpIndex];
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>How does it help?</h2>
        <div class="step-label">${state.helpIndex + 1} of ${lesson.helpItems.length}</div>
      </div>
      <p class="prompt">What does this help us do?</p>
      <div class="item-display">
        <div class="item-icon" aria-hidden="true">${item.icon}</div>
        <div class="item-name">${item.name}</div>
      </div>
      <div class="answer-list">
        ${item.choices.map((choice) => `
          <button class="answer-button" type="button" data-choice="${choice}">${choice}</button>
        `).join("")}
      </div>
      <div class="feedback" id="feedback">Choose an answer.</div>
    </section>
  `;
}

function renderHunt() {
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>Classroom technology hunt</h2>
        <div class="step-label">Find the technology</div>
      </div>
      <p class="prompt">Click the things made by people to help us.</p>
      <div class="hunt-grid">
        ${lesson.huntItems.map((item, index) => {
          const selected = state.selectedHunt.has(index) ? " selected" : "";
          return `
            <button class="item-card${selected}" type="button" data-hunt-index="${index}">
              <span class="card-icon" aria-hidden="true">${item.icon}</span>
              <span class="card-name">${item.name}</span>
            </button>
          `;
        }).join("")}
      </div>
      <button class="big-button" type="button" data-action="check-hunt">Check my answers</button>
      <div class="feedback" id="feedback">Choose all the technology you can find.</div>
    </section>
  `;
}

function renderFinal() {
  const perfectScore = state.stars === totalStars;
  const badgeTitle = perfectScore ? "🌟 Master Technology Detective 🌟" : "Technology Detective";

  app.innerHTML = `
    <div class="confetti" aria-hidden="true">${makeConfetti()}</div>
    <section class="screen center panel">
      <h1>Mission Complete!</h1>
      <p class="subtitle">You are a Technology Detective.</p>
      <div class="final-stars">⭐ ${state.stars}/${totalStars} Stars</div>
      <div class="badge ${perfectScore ? "" : "standard"}">
        <div class="badge-icon">🏅</div>
        <div class="badge-title">
          ${badgeTitle}<br>
          Mission Complete
        </div>
      </div>
      <p class="message">Fantastic work! You discovered that technology is anything made by people to help us.</p>
      <p class="definition">I know technology is something made by people to help us.</p>
      <br>
      <button class="big-button" type="button" data-action="reset">Play Again</button>
    </section>
  `;
}

function makeConfetti() {
  const colors = ["#ffce3a", "#ff6fae", "#1f9d55", "#1877f2", "#ff8a2a"];
  let pieces = "";

  for (let i = 0; i < 42; i += 1) {
    const left = Math.floor(Math.random() * 100);
    const delay = (Math.random() * 2.2).toFixed(2);
    const color = colors[i % colors.length];
    pieces += `<span style="left:${left}%;background:${color};animation-delay:${delay}s"></span>`;
  }

  return pieces;
}

function showFeedback(text, type) {
  const feedback = document.querySelector("#feedback");
  feedback.textContent = text;
  feedback.className = `feedback ${type}`;
}

function awardStar(group, key) {
  if (!state.earned[group].has(key)) {
    state.earned[group].add(key);
    state.stars += 1;
    updateStars();
  }
}

function handleIdentify(isTechnologyChoice) {
  const item = lesson.identifyItems[state.identifyIndex];

  if (isTechnologyChoice === item.isTechnology) {
    awardStar("identify", state.identifyIndex);
    const message = item.isTechnology
      ? "Yes! It was made by people to help us."
      : "Yes! It is not made by people to help us.";
    showFeedback(message, "good");
    window.setTimeout(() => {
      state.identifyIndex += 1;
      state.screen = state.identifyIndex >= lesson.identifyItems.length ? "help" : "identify";
      render();
    }, 900);
  } else {
    showFeedback("Not quite. Remember, technology is made by people to help us.", "try");
  }
}

function handleHelp(choice) {
  const item = lesson.helpItems[state.helpIndex];

  if (choice === item.correct) {
    awardStar("help", state.helpIndex);
    showFeedback("Yes! That helps us.", "good");
    window.setTimeout(() => {
      state.helpIndex += 1;
      state.screen = state.helpIndex >= lesson.helpItems.length ? "hunt" : "help";
      render();
    }, 900);
  } else {
    showFeedback("Good try. Choose how it helps us.", "try");
  }
}

function toggleHuntItem(index) {
  if (state.selectedHunt.has(index)) {
    state.selectedHunt.delete(index);
  } else {
    state.selectedHunt.add(index);
  }

  renderHunt();
}

function checkHuntAnswers() {
  let wrongSelected = 0;
  let foundTechnology = 0;

  lesson.huntItems.forEach((item, index) => {
    if (state.selectedHunt.has(index) && item.isTechnology) {
      foundTechnology += 1;
      awardStar("hunt", index);
    }

    if (state.selectedHunt.has(index) && !item.isTechnology) {
      wrongSelected += 1;
    }
  });

  renderHunt();

  document.querySelectorAll(".item-card").forEach((card, index) => {
    const item = lesson.huntItems[index];
    if (state.selectedHunt.has(index) && !item.isTechnology) {
      card.classList.add("wrong");
    }
  });

  const totalTechnology = lesson.huntItems.filter((item) => item.isTechnology).length;

  if (wrongSelected > 0) {
    showFeedback("Some are not technology. Try again.", "try");
  } else if (foundTechnology < totalTechnology) {
    showFeedback("Good start. Find more things made by people to help us.", "try");
  } else {
    showFeedback("Great detective work!", "good");
    window.setTimeout(() => {
      state.screen = "final";
      render();
    }, 1000);
  }
}

function resetGame() {
  state = getFreshState();
  render();
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.action === "start") {
    state.screen = "identify";
    render();
  }

  if (target.dataset.action === "reset") {
    resetGame();
  }

  if (target.dataset.answer) {
    handleIdentify(target.dataset.answer === "true");
  }

  if (target.dataset.choice) {
    handleHelp(target.dataset.choice);
  }

  if (target.dataset.huntIndex) {
    toggleHuntItem(Number(target.dataset.huntIndex));
  }

  if (target.dataset.action === "check-hunt") {
    checkHuntAnswers();
  }
});

homeButton.addEventListener("click", resetGame);

render();
