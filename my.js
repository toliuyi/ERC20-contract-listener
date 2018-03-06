const Web3 = require('web3')

var args = process.argv.splice(2)

const networkid = args[0]
const _PROVIDER_URL = 'http://127.0.0.1:8545'
//liuyi1
const _BAL_ADDR = '0xb5129934b99e1c0cd98F5F9e3ed23c70b45B5197'

switch(networkid)
{
    case '1':
        var _PASSWD ='iza1J3q7nSjn'
        //CANDY on mainnet
        var _CONTRACT_ADDR = '0x5106f3AFa0e27BdD3faffEb9158526FA678895F3'
        break;
    case '3':
        var _PASSWD = '123456'
        //GNT4 on ropsten
        var _CONTRACT_ADDR = '0xa8e7ade445974dfc0465bdc30151ae2b594e0ab1'      
        break;
    default:
        console.log('wrong network!',networkid)
        process.exit(0)
}

//var net = require('net');
//var web3 = new Web3(new Web3.providers.IpcProvider('/Users/liuyi/Library/Ethereum/testnet/geth.ipc',net))
var web3 = new Web3(new Web3.providers.HttpProvider(_PROVIDER_URL))
console.log(web3.isConnected())
console.log(web3.version.network)
console.log('account[0]:',web3.eth.accounts[0])

web3.eth.defaultAccount = web3.eth.accounts[0]
web3.personal.unlockAccount(web3.eth.defaultAccount, _PASSWD, 999, function (error, result) {
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

        var event =  instance.Transfer({
            filter: {from: _BAL_ADDR},
            fromBlock: 0,
            toBlock: 'latest'
        })

        event.watch(function (error, eventResult) {
            if (error) {
                console.error(error);
            } else {
                console.log(eventResult);
            }
        });
    }
    else {
        console.error("unlock failed!");
    }
});

