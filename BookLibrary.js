// Array to store books
let books = ["Java", "Python", "JavaScript"];

// DOM Elements
const input = document.getElementById("bookInput");
const output = document.getElementById("output");

// Buttons
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const searchBtn = document.getElementById("searchBtn");
const showBtn = document.getElementById("showBtn");
const countBtn = document.getElementById("countBtn");

// Arrow Function
const display = (message) => {
    output.innerHTML = message;
};

// Add Book
function addBook() {

    let book = input.value.trim();

    if (book === "") {
        display("Please enter a book name.");
        return;
    }

    books.push(book);

    display("<b>" + book + "</b> has been added successfully.");

    input.value = "";
}

// Remove Last Book
function removeBook() {

    if (books.length === 0) {
        display("Library is empty.");
        return;
    }

    let removedBook = books.pop();

    display("<b>" + removedBook + "</b> has been removed.");
}

// Search Book
function searchBook() {

    let book = input.value.trim();

    if (book === "") {
        display("Please enter a book name.");
        return;
    }

    if (books.includes(book)) {
        display("<b>" + book + "</b> is available in the library.");
    } else {
        display("<b>" + book + "</b> is not available.");
    }
}

// Show All Books
function showBooks() {

    if (books.length === 0) {
        display("No books available.");
        return;
    }

    let result = "<h3>Book List</h3><ol>";

    books.forEach(function(book) {
        result += "<li>" + book + "</li>";
    });

    result += "</ol>";

    display(result);
}

// Total Books
function totalBooks() {

    display("Total Books in Library: <b>" + books.length + "</b>");
}

// Event Listeners
addBtn.addEventListener("click", addBook);
removeBtn.addEventListener("click", removeBook);
searchBtn.addEventListener("click", searchBook);
showBtn.addEventListener("click", showBooks);
countBtn.addEventListener("click", totalBooks);

