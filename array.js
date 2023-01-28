{
    // const arr = ["rama", "fajar", "fadhillah"];

    // arr.forEach((value, index) => {
    //     console.info(`${index} : ${value}`);
    // });
}

{
    // array queue
    const queue = [];

    queue.push("Rama");
    queue.push("Fajar");
    queue.push("Fadhillah");

    // console.info(queue.shift());
    // console.info(queue.shift());
    // console.info(queue.shift());
    // console.info(queue.shift());
}
{
    // array stack
    const stack = [];
    stack.push("Rama");
    stack.push("Fajar");
    stack.push("Fadhillah");

    // console.info(stack.pop())
    // console.info(stack.pop());
    // console.info(stack.pop());
    // console.info(stack.pop());
}
{
    // array search
    const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

    console.info(source.find(value => value > 3));
    // console.info(source.findIndex(value => value > 3));
    // console.info(source.includes(7));
    // console.info(source.indexOf(5));
    // console.info(source.lastIndexOf(5));
}
{
    // array filter
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const genap = numbers.filter(value => value % 2 === 0);
    const ganjil = numbers.filter(value => value % 2 === 1);

    // console.info(numbers);
    // console.info(genap);
    // console.info(ganjil);
}
{
    // array transform
    const names = ["Rama", "Fajar", "Fadhillah"];
    const namesUpper = names.map(value => value.toUpperCase());
    console.info(namesUpper);

    const nameReduce = names.reduce((before, value) => before + " " + value);
    console.info(nameReduce);

    const nameReduceRight = names.reduceRight((before, value) => before + " " + value);
    console.info(nameReduceRight);

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const total = numbers.reduce((before, value) => before + value);
    console.info(total);
}