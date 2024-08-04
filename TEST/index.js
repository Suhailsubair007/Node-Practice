const printName = require('./test1'); // Corrected the require path
console.log(printName.getName());

printName.setName('Power rangers');
console.log(printName.getName());

const newprintName = require('./test1'); // Corrected the require path
console.log(newprintName.getName());

// Explanation of Module Caching
// First Load:

// When require('./test1') is executed for the first time in index.js, Node.js reads test1.js, executes it, and then caches the result. The new SuperHero("Spiderman") instance is created and exported.
// Caching:

// The result of require('./test1') is cached. This means the next time you require('./test1'), Node.js will not re-execute test1.js. Instead, it will return the cached instance of SuperHero.
// Accessing Cached Module:

// In index.js, printName is assigned the cached instance of SuperHero. When you call printName.getName(), it returns "Spiderman".