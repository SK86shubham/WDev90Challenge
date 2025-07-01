//todays goal is to learn variables and function
//var(global scope) let and const  (blocked scope) const value cannot be change

//function
//higher order function
// Array and objects
//-destructuring , rest , spread 


//MINI TODO APP
let todos=[];

const addTodo=(task)=>{
    todos.push({task,done:false});
};

const listTodos=()=>{
    todos.forEach((todo,index)=>{
        console.log(`${index+1}.${todo.task}-${todo.done ? "Done": "Pending"}`);
        
    })
}

// Mark a task as done
const markDone = (index) => {
  if (todos[index]) {
    todos[index].done = true;
    console.log(`Marked "${todos[index].task}" as done.`);
  } else {
    console.log("Invalid index.");
  }
};

// Remove a specific task by index
const removeTodo = (index) => {
  if (index >= 0 && index < todos.length) {
    const removed = todos.splice(index, 1);
    console.log(`Removed task: "${removed[0].task}"`);
  } else {
    console.log("Invalid index.");
  }
};

addTodo("day one of 90challenge");
addTodo("learn javaScript");
// listTodos();

markDone(0);
listTodos();

removeTodo(1);
listTodos();
