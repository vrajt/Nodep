const amount=12
if(amount<12){
    console.log("number is small ,better luck next time")
}
else if(amount==12){
    console.log("yes its 12 ")
}
else{
    console.log("its bigger number")
}
console.log("my first program")

const names=require('./utils.js')
const Greet=require('./name.js')
const data=require('./AlternativeFlavor.js')
const add=require('./MindGraned.js')
console.log(names)
Greet(names.john);
console.log(data)
require('./MindGraned.js')
//thats it