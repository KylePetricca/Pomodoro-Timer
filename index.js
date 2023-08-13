// Variables and DOM Elements
const startEl = document.getElementById("start");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");
const settingsEl = document.getElementById("settings");
const closeEl = document.getElementById("close-btn");

const audio = new Audio("audio/Bell Alert.mp3");

// Timer Functions

let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTimer = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  document.title = `${formattedTimer} | Pomodoro Timer`;
  timerEl.innerHTML = formattedTimer;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Take a break!");
      audio.play();
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

function displayToggle() {
  const settingsMenu = document.getElementById("settings-screen");
  settingsMenu.classList.toggle("hidden");
}

// Background image functions
const images = [
  "./img/Kyle__Japanese_aesthetic_landscape_realistic_landscape_aestheti_8b1a49d8-cf78-4c93-a832-1ff0dd3d887f.png",
  "./img/Kyle__Japanese_aesthetic_landscape_realistic_landscape_aestheti_c736430f-dafb-4988-96ad-00eae60f576a.png",
  "./img/Kyle__Japanese_cherry_blossom_landscape_realistic_landscape_7518f270-3c38-4384-903d-068bbc4ab013.png",
  "./img/Kyle__Japanese_cherry_blossom_landscape_realistic_landscape_f5280ecb-55e0-4585-8fe8-075f2e6f31f9.png",
  "./img/Kyle__Japanese_landscape_realistic_landscape_651ddaf4-0c14-4008-9321-b64ac02e9ecc.png",
  "./img/Kyle__Japanese_landscape_realistic_landscape_ea46ed4a-e72f-45ef-b761-13b274136a1e.png",
  "./img/Kyle__Japanese_landscape_realistic_landscape_f99d3b5a-f67b-48a0-96c9-76036f246cc4.png",
  "./img/Kyle__japanese_temple_realistic_landscape_2c0d8cdf-0597-4a78-a07e-de73b49a11b5.png",
];

window.setInterval(changePicture, 10000);

let i = 0;
function changePicture() {
  const background = document.querySelector("body");
  i++;
  if (i > images.length - 1) i = 0;
  background.style.backgroundImage = `url(${images[i]})`;
}

// Colour theme functions
function changeColours() {
  const colourOptions = document.getElementById('colour-options').value;
  switch (colourOptions) {
    case 'black':
      document.documentElement.style.setProperty('--main-colour', '359, 100%, 0%');
      break;
    case 'white':
      document.documentElement.style.setProperty('--main-colour', '0, 0%, 100%');
      document.documentElement.style.setProperty('--second-colour', '359, 100%, 0%');
      break;
    case 'coral':
      document.documentElement.style.setProperty('--main-colour', '209, 14%, 38%');
      break;
    case 'purple':
      document.documentElement.style.setProperty('--main-colour', '251, 24%, 55%');
      break;
    case 'pink':
      document.documentElement.style.setProperty('--main-colour', '353, 46%, 72%');
      break;
    case 'tumble':
      document.documentElement.style.setProperty('--main-colour', '42, 34%, 71%');
      break;
    default:
      document.documentElement.style.setProperty('--main-colour', '359, 100%, 0%');
      break;
  }
}


// Event Listeners
startEl.addEventListener("click", startTimer);
resetEl.addEventListener("click", resetTimer);
settingsEl.addEventListener("click", displayToggle);
closeEl.addEventListener("click", displayToggle);