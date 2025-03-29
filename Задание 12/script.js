document.addEventListener("DOMContentLoaded", function () {
    const giftArr = [
        { title: "Скидка 20% на первую покупку в нашем магазине!", icon: "img/discount.svg" },
        { title: "Скидка 10% на всё!", icon: "img/discount_2.svg" },
        { title: "Подарок при первой покупке в нашем магазине!", icon: "img/gift.svg" },
        { title: "Бесплатная доставка для вас!", icon: "img/delivery.svg" },
        { title: "Сегодня день больших скидок!", icon: "img/discount_3.svg" }
    ];

    const promocodeArr = [
        { promocode: 'PROM10', gift: "Скидка 10%" },
        { promocode: 'PROM50', gift: "Скидка 50%" },
        { promocode: 'GIFT', gift: "Подарок в корзине" }
    ];

    // Всплывающее окно с подарком через 3 секунды
    setTimeout(() => {
        const randomGift = giftArr[Math.floor(Math.random() * giftArr.length)];
        document.getElementById("gift-icon").src = randomGift.icon;
        document.getElementById("gift-text").textContent = randomGift.title;
        document.getElementById("popup").style.display = "block";
    }, 3000);

    // Закрытие всплывающего окна
    document.getElementById("close-popup").addEventListener("click", function () {
        document.getElementById("popup").style.display = "none";
    });

    // Проверка промокода
    const promoForm = document.getElementById("promo-form");
    const promoInput = document.getElementById("promo-input");
    const promoMessage = document.getElementById("promo-message");

    // Функция получения cookie
    function getCookie() {
        return document.cookie.split('; ').reduce((acc, item) => {
            const [name, value] = item.split('=');
            acc[name] = value;
            return acc;
        }, {});
    }

    // Проверяем, есть ли сохраненный промокод
    const savedPromo = getCookie().promo;
    if (savedPromo) {
        const foundPromo = promocodeArr.find(promo => promo.promocode === savedPromo);
        if (foundPromo) {
            promoInput.value = savedPromo;
            promoMessage.textContent = `Промокод активирован: ${foundPromo.gift}`;
            promoMessage.style.color = "green"; 
        }
    }

    promoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const userPromo = promoInput.value.trim();
        const foundPromo = promocodeArr.find(promo => promo.promocode === userPromo);

        if (foundPromo) {
            document.cookie = `promo=${userPromo}; path=/`;
            promoMessage.textContent = `Промокод активирован: ${foundPromo.gift}`;
            promoMessage.style.color = "green"; 
        } else {
            promoMessage.textContent = "";
            promoMessage.style.color = "";
            alert("Промокод неверный!");
        }
    });
});
