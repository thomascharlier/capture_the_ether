async function main() {

  // Connect to the contract we want to interact with
  const CaptureTheEther = await ethers.getContractFactory("CaptureTheEther");
  const contract = await CaptureTheEther.attach("0x71c46Ed333C35e4E6c62D32dc7C8F00D125b4fee");

  // Choose nickname and convert it to Bytes32
  const nickname = "ngendont";
  const nicknameInBytes32 = ethers.utils.formatBytes32String(nickname);

  // Send nickname to smart contract
  await contract.setNickname(nicknameInBytes32);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });