// Variables and DOM Elements
const startEl = document.getElementById("start");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");
const settingsEl = document.getElementById("settings");
const closeEl = document.getElementById("close-btn");

let audio = new Audio("audio/Bell Alert.mp3");

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
      // alert("Take a break!");
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
let images = [
  "img/Japanese/Kyle__Japanese_aesthetic_landscape_realistic_landscape_aestheti_8b1a49d8-cf78-4c93-a832-1ff0dd3d887f.png",
  "img/Japanese/Kyle__Japanese_aesthetic_landscape_realistic_landscape_aestheti_c736430f-dafb-4988-96ad-00eae60f576a.png",
  "img/Japanese/Kyle__Japanese_cherry_blossom_landscape_realistic_landscape_7518f270-3c38-4384-903d-068bbc4ab013.png",
  "img/Japanese/Kyle__Japanese_cherry_blossom_landscape_realistic_landscape_f5280ecb-55e0-4585-8fe8-075f2e6f31f9.png",
  "img/Japanese/Kyle__Japanese_landscape_realistic_landscape_651ddaf4-0c14-4008-9321-b64ac02e9ecc.png",
  "img/Japanese/Kyle__Japanese_landscape_realistic_landscape_ea46ed4a-e72f-45ef-b761-13b274136a1e.png",
  "img//Kyle__Japanese_landscape_realistic_landscape_f99d3b5a-f67b-48a0-96c9-76036f246cc4.png",
  "img/Japanese/Kyle__japanese_temple_realistic_landscape_2c0d8cdf-0597-4a78-a07e-de73b49a11b5.png",
];

