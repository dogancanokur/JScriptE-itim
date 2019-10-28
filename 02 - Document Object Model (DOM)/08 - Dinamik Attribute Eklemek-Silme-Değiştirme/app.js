const todoInput = document.getElementById("todo");

let element;

element = todoInput;
element = todoInput.classList.length;
element = todoInput.classList;

todoInput.className = "form-control newClass";
todoInput.classList.add("addClass"); // dinamik ekleme

todoInput.classList.remove("newClass"); // dinamik silmek

element = todoInput;
element = todoInput.placeholder;

element = todoInput.getAttribute("placeholder");

todoInput.setAttribute("placeholder","Merhaba");
todoInput.setAttribute("title","Yazınız");

todoInput.setAttribute("required","true");
element = todoInput.hasAttribute("required");

todoInput.removeAttribute("name");
todoInput.removeAttribute("placeholder");
element = todoInput;

console.log(element);
