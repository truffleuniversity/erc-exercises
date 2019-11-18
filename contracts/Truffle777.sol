pragma solidity >=0.4.21 <0.6.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC777/ERC777.sol";

contract Truffle777 is ERC777 {
    constructor () public ERC777("Truffle777", "T7", new address[](0)) {
        _mint(msg.sender, msg.sender, 10000 * 10 ** 18, "", "");
    }
}

