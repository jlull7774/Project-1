const songs = ["Out of Time", "Love So Right", "Around the World", "Luv My Slatts", "Already Rich"]

songs[0] = "test audio"

console.log(songs[0])

function randomItem() {
  return Math.floor(Math.random() * songs.length) + 1;
}

function spinTheMachine() {
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");

  const item1 = randomItem();
  const item2 = randomItem();
  const item3 = randomItem();

  line1.innerHTML = item1;
  line2.innerHTML = item2;
  line3.innerHTML = item3;
}




// console.log(item1, item2, item3);
// randomItem();
// console.log(randomItem());
// console.log(line1, line2, line3)
