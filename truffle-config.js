const path = require("path");
var Web3 = require('web3');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    kaleido: {
      provider: () => {
        const appCred = 'u0asapy2qw:2QUqi8nGf6D01Mm2tXI7PI6UKJPd7C5KnieB6htBv5M'; // from application credential widget
        const connectionURL = 'u0pllezx4b-u0ll40lsdi-rpc.us0-aws.kaleido.io'; // without protocol (https://)
        return new Web3.providers.HttpProvider(`https://${appCred}@${connectionURL}`, 100000);
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
      /* type: 'quorum' // Use this property for Quorum environments */
    },
  }
};
