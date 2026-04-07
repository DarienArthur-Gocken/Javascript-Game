let bakedGoods = 0;

let goodsPerClick = 1;

const upgrades = [
    {id: 1, name: "Bigger Oven", cost: 10, bonus: 3, display: "3 Extra $ per click"},
    {id: 2, name: "Better Ingredients", cost: 25, bonus: 7, display: "7 Extra $ per click"},
    {id: 3, name: "Hire another baker", cost: 50, bonus: goodsPerClick, display: "Double your $ per click"}
];

function updateDisplay() {
    document.getElementById('score-display').textContent = 'Baked Goods: ' + bakedGoods;
    document.getElementById('rate-display').textContent = 'Profit per Click: ' + goodsPerClick;
}

document.getElementById('click-btn').addEventListener('click', function() {
    bakedGoods += goodsPerClick;
    updateDisplay();
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
            <button onclick="buyUpgrade(${upgrade.id})">Buy</button>
        `

        
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