const hre = require("hardhat");

const main = async() =>
{
    const[deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploy contracts with account: ", deployer.address);

    console.log("Account balance: ", accountBalance.toString());

    const Token = await hre.ethers.getContractFactory("WaveContract");
    const portal = await Token.deploy();
    await portal.deployed();

    console.log("Contract address:", portal.address);
};

const runMain = async() =>{
    try{
        await main();
        process.exit(0);
    }
    catch(error)
    {
        console.log(error);
        process.exit(0);
    }
};

runMain();