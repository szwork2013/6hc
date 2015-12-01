import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Menu, Icon, Breadcrumb } from 'antd';
import { menu } from './../config';
const SubMenu = Menu.SubMenu;


export default class Main extends Component {
	constructor() {
	    super();
	    this.state = { current: '1' };
	    this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		this.setState({
			current: e.key
		});
	}
	render() {
		const nav = menu.map(m => 
						<SubMenu key={m.id} title={<span><Icon type="appstore" /><span>{m.title}</span></span>}>
							{m.submenu.map(v => 
								<Menu.Item key={v.id}>
									<Link to={v.href}>{v.title}</Link>
								</Menu.Item>
							)}
						</SubMenu>
					);
		return (
			<Row type="flex">
				<Col span="4">
					<Menu onClick={this.handleClick}
							defaultOpenKeys={['sub1']}
							selectedKeys={[this.state.current]}
							mode="inline">

						{nav}
						
					</Menu>
				</Col>
				<Col span="20" style={{padding: 10}}>
					{this.props.children}
				</Col>
			</Row>
		);
	}
}
Main.propTypes = {

}