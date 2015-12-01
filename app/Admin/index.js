import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider as G } from 'react-redux';
import App from './containers/App';
import About from './containers/About';
import Users from './components/Users';
import UserAdd from './components/UserAdd';
import NoMatch from './containers/NoMatch';
import { createHistory } from 'history';
import { Router, Route } from 'react-router'
import configureStore from './store/configureStore';

const store = configureStore();
const history = createHistory();

render(
  <G store={store}>
	<Router history={history}>
  		<Route path="/admin" component={App}>
  			<Route path="/users" component={Users} />
  		</Route>
  		<Route path="*" component={NoMatch}/>
  	</Router>
  </G>,
  document.getElementById('root')
)
