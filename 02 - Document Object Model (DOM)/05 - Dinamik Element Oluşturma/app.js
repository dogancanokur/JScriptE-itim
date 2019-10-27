// Yeni element oluşturma
// <a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

let cardBody = document.getElementsByClassName("card-body")[1];

const newLink = document.createElement("a");
newLink.id="clear-todos";
newLink.className = "btn btn-warning";
newLink.href = "https://google.com/";
newLink.target = "_blank";
newLink.innerHTML = "Google'a git."; // link hazır
// text node
newLink.appendChild(document.createTextNode("Farklı sayfaya git")); // içerik ekler ekstradan

// const text = document.createTextNode("Merhaba.");
// cardBody.appendChild(text); // yeni çocuk ekler

cardBody.appendChild(newLink);











console.log(newLink);