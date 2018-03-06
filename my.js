const Web3 = require('web3')

//GNT4 on ropsten
const _CONTRACT_ADDR = '0xa8e7ade445974dfc0465bdc30151ae2b594e0ab1'
//EOS on mainnet
//const _CONTRACT_ADDR = '0x7b39940DbaC110f1227D37c395675dEf270AfCd7'

//liuyi1
const _BAL_ADDR = '0xb5129934b99e1c0cd98F5F9e3ed23c70b45B5197'
//liuyi3
//const _BAL_ADDR = '0x5106f3AFa0e27BdD3faffEb9158526FA678895F3'

//const web3Provider = new Web3.providers.HttpProvider(_WEB3_ROPSTEN_INFURA)
const web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
const web3 = new Web3(web3Provider)
console.log(web3.isConnected())
console.log(web3.version.network)
console.log('account[0]:',web3.eth.accounts[0])

web3.eth.defaultAccount = web3.eth.accounts[0]
web3.personal.unlockAccount(web3.eth.defaultAccount, "123456", 999, function (error, result) {
    if (!error) {
        console.log(result);

        //const abi = require(`${constants.TOKENP2P_ABI_LOCATION}/ERC20.json`)
        const abi = require('./ERC20.json')
        //const abi = require('./GNT4.json')
        //console.log(abi)

        const contract = web3.eth.contract(abi)
        // console.log(contract)
        const instance = contract.at(_CONTRACT_ADDR)

        //const d = instance.decimals.call()
        //console.log(d.toString())

        const b = instance.balanceOf.call(_BAL_ADDR)
        console.log(b.toString())

        //const name = instance.name.call()
        //console.log(name.toString())
    }
    else {
        console.error("unlock failed!");
    }
});

