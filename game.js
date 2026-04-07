let bakedGoods = 0;

let goodsPerClick = 1;

function updateDisplay() {
    document.getElementById('score-display').textContent = 'Baked Goods: ' + bakedGoods;
    document.getElementById('rate-display').textContent = 'Goods per Click: ' + goodsPerClick;
}

document.getElementById('click-btn').addEventListener('click', function() {
    bakedGoods += goodsPerClick;
    updateDisplay();
});