function calculateNumbers() {
  const numbers = [];

  for (let i = 0; i < 10; i++) {
    const maxRandomNumbers = 100;
    let randomNumber = Math.floor(Math.random() * maxRandomNumbers) + 1;
    numbers.push(randomNumber);
  }

  const evenNumbers = [];
  const oddNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }
  }

  console.log(`Четные числа: ${evenNumbers}. Количество: ${evenNumbers.length}`);
  console.log(`Нечетные числа: ${oddNumbers}. Количество: ${oddNumbers.length}`);
}

calculateNumbers();
