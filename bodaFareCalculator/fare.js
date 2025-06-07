function calculateBodaFare() {
     const baseFare = 50;
  const chargePerKm = 15;
  // Prompt the  user to enter distance
  const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
  const distanceInKm = Number(input);
  if (isNaN(distanceInKm) || distanceInKm < 0) {
    console.log("Tafadhali ingiza nambari halali ya kilomita.");
    return;
}
 const totalFare = baseFare + (distanceInKm * chargePerKm);

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!");
}

// Call the function to run
calculateBodaFare();