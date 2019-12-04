export default class Library {

  constructor() {
    this.authors = [];
    this.id=0;
    this.books = [];
    this.listGroup = document.querySelector('#authors');
    this.authorSelect = document.querySelector('#addBookForm select[name=author]');
    this.booksTbody = document.querySelector('#books > tbody');
  }

  addAuthor(authorName) {
    if (this.authors.indexOf(authorName) === -1){
      this.authors.push(authorName);
      this.listGroup.innerHTML += `<li id=${this.id} value='${authorName}' class="list-group-item">${authorName} <button  class='btn-danger' style='float:right' type='button' data-author-id=${this.id}>delete</button></li>`;
      this.id++;
      this.makeSelect();
    }
  }


removeAuthor(item) {
  let authorId = item.getAttribute('data-author-id');
  let li=document.getElementById(`${authorId}`);
  let value=li.getAttribute('value');
  this.authors.splice(this.authors.indexOf(value),1);
  li.remove();
  this.makeSelect();
}

  makeSelect(){
    this.authorSelect.innerHTML = this.authors.map(author => `<option>${author}</option>`).join('');
  }

  addBook(bookObject) {
    this.books.push(bookObject);
    this.booksTbody.innerHTML += `
    <tr id='${bookObject.title}'>
      <td>${bookObject.author}</td>
      <td>${bookObject.title}</td>
      <td>${bookObject.price}</td>
      <td>${bookObject.numberOfPages}</td>
      <td><button class='btn-danger' id='book'>Delete</button></td>
    </tr>`;
  }

  removeBook(item){
    let bookObject;
    let tr=item.parentElement.parentElement;
    let bookTitle=tr.getAttribute('id');
    this.books.forEach(book=>{
       if(book.title==bookTitle){
       bookObject=book;
    }
  })
  console.log(bookObject);
    this.books.splice(this.books.indexOf(bookObject), 1);
    console.log(this.books);
    tr.remove();
  }

  searchBook(text) {
    const filteredBooks = this.books.filter(book => book.title.indexOf(text) > -1);
    console.log(filteredBooks);
    if(filteredBooks.length!==0){
    this.booksTbody.innerHTML='';
    filteredBooks.forEach(book=>{
      this.booksTbody.innerHTML += `
      <tr  id='${book.title}'>
        <td>${book.author}</td>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>${book.numberOfPages}</td>
        <td><button class='btn-danger' id='book'>Delete</button></td>
      </tr>`;
    })

    }
    else{
      this.booksTbody.innerHTML='';

    }
  }
}
