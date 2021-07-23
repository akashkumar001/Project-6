const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
     return new HDWalletProvider("coil empower almost narrow coin blue plunge unlock casino gossip cool worth",
      "https://rinkeby.infura.io/v3/4e168235513845bbb308ec5c67624210")
         },
          network_id: '4',
      gas: 4500000,
      gasPrice: 10000000000,
        }
  },
  compilers: {
    solc: {
      version: "^0.4.24", // A version or constraint - Ex. "^0.5.0"
                         // Can also be set to "native" to use a native solc
      docker: false, // Use a version obtained through docker
    }
  }
};