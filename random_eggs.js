let goBrrAdded = false;

function addEasterEgg(amount = 1) {
  const easterEggs = ["🐰", "🥚", "🌷", "🐣", "🍫", "✝️", "🩸", "🪨"];
  // console.log(randomEgg)

  for (let i = 0; i < amount; i++) {
    const randomEgg = easterEggs[Math.floor(Math.random() * easterEggs.length)];
    const eggElement = document.createElement("span");
    eggElement.classList.add("easter-egg");
    eggElement.innerHTML = randomEgg;

    const maxX = document.body.clientWidth - 5;
    const maxY = document.body.clientHeight - 5;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    eggElement.style.left = randomX + "px";
    eggElement.style.top = randomY + "px";

    eggElement.addEventListener("click", () => {
      eggElement.remove();
      addGoBrrButton();
    });

    document.body.appendChild(eggElement);
  }
}

function setEggInterval(interval = 3000, amountPerInterval = 1) {
  // Add Easter eggs every 3 seconds
  setInterval(addEasterEgg, interval, amountPerInterval);
}

function addGoBrrButton() {
  if (goBrrAdded) return;
  const brrElement = document.createElement("button");
  brrElement.innerText = "Go Brr!";
  brrElement.classList.add("go-brr");
  brrElement.addEventListener("click", () => {
    setEggInterval(1, 10);
  });
  document.body.appendChild(brrElement);
  goBrrAdded = true;
}
