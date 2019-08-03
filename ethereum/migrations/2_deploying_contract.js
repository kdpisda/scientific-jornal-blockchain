const reviewSol = artifacts.require("./review.sol");
const storeSol = artifacts.require("./store.sol");

module.exports = function(deployer) {
  deployer.deploy(reviewSol);
  deployer.deploy(storeSol, r.address);
};
