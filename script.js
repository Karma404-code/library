const card = document.querySelector(".books");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addBook");
const closeButton = document.querySelector(".closeDialog");
const submit = document.querySelector(".submit")

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function removeBookFromLibrary(element){
    card.removeChild(cover);
}

function addBookToLibrary(){
    const inputTitle = document.querySelector("#bookName");
    const inputAuthor = document.querySelector("#bookAuthor");
    const inputPages = document.querySelector("#bookPages");
    const inputRead = document.querySelector("#bookStatusYes");

    let temp = new Book(inputTitle.value,inputAuthor.value,inputPages.value,inputRead.checked);
    myLibrary.push(temp);
    displayBook(temp);
}

function displayBooks(){
    myLibrary.forEach((element) => {
        displayBook(element);
    });
}

function displayBook(element){
    const cover = document.createElement("div");
        const paraTitle = document.createElement("p");
        const paraAuthor = document.createElement("p");
        const paraPage = document.createElement("p");
        const paraStatus = document.createElement("p");
        const deleteBook = document.createElement("button");
        const lable = document.createElement("lable");
        lable.textContent = "Completed: ";

        const changeStatus = document.createElement("input");
        changeStatus.type = "checkbox";
        changeStatus.className = "toggle";

        lable.appendChild(changeStatus);

        let title = document.createTextNode(element.title);
        paraTitle.className = "title";
        paraTitle.appendChild(title);

        let author = document.createTextNode(`By ${element.author}`);
        paraAuthor.className = "author";
        paraAuthor.appendChild(author);

        let page = document.createTextNode(`Pg ${element.pages}`);
        paraPage.className = "pages";
        paraPage.appendChild(page);

        if(element.read){
            var status = document.createTextNode("Status: Read");
            changeStatus.checked = true;
        }
        else{    
            var status = document.createTextNode("Status: Not read");
        }
        paraStatus.className = "status";
        paraStatus.appendChild(status);

        let remove = document.createTextNode("delete");
        deleteBook.className = "remove";
        deleteBook.appendChild(remove);

        cover.className = "book";
        cover.appendChild(paraTitle);
        cover.appendChild(paraAuthor);
        cover.appendChild(paraPage);
        cover.appendChild(paraStatus);
        cover.appendChild(lable);
        cover.appendChild(deleteBook);
        card.appendChild(cover);

        changeStatus.addEventListener("click",() => {
            if(changeStatus.checked){    
                paraStatus.textContent = "Status: Read";
            }
            if(!changeStatus.checked){    
                paraStatus.textContent = "Status: Not read";
            }
        })

        deleteBook.addEventListener("click",()=>{
            card.removeChild(cover);
        })
       
}

var book1 = new Book("The Hobbit","J.R.R Tolkien",300,false);
var book2 = new Book("The Communist Manifesto","Karl Marx",65,true);
var book3 = new Book("Atomic Habit","James Clear",306,true);

const myLibrary = [
    book1,
    book2,
    book3
]

showButton.addEventListener("click",()=>{
    dialog.showModal();
    console.log("add book works");
});

closeButton.addEventListener("click",() => {
    dialog.close();
    console.log("dialog closed");
})

submit.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    dialog.close();
})


displayBooks();