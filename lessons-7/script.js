//Дз-7
//(№ 1)
//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] == item) {
      array.splice(i, 1);
      i--;
    }
  }
}

removeElement(array, 5);
console.log(array);
