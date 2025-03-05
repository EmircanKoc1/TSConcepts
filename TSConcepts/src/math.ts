export function sum(...numbers: number[]): number {
    let totalValue: number = 0;
    numbers.forEach((number) => {
        totalValue += number;
    });
    return totalValue;
}


export function subtract(number1: number, number2: number): number {

    return number1 - number2;
}




