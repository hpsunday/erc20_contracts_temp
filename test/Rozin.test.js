const Rozin = artifacts.require("Rozin")

contract("Rozin", (accounts)=>{
    before(async()=>{
        rozin = await Rozin.deployed()
    })

    it("pass 1000 tokens", async()=>{
        let balance = await rozin.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000',  "1k balance for the creator")
    })

    it("can transfer tokens between accounts", async()=>{
        const receiver = 'address where to send'
        let amount = web3.utils.toWei('200','ether')
        await rozin.transfer(receiver, amount, {from:accounts[0]} )
        
        let balance = await rozin.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '200',  "Balance should be 200 tokens for the contract creator")
    })
})