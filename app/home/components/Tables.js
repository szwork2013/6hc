import React, { Component, PropTypes } from 'react';
import { Table } from 'antd';

export default class Tables extends Component {
	constructor(props) {
	    super(props);
	}
	render() {
		const columns = [{
		  title: '姓名',
		  dataIndex: 'name'
		}, {
		  title: '年龄',
		  dataIndex: 'age'
		}, {
		  title: '住址',
		  dataIndex: 'address'
		}];
		const data = [{
		  key: '1',
		  name: '胡彦斌',
		  age: 32,
		  address: '西湖区湖底公园1号'
		}, {
		  key: '2',
		  name: '胡彦祖',
		  age: 42,
		  address: '西湖区湖底公园1号'
		}, {
		  key: '3',
		  name: '李大嘴',
		  age: 32,
		  address: '西湖区湖底公园1号'
		}];
		const pagination = {
		  total: data.length,
		  current: 2,
		  showSizeChanger: true
		};
		return (
			<Table columns={columns} dataSource={data} pagination={pagination} />
		);
	}
}