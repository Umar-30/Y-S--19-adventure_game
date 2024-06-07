#! /usr/bin/env node
import inquirer from "inquirer";
//import chalk from npm
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuleDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuleDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.yellow("Please Enter Your Name:")
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: chalk.yellow("Select Your Opponent"),
        choices: ["Skalaton", "Alien", "Zombie"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //Skeleton
    if (opponent.select == "Skalaton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.yellow("What would you like to do?"),
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuleDecrease();
                console.log(`${p1.name} Fuel is ${p1.fuel}`);
                console.log(`${o1.name} Fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.blueBright(`You lost, ${player.name} Butter Luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuleDecrease();
                console.log(`${p1.name} Fuel is ${p1.fuel}`);
                console.log(`${o1.name} Fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.magenta(`Congratulation ${player.name} You Won`));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.magenta(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.magenta("You loose, Better Luck Next Time"));
            process.exit();
        }
    }
    //Alien
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.yellow("What would you like to do?"),
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuleDecrease();
                console.log(`${p1.name} Fuel is ${p1.fuel}`);
                console.log(`${o1.name} Fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.blueBright("You loose, Butter Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuleDecrease();
                console.log(`${p1.name} Fuel is ${p1.fuel}`);
                console.log(`${o1.name} Fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.magenta("Congratulation You Won"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.magenta(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.magenta("You loose, Better Luck Next Time"));
            process.exit();
        }
    }
    //Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.yellow("What would you like to do?"),
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuleDecrease();
                console.log(`${p1.name} Fuel is ${p1.fuel}`);
                console.log(`${o1.name} Fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.blueBright("You loose, Butter Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuleDecrease();
                console.log(`${p1.name} Fuel is ${p1.fuel}`);
                console.log(`${o1.name} Fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.magenta("Congratulation You Won"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.magenta(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.magenta("You loose, Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
