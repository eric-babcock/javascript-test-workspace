var todos = [{
  title:"Get groceries",
  dueDate: '20210-10=04',
  id:'id1'

  },{
    title:"Wash car",
    dueDate:"2021-02-03",
    id:'id2'
  },{
    title:"Make dinner",
    dueDate:"2021-02-03",
    id:'id3'
  }];

render();

function addTodo() {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker');
  const id = '' + new Date().getTime();
  todos.push({
    title:title,
    dueDate:datePicker.value,
    id: id
  });
  render();
  textbox.value = ''
}

function deleteTodo(event){ 

  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  todos = todos.filter(function(todo){
    /* If the id of this todo mathes  
       idToDelete, return false. 
       otherwise return true
    */ 
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });
  render();
}

function render() {
  // reset our list
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach(function (todo) {
    const element = document.createElement("div");
    element.innerText = todo.title + ' ' + todo.dueDate;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left: 12px;';
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element);
  });
}

//   EXTRA CREDIT my additions 

/****Add to do on clicking enter */

// Get the input field

const textbox = document.getElementById("todo-title");
/* Execute a function when the user
   presses a key */

textbox.addEventListener('keypress',function(event){
  /* If the user presses the "Enter" key
  on the keyboard */
  if (event.key === "Enter" && textbox.value != '') {
    // Cancel normal behavior aka newline
    event.preventDefault();
    // Trigger the desired button
    document.getElementById("addTodo").click();
  }  
});


/***/
