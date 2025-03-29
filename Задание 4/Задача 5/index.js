// Функция для расчёта итоговой стоимости
function totalSum(price, amount, discount) {
    const discountAmount = (price * discount) / 100; // Расчёт скидки с одного товара
    const finalPrice = (price - discountAmount) * amount; // Итоговая сумма
    return finalPrice;
}

const priceItem = 25000;
const amountItem = 3;
const discountItem = 20;

console.log(totalSum(priceItem, amountItem, discountItem)); // 60000
