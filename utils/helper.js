import Web3 from "web3";
const web3 = new Web3(
  "https://testnet2.matic.network" ||
    window.web3.currentProvider ||
    "ws://localhost:8546",
  null,
  {}
);
export default web3;
