import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import { resetErrorMessage } from '../actions';

class App extends Component {
	render() {
		return (
			<Layout>
				<Header />
				<Main children={this.props.children}/>
			</Layout>
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