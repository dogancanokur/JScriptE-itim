const filterInput = document.getElementById("filter");

// filterInput.onfocus = function(){
//     console.log("todo arandı");
// }

filterInput.addEventListener("focus",function(e){
    console.log("todo arandı");
    console.log(e);
    console.log(e.type);
    console.log();
    e.target.placeholder = "Todo Ara";
});
console.log(filterInput);

const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);
function submitForm(e){
    console.log("Submit Eventi");
    e.preventDefault(); // preventDefault -> submit eventinin default özxelliklerini engellemeiş oluopr sayfanın yenilenmesini istemiyoruz
}