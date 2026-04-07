let bakedGoods = 0;

let goodsPerClick = 1;

let goodsPerSecond = 0;

let clicksPersecond = 0;

const upgrades = [
    {id: 1, name: "Bigger Oven", cost: 10, bonus: 1, display: "1 Extra $ per click", type: "buff"},
    {id: 2, name: "Better Ingredients", cost: 30, bonus: 8, display: "6 Extra $ per click", type: "buff"},
    {id: 3, name: "Bigger Store", cost: 100, bonus: 1, display: "1 automatic click per second", type: "gps"},
    {id: 4, name: "Hire another baker", cost: 500, bonus: goodsPerClick, display: "Double your $ per click", type: "buff"}
];

function updateDisplay() {
    document.getElementById('score-display').textContent = 'Baked Goods: ' + bakedGoods;
    document.getElementById('rate-display').textContent = 'Goods per Click: ' + goodsPerClick;
    document.getElementById('auto-display').textContent = 'Goods per Second: ' + clicksPersecond*goodsPerClick;
    upgrades[3].bonus = goodsPerClick;
}

document.getElementById('click-btn').addEventListener('click', function(event) {
    bakedGoods += goodsPerClick;
    updateDisplay();
    renderUpgrades();
    clickAnimation(event);
});

function clickAnimation(event) {
    let popup = document.createElement('div');
    popup.className = 'popup-add';
    popup.textContent = '+' + goodsPerClick;
    popup.style.left = event.clientX + 'px';
    popup.style.top = event.clientY + 'px';
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1000);
}

function renderUpgrades() {
    const upgradesDiv = document.getElementById('upgrades');
    upgradesDiv.innerHTML = '';

    upgrades.forEach(upgrade => {
        let newUpgrade = document.createElement('div');
        newUpgrade.innerHTML = `
            Name: ${upgrade.name}
            Cost: ${upgrade.cost} Baked Goods.
            Bonus:  ${upgrade.display}.
        `

        let buyButton = document.createElement('button');
        buyButton.disabled = upgrade.cost > bakedGoods;
        buyButton.onclick = () => buyUpgrade(upgrade.id);
        buyButton.textContent = 'buy';

        newUpgrade.appendChild(buyButton);
        
        upgradesDiv.appendChild(newUpgrade);
    });
}

renderUpgrades();

function buyUpgrade(id) {
    const currentupgrade = upgrades.find(u => u.id === id);

    if (bakedGoods >= currentupgrade.cost) {
        if (currentupgrade.type == "buff") {
            goodsPerClick = goodsPerClick + currentupgrade.bonus;
            bakedGoods = bakedGoods - currentupgrade.cost;
            updateDisplay();
            renderUpgrades();
        }
        else {
            clicksPersecond++;
            bakedGoods = bakedGoods - currentupgrade.cost;
            updateDisplay();
            renderUpgrades();
        }
    }
}

setInterval(function () {
    goodsPerSecond = goodsPerClick;
    for (let i = 0; i < clicksPersecond; i++) {
        bakedGoods = goodsPerSecond + bakedGoods; 
    }
    updateDisplay();
}, 1000);