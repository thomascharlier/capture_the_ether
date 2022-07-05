pragma solidity ^0.4.21;

contract PredictTheFutureChallenge {

    address public guesser;
    uint8 public guess;
    uint256 public settlementBlockNumber;

    function PredictTheFutureChallenge() public payable {
        require(msg.value == 1 ether);
    }

    function isComplete() public view returns (bool) {
        return address(this).balance == 0;
    }

    function lockInGuess(uint8 n) public payable {
        require(guesser == 0); // No guess sent yet
        require(msg.value == 1 ether);

        guesser = msg.sender;
        guess = n;
        settlementBlockNumber = block.number + 1;
    }

    function settle() public {
        require(msg.sender == guesser);
        require(block.number > settlementBlockNumber); // Can't be in the same tx

        uint8 answer = uint8(keccak256(block.blockhash(block.number - 1), now)) % 10; // Fire settle() at a chosen block in the future ?

        guesser = 0;
        if (guess == answer) {
            msg.sender.transfer(2 ether);
        }
    }
}

contract CalculateAnswer {

    uint public blockNumber;

    function() public payable {} // Fallback function to receive the 1 ETH

    function findAndSendAnswer(address addr) public payable {

        uint valueToSend = 1 ether;
        uint8 answer = uint8(keccak256(block.blockhash(block.number - 1), now)) % 10;

        PredictTheFutureChallenge challengeContract = PredictTheFutureChallenge(addr);
        challengeContract.lockInGuess.value(valueToSend)(answer);

        blockNumber = block.number + 1;
    }

}