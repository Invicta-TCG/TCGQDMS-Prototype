import React from 'react';
import { Table, AutoComplete, Input, Icon, Modal, Row, Col, Pagination, Card ,Avatar,Popconfirm,Divider,Breadcrumb,Button } from 'antd';
import FinishProductSamples from './FinishProductSamples';
 


const Search = Input.Search;
const data = [
  {
    key: '1',
    id: "SM/FP/001",
    date:"2018/05/8",
    name: 'John Brown',
    batchingTime:'12.00PM',
    code:'PR/C15/01',
    grade:'15',
    plant:'Peliyagoda',
    workorder:'WO25063',
    sampleSize:'4'
  },
  {
    key: '2',
    id: "SM/FP/002",
    date:"2018/05/8",
    name: 'Jim Green',
    batchingTime:'2.00PM',
    code:'PR/C15/02',
    grade:'20',
    workorder:'WO25064',
    plant:'Peliyagoda',
    sampleSize:'5'
  },
  {
    key: '3',
    id: "SM/FP/003",
    date:"2018/05/8",
    name: 'Joe Black',
    batchingTime:' 6.00PM',
    code:'PR/C15/03',
    grade:'25',
    plant:'Peliyagoda',
    workorder:'WO25065',
    sampleSize:'7'
  },
 
];

export default class ManageFinshProductSample extends React.Component {
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
      {  
      
        title: 'Code',
        dataIndex: 'id',
        key: 'id',
        fontSize:'10%',
        sorter: (a, b) => a.id - b.id,
        sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      },
     
      {
        
                 
        title: 'Customer Name',
        dataIndex: 'name',
        key: 'name',
        fontSize:'10%',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,

      },
      {
        
        title: 'Date',
        dataIndex: 'date',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      },
      {
            
        title: 'Time',
        dataIndex: 'batchingTime',
        key: 'batchingTime',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,

      },
      {
             
        title: 'Sample Size',
        dataIndex: 'sampleSize',
        key: 'sampleSize',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,

      },
      {
             
         title: 'Product Code',
         dataIndex: 'code',
         key: 'code',
         filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
         filteredValue: filteredInfo.name || null,
         onFilter: (value, record) => record.name.includes(value),
         sorter: (a, b) => a.name.length - b.name.length,
         sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
 
       },
      
       {
             
         title: 'Grade',
         dataIndex: 'grade',
         key: 'grade',
         filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
         filteredValue: filteredInfo.name || null,
         onFilter: (value, record) => record.name.includes(value),
         sorter: (a, b) => a.name.length - b.name.length,
         sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
 
       },
       {
             
         title: 'Work Order No',
         dataIndex: 'workorder',
         key: 'workorder',
         filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
         filteredValue: filteredInfo.name || null,
         onFilter: (value, record) => record.name.includes(value),
         sorter: (a, b) => a.name.length - b.name.length,
         sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
 
       },
       {
              
         title: 'Plant',
         dataIndex: 'plant',
         key: 'plant',
         filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
         filteredValue: filteredInfo.name || null,
         onFilter: (value, record) => record.name.includes(value),
         sorter: (a, b) => a.name.length - b.name.length,
         sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
 
       },
     
     
    
       {
       
        title: 'Trial Status',
        dataIndex: 'trialstatus',
        key: 'trialstatus',
        render: () => <a  href="#/testtrialfp"><Button ><Icon type="check"></Icon></Button></a>,
      },
      {
      
        
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
      <React.Fragment>
      <Breadcrumb style={{
        margin: '16px 0'
    }}>
        <Breadcrumb.Item>ManageSample</Breadcrumb.Item>
        <Breadcrumb.Item>FinishProduct</Breadcrumb.Item>
    </Breadcrumb>
      <div
                style={{
                padding: 12,
                background: '#F2F9F5',
                minHeight: AutoComplete,
                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
            }}>
      

        <div className="table-operations">
          <Row>
            <Col span={19}>



              <Col span={4}>
               <FinishProductSamples/>
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
        <Table columns={columns} dataSource={data} onChange={this.handleChange}  size="small" style={{fontSize:'12px',}} />
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
</React.Fragment>
    
     
     

    );
  }
}