function handleKeyDown(event) {
    if(event.key === 'Enter') {
        addTodo();
    }
}

const todoList = [{
    name:'make dinner',
    dueDate: '2022-12-22'
 }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
 } ];

renderTodoList();


function renderTodoList() {
    
let todoListHTML = '';

todoList.forEach(function(todoObject, index) {

    const { name, dueDate } = todoObject;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>     
    <button class="delete-btn" onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
    ">Delete</button>
    `;
    todoListHTML += html;
});



document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
    const inputElement = document.querySelector('.js-todo-input');

    const todoText = inputElement.value;

    const dateInputElement = document.querySelector('.js-todo-date');
    const dueDate = dateInputElement.value;


    todoList.push({
        name: todoText,
        dueDate: dueDate
    });
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}