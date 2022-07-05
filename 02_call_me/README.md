# Challenge #2 - Call me

## Inititating the project

**1. Initiate the project**
> npm init -y

**2. Install Hard Hat**
> npm install --save-dev hardhat

**3. Install hardhat-ethers, the plugin for integration with ethers.js**
> npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@^5.0.0' 

**4. Install dotenv**
> npm install dotenv --save

**5. Create a .env file at the root**
Inside, add your access to Ropsten URL and the private key of the wallet that will send transactions

**6. Create a .gitignore file**
Especially for the .env file ⚠️

**7. Launch Hard Hat, when multiple choice list appears, select 'Create an empty hardhat.config.js'**
> npx hardhat

**8. In 'hardhat.config.js', change the Solidity compiler version and add the Ropsten testnet network**

**9. Create a '/contracts' and '/scripts' folders at the root of the project**
> mkdir contracts scripts

## Resolution

**7. Add the challenge smart contract inside the '/contracts' folder**