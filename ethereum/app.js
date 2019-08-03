var ethers = require('ethers');

let web3Provider = ethers.getDefaultProvider('ropsten');

let reviewContractAddress = '0x692a70d2e424a56d2c6c27aa97d1a86395877b3a';
let storeContractAddress = '0xd71a648cf882ed954037136ee961f0db53e1689b';

let privateKey = '0x31B52C32C3AA048DDE03DEF434300B90F4A39F4F97AC3EA0BF8619CE4A6DF8E1';

import ReviewABI from './abi/review.json';
import StoreABI from './abi/store.json';


let wallet = new ethers.Wallet(privateKey, web3Provider);

var review =  new ethers.Contract(reviewContractAddress, ReviewABI, wallet);
var store =  new ethers.Contract(storeContractAddress, StoreABI, wallet);

module.exports = {
    getLength: async function() {
        return review.getLength()
            .then(function (result) {
                return result;
            }).catch(function (e) {
                return e;
            });
    }
};
