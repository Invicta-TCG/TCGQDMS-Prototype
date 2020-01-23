import React from 'react';
import { Table, Button, Input, Icon, Modal, Row, Col, Pagination, Card,Breadcrumb,Popconfirm,Divider } from 'antd';
import PlantMaster from './PlantMaster';


const Search = Input.Search;
const data = [
  {
    key: '1',
    code:"PR/001",
    plantname: 'Peliyagoda', 
    place:"Colombo",
    tp:"1234568",
    detalis: '',
    
  },
  {
    key: '2',
    code:"JR/001",
    plantname: 'Jaffna',
     place:"Jaffna",
     tp:"1234568",
    detalis: '',
    
  },
  {
    key: '3',
    code:"TR/001",
    plantname: 'Trincomalee',
    place:"Trincomalee",
    tp:"1234568",
    detalis: '',
  
  },
  {
    key: '4',
    code:"RR/001",
    plantname: 'Ratmalana',
     place:"Ratmalana",
     tp:"1234568",
    detalis: '',
  
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
        title: 'Code',
        dataIndex: 'code',
        key: 'id',
        width:'5%',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.id - b.id,
        sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      },
      {
        title: 'Plant Name',
        dataIndex: 'plantname',
        key: 'name',
        width:'5%',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,

      },
      {
        title: 'Place',
        dataIndex: 'place',
        key: 'place',
        width:'6%',
        filters: [{ text: 'Vechical1', value: 'Vechical1' }, { text: 'Vechical2', value: ' Vechical2' }, { text: 'Vechical3', value: 'Vechical3' }, { text: 'Vechical4', value: 'Vechical4' }],
        filteredValue: filteredInfo.role || null,
        onFilter: (value, record) => record.role.includes(value),
        sorter: (a, b) => a.role.length - b.role.length,
        sortOrder: sortedInfo.columnKey === 'role' && sortedInfo.order,
      },
      {
        title: 'TP_NO',
        dataIndex: 'tp',
        key: 'tp',
        width:'6%',
        filters: [{ text: 'Vechical1', value: 'Vechical1' }, { text: 'Vechical2', value: ' Vechical2' }, { text: 'Vechical3', value: 'Vechical3' }, { text: 'Vechical4', value: 'Vechical4' }],
        filteredValue: filteredInfo.role || null,
        onFilter: (value, record) => record.role.includes(value),
        sorter: (a, b) => a.role.length - b.role.length,
        sortOrder: sortedInfo.columnKey === 'role' && sortedInfo.order,
      },
     
      {
        title: 'Other Detalis',
        dataIndex: 'detalis',
        key: 'detalis',
        width:'6%',
        render: () => <a onClick={this.showModal}><Icon type="solution" /></a>,

      },
      {
        title: 'Action',
        key: 'action',
        width:'12%',
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
        <React.Fragment>

        <Breadcrumb style={{
            margin: '16px 0'
        }}>
            <Breadcrumb.Item>ManagePlant</Breadcrumb.Item>
            <Breadcrumb.Item>Plant</Breadcrumb.Item>
        </Breadcrumb>
        <div
        style={{
        padding: 12,
        background: '#eef6fc',
        minHeight: '500px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
    }}>

        

        <div className="table-operations">
          <Row>
            <Col span={19}>



              <Col span={4}>
                <PlantMaster />

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
        <Table columns={columns} dataSource={data} onChange={this.handleChange}   size="small"/>

        <Modal
          title="Plant Details"
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


                Plant Name   :  Peliyagoda
                <br/>
                <br/>
                Address:Colombo
                <br/>
                <br/>
                Production   :   Super Mix
                
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
      </React.Fragment>
    );
  }
}