let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList.childNodes;

value = todoList.childNodes[0]; // 4 adet gelmesi gerekirken 9 adet geldi
// çünkü satır atlamaları da sayıyor

// Children özelliği

// children elementleri alır

value = todoList.children;
value = todoList.children[0];

value = todoList.children[todoList.children.length - 1]; // son children

value = todoList.children[2].textContent = "Yeni oluştu.";

value = cardrow.children;

value = cardrow.children[2].children[1].textContent = "Burası da değişti.";

value = todoList.children[0]; // altta olan ile aynı
value = todoList.firstElementChild;
value = todoList.lastElementChild;

value = todoList.children.length; // 4 element var altında
value = todoList.childElementCount; // 4 element var dedi

value = cardrow.parentElement; // ana elemanı (bir üstü)

value = cardrow.parentElement.parentElement.previousElementSibling; // önceki kardeşe gir yani head e gittik

value = todoList.children[0].nextElementSibling.nextElementSibling;

console.log(value);