const reviewSol = artifacts.require("../contracts/review.sol");
const storeSol = artifacts.require("../contracts/store.sol");

module.exports = function(deployer) {
    deployer.deploy(reviewSol);
    deployer.deploy(storeSol);
};
