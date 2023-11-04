const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector('#task-title-input');
const button = document.querySelector('#add-task-button');
const todoListUl = document.querySelector('#todo-list');

let tasks = [];

function renderTaskOnHTML(taskTitle, done = false) {
    const li = document.createElement('li'); 
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');

    input.addEventListener('change', (event) => {
        const liToToggle = event.target.parentElement;
        const spanToTogle = liToToggle.querySelector('span');
        const done = event.target.checked;
                
        if(done) {
            spanToTogle.style.textDecoration = 'line-through';
        } else {
            spanToTogle.style.textDecoration = 'none';
        }

        tasks = tasks.map(element => {
            if(element.title === spanToTogle.textContent) {
                return {
                    title: element.title,
                    done: !element.done
                }
            }
            return element;
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    input.checked = done;
    
    const span = document.createElement('span');
    span.textContent = taskTitle;

    if(done) span.style.textDecoration = 'line-through';

    const button = document.createElement('button');
    button.textContent = 'Remover';

    button.addEventListener('click', (event) => {
        const liToRemove = event.target.parentElement;
        const titleToRemove = liToRemove.querySelector('span').textContent;
        todoListUl.removeChild(liToRemove);
        
        tasks = tasks.filter(element => element.title !== titleToRemove);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    todoListUl.appendChild(li);
};

window.onload = () => {
    const tasksOnLocalStorage = localStorage.getItem('tasks');
    if(!tasksOnLocalStorage) return;
    tasks = JSON.parse(tasksOnLocalStorage);
    tasks.forEach(t => {
        renderTaskOnHTML(t.title, t.done);
    });
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskTitle = taskTitleInput.value;
    if(taskTitle.length < 3) {
        alert('Sua tarefa precisa ter, pelo menos, 3 caracteres')
        return;
    }

    tasks.push({
        title: taskTitle,
        done: false
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTaskOnHTML(taskTitle);

    taskTitleInput.value = '';
});


