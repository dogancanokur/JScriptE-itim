function sayHi(name) {
    if (typeof name == undefined) {
        document.getElementById("merhaba").innerHTML = `Merhaba`;

    } else {
        document.getElementById("merhaba").innerHTML = `Merhaba ${name}`;
    }
}

sayHi("Doğancan"); // function call

// sayHi();

function sayHi2(name = "Doğan") {
    if (typeof name == undefined) {
        document.getElementById("merhaba").innerHTML = `Merhaba`;

    } else {
        document.getElementById("merhaba").innerHTML = `Merhaba ${name}`;
    }
}

sayHi2();
sayHi2("Kübra");

function sum(number1, number2) {
    return number1 + number2;
}

function square(number) {
    return number * number;
}

document.getElementById("toplam").innerHTML = sum(12, 2) + square(2);
// document.getElementById("toplam").innerHTML = sum(12, 2) + square(); // NaN hatası verir

const merhabaDe = function () {
    console.log("merhaba");
}

merhabaDe();

// Immediately Invoked Function Expression (IIFE)
// Tanımlandığı yerde çalışan fonksiyon 

(function (string) {
    console.log("IIFE " + string);
})("IIFE");

// Object içi fonksiyon
const database = {
    host: "localhost",
    add: function () {
        console.log("Eklendi");
    },
    get: function () {
        console.log("Elde Edildi");

    },
    update: function (id) {
        console.log(`Id: ${id} Güncellendi`);
    },
    delete: function (id) {
        console.log(`Id : ${id} Silindi`);
    }
}

database.add();
database.delete(10);