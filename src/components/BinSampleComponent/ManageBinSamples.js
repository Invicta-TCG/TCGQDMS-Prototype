import React from 'react';
import { Table, AutoComplete, Input, Icon, Modal, Row, Col, Pagination, Card,Popconfirm,Divider,Button } from 'antd';
import AddBinSamples from './AddBinSamples';


const Search = Input.Search;
const data = [
  {
    key: '1',
    id: "SAM/P/001",
    name: 'Process 1',
    date:'12/02/2019',
    plant:'Peliyagoda',
    role: 'NP/5842',
    time:'12.00PM',
    detalis: '',
    rawmaterial: 'Optima 100',
  },
  {
    key: '2',
    id: "SAM/P/002",
    name: 'Process 2',
    date:'2/04/2019',
    role: 'NP/5842',
    plant:'Peliyagoda',
    time:'6.00PM',
    detalis: '',
    rawmaterial: 'M Sand',
  },
  {
    key: '3',
    id: "SAM/P/003",
    name: 'Process 3',
    date:'12/06/2019',
    plant:'Trincomale',
    role: 'NP/5842',
    time:'4.00PM',
    detalis: '',
    rawmaterial: 'River Sand',
  },
  {
    key: '4',
    id: "SAM/P/004",
    name: 'Process 4',
    date:'4/11/2019',
    plant:'Jaffna',
    role: 'NP/5842',
    time:'2.00PM',
    detalis: '',
    rawmaterial: '0-5mm',
  },
];

export default class ManageBinSamples extends React.Component {
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
      visible1: false,
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
      visible1: false,
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
        sorter: (a, b) => a.id - b.id,
        sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      },
  
      {
        
        title: 'Process Name',
        dataIndex: 'name',
        key: 'name',
        filters: [{ text: 'Bin1', value: 'Bin1' }, { text: 'Bin2', value: 'Bin2' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,

      },

      {
        
        title: 'RawMaterials',
        dataIndex: 'rawmaterial',
        key: 'rawmaterial',
        filters: [{ text: 'Cement', value: 'Cement' }, { text: 'Admixture', value: 'Admixture' }],
        filteredValue: filteredInfo.rawmaterial || null,
        onFilter: (value, record) => record.rawmaterial.includes(value),
        sorter: (a, b) => a.rawmaterial.length - b.rawmaterial.length,
        sortOrder: sortedInfo.columnKey === 'rawmaterial' && sortedInfo.order,
        
      },
      { 
       
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
       
      },
      {
        
        title: 'Plant',
        dataIndex: 'plant',
        key: 'plant',
      
      },
      {
       
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
       
      },
      {
       
        title: 'Trial Status',
        dataIndex: 'trialstatus',
        key: 'trialstatus',
        render: () => <a  href="#/testrialcardbin"><Button ><Icon type="check"></Icon></Button></a>,
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
      <div>

        <div className="table-operations">
          <Row>
            <Col span={19}>



              <Col span={4}>
                <AddBinSamples />

              </Col>
              <Col span={4}>

              </Col>



            </Col>
            <Col span={5}>
              <Search
                placeholder="Search ......"
                onSearch={value => console.log(value)}
                style={{ width: 215 }}
                enterButton
              /></Col>

          </Row>
        </div>
        <br>
        </br>
      
        <Table columns={columns} dataSource={data} onChange={this.handleChange} size="small" />
        {/* </div> */}

        <Modal
          title="Records Detail"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel} 
        >
          <div
            style={{
              padding: 24,
              background: '#fff',
              minHeight: '300px',

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


                Bin Name    :  Bin001
                <br/>
                <br/>
               Raw Material : cement,Admixture
               
                
              </Col>
           
</Row>
<br/>
<Row>


Description  :  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
</Row>

            </Card>

          </div>
          <Row>
            <Col span={6}></Col>
            {/* <Col span={12}> <Pagination simple defaultCurrent={2} total={50} style={{ alignContent: "center" }} /></Col> */}
            <Col span={6}></Col>
          </Row>

        </Modal>

        <Modal
          title="Raw Materials Detalis"
          visible={this.state.visible1}
          onOk={this.handleOk1}
          onCancel={this.handleCancel1}
        >
          <div
            style={{
              padding: 24,
              background: '#fff',
              minHeight: '200px',

            }}>






          </div>

        </Modal>
      </div>
    );
  }
}