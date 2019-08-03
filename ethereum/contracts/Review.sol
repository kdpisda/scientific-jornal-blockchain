pragma solidity ^0.5.1;

contract Review {
    string[] public comments;
    //0 = Rejected, 1 = Okay, 2 = Great
    uint[] public rating;
    // Adopting a pet
    string[] public hashes;
    address[] public users;

    function pushAll(string memory comment, uint rati, string memory hashf) public returns (bool) {
        comments.push(comment);
        rating.push(rati);
        hashes.push(hashf);
        users.push(msg.sender);
        return true;
    }

    function pushRating(uint i) public returns (bool) {
        rating.push(i);
        return true;
    }

    function pushHash(string memory i) public returns (bool) {
        hashes.push(i);
        return true;
    }

    function pushUser() public returns (bool a) {
        users.push(msg.sender);
        return true;
    }

    function getLength() public view returns (uint) {
        return comments.length;
    }

    function getCommentAtIndex(uint i) public view returns (string memory) {
        return(comments[i]);
    }

    function getRatingAtIndex(uint i) public view returns (uint) {
        return(rating[i]);
    }

    function getHashAtIndex(uint i) public view returns (string memory) {
        return(hashes[i]);
    }

    function getUserAtIndex(uint i) public view returns (address) {
        return(users[i]);
    }


}
