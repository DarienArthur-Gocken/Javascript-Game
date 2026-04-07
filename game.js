let BakedGoods = 0;

let goodsPerClick = 1;

function updateDisplay() {
    document.getElementById('score-display').textContent = 'Baked Goods:' + BakedGoods;
    document.getElementById('rate-display').textContent = 'Goods per Click:' +goodsPerClick;
}