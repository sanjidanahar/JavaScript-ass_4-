/* Question: ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রি য়ে ট করতে হবে যা ইনপুট হি সে বে একটি Array
নে বে । ফাংশন টি আরে কটি Array রি টার্ন করবে যে খানে ভ্যালুগুল ো হবে শুধুনাম্বার । অর্থাৎ Array এর যে সকল
elements নাম্বার না , তাদে র ডি লি ট করে শুধুমাত্র নাম্বার গুল ো কে Array আকারে রি টার্ন করতে হবে ।
তুমি যদি এই ফাংশনে এই [ NaN, 1,12,0 ,-1 , undefined ] Array টি পাস কর ো কর ো তাহলে সে ত োমাকে
রি টার্ন করবে [ 1 , 12 , 0 , -1 ]
Input :
ফাংশন টি ইনপুট নে বে একটি Array । Array এর উপাদান গুল োর Datatype যে ক োন ধরনে র হতে পারে ।
*/
// Virus in my Array

function deleteInvalids(array){
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }
    // Filter out non-number element from the array
    let result = [];
    // Loop through eachh elemnt in the input array
    for ( i = 0; i < array.length; i++) {
        // Check if the element is a number and not Null 
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            result.push(array[i]); 
        }
    }
    return result;
}


console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); 
