const Web3 = require('web3')

var args = process.argv.splice(2)

const networkid = args[0]

//liuyi1
const _BAL_ADDR = '0xb5129934b99e1c0cd98F5F9e3ed23c70b45B5197'

switch(networkid)
{
    case '1':
        var _PROVIDER_URL = 'wss://mainnet.infura.io/ws'
        //CANDY on mainnet
        var _CONTRACT_ADDR = '0x5106f3AFa0e27BdD3faffEb9158526FA678895F3'
        break;
    case '3':
        var _PROVIDER_URL = 'wss://ropsten.infura.io/ws'
        //var _PASSWD = '123456'
        //GNT4 on ropsten
        var _CONTRACT_ADDR = '0xa8e7ade445974dfc0465bdc30151ae2b594e0ab1'      
        break;
    default:
        console.log('wrong network!',networkid)
        process.exit(0)
}

const web3 = new Web3(new Web3.providers.WebsocketProvider(_PROVIDER_URL));

const subscription = web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
    if (error) return console.error(error);
  
    console.log('Successfully subscribed!', blockHeader);
  }).on('data', (blockHeader) => {
    console.log('data: ', blockHeader);
  });
  
  // unsubscribes the subscription
  subscription.unsubscribe((error, success) => {
    if (error) return console.error(error);
  
    console.log('Successfully unsubscribed!');
  });


