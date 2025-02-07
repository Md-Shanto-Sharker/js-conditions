// Problem 3: Multiple of 3 and 5
// একটি সংখ্যা দেওয়া হবে,

// যদি সংখ্যা ৩ দ্বারা বিভাজ্য হয়, প্রিন্ট করবে "Fizz"
// যদি সংখ্যা ৫ দ্বারা বিভাজ্য হয়, প্রিন্ট করবে "Buzz"
// যদি উভয় (৩ ও ৫) দ্বারা বিভাজ্য হয়, প্রিন্ট করবে "FizzBuzz"
// যদি কিছুই না হয়, সংখ্যাটিই প্রিন্ট করবে।


const number = 7;
if(number%3===0 && number%5===0){
    console.log('FizzBuzz');
}
else if(number%3===0){
    console.log('Fizz');
}
else if(number%5===0){
    console.log('Buzz');
}
else{
    console.log(number);
}