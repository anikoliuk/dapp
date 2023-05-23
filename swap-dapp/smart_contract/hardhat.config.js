require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.4',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Rejt-UunHuUC0J13QFRxANG5WOygJuPz',
      accounts: [
        '5e8e2ac43ac165559be45828131453e411b91cd88eef37e50fd257881203507d',
      ],
    },
  },
}