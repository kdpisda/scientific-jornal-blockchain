import ReviewABI from "./abi/review.json";
import StoreABI from "./abi/store.json";

const Web3 = require("web3");
let account = null;
let airbnbContract;
let reviewContractAddress = "0x692a70d2e424a56d2c6c27aa97d1a86395877b3a";
let storeContractAddress = "0xbbf289d846208c16edc8474705c748aff07732db";

// "https://ropsten.infura.io/v3/34db7aa51a29454db3a3b3b68abd92ca"

module.exports = {
  web3: function() {
    let web3;
    if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      const provider = new Web3.providers.HttpProvider(
        "https://testnet2.matic.network"
      );
      web3 = new Web3(provider);
    }
    web3.eth.defaultAccount = web3.eth.accounts[0];
    return web3;
  }
};
