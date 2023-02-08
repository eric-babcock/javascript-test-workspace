// Model
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
render()


//creates a todo 
function createTodo(title,dueDate) {
  const id = '' + new Date().getTime();
  todos.push({
    title:title,
    dueDate:dueDate,
    id: id
  });
}

//deletes a todo
function removeTodo(idToDelete) {
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
}

//View

function render() {
  // reset our list
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach(function (todo) {
    const element = document.createElement("div");
    const deleteButton = document.createElement('button');
    const todoList = document.getElementById("todo-list");
    
    element.innerText = todo.title + ' ' + todo.dueDate;
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left: 12px;';
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    
    element.appendChild(deleteButton);
    todoList.appendChild(element);
  });
}

// Control

function addTodo() {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;
  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;
  
  createTodo(title,dueDate)
  render();
  textbox.value = ''
}

function deleteTodo(event){ 

  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete)
  render();
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
