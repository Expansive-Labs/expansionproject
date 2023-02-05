const hre = require("hardhat");

async function main() {

  // Greeter contract deployment
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployed();
  console.log(`Greeter was deployed to: ${greeter.address}`);

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
