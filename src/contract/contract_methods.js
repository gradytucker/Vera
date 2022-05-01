import * as middleware_setup from './middleware_setup';

var c = middleware_setup.contract.methods;
var cABI = middleware_setup.ABI;
var cRPC = middleware_setup.RPC;
var cAddr = middleware_setup.contractAddress;
var cChainID = middleware_setup.chainID;

var totalTokens = () => c._tTotal().call();
var rTotal = () => c._rTotal().call();
var totalFees = () => c._tFeeTotal().call();

var getCoinAddress = index => c.getCoinAddress(index).call();
var getCoinVotes = index => c.getCoinVotes(index).call();
var getBalancedRatio = index => c.getBalancedRatio(index).call();
var getImbalancedRatio = index => c.getImbalancedRatio(index).call();
var getLastEpochPrices = index => c.getLastEpochPrices(index).call();

var f = () => c.f().call();
var u = () => c.u().call();
var v = () => c.v().call();
var b = () => c.b().call();

var totalVotesCast = () => c.totalVotesCast().call();
var lastVotesCast = () => c.lastVotesCast().call();

var epochNumber = () => c.epochNumber().call();
var lastEpochRebalance = () => c.lastEpochRebalance().call();
var epochLength = () => c.epochLength().call();
var theta = () => c.theta().call();
var theta_max = () => c.theta_max().call();
var theta_granularity = () => c.theta_granularity().call();
var delta = () => c.delta().call();
var delta_t = () => c.delta_t().call();
var delta_w = () => c.delta_w().call();
var delta_1 = () => c.delta_1().call();
var delta_2 = () => c.delta_2().call();
var rebalance_case = () => c.rebalance_case().call();

var nativecoin = () => {
	return c.nativecoin().call();
};
var stablecoin = () => c.stablecoin().call();

var maxVotesAllowed = () => c.maxVotesAllowed().call();
var decimals = () => c.decimals().call();

var balanceOf = address => {
	return c.balanceOf(address).call();
};
var lastEpochVoteCast = address => c.lastEpochVoteCast(address).call();

var getQuote = address => c._getTokenPrice(address).call();

var getUserVotes = (address, index) => c.getUserVotes(address, index).call({ from: address });
var updateEpoch = () => c.updateEpoch().call();

export { cABI, cAddr, cRPC, cChainID };
