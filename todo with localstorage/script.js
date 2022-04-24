let form = document.querySelector(".todoForm")///1
let input = document.querySelector(".todoInput")///1
let todoContainer = document.querySelector(".todoContainer")///1
let addBtn = document.querySelector(".todoAddBtn")
let deleteButtons;///8
let checkboxes;///12
let editButtons;///16






const addHtml = (todo) => {///5

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    const todoLeft = document.createElement("div")
    todoLeft.classList.add("todoLeft")

    const todoCbox = document.createElement("input")
    todoCbox.classList.add("todoCbox")
    todoCbox.type = "checkbox"
    todoCbox.checked = todo.isCompleted;

    const todoSpan = document.createElement("span")
    todoSpan.classList.add("todoSpan")
    todoSpan.textContent = todo.text;

    const todoRight = document.createElement("div")
    todoRight.classList.add("todoRight")

    const todoEdit = document.createElement("input")
    todoEdit.classList.add("todoEdit")
    todoEdit.type = "button"
    todoEdit.value = "Edit"

    const todoDelete = document.createElement("input")
    todoDelete.classList.add("todoDelete")
    todoDelete.type = "button"
    todoDelete.value = "Delete"

    todoLeft.appendChild(todoCbox)
    todoLeft.appendChild(todoSpan)

    todoRight.appendChild(todoEdit)
    todoRight.appendChild(todoDelete)

    todoDiv.appendChild(todoLeft)
    todoDiv.appendChild(todoRight)

    todoContainer.appendChild(todoDiv)




}
const startConfig = () => {
    //baslangic ayarları
    input.focus()
    const todos = JSON.parse(localStorage.getItem("todos"))///2
    if (!todos) {
       localStorage.setItem("todos", JSON.stringify([]))///3


    } else {
        
        todos.forEach(td => {///4
            addHtml(td)
        });
        deleteButtons = document.querySelectorAll(".todoDelete")///9
        checkboxes = document.querySelectorAll(".todoCbox")///13
        editButtons = document.querySelectorAll(".todoEdit")///16


    }



}



startConfig()///2


const addTodo = (e) => {///7
   // e.preventDefault();
    //console.log("çalıştı")

    const todoText = input.value
    const todo = {
        text: todoText,
        isCompleted: false,
    }


    let todos = JSON.parse(localStorage.getItem("todos"));

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));



    addHtml(todo);
    form.reset()






}

const deleter = (e) => {///11

    const todo = e.target.parentElement.parentElement;
    let text = todo.firstChild.children[1].textContent;
  
    let todos = JSON.parse(localStorage.getItem("todos"));

    todos = todos.filter(td => td.text != text)
    localStorage.setItem("todos", JSON.stringify(todos))




    todo.remove()

}

const CompleteTodo = (e) => {///15

    const todo = e.target.parentElement.parentElement;
    let text = todo.firstChild.children[1].textContent;
  
    let todos = JSON.parse(localStorage.getItem("todos"));

    todos.forEach(td =>{
        
    if(td.text === text){

        td.isCompleted= !td.isCompleted;
    }
    
    
    })


    localStorage.setItem("todos", JSON.stringify(todos))


}
const editor = (e)=>{///18

    const todo = e.target.parentElement.parentElement;
    let text = todo.firstChild.children[1].textContent;
  
    let todos = JSON.parse(localStorage.getItem("todos"));

    todos = todos.filter(td => td.text != text)
    localStorage.setItem("todos", JSON.stringify(todos))




    todo.remove()

    input.value = text;



}

addBtn.addEventListener("click", addTodo)///6
deleteButtons.forEach(deleteButton => {///10
    deleteButton.addEventListener("click", deleter)

});
checkboxes.forEach(checkbox => {///14
    checkbox.addEventListener("click", CompleteTodo)
});


editButtons.forEach(edit => {///17
    edit.addEventListener("click", editor)
    
});




