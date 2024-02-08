/* Question: বাকের ভাই মিরপুর চিড়িয়াখানার ম্যানেজার । প্রতিদিন তাকে অসংখ্য টিকেট বিক্রি করতে হয় । টাকার হিসেব এ
তিনি সবসময় গড়মিল বাধিয়ে ফেলেন । তুমি যেহেতু সদ্য ডেভেল োপার হচ্ছ ো বাকের ভাই ত োমার কাছে একটি
হেল্প চেয়েছে । বাকের ভাই কে calculateMoney( ) নামে একটি ফাংশন বানিয়ে দিতে হবে যাকে প্রতিদিন
টিকেট সেল করার সংখ্যা ইনপুট দিলে সে সকল খরচ বাদ দিয়ে ম োট কত টাকা বাকের ভাইর কাছে থাকে তা বলে
দিতে পারে ।
চিড়িয়াখানায় প্রতি টিকেট বিক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দিন ১ জন দার োয়ান কে দিতে হয় ৫০০
টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।

Input :
ফাংশন টি ইনপুট নেবে টিকেট সেল করার সংখ্যা । ইনপুট হবে একটি পজিটিভ সংখ্যা । (0<=Input)

*/

// Help The Zoo Manager
function calculateMoney(ticketSale){
    const ticketPrice = 120;
    const careTaker = 500;
    const staffNum = 8;
    const stafflunch = 50;
     // Check if ticketSale is positive
    if(ticketSale > 0){
        const staffCost = staffNum * stafflunch + careTaker;
        const ticketMoney = ticketPrice * ticketSale;
        const profit = ticketMoney - staffCost;
        return profit;
    }
    else{
        return "invalid number";
    }   
}
console.log(calculateMoney(1055));