// Стрелочная функция для перевода градусов Цельсия в Фаренгейты
const celsiusToFahrenheit = celsius => celsius * 1.8 + 32;

// Стрелочная функция для перевода градусов Фаренгейта в Цельсии
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8;

console.log(`25°C в Фаренгейтах: ${celsiusToFahrenheit(25)}`); // 77
console.log(`0°C в Фаренгейтах: ${celsiusToFahrenheit(0)}`); // 32
console.log(`100°C в Фаренгейтах: ${celsiusToFahrenheit(100)}`); // 212

console.log(`77°F в Цельсиях: ${fahrenheitToCelsius(77)}`); // 25
console.log(`32°F в Цельсиях: ${fahrenheitToCelsius(32)}`); // 0
console.log(`212°F в Цельсиях: ${fahrenheitToCelsius(212)}`); // 100
