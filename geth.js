const Web3 = require('web3')

const web3 = new Web3(new Web3.providers.WebsocketProvider('http://127.0.0.1:8545'));

console.log(web3.version)

web3.eth.isSyncing().then(console.log);

web3.eth.getBalance('0xb5129934b99e1c0cd98F5F9e3ed23c70b45B5197',function(error,result){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }    
})

const abi = require('./ERC20.json')
//GNT4 on ropsten
const contract = new web3.eth.Contract(abi, '0xa8e7ade445974dfc0465bdc30151ae2b594e0ab1')
contract.events.allEvents({ fromBlock: 'latest' }, console.log)
