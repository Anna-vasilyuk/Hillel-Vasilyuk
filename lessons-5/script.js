//Дз-5
//(№ 1)
//Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів із набору characters довжиною length.

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
function generateKey(strLength, strCharacters) {
  let key = "";
  for (let i = 0; i < strLength; i++) {
    let randomIndex = Math.floor(Math.random() * strCharacters.length);
    key += strCharacters[randomIndex];
  }
  return key;
}
