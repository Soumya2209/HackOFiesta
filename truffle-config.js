const path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");
require("dotenv").config();

module.exports = {
 
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    matic: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          "https://rpc-mumbai.matic.today"
        );
      },
      network_id: 80001,
      gas: 4500000,
      gasPrice: 10000000000
    }
  }
};
