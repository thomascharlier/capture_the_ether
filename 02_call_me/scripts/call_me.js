async function main() {

  // Connect to the contract we want to call
  const CallMeChallenge = await ethers.getContractFactory("CallMeChallenge");
  const contract = await CallMeChallenge.attach("0x4B81C68d0B52aC3bC0681a8975EF16538c307807");

  // Call the method
  await contract.callme();

  console.log('The callme() method has been called.');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });