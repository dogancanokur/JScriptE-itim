// 3 Scope 
// Global Scope
var value1 = 10;
let value2 = 20;
const value3 = 30;

console.log(value1, value2, value3);


function func() {
    // Function Scope
    var value1 = 30;
    console.log("Expect 30 =>" + value1);
    value2 = 200;
}
func();

console.log("Expect 30 but result (global scope) => " + value1);
console.log("Expect 200  => " + value2);

if (true) {
    // Block Scope
    var a = 20;
    console.log(a);

    let b = 333;
    console.log(b);

}

console.log(a);
// console.log("B", b); // b is undefined

// block içerisinde olan var değişkenleri dışardada var oluyor.


var database = "123456";

// eğer bloc scope da tanımanıyorsa

if (true) {
    var database = "234";
}

console.log("Database pass", database);

// değişmesini istemediğimiz değişkenleri var ile tanımlayamayız

const dbPass = "123435";

if (true) {
    let dbPass = "123;"
    console.log(dbPass);
}

console.log(dbPass);