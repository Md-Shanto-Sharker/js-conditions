// Problem 5: Traffic Light System
// একটি কালার (color) ইনপুট দেওয়া হবে।

// "red" হলে প্রিন্ট করবে "STOP"
// "yellow" হলে প্রিন্ট করবে "WAIT"
// "green" হলে প্রিন্ট করবে "GO"
// অন্য কিছু হলে প্রিন্ট করবে "Invalid Color"


const color = "red";
if(color==='red'){
    console.log("STOP");
}
else if(color==='yellow'){
    console.log("WAIT");
}
else if(color==='green'){
    console.log("GO");
}
else{
    console.log("Invalid Color");
}
