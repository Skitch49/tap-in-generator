import { all_tap_in } from "./data.js";

//audio
let screamerAudio = new Audio("assets/audio/end_tap_in.mp3");
screamerAudio.preload = "auto";
let screamerActivated = false;

const allTapin = document.querySelector(".all-tapin");
const max = all_tap_in.length;
allTapin.innerHTML = max;

//certif vs gold certif
const certif = document.querySelector(".certif");
const goldCertif = document.querySelector(".gold-certif");
certif.addEventListener("click", () => {
  certif.classList.toggle("certif-hidden");
  goldCertif.classList.toggle("certif-hidden");
});
goldCertif.addEventListener("click", () => {
  certif.classList.toggle("certif-hidden");
  goldCertif.classList.toggle("certif-hidden");
});

// Like

const dontLiked = document.querySelector(".svg-like");
const liked = document.querySelector(".svg-liked");
const wrapperLiked = document.querySelector(".wrapper-svg-liked");
const paraLiked = document.querySelector(".para-liked");
wrapperLiked.addEventListener("click", () => {
  liked.classList.toggle("like-hidden");
  dontLiked.classList.toggle("like-hidden");
  likedTapIn(liked);
});
paraLiked.addEventListener("click", () => {
  liked.classList.toggle("like-hidden");
  dontLiked.classList.toggle("like-hidden");
  likedTapIn(liked);
});

let countLike = 0;
const messageToUser = document.querySelector(".messageToUser");
function likedTapIn(liked) {
  if (!liked.classList.contains("like-hidden")) {
    countLike++;

    switch (countLike) {
      case 1:
        messageToUser.innerHTML = "Toi tu likes ça ! Vraiment ?!";
        break;
      case 2:
        messageToUser.innerHTML =
          "Arrete de liker ce genre de tweet tu vos mieux que ça";
        break;
      case 3:
        messageToUser.innerHTML =
          "Je t'ai dis d'arreter tu comprends ouuuu ????";
        break;
      case 4:
        messageToUser.innerHTML =
          "Bon j'imagine que si t'es sur ce genre de site c'est que t'es déjà une cause perdu...";
        break;
      case 5:
        wrapperLiked.style.transform = "scale(0.3)";
        paraLiked.style.fontSize = "8px";

        messageToUser.innerHTML = "Ahah c'est plus dur de liker maintenant 😏";
        break;
      case 6:
        paraLiked.style.display = "none";
        wrapperLiked.style.transform = "scale(0.1)";
        messageToUser.innerHTML = "pfesipghesighesopjgeosjg";
        break;
      case 7:
        wrapperLiked.style.transform = "scale(2)";
        paraLiked.style.display = "block";

        paraLiked.style.fontSize = "13px";
        paraLiked.style.left = "38px";

        messageToUser.innerHTML = "Bon likes ce que tu veux je m'en tape ";
        break;
      case 15:
        messageToUser.innerHTML =
          "<a class='link' target='_blank' href='https://x.com/Skitch49'>Si t'es si fan de moi t'as juste a me follow</a>";
        break;
      case 16:
        messageToUser.innerHTML =
          "<a class='link' target='_blank' href='https://x.com/Skitch49'>Si t'es si fan de moi t'as juste a me follow</a>";
        break;
      case 17:
        messageToUser.innerHTML =
          "<a class='link' target='_blank' href='https://x.com/Skitch49'>Si t'es si fan de moi t'as juste a me follow</a>";
        break;
      case 18:
        messageToUser.innerHTML =
          "<a class='link' target='_blank' href='https://x.com/Skitch49'>Si t'es si fan de moi t'as juste a me follow</a>";
        break;
      case 19:
        messageToUser.innerHTML =
          "<a class='link' target='_blank' href='https://x.com/Skitch49'>Si t'es si fan de moi t'as juste a me follow</a>";
        break;
      case 20:
        wrapperLiked.style.transform = "scale(1)";
        paraLiked.style.left = "30px";
        messageToUser.innerHTML = "Bon adieu...";
        break;

      default:
        break;
    }
  } else {
    messageToUser.innerHTML = "";
  }
}
// Generate Tap In
const btn = document.querySelector(".btn-primary");
btn.addEventListener("click", generateTapIn);

