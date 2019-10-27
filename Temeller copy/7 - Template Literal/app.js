// ecma 6 ile geldi template literal

const name = "Doğancan Okur";
const department = "Development";
const salary = 4500;

const bilgi = "İsim = " + name + "\n" + "Departman = " + department + "\n" + "Maaş = " + salary;
console.log(bilgi);

// bunu kolaylıkla template literal ile yapabiliriz.

const listHtml = `İsim = ${name}\nDepartman = ${department}\nMaaş = ${salary}`;
console.log(listHtml);

const list =
    "<ul> " +
    "<li>" + name + "</li>" +
    "<li>" + department + "</li>" +
    "<li>" + salary + "</li>" +
    "</ul>";

document.getElementById("liste").innerHTML = list;

function tempLitList() {
    return "Template Literal List";
}

const tempList = `
<h5>${tempLitList()}</h5>
<ul>
    <li>${name}</li>
    <li>${department}</li>
    <li>${salary}</li>
</ul> `;

document.getElementById("liste").innerHTML = tempList;