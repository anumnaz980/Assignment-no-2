//Tasks:
//Q#1:Miles-to -Kilometers Converters(Opeators):
//#Create a variable named miles and assign a numeric value representing distance in miles.Calculate the equivalent distance in kilometers using the conversion factor(1 miles = 1.60934 kilometers).You can acheive this by multiplying miles by 1.60934.Store the converted distance in kilometers in a varible named kilometers.Use console.log to print a message in the following normal format:
//(the distance of 130 kilometers is equal to 209.2142 miles.)
let miles = 130;
let convert_facter_km = 130 * 1.60934;
let kilometers = convert_facter_km;
console.log(`The distance of ${miles} kilometers is equal to ${kilometers}.`);
// //2.Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less 
// than the dynamic number value.
import inquirer from "inquirer";
async function main() {
    const answer = await inquirer.prompt([{
            name: "number",
            type: "input",
            message: "Enter your number",
        }]);
    const dyanmicNumber = 25;
    const enteredNumber = parseFloat(answer.number);
    function numberGame() {
        if (enteredNumber > dyanmicNumber) {
            console.log(`${enteredNumber} is greater than your dynamic number ${dyanmicNumber}.`);
        }
        else if (enteredNumber < dyanmicNumber) {
            console.log(`${enteredNumber} is less than your dynamic number ${dyanmicNumber}.`);
        }
        else {
            console.log(`${enteredNumber} is equal to your dynamic number ${dyanmicNumber}.`);
        }
    }
    numberGame();
}
main();
async function namechecker() {
    const enteredName = await inquirer.prompt([{
            name: "EnteredName",
            type: "input",
            message: "Enter your friend's name!"
        }]);
    const knownFriend = ["Rifat", "Fatima", "Sitara", "Aqeela", "Ayesha"];
    switch (enteredName.EnteredName) {
        case knownFriend[0]:
        case knownFriend[1]:
        case knownFriend[2]:
        case knownFriend[3]:
        case knownFriend[4]:
            console.log(`Yes! ${enteredName.EnteredName} is  your known friend.`);
            break;
        default:
            console.log(`Sorry, ${enteredName.EnteredName} is not your known friend.`);
            break;
    }
}
namechecker();
// 4.Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments.
function sum(a, b) {
    return a + b;
}
let num1 = 4;
let num2 = 6;
console.log("Result of first call", sum(num1, num2));
console.log("Result of first call", sum(3, 9));
// 5#.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments
let numb1 = 5;
let numb2 = 3;
let opr = "+";
function sum1(numb1, numb2, opr) {
    if (opr === "+") {
        return numb1 + numb2;
    }
    else if (opr === "-") {
        return numb1 - numb2;
    }
    else {
        return "Invalid operators";
    }
}
console.log(`The result of ${num1} ${opr} ${num2} is:`, sum1(num1, num2, opr));
opr = "-";
console.log(`The result of ${num1} ${opr} ${num2} is:`, sum1(num1, num2, opr));
// Q#6:.Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided 
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration.
let name1 = (name) => {
    console.log(name);
};
name1("Hello, Anum Naz!");
//Normal Function:
function name2(name) {
    console.log(name);
}
name2("Hello, Anum Naz ! How are you?");
