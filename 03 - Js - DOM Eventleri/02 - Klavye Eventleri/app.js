// KEYPRESS

// document.addEventListener("keypress",run);
// function run(e){
//     console.log(e.which + " = " + e.key); // hangi tuşa basıldı
// }

/* -----------------------------*/

// KEYDOWN
// tuşa basınca tetiklenir eli kaldırana kadar çalışır

// document.addEventListener("keydown", run);
// function run(e){
//     console.log(e.key);
// }
    
/* -----------------------------*/
    
// KEYUP
// tuşu bırakınca tetiklenir

// document.addEventListener("keyup", run);
// function run(e) {
//     console.log(e.key);
// }

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
    // console.log(e.target.value); // event içerisinde olan değeri almak
}
