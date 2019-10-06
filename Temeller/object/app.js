const programmer = {
    name: "Dogancan",
    surname: "Okur",
    age: 25,
    langs: ["Java", "JavaScript", "Abap", "Php"],
    address: {
        city: "Istanbul",
        district: "Sariyer",
        company: "HititCs"
    },
    work: function () {
        console.log("Programmer is working.");
    }
}

console.log(programmer);
console.log(programmer["name"]);
console.log(programmer.langs);
console.log(programmer.address.city + " " + programmer.address.district + " " + programmer.address.company);

const programmers = [{
        name: "Kubra",
        age: 25
    },
    {
        name: "Murat",
        age: 25
    }
];
document.body.innerHTML = programmers[0].name + programmers[0].age;
console.log(programmers[0].name);
