const submitbtn = document.getElementById('submit');
const openbtn = document.getElementById('addbtn');
const container = document.getElementById('form-container');
const folder = document.getElementById('folder');
const title = document.getElementById('fname');
const author = document.getElementById('lname');
const pages = document.getElementById('number');



const myLibrary = [];
let nextid = 0;




class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id
    }
};


function addBookToLibrary() {

    if (title.value == "" && author.value == "" && pages.value == "" && read.value == "") {
        alert('please fill in the form');

    } else {

        let read = document.getElementById('read');

        let book = new Book(title.value, author.value, pages.value, read.value, nextid);

        myLibrary.push(book);

        nextid++;

        console.log(myLibrary);

        createCard();




        container.style.display = 'none';
    }

}


function createCard() {
    folder.textContent = "";
    for (let i of myLibrary) {

        const readbtn = document.createElement('button');
        const deletebtn = document.createElement('button');
        let box = document.createElement('box');
        let titleholder = document.createElement('h2');
        let authorholder = document.createElement('p');
        let pagesholder = document.createElement('p');



        titleholder.textContent = `Title : ${title.value}`;
        authorholder.textContent = `Author : ${author.value}`;
        pagesholder.textContent = `Pages : ${pages.value}`;
        readbtn.textContent = `Read: ${read.value}`;



        box.style.padding = '10px';
        box.style.border = 'solid white 2px';



        deletebtn.style.margin = '10px';
        deletebtn.style.padding = '10px'
        deletebtn.style.backgroundColor = '#CC9544';



        readbtn.style.padding = '10px';
        readbtn.style.backgroundColor = '#CC9544';


        deletebtn.textContent = `Delete`;

        folder.append(box);







        box.setAttribute('id', `${i.id}`);
        box.classList.add("box");
        deletebtn.setAttribute("id", `${i.id}`);

        readbtn.setAttribute('id', `${i.read}`);



        box.append(titleholder);
        box.append(authorholder);
        box.append(pagesholder);
        box.append(readbtn);
        box.append(deletebtn);



        deletebtn.addEventListener('click', () => {


            myLibrary.splice(myLibrary.findIndex(current => {
                return current.id === i.id;
            }), 1);
            folder.removeChild(box);

            console.log(myLibrary);
        });

        readbtn.addEventListener('click', ()=>{

            changeStatus();
           
          });
  
    }
}


Book.prototype.changeStatus = function(){
    this.read = this.read? "no" : "yes";
};

    


function addForm() {

    title.value = '';
    author.value = '';
    pages.value = '';

    if (container !== 'none') {
        container.style.display = 'flex';
    } else {
        container.style.display = 'grid';
        container.style.justifyContent = 'center';
    }
}

openbtn.addEventListener('click', addForm);
submitbtn.addEventListener('click', addBookToLibrary);