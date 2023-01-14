require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "The list of all accounts generated", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

module.exports = {
    solidity: "0.8.17",
    networks: {
      goerli: {
        // This value will be replaced on runtime
        url: process.env.STAGING_QUICKNODE_KEY,
        accounts: [process.env.PRIVATE_KEY],
      }
    },
};