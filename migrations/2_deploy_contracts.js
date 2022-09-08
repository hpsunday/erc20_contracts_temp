const Rozin = artifacts.require("Rozin");

module.exports = function (deployer) {
  deployer.deploy(Rozin, 1000);
};
