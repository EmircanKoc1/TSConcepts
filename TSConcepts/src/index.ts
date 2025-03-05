
// function WriteNumber() {



//     var number1 = 22;
//     console.log(number1);

//     let number2 = 22;
//     console.log(number2);
//     number2 = 33;
//     console.log(number2);


//     const number3 = 22;

//     // number3 = 33 ; //error
//     console.log(number3);

// }


// function dataTypes() {

//     let name: string = "James";
//     console.log(name);
//     let price: number = 3.14;
//     console.log(price);
//     price = 3;
//     console.log(price);
//     let isGreater: boolean = true;
//     console.log(isGreater);

//     let iAmNull: null = null;
//     console.log(iAmNull);
//     let iAmUndefined;
//     console.log(iAmUndefined);
//     iAmUndefined = undefined;
//     console.log(iAmUndefined);

//     let everything: any = 22;
//     console.log(everything);
//     everything = "Hello";
//     console.log(everything);
//     everything = undefined;
//     console.log(everything);
//     everything = null;
//     console.log(everything);


//     let number: number = 0;

//     function incrementNumber(): void {
//         number++;
//     }

//     incrementNumber();
//     incrementNumber();
//     incrementNumber();

//     console.log(number);

//     function throwErr(): never {
//         throw new Error("This is an error");
//     }

//     function runEveryTime(): never {
//         while (true) {
//             console.log("Hello");

//         }
//     }

//     // throwErr();
//     // runEveryTime();

//     let maybeOtherDataTypes: unknown = "Hello";
//     // maybeOtherDataTypes = 22;

//     if (typeof maybeOtherDataTypes === "string") {
//         maybeOtherDataTypes = maybeOtherDataTypes.toUpperCase();

//     } else if (typeof maybeOtherDataTypes === "number") {
//         maybeOtherDataTypes = 33;
//     }

//     console.log(maybeOtherDataTypes);





// }

// dataTypes();





// function typeAlias() {

//     type Employee = {
//         name: string,
//         age: number,
//         salary: number
//     };

//     const employee1: Employee = {
//         name: "James",
//         age: 11,
//         salary: 33.22
//     }

//     console.log(employee1);

//     type SumFunction = (number1: number, number2: number) => number;

//     const sum: SumFunction = (x, y) => x + y;

//     console.log(sum(3, 22));


//     //union types 

//     type numberOrString = number | string;

//     let value: numberOrString = 22;
//     value = "Hello World!";

//     console.log(value);


//     //intersection

//     type Animal = {
//         kind: string,
//         weight: number
//     };

//     type HasAWind = {
//         windLength: number
//     };

//     type Bird = Animal & HasAWind;

//     let parrot: Bird = {
//         kind: "Jacop",
//         weight: 22.3,
//         windLength: 10
//     }


//     console.log(parrot);


//     //tuple 
//     type Point = [number, number];

//     const Position: Point = [222, 197];

//     //array

//     type Person = {
//         name: string,
//         age: number
//     };

//     type People = Person[];





// }

// typeAlias();



// function Operators() {
//     let a: number = 100;
//     let b: number = 2;

//     console.log(a + b);
//     console.log(a / b);
//     console.log(a - b);
//     console.log(a * b);
//     console.log(a % b);

//     let x: number = 10;
//     let y: number = 5;
//     let z: string = "10";

//     // console.log(x == z);   //err
//     console.log(x == Number(z)) //true
//     // console.log(x === z);  //err
//     // console.log(x != y);   //err
//     // console.log(x !== z);  //err
//     console.log(x > y);    // true
//     console.log(x < y);    // false
//     console.log(x >= 10);  // true
//     console.log(x <= 9);   // false


//     let firstCondition = true;
//     let secondCondition = false;

//     console.log(firstCondition && secondCondition); //false
//     console.log(firstCondition || secondCondition); //true
//     console.log(!firstCondition); //false
//     console.log(!secondCondition);//true


//     let num = 42;
//     let str = "Hello";
//     let isActive = true;
//     let obj = { name: "Alice" };

//     console.log(typeof num);      // "number"
//     console.log(typeof str);      // "string"
//     console.log(typeof isActive); // "boolean"
//     console.log(typeof obj);      // "object"
//     console.log(typeof undefined); // "undefined"
//     console.log(typeof null);   //object

//     class Person {
//         name: string;
//         constructor(name: string) {
//           this.name = name;
//         }
//       }

//       let person1 = new Person("Alice");

//       console.log(person1 instanceof Person);  // true
//       console.log(person1 instanceof Object);  // true

//       let arr = [1, 2, 3];
//       console.log(arr instanceof Array);   // true
//       console.log(arr instanceof Object);  // true

// }
// Operators();



// function Functions() {

//     function greet(): void {
//         console.log("Hello");
//     }

//     greet();

//     const shortGreet = function (): void {
//         console.log("Hello");
//     }

//     shortGreet();

//     const greetWithName = (name: string) => `Hello ${name}`;

//     greetWithName("Mahmut");


//     function getDetails(name: string, age?: number): string {

//         if (!age) {
//             return `name : ${name} , age is unknown`;
//         }

//         return `name : ${name} , age : ${age}`;

//     }

//     console.log(getDetails("Emir", 23));
//     console.log(getDetails("Emir"));

//     function writeName(name: string = "Unknown"): void {

//         console.log(name);

//     }
//     writeName();

//     function sumNumbers(...numbers: number[]): number {

//         let totalValue = 0;

//         numbers.forEach((value) => {
//             totalValue += value;
//         });

//         return totalValue;
//     }

//     console.log(sumNumbers(1, 2, 3, 4, 5));

//     function process(name: string, processorFn: (param: string) => void) {

//         processorFn(name);

//     }

//     process("Emircan", (name) => {
//         console.log(name);
//     })



// }

// Functions();



