// alert("This is alert message.");

// let name  = prompt("What's your name?");

// console.log(window);

// const answer = confirm("Are u sure?");
// console.log(answer);

// if (answer) {
//     console.log("You're sure");
// } else {
//     console.log("U're not sure");
// }

// let answerNumber = prompt("2 + 2 = ?");

// console.log("answerNumber is " + typeof answerNumber);

console.log(window.location);

//------------------

window.localStorage.setItem("dogan", "Okur");
console.log(window.localStorage.getItem("dogan"));

//------------------

// if(confirm("Do you want reload the page?")){
//     console.log("The page has been reloaded.");
//     window.location.reload();
// }else{
//     console.log("The page hasn't reloaded.");
// }

console.log(window.location.host);

console.log(window.location.protocol);

console.log("outerHeight = " + window.outerHeight);
console.log("innerHeight = " + window.innerHeight);

console.log("outerWidth  = " + window.outerWidth);
console.log("innerWidth  = " + window.innerWidth);

console.log(window.screen.orientation.type);

console.log(window.scrollX); // vertical
console.log(window.scrollY); // horizonal