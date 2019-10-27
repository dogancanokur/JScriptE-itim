const element = document.querySelector('#clear-todos');

console.log(element);


// Element Özellikleri

// console.log(element.id); // id için
// console.log(element.innerHTML); // innerHTML

console.log(element.className);
console.log(element.classList); // classlar dizi halinde geliyor

console.log(element.classList[1]); // btn-dark -- dizinin içeriğini alıyoruz.

//- --- --- --- -
console.log(element.textContent); // sadece yazıları alır
console.log(element.innerHTML); // bütün içeriği almak için

console.log(element.href); // nereye gittiği
console.log(element.style); // css style declaration

// Style ve element özelliklerini değiştirmek

element.className = 'btn btn-primary';
// element.className = 'btn btn-danger';
// element.className = 'btn btn-warning';
// element.className = 'btn btn-success';

element.style.color = 'yellow';
element.style.fontSize = '25px';

element.href = 'https://google.com/'; // yeni sekmede gooogle açmak
element.target = "_blank";

// element.textContent = "Listeleri Sil";
// element.textContent = '<span>Sil</span>'; // içeriği text olarak ekler
// element.innerHTML = '<span>Sil</span>'; // içeriği html ekler

console.log(element.children[0]);

const liElements = document.querySelectorAll('.list-group-item');

liElements.forEach(function(el){
    el.style.color = "white";
    el.style.background = "#000";
});

let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(4)");

let evenElement = document.querySelectorAll("li:nth-child(even)"); // çifleri seçtik even ile
evenElement.forEach(function(el){
    el.style.color = "yellow";
    el.style.background = "blue";
});