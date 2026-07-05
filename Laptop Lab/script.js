// Mission data lives at the top so teachers can edit or add a Year 2 version later.
const MISSION_LIBRARY = {
  year1: {
    missionNumber: 2,
    missionName: "Laptop Lab",
    title: "Laptop Lab",
    welcomeTag: "🛠 Mission 2: Laptop Lab",
    story: "The computers in the Laptop Lab have been taken apart! Can you help rebuild them and learn what each part does?",
    objective: "To identify a computer and its main parts.",
    successCriteria: [
      "I can name the main parts of a computer.",
      "I can switch on a computer.",
      "I can use a mouse to click and drag."
    ],
    parts: [
      {
        key: "screen",
        label: "Screen",
        help: "The screen shows words and pictures."
      },
      {
        key: "keyboard",
        label: "Keyboard",
        help: "The keyboard lets us type."
      },
      {
        key: "trackpad",
        label: "Trackpad",
        help: "The trackpad helps us move and click."
      },
      {
        key: "camera",
        label: "Camera",
        help: "The camera lets us see people."
      },
      {
        key: "speakers",
        label: "Speakers",
        help: "The speakers let us hear sound."
      }
    ],
    powerQuestions: [
      {
        prompt: "Which button turns the laptop on?",
        answer: "power",
        feedback: "Yes! The power button turns the laptop on."
      },
      {
        prompt: "Which button makes the sound louder?",
        answer: "volume",
        feedback: "Yes! The volume button changes the sound."
      },
      {
        prompt: "Which button makes the screen brighter?",
        answer: "brightness",
        feedback: "Yes! The brightness button changes the light on the screen."
      },
      {
        prompt: "If the laptop is asleep, which button wakes it up?",
        answer: "power",
        feedback: "Correct. The power button wakes the laptop up."
      },
      {
        prompt: "Which button helps you hear more or less sound?",
        answer: "volume",
        feedback: "Great! The volume button changes sound."
      },
      {
        prompt: "Which button helps you see better in a dark room?",
        answer: "brightness",
        feedback: "Yes! Brightness makes the screen light brighter or darker."
      }
    ],
    miniPrompts: [
      "Click the keyboard.",
      "Click the camera.",
      "Click the trackpad.",
      "Click the screen.",
      "Click the speakers."
    ],
    chips: [
      { left: 10, top: 16 }, { left: 24, top: 11 }, { left: 41, top: 15 }, { left: 59, top: 10 }, { left: 74, top: 18 },
      { left: 16, top: 45 }, { left: 36, top: 41 }, { left: 55, top: 43 }, { left: 71, top: 47 }, { left: 83, top: 31 }
    ],
    icons: [
      { key: "folder", label: "Folder", emoji: "📁" },
      { key: "photo", label: "Photo", emoji: "🖼️" },
      { key: "music", label: "Music", emoji: "🎵" },
      { key: "game", label: "Game", emoji: "🎮" },
      { key: "book", label: "Book", emoji: "📘" }
    ]
  }

  // Add year2 here later and switch currentMissionKey below.
  // year2: { ... }
};

const currentMissionKey = "year1";
const mission = MISSION_LIBRARY[currentMissionKey];
const totalStars =
  mission.parts.length +
  mission.parts.length +
  mission.powerQuestions.length +
  mission.chips.length +
  mission.icons.length +
  mission.miniPrompts.length;

const app = document.querySelector("#app");
const starCounter = document.querySelector("#starCounter");
const homeButton = document.querySelector("#homeButton");

let state = createFreshState();

function createFreshState() {
  return {
    screen: "welcome",
    stars: 0,
    activity1Found: new Set(),
    activity2Placed: new Set(),
    activity3Solved: new Set(),
    powerIndex: 0,
    selectedLabel: null,
    selectedIcon: null,
    chipsCollected: new Set(),
    iconsPlaced: new Set(),
    activity5Solved: new Set(),
    miniIndex: 0,
    miniTargetOrder: shuffle([...mission.parts.map((part) => part.key)])
  };
}

