#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
function rainbowText(text) {
    const rainbowColors = [
        chalk.red.bold.italic,
        chalk.yellow.bold.italic,
        chalk.green.bold.italic,
        chalk.blue.bold.italic,
        chalk.magenta.bold.italic,
        chalk.cyan.bold.italic
    ];
    let coloredText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        coloredText += color(text[i]);
    }
    return coloredText;
}
const currentDateTime = new Date();
const currentDate = currentDateTime.toLocaleDateString();
const currentTime = currentDateTime.toLocaleTimeString();
console.log(rainbowText(`\nDate: ${currentDate} \n Time: ${currentTime}`));
console.log();
console.log(rainbowText("\n\tCURRENCY CONVERTOR\n\t"));
console.log(chalk.bold.yellow("\n Welcome to Alizey Currency Convertor... \n"));
const currency = {
    USD: 1, //Base Currency
    EUR: 0.92, //European Currency
    JYP: 113, //Japenese Currency
    INR: 83.30, //Indian Rupee
    PKR: 277.54, //Pakistani Currency
    AUD: 1.65, //Australian Dollar
    CAD: 1.3 //Canadian Dollar
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.italic.bold.underline.cyan("Enter the currency you're converting from:"),
        type: "list",
        choices: ["USD", "EUR", "JYP", "INR", "PKR", "AUD", "CAD"]
    },
    {
        name: "to",
        message: chalk.italic.bold.underline.cyan("Enter the currency you want to convert to:"),
        type: "list",
        choices: ["USD", "EUR", "JYP", "INR", "PKR", "AUD", "CAD"]
    },
    {
        name: "amount",
        message: chalk.italic.bold.underline.cyan("Enter Amount"),
        type: "number"
    }
]);
let fromAmmount = currency[user_answer.from];
let toAmmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmmount; // USD base currency
let convertedAmount = (baseAmount * toAmmount).toFixed(2);
console.log("\n");
console.log(chalk.italic.bold.underline.magenta("Base value $1 = the rate of currency you're converting from :", fromAmmount));
console.log(chalk.italic.bold.underline.magenta("Base value $1 = the rate of currency you want to convert to:", toAmmount));
console.log(chalk.italic.bold.underline.magenta("Your asked the amount to convert :", amount));
console.log("\n");
console.log(chalk.yellowBright.italic.bold.underline.whiteBright("You will get amount:", convertedAmount));
console.log(chalk.bold.italic.underline.yellow("\nThankyou for using Alizey currency converter..."));
