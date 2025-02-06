/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

/***
 * Answer>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */

const score = 95;
if(score<=100 && score>=90){
    console.log('you got A');
}
else if(score<=89 && score>=80){
    console.log('you got B');
}
else if(score<=79 && score>=70){
    console.log('you got C');
}
else if(score<=69 && score>=60){
    console.log('you got D');
}
else{
    console.log('you are fail');
}







// /*another type but same ans>>>>>>>>>>>>>>>>>>>>>>>>>

// const mark = 79;

// if(mark>80){
//     console.log("you got A+");
// }
// else if (mark >70){
//     console.log("you got A");
// }
// else if (mark > 60){
//     console.log("you got B");
// }
// else if (mark > 50){
//     console.log("you got C");
// }
// else{
//     console.log("you are fail!");
// }