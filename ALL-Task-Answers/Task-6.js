/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 45;
const Regular_ticket_fare =800 ;
let before_discount;
if(age<10){
    console.log("free");
}
else if(age>10 && age<60){
     before_discount=Regular_ticket_fare*0.5
    console.log(before_discount);
}
else if(age>=60){
    before_discount=Regular_ticket_fare*0.85
    console.log(before_discount);
}
else{
    console.log('Regular ticket fare 800 tk');
}
