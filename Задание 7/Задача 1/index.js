// Исходный массив с книгами
const books = ["Война и мир", "Преступление и наказание", "1984", "Гарри Поттер", "Мастер и Маргарита"];

// Функция отображения списка книг на странице
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Очищаем список перед обновлением

    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        bookList.appendChild(li);
    });
}

// Функция добавления новой книги
function addBook() {
    const newBook = prompt("Введите название книги:");

    if (newBook) {
        books.push(newBook.trim());
        displayBooks(); // Обновляем список книг
    } else {
        alert("Название книги не введено!");
    }
}

// Функция поиска книги
function searchBook() {
    const searchQuery = prompt("Введите название книги для поиска:");
    
    if (!searchQuery) {
        alert("Введите название для поиска!");
        return;
    }

    const bookItems = document.querySelectorAll("#book-list li");
    let found = false;

    bookItems.forEach(item => {
        if (item.textContent.toLowerCase() === searchQuery.trim().toLowerCase()) {
            item.classList.add('highlight'); // Подсветка найденной книги
            found = true;
        } else {
            item.classList.remove('highlight'); // Убираем подсветку с других книг
        }
    });

    if (!found) {
        alert("Книга не найдена!");
    }
}

// Добавление обработчиков событий на кнопки
document.getElementById('add-book').addEventListener('click', addBook);
document.getElementById('search-book').addEventListener('click', searchBook);

// Начальный вывод списка книг
displayBooks();
