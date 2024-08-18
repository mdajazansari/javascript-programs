//Implement a Grading System
// Create a variable to store the student's grade.
// Use a switch case statement to determine the letter grade (A, B, C, D, F) based on the numerical grade.


// Write a java script program to find whether a number is divisible by 2 and 3
// Write a java script program to find whether a number is divisible by either 2 or 3
// Print "You can drive" or "You cannot drive" based on age being greater than 18 using ternary 


const percentage = prompt("Enter your percentage that you scrored in class 10th:");

if (percentage > 100 || percentage == ""){
    console.log("Enter a number in the range of 0 to 100.");
}
else {
let grade;

switch(true){
    case (percentage >= 90):
        grade = "A";
        break;
    
    case (percentage >= 75):
        grade = "B";
        break;
    
    case (percentage >= 65):
        grade = "C";
        break;

    case (percentage >= 55):
        grade = "D";
        break;

    case (percentage >= 33):
        grade = "E";
        break;
    
    default:
        grade = "Fail";
        break;
}

console.log("Grade", grade);
}