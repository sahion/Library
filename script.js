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
}

addBookToLibrary();


myLibrary.forEach(book => {
console.log(book.info());
})