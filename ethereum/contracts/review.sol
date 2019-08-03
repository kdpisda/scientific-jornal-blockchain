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
        File[] files;
        mapping(string => File) files_map;
    }

    mapping(address => User) public users;

    modifier newUser(){
        if(!users[msg.sender].isExist) revert();
        _;
    }
    modifier existUser(){
        if(users[msg.sender].isExist) revert();
        _;
    }

    modifier newFile(string memory hash){
        if(!users[msg.sender].files_map[hash].isExist) revert();
        _;
    }
    modifier existFile(string memory hash){
        if(users[msg.sender].files_map[hash].isExist) revert();
        _;
    }

    modifier FileLength(){
        if(users[msg.sender].files.length != 0) revert();
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

    function getUser() public existUser returns(string memory, uint){
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

    function addFile(string memory hash, string memory name, uint rating) public newFile(hash) existUser returns(bool){
        File memory file;
        file.hash = hash;
        file.isExist = true;
        file.rating = rating;
        file.name = name;
        users[msg.sender].files.push(file);
        users[msg.sender].files_map[hash] = file;
        return true;
    }

    function getUserFileLength() public FileLength returns(uint) {
        return users[msg.sender].files.length;
    }

    function getUserFilebyIndex(uint index) public FileLength returns(string memory hash, string memory name, uint rating) {
        return (
            users[msg.sender].files[index].hash,
            users[msg.sender].files[index].name,
            users[msg.sender].files[index].rating
            );
    }

    function updateUserFilebyIndex(uint index, string memory name, uint rating) public FileLength returns(bool) {
        users[msg.sender].files[index].rating = rating;
        users[msg.sender].files[index].name = name;
        users[msg.sender].files_map[users[msg.sender].files[index].hash].rating = rating;
        users[msg.sender].files_map[users[msg.sender].files[index].hash].name = name;
        return true;
    }
}
