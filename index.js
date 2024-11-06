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

addBookToLibrary('Crime and Punishment', 'Fyodor Dostoyev', 459, 'yes');
console.log(myLibrary);