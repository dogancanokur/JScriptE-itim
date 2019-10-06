let value;

let numbers = [1, 2, 3, 4, 5];
// const numbers = new Array(1, 2, 3, 4, 5);
const langs = ["Php", "C#", "Abap", "Java", "C+"];

console.log(langs.length);
console.log(langs[1]);

// son elemanı almak
console.log(langs[langs.length - 1]);

// herhangi bir elemanı değiştirmek
numbers[2] = 123;
console.log(numbers[2]);

// index of - eleman kaçıncı sırada
console.log(numbers.indexOf(123));

// arrayin sonuna eklemek
numbers.push(2000);
console.log(numbers);

// arrayin başına eklemek
numbers.unshift(456132);
console.log(numbers);

// sondan değer silmek
numbers.pop();
console.log(numbers);

// başından eleman silmek
numbers.shift();
console.log(numbers);

// belirli bir aralığı silmek
numbers.splice(0, 3);
console.log(numbers);

numbers = [9, 1, 3, 6, 5];

// arrayi tam tersine çevirmek
numbers.reverse();
console.log(numbers);

// sıralamak
numbers.sort();
console.log(numbers);
// ama sortta bi garip bakış açısı var js nin
numbers = [65, 34, 23, 5];
numbers.sort();
console.log(numbers);
// 5 burada ortada oldu. çünkü sort ilk sayıya bakıyor (23 -> 2) (34 -> 3) (5 -> 5)

// tam olarak sıralasın istiyorsak 
// küçükten büyüğe
let lessToGreat = numbers.sort(function (x, y) {
    return x - y;
});
console.log(lessToGreat);
// büyükten küçüğe
let greatToLess = numbers.sort(function (x, y) {
    return y - x;
});
console.log(greatToLess);
