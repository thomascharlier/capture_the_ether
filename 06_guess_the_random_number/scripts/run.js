async function main() {

    const challengeContractAddress = '0x96fA0a301D173d2A08fb676bDEf7e43Ee29d1282';

    const provider = ethers.providers.getDefaultProvider('ropsten');
    const challengeBlockHash = "0x75fb8341fdb0a4548d8de9c7cb28d21eee84e3b6a79f2c74169296a5134e7945"; // Find on Etherscan
    const challengeBlock = await provider.getBlock(challengeBlockHash);
    const challengeBlockNumber = challengeBlock.number;
    const challengeBlockTimestamp = challengeBlock.timestamp;
    console.log(`Challenge smart contract has been deployed in block #${challengeBlockNumber} (Timestamp : ${challengeBlockTimestamp})`);

    // Connect to the challenge contract
    const GuessTheRandomNumberChallenge = await ethers.getContractFactory("GuessTheRandomNumberChallenge");
    const guessTheRandomNumberChallenge = await GuessTheRandomNumberChallenge.attach(challengeContractAddress);

    // Deploy our contract (and wait for deployment to finish)
    const CalculateAnswer = await ethers.getContractFactory("CalculateAnswer");
    const calculateAnswer = await CalculateAnswer.deploy(challengeBlockNumber, challengeBlockTimestamp);
    console.log('Deploying smart contract...');
    await calculateAnswer.deployed();
    console.log(`Smart contract deployed (${calculateAnswer.address})`);

    // Call the method (in our contract) to get the answer
    const answer = await calculateAnswer.answer.call();
    console.log(`Answer found : ${answer}, sending answer to challenge contract (${challengeContractAddress})...`);

    // Send the answer (with the required 1 ETH)
    await guessTheRandomNumberChallenge.guess(answer, { value: ethers.utils.parseEther("1") });
    console.log('Answer sent.');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });