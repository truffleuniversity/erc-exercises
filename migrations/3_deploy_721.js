const TruffleNFT = artifacts.require("TruffleNFT");

module.exports = function(deployer) {
  deployer.deploy(TruffleNFT);
};