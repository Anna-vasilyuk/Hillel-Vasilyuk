//Дз-3
//(№ 1)
//Дано два різні числа. Визначити, яке з них більше, а яке менше.
const number1 = 6;
const number2 = 77;
if (number1 > number2) {
  console.log("Більше число : ", number1);
  console.log("Менше число : ", number2);
} else {
  console.log("Більше число : ", number2);
  console.log("Менше число : ", number1);
}

//(№ 2)
//Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?
const fut1 = 0.305;
const km1 = 1000;

const num1Fut = 100;
const num2Km = 100;

const metersFromFeet = num1Fut * fut1; //30.5 метрів
const metersFromKm = num2Km * km1; //100000 метрів

if (metersFromFeet < metersFromKm) {
  console.log("Відстань у футах менша");
} else {
  console.log("Відстань у кілометрах менша");
}

//(№ 3)
//Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)
const a = 4;
const b = 16;

if (b % a === 0) {
  console.log("Перша відповідь : Число " + a + " є дільником числа " + b);
} else {
  console.log("Перша відповідь : Число " + a + " не є дільником числа " + b);
}

if (a % b == 0) {
  console.log("Друга відповідь : Число " + b + " є дільником числа " + a);
} else {
  console.log("Друга відповідь : Число " + b + " не є дільником числа " + a);
}

//(№ 4)
//Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.
const num = 19201;
const resultat = num % 10;

if (resultat % 2 === 0) {
  console.log("Остання цифра парна : " + resultat);
} else {
  console.log("Остання цифра непарна : " + resultat);
}

//(№ 5)
//Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
const myNumber = +prompt("Введіть двозначне число");

const resultNum = Math.floor(myNumber / 10);
const lastDigit = myNumber % 10;

if (resultNum > lastDigit) {
  console.log("Перша цифра більша");
} else if (resultNum === lastDigit) {
  console.log("Вони однакові");
} else {
  console.log("Друга цифра більша");
}

//(№ 6)
// Дано тризначне число.

// Визначити чи є парною сума його цифр.
// Визначити, чи кратна сума цифр п'яти.
// Визначити чи є добуток його цифр більше 100.

const myNum = 321;

const oneNum = Math.floor(myNum / 100);
const twoNum = Math.floor((myNum % 100) / 10);
const threeNum = myNum % 10;

const sumNum = oneNum + twoNum + threeNum;

// Визначити чи є парною сума його цифр.

if (sumNum % 2 === 0) {
  console.log("Сума цифр парна : " + sumNum);
} else {
  console.log("Сума цифр непарна : " + sumNum);
}

// Визначити, чи кратна сума цифр п'яти.

if (sumNum % 5 === 0) {
  console.log("Сума кратна 5 : " + sumNum);
} else {
  console.log("Сума не кратна 5 : " + sumNum);
}

const productNum = oneNum * twoNum * threeNum;

console.log("Наш добуток: " + productNum);

// Визначити чи є добуток його цифр більше 100.

if (productNum > 100) {
  console.log("Більше 100");
} else if (productNum === 100) {
  console.log("Добуток дорівнює 100");
} else {
  console.log("Менше 100");
}

//(№ 7)
// Дано тризначне число.

// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

const myNums = 344;

const onNum = Math.floor(myNums / 100);
const twNum = Math.floor((myNums % 100) / 10);
const threNum = myNums % 10;

const isStrictlyEqual = onNum === twNum;
console.log("Перша цифра и друга цифра чи однакові вони  : " + isStrictlyEqual);

const isStrictlyEqual2 = twNum === threNum;
console.log("Друга цифра и Третя  чи однакові вони : " + isStrictlyEqual2);

const isStrictlyEqual3 = onNum === threNum;
console.log("Перша цифра и Третя  чи однакові вони : " + isStrictlyEqual3);

const result = isStrictlyEqual && isStrictlyEqual2 && isStrictlyEqual3;
console.log("Усі три цифри однакові: " + result);

const result2 = isStrictlyEqual || isStrictlyEqual2 || isStrictlyEqual3;
console.log("Є хоча б дві однакові цифри " + result2);

//(№ 8)
//Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

const nNum = 123321;

const num1 = Math.floor(nNum / 100000);
const num2 = Math.floor((nNum % 100000) / 10000);
const num3 = Math.floor((nNum % 10000) / 1000);
const num4 = Math.floor((nNum % 1000) / 100);
const num5 = Math.floor((nNum % 100) / 10);
const num6 = nNum % 10;

const numEqual1 = num1 === num6;
const numEqual2 = num2 === num5;
const numEqual3 = num3 === num4;

const resultMirror = numEqual1 && numEqual2 && numEqual3;

if (resultMirror) {
  console.log("Дзеркальне число: " + nNum);
} else {
  console.log("Не дзеркальне число : " + nNum);
}

const nNum2 = 147741;

const num11 = Math.floor(nNum2 / 100000);
const num22 = Math.floor((nNum2 % 100000) / 10000);
const num33 = Math.floor((nNum2 % 10000) / 1000);
const num44 = Math.floor((nNum2 % 1000) / 100);
const num55 = Math.floor((nNum2 % 100) / 10);
const num66 = nNum2 % 10;

if (num11 === num66 && num22 === num55 && num33 === num44) {
  console.log("Дзеркальне число: " + nNum2);
} else {
  console.log("Не дзеркальне число : " + nNum2);
}
