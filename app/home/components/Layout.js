import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'antd';
import Tabss from './Tabss';

export default class Layout extends Component {
	constructor(props) {
	    super(props);
	}
	render() {
		return (
			<Row type="flex" justify="center">
				<Col span="12"><Tabss /></Col>
			</Row>
		);
	}
}