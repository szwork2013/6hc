import React, { Component, PropTyps } from 'react';
import { Button, Icon, Row, Col } from 'antd';
import './header.less';

export default class Header extends Component {
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