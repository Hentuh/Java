var зміннаVar = 10;
let зміннаLet = 20;
const зміннаConst = 30;

console.log('Тип змінноїVar:', typeof зміннаVar);   
console.log('Тип змінноїLet:', typeof зміннаLet);   
console.log('Тип змінноїConst:', typeof зміннаConst); 

let студент = {
  імʼя: 'Андрій',
  вік: 21,
  студент: true
};

студент.університет = 'КНУ';
console.log('Обʼєкт студент:', студент);

console.log('До зміни зміннаLet:', зміннаLet, typeof зміннаLet);
зміннаLet = "тепер рядок";
console.log('Після зміни зміннаLet:', зміннаLet, typeof зміннаLet);

try {
  зміннаConst = 50; 
} catch (error) {
  console.error('Помилка при зміні const:', error.message);
}
