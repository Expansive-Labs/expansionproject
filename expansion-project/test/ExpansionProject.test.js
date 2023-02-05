const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Expansion Project", () => {
  let Token
  let expToken
  let owner
  let addr1
  let addr2
  const totalSupply = 1000000
  
  before(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    Token = await ethers.getContractFactory("ExpansionProject");
    expToken = await Token.deploy();
    await expToken.deployed();
  });

  it("Should have the correct name", async () => {
    const name = await expToken.name();
    expect(name).to.equal("Expansion Project");
  });

  it("Should have the correct symbol (EXP)", async () => {
    const symbol = await expToken.symbol();
    expect(symbol).to.equal("EXP");
  });

  it("Should have 18 decimals", async () => {
    const decimals = await expToken.decimals();
    expect(decimals).to.equal(18);
  });

  it("Should have a total supply of 1000000", async () => {
    const totalSupply = await expToken.totalSupply();
    expect(totalSupply).to.equal(ethers.utils.parseEther("1000000"));
  });

  it("Should have the correct balance for the owner (msg.sender)", async () => {
    const balance = await expToken.balanceOf(owner.address);
    expect(balance).to.equal(ethers.utils.parseEther("1000000"));
  });

  it("Should transfer tokens correctly", async () => {
    const initialBalance = await expToken.balanceOf(addr1.address);
    expect(initialBalance).to.equal(0);

    const transferAmount = 100000;
    await expToken.transfer(addr1.address, transferAmount);

    const finalBalance = await expToken.balanceOf(addr1.address);
    expect(finalBalance).to.equal(transferAmount);
  });

  it("Should approve and transferFrom tokens correctly", async () => {
    const initialBalance = await expToken.balanceOf(await addr2.address);
    expect(initialBalance).to.equal(0);

    const transferAmount = 100000;
    expToken.transfer(addr2.address, transferAmount);
    const iBalance = await expToken.balanceOf(addr2.address);
    expect(iBalance).to.equal(transferAmount);

    const approveAmount = 100000;
    await expToken.connect(addr2).approve(owner.address, approveAmount);
    expect(await expToken.allowance(addr2.address, owner.address)).to.equal(approveAmount);

    await expToken.transferFrom( addr2.address, owner.address, transferAmount);

    const finalBalance = await expToken.balanceOf(addr2.address);
    expect(finalBalance).to.equal(0);
  });
});