async function main() {

    // Connect to the contract we want to interact with
    const GuessTheSecretNumberChallenge = await ethers.getContractFactory("GuessTheSecretNumberChallenge");
    const contract = await GuessTheSecretNumberChallenge.attach("0x3f99a20Cf5c6c59F142Ba2A3ABb844Db3453E7e6");
  
    // Find and send the answer (with the required 1 ETH)
    const answerHash = "0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365";

    for (let index = 0; index < 1000; index++) {
        if(ethers.utils.keccak256(index) == answerHash) {
            await contract.guess(index, { value: ethers.utils.parseEther("1") });
        }
    }
}
  
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });