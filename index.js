const textInputDOM=document.getElementById("todos-input");
const btnAddTodoDOM=document.querySelector("#add-todo");
const todosDOM=document.getElementById("todos")

let textInputValue="";
let todos=[];

textInputDOM.addEventListener("change",function(event){
textInputValue=event.target.value;
})

btnAddTodoDOM.addEventListener("click", addTodo)
function addTodo(e){
e.preventDefault();
todos.unshift({ "id":todos.length+1, "todoTitle":textInputValue});
textInputDOM.value="";
displayTodos()
}
function displayTodos(){
let result="";

if(todos.length==0){
    todosDOM.innerHTML= "Boş.";
}else{
todos.forEach((item)=>{
    result+=`
    <li>
        <span>${item.todoTitle}</span>
        <button onclick="deleteTodo(${item.id})"><a href="#">Sil</a></button>
    </li>
    `
});}
todosDOM.innerHTML = result;
}
function deleteTodo(id){
    let deletedId;
    for(let index in todos){
        if (todos[index].id == id) {
            deletedId = index;
        }
    }
    todos.splice(deletedId, 1);
    displayTodos();

}
displayTodos();

