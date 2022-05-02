import * as middleware_setup from './middleware_setup';

var c = middleware_setup.contract.methods;
var cABI = middleware_setup.ABI;
var cRPC = middleware_setup.RPC;
var cAddr = middleware_setup.contractAddress;
var cChainID = middleware_setup.chainID;

var computeVerification = (key, address, timestamp, nonce) =>
	c.computeVerification(key, address, timestamp, nonce).call();

export { cABI, cAddr, cRPC, cChainID, computeVerification };
