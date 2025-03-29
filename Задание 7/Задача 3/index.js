// Исходный массив с товарами
let products = ["Яблоко", "Арбуз", "Виноград", "Апельсин"];

// Функция для отображения списка товаров на странице
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Очищаем список перед обновлением

    // Сортировка массива перед отображением
    const sortedProducts = [...products].sort();

    sortedProducts.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        productList.appendChild(li);
    });
}

// Функция добавления нового товара
function addProduct() {
    const newProduct = prompt("Введите название товара:");

    if (newProduct && newProduct.trim() !== "") {
        products.push(newProduct.trim());
        displayProducts(); // Перерисовываем список товаров после добавления
    } else {
        alert("Название товара не введено!");
    }
}

// Добавление обработчика событий на кнопку
document.getElementById('add-product').addEventListener('click', addProduct);

// Начальный вывод списка товаров
displayProducts();
