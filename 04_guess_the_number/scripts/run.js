async function main() {

    const challengeContractAddress = '0x537e681a663bf613C45A6e90b7Aff3e688339F1A';

    // Connect to the challenge contract
    const GuessTheNumberChallenge = await ethers.getContractFactory("GuessTheNumberChallenge");
    const guessTheNumberChallenge = await GuessTheNumberChallenge.attach(challengeContractAddress);
  
    // Send the answer (with the required 1 ETH)
    const answer = 42;
    await guessTheNumberChallenge.guess(answer, { value: ethers.utils.parseEther("1") });
    console.log('Answer has been sent.');
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });