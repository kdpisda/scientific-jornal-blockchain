pragma solidity >=0.4.26;

contract Review {

    struct File {
        bool isExist;
        string name;
        uint rating;
        uint minAmount;
        string hash;
        string[] comments;
        address[] access;
    }
    
    struct User {
        bool isExist;
        address userAddress;
        string name;
        string[] files;
        mapping(string => File) files_map;
    }
    
    mapping(address => User) public users;
    
    modifier newUser(address useraddress){
        if(users[useraddress].isExist) revert("users exist");
        _;
    }
    modifier existUser(address useraddress){
        if(!users[useraddress].isExist) revert("user does not exist");
        _;
    }
    
    modifier newFile(address useraddress, string memory hash){
        if(users[useraddress].files_map[hash].isExist) revert();
        _;
    }
    modifier existFile(address useraddress, string memory hash){
        if(!users[useraddress].files_map[hash].isExist) revert();
        _;
    }
    
    modifier FileLength(address useraddress){
        if(users[useraddress].files.length == 0) revert();
        _;
    }
    
     modifier isAccess(address useraddress, uint index){
        string memory hash = users[useraddress].files[index];
        if(users[useraddress].files_map[hash].access[0] != useraddress) revert();
        _;
    }

    function createUser(address useraddress, string memory name) public newUser(useraddress) returns(bool){
        string[] memory files;
        users[useraddress] = User(true, msg.sender, name, files);
        return true;
    }
    
    function getUser(address useraddress) public existUser(useraddress) view returns(string memory, uint){
        return(users[useraddress].name, users[msg.sender].files.length);
    }
    
    function updateUser(address useraddress, string memory name) public existUser(useraddress) returns(bool){
        users[useraddress].name = name;
        return true;
    }
    
    function deleteUser(address useraddress) public existUser(useraddress) returns(bool){
        users[useraddress].isExist = false;
        return true;
    }
    
    function addFile(address useraddress, string memory hash, uint minAmount, string memory name) public existUser(useraddress) newFile(useraddress, hash) returns(bool){
        File memory file;
        file.hash = hash;
        file.isExist = true;
        file.name = name;
        file.rating = 0;
        file.minAmount = minAmount;
        users[useraddress].files.push(hash);
        users[useraddress].files_map[hash] = file;
        users[useraddress].files_map[hash].access.push(useraddress);
        return true;
    }
    
    function getUserFileLength(address useraddress) public view existUser(useraddress) FileLength(useraddress) returns(uint) {
        return users[useraddress].files.length;
    }
    
    function getUserFilebyIndex(address useraddress, uint index) public existUser(useraddress) FileLength(useraddress) isAccess(useraddress, index) view returns(string memory, string memory, uint) {
        return (
            users[useraddress].files[index],
            users[useraddress].files_map[users[useraddress].files[index]].name,
            users[useraddress].files_map[users[useraddress].files[index]].rating
            );
    }
    
    function updateUserFilebyIndex(address useraddress, uint index, string memory name, uint rating) public existUser(useraddress) FileLength(useraddress) returns(bool) {
        users[useraddress].files_map[users[useraddress].files[index]].rating = rating;
        users[useraddress].files_map[users[useraddress].files[index]].name = name;
        return true;
    }
    
    function getFileFromHash(address useraddress, string memory hash) public view existUser(useraddress) FileLength(useraddress) existFile(useraddress, hash) returns(string memory, uint){
        return(
            users[useraddress].files_map[hash].name,
            users[useraddress].files_map[hash].rating
            );
    }
    
    function addComments(address useraddress, string memory hash, string memory comment, uint rating)public returns(bool){
        users[useraddress].files_map[hash].comments.push(comment);
        users[useraddress].files_map[hash].rating = rating;
        return true;
    }
    
    function getCommentsLength(address useraddress, string memory hash) public view returns(uint){
        return users[useraddress].files_map[hash].comments.length;
    }
    
    function getCommentById(address useraddress, string memory hash, uint id) public view returns(string memory){
        return users[useraddress].files_map[hash].comments[id];
    }
    
    function addAccessToUser(address useraddress, string memory hash)public payable existUser(useraddress) existUser(msg.sender) returns(bool){
        require(msg.value > users[useraddress].files_map[hash].minAmount);
        users[useraddress].files_map[hash].access.push(msg.sender);
        return true;
    }
    
    function getAccessOfUser(address useraddress, string memory hash)public view existUser(useraddress) existUser(msg.sender) returns(bool){
        for(uint i; i < users[useraddress].files_map[hash].access.length; i++){
            if(users[useraddress].files_map[hash].access[i] == msg.sender) return true;
        }
        return false;
    }
    
}