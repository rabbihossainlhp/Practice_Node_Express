// this is the sample of a module that will be import into another file.....

const sum = (a,b) =>{
    console.log("The ultimate SUM = ", a+b);
}

const sub = (a,b)=>{
    console.log("The Substraction = ", a+b);
}

const allCal = (a,b)=>{
    console.log(`Sum of ${a} & ${b} is =`,a+b);
    console.log(`Sub of ${a} & ${b} is =`,a-b);
    console.log(`Multi of ${a} & ${b} is =`,a*b);
    console.log(`Div of ${a} & ${b} is =`,a/b);
}


module.exports = {
    sum,
    sub,
    allCal
}

// console.log(module);