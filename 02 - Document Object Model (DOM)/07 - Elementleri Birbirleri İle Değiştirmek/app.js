// Replace -- değiştirmek
// <h5 class="card-title" id="tasks-title">Todolar</h5>
const cardbody = document.querySelectorAll(".card-body")[1];

// h5 ile h3 değiştiriyoruz.

const newElement = document.createElement("h3");

newElement.className = "card-title";
newElement.id = "task-title";
newElement.textContent = "Yeni Listeler";

// Eski Element

const oldElement = document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,oldElement);

console.log(newElement);
console.log(cardbody);