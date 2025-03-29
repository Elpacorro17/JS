// Объект с автомобилями
const cars = {
    "Toyota": { name: "Toyota", wheels: 4, doors: 4, isStarted: true, hp: 150 },
    "BMW": { name: "BMW", wheels: 4, doors: 2, isStarted: false, hp: 300 },
    "Honda": { name: "Honda", wheels: 4, doors: 4, isStarted: true, hp: 180 },
    "Ford": { name: "Ford", wheels: 4, doors: 2, isStarted: false, hp: 200 }
};

// Функция поиска автомобиля
const getCar = (carName) => {
    if (cars[carName]) {
        return cars[carName];
    } else {
        console.log(`Автомобиль "${carName}" не найден.`);
        return null;
    }
};

// Пример работы программы
console.log(getCar("Toyota")); // Выведет объект с данными о Toyota
console.log(getCar("BMW"));    // Выведет объект с данными о BMW
console.log(getCar("Audi"));   // Выведет "Автомобиль "Audi" не найден."
