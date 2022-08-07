import { ethers } from "hardhat";

const main = async () => {
    const Counter = await ethers.getContractFactory("Counter")
    const counter = await Counter.deploy()
    await counter.deployed()

    console.log(`Contract deployed at ${counter.address}`)

    await counter.add()
    const counts = await counter.getCounts()
    console.log(`Current counts ${counts}`)
}


main().then(() => {
    console.log('main success')
    process.exit(0)
}).catch((err) => {
    console.error(err)
    process.exitCode = 1
})