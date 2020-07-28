//Getting the input field
var inputField = document.getElementById("todo");
//Getting a button
var addButton = document.getElementById("add");
//Getting UL list
var tasksList = document.getElementById("list");
//Adding event listener to button
addButton.onclick = addTask;
//Adding task
function addTask() {
  //Getting input field value
  var taskName = inputField.value;
  //Creating LI element
  var task = document.createElement("li");
  //Creating input element
  var cb = document.createElement("input");
  cb.type = "checkbox";
  //Adding class to checkbox
  cb.setAttribute("class", "cbBox");
  //Creating P element
  var taskNameE = document.createElement("p");
  //Adding taskname to P element & upgrading its class
  taskNameE.textContent = taskName;
  taskNameE.setAttribute("class", "text");
  //Creating delete button
  var delButton = document.createElement("button");
  delButton.textContent = "Delete";
  //Adding class
  delButton.setAttribute("class", "delButton");
  //Adding event listener in checkbox & delete
  cb.onclick = checkBoxCheck;
  delButton.onclick = deleteCheck;
  //Adding checkbox in pargraph & delete button
  task.appendChild(cb);
  task.appendChild(taskNameE);
  task.appendChild(delButton);
  //Adding task list
  tasksList.prepend(task);
}
function checkBoxCheck(event) {
  if (event.target.tagName == "INPUT") {
    pElement = event.target.parentNode.querySelector("p");
    if (event.target.checked == true) {
      pElement.style.textDecoration = "line-through";
      event.target.parentNode.style.backgroundColor = "Lightblue";
      list.appendChild(event.target.parentNode);
    } else {
      pElement.style.textDecoration = "none";
      event.target.parentNode.style.backgroundColor = "White";
      list.prepend(event.target.parentNode);
    }
  }
}
function deleteCheck(event) {
  event.target.parentNode.style.backgroundColor = "red";
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  document.getElementById("cordinates").textContent =
    "Latitude = " + latitude + ", Longitude = " + longitude;
  var mapLink = document.createElement("");
  mapLink.href =
    "https://www.openstreetmap.org/#map=18/" + latitude + "/" + longitude;
  mapLink.textContent = "street api";
  //Cordinates
  document.getElementById("Cordinates").appendChild(mapLink);
}
function error() {
  document.getElementById("Cordinates").textContent =
    "Not able to use location";
}
if (!navigator.geolocation) {
  document.getElementById("Cordinates").textContent =
    "Browser dont support Geolocation";
} else {
  document.getElementById("Cordinates").textContent = "Loading";
  navigator.geolocation.getCurrentPosition(success, error);
}
