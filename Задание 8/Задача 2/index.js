// Функция для фильтрации и сортировки пользователей
const filterAndSortUsers = (users) => {
    return users
        .filter(user => user[1] > 25 && user[2]) // Фильтруем пользователей старше 25 лет и тех, кто занимается спортом
        .sort((a, b) => a[1] - b[1])              // Сортируем по возрастанию возраста
        .map(user => user[0]);                    // Возвращаем массив имён
};

// Пример работы программы
const users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]
];

const sportUsersOver25 = filterAndSortUsers(users);
console.log(sportUsersOver25); // Выведет ["David"]
