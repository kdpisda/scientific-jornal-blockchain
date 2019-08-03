var ethers = require("ethers");

let web3Provider = ethers.getDefaultProvider("ropsten");

let reviewContractAddress = "0x55248b60584b8dd5eb5d0e0fa3b8b9fbe78d19d6";
let storeContractAddress = "0xd71a648cf882ed954037136ee961f0db53e1689b";

let privateKey =
  "toss strong carpet cloth twin nominee cave skull fog gap enroll toy";

import ReviewABI from "./abi/review.json";
import StoreABI from "./abi/store.json";

let wallet = ethers.Wallet.fromMnemonic(privateKey).connect(web3Provider);

var review = new ethers.Contract(reviewContractAddress, ReviewABI, wallet);
var store = new ethers.Contract(storeContractAddress, StoreABI, wallet);

module.exports = {
  createUser: async email => review.createUser(email),
};
