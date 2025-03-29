// Функция добавления товара в корзину
function addToCart(productName) {
    // Находим блок корзины
    const cart = document.getElementById('cart');

    // Создаём новый элемент списка <li>
    const cartItem = document.createElement('li');

    // Добавляем текст с названием товара
    cartItem.textContent = productName;

    // Добавляем новый элемент в корзину
    cart.appendChild(cartItem);
}
