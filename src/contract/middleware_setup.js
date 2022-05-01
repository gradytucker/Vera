// dependency - web3.js
var Web3 = require('web3');

//select RPC of network
var RPC = 'https://rpc-mumbai.maticvigil.com';

var chainID = '0x13881';

//our Web3 instance to interact with Vessel.sol
var web3 = new Web3(RPC);

//create new temporary account to use
var temp_account = web3.eth.accounts.create();

//to get the ABI of a new contract go to
//remix -> compiler -> compilation details / ABI
var ABI = require('./ABI.json');

var Contract = require('web3-eth-contract');
Contract.setProvider(RPC);

//replace contract address as needed...
var contractAddress = '0x3578d3653c7C6434eEfb20A922fE69717d5708A7';
var contract = new Contract(ABI, contractAddress);

export { Web3, RPC, chainID, web3, temp_account, ABI, Contract, contractAddress, contract };
