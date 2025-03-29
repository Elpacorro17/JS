// Функция для создания автомобиля
const createCar = (additionalProperties) => {
    // Базовый объект автомобиля
    const baseCar = {
        wheels: 4,
        doors: 4,
        isStarted: false
    };

    // Объединение объектов с помощью spread-оператора
    return { ...baseCar, ...additionalProperties };
};

// Пример работы программы
console.log(createCar({ name: 'Haval', hp: 198 }));
