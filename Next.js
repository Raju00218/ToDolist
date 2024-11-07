let toDo = []
 
 

 function addTask(){
   // value getting from input field and pushing in empty array
    let inputValue = document.getElementById("to-doEl").value;
    toDo.push(inputValue);
   //  clearing the input after task added
    document.getElementById("to-doEl").value = "";
    console.log(toDo)

    function display(){
      // grabing th ul element and store in ul name  variable
     let ul = document.getElementById("list-toDo");
     ul.innerHTML ="";
      // for foreach loop iterates the each array and create a list evrey iteratuion
     toDo.forEach((item, index) => {
        let checkButton = document.createElement("input");
           checkButton.type = "checkbox";
           checkButton.id = "checked";
           checkButton.onclick = taskCompleted;

           function taskCompleted(){

            checkButton.remove()
            let taskOver = document.createElement("div")
            taskOver.textContent ="Complited"
            li.prepend(taskOver)
            if(checkButton.checked){
                 li.style.backgroundColor= "#0061ff"
                 li.style.color ="#ffff"
                button.style.backgroundColor ="#f6fff8"
                button.style.color= "#001427"
            }
         }
       let buttonRemove = document.createElement("button");
        buttonRemove.id = "remove";
        buttonRemove.textContent ="X"
        buttonRemove.onclick = removeTask;

        let  li = document.createElement("li");
         li.id = "task-list"
         li.textContent = `  ${item}`
         ul.appendChild(li)
         li.append(buttonRemove)
         li.prepend(checkButton)
         

        

         function removeTask(){
            console.log("removed")
            toDo.pop()
            li.remove();
            console.log(toDo)
          
           
        }
        
     });
    }
   //  display function use the dom element for list 
    display()
  
 }

  let div = document.getElementById("mydiv")
 function divRemove(){
    div.remove()
 }
 

 

 
 








