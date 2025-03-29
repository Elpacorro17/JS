// Объект с автомобилями
const cars = {
    "Toyota": { name: "Toyota", wheels: 4, doors: 4, isStarted: true, hp: 150 },
    "BMW": { name: "BMW", wheels: 4, doors: 2, isStarted: false, hp: 300 },
    "Honda": { name: "Honda", wheels: 4, doors: 4, isStarted: true, hp: 180 },
    "Ford": { name: "Ford", wheels: 4, doors: 2, isStarted: false, hp: 200 }
};

// Функция для вывода названий всех автомобилей
const printCarNames = () => {
    for (let car in cars) {
        console.log(car);
    }
};


printCarNames();
