// Write a java script program to find weather a number is divisible by 2 and 3

let num = prompt("Enter your number:")

if(num%2 == 0 && num%3 == 0){
    console.log("Number is divisible by both 2 and 3.");
}

else if (num%2 == 0 && num%3 != 0){
    console.log("Number is divisible by 2.");
}

else if (num%2 != 0 && num%3 == 0){
    console.log("Number is divisible by 3.");
}

else{
    console.log("Number is not divisible by 2 or 3.");
}