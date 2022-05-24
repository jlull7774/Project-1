const songs = [
  "Out of Time",
  "Love So Right",
  "Around the World",
  "Luv My Slatts",
  "Already Rich",
];

songs[0] = "Out of Time";

songs[1] = "Love So Right";

songs[2] = "Around the World";

songs[3] = "Luv My Slatts";

songs[4] = "Already Rich";

function outOfTimeSong() {
  let audio1 = new Audio("insert mp3");
  audio1.play;
}
function loveSoRight() {
  let audio2 = new Audio("insert mp3");
  audio2.play;
}
function aroundTheWorld() {
  let audio3 = new Audio("insert mp3");
  audio3.play;
}
function luvMySlatts() {
  let audio4 = new Audio("insert mp3");
  audio4.play;
}
function alreadyRich() {
  let audio5 = new Audio("insert mp3");
  audio5.play;
}

function randomItem() {
  return Math.floor(Math.random() * songs.length) + 1;
}

function spinTheMachine() {
  let line1 = document.getElementById("line1");
  let line2 = document.getElementById("line2");
  let line3 = document.getElementById("line3");

  let item1 = randomItem();
  let item2 = randomItem();
  let item3 = randomItem();

  line1.innerHTML = item1;
  line2.innerHTML = item2;
  line3.innerHTML = item3;

  if (item1 == 1 || item2 == 1 || item3 == 1) {
    console.log(songs[0]);
  }
  if (item1 == 2 || item2 == 2 || item3 == 2) {
    console.log(songs[1]);
  }
  if (item1 == 3 || item2 == 3 || item3 == 3) {
    console.log(songs[2]);
  }
  if (item1 == 4 || item2 == 4 || item3 == 4) {
    console.log(songs[3]);
  }
  if (item1 == 5 || item2 == 5 || item3 == 5) {
    console.log(songs[4]);
  }
}

// console.log(item1, item2, item3);
// randomItem();
// console.log(randomItem());
// console.log(line1, line2, line3)
