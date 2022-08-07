// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GanacheDai is Ownable, ERC20 {
    constructor()
        ERC20("Ganache Dai Token", "GDai")
    {
        
            _mint(msg.sender, 500 ether);
        
    }
}