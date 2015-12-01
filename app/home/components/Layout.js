import React, { Component, PropTypes } from 'react';
import { Row, Col, Button, Table } from 'antd';
import { Link } from 'react-router';

export default class Layout extends Component {
	render() {
		const box = {
			width: 1000,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
		const columns = [{
		  title: '期数',
		  dataIndex: 'qishu'
		}, {
		  title: '开奖号码',
		  dataIndex: 'haoma'
		}];
		const data = [{
		  key: '1',
		  qishu: 122,
		  haoma: '31 25 28 24 15 21 + 48'
		},{
		  key: '2',
		  qishu: 121,
		  haoma: '31 25 28 24 15 21 + 48'
		}];
		return (
			<div style={box}>
				<header>
					<Row type="flex">
						<Col span="12">
							<img src="http://www.222360.com/upload/155/image/150525081509.png" />
						</Col>
						<Col span="12">12</Col>
					</Row>
				</header>
				<section>
					<header>
						<Button type="ghost">
							<Link to="/tma">特码A</Link>
						</Button>
						<Button type="ghost">
							<Link to="/tmb">特码B</Link>
						</Button>
						<Button type="ghost">
							<Link to="/bb">半波</Link>
						</Button>
						<Button type="ghost">
							<Link to="/1x">一肖</Link>
						</Button>
					</header>
					<Row type="flex">
						<Col span="5">
							<Table dataSource={data} columns={columns} size={'small'} pagination={false} />
						</Col>
						<Col span="19">
							{this.props.children}
						</Col>
					</Row>
				</section>
			</div>
		);
	}
}