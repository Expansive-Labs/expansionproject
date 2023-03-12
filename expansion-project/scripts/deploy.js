const hre = require("hardhat");

async function main() {

  // Expansion Project deployment
  const ExpansionProject = await hre.ethers.getContractFactory("ExpansionProject");
  const expansionProject = await ExpansionProject.deploy();
  await expansionProject.deployed();
  console.log(`Expansion Project was deployed to: ${expansionProject.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
