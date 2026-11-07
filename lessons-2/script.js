//Дз-2
//(№ 1)
// За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач

const userName = prompt("Ведіть своє імʼя?");
alert("Hello, " + userName + "! How are you?");

//(№ 2)
//Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів
const firstNumber = Number(prompt("Введіть перше число:"));
const secondNumber = Number(prompt("Введіть друге число:"));

const numbersSum = firstNumber + secondNumber;
const numbersDifference = firstNumber - secondNumber;
const numbersProduct = firstNumber * secondNumber;
const numbersQuotient = firstNumber / secondNumber;

console.log("Сума:", numbersSum);
console.log("Різниця:", numbersDifference);
console.log("Добуток:", numbersProduct);
console.log("Частка:", numbersQuotient);

//(№ 3)
//Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні
const firstNumber1 = Number(prompt("Введіть перше число:"));
const secondNumber2 = Number(prompt("Введіть друге число:"));
const numResultat = firstNumber1 === secondNumber2;
alert(numResultat);

//(№ 4)
//Визначити середнє арифметичне трьох чисел
const oneNumber = 2;
const twoNumber = 4;
const threeNumber = 9;
const averageNumber = (oneNumber + twoNumber + threeNumber) / 3;
console.log("Середнє арифметичне:", averageNumber);

//(№ 5)
//Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)
let fiveNumber = 12345;

const remainderNumber5 = fiveNumber % 10;
fiveNumber = Math.floor(fiveNumber / 10);

const remainderNumber4 = fiveNumber % 10;
fiveNumber = Math.floor(fiveNumber / 10);

const remainderNumber3 = fiveNumber % 10;
fiveNumber = Math.floor(fiveNumber / 10);

const remainderNumber2 = fiveNumber % 10;
fiveNumber = Math.floor(fiveNumber / 10);

const remainderNumber1 = fiveNumber % 10;
fiveNumber = Math.floor(fiveNumber / 10);

console.log(
  remainderNumber1,
  remainderNumber2,
  remainderNumber3,
  remainderNumber4,
  remainderNumber5,
);
