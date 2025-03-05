
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




// function statements() {

//     let year = 11;

//     if (year < 6) {
//         console.log("child");
//     } else if (year > 6 && year <= 12) {
//         console.log("teen");
//     } else {
//         console.log("adult");
//     }


//     let day: number = 3;
//     let dayName: string;

//     switch (day) {
//         case 1:
//             dayName = "Monday";
//             break;
//         case 2:
//             dayName = "Tuesday";
//             break;
//         case 3:
//             dayName = "Wednesday";
//             break;
//         case 4:
//             dayName = "Thursday";
//             break;
//         case 5:
//             dayName = "Friday";
//             break;
//         case 6:
//             dayName = "Saturday";
//             break;
//         case 7:
//             dayName = "Sunday";
//             break;
//         default:
//             dayName = "Invalid day";
//             break;
//     }

//     console.log(dayName);

//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }

//     let current = 0;
//     let limit = 10;

//     while (current < limit) {
//         console.log(current);
//         current++;
//     }

//     let i = 0;

//     do {
//         console.log(i);
//         i++;
//     } while (i < 5);


//     const butterfly: {
//         [key: string]: string | number
//     } = {
//         color: "red",
//         windCount: 4,
//     };

//     for (const key in butterfly) {
//         console.log(`${key} : ${butterfly[key]}`);

//     }

//     const numbers: number[] = [1, 2, 34, 5, 8];

//     for (const index in numbers) {

//         console.log(`${index} : ${numbers[index]}`);
//     }

//     for (const number of numbers) {
//         console.log(number);

//     }

// }
// statements();


// function interfaces() {

//     interface User {
//         name: string,
//         password: string,
//         age: number
//     };

//     interface OtherUser {
//         name: string,
//         password: string,
//         age?: number
//     };

//     let user: User = {
//         name: "emir",
//         password: "123",
//         age: 23
//     };

//     let user2: OtherUser = {
//         name: "emir",
//         password: "123"
//     };
//     user2.name = "Updated emircan";

//     interface Car {
//         readonly brand: string;
//     };


//     let car: Car = {
//         brand: "Mercedes"
//     };

//     // car.brand = "BMW"; //err

//     interface MathOperation {
//         //call signature
//         (a: number, b: number): number;
//     }

//     interface MathOperation2 {
//         //method signature
//         sum(a: number, n: number): number;
//     }

//     const sum: MathOperation = (x, y) => x + y;
//     console.log(sum(1, 333333333));

//     const sum2: MathOperation2 = {
//         sum(a, b) {
//             return a + b;
//         }
//     };


//     interface MathOperation3 {

//         (number1: number, number2: number): number;
//         (number1: number, number2: number, number3: number): number;


//     }

//     const summer: MathOperation3 = (number1, number2, number3?) => {

//         if (typeof number3 === "number") {
//             return number1 + number2 + number3;
//         }
//         return number1 + number2;

//     }


//     console.log(summer(111, 222));
//     console.log(summer(111, 222, 4444));

//     type ThreeParameterSum = (a: number, b: number, c: number) => number;
//     type TwoParametersum = (a: number, b: number) => number;

//     type CustomParameterType = ThreeParameterSum & TwoParametersum;

//     const summer2: CustomParameterType = (a, b, c?) => {


//         if (typeof c === "number") {
//             return a + b + c;

//         }

//         return a + b;


//     }

//     console.log(summer2(1, 2));

//     interface Animal {
//         kind: string;
//     }

//     interface Dog extends Animal {
//         color: string;
//     }

//     const dog: Dog = {
//         kind: "bulldog",
//         color: "brown"
//     };

//     console.log(dog);


// };


// interfaces();



// function classes() {

//     type Gender = "Female" | "Male";

//     class Person {

//         name: string;
//         public age: number;
//         private gender: Gender;
//         private _birthdate?: Date;

//         get birthdate(): string {

//             if (this._birthdate != null) {
//                 return this._birthdate.toLocaleDateString();
//             }
//             return "The birthdate is unknown!";
//         }

//         set birthdate(date: Date) {
//             let currentDate = new Date();

//             if (currentDate >= date) {
//                 this._birthdate = date;
//             }

//         }



//         constructor(name: string, age: number, gender: Gender) {
//             this.name = name;
//             this.age = age;
//             this.gender = gender;
//         }

//         public introduce(): void {
//             console.log(`Hello, I am ${this.name} , I am ${this.age} years old, and I am a ${this.gender}`);
//         }

//     };

//     const person1: Person = new Person("Emircan", 23, "Female");
//     person1.introduce();
//     person1.birthdate = new Date("1999-05-11");
//     console.log(person1.birthdate);

//     class MathUtil {
//         static readonly Pi: number = 3.14;
//         static InitValue: number = 0;
//         static readonly SUBTRACT_OPERATOR_SYMBOL: string = "-";
//     }


//     console.log(MathUtil.Pi);
//     // MathUtils.Pi = 22; //err
//     console.log(MathUtil.InitValue);
//     MathUtil.InitValue = 33;
//     console.log(MathUtil.InitValue);


//     class Shape {
//         protected area: number = 0;
//     }

