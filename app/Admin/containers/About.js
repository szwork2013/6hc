import React, { Component, PropTyps } from 'react';
import { Button, Icon, Row, Col } from 'antd';

export default class About extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<header>
				<Row type="flex" justify="end">
					<Col span="1">
						<Button shape="circle" size="large" >
							<Icon type="poweroff" />
						</Button>
					</Col>
				</Row>
			</header>
		);
	}
}