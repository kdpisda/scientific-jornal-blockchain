const reviewSol = artifacts.require("./Review.sol");
const storeSol = artifacts.require("./Store.sol");

module.exports = function(deployer) {
  deployer.deploy(reviewSol).then(r => {
    deployer.deploy(storeSol, r.address);
  });
};
