# Projeto Lista de Tarefas

<br>

<img width="800px" src="https://github.com/lucarauj/Front-end-em-React/blob/main/Front-end%20Din%C3%A2mico/lista-de-tarefas/lista-de-tarefas.png?raw=true">

<hr>
<br>

## Selecionando elementos DOM (Document Object Model) de uma página da web

```
const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector('#task-title-input');
const button = document.querySelector('#add-task-button');
const todoListUl = document.querySelector('#todo-list');
```

<hr>
<br>

## Criando novo elemento do tipo checkbox

```
const input = document.createElement('input');
input.setAttribute('type', 'checkbox');
```

<hr>
<br>

## Criando novo elemento do tipo button

```
const button = document.createElement('button');
button.textContent = 'Remover';
```

<hr>
<br>

## Criando um elemento lista e adicionando elementos dentro

```
const li = document.createElement('li'); 
li.appendChild(input);
li.appendChild(span);
li.appendChild(button);
```

<hr>
<br>

## Submetendo um formulário

```
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
```

- event.preventDefault():
>*evita que o formulário seja enviado de forma tradicional, o que faria a página ser recarregada;*
- const taskTitle = taskTitleInput.value:
>*obtém o valor digitado pelo usuário no campo input;*
- renderTaskOnHTML(taskTitle):
>*chama a função para adicionar a tarefa à interface do usuário.*
- taskTitleInput.value = '':
>*limpa o campo de entrada de texto taskTitleInput definindo seu valor como vazio, para que o usuário possa inserir outra tarefa;*

<hr>
<br>

## Ouvindo um evento "change"

```
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
```

- event.target.parentElement:
>*obtem o 'li' pai do elemento que disparou o evento;*
- liToToggle.querySelector('span'):
>*localiza o elemento 'span' dentro de 'li';*
- event.target.checked:
>*verifica se o checkbox está marcado;*
- spanToTogle.style.textDecoration = 'line-through':
>*aplica uma linha tracejada ao texto dentro do elemento 'span';*
- localStorage.setItem('tasks', JSON.stringify(tasks)):
>*armazena o array de tasks no armazenamento local do navegador (localStorage) após as atualizações, convertendo-a em uma string JSON;*

<hr>
<br>

## Carregando tarefas salvas no 'LocalStorage'

```
window.onload = () => {
    const tasksOnLocalStorage = localStorage.getItem('tasks');
    if(!tasksOnLocalStorage) return;
    tasks = JSON.parse(tasksOnLocalStorage);
    tasks.forEach(t => {
        renderTaskOnHTML(t.title, t.done);
    });
};
```

<hr>
<br>

# 👨🏼‍🎓 Aluno

Lucas Araujo

<a href="https://www.linkedin.com/in/lucarauj"><img alt="lucarauj | LinkdeIN" width="40px" src="https://user-images.githubusercontent.com/43545812/144035037-0f415fc7-9f96-4517-a370-ccc6e78a714b.png" /></a>
