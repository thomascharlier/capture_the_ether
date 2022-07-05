async function main() {

    const challengeContractAddress = '0x079808fE0A574eDC26b712b51c6490d1804702a5';

    // Get account
    const hardhat = require("hardhat");
    const account = await hardhat.ethers.getSigner();

    // Deploy our contract (and wait for deployment to finish)
    const CalculateAnswer = await ethers.getContractFactory("CalculateAnswer");
    const calculateAnswer = await CalculateAnswer.deploy();
    console.log('Deploying smart contract...');
    await calculateAnswer.deployed();
    console.log(`Smart contract deployed (${calculateAnswer.address})`);

    // Call the function in our contract that finds and sends the answer
    await calculateAnswer.findAndSendAnswer(challengeContractAddress, { value: ethers.utils.parseEther("1") });
    console.log('Answer has been found and sent.');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });