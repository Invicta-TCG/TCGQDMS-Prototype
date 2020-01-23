import React from 'react';
import { Table, AutoComplete, Input, Icon, Modal, Row, Col, Pagination, Card ,Avatar,Popconfirm,Divider,Button, Checkbox} from 'antd';

 import AddSupplierSamples from './AddSupplierSamples';


const Search = Input.Search;
const data = [
  {
    key: '1',
    id: "Samp001",
    date:"2018/05/8",
    name: 'John Brown',
    role: 'NP/5842',
   rawmaterial:'M Sand',
    email: 'AdMixture',
  },
  {
    key: '2',
    id: "Samp002",
    date:"2018/05/8",
    name: 'Jim Green',
    role: 'NP/5842',
    rawmaterial:'Cement',
    email: 'AdMixture',
  },
  {
    key: '3',
    id: "Samp003",
    date:"2018/05/8",
    name: 'Joe Black',
    role: 'NP/5842',
    rawmaterial:'0-5mm',
    email: 'AdMixture',
  },
  {
    key: '4',
    id: "Samp004",
    date:"2019/04/7",
    name: 'Jim Red',
    role: 'NP/5842',
    rawmaterial:'River Sand',
    email: 'AdMixture',
  },
];

export default class ManageSuppliersSample extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    searchText: '',
    visible: false,
    visible1: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
showModal1 = () => {
    this.setState({
      visible1: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
   handleOk1 = e => {
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
  handleCancel1 = e => {
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
      { width:"5%", 
        title: 'Sample Code',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      },
      {
        width:"5%", 
        title: 'Date',
        dataIndex: 'date',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      },
      {
       width:"8%",          
        title: 'Supplier Name',
        dataIndex: 'name',
        key: 'name',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,

      },
      {
        width:"8%", 
        title: 'Vehicle NO',
        dataIndex: 'role',
        key: 'role',
        filters: [{ text: 'Vechical1', value: 'Vechical1' }, { text: 'Vechical2', value: ' Vechical2' }, { text: 'Vechical3', value: 'Vechical3' }, { text: 'Vechical4', value: 'Vechical4' }],
        filteredValue: filteredInfo.role || null,
        onFilter: (value, record) => record.role.includes(value),
        sorter: (a, b) => a.role.length - b.role.length,
        sortOrder: sortedInfo.columnKey === 'role' && sortedInfo.order,
      },
      {
        width:"8%", 
        title: 'Raw Material',
        dataIndex: 'rawmaterial',
        key: 'rawmaterial',
        filters: [{ text: 'Vechical1', value: 'Vechical1' }, { text: 'Vechical2', value: ' Vechical2' }, { text: 'Vechical3', value: 'Vechical3' }, { text: 'Vechical4', value: 'Vechical4' }],
        filteredValue: filteredInfo.role || null,
        onFilter: (value, record) => record.role.includes(value),
        sorter: (a, b) => a.role.length - b.role.length,
        sortOrder: sortedInfo.columnKey === 'rawmaterial' && sortedInfo.order,
      },
      {
        width:"8%", 
        title: 'Delivery Report ',
        dataIndex: 'deliveryreport',
        key: 'deliveryreport ',
        render: () => (
          <Checkbox/>
      )
       
      },
      {
        width:"5%", 
        title: 'Tirial Status',
        dataIndex: 'trialstatus',
        key: 'trilastatus',
        render: () => <a  href="#/testrialcardbin"><Button ><Icon type="check"></Icon></Button></a>,

      },
      {
        width:"5%", 
        title: 'Action',
        key: 'action',
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
                <AddSupplierSamples />

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
        <Table columns={columns} dataSource={data} onChange={this.handleChange}  size="small" />
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
              {/* <img
               
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
               
              /> */}
               <Avatar
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  marginBottom: "10px",
                  marginRight:"40px",
                  fontSize:'40px',
                 


                }}
               size={100} icon="user" />
              </Col>
              <Col span={16}>
               
                
                Sample ID   :    Samp001
                <br/>
                
                Supplier Name  :   Supplier1
                <br/>
                
                Date:    12-09-2019
                <br/>
              
                Vechical NO :   NP/5842
                <br/>
                
               Raw Material:  Sand
                
              </Col>
           
</Row>
<br>
</br>
<Row>

 
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