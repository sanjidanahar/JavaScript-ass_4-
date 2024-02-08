/* Question: কলি মুদ্দি ন সাহে ব নতুন ফ োন কি নে বি ভি ন্ন ওয়ে বসাইটে ভি জি ট করে ন এবং বি ভি ন্ন এপ্লি কে শনে একাউন্ট ক্রি য়ে ট
করে ন । কি ন্তু তি নি পাসওয়ার্ড মনে রাখতে পারে ন না । তি নি এমন একটি ফাংশন চান, যে খানে তার ইনফরমে শন
এবং ওয়ে বসাইট নে ম দি লে সে টা কলি মুদ্দি ন সাহে ব কে একটি মনে রাখার মত ো পাসওয়ার্ড জে নারে ট করে দি তে
পারবে ।
তার জন্য password() নামে একটা ফাংশন লি খতে হবে ।
Input :
ফাংশন টি একটা object ইনপুট হি সে বে নি বে । যে খানে শুধুতি ন টি প্র োপার্টি থাকবে ।
{ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
*/
// Make A Great Password

function password(obj){
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return "invalid";
    }
    
    // Check if all required properties
    
    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
        return "invalid";
    }
    
    // Check if birthYear is a 4-digit number
    if (typeof obj.birthYear !== 'number' || !Number.isInteger(obj.birthYear) || obj.birthYear.toString().length !== 4) {
        return "invalid";
    }
    
    //  password using 
    let password = obj.siteName.toUpperCase() + "#"  + obj.name.toLowerCase()+ "@" + obj.birthYear.toString() ;
    
    return password;
    }
    console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));