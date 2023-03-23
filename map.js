const map = new Map();
map.set("Name", "Rama Fajar");
map.set("Country", "Indonesia");

console.info(map);
console.info(map.get("Name"));
console.info(map.get("Country"));

for (const element of map) {
    console.info(`${element[0]} : ${element[1]}`);
}

map.forEach((value, key) => console.log(`${key} : ${value}`));

const set = new Set();
set.add("Rama");
set.add("Fajar");
set.add("Fadhillah");
set.add("Rama");

console.info(set);

set.forEach(value => console.info(value));