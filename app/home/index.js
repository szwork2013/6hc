import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import configureStore from './store/configureStore';
import App from './containers/App';
import Tma from './components/Tma';
import Tmb from './components/Tmb';

const store = configureStore();
const history = createHistory();

render(
  <Provider store={store}>
    <Router history={history}>
    	<Route path="/" component={App}>
    		<Route path="/tma" component={Tma} />
    		<Route path="/tmb" component={Tmb} />
    	</Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
