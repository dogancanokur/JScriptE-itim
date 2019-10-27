const firstName = "Dogancan";
const lastName = "Okur";

const langs = "Java,Abap,Php";

let value = firstName + " " + lastName;

console.log(value);

console.log(value = "Ahmet " + value);

console.log("firstName's lenght = " + firstName.length);

console.log(firstName.concat(" Ahmet ", lastName));

console.log(firstName.toLowerCase());

console.log(firstName.toUpperCase());

let stringWithSpace = " dogancan  ";
console.log(stringWithSpace);
console.log(stringWithSpace.trim());

value = firstName[0] + firstName[3] + firstName[6];
console.log(value);

// son karakter için
console.log("son karakter = " + firstName[firstName.length - 1]);

// g kaçıncı sırada ama + 1 eklendi. çünkü 0 dan başlıyor
console.log(firstName.indexOf("g") + 1);

// CharAt metodu
// aslında önceden olan firstName[0] gibi
console.log(firstName.charAt(0));
console.log(firstName[0]);

// split metodu ayırmak
let yazi = "merhaba , benim adim dogancan okur, hititcs de calisiyorum";
console.log(yazi.split(","));
console.log(yazi.split(",")[0]);
console.log(yazi.split(",")[1]);
console.log(yazi.split(",")[2]);

//  kata zamanı - bir metni log lara forlarla yaz.
let kata = "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.Neden Kullanırız? Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.";
let kataSplit = kata.split(".");
let kataLenght = kataSplit.length;

for (let i = 0; i < kataLenght; i++) {
    if (kataSplit[i] != "") {
        console.log(kataSplit[i] + ".");
    }
}
// kata bitti

// replace
console.log(langs);
console.log(langs.replace("Abap", "CSS"));

// içinde var mı? yok mu? -- contains
console.log(langs.includes("Abap"));
console.log(langs.includes("asd"));

