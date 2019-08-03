pragma solidity ^0.5.1;

contract Review {

    struct File {
        bool isExist;
        string name;
        uint rating;
        string hash;
        string[] comment;
    }

    struct User {
        bool isExist;
        address userAddress;
        string name;
        string[] files;
        mapping(string => File) files_map;
    }

    mapping(address => User) public users;

    modifier newUser(){
        if(!users[msg.sender].isExist) revert("User Exists");
        _;
    }
    modifier existUser(){
        if(users[msg.sender].isExist) revert("User doesn't Exists");
        _;
    }

    modifier newFile(string memory hash){
        if(!users[msg.sender].files_map[hash].isExist) revert("File Exists");
        _;
    }
    modifier existFile(string memory hash){
        if(users[msg.sender].files_map[hash].isExist) revert("File doesn't Exists");
        _;
    }

    modifier FileLength(){
        if(users[msg.sender].files.length != 0) revert("No files");
        _;
    }

    function createUser(string memory name) public newUser returns(bool){
        User memory user;
        user.userAddress = msg.sender;
        user.isExist = true;
        user.name = name;
        users[msg.sender] = user;
        return true;
    }

    function getUser() public existUser view returns(string memory, uint){
        return(users[msg.sender].name, users[msg.sender].files.length);
    }

    function updateUser(string memory name) public existUser returns(bool){
        users[msg.sender].name = name;
        return true;
    }

    function deleteUser() public existUser returns(bool){
        users[msg.sender].isExist = false;
        return true;
    }

    function addFile(string memory hash, string memory name, uint rating) public existUser newFile(hash) existUser returns(bool){
        File memory file;
        file.hash = hash;
        file.isExist = true;
        file.rating = rating;
        file.name = name;
        users[msg.sender].files.push(hash);
        users[msg.sender].files_map[hash] = file;
        return true;
    }

    function getUserFileLength() public view existUser FileLength returns(uint) {
        return users[msg.sender].files.length;
    }

    function getUserFilebyIndex(uint index) public existUser FileLength view returns(string memory, string memory, uint) {
        string memory hash = users[msg.sender].files[index];
        return (
            hash,
            users[msg.sender].files_map[hash].name,
            users[msg.sender].files_map[hash].rating
            );
    }

    function updateUserFilebyIndex(uint index, string memory name, uint rating) public existUser FileLength returns(bool) {
        string memory hash = users[msg.sender].files[index];
        users[msg.sender].files_map[hash].rating = rating;
        users[msg.sender].files_map[hash].name = name;
        return true;
    }
}
