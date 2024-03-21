#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\n\tWelcome to Simple Calculator\n");
// Asking questions from users through inquirer
const myCalc = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: "Enter 1st number:"
    },
    {
        type: "number",
        name: "secondNumber",
        message: "Enter 2nd number:"
    },
    {
        message: "What Operation do you want to perform:",
        type: "List",
        name: "operator",
        Choices: ['+', '-', '*', '/']
    },
]);
// console.log(myCalc);
let Value1 = myCalc.firstNumber;
let Value2 = myCalc.secondNumber;
if (myCalc.operator === "+") {
    console.log(chalk.yellowBright(`The Sum of two numbers is ${Value1 + Value2}`));
}
else if (myCalc.operator === "-") {
    console.log(chalk.gray(`The Difference between two numbers is ${Value1 - Value2}`));
}
else if (myCalc.operator === "*") {
    console.log(chalk.blueBright(`The Product of two numbers is ${Value1 * Value2}`));
}
else if (myCalc.operator === "/") {
    console.log(chalk.greenBright(`The Quotient of two numbers is ${Value1 / Value2}`));
}
else {
    console.log(chalk.redBright(`Please select a valid operation`));
}
;
