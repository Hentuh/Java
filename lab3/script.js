
let str = "Привіт";
let num = 42;
let bool = true;
let undef = undefined;
let nul = null;

console.log("1. Значення і типи змінних:");
console.log(str, typeof str);
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(undef, typeof undef);
console.log(nul, typeof nul); 

console.log("\n2. Явне перетворення:");
console.log(Number("123"), typeof Number("123"));  
console.log(String(456), typeof String(456));      
console.log(Boolean(""), Boolean(0), Boolean(null), Boolean(undefined), Boolean("Hello"));

console.log("\n3. Неявне перетворення:");
console.log("5" - 2); 
console.log("5" + 2);  
console.log("Рік: " + 2025);

console.log("\n4. Визначення типу:");
console.log(typeof 100);
console.log(typeof "text");
console.log(typeof false);
console.log(typeof null);      
console.log(typeof undefined);

console.log("\n5. Порівняння:");
console.log(5 == "5");    
console.log(0 == false);  
console.log(5 === "5");   
console.log(0 === false); 
console.log(null == undefined);  
console.log(null === undefined); 