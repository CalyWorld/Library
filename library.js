const submitbtn = document.getElementById('submit');
const openbtn = document.getElementById('addbtn');
const container = document.getElementById('form-container');
const folder = document.getElementById('folder'); 
const title = document.getElementById('fname').value;
const author = document.getElementById('lname').value;
const pages = document.getElementById('number').value;
const read = document.getElementById('read').value;


const myLibrary = [];
let nextBookId = 1;

function Book(title,author,pages,read,id) {
     this.title = title;
     this.author= author;
     this.pages = pages;
     this.read =  read;
     this.id = id;   
}

function addBookToLibrary(){

    let book = new Book(title,author,pages,read, nextBookId);
    myLibrary.push(book);
    // console.log(myLibrary);
    Card();
    nextBookId++;
    container.style.display = 'none';
}


function Card(){
    const readbtn = document.createElement('button');
    const deletebtn = document.createElement('button');
    let title = document.getElementById('fname').value;
    let author = document.getElementById('lname').value;
    let pages = document.getElementById('number').value;
    let read = document.getElementById('read').value;
    let box = document.createElement('box');
    let titleholder = document.createElement('h1');
    let authorholder = document.createElement('p');
    let pagesholder = document.createElement('p');
   
    box.style.padding = '10px';
    box.style.alignItems = 'center';

    
    titleholder.textContent = `Title : ${title}`;
    authorholder.textContent = `Author : ${author}`;
    pagesholder.textContent =  `Pages : ${pages}`;
    readbtn.textContent = `Read: ${read}`;
    deletebtn.textContent = `Delete`;
    
    folder.append(box);

    console.log(myLibrary.length);
    box.setAttribute('id', myLibrary.length);

    // readbtn.setAttribute('id', myLibrary.length);
   
    box.append(titleholder);
    box.append(authorholder);
    box.append(pagesholder);
    box.append(readbtn);
    box.append(deletebtn); 

    deletebtn.addEventListener('click', e =>{
        folder.removeChild(box);
        index = e.target.id;
        myLibrary.splice(index, 1);
    
    });

    readbtn.addEventListener('click', e =>{
        read = e.target.textContent;
        read == !read;
    });
}


function addForm(){
    if(container !== 'none'){
        container.style.display = 'block';
    }else{
        container.style.display = 'block';
    }
}



openbtn.addEventListener('click', addForm);
submitbtn.addEventListener('click', addBookToLibrary);