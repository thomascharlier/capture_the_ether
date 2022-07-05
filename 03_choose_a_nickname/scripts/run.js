async function main() {

  const challengeContractAddress = '0x71c46Ed333C35e4E6c62D32dc7C8F00D125b4fee';

  // Connect to the challenge contract
  const CaptureTheEther = await ethers.getContractFactory("CaptureTheEther");
  const captureTheEther = await CaptureTheEther.attach(challengeContractAddress);

  // Choose nickname and convert it to Bytes32
  const nickname = "my_nickname";
  const nicknameInBytes32 = await ethers.utils.formatBytes32String(nickname);
  console.log(`Nickname '${nickname}' has been converted to bytes32 : ${nicknameInBytes32}`);

  // Set nickname
  await captureTheEther.setNickname(nicknameInBytes32);
  console.log('Nickname has been set.');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });