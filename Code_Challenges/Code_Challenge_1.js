let massMark=92.1
let massJohn=78.6
let heighMark=1.77
let heighJohn=1.55
let markBMI=massJohn/heighMark ** 2;
let johnBMI=massJohn/(heighJohn* heighJohn)
const markHigherBMI=markBMI > johnBMI;

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) Higher`)
}else{
    console.log(`John's BMI (${johnBMI}) is Higher`)
}

console.log(markBMI,johnBMI,markHigherBMI)

