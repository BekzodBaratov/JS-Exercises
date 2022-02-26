// let bills = [500, 400, 350, 200, 550, 800, 1200, 100, 250, 300];
// let usluga = [];
// let tulov = [];

// let usluga1;

// for (let i = 0; i < bills.length; i++) {
//   if (bills[i] < 300 || bills[i] > 50) {
//     usluga1 = bills[i] * 0.15;
//     usluga.push(usluga1);
//     // console.log(usluga);
//   } else {
//     usluga1 = bills[i] * 0.2;
//     usluga.push(usluga1);
//     // console.log(usluga);
//   }
// }
// console.log(usluga);

// ------------arrayni teskari chiqarish-------------------------

// let me = [500, 400, 350, 200, 550, 800, 1200, 100, 250, 300];

// for (let i = me.length - 1; 0 <= i; i--) {
//   console.log(me[i]);
// }

//-------har bir kunga topshiriqlarni bajarish ketma ketligi---------

// let incre = 3;
// for (let i = 1; 8 > i; i++) {
//   console.log(`${i}-kun`);

//   for (let j = 1; incre > j; j++) {
//     console.log(`${j}-mashq`);
//   }
//   incre++;
// }

// ----------haftada necha para borligini chiqaradigan js--------------

// let incre = 1;
// let arr = [
//   "--dushanba",
//   "--seshanba",
//   "--chorshanba",
//   "--payshanba",
//   "--juma",
//   "--shanba",
//   "--yakshanba",
// ];

// let sub = ["matem", "fizika", "tarix"];

// for (let i = 0; arr.length > i; i++) {
//   console.log(arr[i]);

//   for (let j = 0; incre > j; j++) {
//     console.log(sub[j]);
//   }
//   incre++;
// }

// ------------1 dan 20 gacha random boladi 10dan oshgan toq son chiqarsa random toxtaydi---------

// let numbers = Math.trunc(Math.random() * 20 + 1);

// while (numbers <= 10 || numbers % 2 !== 1) {
//   console.log(`topolmadis. sizning soningiz ${numbers}`);
//   numbers = Math.trunc(Math.random() * 20 + 1);
// }
// console.log(`Yutdingiz. sizning soningiz ${numbers}`);
