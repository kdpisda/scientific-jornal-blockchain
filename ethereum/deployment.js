const Web3 = require("web3");

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
