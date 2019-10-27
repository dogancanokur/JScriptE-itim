// var
var a = 20;
console.log(a);

a=12;
console.log(a);

var a;
console.log(a);
// let
// lette tanımlanmış olan tekrardan tanımlanamaz.
// var tanımlanabilir
let b = 25;
console.log(b);

b = 24;
console.log(b);

// const
const c = 20;
console.log(c);
// yeni değer atılamaz


function name() {
    let number1 = 24;
    var number2 = 24;

}
try {
    console.log(number1);
} catch (error) {
    console.log("number1 basılamadı");
}

try {
    console.log(number2);
} catch (error) {
    console.log("number2 basılamadı");
}

const array = [1,2,3,4,5];
console.log(array);

array.push(6);
console.log(array);
// array olduğu için eklenebiliyor. çünkü primitive değil