class Калькулятор {
  додати(a, b) {
    return a + b;
  }

  відняти(a, b) {
    return a - b;
  }

  помножити(a, b) {
    return a * b;
  }
}

const calc = new Калькулятор();

let x = 8;
let y = 3;

console.log(`Додавання: ${x} + ${y} = ${calc.додати(x, y)}`);
console.log(`Віднімання: ${x} - ${y} = ${calc.відняти(x, y)}`);
console.log(`Множення: ${x} * ${y} = ${calc.помножити(x, y)}`);