function changeBackgrounds() {
  const backgroundOptions = document.getElementById("background-options").value;
  switch (backgroundOptions) {
    case "japanese":
      images = [
        "img/Japanese/Kyle__Japanese_aesthetic_landscape_realistic_landscape_aestheti_8b1a49d8-cf78-4c93-a832-1ff0dd3d887f.png",
        "img/Japanese/Kyle__Japanese_aesthetic_landscape_realistic_landscape_aestheti_c736430f-dafb-4988-96ad-00eae60f576a.png",
        "img/Japanese/Kyle__Japanese_cherry_blossom_landscape_realistic_landscape_7518f270-3c38-4384-903d-068bbc4ab013.png",
        "img/Japanese/Kyle__Japanese_cherry_blossom_landscape_realistic_landscape_f5280ecb-55e0-4585-8fe8-075f2e6f31f9.png",
        "img/Japanese/Kyle__Japanese_landscape_realistic_landscape_651ddaf4-0c14-4008-9321-b64ac02e9ecc.png",
        "img/Japanese/Kyle__Japanese_landscape_realistic_landscape_ea46ed4a-e72f-45ef-b761-13b274136a1e.png",
        "img//Kyle__Japanese_landscape_realistic_landscape_f99d3b5a-f67b-48a0-96c9-76036f246cc4.png",
        "img/Japanese/Kyle__japanese_temple_realistic_landscape_2c0d8cdf-0597-4a78-a07e-de73b49a11b5.png",
      ];
      break;
    case "medieval":
      images = [
        "img/Medieval/Kyle__medieval_fantasy_tavern_fantasy_mythical_cosy_realistic_l_70476703-13c4-469f-a310-4f12a7d991d7.png", "img/Medieval/Kyle__medieval_fantasy_town_fantasy_mythical__realistic_landsca_9d2dbba0-299d-40d7-8c07-55b0e7fcd99f.png", "img/Medieval/Kyle__medieval_forest_fantasy_realistic_landscape_aesthetic_7949ca4d-2852-4404-bd96-8c11bf0674b8.png", "img/Medieval/Kyle__medieval_forest_fantasy_realistic_landscape_aesthetic_e9706036-b837-4d96-b22c-3e2b9b49f38f.png", "img/Medieval/Kyle__medieval_castle_aesthetic_landscape_realistic_landscape_a_e4d56e35-cb49-4157-8621-9b7c99c3f2a0.png", "img/Medieval/Kyle__medieval_aesthetic_landscape_realistic_landscape_aestheti_c6e89900-54fa-42d2-93af-7c73c9fc063c.png", "img/Medieval/Kyle__medieval_aesthetic_landscape_realistic_landscape_aestheti_a2ed665f-e700-4f04-a61e-71f297d3b244.png", "img/Medieval/Kyle__medieval_fantasy_dragon_aesthetic_landscape_fantasy_mythi_2e8cf0cf-f3e9-4736-b093-1968fb13016d.png"
      ];
      break;
    case "steampunk":
      images = [
        "img/Steampunk/Kyle__steampunk_background_fantasy_mythical_realistic_landscape_f543f0ea-9ab8-448d-bf16-e7d18a2620aa.png", "img/Steampunk/Kyle__steampunk_city_fantasy_realistic_landscape_aesthetic_b0ee6768-1ca0-4f92-82a8-80fb9e3b03fe.png", "img/Steampunk/Kyle__steampunk_landscape_fantasy_mythical_cosy_realistic_lands_7e235133-ac58-4040-a0da-e74f184797ca.png", "img/Steampunk/Kyle__steampunk_library_fantasy_mythical_cosy_realistic_landsca_00965b2a-7d25-4468-ba3f-604ce54cfe96.png", "img/Steampunk/Kyle__steampunk_train_station_fantasy_mythical_cozy_realistic_l_2f793a2d-b67a-44b7-b56e-6e7f88e43ebd.png"
      ];
      break;
    case "anime":
      images = [
        "img/Anime/Kyle__Highly_quality_image_8k_AI_90s_anime_style_studio_ghibli__a04235f4-bce1-439f-a933-b37541860f8c.png", "img/Anime/Kyle__Highly_quality_image_8k_AI_forest_anime_style_studio_ghib_83b6adff-fe6b-40c7-832d-859682c9ae34.png", "img/Anime/Kyle__Highly_quality_image_8k_AI_froganime_style_studio_ghibli__10930d22-fe8c-4264-8f68-6a3c7e85381f.png", "img/Anime/Kyle__Highly_quality_image_8k_AI_school_anime_style_studio_ghib_6fe84ad4-ee21-49e5-a8e6-bebd69ec6061.png", "img/Anime/Kyle__Highly_quality_image_8k_AI_school_anime_style_studio_ghib_db23ae95-04f1-41ff-abdc-7579a4bea4d1.png", "img/Anime/Kyle__Highly_quality_image_8k_AI_vintage_anime_style_studio_ghi_43d070a9-5b7d-40fb-8499-c8ec101e31d1.png"
      ];
      break;
    default:
      images = [
        "img/Japanese/Kyle__Japanese_aesthetic_landscape_realistic_landscape_aestheti_8b1a49d8-cf78-4c93-a832-1ff0dd3d887f.png",
        "img/Japanese/Kyle__Japanese_aesthetic_landscape_realistic_landscape_aestheti_c736430f-dafb-4988-96ad-00eae60f576a.png",
        "img/Japanese/Kyle__Japanese_cherry_blossom_landscape_realistic_landscape_7518f270-3c38-4384-903d-068bbc4ab013.png",
        "img/Japanese/Kyle__Japanese_cherry_blossom_landscape_realistic_landscape_f5280ecb-55e0-4585-8fe8-075f2e6f31f9.png",
        "img/Japanese/Kyle__Japanese_landscape_realistic_landscape_651ddaf4-0c14-4008-9321-b64ac02e9ecc.png",
        "img/Japanese/Kyle__Japanese_landscape_realistic_landscape_ea46ed4a-e72f-45ef-b761-13b274136a1e.png",
        "img//Kyle__Japanese_landscape_realistic_landscape_f99d3b5a-f67b-48a0-96c9-76036f246cc4.png",
        "img/Japanese/Kyle__japanese_temple_realistic_landscape_2c0d8cdf-0597-4a78-a07e-de73b49a11b5.png",
      ];
      break;
  };
};

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
  const colourOptions = document.getElementById("colour-options").value;
  switch (colourOptions) {
    case "black":
      document.documentElement.style.setProperty(
        "--main-colour",
        "359, 100%, 0%"
      );
      document.documentElement.style.setProperty(
        "--second-colour",
        "0, 0%, 100%"
      );
      break;
    case "white":
      document.documentElement.style.setProperty(
        "--main-colour",
        "0, 0%, 100%"
      );
      document.documentElement.style.setProperty(
        "--second-colour",
        "359, 100%, 0%"
      );
      break;
    case "coral":
      document.documentElement.style.setProperty(
        "--main-colour",
        "209, 14%, 38%"
      );
      document.documentElement.style.setProperty(
        "--second-colour",
        "0, 0%, 100%"
      );
      break;
    case "purple":
      document.documentElement.style.setProperty(
        "--main-colour",
        "251, 24%, 55%"
      );
      document.documentElement.style.setProperty(
        "--second-colour",
        "0, 0%, 100%"
      );
      break;
    case "pink":
      document.documentElement.style.setProperty(
        "--main-colour",
        "353, 46%, 72%"
      );
      document.documentElement.style.setProperty(
        "--second-colour",
        "0, 0%, 100%"
      );
      break;
    case "tumble":
      document.documentElement.style.setProperty(
        "--main-colour",
        "42, 34%, 71%"
      );
      document.documentElement.style.setProperty(
        "--second-colour",
        "0, 0%, 100%"
      );
      break;
    default:
      document.documentElement.style.setProperty(
        "--main-colour",
        "359, 100%, 0%"
      );
      document.documentElement.style.setProperty(
        "--second-colour",
        "0, 0%, 100%"
      );
      break;
  }
}

// Sound theme functions

function changeSound() {
  const soundOptions = document.getElementById("sound-options").value;
  switch (soundOptions) {
    case "bell":
      audio = new Audio("audio/Bell Alert.mp3");
      audio.play();
      break;
    case "samurai":
      audio = new Audio("audio/10787 samurai message ding.wav");
      audio.play();
      break;
    case "medieval":
      audio = new Audio("audio/Medieval Alert.mp3");
      audio.play();
      break;
    case "fanfare":
      audio = new Audio("audio/Win Fanfare.mp3");
      audio.play();
      break;
    default:
      audio = new Audio("audio/Bell Alert.mp3");
      audio.play();
      break;
  }
}

// Spotify
function showSpotify(checkbox) {
  if (checkbox === true) {
    document.getElementById('spotify').classList.add('hidden');
  } else {
    document.getElementById('spotify').classList.remove('hidden');
  };
};

// Event Listeners
startEl.addEventListener("click", startTimer);
resetEl.addEventListener("click", resetTimer);
settingsEl.addEventListener("click", displayToggle);
closeEl.addEventListener("click", displayToggle);
