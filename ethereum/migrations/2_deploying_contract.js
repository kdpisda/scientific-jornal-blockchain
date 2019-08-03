const reviewSol = artifacts.require("../contracts/review.sol");
const storeSol = artifacts.require("../contracts/store.sol");

module.exports = function(deployer) {
    deployer.deploy(reviewSol).then(r => {
        deployer.deploy(storeSol, r.address);
    });
};
