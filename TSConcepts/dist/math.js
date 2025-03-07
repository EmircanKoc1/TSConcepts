export function sum(...numbers) {
    let totalValue = 0;
    numbers.forEach((number) => {
        totalValue += number;
    });
    return totalValue;
}
export function subtract(number1, number2) {
    return number1 - number2;
}
