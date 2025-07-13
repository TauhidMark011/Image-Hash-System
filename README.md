🛡️ Image Hash System (Blockchain-based Image Validation and Storage)
Tools & Technologies:
Truffle • Solidity • Ganache CLI • IPFS • Web3.js • MetaMask • OpenZeppelin • Infura • Pinata • ERC721 • dotenv • HDWalletProvider • Rinkeby Testnet

📖 About This Project
This project focuses on securely validating image ownership and integrity using blockchain technology. Images are stored on IPFS via Pinata service (using CID), and smart contracts are deployed on the Ethereum Rinkeby Test Network using Infura API. The contract follows the ERC721 standard, enabling each image to be treated as a unique NFT (Non-Fungible Token). This ensures both decentralization and traceable ownership of digital content.

🔧 Key Steps in Development & Testing Workflow:
Truffle Framework: Used for developing, compiling, testing, and deploying Ethereum smart contracts with ease.

npm Setup:
Installed Truffle and related packages: npm install truffle
Initialized Truffle project: npx truffle init
Smart Contracts:
Created OdooImage.sol for the main logic and Migrations.sol for deployment tracking.
Followed ERC-721 standard for NFT-based image identity and ownership.

Configuration:
truffle-config.js configured for HDWalletProvider, Solidity compiler, and deployment to Rinkeby Test Network using Infura.
Local Blockchain Testing:
Used Ganache CLI for running a local Ethereum blockchain with test accounts and free Ether.
Interacted with contracts via npx truffle console.

Libraries & Standards:
Integrated OpenZeppelin Contracts (@openzeppelin/contracts) for secure and modular contract development.

IPFS Integration:
Used Pinata API for storing and retrieving image files on IPFS.
Fetched IPFS metadata including CID, pin size, and timestamp for validation and tracking.

Web3.js:
Enabled interaction between the frontend and Ethereum blockchain.

Environment Management:
Used dotenv and config for secure environment setup and script automation.

Example command: export NODE_ENV=dev && node script/runScript.js

MetaMask Wallet:
Integrated for signing transactions and interacting with the deployed contract via browser extension.

Deployment:
Signed transactions and deployed contracts on the Rinkeby public testnet using:
nginx
npm install @truffle/hdwallet-provider
🔗 Outcome: Delivered a fully functional DApp that allows users to upload, hash, store, and verify images using IPFS and Ethereum. Each image is minted as an NFT using ERC721 standards to ensure ownership and immutability.
