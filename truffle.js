const HDWalletProvider = require("@truffle/hdwallet-provider");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    },
    teams: {
      provider: function() {
        return new HDWalletProvider(process.env.Mnemonic, process.env.url, 0, 10, false);
      },
      network_id: process.env.NetworkID
    }
  },
// Configure your compilers
  compilers: {
    solc: {
      version: "0.4.17"    
    }
  }

};