pragma solidity ^0.5.1;

contract Store {
    //Store the list of ETH addresses
    address[16] public users;
    string[] papers;
    string fileHash;
    string userAddress;
    string userName;

    // Events
    event ipfsSent(string _ipfsHash, address _address);
    event inboxResponse(string response);

    function save(string memory x, string memory y, string memory z) public returns (bool) {
        fileHash = x;
        userAddress = y;
        userName = z;
        papers.push(x);
        return true;
    }

    function getFile() public view returns (string memory) {
        return fileHash;
    }

    function getAll() public view returns (string memory) {
        return fileHash;
    }

    function getName() public view returns (string memory) {
        return userName;
    }

    function addPaper(string memory _hash) public{
        papers.push(_hash);
    }

    function getPaperAtIndex(uint index) public view returns (string memory paper) {
        if (index < papers.length){
            return papers[index];
        }
        return "null";
    }

    function getLen() public view returns (uint) {
        return papers.length;
    }

}
