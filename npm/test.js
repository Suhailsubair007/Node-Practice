const uppercase = require('upper-case').upperCase;

function greet(name){
    console.log(uppercase(`Hi my name is ${name}`));
}

greet("suhail subair an i am very happy");
module.exports = greet;
