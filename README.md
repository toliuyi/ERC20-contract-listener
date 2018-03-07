# Ethereum event listener
Examples of Ethereum event listen from geth or infura.


## Run the script locally
 - Install[Node.js](https://nodejs.org/en/) version 6.3.1 or later;
 - Clone or download source code to local disk;
 - Install dependencies 'npm install';
 - Start geth with: './geth --rpcapi "db,eth,net,web3,personal" --ws --wsaddr "localhost" --wsport "8545" --wsorigins "*" --identity "MyTestNode" --testnet --fast';
 - Listen contract event from ropsten via geth 'node geth.js';
 - Listen new block event from mainnet via infura 'node infura.js';

Infura don't support contract event listen at present, plz refer to [#issue73](https://github.com/INFURA/infura/issues/73) 




