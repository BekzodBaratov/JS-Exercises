// base-11  if1
// let numFirst = Number(prompt("ixtiyori butun son kiriting Masalan: (24, -31)"));

// if (numFirst > 0) {
//   alert(`javob musbat bolsa 1 qoshiladi, Sizning javobingiz: ${numFirst}`);
// } else {
//   alert(`javob manfiy bolsa o'zgartirilmaydi, Sizning javobingiz: ${numFirst}`);
// }

// -------------base-11  if5 Nechta musbat, manfiy son borligini topish funksiyasi----------
// let numFirst = Number(prompt("ixtiyori butun son kiriting Masalan: (24, -31)"));
// let numSecond = Number(prompt("ixtiyori butun son kiriting Masalan:(24, -31)"));
// let numThird = Number(prompt("ixtiyori butun son kiriting Masalan: (24, -31)"));

// if (numFirst > 0 && numSecond > 0 && numThird > 0) {
//   alert("sizda 3 ta musbat 0 ta mafiy son bor");
// } else if (numFirst < 0 && numSecond < 0 && numThird < 0) {
//   alert("sizda 3 ta manfiy 0 ta musbat son bor");
// } else if (numFirst < 0 && numSecond > 0 && numThird > 0) {
//   alert("sizda 2 ta musbat 1 ta manfiy son bor");
// } else if (numFirst > 0 && numSecond < 0 && numThird > 0) {
//   alert("sizda 2 ta musbat 1 ta manfiy son bor");
// } else if (numFirst > 0 && numSecond > 0 && numThird < 0) {
//   alert("sizda 2 ta musbat 1 ta manfiy son bor");
// } else if (numFirst < 0 || numSecond < 0 || numThird < 0) {
//   alert("sizda 1 ta musbat 2ta manfiy son bor");
// }

// -------------tub sonni aniqlovchi ----------
// 1, 2, 3, 5, 7, 9, 11, 13, 17, 19, 23...

// for (let son = 1; son <= 100; son++) {
//   let bu_tub_son = true;
//   for (let bul = 2; bul < son; bul++) {
//     if (son % bul == 0) {
//       bu_tub_son = false;
//       break;
//     }
//   }
//   if (bu_tub_son == true) {
//     console.log(son);
//   }
// }

// --------base-11  if28 berilgan yilda necha kun borligini aniqlash-----

// let year = 2022;

// if (year % 4 !== 0) {
//   console.log("Bu yilda 365 kun bor");
// } else {
//   if (year % 100 == 0) {
//     console.log("Bu yilda 365 kun bor");
//   } else if (year % 400 == 0) {
//     console.log("Bu yilda 366 kun bor");
//   }

//   console.log("Bu yilda 366 kun bor");
// }

// --------base-11  if29 son haqida malumot berilsin -----

// let numFirst = 0;

// if (numFirst > 0) {
//   if (numFirst % 2 == 0) {
//     console.log(`Sizning soningiz: musbat juft ${numFirst}`);
//   } else {
//     console.log(`Sizning soningiz: musbat toq ${numFirst}`);
//   }
// } else if (numFirst < 0) {
//   if (numFirst % 2 == 0) {
//     console.log(`Sizning soningiz: manfiy juft ${numFirst}`);
//   } else {
//     console.log(`Sizning soningiz: manfiy toq ${numFirst}`);
//   }
// } else {
//   console.log(`Sizning soningiz: ${numFirst} ga teng`);
// }

// --------base-11  if30 son haqida malumot berilsin -----

// let numFirst = 488;

// if (0 <= numFirst && numFirst <= 9) {
//   if (numFirst % 2 == 0) {
//     console.log(`Sizning soningiz: Bir xonali juft son ${numFirst}`);
//   } else {
//     console.log(`Sizning soningiz: Bir xonali toq son ${numFirst}`);
//   }
// } else if (10 <= numFirst && numFirst <= 99) {
//   if (numFirst % 2 == 0) {
//     console.log(`Sizning soningiz:Ikki xonali juft son ${numFirst}`);
//   } else {
//     console.log(`Sizning soningiz:Ikki xonali toq son ${numFirst}`);
//   }
// } else if (100 <= numFirst && numFirst <= 999) {
//   if (numFirst % 2 == 0) {
//     console.log(`Sizning soningiz:Uch xonali juft son ${numFirst}`);
//   } else {
//     console.log(`Sizning soningiz:Uch xonali toq son ${numFirst}`);
//   }
// }
