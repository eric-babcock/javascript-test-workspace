const todos = [{
  title:"Get groceries",
  dueDate: '20210-10=04'
  },{
    title:"Wash car",
    dueDate:"2021-02-03"
  },{
    title:"Make dinner",
    dueDate:"2021-02-03"}];

render();
function addTodo() {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker');
  todos.push({
    title:title,
    dueDate:datePicker.value
  });
  render();
}

function render() {
  // reset our list
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach(function (todo) {
    const element = document.createElement("div");
    element.innerText = todo.title;
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element);
  });
}