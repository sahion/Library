let myLibrary = [];
let deleteButtons = [];
let updateButtons = [];

function Book(title,author,read,pages){
  this.title = title;
  this.author = author;
  this.read = read;
  this.pages = pages;
  this.info = function(){
    return (`${this.title} by ${this.author}, ${this.pages} pages, ${(this.read) ? " already read" : " not read yet"}`)
  }
}

function AddBookToLibrary(){
  let title = prompt("Title of the book");
  let author = prompt("Name of the author");
  let read = (prompt("Did you read this book? Y/N")[0]=="Y" ? true : false );
  let pages = prompt("how much pages in this book?");
  
  (title && author && pages) ? myLibrary.push(new Book(title,author,read,pages)) : AddBookToLibrary();
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
 newBook.dataset.title = book.title;
 newBook.dataset.author = book.author;

 const deleteButton = document.createElement("input");
 deleteButton['type']="button";
 deleteButton['value']="Delete";
 deleteButton.dataset.title = book.title;
 deleteButton.dataset.author = book.author;
 deleteButton.classList.add("delete");

 const updateButton = document.createElement("input");
 updateButton['type']="button";
 updateButton['value']="Update read status";
 updateButton.dataset.title = book.title;
 updateButton.dataset.author = book.author;
 updateButton.classList.add("update");

 newBook.appendChild(updateButton); 
 newBook.appendChild(deleteButton);


 booksLibrary.appendChild(newBook);
})

ClickOnButtons();
}

function DeleteBook(obj){
  
  let next = true;
  let i = 0;
  while (next && i<myLibrary.length) {
    if (myLibrary[i].title == obj.target.dataset.title && myLibrary[i].author==obj.target.dataset.author){
      myLibrary.splice(i,1);
      next = false;
  }
  i++;
}
UpdateLibrary();
}

const addNewBook = document.querySelector(".addnewbook");

function UpdateBook(obj){
  
  let next = true;
  let i = 0;
  while (next && i<myLibrary.length) {
    if (myLibrary[i].title == obj.target.dataset.title && myLibrary[i].author==obj.target.dataset.author){
      myLibrary[i].read=!myLibrary[i].read;
      next = false;
  }
  i++;
}
UpdateLibrary();
}

function ClickOnButtons(){
  deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach(button => {
   button.addEventListener('click', DeleteBook);
 });
  updateButtons = document.querySelectorAll(".update");
  updateButtons.forEach(button => {
   button.addEventListener('click', UpdateBook);
 });
}
addNewBook.addEventListener("click", AddBookToLibrary);

