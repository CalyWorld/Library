const submitbtn = document.querySelector(".submitbtn");
const form = document.getElementsByTagName("form")[0];
const openbtn = document.getElementById("addbtn");
const container = document.getElementById("form-container");
const folder = document.getElementById("folder");
const title = document.getElementById("fname");
const author = document.getElementById("lname");
const pages = document.getElementById("pages");
const titleError = document.querySelector("#fname + span.error");
const authorError = document.querySelector("#lname + span.error");
const pageError = document.querySelector("#pages + span.error");
let read = document.getElementById("read");

let myLibrary = [];
let nextBookId = 0;


class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
    }
}

function addBookToLibrary(title,author,pages,read) {
    let book = new Book(title,author,pages,read,nextBookId);
    myLibrary.push(book);
    console.log(myLibrary);
    createCard(book);
    container.style.display = "none";

}

function createCard(book) {
        const readbtn = document.createElement("button");
        const deletebtn = document.createElement("button");
        let box = document.createElement("box");
        let titleholder = document.createElement("div");
        let authorholder = document.createElement("div");
        let pagesholder = document.createElement("div");

        titleholder.textContent = `Title : ${book.title}`;
        authorholder.textContent = `Author : ${book.author}`;
        pagesholder.textContent = `Pages : ${book.pages}`;
        readbtn.textContent = `Read:${book.read}`;
        box.style.padding = "10px";
        box.style.border = "solid white 2px";
        deletebtn.style.margin = "10px";
        deletebtn.style.padding = "10px";
        deletebtn.style.backgroundColor = "#CC9544";
        readbtn.style.padding = "10px";
        readbtn.style.backgroundColor = "#CC9544";

        deletebtn.textContent = `Delete`;
        folder.append(box);

        box.setAttribute("id", `${book.id}`);
        box.classList.add("box");

        deletebtn.setAttribute("id", `${book.id}`);
        readbtn.setAttribute("id", `${book.id}`);
        readbtn.classList.add("readbtn");

        box.append(titleholder);
        box.append(authorholder);
        box.append(pagesholder);
        box.append(readbtn);
        box.append(deletebtn);

        deletebtn.addEventListener("click", (e) => {
            myLibrary = myLibrary.filter((e) => e != book);
            folder.removeChild(e.target.parentNode);
            console.log(myLibrary);
        });

        readbtn.addEventListener("click", (e) => {
            toogleRead(e.target.id)
            readbtn.textContent = `Read:${book.read}`;
            console.log(myLibrary);
        });

        function toogleRead(id){
            myLibrary.forEach(function(book){
                if(book.id == id){
                    book.read =! book.read;
                }
            });
        
        }
        nextBookId++;
}


function addForm() {
    if (container !== "none") {
        container.style.display = "flex";
    } else {
        container.style.display = "grid";
        container.style.justifyContent = "center";
    }
}

openbtn.addEventListener("click", addForm);


title.addEventListener("input", function(){
    if (title.validity.valid) {
        titleError.textContent = "";
        titleError.className = "error";
    } else {
        showTitleError();
    }
});
author.addEventListener("input", function(){
    if(author.validity.valid){
        authorError.textContent="";
        authorError.className="error";
    }else{
        showAuthorError();
    }
})
pages.addEventListener("input", function(){
    if(pages.validity.valid){
        pageError.textContent= "";
        pageError.className = "error";
    }else{
        showPagesError();
    }
})

submitbtn.addEventListener("click", function(event){
    if(!title.validity.valid){
        showTitleError();
        event.preventDefault();
    }else if(!author.validity.valid){
        showAuthorError();
        event.preventDefault();
    }else if(!pages.validity.valid){
        showPagesError();
        event.preventDefault();
    }else{
        const title = document.getElementById("fname").value;
        const author = document.getElementById("lname").value;
        const pages = document.getElementById("pages").value;
        let read = document.getElementById("read").checked;
        addBookToLibrary(title, author, pages, read);
    }
});

function showTitleError(){
    if(title.validity.valueMissing){
        titleError.textContent = "You need to enter a Title Name";
    }else if(title.validity.tooShort){
        titleError.textContent = `Title name should atleast be ${title.minLength} characters; Name entered is ${title.value.length}.`;
    }
    titleError.className = "error active";
}

function showAuthorError(){
    if(author.validity.valueMissing){
        authorError.textContent = "You need to enter an Author name";
    }else if(author.validity.tooShort){
        authorError.textContent = `Author name should atleast be ${author.minLength} characters; Name entered is ${author.value.length}.`;
    }
    authorError.className = "error active";
}

function showPagesError(){
    if(pages.validity.valueMissing){
        pageError.textContent = "You need to enter a Number";
    }
    pageError.className = "error active";
}