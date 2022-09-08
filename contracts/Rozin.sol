// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Rozin is ERC20, Ownable{
    constructor(uint256 _supply) ERC20("Rozin", "ROZIN") {
        _mint(msg.sender, _supply * (10 ** decimals()));
    }   
}