document.getElementById("rating").addEventListener("input", function() {
    document.getElementById("rating-value").textContent = this.value;
});

document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let gender = document.querySelector("input[name='gender']:checked");
    let rating = document.getElementById("rating").value;
    let interests = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
                       .map(cb => cb.value).join(", ");
    let comments = document.getElementById("comments").value.trim();
    
    document.getElementById("name-error").textContent = name ? "" : "Введите имя";
    document.getElementById("email-error").textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Введите корректный email";
    document.getElementById("gender-error").textContent = gender ? "" : "Выберите пол";
    
    if (!name || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || !gender) {
        valid = false;
    }
    
    if (valid) {
        document.getElementById("results").innerHTML = `
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Пол:</strong> ${gender.value}</p>
            <p><strong>Оценка сервиса:</strong> ${rating}</p>
            <p><strong>Интересы:</strong> ${interests || "Не выбраны"}</p>
            <p><strong>Комментарии:</strong> ${comments || "Нет"}</p>
        `;
    }
});