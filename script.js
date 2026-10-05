let hunger = 80;
let thirst = 80;
let clean = 70;
let fun = 80;
let energy = 80;

let stars = 0;
let coins = 0;

const dog = document.getElementById("dog");
const bubble = document.getElementById("bubble");

function limit(value) {
  return Math.max(0, Math.min(100, value));
}

function updateGame() {

  hunger = limit(hunger);
  thirst = limit(thirst);
  clean = limit(clean);
  fun = limit(fun);
  energy = limit(energy);

  document.getElementById("hunger").style.width = hunger + "%";
  document.getElementById("thirst").style.width = thirst + "%";
  document.getElementById("clean").style.width = clean + "%";
  document.getElementById("fun").style.width = fun + "%";
  document.getElementById("energy").style.width = energy + "%";

  document.getElementById("hungerText").textContent = Math.round(hunger);
  document.getElementById("thirstText").textContent = Math.round(thirst);
  document.getElementById("cleanText").textContent = Math.round(clean);
  document.getElementById("funText").textContent = Math.round(fun);
  document.getElementById("energyText").textContent = Math.round(energy);

  document.getElementById("stars").textContent = stars;
  document.getElementById("coins").textContent = coins;

  let average =
    (hunger + thirst + clean + fun + energy) / 5;

  if (average >= 80) {
    document.getElementById("mood").textContent =
      "🤩 Blade está muito feliz!";
  }

  else if (average >= 60) {
    document.getElementById("mood").textContent =
      "😊 Blade está feliz!";
  }

  else if (average >= 40) {
    document.getElementById("mood").textContent =
      "🙂 Blade está bem!";
  }

  else if (average >= 20) {
    document.getElementById("mood").textContent =
      "🥺 Blade precisa de cuidados!";
  }

  else {
    document.getElementById("mood").textContent =
      "😴 Blade está cansadinho!";
  }
}

function say(message) {

  bubble.textContent = message;

  setTimeout(() => {
    bubble.textContent = "O que vamos fazer? 🐶";
  }, 3000);
}

function animate(type) {

  dog.classList.remove("play");
  dog.classList.remove("sleep");

  if (type === "yard" || type === "walk") {

    dog.classList.add("play");

    setTimeout(() => {
      dog.classList.remove("play");
    }, 2000);
  }

  if (type === "sleep") {

    dog.classList.add("sleep");

    setTimeout(() => {
      dog.classList.remove("sleep");
    }, 3000);
  }
}

function reward(amount) {

  stars += amount;
  coins += amount * 2;

  updateGame();
}

function doAction(action) {

  if (action === "yard") {

    fun += 18;
    energy -= 10;
    hunger -= 7;
    thirst -= 8;

    say("Que divertido! Blade adorou brincar no quintal! 🌳🐶");

    reward(3);
  }

  if (action === "walk") {

    fun += 20;
    energy -= 12;
    hunger -= 5;
    thirst -= 8;

    say("Blade voltou do passeio muito feliz! 🦮✨");

    reward(4);
  }

  if (action === "food") {

    hunger += 25;
    fun += 4;

    say("Nhac nhac! Blade comeu toda a ração! 🍖");

    reward(2);
  }

  if (action === "water") {

    thirst += 30;
    fun += 2;

    say("Glup glup! Água fresquinha! 💧");

    reward(2);
  }

  if (action === "bath") {

    clean += 35;
    fun -= 3;
    energy -= 3;

    say("Banho tomado! Blade está cheirosinho! 🛁🫧");

    reward(3);
  }

  if (action === "sleep") {

    energy += 35;
    fun += 5;

    say("Boa noite, Blade! Bons sonhos! 💤");

    reward(3);
  }

  if (action === "teeth") {

    clean += 12;
    fun += 3;

    say("Os dentes do Blade estão limpinhos! 🪥😁");

    reward(2);
  }

  if (action === "brush") {

    clean += 20;
    fun += 6;

    say("O pelo do Blade ficou lindo e macio! 🧴🐶");

    reward(2);
  }

  animate(action);

  updateGame();
}

/* O Blade vai ficando com fome, sede etc. com o tempo */

setInterval(() => {

  hunger -= 1;
  thirst -= 1;
  clean -= 0.5;
  fun -= 0.7;
  energy -= 0.4;

  updateGame();

}, 12000);

updateGame();
