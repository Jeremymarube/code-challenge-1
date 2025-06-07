function estimateTransactionFee(amountToSend) {
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Please enter a valid positive number.");
    return;
  }

  // Calculate 1.5% fee
  const calculatedFee = amountToSend * 0.015;

  // Apply min and max fee limits
  const fee = Math.min(Math.max(calculatedFee, 10), 70);

  // Calculate total amount to be debited
  const totalAmount = amountToSend + fee;

  // Output results
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalAmount}\n`);
  console.log("Send Money Securely!");
}
const input = prompt("Unatuma Ngapi? (KES):");
const amount = Number(input);
estimateTransactionFee(amount);
 