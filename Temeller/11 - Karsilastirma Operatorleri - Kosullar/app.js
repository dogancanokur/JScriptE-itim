// ==
// ===
// !=
// !==
// <
// >
// <=
// >=

console.log(2 == 2);
console.log("js" == "java");
11
console.log("2" == 2);

console.log(2 === "2"); // değerler ve tipler aynı mı? -- bu daha sağlıklı

console.log(4 != 2);

console.log(4 < 2);

console.log(4 > 2);

console.log(4 >= 2);

console.log(4 <= 2);

console.log(2 !== 5);

// ternany operator
console.log(2 !== 5 ? 4 : 2); // tek satır if 

console.log(!(4 == "4") ? "true" : "false");

console.log((6 < 54 && !(5 >= 4)) ? 31 : 3);

console.log(!true === false ? true : false);

console.log(5 < 3 || 3 < 3 ? true : false);


// if else

if (5 < 3) {
    console.log(true);

} else {
    console.log(false);
}

// let sayi = prompt("Sayı Gir");
sayi = 10

if (sayi < 10) {
    console.log("10 dan küçük");
} else if (sayi == 10) {
    console.log("10 a eşit");
} else {
    console.log("10 dan büyük");
}

if (10 < 23) console.log("if sonu doğru");


// switch case

// let key = 10;
let key = 20;
switch (key) {
    case 10:
        console.log("10");
        break;
    case 20:
        console.log("20");
        break;
    default:
        console.log("default");
        break;
}

let key2 = 20;
switch (key2) {
    case 10:
        console.log("10");
        break;
    case 20:
        console.log("20");
        // break olmazsa devam eder alttan
        // switch den çık demek
    case 30:
        console.log(30);
        break;
    default:
        console.log("default");
        break;
}
