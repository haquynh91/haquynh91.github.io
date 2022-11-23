var taskArr = [];
function add() {
  if (document.getElementById("task").value != "") {
    taskArr.push(document.getElementById("task").value);
    render();
  } else alert("Type a new task");
}
function clearAll() {
  taskArr = [];
  render();
}
function edit(id) {
  alert("edit");
}
function remove(id) {
  taskArr.splice(id, 1);
  render();
}
function checkStatus(id) {
  elem = document.getElementById(id);
  if (elem.checked) {
    document.getElementsByClassName("taskName")[id].style.textDecoration =
      "line-through";
  } else {
    document.getElementsByClassName("taskName")[id].style.textDecoration =
      "none";
  }
}

function render() {
  html = "";
  for (let i = 0; i < taskArr.length; i++) {
    html += `
    <tr>
    <td>
      <input type="checkbox" id="${i}" class="status" onclick="checkStatus(${i})"/>
    </td>
    <td class="taskName">${taskArr[i]}</td>
    <td>
      <i class="fa-regular fa-pen-to-square edit" id="edit${[
        i,
      ]}" onclick="edit(${i})"></i>
    </td>
    <td>
      <i class="fa-regular fa-trash-can remove" id="remove${[
        i,
      ]}" onclick="remove(${i})"></i>
    </td>
  </tr>`;
  }
  document.getElementById("render").innerHTML = html;
}
