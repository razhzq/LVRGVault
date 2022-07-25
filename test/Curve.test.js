const { expect } = require('chai');


function tokensWei(n) {
    return ethers.utils.parseEther(n);
}



describe("Vault Contract", function () {
    async function deployVaultContract() {
        
        const VaultInit = await ethers.getContractFactory("ContinousToken");
        const mockDAI = await ethers.getContractFactory("GanacheDai");

        const [deployer, addr1, addr2] = await ethers.getSigners();

        const DAI = await mockDAI.deploy(deployer, addr1, addr2);
        await DAI.deployed();

        const Vault = await VaultInit.deploy(500000, DAI.address);    // params?

        await Vault.deployed();

        return { VaultInit, Vault, deployer, addr1, addr2 };

    }
      it('Mint LVRG token', async function () {
          const { Vault, deployer, addr1, addr2 } = await loadFixture(deployVaultContract);
          await DAI.connect(addr1).approve(Vault.address, tokensWei(5));
          await Vault.connect(addr1).mint(tokensWei(5))

          // check return _continousmint == ?
          
      })

      it('Burn LVRG token', async function () {
        const { Vault, deployer, addr1, addr2 } = await loadFixture(deployVaultContract);

        await Vault.connect(addr1).burn(tokensWei(5))

        // check return _continousBurn == ?
        
    })

})