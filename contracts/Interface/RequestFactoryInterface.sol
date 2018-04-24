pragma solidity ^0.4.21;

contract RequestFactoryInterface {
    event RequestCreated(address request, address indexed owner, int indexed bucket, uint[12] params);
    event RequestStateChanged(address request, uint8 state);

    function emitAborted() public;
    function emitCancelled() public;
    function emitExecuted() public;

    function createRequest(address[3] addressArgs, uint[12] uintArgs, bytes callData) public payable returns (address);
    function createValidatedRequest(address[3] addressArgs, uint[12] uintArgs, bytes callData) public payable returns (address);
    function validateRequestParams(address[3] addressArgs, uint[12] uintArgs, uint endowment) public view returns (bool[6]);
    function isKnownRequest(address _address) public view returns (bool);
}
