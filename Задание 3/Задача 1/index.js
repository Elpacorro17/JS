// Состояние банкомата
let isCardInserted = true; // true - карта есть в банкомате, false - карты нет
let balance = 500;         // Доступная сумма на карте

// Запрос суммы у пользователя
let amount = Number(prompt("Введите сумму для снятия:"));

// Проверка условий
if (isCardInserted && amount <= balance) {
    console.log("Операция выполняется");
} else {
    console.log("Операция отклонена");
}
