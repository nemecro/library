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

const modal = document.querySelector('.modal');

// when the modal is closed, check for values
modal.addEventListener('close', (e) => {
    if (modal.returnValue){
        const values = modal.returnValue.split(',');
        addBookToLibrary(values[0], values[1], values[2], values[3]);

        listLibrary(myLibrary);
        // add the book to the library html
        createBookCard(myLibrary[myLibrary.length - 1], myLibrary.length - 1);
    }
});

const readContainer = document.querySelector('#read-container');
function createBookCard(obj, index){
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.setAttribute('data-attribute', index);

    const heading = document.createElement('h3');
    heading.classList.add('book-title');
    heading.textContent = obj.title;

    const subheading = document.createElement('h4');
    subheading.classList.add('author');
    subheading.textContent = obj.author;

    const pages = document.createElement('p');
    pages.classList.add('pages');
    pages.textContent = obj.pages;

    readContainer.appendChild(bookCard);
    bookCard.append(heading, subheading, pages);
}

const openModelBtn = document.querySelector('#open-modal');
openModelBtn.addEventListener('click', () => {
    modal.showModal();
});

const closeModalBtn = document.querySelector('#close-modal');
closeModalBtn.addEventListener('click', () => {
    modal.close();
});

const form = document.querySelector('.modal-form');
const formInputs = form.querySelectorAll('input');

const add = document.querySelector('#add');
add.addEventListener('click', (event) => {
    event.preventDefault();
    let returnValue = [];
    formInputs.forEach(input => {
        if (!input.value){
            modal.close();
        } else {
            if (input.type === 'radio'){
                if (input.checked === true){
                    returnValue.push(input.value);
                }
            } else {
                returnValue.push(input.value);
            }
        }
    })

    modal.close(returnValue);
});