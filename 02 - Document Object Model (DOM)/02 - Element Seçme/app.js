// Id -- id unique dir.
console.log("------ID------");

let element;
element = document.getElementById("todo-form");

console.log(element);

// ClassName
console.log("-----CLASS----");

let classElement;
classElement = document.getElementsByClassName("list-group-item");
classElement = document.getElementsByClassName("card-header").length;
classElement = document.getElementsByClassName("card-header")[0];
console.log(classElement);

// Tag
console.log("-----TAG-----");

let tags;
tags = document.getElementsByTagName("li")

console.log(tags);

// tek metod ile hepsini yapabiliyoruz.
// QUERY SELECTOR
console.log("---QUERY SELECTOR---");
// sayfada ilk bulduğunu seçer

let qselector;
qselector = document.querySelector("#todo-form"); // ilk eleman için
qselector = document.querySelector(".list-group-item");

qselector = document.querySelectorAll(".list-group-item"); // bütün elemanlar için 
qselector = document.querySelectorAll(".list-group-item").length;

console.log(qselector);

document.querySelector("#add_todo").setAttribute("class", "btn btn-primary");