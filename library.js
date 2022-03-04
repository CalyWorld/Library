const addButton = document.querySelector('#newbook');
const addform = document.getElementById('addbutton');
const container = document.getElementById('container');
const submitbtn = document.getElementById('submit');
const table = document.getElementById('table');
const library = [];
let nextBookId = 1;
let read = true;


function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary() {

    const title = document.getElementById('fname').value;
    const author = document.getElementById('lname').value;
    const pages = document.getElementById('number').value;
    const read = document.getElementById('read').value;

    books = new Book(title, author, pages, read, nextBookId);
    library.push(books);
    createTable();
    nextBookId++;
}

function createTable() {
    var html = "<table border = '1|1'>";

    html += '<tr>';
    html += '<th>' + `TITLE` + '</th>';
    html += '<th>' + `AUTHOR` + '</th>';
    html += '<th>' + `PAGES` + '</th>';
    html += '<th>' + `HAVE YOU READ IT?` + '</th>';
    html += '<th>' + `Remove Row` + '</th>';

    for (var i = 0; i < library.length; i++) {
        html += `<tr data-id='${library[i].id}' id=removeRows'>`;
        html += '<td>' + library[i].title + '</td>';
        html += '<td>' + library[i].author + '</td>';
        html += '<td>' + library[i].pages + '</td>';
        html += '<td>' + library[i].read + '</td>';
        html +=
            `<td>
            <button id=${library[i].id} class=removebtn onclick= removeRow(this.id)>Delete</button> 
            </td>`;


        html += '</tr>';

    }
   
    html += '</table>';
    document.getElementById('box').innerHTML = html;
}


function openForm(){

    if (container.style.display !== 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'block';
    }
}



function submitForm() {
    document.getElementById('box').style.display = 'block';
    addBookToLibrary();
    container.style.display = 'none';
}

 function removeRow(id){
    removeBook();
    const row = document.getElementById(id).parentNode.parentNode;
    row.remove(); 
 }
 function removeBook() {
    index = `${library.id}`;
    library.splice(index, 1);
    }

Book.prototype.checkbox = function(){
   this.read = !this.read;
};

addform.addEventListener('click', openForm);
submitbtn.addEventListener('click', submitForm);
                








