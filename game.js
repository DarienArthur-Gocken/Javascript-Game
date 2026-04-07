let bakedGoods = 0;

let goodsPerClick = 1;

const upgrades = [
    {id: 1, name: "Bigger Oven", cost: 10, bonus: 3},
    {id: 2, name: "Better Ingredients", cost: 25, bonus: 7},
    {id: 3, name: "Hire another baker", cost: 50, bonus: goodsPerClick}
];

function updateDisplay() {
    document.getElementById('score-display').textContent = 'Baked Goods: ' + bakedGoods;
    document.getElementById('rate-display').textContent = 'Goods per Click: ' + goodsPerClick;
}

document.getElementById('click-btn').addEventListener('click', function() {
    bakedGoods += goodsPerClick;
    updateDisplay();
});