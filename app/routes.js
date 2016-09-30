import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Registration from './components/Registration';

export default (
	<Route component={App}>
		<Route guid="home" path='/' component={Home} />
		<Route guid="user" path='/add' component={Registration} />
	</Route>
);
