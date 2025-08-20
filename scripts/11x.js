function handleKeyDown(event) {
    if(event.key === 'Enter') {
        addTodo();
    }
}

const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name:'make dinner',
    dueDate: '2022-12-22'
 }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
 } ];

renderTodoList();


function renderTodoList() {
    
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const todoDueDate = todoList[i].dueDate;
    const todoName = todoList[i].name;

    //const { todoName, todoDueDate } = todoObject;

    const html = `
    <div>${todoName}</div>
    <div>${todoDueDate}</div>     
    <button class="delete-btn" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
    ">Delete</button>
    `;
    todoListHTML += html;

}

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

    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}