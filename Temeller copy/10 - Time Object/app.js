// şimdiki zamanı al
let now = new Date();
console.log(now);

// MM-dd-yyyy hh:ss:ms
let birthDay = new Date("9-14-1994 12:15:00");
console.log(birthDay);

let newBirthDay = new Date("9/30/1994");
console.log(newBirthDay);

console.log(birthDay.getFullYear()); // 1994
console.log(birthDay.getMonth());
console.log(birthDay.getDay()); // pazar 0 dır haftanın günün yazar wed = 3

console.log(birthDay.getHours()); // saat
console.log(birthDay.getUTCDate()); // gün sayı olarak

birthDay.setMonth(7); // ayı ağustos yaptık ocak 0 dan başlıyor bu yüzden 7 ağustos
console.log(birthDay.getMonth());

console.log(birthDay);





