// function books(title, author, pages, read){

//     }
//      const theHobbit = new books('The Hobbit','J.R.R. Tolkien', '295', 'not read yet');
//      console.log(theHobbit.info());

let library = [];

function Books(title, author, pages, read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
//     this.info = function(){
//         return (`${title} by ${author}, ${pages} pages, ${read}`);
//     }
// }
}
Books();

function addBookToLibrary(){
    let book = new Books('The Hobbit','J.R.R. Tolkien', '295', 'not read yet');
    library.push(book);
}

addBookToLibrary();
console.log(library);




