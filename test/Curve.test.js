const { use, expect } = require('chai');



function tokensWei(n) {
    return ethers.utils.parseEther(n);
}



describe("Vault Contract", function () {

    beforeEach(async function () {
    
        const VaultInit = await ethers.getContractFactory("ContinousToken");
        const mockDAI = await ethers.getContractFactory("GanacheDai");

        const [deployer, addr1, addr2] = await ethers.getSigners();

       const DAI = await mockDAI.deploy();   // 1 prob    
       await DAI.deployed();

        const Vault = await VaultInit.deploy(500000, DAI.address);    // params?

        await Vault.deployed();

       
    });
    

      it('Mint LVRG token', async function () {
        
          await DAI.connect(addr1).approve(Vault.address, tokensWei(5));
          await Vault.connect(addr1).mint(tokensWei(5))

          expect(Vault.totalSupply()).to.equal(Vault.balanceOf(addr1))
        
          
      })


      it('Burn LVRG token', async function () {
        
        await Vault.connect(addr2).approve(Vault.address, tokensWei(5))
        receivedDAI = await Vault.connect(addr2).burn(tokensWei(5))

        expect(receivedDAI).to.equal(DAI.balanceOf(addr2))

        // check return _continousBurn == ?
        // supply of DAI in Vault == tokensAmount (addr2)
        
    })





   

})