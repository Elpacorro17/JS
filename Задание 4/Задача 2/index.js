// Функция для перевода градусов Цельсия в градусы Фаренгейта
function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

// Функция для перевода градусов Фаренгейта в градусы Цельсия
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

console.log(`25°C в Фаренгейтах: ${celsiusToFahrenheit(25)}`); // 77
console.log(`0°C в Фаренгейтах: ${celsiusToFahrenheit(0)}`); // 32
console.log(`100°C в Фаренгейтах: ${celsiusToFahrenheit(100)}`); // 212

console.log(`77°F в Цельсиях: ${fahrenheitToCelsius(77)}`); // 25
console.log(`32°F в Цельсиях: ${fahrenheitToCelsius(32)}`); // 0
console.log(`212°F в Цельсиях: ${fahrenheitToCelsius(212)}`); // 100
