import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/DappPages/Home/Home';
import Requests from './components/DappPages/Requests/Requests';
import Verifications from './components/DappPages/Verifications/Verifications';
import FAQ from './components/DappPages/FAQ/FAQ';
import Layout from './components/Navigation/Layout/Layout';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

function getLibrary(provider) {
	return new Web3(provider);
}

function App() {
	const routes = (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/Requests" exact component={Requests} />
			<Route path="/Verifications" exact component={Verifications} />
			<Route path="/FAQ" exact component={FAQ} />
			<Redirect to="/" />
		</Switch>
	);

	return (
		<>
			<Web3ReactProvider getLibrary={getLibrary}>
				<Layout>{routes}</Layout>
			</Web3ReactProvider>
		</>
	);
}

export default App;
