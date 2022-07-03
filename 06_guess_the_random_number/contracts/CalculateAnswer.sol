pragma solidity ^0.4.21;

contract CalculateAnswer {
    
    uint8 public answer;

    function CalculateAnswer(uint _blockNumber, uint _now) public payable {
        answer = uint8(keccak256(block.blockhash(_blockNumber - 1), _now));
    }

}