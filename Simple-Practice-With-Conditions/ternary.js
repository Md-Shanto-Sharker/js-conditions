/**** 
 * TERNARY --->
 */
const age = 12;

// if(age >= 18){
//     console.log('you can vote');
// }
// else{
//     console.log('Ghumai thako');
// }

/**
 * Use the ternary operator..
 */

// age>=18? console.log("you can vote") : console.log('Ghumai thako');;



let price = 5000;
const isLeader = true;

// if(isLeader ===true){
//     price=0;
// }
// else{
//     price = price + 100
// }
// console.log(price);

// use ternary
// price = ( isLeader === true)? 0 : price+100;
// console.log(price);


/**
 * Optional : semi-advanced ternary
 */

// if(isLeader === true){
//     if(price>1000){
//         price = price /2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price=price+1000
// }
// console.log(price);

price = isLeader === true? price>1000?price/2:0:price+1000;
console.log(price);
