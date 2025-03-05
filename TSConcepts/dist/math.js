"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = sum;
exports.subtract = subtract;
function sum(...numbers) {
    let totalValue = 0;
    numbers.forEach((number) => {
        totalValue += number;
    });
    return totalValue;
}
function subtract(number1, number2) {
    return number1 - number2;
}
