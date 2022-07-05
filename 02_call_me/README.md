1. Initiate the project
> npm init -y

2. Install Hard Hat
> npm install --save-dev hardhat

3. Install hardhat-ethers, the plugin for integration with ethers.js
> npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@^5.0.0' 

4. Install dotenv
> npm install dotenv --save

5. Create a .env file at the root and add Ropsten access node and private key of wallet that will send transactions

6. Create a .gitignore file ⚠️

7. Launch Hard Hat, when multiple choice list appears, select 'Create an empty hardhat.config.js'
> npx hardhat

8. In 'hardhat.config.js', change the Solidity compiler version and add the Ropsten testnet network

9. Create a '/contracts' and '/scripts' folders at the root of the project
> mkdir contracts scripts

----

7. Add the challenge smart contract inside the '/contracts' folder

8. 