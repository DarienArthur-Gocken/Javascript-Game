let bakedGoods = 0;

let goodsPerClick = 1;

const upgrades = [
    {id: 1, name: "Bigger Oven", cost: 10, bonus: 3, display: "3 Extra $ per click"},
    {id: 2, name: "Better Ingredients", cost: 25, bonus: 7, display: "7 Extra $ per click"},
    {id: 3, name: "Hire another baker", cost: 50, bonus: goodsPerClick, display: "Double your $ per click"}
];

function updateDisplay() {
    document.getElementById('score-display').textContent = 'Money: ' + bakedGoods;
    document.getElementById('rate-display').textContent = 'Profit per Click: ' + goodsPerClick;
}

document.getElementById('click-btn').addEventListener('click', function() {
    bakedGoods += goodsPerClick;
    updateDisplay();
});