const person = {
    firstName: "Rama",
    middleName: "Fajar",
    lastName: "Fadhillah",
    address: {
        country: "Indonesia",
        city: "Jakarta"
    },
    hobbies: ["Coding", "Reading"]
};

const json = JSON.stringify(person);
console.info(json);
const jsonObject = JSON.parse(json);
console.info(jsonObject);