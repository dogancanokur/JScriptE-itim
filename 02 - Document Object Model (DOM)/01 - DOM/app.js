console.log(window);

// nextSibling kardeş özelliği div içinde 3 p elementi varsa bunlar sibling oluyor

console.log(window.document);
console.log(document);

console.log(document.all);

console.log(document.all.length); // kaç tane element var?

console.log(document.all[document.all.length - 1]);

const elements = document.all;

// for (let index = 0; index < elements.length; index++) {
//     const element = elements[index];
//     console.log(element);  
// }

// document.all da forEach kullanılamaz!

// elements.forEach(function(element) {
//     console.log(element);
// });

const collections = Array.from(document.all);

console.log(typeof collections);

// collections.forEach(function(collection){
//     console.log(collection);
// });

console.log(document.head);
console.log(document.body);

console.log(document.all[8]);

console.log(document.location);

console.log(document.location.port);

console.log(document.URL);

console.log(document.characterSet);

console.log(document.scripts); // sayfada olan scriptler
// nerede dahil edildiğine göre sayı değişebilecektir
// örneğin html de app.js yi en üste alırsak 1 yazacaktır.

console.log(document.links); // sayfada olan linkler
console.log(document.links[0]);

console.log(document.links[document.links.length - 1]); // son link
console.log(document.links[document.links.length - 1].getAttribute("class")); // özelliği almak
console.log(document.links[document.links.length - 1].getAttribute("href")); // özelliği almak

console.log(document.links[document.links.length - 1].className);
console.log(document.links[document.links.length - 1].classList);

// Formlar

console.log(document.forms);
console.log(document.forms.length);
console.log(document.forms[0]);
console.log(document.forms["form"]);

console.log(document.forms[0].id);
console.log(document.forms[0].getAttribute("id"));

console.log(document.forms[0].method); // get mi post mu?? // default olarak get 
document.forms[0].method = "post";
console.log(document.forms[0].method); // get mi post mu?? // default olarak get 

