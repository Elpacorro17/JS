document.addEventListener("DOMContentLoaded", function () {
    const cardText = document.getElementById("card-text");
    const cardColor = document.getElementById("card-color");
    const card = document.getElementById("card-content");
    const cardDiv = document.getElementById("card");

    // Изменение текста карты при вводе
    cardText.addEventListener("input", function () {
        card.textContent = cardText.value || "Ваша карта";
    });

    // Изменение стилей при фокусе
    cardText.addEventListener("focus", function () {
        cardText.style.border = "2px solid blue";
        cardText.style.backgroundColor = "#f0f8ff";
    });

    // Возвращение стилей при потере фокуса
    cardText.addEventListener("blur", function () {
        cardText.style.border = "";
        cardText.style.backgroundColor = "";
    });

    // Изменение цвета карты
    cardColor.addEventListener("change", function () {
        cardDiv.style.backgroundColor = cardColor.value;
    });
});
