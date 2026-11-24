//Дз-7
//(№ 1)
//Створити сутність людини

//ім'я
//вік
//Метод виведення даних
//Створити сутність автомобіля:

//Характеристики автомобіля окремими властивостями
//Методи:

//Виведення на екран даних про цей автомобіль
//Присвоєння цього автомобіля власнику (записати в автомобіль об'єкт власника)
//Усі дані про людину та про автомобіль отримувати від користувача. Реалізувати необхідні перевірки на коректність введення (порожні поля, вік >18 в людини і т.д. у разі потреби).
//Максимально використовувати функції

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`Власник:${this.name}, вік: ${this.age}`);
  }
}

function createPerson() {
  const name = prompt("Введіть ім'я");
  const age = Number(prompt("Введіть свій вік"));

  if (!name || age < 18 || Number.isNaN(age)) {
    console.log("Помилка: перевірте дані користувача");
    return;
  }
  const person = new Person(name, age);
  return person;
}

class Car {
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  setOwner(owner) {
    if (owner instanceof Person) {
      this.owner = owner;
    } else {
      console.log("Помилка: власник повинен бути об'єктом Person");
    }
  }

  getInfo() {
    console.log(`${this.brand} ${this.model} ${this.year} ${this.color}`);

    if (this.owner) {
      this.owner.getInfo();
    } else {
      console.log("Власник: не призначений");
    }
  }
}

function createCar() {
  const brand = prompt("Введіть марку машини");
  const model = prompt("Введіть модель машини");
  const year = Number(prompt("Введіть рік випуску машини"));
  const color = prompt("Введіть колір машини");

  if (!brand || !model || Number.isNaN(year) || year <= 0 || !color) {
    console.log("Помилка: перевірте дані автомобіля");
    return;
  }

  const car = new Car(brand, model, year, color);
  return car;
}
const user = createPerson();
const car = createCar();
if (user && car) {
  car.setOwner(user);
  car.getInfo();
}