let lastNumber = [];
const paraTapIn = document.querySelector(".tap-in-name");
const imgTapIn = document.querySelector(".img-tap-in");

function generateTapIn() {
  // reset like
  if (!liked.classList.contains("like-hidden")) {
    liked.classList.toggle("like-hidden");
    dontLiked.classList.toggle("like-hidden");
    messageToUser.innerHTML = "";
  }
  // Generer animation
  if (!screamerActivated) {
    animation();
  }

  let number = Math.floor(Math.random() * max);
  if (lastNumber.length < all_tap_in.length) {
    if (lastNumber.includes(number)) {
      while (lastNumber.includes(number)) {
        number = Math.floor(Math.random() * max);
      }
    }
    lastNumber.push(number);

    paraTapIn.innerHTML = `${all_tap_in[number].name}`;
    imgTapIn.src = `assets/img/tap-in/${all_tap_in[number].img}`;
  } else {
    if (!screamerActivated) {
      screamer();
    }
  }
}

// Logo
let logoCount = 2;
const logo = document.querySelector(".logo img");
logo.addEventListener("click", changeLogo);
function changeLogo() {
  if (logoCount < 5) {
    logo.src = `assets/icons/logo-twitter_${logoCount++}.png`;
  } else {
    logo.removeEventListener("click", changeLogo);
  }
}

// animation
const message = document.querySelector(".number-message");
const retweet = document.querySelector(".number-retweet");
const like = document.querySelector(".number-like");
const view = document.querySelector(".number-view");
let messageInterval, retweetInterval, likeInterval, viewInterval;

function animation() {
  clearInterval(messageInterval);
  clearInterval(retweetInterval);
  clearInterval(likeInterval);
  clearInterval(viewInterval);
  message.innerHTML = "0";
  retweet.innerHTML = "0";
  like.innerHTML = "0";
  view.innerHTML = "0";

  messageInterval = updateAnimation(message, getRandomInt(19, 150), 50);
  retweetInterval = updateAnimation(retweet, getRandomInt(150, 600), 15);
  likeInterval = updateAnimation(like, getRandomInt(500, 700), 12);
  viewInterval = updateAnimation(view, getRandomInt(700, 999), 10);
}
function updateAnimation(element, max, time) {
  let number = 1;
  let interval = setInterval(() => {
    element.innerHTML = number++;
    if (number === max) {
      clearInterval(interval);
    }
  }, time);
  return interval;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

function writer(word, index, element) {
  if (index < word.length) {
    setTimeout(() => {
      element.innerHTML = `${word[index]}`;
      writer(word, index + 1, element);
    }, 300);
  }
}
const loader = document.querySelector(".loader");
window.addEventListener("load", loading);
function loading() {
  loader.style.opacity = 0;
  loader.style.zIndex = -1;
  animation();
}

function screamer() {
  const screamerImg = document.createElement("img");
  screamerImg.src = "assets/img/screamer.jpg";
  screamerImg.classList.add("screamer-img");
  const figure = document.querySelector(".figure-img-tap-in");
  figure.append(screamerImg);
  figure.style.overflow = "visible";
  figure.style.minHeight = "650px";
  paraTapIn.innerHTML =
    "J'ai plus rien a te générer...<br>Même toi t'es choqué";
  imgTapIn.src = "assets/img/stop_generate_tap_in.jpg";
  screamerAudio.play();
  screamerActivated = true;
  setTimeout(() => {
    figure.style.overflow = "hidden";
    figure.style.minHeight = "auto";
    screamerImg.remove();
  }, 1000);
}

// Date
const dateElement = document.querySelector(".date span");
const dateToday = new Date();
let formatedDate = dateToday.toLocaleDateString(undefined, {
  day: "numeric",
  month: "short",
});
dateElement.innerHTML = `${formatedDate}`;

//Share
const btnShared = document.querySelector(".share");
btnShared.addEventListener("click", shareWebsite);
function shareWebsite() {
  window.navigator.share({
    title: "Tap-in Generator",
    text: "Toi après avoir générer ton tap-in",
    url: "https://tap-in-generator.alexis-delaunay.fr",
  });
}
