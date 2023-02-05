//--------------------------------------
// Deployment commands:
// npx hardhat node
// npx hardhat compile
// npx hardhat run --network localhost scripts/deploy.js
//--------------------------------------
const hre = require("hardhat");

async function main() {

  const ExpansionProject = await hre.ethers.getContractFactory("ExpansionProject");
  const expansionProject = await ExpansionProject.deploy();

  await expansionProject.deployed();

  console.log(`Expansion Project was deployed to: ${expansionProject.address}`);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});