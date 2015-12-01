import React, { Component, PropTyps } from 'react';
import { Breadcrumb, Table, Popconfirm, message } from 'antd';
import { Link } from 'react-router';
const data = [{
		  key: '1',
		  name: '胡彦斌',
		  age: 32,
		  address: '西湖区湖底公园1号'
		}, {
		  key: '2',
		  name: '胡彦祖s',
		  age: 42,
		  address: '西湖区湖底公园1号'
		}, {
		  key: '3',
		  name: '李大嘴',
		  age: 32,
		  address: '西湖区湖底公园1号'
		}];
export default class Test extends Component {
	constructor(){
		super();
		this.state = {
			data: data
		}
	}
	handleDelete(key) {
		this.setState({
			data: this.state.data.filter( item => key !== item.key )
		})
	}
	render() {
		const handleClick = (e) => { console.log(e.target.id) },
			  confirm = (record) => {
			  	this.handleDelete(record.key);
			  	message.success("删除成功");

			  },
			  cancel = () => {message.error('取消')};
		const columns = [{
		  title: '用户',
		  dataIndex: 'name',
		  render: function(text, record) {
		    return <Link to={`/user/edit/${record.key}`}>{text}</Link>;
		  },
		  sorter: function(a, b) {
		  	return a.name.length - b.name.length;
		  }
		}, {
		  title: '积分',
		  dataIndex: 'age',
		  sorter: function(a, b) {
		  	return a.age - b.age;
		  }
		}, {
		  title: '住址',
		  dataIndex: 'address'
		},{
			title: '操作',
			dataIndex: 'setting',
			render: function(text, record) {
				return <Popconfirm title="确定要删除这条记录吗？" onConfirm={()=>confirm(record)} >
					   		<a>删除</a>
					   </Popconfirm>;
			}
		}];
		

		// 通过 rowSelection 对象表明需要行选择
		const rowSelection = {
		  onSelect: function(record, selected, selectedRows) {
		    console.log(record, selected, selectedRows);
		  },
		  onSelectAll: function(selected, selectedRows) {
		    console.log(selected, selectedRows);
		  }
		};
		return (
			<div>
				<Breadcrumb>
				    <Breadcrumb.Item>
				    	<Link to="/admin">首页</Link>
				    </Breadcrumb.Item>
				    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
				</Breadcrumb>
				<Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} pagination={false} style={{marginTop: 20}} />
			</div>
		);
	}
}