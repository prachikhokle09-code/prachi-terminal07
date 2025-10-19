const output = document.getElementById('output');
const input = document.getElementById('command-input');
const terminal = document.getElementById('terminal');
const introTitle = document.getElementById('intro-title');
const butterflyContainer = document.querySelector('.butterfly-container');

// 🦋 Create soft, elegant butterflies
for (let i = 0; i < 8; i++) {
  const b = document.createElement('div');
  b.classList.add('butterfly');
  b.innerHTML = '🦋';
  b.style.left = Math.random() * 100 + 'vw';
  b.style.animationDelay = Math.random() * 10 + 's';
  b.style.fontSize = (1 + Math.random() * 1.5) + 'em';
  butterflyContainer.appendChild(b);
}

// 🌸 Typing animation for intro
let introText = "If you’re curious, press [Enter] to explore the unknown...";
let index = 0;

function typeIntro() {
  if (index < introText.length) {
    introTitle.innerHTML = "Welcome to Prachi’s World 🦋<br><br>" + introText.substring(0, index + 1);
    index++;
    setTimeout(typeIntro, 50);
  }
}
setTimeout(typeIntro, 1500);

// ✅ MOBILE FIX: Tap button for phones
const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
if (isMobile && terminal.classList.contains('hidden')) {
  introTitle.innerHTML = "If you’re curious, tap below to explore the unknown...";

  const exploreBtn = document.createElement('button');
  exploreBtn.textContent = "✨ Tap to Explore ✨";
  exploreBtn.classList.add('explore-btn');
  document.body.appendChild(exploreBtn);

  exploreBtn.addEventListener('click', () => {
    terminal.classList.remove('hidden');
    introTitle.style.display = 'none';
    exploreBtn.style.display = 'none';
    clearButterflies();

    // Print the commands
    print("✨ Try these commands:\n- journey\n- creations\n- energy\n- inspiration\n- mystery\n- exit\n");

    // Focus input to open mobile keyboard
    input.focus();
  });
}

// 🎬 Desktop Enter key to reveal terminal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && terminal.classList.contains('hidden') && !isMobile) {
    terminal.classList.remove('hidden');
    introTitle.style.display = 'none';
    clearButterflies();
    print("✨ Try these commands:\n- journey\n- creations\n- energy\n- inspiration\n- mystery\n- exit\n");
  }
});

function clearButterflies() {
  butterflyContainer.innerHTML = '';
}

// 🧠 Terminal functionality
function print(text) {
  output.innerHTML += "\n" + text + "\n";
  output.scrollTop = output.scrollHeight;
}

function processCommand(command) {
  switch (command.toLowerCase()) {
    case 'journey':
      print("From curiosity to code — my path began with Java, wandered through Spring Boot forests, and grew into creating experiences that breathe.");
      break;

    case 'creations':
      print("✨ UNILEVER, ARIZONA, HCSC 🌐 DreamAPI, ☕ cakes and cookies, amazing Chinese & continental cook, can try hands on craft and art, beautiful sketcher — each built with magic and logic.");
      break;

    case 'energy':
      print("Code is my meditation. Beauty is my debugging. Growth is my green tea. 💫");
      break;

    case 'inspiration':
      print("“The only limit to reality is imagination translated into code.” ✨");
      break;

    case 'mystery':
      print("The butterflies know more than they show... 🦋 A secret awaits those who look closely.");
      spawnMysteryButterflies();
      break;

    case 'exit':
      output.innerHTML = "";
      print("Goodbye, traveler. May your code always compile successfully. 🌸");
      break;

    default:
      print(`Unknown command: ${command}`);
  }
}

// Handle Enter key inside terminal input
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    if (command !== '') {
      print("> " + command);
      processCommand(command);
      input.value = '';
    }
  }
});

function spawnMysteryButterflies() {
  for (let i = 0; i < 5; i++) {
    const b = document.createElement('div');
    b.classList.add('butterfly');
    b.innerHTML = '🦋';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.animationDelay = Math.random() * 10 + 's';
    b.style.fontSize = (1 + Math.random() * 1.5) + 'em';
    butterflyContainer.appendChild(b);
  }
}
