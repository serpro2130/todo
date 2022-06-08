import "./styles.css";

import { Todo, TodoList } from "./classes";
import { crearTodoHTML } from "./js/componentes";

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHTML);

// const newTodo = new Todo('Aprender JavaScript');
// // todoList.nuevoTodo(newTodo);
// todoList.todos[0].imprimirClase();

 console.log('todos', todoList.todos);

// const tarea = new Todo("Aprender JavaScript!!!");
// todoList.nuevoTodo(tarea);
// console.log(todoList);

// tarea.completado = true;


// crearTodoHTML(tarea);

// localStorage.setItem('mi-key', 'ABC1234');
// sessionStorage.setItem('mi-key', 'ABC1234');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);

