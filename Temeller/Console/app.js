console.log(["Ahmet", "Doğan", "Kübra"]);
console.warn("This is warning message.");
console.info("Bilgi");

// primitive types

var number = 20;
var sayName = "My name is Dogan";

console.log(sayName);
console.log("number is " + number);

console.log(number + " type of is " + typeof number);
console.log(sayName + " type of is " + typeof sayName);

var boolean = true;
console.log(boolean + "'s type of " + typeof boolean);

var aNull = null;
// null is a variable that takes nothing.
console.log(aNull + " is type of " + typeof aNull);
// null is a primitive type but null's type of object (this is trick)

var aUndefined;
console.log("undefined types of is " + typeof aUndefined);

// reference data types
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log("number array's type of is " + typeof numbers);
console.log("numbers array's first element is " + numbers[0]);

var person = {
    name: "Dogan",
    age: 25
}

console.log(person + " type of " + typeof person);

var date = new Date();
console.log("Date is " + date);

var functionVariable = function() {
    console.log("Hello im function");
}

console.log(functionVariable);
console.log(typeof functionVariable);

// others

var number1 = 10;
var number2 = number1;
console.log(number1,number2);

var array1 = [1,2,3,4];
var array2 = array1;

console.log("default value = " + array2[1]);

array1[1] = 122;
// array2 nin de değeri değişti çünkü referans değer
console.log("new value = " + array2[1]);

