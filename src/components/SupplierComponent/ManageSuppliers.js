import React from 'react';
import { Table, AutoComplete, Input, Icon, Modal, Row, Col, Pagination, Card,Popconfirm,Divider } from 'antd';
import AddSupplier from './Supplier';


const Search = Input.Search;
const data = [
  {
    key: '1',
    id: 1,
    date:"2018/05/8",
    name: 'John Brown', 
    role:"0771122339",
    detalis: '',
    email: 'TYS@gmail.com',
    address:'Colombo'
  },
  {
    key: '2',
    id: 2,
    date:"2018/05/8",
    name: 'Jim Green',
     role:"0771122339",
    detalis: '',
    address:'Colombo',
    email: 'TYS@gmail.com',
  },
  {
    key: '3',
    id: 3,
    date:"2018/05/8",
    name: 'Joe Black',
    role:"0771122339",
    detalis: '',
    address:'Colombo',
    email: 'TYS@gmail.com',
  },
  {
    key: '4',
    id: 4,
    date:"2018/05/8",
    name: 'Jim Red',
     role:"0771122339",
    detalis: '',
    address:'Colombo',
    email: 'TYS@gmail.com',
  },
];

export default class ManageSuppliers extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    searchText: '',
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        width:'7%',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        width:'10%',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      },
      {
        title: 'Supplier Name',
        dataIndex: 'name',
        key: 'name',
        width:'12%',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,

      },
      {
        title: 'Phone NO',
        dataIndex: 'role',
        key: 'role',
        width:'12%',
        filters: [{ text: 'Vechical1', value: 'Vechical1' }, { text: 'Vechical2', value: ' Vechical2' }, { text: 'Vechical3', value: 'Vechical3' }, { text: 'Vechical4', value: 'Vechical4' }],
        filteredValue: filteredInfo.role || null,
        onFilter: (value, record) => record.role.includes(value),
        sorter: (a, b) => a.role.length - b.role.length,
        sortOrder: sortedInfo.columnKey === 'role' && sortedInfo.order,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width:'12%',
        filters: [{ text: 'Vechical1', value: 'Vechical1' }, { text: 'Vechical2', value: ' Vechical2' }, { text: 'Vechical3', value: 'Vechical3' }, { text: 'Vechical4', value: 'Vechical4' }],
        filteredValue: filteredInfo.role || null,
        onFilter: (value, record) => record.role.includes(value),
        sorter: (a, b) => a.role.length - b.role.length,
        sortOrder: sortedInfo.columnKey === 'role' && sortedInfo.order,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width:'14%',
        filters: [{ text: 'gmail', value: 'gmail' }, { text: 'live', value: 'live' }],
        filteredValue: filteredInfo.email || null,
        onFilter: (value, record) => record.email.includes(value),
        sorter: (a, b) => a.email.length - b.email.length,
        sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
      },
      {
        title: 'Other Detalis',
        dataIndex: 'detalis',
        key: 'detalis',
        width:'10%',
        render: () => <a onClick={this.showModal}><Icon type="solution" /></a>,

      },
      {
        title: 'Action',
        key: 'action',
        width:'15%',
        render: (text, record) => (
          <span>
            <a><Icon type="edit" /></a>
            <Divider type="vertical" />
            <a><Popconfirm
title="Are you sure you want to Delete this?"
icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
>
<a href="#"><Icon type="delete"></Icon></a>
</Popconfirm></a>
          </span>
        ),
      },
     

    ];
    return (
      <div>

        <div className="table-operations">
          <Row>
            <Col span={19}>



              <Col span={4}>
                <AddSupplier />

              </Col>
              <Col span={4}>
           
              </Col>

           

            </Col>
            <Col span={5}>
              <Search
                placeholder=" Search ......"
                onSearch={value => console.log(value)}
                style={{ width: 215 }}
                enterButton
              /></Col>

          </Row>
        </div>
        <br>
        </br>
       
        {/* <div
                style={{
                padding: 12,
                background: '#F2F9F5',
                minHeight: AutoComplete,
                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
            }}> */}
        <Table columns={columns} dataSource={data} onChange={this.handleChange}  size="small"/>
        {/* </div> */}

        <Modal
          title="Supplier Detalis"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div
            style={{
              padding: 24,
              background: '#fff',
              minHeight: '350px',

            }}>
      
            <Card
              style={{ margin: "-40px -40px 0 -40px", height: "300px",borderStyle:"none" }}>

<Row>



              <Col span={8}>
              <img
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  marginBottom: "10px",
                  marginRight:"40px"

                }}
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
               
              />
              </Col>
              <Col span={16}>


                Name   :  Supplier1
                <br/>
                <br/>
                Address:Colombo
                <br/>
                <br/>
                Email   :   Supplier1@gmail.com
                
              </Col>
           
</Row>
<br>
</br>
<Row>

 <br></br>
 <br></br>
Description  :  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
</Row>

            </Card>

          </div>
          <Row>
            <Col span={6}></Col>
            <Col span={12}> <Pagination simple defaultCurrent={2} total={50} style={{ alignContent: "center" }} /></Col>
            <Col span={6}></Col>
          </Row>

        </Modal>
      </div>
    );
  }
}