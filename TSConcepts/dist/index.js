"use strict";
// function WriteNumber() {
;
function isPerson(obj) {
    return "name" in obj && "age" in obj;
}
function isCar(obj) {
    return "model" in obj;
}
const person = {
    name: "emir",
    age: 23
};
if (isPerson(person)) {
    console.log("Hellooooooo!", person.name);
}
else {
    console.log("Obj is not a person");
}
