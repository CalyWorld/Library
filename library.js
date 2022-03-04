const addButton = document.querySelector('#newbook');
const addform = document.getElementById('addbutton');
const container = document.getElementById('container');
const submitbtn = document.getElementById('submit');
const table = document.getElementById('table');
const library = [];


function Books(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary() {

    const title = document.getElementById('fname').value;
    const author = document.getElementById('lname').value;
    const pages = document.getElementById('number').value;
    const read = document.getElementById('read').value;

    book = new Books(title, author, pages, read);
    library.push(book);
    createTable();
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
        html += `<tr id=table data-row =${i}>`;
        html += '<td>' + library[i].title + '</td>';
        html += '<td>' + library[i].author + '</td>';
        html += '<td>' + library[i].pages + '</td>';
        html += '<td>' + library[i].read + '</td>';
        html +=
            '<td>' +
            '<button id=removebtn onclick= removeBook(event)>Delete</button>' +
            '</td>';


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

function removeBook(e) {
 if(e.currentTarget.textContent = 'Delete'){
     e.currentTarget += document.getElementById('table').getAttribute('data-row');
     library.splice(e.currentTarget, 1);
     createTable();
 }
}
addform.addEventListener('click', openForm);
submitbtn.addEventListener('click', submitForm);
                








