const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await ethers.getContractFactory("Token");
  const initialSupply = "1000000000000000000000"; // 1000 tokens

  const token = await Token.deploy(initialSupply);

  let tx = token.deploymentTransaction();

  console.log("Tx hash: ", tx.hash);

  console.log("Token deployed to: ", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
