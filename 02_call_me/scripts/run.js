async function main() {

  challengeContractAddress = '0xe6aa98574c144E90B48Bb00c88D09d4a26a4e0E6';

  // Connect to the challenge contract
  const CallMeChallenge = await ethers.getContractFactory("CallMeChallenge");
  const callMeChallenge = await CallMeChallenge.attach(challengeContractAddress);

  // Call the method
  await callMeChallenge.callme();
  
  console.log(`The callme() method from the challenge smart contract (${challengeContractAddress}) has been called.`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
