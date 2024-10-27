
function Book(title,author){
	this.title = title;
    this.author = author;
    }
    
let book1 = new Book("Hello","world");
let book2 = new Book("good","bye");

const myLibrary = [book1,book2];
myLibrary.forEach( (element) => {
	const para = document.createElement("p");
	const node = document.createTextNode(`$(element.title)`);
    console.log(element.title);
	para.appendChild(node);
	// const element = document.getElementById("div1");
	// element.appendChild(para);
  });