let bakedGoods = 0;

let goodsPerClick = 1;

let currentadd = 0;

let goodsPerSecond = 0;

const upgrades = [
    {id: 1, name: "Bigger Oven", cost: 10, bonus: 2, display: "2 Extra $ per click", type: "buff"},
    {id: 2, name: "Better Ingredients", cost: 25, bonus: 6, display: "6 Extra $ per click", type: "buff"},
    {id: 3, name: "Bigger Store", cost: 50, bonus: 1, display: "1 $ per second", type: "gps"},
    {id: 3, name: "Hire another baker", cost: 100, bonus: goodsPerClick, display: "Double your $ per click", type: "buff"}
];

function updateDisplay() {
    document.getElementById('score-display').textContent = 'Baked Goods: ' + bakedGoods;
    document.getElementById('rate-display').textContent = 'Goods per Click: ' + goodsPerClick;
    document.getElementById('current-add').textContent = currentadd;
    upgrades[3].bonus = goodsPerClick;
}

document.getElementById('click-btn').addEventListener('click', function() {
    bakedGoods += goodsPerClick;
    currentadd = '+' + goodsPerClick;
    updateDisplay();
    renderUpgrades();
});

function renderUpgrades() {
    const upgradesDiv = document.getElementById('upgrades');
    upgradesDiv.innerHTML = '';

    upgrades.forEach(upgrade => {
        let newUpgrade = document.createElement('div');
        newUpgrade.innerHTML = `
            Name: ${upgrade.name}
            Cost: ${upgrade.cost} Baked Goods.
            Bonus:  ${upgrade.display} per click.
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
        goodsPerClick = goodsPerClick + currentupgrade.bonus;
        bakedGoods = bakedGoods - currentupgrade.cost;
        updateDisplay();
        renderUpgrades();
    }
}

setInterval(function () {
    bakedGoods = bakedGoods + goodsPerClick;
    updateDisplay();
})