import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routers/Home';
import List from './routers/List';
import Navigation from './components/Navigation';
import Product from './routers/Product';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation test={'test입니다'} />
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/product/:category" component={Product} />
				<Route path="/list/:number" component={List} />
				<Redirect to="/product" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;