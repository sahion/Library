let myLibrary = [];

function Book(title,author,read,pages){
  this.title = title;
  this.author = author;
  this.read = read;
  this.pages = pages;
  this.info = function(){
    return (`${this.title} by ${this.author}, ${this.pages} pages, ${(this.read) ? " already read" : " not read yet"}`)
  }
}

function addBookToLibrary(){
  let title = prompt("Title of the book");
  let author = prompt("Name of the author");
  let read = (prompt("Did you read this book? Y/N")=="Y" ? true : false );
  let pages = prompt("how much pages in this book?");
  myLibrary.push(new Book(title,author,read,pages));
  UpdateLibrary();
}




function UpdateLibrary(){

  previousBooks = document.querySelector(".books");
document.body.removeChild(previousBooks);
const booksLibrary = document.createElement("div"); 
booksLibrary.classList.add("books");
document.body.appendChild(booksLibrary);
myLibrary.forEach(book => {



 const newBook = document.createElement("div");
 const bookName = document.createElement("h1");
 const authorName = document.createElement("h2");
 const pagesInBook = document.createElement("p");
 const alreadyRead = document.createElement("p");

 newBook.classList.add("book");

 bookName.textContent = book.title;
 authorName.textContent = book.author;
 pagesInBook.textContent = `${book.title} pages`;
 alreadyRead.textContent = (book.read)? "I already read this book" : "I didn't read this book before";

 newBook.appendChild(bookName);
 newBook.appendChild(authorName);
 newBook.appendChild(pagesInBook);
 newBook.appendChild(alreadyRead);

 
 booksLibrary.appendChild(newBook);
})
}

const addNewBook = document.querySelector(".addnewbook");
addNewBook.addEventListener("click", function(){
  addBookToLibrary();
});
