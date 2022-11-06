'use strict'

const books = [];
//let counter = 0;

function addBookNew() {
    const addBookNew = document.getElementById("addBookNew");
    addBookNew.style.opacity = 1;
    addBookNew.style.pointerEvents = "all";
}

function cancel() {
    const addBookNew = document.getElementById("addBookNew");
    let title = document.getElementById("titleInput");
    let author = document.getElementById("authorInput");
    let pages = document.getElementById("pagesInput");
    title.value = "";
    author.value = "";
    pages.value = "";
    addBookNew.style.opacity = 0;
    addBookNew.style.pointerEvents = "none";
}
function Book(title, author, pages, counter) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.counter = ++counter;
}
function confirm() {
    const addBookNew = document.getElementById("addBookNew");
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let pages = document.getElementById("pagesInput").value;
    const counter = books.length;
    const book = new Book(title, author, pages, counter);
    books.push(book);
    bookMaker();
    addBookNew.style.opacity = 0;
    addBookNew.style.pointerEvents = "none";

    let titleclear = document.getElementById("titleInput");
    let authorclear = document.getElementById("authorInput");
    let pagesclear = document.getElementById("pagesInput");
    titleclear.value = "";
    authorclear.value = "";
    pagesclear.value = "";
}

function bookMaker() {
    const contentBody = document.getElementById("contentBody");
    clearHTML();

    books.forEach((book) => {
        const testBook = document.createElement('div');
        testBook.className = "testBook";
        testBook.dataset.index = book.counter;

        const bookContainer = document.createElement('div');
        bookContainer.className = "bookContainer";

        const title = document.createElement('div');
        title.className = "title";
        title.textContent = "Title: " + book.title;

        const author = document.createElement('div');
        author.className = "author";
        author.textContent = "author: " + book.author;

        const pages = document.createElement('div');
        pages.className = "pages";
        pages.textContent = "pages: " + book.pages;

        const bookNavBot = document.createElement('div');
        bookNavBot.className = "bookNavBot";

        const trash = document.createElement('i');
        trash.className = "fa-solid fa-trash-can deleteBook"
        trash.id = "deleteBook";

        const read = document.createElement('i');
        read.className = "fa-solid fa-book-open-reader";
        read.id = "bookRead";

        contentBody.appendChild(testBook);
        testBook.appendChild(bookContainer);
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(bookNavBot);
        bookNavBot.appendChild(trash);
        bookNavBot.appendChild(read);
    })
}
const addEvent = (rootElement, event) => {

    rootElement.addEventListener(event, (e) => {
        let targetElement = e.target;
        while (targetElement != null) {
            if (targetElement.matches('.fa-trash-can')) {

                let arrayIndex = targetElement.parentElement.parentElement.parentElement.dataset.index
            
                books.splice(arrayIndex - 1, 1);
                arrayIndex = 0;
                targetElement.parentElement.parentElement.parentElement.remove();

            }
            targetElement = targetElement.parentElement;
        }
    }, true)
}

const bookshelf = document.getElementById("contentBody");

addEvent(bookshelf, 'click');

const test = (cb) => {
    console.log(cb);
    let greetings = 'hallo'
    cb(greetings);
}

test((greetings) => {
    console.log(greetings);
})

books.forEach((book) => {

})

function forEach(array, cb){
    for(let i =0; i < array.length; i++){
        cb(array[i])
    }
}


function bookReadSet() {

}

function clearHTML() {
    let container = document.getElementById("contentBody");
    while (container.childElementCount > 0) {
        console.log(container.children)
        container.children[0].remove();
    }
}