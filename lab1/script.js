var a = 10;
let b = false;
const c = "Константа";

console.log("Тип a (var):", typeof a);      
console.log("Тип b (let):", typeof b);     
console.log("Тип c (const):", typeof c);     

let student = {
    імя: "Ірина",
    вік: 19,
    студент: true
};

student.університет = "КНУ";
console.log("Об'єкт student:", student);

b = "тепер це рядок";
console.log("Змінене b:", b, "| Новий тип:", typeof b);

try {
    c = 123;
} catch (error) {
    console.log("Помилка при зміні const:", error.message);
}
