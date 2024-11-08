const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if (read === 'yes'){
            return `${this.title} by ${this.author}, ${this.pages} pages, already read`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
        }
    }
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function listLibrary(library){
    library.forEach(book => {
        console.table(book);
    })
}

addBookToLibrary('Crime and Punishment', 'Fyodor Dostoyev', 459, 'yes');

listLibrary(myLibrary);

const modal = document.querySelector('.modal');

// when the modal is closed, check for values
modal.addEventListener('close', (e) => {
    testHeading.textContent = modal.returnValue;
});

const openModelBtn = document.querySelector('#open-modal');
openModelBtn.addEventListener('click', () => {
    modal.showModal();
});

const closeModalBtn = document.querySelector('#close-modal');
closeModalBtn.addEventListener('click', () => {
    modal.close();
});

const title = document.querySelector('#title');

const add = document.querySelector('#add');
add.addEventListener('click', (event) => {
    event.preventDefault();
    modal.close(title.value);
});