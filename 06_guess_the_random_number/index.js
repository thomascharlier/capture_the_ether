var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'wss://mainnet.infura.io/ws/v3/0adc70ddb60a4b59a34eb73a3306ddcf');

// answer = uint8( keccak256(block.blockhash(block.number - 1), now) );

web3.eth.getBlockNumber().then((blockNumber) => {

	web3.eth.getBlock()

});