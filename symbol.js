const firstName = Symbol()
const lastName = Symbol();

const person = {};
person[firstName] = "Rama";
person[lastName] = "Fajar";

console.info(person);
console.info(person[firstName]);
console.info(person[lastName]);

const student = {};
student[Symbol.for("name")] = "Rama";
student[Symbol.for("class")] = "TI16";

console.info(student);
console.info(student[Symbol.for("name")]);
console.info(student[Symbol.for("class")]);