// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
//--------------------------------------
// Expansion Project: ERC20 Token
// Symbol      : EXP
// Name        : Expansion Project
// Total supply: 1000000
// Decimals    : 18
//--------------------------------------
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract ExpansionProject is ERC20{

    constructor() ERC20("Expansion Project", "EXP") {
        _mint(msg.sender, 1000000 * 10 ** uint256(decimals()));
    }
}