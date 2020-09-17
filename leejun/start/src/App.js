import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routers/Home';
import List from './routers/List';
import Navigation from './components/Navigation';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation test={'test입니다'} />
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/list/:number" component={List} />
				<Redirect to="/home" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;