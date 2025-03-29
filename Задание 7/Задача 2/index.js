// Исходный массив с ростом учеников
let heights = [150, 160, 170, 180, 190];

// Функция отображения списка роста на странице
function displayHeights(filteredHeights = heights) {
    const heightList = document.getElementById('height-list');
    heightList.innerHTML = ''; // Очищаем список перед обновлением

    filteredHeights.forEach(height => {
        const li = document.createElement('li');
        li.textContent = `${height} см`;
        heightList.appendChild(li);
    });
}

// Функция добавления нового роста
function addHeight() {
    const newHeight = prompt("Введите рост ученика (см):");

    if (newHeight && !isNaN(newHeight) && Number(newHeight) > 0) {
        heights.push(Number(newHeight));
        displayHeights(); // Обновляем список роста
    } else {
        alert("Рост не введён или введено некорректное значение!");
    }
}

// Функция фильтрации роста по минимальному значению
function filterHeight() {
    const minHeight = prompt("Введите минимальный рост для фильтрации (см):");

    if (minHeight === null || minHeight.trim() === "") {
        displayHeights(); // Показать полный список, если значение не введено
        return;
    }

    if (!isNaN(minHeight) && Number(minHeight) > 0) {
        const filteredHeights = heights.filter(height => height >= Number(minHeight));
        displayHeights(filteredHeights); // Показать отфильтрованный список
    } else {
        alert("Введите корректное значение роста!");
    }
}

// Добавление обработчиков событий на кнопки
document.getElementById('add-height').addEventListener('click', addHeight);
document.getElementById('filter-height').addEventListener('click', filterHeight);

// Начальный вывод списка роста
displayHeights();
