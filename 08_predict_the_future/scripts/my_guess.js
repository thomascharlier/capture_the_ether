async function main() {

    const challengeAddress = '0x...';

    // Deploy our contract (and wait for deployment to finish)
    const CalculateAnswer = await ethers.getContractFactory("CalculateAnswer");
    const calculateAnswer = await CalculateAnswer.deploy();
    console.log('Deploying answer contract...');
    await calculateAnswer.deployed();
    console.log('Answer contract deployed. (' + calculateAnswer.address + ')');

    // Call the function in our contract that finds and sends the answer
    await calculateAnswer.findAndSendAnswer(challengeAddress, { value: ethers.utils.parseEther("1") });

    // 1. Enregistrer le blockNumber de la tx qui va settle

    // 2. Ajouter X block à ce nombre dans le calculs de mon guess

    // 3. Lancer la méthode settle() au block que j'ai calculer

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });