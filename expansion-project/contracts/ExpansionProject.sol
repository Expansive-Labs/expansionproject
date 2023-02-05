// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//--------------------------------------
// Expansion Project: ERC20 Token
//
// Symbol      : EXP
// Name        : Expansion Project
// Total supply: 1000000
// Decimals    : 18
//--------------------------------------
contract ExpansionProject is ERC20{

    constructor() ERC20("Expansion Project", "EXP") {
        _mint(msg.sender, 1000000 * 10 ** uint256(decimals()));
    }
}