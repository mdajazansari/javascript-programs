// Demonstrate the use of switch case statements in java script
// Create a Simple Menu System
// Create a menu with options like "Add", "Subtract", "Multiply", and "Divide".
// Prompt the user to choose an option.
// Use a switch case statement to perform the corresponding operation based on the user's choice."

const choice = prompt("Choose an operation (Eg. Type 1 if you want to perform Addition.):\n1. Add\n2. Subtract\n3. Multiply\n4. Divide");

if (choice === null || choice === "") {
  console.log("Please enter a valid choice.");
} else {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));

  let result;

  switch (choice) {
    case "1":
      result = num1 + num2;
      break;
    case "2":
      result = num1 - num2;
      break;
    case "3":
      result = num1 * num2;
      break;
    case "4":
      if (num2 === 0) {
        console.log("Cannot divide by zero.");
      } else {
        result = num1 / num2;
      }
      break;
    default:
      console.log("Invalid choice.");
  }

  if (result !== undefined) {
    console.log("Result:", result);
  }
}