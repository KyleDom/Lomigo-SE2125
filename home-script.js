let list = document.getElementById('list');
let addBtn = document.getElementById('add-Btn');

addBtn.addEventListener('click', function(){
let txt = prompt('Student name');
  list.innerHTML += '<li class="list-group-item">' + txt + '</li>';
});