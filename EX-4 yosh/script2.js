let cost = Number(prompt("init shop cost: ($)"));
let firstUsluga = cost * 0.2;
let secondUsluga = cost * 0.15;

if (50 > cost) {
  alert(` sizning uslugangiz(20%): ${firstUsluga}$
  sizning xarajatlaringiz: ${cost - firstUsluga}$
  sizning umumiy to'lov summangiz: ${cost}$`);
} else if (50 <= cost && cost <= 300) {
  alert(`sizning uslugangiz(15%): ${secondUsluga}$
  sizning xarajatlaringiz: ${cost - secondUsluga}$
  sizning umumiy to'lov summangiz: ${cost}$`);
} else {
  alert(`sizning uslugangiz(20%): ${firstUsluga}$
  sizning xarajatlaringiz: ${cost - firstUsluga}$
  sizning umumiy to'lov summangiz: ${cost}$`);
}

// Ternary;
// let age = 40;
// age < 50 ? console.log("yosh ekansiz") : console.log("qaribsiz");

// Functions
/*let birthday = Number(prompt("When is birthday?"));
let nowYear = Number(prompt("enter the current year"));
alert("enter the console");

function hisobla(birthday, nowYear) {
  let yosh = nowYear - birthday;
  return yosh;
}
console.log(hisobla(2000, 2022));*/
