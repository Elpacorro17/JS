// Ввод данных через prompt
let product1 = prompt("Введите название первого товара:")
let price1 = Number(prompt(`Введите стоимость товара "${product1}":`))
let count1 = Number(prompt(`Введите количество товара "${product1}":`))

let product2 = prompt("Введите название второго товара:")
let price2 = Number(prompt(`Введите стоимость товара "${product2}":`))
let count2 = Number(prompt(`Введите количество товара "${product2}":`))

let product3 = prompt("Введите название третьего товара:")
let price3 = Number(prompt(`Введите стоимость товара "${product3}":`))
let count3 = Number(prompt(`Введите количество товара "${product3}":`))

// Вывод стоимости каждого товара
console.log(product1, price1 * count1)
console.log(product2, price2 * count2)
console.log(product3, price3 * count3)

// Расчёт общей суммы
let total = (price1 * count1) + (price2 * count2) + (price3 * count3)
console.log("Сумма всей покупки:", total)

