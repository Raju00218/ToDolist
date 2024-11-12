let toDo = [];


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("toDo"));

if(leadsFromLocalStorage){
   toDo=leadsFromLocalStorage
    display()
};
function addTask() {
  // Get value from input field and push it into the array
  let inputValue = document.getElementById("to-doEl").value;
  
  if (inputValue) {
    toDo.push({ task: inputValue, completed: false });
    localStorage.setItem("toDo",JSON.stringify(toDo))
  }


  // Clear the input field after adding the task
  document.getElementById("to-doEl").value = "";
  console.log(toDo);

  // Display the updated list
  display();
}

function display() {
  // Get the ul element and clear its content
  let ul = document.getElementById("list-toDo");
  ul.innerHTML = "";

  // Iterate over the toDo array and create list items with buttons
  toDo.forEach((item, index) => {
    // Create list item
    let li = document.createElement("li");
    li.id = "task-list";
    li.textContent = `  ${item.task}`;

    // Create check button
    let checkButton = document.createElement("input");
    checkButton.type = "checkbox";
    checkButton.id = "checked";
    checkButton.checked = item.completed;
    checkButton.onclick = () => taskCompleted(index);

    // Create remove button
    let buttonRemove = document.createElement("button");
    buttonRemove.id = "remove";
    buttonRemove.textContent = "X";
    buttonRemove.onclick = () => removeTask(index,1);

    // Append buttons to list item
    li.prepend(checkButton);
     li.append(buttonRemove);
      ul.appendChild(li);

    // Style completed tasks
    if (item.completed) {
       checkButton.remove()
       const taskOver = document.createElement("div")
        taskOver.textContent = "Complited"
        li.prepend(taskOver)
      li.style.backgroundColor = "#0061ff";
      li.style.color = "#ffff";
    }
  });
}

function taskCompleted(index) {
  toDo[index].completed = !toDo[index].completed; // Toggle the completed status
  localStorage.setItem("toDo", JSON.stringify(toDo));
  display(); // Re-render the list
}

function removeTask(index ) {

   toDo = []
    
  toDo.pop(index, 1); // Remove the specific task from the array
  localStorage.setItem("toDo", JSON.stringify(toDo));
  display(); // Re-render the list
  
}

let div = document.getElementById("mydiv");
function divRemove() {
  div.remove();
}








