var ethers = require("ethers");

let web3Provider = ethers.getDefaultProvider("ropsten");

let reviewContractAddress = "0x5791a2ad689b61198a3aa73b0b11f02915aed691";
let storeContractAddress = "0xd71a648cf882ed954037136ee961f0db53e1689b";

let privateKey =
  "toss strong carpet cloth twin nominee cave skull fog gap enroll toy";

import ReviewABI from "./abi/review.json";
import StoreABI from "./abi/store.json";

let wallet = ethers.Wallet.fromMnemonic(privateKey).connect(web3Provider);

var review = new ethers.Contract(reviewContractAddress, ReviewABI, wallet);
var store = new ethers.Contract(storeContractAddress, StoreABI, wallet);

module.exports = {
  createUser: async (email) => review.createUser(email).then(r => r).catch(e => console.log(e)),
  getUser: async () => review.getUser().then(r => r).catch(e => console.log(e)),
  updateUser: async (email) => review.updateUser(email).then(r => r).catch(e => console.log(e)),
  deleteUser: async () => review.deleteUser().then(r => r).catch(e => console.log(e)),
  addFile: async (hash, email, rating) => review.addFile(hash, email, rating).then(r => r).catch(e => console.log(e)),
  getUserFileLength: async () => review.getUserFileLength().then(r => r).catch(e => console.log(e)),
  getUserFilebyIndex: async (index) => review.getUserFilebyIndex(index).then(r => r).catch(e => console.log(e)),
  updateUserFilebyIndex: async (index, name, rating) => review.updateUserFilebyIndex(index, name, rating).then(r => r).catch(e => console.log(e))
};
