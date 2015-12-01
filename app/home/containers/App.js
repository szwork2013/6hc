import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { resetErrorMessage } from '../actions';
import Layout from '../components/Layout';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Layout children={this.props.children}/>
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