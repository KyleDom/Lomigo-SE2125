
const postLoad = () => {
  let list = document.getElementById('list');
  const addBtn = document.querySelector('#button');
addBtn.onclick = () => {
  let game = prompt('Enter game');
  if(game != null){
    list.innerHTML += '<li class="list-group-item">' + game + '</li>';
  }
  return
}
}

window.onload = postLoad
