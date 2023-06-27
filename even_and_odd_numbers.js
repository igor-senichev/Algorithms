let numbers = [];
for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  numbers.push(randomNumber);
}
let evenNumbers = [];
let oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  } else {
    oddNumbers.push(numbers[i]);
  }
}
console.log(`Четные числа: ${evenNumbers}. Количество: ${evenNumbers.length}`);
console.log(`Нечетные числа: ${oddNumbers}. Количество: ${oddNumbers.length}`);
