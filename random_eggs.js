function addEasterEgg() {
    const easterEggs = ["🐰", "🥚", "🌷", "🐣", "🍫", "✝️", "🩸", "🪨"];
    const randomEgg = easterEggs[Math.floor(Math.random() * easterEggs.length)];
    console.log(randomEgg)
    
    const eggElement = document.createElement('span');
    eggElement.classList.add('easter-egg');
    eggElement.innerHTML = randomEgg;

    const maxX = window.innerWidth - 50;
    const maxY = window.innerHeight - 50;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    eggElement.style.left = randomX + 'px';
    eggElement.style.top = randomY + 'px';

    eggElement.addEventListener('click', () => {
      eggElement.remove();
    });

    document.body.appendChild(eggElement);
  }

function setEggInterval(interval) {
 // Add Easter eggs every 3 seconds
  setInterval(addEasterEgg, interval);
}
