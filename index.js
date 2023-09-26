if ("i am a string") {
    console.log ("true")
}
else {
    console.log ("false")
}

if (false) {
    console.log ("true")
}
else {
    console.log ("The boolean value false is falsy")
}

if (null) {
    console.log ("true")
}
else {
    console.log ("The null value is falsy")
}

if (undefined) {
    console.log ("true")
}
else {
    console.log ("undefined is falsy")
}

if (0) {
    console.log ("true")
}
else {
    console.log ("The number 0 is falsy (the only falsy number)")
}

if ("") {
    console.log ("true")
}
else {
    console.log ("The empty string is falsy (the only falsy string)")
}

let num1 = 50
let num2 = 51

if (num1 + num2 < -1000) {
    console.log ("is less than -1000")
}
else if (num1 + num2 < 0){
    console.log ("is a negative number")
}
else if(num1 + num2 = 0) {
    console.log ("is equal to 0")
}
else if(num1 + num2 > 0) {
    console.log ("is larger than 0")
}
else (num1 + num2 > 100) {
    console.log ("is greater than 100")
}