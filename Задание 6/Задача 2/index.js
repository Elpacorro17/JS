// Исходный массив чисел
const numbers = [45, 12, 78, 3, 56, 89, 23, 67];

// Вывод всех элементов массива
const allElements = document.querySelector('.all-elements');
allElements.textContent = `Элементы массива: ${numbers.join(', ')}`;

// Обработчики событий для кнопок
document.querySelector('.min').addEventListener('click', () => {
    const minNumber = Math.min(...numbers);
    document.querySelector('.minNumber').textContent = minNumber;
});

document.querySelector('.max').addEventListener('click', () => {
    const maxNumber = Math.max(...numbers);
    document.querySelector('.maxNumber').textContent = maxNumber;
});
