import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import { resetErrorMessage } from '../actions';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Layout />
		);
	}
}

App.propTypes = {
	errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    resetErrorMessage: PropTypes.func.isRequired
  };
}

export default connect(
  mapStateToProps,
  { resetErrorMessage }
)(App);