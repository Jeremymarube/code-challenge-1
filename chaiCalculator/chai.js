function  calculateChaiIngredients() {
 // Prompt user for number of cups and convert input to a number
  const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  const numberOfCups = Number(input);
  // Check if the input is a valid positive number
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid positive number for the cups.");
    return;
}
  // Calculate ingredients based on numberOfCups
  const water = 200 * numberOfCups;      // in ml
  const milk = 50 * numberOfCups;        // in ml
  const teaLeaves = 1 * numberOfCups;    // in tablespoons
  const sugar = 2 * numberOfCups;         // in teaspoons
   // Print results to the console
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons\n`);
  console.log("Enjoy your Chai Bora");
}
// To run the function:
calculateChaiIngredients();
