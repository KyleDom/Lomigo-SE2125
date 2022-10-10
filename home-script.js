
const postLoad = () => {
  let list = document.getElementById('list');
  const addBtn = document.querySelector('#button');
addBtn.onclick = () => {
  let input = prompt('Enter name');
  list.innerHTML += '<li class="list-group-item">' + input + '</li>';
}
}

window.onload = postLoad
