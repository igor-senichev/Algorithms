function findMaxChar(str) {
  const charCount = {};
  let maxChar = '';
  let maxCount = 0;

  // Заполнение объекта charCount
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;

    // Поиск максимально часто встречаемого символа
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }

  console.log(`${maxChar} - повторяется ${maxCount} раз(а)`);
}
