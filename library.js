    const submitbtn = document.getElementById('submit');
    const openbtn = document.getElementById('addbtn');
    const container = document.getElementById('form-container');
    const folder = document.getElementById('folder'); 
    const title = document.getElementById('fname');
    const author = document.getElementById('lname');
    const pages = document.getElementById('number');
    let read = document.getElementById('read');



    const myLibrary = [];

    //id starts at 1 and increments when an object has been created
    let nextBookId = 1;


    function Book(title,author,pages,read,id) {
        this.title = title;
        this.author= author;
        this.pages = pages;
        this.read = read;
        this.id = id;       
    }


    function addBookToLibrary(){
        //creating instances
        let book = new Book(title.value, author.value, pages.value, read.value, nextBookId);

        console.log(myLibrary);
        //adds instance book into library []
        myLibrary.push(book);


        //calls the Card function
        createCard();

        //increments the id anytime a book is created.. this is for indexing each book
        nextBookId++;

        //form container display is off so we can only view the card when submitbtn has been pressed
        container.style.display = 'none';

        //set values to empty so user can input values after submitbtn has been clicked
        title.value = '';
        author.value = '';
        pages.value = '';

        // if(read.value === true){
        //     readbtn.textContent = "Read: Yes";
        // }else if(read.value === false) {
        //     readbtn.textContent = "Read: No";
        // }

    }


    function createCard(){
        const readbtn = document.createElement('button');
        const deletebtn = document.createElement('button');
        let box = document.createElement('box');
        let titleholder = document.createElement('h2');
        let authorholder = document.createElement('p');
        let pagesholder = document.createElement('p');


        //includes our form values into each tag inside box
        titleholder.textContent = `Title : ${title.value}`;
        authorholder.textContent = `Author : ${author.value}`;
        pagesholder.textContent =  `Pages : ${pages.value}`;
        readbtn.textContent = `Read: ${read.value}`;

      
        //style box
        box.style.padding = '10px';
        box.style.border = 'solid white 2px';


        //set style for delete button
        deletebtn.style.margin = '10px';
        deletebtn.style.padding = '10px'
        deletebtn.style.backgroundColor = '#CC9544';


        //set style for read button
        readbtn.style.padding = '10px';
        readbtn.style.backgroundColor = '#CC9544';


        deletebtn.textContent = `Delete`;
        
        //inserts box into our main container folder
        folder.append(box);


       

        //sets box id to array length so we can get index of each box
        box.setAttribute('id', myLibrary.length);

        readbtn.setAttribute('id', myLibrary.length);



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
    }


    //Gets form and allows user to input something inside
    function addForm(){

        if(container !== 'none'){
            container.style.display = 'flex';
        }else{
            container.style.display = 'grid';
            container.style.justifyContent = 'center';
        }
    }

    openbtn.addEventListener('click', addForm);
    submitbtn.addEventListener('click', addBookToLibrary);

