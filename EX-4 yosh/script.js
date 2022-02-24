alert(
  "yoshingizni yil, oy, kun, soat, minut hatto sekundda bilishni hohlaysizmi?"
);

let yil = Number(prompt("yoshingizni kiriting"));

let oy = yil * 12;
let kun = yil * 365;
let soat = yil * 365 * 24;
let minut = yil * 365 * 24 * 60;
let sekund = yil * 365 * 24 * 60 * 60;

console.log(`${yil} yil`);
console.log(`${oy} oy`);
console.log(`${kun} kun`);
console.log(`${soat} soat`);
console.log(`${minut} minut`);
console.log(`${sekund} sekundga kiribsiz tabriklayman!!!`);
