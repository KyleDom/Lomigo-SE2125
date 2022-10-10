
const postLoad = () => {
  let list = document.getElementById('list');
  const addBtn = document.querySelector('#button');
addBtn.onclick = () => {
  let txt = prompt('Student name');
  list.innerHTML += '<li class="list-group-item">' + txt + '</li>';
}
}

window.onload = postLoad
