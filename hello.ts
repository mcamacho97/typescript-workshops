// Greets the world
console.log("Hello World");

function greet(person:string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Mauricio", new Date());