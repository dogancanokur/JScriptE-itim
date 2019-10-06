// While 
let index = 0;
while (index < 10) {
    console.log(index + 1 + " kez çalıştı");
    index++;
}

console.log(index);

while (index > 0) {
    console.log(index + " test");
    index--;
}
index = 10;
while (index > 0) {
    if (index == 5) {
        break;
    }
    console.log(index);
    index--;
}
console.log("************");

index = 0;
while (index < 10) {
    if (index == 3 || index == 5) {
        index++;
        continue;
    }
    console.log(index);
    index++;
}

console.log("************");

// Do while

index = 0;

do {
    console.log(index);
    index++;

} while (index < 10);

const langs = ["php", "java", "js"];
index = 0;
while (index < langs.length) {
    console.log(langs[index]);
    index++;
}

console.log("*********");
// for(i = 0 ; i < langs.length;i++){
for (let i = 0; i < langs.length; i++) {
    console.log(langs[i]);
}
console.log(typeof i);
// for da let tanımlarsak dışarıda undefined olur
// ama yapmazsak global scope olur

console.log("*********");
// ForEach

langs.forEach(element => {
    console.log(element);
});

console.log("*********");

langs.forEach(function (lang, index) { // callback metodu
    console.log(lang, index);
});

// map fonskiyonu
const users = [{
        name: "Doğan",
        age: 25
    },
    {
        name: "Kübra",
        age: 25
    },
    {
        name: "Ebru",
        age: 3
    }
];

const names = users.map(function (user) {
    return user.name;
});
console.log(names);

const ages = users.map(function (user) {
    return user.age;
});
console.log(ages);


const user = {
    name: "Doğan",
    age: 25
};

for (let key in user) {
    console.log(key, user[key]);
}