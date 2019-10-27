const todoList = document.querySelector("ul.list-group");

const todos = document.querySelectorAll("li.list-group-item");
// remove metodu ile rahatlıkla silebiliriz.

todos[1].remove(); // todo 2 silindi

// Remove Child

todoList.removeChild(todoList.lastElementChild); // todo 4 de gitti.

todoList.removeChild(todos[0]);

console.log(todoList);