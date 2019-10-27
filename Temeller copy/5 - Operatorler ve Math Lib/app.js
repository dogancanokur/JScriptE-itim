let value;
const a = 1;
const b = 10;

// aritmetik operatörler

value = a + b;
value = a - b;
value = a * b;
value = a / b;
value = a % b;

console.log(value);

// Math Kütüphanesi

value = Math.PI;
console.log(value);

value = Math.E;
console.log(value);

// yuvarlama
value = Math.round(3.4);
console.log(value);

value = Math.round(3.5);
console.log(value);

value = Math.round(3.6);
console.log(value);

// yukarı yuvarlama
value = Math.ceil(3.4);
console.log(value);

// aşağı yuvarlama
value = Math.floor(3.4);
console.log(value);

// karakök almak
console.log(Math.sqrt(16));

// mutlak değer
console.log(Math.abs(-25));

// üs almak
console.log(
    Math.pow(4, 2)
);

// max ve min metodları
console.log(
    Math.max(12,34,5,6,5)
);

console.log(
    Math.min(12,34,5,6,5)
);

// 0 1 arası değer üretiyor
console.log(
    Math.random()
);

// 0 ile n sayı arası değer için
console.log(
    // eğer tam sayı değerler istersek bunu biz floor vs ile aşağı yada yukarı olarak yuvarlayabiliriz.
    Math.floor( Math.random() * 20 )
);

