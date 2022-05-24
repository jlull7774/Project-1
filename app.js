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
  return Math.floor(Math.random() * songs.length) + 1;
}
function spinTheMachine1() {
  setTimeout(() => {
    let line1 = document.getElementById("line1");
    //   let line2 = document.getElementById("line2");
    //   let line3 = document.getElementById("line3");

    let item1 = randomItem();
    // let item2 = randomItem();
    // let item3 = randomItem();

    line1.innerHTML = item1;
    //   line2.innerHTML = item2;
    //   line3.innerHTML = item3;

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
  }, 5000);
}
function spinTheMachine2() {
  setTimeout(() => {
    //   let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    //   let line3 = document.getElementById("line3");

    //   let item1 = randomItem();
    let item2 = randomItem();
    // let item3 = randomItem();

    //   line1.innerHTML = item1;
    line2.innerHTML = item2;
    //   line3.innerHTML = item3;

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
  }, 11000);
}
function spinTheMachine3() {
    setTimeout(() => {
      //   let line1 = document.getElementById("line1");
    //   let line2 = document.getElementById("line2");
        let line3 = document.getElementById("line3");
  
      //   let item1 = randomItem();
    //   let item2 = randomItem();
      let item3 = randomItem();
  
      //   line1.innerHTML = item1;
    //   line2.innerHTML = item2;
        line3.innerHTML = item3;
  
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
    }, 17000);
  }
function masterSpin() {
  spinTheMachine1();
  spinTheMachine2();
  spinTheMachine3();
}
// console.log(item1, item2, item3);
// randomItem();
// console.log(randomItem());
// console.log(line1, line2, line3)
