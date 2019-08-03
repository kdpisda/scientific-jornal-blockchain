const reviewSol = artifacts.require("./review.sol");
const storeSol = artifacts.require("./store.sol");

module.exports = function(deployer) {
  deployer.deploy(reviewSol).then(r => {
    deployer.deploy(storeSol, r.address);
  });
};
