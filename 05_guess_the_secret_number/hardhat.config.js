require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
 	defaultNetwork: "ropsten",
 	networks: {
 		hardhat: {
 		},
 		ropsten: {
 			url: process.env.ROPSTEN_URL,
 			accounts: [process.env.PRIVATE_KEY]
 		}
 	},
 	solidity: "0.4.21",
 };