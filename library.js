const submitbtn = document.querySelector(".submit");
const openbtn = document.getElementById("addbtn");
const container = document.getElementById("form-container");
const folder = document.getElementById("folder");
const title = document.getElementById("fname");
const author = document.getElementById("lname");
const pages = document.getElementById("number");
let read = document.getElementById("read");

const myLibrary = [];
let nextid = 0;

class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
    }
}

function addBookToLibrary() {
    if (
        title.value == "" &&
        author.value == "" &&
        pages.value == "" &&
        read.value == ""
    ) {
        alert("please fill in the form");
    } else {
        let book = new Book(
            title.value,
            author.value,
            pages.value,
            read.checked,
            nextid
        );
        myLibrary.push(book);
        nextid++;
        console.log(myLibrary);

        createCard();

        container.style.display = "none";
    }
}
Book.prototype.toggleStatus = function () {
    if (this.read === true) {
        this.read = false;
    } else {
        this.read = true;
    }
};

function createCard() {
    folder.textContent = "";

    for (let i of myLibrary) {
        const readbtn = document.createElement("button");
        const deletebtn = document.createElement("button");
        let box = document.createElement("box");
        let titleholder = document.createElement("div");
        let authorholder = document.createElement("div");
        let pagesholder = document.createElement("div");

        titleholder.textContent = `Title : ${i.title}`;
        authorholder.textContent = `Author : ${i.author}`;
        pagesholder.textContent = `Pages : ${i.pages}`;
        readbtn.textContent = `Read:${i.read}`;
        box.style.padding = "10px";
        box.style.border = "solid white 2px";
        deletebtn.style.margin = "10px";
        deletebtn.style.padding = "10px";
        deletebtn.style.backgroundColor = "#CC9544";
        readbtn.style.padding = "10px";
        readbtn.style.backgroundColor = "#CC9544";

        deletebtn.textContent = `Delete`;
        folder.append(box);

        box.setAttribute("id", `${i.id}`);
        box.classList.add("box");

        deletebtn.setAttribute("id", `${i.id}`);
        readbtn.setAttribute("id", `${i.id}`);
        readbtn.classList.add("readbtn");

        box.append(titleholder);
        box.append(authorholder);
        box.append(pagesholder);
        box.append(readbtn);
        box.append(deletebtn);

        deletebtn.addEventListener("click", () => {
            myLibrary.splice(
                myLibrary.findIndex((current) => {
                    return current.id === i.id;
                }),
                1
            );
            folder.removeChild(box);

            console.log(myLibrary);
        });

        readbtn.addEventListener("click", () => {
            myLibrary[
                myLibrary.findIndex((current) => {
                    return current.id === i.id;
                })].toggleStatus();
            readbtn.textContent = `Read:${i.read}`;
            console.log(myLibrary);
        });
    }
}


function addForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";

    if (container !== "none") {
        container.style.display = "flex";
    } else {
        container.style.display = "grid";
        container.style.justifyContent = "center";
    }
}

openbtn.addEventListener("click", addForm);
submitbtn.addEventListener("click", () => {
    addBookToLibrary();
});
