// Use logical and ternary operators to find whether the age of a person lies between 10 and 20

let num = prompt("Enter your age:");

// // My first mistake. I write condition like this. But this is not the correct Way
// if(10<num<20){
// }

if(num >= 10 && num <= 20){
    console.log(`Your age lies betwwen 10 and 20. You're eligible for this scholarship.`);
}
else{
    console.log(`You age doesn't lies betwwen 10 and 20. You're not eligible for this scholarship.`)
}


// Use ternary operators to find whether the age of a person lies between 10 and 20


// let c = prompt("Enter your number:");

// let d = c >= 10 && c <= 20 ? "Your age lies betwwen 10 and 20. You're eligible for this scholarship." : "You age doesn't lies betwwen 10 and 20. You're not eligible for this scholarship."

// console.log(d);