const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const listItems = document.querySelectorAll("ul > li");
const deleteButtons = document.querySelectorAll('ul > li > button')

function isInputValid(string) {
  if (string && string.split(" ").join("")) return true;
  return false;
}

function createListElement() {
  const li = document.createElement("li");
  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'Delete'
  addClickEventToItemList(li)
  addClickEventToDeleteButton(deleteButton)
  li.appendChild(document.createTextNode(input.value))
  li.appendChild(deleteButton)
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (isInputValid(input.value)) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (isInputValid(input.value) && event.keyCode === 13) {
    createListElement();
  }
}

function checkOrUncheck(event) {
    event.toElement.classList.toggle('done')
}

function deleteItem(event){
    const deleteButton = event.toElement
    const parentListItem = event.toElement.parentNode
    deleteButton.removeEventListener('click', deleteItem)
    parentListItem.removeEventListener('click', addClickEventToItemList)
    parentListItem.remove()
}

function addClickEventToItemList(item){
    item.addEventListener('click', checkOrUncheck)
}

function addClickEventToDeleteButton(button){
    button.addEventListener('click', deleteItem)
}


button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
listItems.forEach(addClickEventToItemList)
deleteButtons.forEach(addClickEventToDeleteButton)


