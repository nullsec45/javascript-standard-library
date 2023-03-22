{
    const person = {
        firstName: "Rama",
        lastName: "Fajar"
    }
    // freeze tidak bisa diubah, ditambah dan dihapus
    // Object.freeze(person);

    // Seal hanya bisa diubah saja;
    Object.seal(person);
    person.firstName = "Entong";
    delete person.lastName;
    console.log(person);
}

{
    // Obnject Assign
    const target = {
        firstName: "Rama"
    }
    const source = {
        lastName: "Fajar"
    }
    Object.assign(target, source);
    console.info(target);
}

{
    // Object property name & value
    const person = {
        firstName: "Rama",
        lastName: "Fajar"
    };

    console.info(Object.values(person));
    console.info(Object.getOwnPropertyNames(person))
}