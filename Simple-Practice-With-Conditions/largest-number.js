// তিনটি সংখ্যা দেওয়া হবে, এর মধ্যে সবচেয়ে বড় সংখ্যাটি বের করো।

let a = 20;
let b = 28;
let c = 2;

if(a>b && a>c){
    console.log("Big number a is: "+a);
}
// else if(b>c){
else if(b>c && b>a){
    console.log('Big number b is: '+ b);
}
else{
    console.log('Big number c is: '+ c);
}