// Текущий год для расчёта возраста
const currentYear = 2024;

// Ввод данных для трёх пользователей
let user1 = prompt("Введите имя и год рождения первого пользователя (например: Антон, 2003)").split(", ");
let user2 = prompt("Введите имя и год рождения второго пользователя (например: Василиса, 2005)").split(", ");
let user3 = prompt("Введите имя и год рождения третьего пользователя (например: Никита, 1998)").split(", ");

// Расчёт возраста
let age1 = currentYear - Number(user1[1]);
let age2 = currentYear - Number(user2[1]);
let age3 = currentYear - Number(user3[1]);

console.log(`1 '${user1[0]}' ${age1}`);
console.log(`2 '${user2[0]}' ${age2}`);
console.log(`3 '${user3[0]}' ${age3}`);

// Расчёт среднего возраста
let averageAge = Math.floor((age1 + age2 + age3) / 3);
console.log(`Средний возраст пользователей: ${averageAge}`);
