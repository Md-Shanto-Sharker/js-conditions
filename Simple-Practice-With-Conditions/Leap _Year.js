// Problem 2: Leap Year Checker
// একটি বছর দেওয়া হবে, সেটি লিপ ইয়ার (leap year) কিনা বের করো।

// 👉 শর্ত:
// যদি কোনো সংখ্যা ৪ দ্বারা বিভাজ্য হয় এবং ১০০ দ্বারা বিভাজ্য না হয়, তবে এটি লিপ ইয়ার।
// অথবা এটি ৪০০ দ্বারা বিভাজ্য হলে সেটিও লিপ ইয়ার।

const year = 2025;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("Not a leap year");
}
