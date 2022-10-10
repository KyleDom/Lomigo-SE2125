
const postLoad = () => {
  let list = document.getElementById('list');
  const addBtn = document.querySelector('#button');
addBtn.onclick = () => {
  let firstName = prompt('First name');
  let lastName = prompt('Last name');
  if(firstName && lastName != null){
    list.innerHTML += '<li class="list-group-item">' + firstName + " " + lastName + '</li>';
  }
  return
}
}

window.onload = postLoad
