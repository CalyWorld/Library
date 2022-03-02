  
                
                
                const addButton = document.querySelector('#newbook');
                

              

                const library = [];

                function Books(title, author, pages, read){

                    this.title = title;
                    this.author = author;
                    this.pages = pages;
                    this.read = read;
                }
                function addBookToLibrary(){

                    const title = document.getElementById('fname').value;
                    const author = document.getElementById('lname').value;
                    const pages = document.getElementById('number').value;
                    const read = document.getElementById('read').value;
                    
                    let book = new Books(title, author, pages, read);
                    library.push(book);
                    createTable(); 
                   
                }

                 function createTable(){
                   var html = "<table border = '2|2'>";
                    
                        html += '<tr>';
                            html+='<th>title</th>';
                            html+='<th>author</td>';
                            html+='<th>page</th>';
                            html+='<th>Read</th>';
                        html +='</tr>';
                     
                     for(var i = 0; i<library.length; i++){
                        html += '<tr>';
                            html+='<td>'+library[i].title+'</td>';
                            html+='<td>'+library[i].author+'</td>';
                            html+='<td>'+library[i].pages+'</td>';
                            html+='<td>'+library[i].read+'</td>';

                        html +='</tr>';

                 }
                   html+='</table>';
                   document.getElementById('box').innerHTML += html;
                 }

                document.getElementById("submit").onclick = function(){
                    document.getElementById('box').style.display='block';
                    addBookToLibrary();
                    container.style.display = "none";
                }

             
                const addform = document.getElementById('addbutton');
                const container = document.getElementById('container');

                addform.onclick =   function(){  

                 if(container.style.display !== "none"){
                        container.style.display = "block";
                    }else{
                        container.style.display='block';
                    }
                        
                }
    

             
            