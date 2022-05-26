const { Button } = require("bootstrap");

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
  let audio1 = document.getElementById("out-of-time");
  audio1.play();
}
function loveSoRight() {
  let audio2 = document.getElementById("love-so-right");
  audio2.play();
}
function aroundTheWorld() {
  let audio3 = document.getElementById("around-the-world");
  audio3.play();
}
function luvMySlatts() {
  let audio4 = document.getElementById("luv-my-slatts");
  audio4.play();
}
function alreadyRich() {
  let audio5 = document.getElementById("already-rich");
  audio5.play();
}

function randomItem() {
  return Math.floor(Math.random() * 5) + 1;
}
// function spinTheMachine1() {
//   setTimeout(() => {
//     let stopButton = document.getElementById("spin-button");
//     stopButton.className = "btn btn-light fs-2 my-5 mx-0 disabled";
//     let line1 = document.getElementById("line1");
//     //   let line2 = document.getElementById("line2");
//     //   let line3 = document.getElementById("line3");

//     let item1 = randomItem();
//     // let item2 = randomItem();
//     // let item3 = randomItem();

//     line1.innerHTML = item1;
//     //   line2.innerHTML = item2;
//     //   line3.innerHTML = item3;

//     if (item1 == 1) {
//       outOfTimeSong();
//     }
//     if (item1 == 2) {
//       loveSoRight();
//     }
//     if (item1 == 3) {
//       aroundTheWorld();
//     }
//     if (item1 == 4) {
//       luvMySlatts();
//     }
//     if (item1 == 5) {
//       alreadyRich();
//     }
//   }, 5000);
// }
// function spinTheMachine2() {
//   setTimeout(() => {
//     //   let line1 = document.getElementById("line1");
//     let line2 = document.getElementById("line2");
//     //   let line3 = document.getElementById("line3");

//     //   let item1 = randomItem();
//     let item2 = randomItem();
//     // let item3 = randomItem();

//     //   line1.innerHTML = item1;
//     line2.innerHTML = item2;
//     //   line3.innerHTML = item3;

//     if (item2 == 1) {
//       outOfTimeSong();
//     }
//     if (item2 == 2) {
//       loveSoRight();
//     }
//     if (item2 == 3) {
//       aroundTheWorld();
//     }
//     if (item2 == 4) {
//       luvMySlatts();
//     }
//     if (item2 == 5) {
//       alreadyRich();
//     }
//   }, 12000);
// }
// function slotMachineWin() {
//   let audio7 = document.getElementById("slot-win");
//   if (item1 == item2 && (item2 == item3) & (item1 == item3)) {
//     audio7.play();
//   }
// }
// function spinTheMachine3() {
//   setTimeout(() => {
//     //   let line1 = document.getElementById("line1");
//     //   let line2 = document.getElementById("line2");

//     slotMachineWin();
//     let tryAgainButton = document.getElementById("try-again-button");
//     tryAgainButton.className = "btn btn-light fs-3 my-5";
//     let line3 = document.getElementById("line3");

//     //   let item1 = randomItem();
//     //   let item2 = randomItem();
//     let item3 = randomItem();

//     //   line1.innerHTML = item1;
//     //   line2.innerHTML = item2;
//     line3.innerHTML = item3;

//     if (item3 == 1) {
//       outOfTimeSong();
//     }
//     if (item3 == 2) {
//       loveSoRight();
//     }
//     if (item3 == 3) {
//       aroundTheWorld();
//     }
//     if (item3 == 4) {
//       luvMySlatts();
//     }
//     if (item3 == 5) {
//       alreadyRich();
//     }
//   }, 17000);
// }
function slotCountingMusic() {
  let audio6 = document.getElementById("slot-counting");
  audio6.play();
}




function masterSpin() {
  slotCountingMusic();
  
  let stopButton = document.getElementById("spin-button");
  stopButton.className = "btn btn-light fs-2 my-5 mx-0 disabled";

  setTimeout(() => {
    let line1 = document.getElementById("line1");
    // let line2 = document.getElementById("line2");
    // let line3 = document.getElementById("line3");

    let item1 = randomItem();
    line1.innerHTML = item1;
    if (item1 == 1) {
      outOfTimeSong();
    }
    if (item1 == 2) {
      loveSoRight();
    }
    if (item1 == 3) {
      aroundTheWorld();
    }
    if (item1 == 4) {
      luvMySlatts();
    }
    if (item1 == 5) {
      alreadyRich();
    }
  }, 4500);

  setTimeout(() => {
    let item2 = randomItem();
    // let item3 = randomItem();

    line2.innerHTML = item2;
    // line3.innerHTML = item3;

    if (item2 == 1) {
      outOfTimeSong();
    }
    if (item2 == 2) {
      loveSoRight();
    }
    if (item2 == 3) {
      aroundTheWorld();
    }
    if (item2 == 4) {
      luvMySlatts();
    }
    if (item2 == 5) {
      alreadyRich();
    }
  }, 10500);
  setTimeout(() => {
    let item3 = randomItem();
    // let item3 = randomItem();

    line3.innerHTML = item3;
    // line3.innerHTML = item3;

    if (item3 == 1) {
      outOfTimeSong();
    }
    if (item3 == 2) {
      loveSoRight();
    }
    if (item3 == 3) {
      aroundTheWorld();
    }
    if (item3 == 4) {
      luvMySlatts();
    }
    if (item3 == 5) {
      alreadyRich();
    }
  }, 16500);
  setTimeout(() => {
    let audio7 = document.getElementById("slot-win");
    if (
      line1.innerHTML == line2.innerHTML &&
      line2.innerHTML == line3.innerHTML &&
      line3.innerHTML == line1.innerHTML
    ) {
      audio7.play();
    }
    stopButton.className = "btn btn-light fs-2 my-5 mx-0 disabled";
    let tryAgainButton = document.getElementById("try-again");
    tryAgainButton.className = "btn btn-light fs-3 my-5";
  }, 16750);
}

// spinTheMachine1();
// spinTheMachine1();
// spinTheMachine2();
// spinTheMachine3();
// slotCountingMusic();

function reloadSlots() {
  window.location.reload();
}

// console.log(item1, item2, item3);
// randomItem();
// console.log(randomItem());
// console.log(line1, line2, line3)
