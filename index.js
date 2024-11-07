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

const main = document.querySelector('main');

function displayModal(){
    const modal = document.createElement('div');
    const form = document.createElement('form');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');

    modal.setAttribute('class', 'fullscreen-modal');

    main.appendChild(modal);
    modal.appendChild(form);
    form.append(titleLabel, titleInput);
}

displayModal();