function shuffle(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function render() {
  updateStars();

  if (state.screen === "welcome") {
    renderWelcome();
  } else if (state.screen === "activity1") {
    renderActivity1();
  } else if (state.screen === "activity2") {
    renderActivity2();
  } else if (state.screen === "activity3") {
    renderActivity3();
  } else if (state.screen === "activity4") {
    renderActivity4();
  } else if (state.screen === "activity5") {
    renderActivity5();
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
      <div class="mission-tag">${mission.welcomeTag}</div>
      <h1>${mission.title}</h1>
      <p class="subtitle">${mission.story}</p>
      <div class="intro">
        <strong>Lesson Title:</strong> ${mission.title}<br>
        <strong>Lesson Objective:</strong> ${mission.objective}
      </div>
      <ul class="objective-list" aria-label="Success criteria">
        ${mission.successCriteria.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button class="big-button" type="button" data-action="start">Start Mission</button>
      <p class="definition">This is Lesson 2 of the Year 1 Technology Around Us unit.</p>
    </section>
  `;
}

function renderActivity1() {
  const foundCount = state.activity1Found.size;
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>Activity 1: Meet the Laptop</h2>
        <div class="step-label">${foundCount} of ${mission.parts.length} found</div>
      </div>
      <p class="prompt">Click each part to discover it.</p>
      <div class="panel-grid">
        <div class="activity-card">
          ${renderLaptopArt({
            mode: "discover",
            foundParts: state.activity1Found
          })}
        </div>
        <div class="activity-card">
          <h3>What to find</h3>
          <div class="hint-bar">
            ${mission.parts.map((part) => {
              const found = state.activity1Found.has(part.key) ? " ✓" : "";
              return `<div>${part.label}${found}</div>`;
            }).join("")}
          </div>
          <div class="feedback" id="feedback">Click a part on the laptop.</div>
        </div>
      </div>
    </section>
  `;
}

function renderActivity2() {
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>Activity 2: Label the Laptop</h2>
        <div class="step-label">${state.activity2Placed.size} of ${mission.parts.length} placed</div>
      </div>
      <p class="prompt">Drag each label onto the correct part.</p>
      <div class="activity-two-layout">
        <div class="activity-card">
          ${renderLaptopArt({
            mode: "drop",
            placedParts: state.activity2Placed
          })}
        </div>
        <div class="activity-card">
          <h3>Labels</h3>
          <div class="label-bank">
            ${mission.parts.map((part) => {
              const placed = state.activity2Placed.has(part.key);
              const selected = state.selectedLabel === part.key ? "selected" : "";
              return `
                <button
                  class="label-chip ${selected} ${placed ? "used" : ""} ${placed ? "correct" : ""}"
                  type="button"
                  draggable="${placed ? "false" : "true"}"
                  data-label-key="${part.key}"
                  ${placed ? "disabled" : ""}
                >${part.label}</button>
              `;
            }).join("")}
          </div>
          <div class="feedback" id="feedback">Drag a label, then drop it on the laptop.</div>
        </div>
      </div>
    </section>
  `;
}

function renderActivity3() {
  const question = mission.powerQuestions[state.powerIndex];
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>Activity 3: Power Up</h2>
        <div class="step-label">${state.powerIndex + 1} of ${mission.powerQuestions.length}</div>
      </div>
      <p class="prompt">${question.prompt}</p>
      <div class="button-row">
        <button class="choice-button power" type="button" data-power-choice="power">Power button</button>
        <button class="choice-button volume" type="button" data-power-choice="volume">Volume</button>
        <button class="choice-button brightness" type="button" data-power-choice="brightness">Brightness</button>
      </div>
      <div class="feedback" id="feedback">Choose the best button.</div>
    </section>
  `;
}

function renderActivity4() {
  const phase = state.chipsCollected.size < mission.chips.length ? "chips" : "icons";
  const chipCount = state.chipsCollected.size;
  const iconCount = state.iconsPlaced.size;

  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>Activity 4: Mouse Challenge</h2>
        <div class="step-label">${phase === "chips" ? `${chipCount} of ${mission.chips.length} chips` : `${iconCount} of ${mission.icons.length} icons`}</div>
      </div>
      <p class="prompt">
        ${phase === "chips"
          ? "Click the chips to collect them."
          : "Drag each icon into the laptop."}
      </p>
      ${
        phase === "chips"
          ? `
            <div class="activity-card">
              <div class="chip-board" aria-label="Chip board">
                ${mission.chips.map((chip, index) => `
                  <button
                    class="chip-button ${state.chipsCollected.has(index) ? "collected" : ""}"
                    type="button"
                    data-chip-index="${index}"
                    style="left:${chip.left}%; top:${chip.top}%;"
                  >✦</button>
                `).join("")}
              </div>
              <div class="collect-counter">Chips collected: ${chipCount}/10</div>
              <div class="feedback" id="feedback">Slow and steady. Click each chip carefully.</div>
            </div>
          `
          : `
            <div class="activity-two-layout">
              <div class="activity-card">
                <h3>Icons to move</h3>
                <div class="icon-row">
                  ${mission.icons.map((icon) => {
                    const placed = state.iconsPlaced.has(icon.key);
                    const selected = state.selectedIcon === icon.key ? "selected" : "";
                    return `
                      <button
                        class="icon-chip ${selected} ${placed ? "used" : ""} ${placed ? "correct" : ""}"
                        type="button"
                        draggable="${placed ? "false" : "true"}"
                        data-icon-key="${icon.key}"
                        ${placed ? "disabled" : ""}
                      >
                        <span class="icon-emoji" aria-hidden="true">${icon.emoji}</span>
                        <span class="icon-name">${icon.label}</span>
                      </button>
                    `;
                  }).join("")}
                </div>
              </div>
              <div class="activity-card">
                <h3>Laptop drop zone</h3>
                <div
                  class="drag-target ${state.selectedIcon ? "ready" : ""}"
                  data-laptop-drop="true"
                  aria-label="Laptop drop zone"
                >
                  ${renderLaptopArt({
                    mode: "bin"
                  })}
                  <div class="placed-icons">
                    ${mission.icons.map((icon) => state.iconsPlaced.has(icon.key)
                      ? `<div class="placed-icon">${icon.emoji} ${icon.label}</div>`
                      : `<div class="placed-icon" style="opacity:0.2">${icon.label}</div>`
                    ).join("")}
                  </div>
                </div>
                <div class="feedback" id="feedback">Drag an icon into the laptop.</div>
              </div>
            </div>
          `
      }
    </section>
  `;
}

function renderActivity5() {
  const targetKey = state.miniTargetOrder[state.miniIndex];
  const target = mission.parts.find((part) => part.key === targetKey);

  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>Activity 5: Mini Challenge</h2>
        <div class="step-label">${state.miniIndex + 1} of ${mission.miniPrompts.length}</div>
      </div>
      <p class="prompt">${mission.miniPrompts[state.miniIndex]}</p>
      <p class="subtitle">Find the part on the laptop and click it.</p>
      <div class="panel-grid">
        <div class="activity-card">
          ${renderLaptopArt({
            mode: "mini",
            miniTarget: targetKey
          })}
        </div>
        <div class="activity-card">
          <h3>Tip</h3>
          <div class="hint-bar">
            <div>Look for: ${target.label}</div>
            <div>Move carefully and click the right part.</div>
          </div>
          <div class="feedback" id="feedback">Choose the matching part.</div>
        </div>
      </div>
    </section>
  `;
}

function renderFinal() {
  const perfectScore = state.stars === totalStars;
  const badgeTitle = perfectScore ? "🌟 Master Laptop Engineer 🌟" : "Laptop Lab Engineer";

  app.innerHTML = `
    <div class="confetti" aria-hidden="true">${makeConfetti()}</div>
    <section class="screen center panel">
      <h1>Mission Complete!</h1>
      <p class="subtitle">You finished Mission 2: Laptop Lab.</p>
      <div class="final-stars">⭐ ${state.stars}/${totalStars} Stars</div>
      <div class="badge ${perfectScore ? "" : "standard"}">
        <div class="badge-icon">🏅</div>
        <div class="badge-title">${badgeTitle}<br>Mission Complete</div>
      </div>
      <p class="message">Fantastic! You can now recognise the important parts of a laptop.</p>
      <button class="big-button" type="button" data-action="reset">Play Again</button>
    </section>
  `;
}

function renderLaptopArt(options = {}) {
  const { mode, foundParts = new Set(), placedParts = new Set(), miniTarget = null } = options;

  return `
    <div class="laptop-stage" aria-label="Laptop illustration">
      <div class="laptop-shell" aria-hidden="true"></div>
      <div class="laptop-screen" aria-hidden="true"></div>
      <div class="laptop-camera" aria-hidden="true"></div>
      <div class="speaker-dot speaker-left" aria-hidden="true"></div>
      <div class="speaker-dot speaker-right" aria-hidden="true"></div>
      <div class="laptop-keyboard" aria-hidden="true">
        <div class="keyboard-keys"></div>
      </div>
      <div class="trackpad" aria-hidden="true"></div>
      ${mode === "bin" ? "" : mission.parts.map((part) => renderPartControl(part, mode, foundParts, placedParts, miniTarget)).join("")}
    </div>
  `;
}

function renderPartControl(part, mode, foundParts, placedParts, miniTarget) {
  const partPosition = getPartPosition(part.key);
  const isFound = foundParts.has(part.key);
  const isPlaced = placedParts.has(part.key);
  const miniClass = miniTarget === part.key ? "mini-target" : "";

  if (mode === "drop") {
    return `
      <div
        class="drop-zone ${isPlaced ? "filled" : ""}"
        data-drop-zone="${part.key}"
        style="${partPosition}"
        aria-label="Drop zone for ${part.label}"
      >
        <span class="drop-name">${isPlaced ? part.label : `Drop ${part.label}`}</span>
      </div>
    `;
  }

  if (mode === "mini") {
    return `
      <button
        class="mini-part-button ${miniClass}"
        type="button"
        data-part-key="${part.key}"
        style="${partPosition}"
        aria-label="${part.label}"
      >
        <span class="part-name">${part.label}</span>
      </button>
    `;
  }

  return `
    <button
      class="part-button ${isFound ? "found" : ""}"
      type="button"
      data-part-key="${part.key}"
      style="${partPosition}"
      aria-label="${part.label}"
    >
      <span class="part-name">${isFound ? part.label : part.label}</span>
    </button>
  `;
}

function getPartPosition(key) {
  const positions = {
    screen: "left:22%; top:11%; width:56%; height:33%;",
    camera: "left:46.5%; top:8.8%; width:7%; height:7%; border-radius:50%;",
    speakers: "left:19%; top:35.5%; width:62%; height:9%;",
    keyboard: "left:16%; top:50.5%; width:68%; height:25%;",
    trackpad: "left:41.5%; top:78%; width:17%; height:8.5%;"
  };

  return positions[key] || "";
}

function showFeedback(text, type) {
  const feedback = document.querySelector("#feedback");
  if (!feedback) return;
  feedback.textContent = text;
  feedback.className = `feedback ${type}`;
}

function awardStar(group, key) {
  const store = {
    activity1: "activity1Found",
    activity2: "activity2Placed",
    activity3: "activity3Solved",
    activity4chips: "chipsCollected",
    activity4icons: "iconsPlaced",
    activity5: "activity5Solved"
  };

  const stateKey = store[group];
  if (!stateKey || state[stateKey].has(key)) return;
  state[stateKey].add(key);
  state.stars += 1;
  updateStars();
}

function moveToNextScreen(nextScreen, delay = 900) {
  window.setTimeout(() => {
    state.screen = nextScreen;
    render();
  }, delay);
}

function handleLaptopPartClick(partKey) {
  const part = mission.parts.find((item) => item.key === partKey);
  if (!part) return;

  if (state.screen === "activity1") {
    if (!state.activity1Found.has(partKey)) {
      awardStar("activity1", partKey);
      showFeedback(`You found the ${part.label.toLowerCase()}! ${part.help}`, "good");
    } else {
      showFeedback(`You already found the ${part.label.toLowerCase()}.`, "good");
    }

    if (state.activity1Found.size === mission.parts.length) {
      moveToNextScreen("activity2");
    }
    return;
  }

  if (state.screen === "activity5") {
    const targetKey = state.miniTargetOrder[state.miniIndex];
    if (partKey === targetKey) {
      awardStar("activity5", state.miniIndex);
      showFeedback(`Yes! That is the ${part.label.toLowerCase()}.`, "good");
      if (state.miniIndex === mission.miniPrompts.length - 1) {
        moveToNextScreen("final", 1000);
      } else {
        window.setTimeout(() => {
          state.miniIndex += 1;
          render();
        }, 850);
      }
    } else {
      showFeedback("Try again. Look carefully.", "try");
    }
  }
}

function handleActivity2Selection(partKey) {
  if (state.activity2Placed.has(partKey)) return;
  state.selectedLabel = partKey;
  render();
}

function placeLabel(partKey) {
  const selected = state.selectedLabel;
  if (!selected) {
    showFeedback("Pick a label first.", "try");
    return;
  }

  if (selected !== partKey) {
    showFeedback("Not quite. Try a different part.", "try");
    return;
  }

  if (!state.activity2Placed.has(partKey)) {
    awardStar("activity2", partKey);
    state.activity2Placed.add(partKey);
  }

  state.selectedLabel = null;
  render();
  showFeedback(`Well done! That is the ${mission.parts.find((part) => part.key === partKey).label.toLowerCase()}.`, "good");

  if (state.activity2Placed.size === mission.parts.length) {
    showFeedback("Excellent! You know the parts of a laptop.", "good");
    moveToNextScreen("activity3");
  }
}

function handlePowerChoice(choice) {
  const question = mission.powerQuestions[state.powerIndex];
  if (!question) return;

  const selectedButton = document.querySelector(`[data-power-choice="${choice}"]`);
  if (selectedButton) {
    selectedButton.classList.add("selected");
  }

  if (choice === question.answer) {
    awardStar("activity3", state.powerIndex);
    showFeedback(question.feedback, "good");
    if (state.powerIndex === mission.powerQuestions.length - 1) {
      moveToNextScreen("activity4");
    } else {
      window.setTimeout(() => {
        state.powerIndex += 1;
        render();
      }, 850);
    }
  } else {
    showFeedback("Good try. Look at the button names.", "try");
  }
}

function handleChipClick(index) {
  if (state.chipsCollected.has(index)) return;
  awardStar("activity4chips", index);
  state.chipsCollected.add(index);
  render();

  if (state.chipsCollected.size === mission.chips.length) {
    showFeedback("Great work! Now move the icons into the laptop.", "good");
    moveToNextScreen("activity4", 1100);
  } else {
    showFeedback(`Chip found! ${mission.chips.length - state.chipsCollected.size} more to go.`, "good");
  }
}

function handleIconSelection(iconKey) {
  if (state.iconsPlaced.has(iconKey)) return;
  state.selectedIcon = iconKey;
  render();
}

function placeIcon(iconKey) {
  const selected = state.selectedIcon;
  if (!selected) {
    showFeedback("Pick an icon first.", "try");
    return;
  }

  if (selected !== iconKey) {
    showFeedback("That is not the chosen icon.", "try");
    return;
  }

  if (!state.iconsPlaced.has(iconKey)) {
    awardStar("activity4icons", iconKey);
    state.iconsPlaced.add(iconKey);
  }

  state.selectedIcon = null;
  render();
  showFeedback("Nice dragging! That icon is in the laptop.", "good");

  if (state.iconsPlaced.size === mission.icons.length) {
    moveToNextScreen("activity5", 1100);
  }
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

function resetGame() {
  state = createFreshState();
  render();
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.action === "start") {
    state.screen = "activity1";
    render();
    return;
  }

  if (target.dataset.action === "reset") {
    resetGame();
    return;
  }

  if (target.dataset.partKey) {
    handleLaptopPartClick(target.dataset.partKey);
    return;
  }

  if (target.dataset.labelKey) {
    if (state.screen === "activity2") {
      handleActivity2Selection(target.dataset.labelKey);
    }
    return;
  }

  if (target.dataset.powerChoice) {
    handlePowerChoice(target.dataset.powerChoice);
    return;
  }

  if (target.dataset.chipIndex) {
    handleChipClick(Number(target.dataset.chipIndex));
    return;
  }

  if (target.dataset.iconKey) {
    if (state.screen === "activity4") {
      handleIconSelection(target.dataset.iconKey);
    }
  }
});

app.addEventListener("dragstart", (event) => {
  const label = event.target.closest("[data-label-key]");
  const icon = event.target.closest("[data-icon-key]");

  if (label && state.screen === "activity2" && !label.disabled) {
    state.selectedLabel = label.dataset.labelKey;
    event.dataTransfer.setData("text/plain", label.dataset.labelKey);
    event.dataTransfer.effectAllowed = "move";
  }

  if (icon && state.screen === "activity4" && !icon.disabled) {
    state.selectedIcon = icon.dataset.iconKey;
    event.dataTransfer.setData("text/plain", icon.dataset.iconKey);
    event.dataTransfer.effectAllowed = "move";
  }
});

app.addEventListener("dragover", (event) => {
  const dropZone = event.target.closest("[data-drop-zone], [data-laptop-drop='true']");
  if (!dropZone) return;
  event.preventDefault();
  dropZone.classList.add("ready");
});

app.addEventListener("dragleave", (event) => {
  const dropZone = event.target.closest("[data-drop-zone], [data-laptop-drop='true']");
  if (!dropZone) return;
  dropZone.classList.remove("ready");
});

app.addEventListener("drop", (event) => {
  const dropZone = event.target.closest("[data-drop-zone], [data-laptop-drop='true']");
  if (!dropZone) return;

  event.preventDefault();
  dropZone.classList.remove("ready");

  const payload = event.dataTransfer.getData("text/plain");
  if (!payload) return;

  if (dropZone.dataset.dropZone) {
    placeLabel(dropZone.dataset.dropZone);
    return;
  }

  if (dropZone.dataset.laptopDrop === "true") {
    placeIcon(payload);
  }
});

app.addEventListener("click", (event) => {
  const dropZone = event.target.closest("[data-drop-zone], [data-laptop-drop='true']");
  if (!dropZone) return;

  if (dropZone.dataset.dropZone && state.screen === "activity2") {
    placeLabel(dropZone.dataset.dropZone);
  }

  if (dropZone.dataset.laptopDrop === "true" && state.screen === "activity4") {
    if (state.selectedIcon) {
      placeIcon(state.selectedIcon);
    }
  }
});

homeButton.addEventListener("click", resetGame);

render();
