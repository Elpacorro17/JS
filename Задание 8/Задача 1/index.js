// Функция для подсчёта гласных букв в слове
const countVowels = (word) => {
    // Определяем массив гласных букв
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Приводим слово к нижнему регистру и фильтруем только гласные буквы
    return [...word.toLowerCase()].filter(letter => vowels.includes(letter)).length;
};

// Пример работы программы
const word = 'JavaScript';
const vowelCount = countVowels(word);
console.log(vowelCount); // Выведет 3
