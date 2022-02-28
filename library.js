  
                // const form = document.getElementById('myForm');
              

                let library = [];

                function Books(title, author, pages, read){

                    this.title = title;
                    this.author = author;
                    this.pages = pages;
                    this.read = read;
                }
                function addBookToLibrary(){
                    const book = new Books('odyseey', 'Callistus', '295', 'not read');
                    const book2 = new Books('odyseey', 'Callistus', '295', 'not read');
                    library.push(book);
                    library.push(book2);
                    createList();
                }
                addBookToLibrary();
            

                // // // function submit(){
                // // //         document.getElementById("myForm").submit();
                // // //         createList();
                // // // }
                // // // submit();

                function createList(){
                  var html = "<table border = '2|2'>";
                    for(var i=0; i<library.length; i++){
                        html += '<tr>';
                            html+='<td>'+library[i].title+'</td>';
                            html+='<td>'+library[i].author+'</td>';
                            html+='<td>'+library[i].pages+'</td>';
                            html+='<td>'+library[i].read+'</td>';

                            html +='</tr>';
                    }
                    html+='</table>';
                    document.getElementById('container').innerHTML += html;
                }

 