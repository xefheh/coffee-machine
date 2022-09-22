// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

function printMachineInfo()
{
    console.log(`The coffee machine has:`);
    console.log(`${machineWater} ml of water`);
    console.log(`${machineMilk} ml of milk`);
    console.log(`${machineCoffee} g of coffee beans`);
    console.log(`${machineCups} disposable cups`);
    console.log(`$${money} of money\n`);
}

function buyCoffee() {
    let inputId = input("Who do you want to buy? " +
        "1 - espresso, 2 - latte, 3 - cappuccino:, back - to main menu:\n");
    if (inputId == "back")
        return;
    let coffee = cofVar.find(e => e.id === Number(inputId));
    if (coffee.water > machineWater) {
        console.log("Sorry, not enough water!\n");
        return;
    }
    if (coffee.milk > machineMilk) {
        console.log("Sorry, not enough milk!\n");
        return;
    }
    if (coffee.coffee > machineCoffee) {
        console.log("Sorry, not enough coffee beans!\n");
        return;
    }
    if (machineCups === 0) {
        console.log("Sorry, not enough disposable cups!\n")
        return;
    }
    machineCups -= 1;
    machineWater -= coffee.water;
    machineMilk -= coffee.milk;
    machineCoffee -= coffee.coffee;
    money += coffee.cost;
}

function fillMachine() {
    machineWater += Number(input("Write how many ml of water you want to add:\n"));
    machineMilk += Number(input("Write how many ml of milk you want to add:\n"));
    machineCoffee += Number(input("Write how many grams of coffee beans you want to add:\n"));
    machineCups += Number(input("Write how many disposable cups you want to add:\n"));
    console.log();
}

function take() {
    console.log(`I gave you $${money}`);
    money = 0;
}

const cofVar = [
    {
        id: 1,
        type: "espresso",
        water: 250,
        milk: 0,
        coffee: 16,
        cost: 4
    }, {
        id: 2,
        type: "latte",
        water: 350,
        milk: 75,
        coffee: 20,
        cost: 7
    }, {
        id: 3,
        type: "cappuccino",
        water: 200,
        milk: 100,
        coffee: 12,
        cost: 6
    }
]

let machineWater = 400;
let machineMilk = 540;
let machineCoffee = 120;
let machineCups = 9;
let money = 550;

while(true) {
    let action = input("Write action (buy, fill, take, remaining, exit):\n");
    console.log();
    switch (action) {
        case "buy":
            buyCoffee();
            continue;
        case "fill":
            fillMachine();
            continue;
        case "take":
            take();
            continue;
        case "remaining":
            printMachineInfo();
            continue;
        case "exit":
            break;
    }
    break;
}
