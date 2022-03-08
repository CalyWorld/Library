const submitbtn = document.getElementById('submit');
const openbtn = document.getElementById('addbtn');
const container = document.getElementById('form-container');
const folder = document.getElementById('folder'); 
const title = document.getElementById('fname').value;
const author = document.getElementById('lname').value;
const pages = document.getElementById('number').value;
const read = document.getElementById('read').value;


const myLibrary = [];

//id starts at 1 and increments when an object has been created
let nextBookId = 1;


function Book(title,author,pages,read,id) {
     this.title = title;
     this.author= author;
     this.pages = pages;
     this.read =  read;
     this.id = id;   
}

function addBookToLibrary(){
    //creating instances
    let book = new Book(title,author,pages,read, nextBookId);
    console.log(myLibrary);
    //adds instance book into library []
    myLibrary.push(book);
 
    //calls the Card function
    createCard();

    //increments the id anytime a book is created.. this is for indexing each book
    nextBookId++;

    //form container display is off so we can only view the card when submitbtn has been pressed
    container.style.display = 'none';

    //set box display to grid
    // box.style.display = 'grid';
   
    // box.setAttribute('style', 'display:grid; grid-template-rows:repeat(4, 1fr); gap:10px; justify-content:center; align-items:center; ');

}


function createCard(){
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
   

    //stye h1 tag
    
    //style box
    box.style.padding = '10px';
    box.style.border = 'solid white 2px';
    // box.style.width ='50vh';
    // box.style.boxShadow = 20px, 20px, 10px, grey;

    //set style for delete button
    deletebtn.style.margin = '10px';
    deletebtn.style.padding = '10px'
    deletebtn.style.backgroundColor = '#CC9544';
    deletebtn.style.backgroundColor = 'hover : #CC9544';

    //set style for read button
    readbtn.style.padding = '10px';
    readbtn.style.backgroundColor = '#CC9544';
    

    //includes our form values into each tag inside box
    titleholder.textContent = `Title : ${title}`;
    authorholder.textContent = `Author : ${author}`;
    pagesholder.textContent =  `Pages : ${pages}`;
    readbtn.textContent = `Read: ${read}`;
    deletebtn.textContent = `Delete`;
    
    //inserts box into our main container folder
    folder.append(box);

    console.log(myLibrary.length);
    //sets box id to array length so we can get index of each box
    box.setAttribute('id', myLibrary.length);

    //sets box class to card
    box.setAttribute('class', 'card');

 
   
    //puts content inside box/card
    box.append(titleholder);
    box.append(authorholder);
    box.append(pagesholder);
    box.append(readbtn);
    box.append(deletebtn); 

    //deletebtn
    deletebtn.addEventListener('click', e =>{
        //removes box div from folder when deletebtn has been clicked
        folder.removeChild(box);

        //gets index of the object id which has been clicked and is stored in index
        index = e.target.id;

        //removes the object from the array
        myLibrary.splice(index, 1);
    
    });

    //readbutton
    readbtn.addEventListener('click', () =>{
      if(read = false){
          read = true;
      }else{
          read = false;
      }
    });
}

//Gets form and allows user to input something inside
function addForm(){

    if(container !== 'none'){
        container.style.display = 'block';
        // container.style.justifyContent = 'center';
        // container.style.gridTemplateRows = '1fr 1fr';
        // container.style.padding = '10px';
        // container.style.alignItems = 'center';
    }else{
        container.style.display = 'grid';
        // container.style.padding = '10px';
        container.style.justifyContent = 'center';
        // container.style.alignItems = 'center';
    }
}



openbtn.addEventListener('click', addForm);
submitbtn.addEventListener('click', addBookToLibrary);