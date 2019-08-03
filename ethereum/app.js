var ethers = require("ethers");

let web3Provider = ethers.getDefaultProvider("ropsten");

let reviewContractAddress = "0x7a3c74a2e4be2b6e305252d94ae386bfaeef5e07";
let storeContractAddress = "0xd71a648cf882ed954037136ee961f0db53e1689b";

let privateKey =
  "toss strong carpet cloth twin nominee cave skull fog gap enroll toy";

import ReviewABI from "./abi/review.json";
import StoreABI from "./abi/store.json";

let wallet = ethers.Wallet.fromMnemonic(privateKey).connect(web3Provider);

var review = new ethers.Contract(reviewContractAddress, ReviewABI, wallet);
var store = new ethers.Contract(storeContractAddress, StoreABI, wallet);

module.exports = {
  createUser: async (comments, rating, file_hash) =>
    review.pushAll(comments, rating, file_hash),
  getLength: async function() {
    console.log(review);
    return review
      .getLength()
      .then(function(result) {
        return result;
      })
      .catch(function(e) {
        return e;
      });
  }
};
