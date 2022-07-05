# Challenge #2 - Call me

## Initiating the project

1. **Initiate npm**  
`npm init -y`

2. **Install Hard Hat**  
`npm install --save-dev hardhat`

3. **Install hardhat-ethers**  
The plugin for integration with ethers.js  
`npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@^5.0.0'`

4. **Install dotenv**  
`npm install dotenv --save`

5. **Create a .env file at root**  
Inside, add your access to Ropsten and the private key of the wallet that will send transactions

6. **Create a .gitignore file**  
Especially for the *.env* file ⚠️

7. **Launch Hard Hat**  
`npx hardhat`  
When multiple choice list appears, select *Create an empty hardhat.config.js*. Then in the *hardhat.config.js*, change the Solidity compiler version and add the Ropsten testnet network.

9. **Create a */contracts* and */scripts* folders at the root of the project**  
`mkdir contracts scripts`

## Resolution

7. Add the challenge smart contract inside the '/contracts' folder