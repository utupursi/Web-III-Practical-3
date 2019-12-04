import Library from './Library';

const lib = new Library();

const addAuthorBtn = document.querySelector('#btn-add-author');
const addBookForm = document.querySelector('#addBookForm');
const authoInput = document.querySelector('#new-author-input');
const searchBtn=document.querySelector('.btn-search');
let deleteAuthorBtn;
authoInput.onkeyup = function(e){
  if (e.keyCode === 13){
    addAuthor();
  }
}
addAuthorBtn.onclick = function(){
  addAuthor();
};

addBookForm.onsubmit = function(e){
  e.preventDefault();
  const inputs = addBookForm.querySelectorAll('[name]');
  const bookObject = {};
  inputs.forEach(input => {
    bookObject[input.name] = input.value;
    input.value='';
  });
  console.log(bookObject);
  lib.addBook(bookObject);

  deleteAuthorBtn=document.querySelectorAll('.btn-danger');
  deleteAuthorBtn.forEach(item=>{
    item.onclick=function(){
      removeBook(item);
    }
  })


};

searchBtn.onclick=function(){
  const searchInput=document.querySelector('#search').value;
  lib.searchBook(searchInput);
  deleteAuthorBtn=document.querySelectorAll('.btn-danger');
  deleteAuthorBtn.forEach(item=>{
    item.onclick=function(){
      removeBook(item);
    }
  })

}

function addAuthor(){
  if (authoInput.value){
  lib.addAuthor(authoInput.value);

  deleteAuthorBtn=document.querySelectorAll('.btn-danger');
  deleteAuthorBtn.forEach(item=>{
    item.onclick=function(){
      removeAuthor(item);
    }
  })
    authoInput.value = '';
  }
}

function removeAuthor(item){
  lib.removeAuthor(item);
}


function removeBook(item){
    lib.removeBook(item);
}
