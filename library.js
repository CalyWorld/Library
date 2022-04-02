const submitbtn = document.getElementById('submit');
const openbtn = document.getElementById('addbtn');
const container = document.getElementById('form-container');
const folder = document.getElementById('folder');
const title = document.getElementById('fname');
const author = document.getElementById('lname');
const pages = document.getElementById('number');
let read = document.getElementById('read');


const myLibrary = [];


 

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};


function addBookToLibrary() {

    if (title.value == "" && author.value == "" && pages.value == "" && read.value == "") {
        alert('please fill in the form');

    } else {
       
        let book = new Book(title.value, author.value, pages.value, read.value);

        myLibrary.push(book);



        console.log(myLibrary);
        
        createCard();

      
        container.style.display = 'none';


        // if(read.value === true){
        //     readbtn.textContent = "Read: Yes";
        // }else if(read.value === false) {
        //     readbtn.textContent = "Read: No";
        // }
    }

}


function createCard() {
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



 
  


    box.setAttribute('id', myLibrary.length-1);
    box.classList.add("box");
    deletebtn.setAttribute("id", "delete");

    readbtn.setAttribute('id', myLibrary.length);



    box.append(titleholder);
    box.append(authorholder);
    box.append(pagesholder);
    box.append(readbtn);
    box.append(deletebtn);


   
    deletebtn.addEventListener('click', (e) => {


       

        // Debugger();

        console.log(e.target.parentElement.id);
        // Debugger();
        
    
        myLibrary.splice(e.target.parentElement.id, 1);
   

        // render();

        folder.removeChild(box);

        console.log(myLibrary);
    });
}


//     readbtn.addEventListener('click', e=>{

//             if(e.target.id.read === true){
//                 e.target.id.read = false;
//             }else{
//                 e.target.id.read = true;
//             }

//             if(readbtn.textContent === 'read'){
//                 readbtn.textContent === 'Unread';
//             }else{
//                 readbtn.textContent === 'read';
//             }
//         });
// 



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