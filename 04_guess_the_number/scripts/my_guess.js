async function main() {

    // Connect to the contract we want to interact with
    const GuessTheNumberChallenge = await ethers.getContractFactory("GuessTheNumberChallenge");
    const contract = await GuessTheNumberChallenge.attach("0x99a660426cE1D6095ea4011006cDed7330c5A61F");
  
    // Send the answer (with the required 1 ETH)
    const answer = 42;
    
    await contract.guess(answer, { value: ethers.utils.parseEther("1") });
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });