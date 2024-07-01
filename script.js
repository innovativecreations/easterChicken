document.getElementById('layEggButton').addEventListener('click', layEgg);

function layEgg() {
    const eggContainer = document.getElementById('eggContainer');
    const egg = document.createElement('div');
    egg.classList.add('egg');
    eggContainer.appendChild(egg);
    egg.innerHTML = '<img src="easter_egg.png" alt="Easter Egg">';
}