//     class Rectangle extends Shape {

//         setArea(area: number): void {
//             this.area = area;
//         }

//     }

//     abstract class Animal {
//         abstract makeSound(): void;
//     }

//     class Sheep implements Animal {
//         makeSound(): void {
//             console.log("meee! meee!!");

//         }

//     }



//     const sheep: Sheep = new Sheep();
//     sheep.makeSound();

//     class ProductService {
//         private readonly _apiAdress: string;

//         constructor() {
//             this._apiAdress = "hello";
//         }

//         setApiAdress(): void {
//             // this._apiAdress = "wlnıownwe";//err
//         }
//     }

//     interface IShape {
//         getArea(): number;
//     }

//     class Square implements IShape {

//         constructor(private widthOrHeight: number) { }

//         getArea(): number {
//             return this.widthOrHeight * this.widthOrHeight;
//         }

//     }


//     class Human {
//         walk(): void {
//             console.log("The human is walking");

//         }
//     }

//     class FatHuman extends Human {

//         // constructor(){
//         //     super();
//         // }

//         walk(): void {
//             console.log("The fat human walking");
//         }

//     }

//     const human1: FatHuman = new FatHuman();
//     const human2: Human = human1;
//     human1.walk();
//     human2.walk();

//     class First {
//         write() {
//             console.log("first");
//         }
//     }

//     class Second {
//         write() {
//             console.log("second");

//         }
//     }

//     let variable: First;
//     variable = new Second();
//     variable.write();


//     class Calculator {

//         add(a: number, b: number): number;
//         add(a: string, b: string): string;
//         add(a: boolean, b: boolean): boolean;


//         add(a: number | string | boolean, b: number | string | boolean): number | string | boolean {

//             if (typeof a === "number" && typeof b === "number") {
//                 return a + b;
//             }
//             else if (typeof a === "string" && typeof b === "string") {
//                 return a + b;
//             } else if (typeof a === "boolean" && typeof b === "boolean") {
//                 return true;
//             } else {
//                 throw new Error("parameters not matched");
//             }


//             // add(a: unknown, b: unknown): unknown | never {

//             //     if (typeof a === "number" && typeof b === "number") {
//             //         return a + b;
//             //     }
//             //     else if (typeof a === "string" && typeof b === "string") {
//             //         return a + b;
//             //     } else if (typeof a === "boolean" && typeof b === "boolean") {
//             //         return true;
//             //     } else {
//             //         throw new Error("parameters not matched");
//             //     }

//         }


//     }

//     const calc = new Calculator();
//     console.log(calc.add(1, 2));
//     console.log(calc.add(true, true));
//     console.log(calc.add("22", "33"));


//     class Config {

//         private constructor() { }

//         private static _config?: Config;

//         static GetConfig(): Config {

//             return this._config ??= new Config();

//         }

//     }




// }


// classes();



function Generics() {

    function combine<T, U>(a: T, b: U) {

        return `${a} - ${b}`;
    }


    console.log(combine<number, string>(1, "emir"));
    console.log(combine(1, "emir"));

    class List<T> {

        private _datas: T[] = [];


        get Length(): number {
            return this._datas.length;
        }
        add(value: T): void {
            this._datas.push(value);

        }

        remove(value: T): void {
            this._datas = this._datas.filter(data => data !== value);

        }
        toArray(): T[] {
            return [...this._datas];
        }

    }

    const list = new List<number>();

    list.add(22);
    list.add(33);
    list.add(44);
    list.add(44);
    list.add(44);

    console.log(list.Length);
    console.log(list.toArray());

    list.remove(44);

    console.log(list.toArray());

    interface KeyValuePair<T1, T2> {
        key: T1,
        value: T2
    };

    const keyValuePair: KeyValuePair<number, number> = {
        key: 1,
        value: 1
    };

    type Nullable<T> = {
        value: T | null
    };

    const nullOrNumber: Nullable<number> = { value: 2020 };

    console.log(nullOrNumber.value);


    interface Person {
        name: string,
        age: number
    };

    function writePersonDetails<T extends Person>(value: T) {

        console.log(value.name, "-", value.age);

    }

    const person1: Person = {
        name: "Emircan",
        age: 23
    };

    const person2: Person = {
        name: "Mahmut",
        age: 33
    };


    writePersonDetails(person1);
    writePersonDetails(person2);
    // writePersonDetails({ surname: "xxxx" }) //The object is not a person //error


    console.log();

    type PersonKeys = keyof Person;

    const key: PersonKeys = "age";

    console.log(key);

    function GetDetail<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }

    type Animal = {
        name: string,
        height: number
    };

    let dog: Animal = {
        name: "josef",
        height: 1.11
    };

    console.log(GetDetail<Animal, keyof Animal>(dog, "height"));
    console.log(GetDetail<Animal, keyof Animal>(dog, "name"));

    type Response<T = unknown> = {
        value: T
    };

    const res1: Response = { value: "emir" };
    const res2: Response<string> = { value: "emir" };


    function merge<T1, T2>(value1: T1, value2: T2): T1 & T2 {
        return { ...value1, ...value2 };
    }



}


Generics();


