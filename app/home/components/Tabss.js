import React, { Component, PropTypes } from 'react';
import { Tabs } from 'antd';
import Tables from './Tables';
const TabPane = Tabs.TabPane;

export default class Tabss extends Component {
	constructor(props) {
	    super(props);
	}
	render() {
		return (
			<Tabs defaultActiveKey="1" >
				<TabPane tab="特码" key="1">
					<Tables />
				</TabPane>
				<TabPane tab="半波" key="2">
					选项卡二内容
				</TabPane>
				<TabPane tab="一肖" key="3">
					选项卡三内容
				</TabPane>
			</Tabs>
		);
	}
}