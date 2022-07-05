async function main() {
    
    const challengeContractAddress = '0x7Ecf4C7781a28D53610C13292991AEf4f7CD859C';

    // Connect to the challenge contract
    const GuessTheSecretNumberChallenge = await ethers.getContractFactory("GuessTheSecretNumberChallenge");
    const guessTheSecretNumberChallenge = await GuessTheSecretNumberChallenge.attach(challengeContractAddress);
  
    // Find and send the answer (with the required 1 ETH)
    const answerHash = "0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365";

    for (let index = 0; index < 1000; index++) {
        if(ethers.utils.keccak256(index) == answerHash) {
            await guessTheSecretNumberChallenge.guess(index, { value: ethers.utils.parseEther("1") });
            console.log(`Secret number (${index}) has been found and sent.`);
        }
    }
}
  
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
