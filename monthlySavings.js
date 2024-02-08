/* Question: ফ্রি ল্যান্সার শাহে দ প্রতি মাসে বে শ কি ছুপে মে ন্ট ক্লায়ে ন্ট দে র থে কে পায় । কি ন্তু পে মে ন্ট এর কি ছুট্যাক্স পরি শ োধ
এবং নি জে র লি ভি ং কস্ট এর কারনে সে সে ভি ংস করতে পারে না । তার সে ভি ংস এর হি সে ব করার জন্যে তাকে
monthlySavings() নামে একটি ফাংশন তৈ রী করে দি তে যে টা ইনপুট হি সে বে নে বে একটি Array (প্রতি মাসে
পাওয়া সকল পে মে ন্ট ) এবং একটি Number ( শাহে দে র লি ভি ং কস্ট ) ।
শাহে দে র যে সকল পে মে ন্ট 3000 টাকা বা তার বে শি সে সকল পে মে ন্ট থে কে ব্যাংক Tax হি সে বে ২০% টাকা কে টে
নে য় । এখন ম োট ইনকাম থে কে Tax গুল ো বাদ দি য়ে এবং Living cost বাদ দি য়ে বাকী যে টাকা থাকে সে টা ই
হল ো শাহে দে র সে ভি ংস । অর্থাৎ ফাংশন টি শাহে দে র সে ভি ংস কে রি টার্ন করবে । যদি সে ভি ংস করার মত ো টাকা না
থাকে অর্থাৎ সে ভি ংস এর ভ্যালুযদি ০ এর চে য়ে কম হয় তাহলে ফাংশন টি রি টার্ন করবে একটি স্ট্রি ং তাহল ো “earn
more” ।
Input :
ফাংশন টি ইনপুট নে বে একটি Array (All payments) এবং একটি number (Living cost) ।
*/
// Monthly Savings of a Freelancer

function monthlySavings(payments, livingCost) {
    // Check if inputs first parameter is array and second parameter is number
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }
    let totalIncomes = 0;
    // Calculate total income and tax
    for (let payment of payments) {
        let remainPayment = [];
        let tax = 0;
        if (payment >= 3000) {
            tax = payment * (20/100);
            remainPayment = payment - tax;
        } else {
            remainPayment = payment;
        }
        totalIncomes =totalIncomes + remainPayment;
    }
    // Calculate remaining money after minus living costs
    const remainingMoney = totalIncomes - livingCost;
    if (remainingMoney >= 0) {
        return remainingMoney;
    } else {
        return "earn more";
    }
}
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));


