// Исходный массив с товарами
const products = ["Мышка", "Клавиатура", "Наушники"];

// Новые товары, которые нужно добавить
const newProducts = ["Монитор", "Принтер", "Флешка"];

// Добавляем новые товары в массив
products.push(...newProducts);

// Находим список <ul>
const productList = document.querySelector('.products');

// Перебираем массив и создаём элементы списка
products.forEach(product => {
    const listItem = document.createElement('li'); // Создаём элемент <li>
    listItem.textContent = product; // Добавляем текст с названием товара
    productList.appendChild(listItem); // Добавляем <li> в <ul>
});
