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
    if (modal.returnValue){
        console.log(modal.returnValue)
        const values = modal.returnValue.split(',');
        console.log(values);
        addBookToLibrary(values[0], values[1], values[2], values[3]);
        listLibrary(myLibrary);
    }
});

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