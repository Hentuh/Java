console.log("1. Парні числа від 1 до 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("\n2. Числа від n до 1:");
let n = 5; 
while (n >= 1) {
  console.log(n);
  n--;
}

console.log("\n3. Введення позитивного числа:");
let userInput;
do {
  userInput = Number(prompt("Введіть позитивне число:"));
} while (userInput <= 0);
console.log("Ви ввели позитивне число:", userInput);

console.log("\n4. Ключі та значення обʼєкта:");
let student = {
  імʼя: "Олег",
  вік: 20,
  студент: true
};
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

console.log("\n5. Масив у зворотному порядку:");
let numbers = [5, 10, 15, 20];
for (let num of numbers.slice().reverse()) {
  console.log(num);
}

console.log("\n6. Робота з методами масивів:");
let values = [4, 9, 16, 25, 1, 11];

console.log("forEach():");
values.forEach(value => console.log(value));

let squares = values.map(value => value * value);
console.log("map():", squares);

let filtered = values.filter(value => value > 10);
console.log("filter():", filtered);
