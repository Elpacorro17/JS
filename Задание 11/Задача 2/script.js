document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("delivery-form");
    const productList = document.getElementById("product-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Получаем значения из полей
        const productName = document.getElementById("product-name").value.trim();
        const weight = parseFloat(document.getElementById("weight").value);
        const distance = parseFloat(document.getElementById("distance").value);

        // Валидация данных
        if (productName === "" || isNaN(weight) || weight <= 0 || isNaN(distance) || distance <= 0) {
            alert("Пожалуйста, введите корректные данные.");
            return;
        }

        // Расчет стоимости доставки
        const deliveryCost = (weight * distance) / 10;

        // Создаем новую строку в таблице
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${productName}</td>
            <td>${weight.toFixed(2)}</td>
            <td>${distance.toFixed(2)}</td>
            <td>${deliveryCost.toFixed(2)} руб.</td>
        `;

        productList.appendChild(row);

        // Очистка формы
        form.reset();
    });
});
