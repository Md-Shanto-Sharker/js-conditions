/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

/**
 * Answer>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */

const num1 = 20;
const num2 = 2;
let result ;
if(num1>num2){
    console.log(result=num1*2);
}
else{
    console.log(result=num1+num2);
}

// use the ternary operator

num1>num2 ? result=num1*2 : result=num1+num2;
console.log(result);
