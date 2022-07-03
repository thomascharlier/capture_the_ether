async function main() {

    const provider = ethers.providers.getDefaultProvider('ropsten');
    const challengeAddress = '0xfCdD8441B961df590eBC2F8E7CEB114925724F24';
    const challengeBlockHash = "0x71c08d233fc04b8b6ea006acc001573c58506be143fd27e991e7f32dc9331668"; // https://ropsten.etherscan.io/block/12517983
    const challengeBlock = await provider.getBlock(challengeBlockHash);
    const challengeBlockNumber = challengeBlock.number;
    const challengeBlockTimestamp = challengeBlock.timestamp;

    console.log('challengeBlockNumber = ' + challengeBlockNumber);
    console.log('challengeBlockTimestamp = ' + challengeBlockTimestamp);

    // Connect to the challenge contract
    const GuessTheRandomNumberChallenge = await ethers.getContractFactory("GuessTheRandomNumberChallenge");
    const challengeContract = await GuessTheRandomNumberChallenge.attach(challengeAddress);
    console.log('Connected to challenge contract.')

    // Deploy our contract (and wait for deployment to be completed)
    const CalculateAnswer = await ethers.getContractFactory("CalculateAnswer");
    const calculateAnswer = await CalculateAnswer.deploy(challengeBlockNumber, challengeBlockTimestamp);
    await calculateAnswer.deployed();
    console.log('Deployed answer contract.')

    // Call the function in our contract that finds the answer
    const answer = await calculateAnswer.answer.call();
    console.log('Answer found : ' + answer + ', sending answer to challenge contract...')

    // Send the answer (with the required 1 ETH)
    await challengeContract.guess(answer, { value: ethers.utils.parseEther("1") });
    console.log('Answer sent.')
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });