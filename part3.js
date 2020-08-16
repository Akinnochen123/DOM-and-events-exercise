/*For this assignment you will be combining your knowledge of DOM access and
events to build a todo app!
As a user, you should be able to:
● Add a new todo (by submitting a form)
● Mark a todo as completed (cross out the text of the todo)
● Remove a todo*/


window.onload = function(){
    var todoForm = document.getElementById("newTodoForm");
    var todoList = document.getElementById("todoList");

    todoForm.addEventListener("submit", function(event){
        event.preventDefault();

        var removeButton = document.createElement("button");
        removeButton.innerText = "X";

        var newTodo = document.createElement("li");
        newTodo.innerText = document.getElementById("task").value;

        todoList.appendChild(newTodo);
        newTodo.appendChild(removeButton);

        todoForm.reset();
    })

    todoList.addEventListener("click", function(event){
        if (event.target.tagName.toLowerCase() === 'li') {
            event.target.style.textDecoration = "line-through";
        }
        else if (event.target.tagName.toLowerCase() === 'button') {
            event.target.parentNode.remove();
        }
    })

}
