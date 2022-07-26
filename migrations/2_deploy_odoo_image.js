const odooImage = artifacts.require('odooImage');

module.exports = function (deployer) {
  deployer.deploy(odooImage);
};
