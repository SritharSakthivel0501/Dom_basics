let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");
let input =  document.getElementById("item")

//form submit event
form.addEventListener("submit", addItem);
//delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItems);

//Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  let newItem = input.value;
  //Create new li element
  let li = document.createElement("li");
  //add Class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  

  //crate delete button element
  let deleteButton = document.createElement("button");
  // add classes to delete button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  // append text node
  deleteButton.appendChild(document.createTextNode("X"));
  //append button to li
  li.appendChild(deleteButton);
  //append li to list
  itemList.appendChild(li);
  //clear input field
  input.value = ""
}

//Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter Event
function filterItems(e) {
  //convert to lowercase
  let text = e.target.value.toLowerCase();
  //get allListItems
  let items = itemList.getElementsByTagName("li");
  //convert to an array
  Array.from(items).forEach(item => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      //if the value matches list items add display as block
      item.style.display = "block";
    } else {
      //if it doesnt match add display as none
      item.style.display = "none";
    }
  });
}