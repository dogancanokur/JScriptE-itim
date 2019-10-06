let value;

value = String(123);
console.log(value);

value = String(3.14);
console.log(value);

value = String(true);
console.log(value);

value = String(function name() {
    console.log("merhaba");
});
console.log(value);

value = (3.14).toString();
console.log(value);

// sayiya cevirme
value = Number(123);
console.log(value);

value = Number("dogan");
console.log(value);
// NaN => not a number
console.log(typeof value);

value = Number("3.14");
console.log(typeof value);

value = parseFloat(value);
console.log(typeof value);

const test = 34 + "55";
console.log(test);

const test2 = 34 + 55;
console.log(test2 );