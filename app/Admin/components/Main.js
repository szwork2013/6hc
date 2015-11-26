import React, { Component, PropTypes } from 'react';
import { Row, Col, Menu, Icon, Breadcrumb } from 'antd';

const SubMenu = Menu.SubMenu;

export default class Main extends Component {
	constructor() {
	    super();
	    this.state = { current: '1' };
	}
	handleClick(e) {
		alert(e.domEvent.target.innerText);
		this.setState({
			current: e.key
		});
	}
	render() {
		return (
			<Row type="flex">
				<Menu onClick={this.handleClick.bind(this)}
						style={{width:240}}
						defaultOpenKeys={['sub1']}
						selectedKeys={[this.state.current]}
						mode="inline">
					<SubMenu key="sub1" title={<span><Icon type="appstore" /><span>导航一</span></span>}>
						<Menu.Item key="1">选项1</Menu.Item>
						<Menu.Item key="2">选项2</Menu.Item>
						<Menu.Item key="3">选项3</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
						<Menu.Item key="5">选项1</Menu.Item>
						<Menu.Item key="6">选项2</Menu.Item>
						<Menu.Item key="7">选项3</Menu.Item>
					</SubMenu>
				</Menu>
				<Breadcrumb>
				    <Breadcrumb.Item>首页</Breadcrumb.Item>
				    <Breadcrumb.Item href="">应用中心</Breadcrumb.Item>
				    <Breadcrumb.Item href="">应用列表</Breadcrumb.Item>
				    <Breadcrumb.Item>某应用</Breadcrumb.Item>
				</Breadcrumb>
			</Row>
		);
	}
}
Main.propTypes = {

}