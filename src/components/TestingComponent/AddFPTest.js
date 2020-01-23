import React from 'react';
import {
  Tabs,
  Breadcrumb,
  Input,
  DatePicker,
  Form,
  Row,
  Col,
  Select,
  Divider,
  Button,
  Icon,
  Table
  , Modal,
} from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import FpTestHeader from './FpTestHeader.js';
import TestResultParameter from './TestResultParameter';
import TextArea from 'antd/lib/input/TextArea';
import { borderColor } from '@material-ui/system';




const { TabPane } = Tabs;
const { Option } = Select;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;



function onChange(date, dateString) {
  console.log(date, dateString);
}


const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);



class AddFPTest extends React.Component {

  state = {
    tabPosition: 'Suppliers',
    tabPosition1: 'River Sand',
    loading: false,
    visible: false,
    filteredInfo: null,
    sortedInfo: null,
    searchText: '',
    visible: false,

    showComponent: false,

  };

  addClick() {
    this.setState(prevState => ({
      test: [...prevState.test, { cement: "", admixture: "", fineaggregate: "", entry: '' }]
    }))
  }

  onButtonClick = () => {
    this.setState({
      showComponent: true,
    });
  }


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

    const { visible, loading } = this.state;


    const columns = [
      { title: 'Code', dataIndex: 'code', key: 'code' },
      { title: 'Product Name', dataIndex: 'pname', key: 'pname' },
      { title: 'Plant', dataIndex: 'plant', key: 'plant' },
      { title: 'Grade', dataIndex: 'grade', key: 'grade' },
      { title: 'Date', dataIndex: 'date', key: 'date' },
      {
        title: 'Action', key: 'operation', render: () => (
          <span>
            <a><Icon type="edit" /></a>
            <Divider type="vertical" />
            <a><Icon type="delete" /></a>
          </span>
        )
      }
    ];

    const columns2 = [
      {
        title: 'Parameter',
        dataIndex: 'parameter',
        key: 'parameter',
        width: '8%',

      },
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
        width: '6%'
      },
      {
        title: 'Unit',
        dataIndex: 'unit',
        key: 'unit',
        width: '25%'
      },

    ];


    const columns3 = [
      {
        title: 'Trials',
        dataIndex: 'trials',
        key: 'trials',
        width: '6%',


      },
      {
        title: '7Days Strength',
        dataIndex: 'sevdaysStrength',
        key: 'sevdaysStrength',
        width: '8%'
      },
      {
        title: '28days Strength',
        dataIndex: 'twedaysStrength',
        key: 'twedaysStrength',
        width: '8%'
      },
      {
        title: 'Unit',
        dataIndex: 'unit',
        key: 'unit',
        width: '20%'
      },

    ];



    const data = [
      {
        key: 1,
        code: 'PR/C15/01',
        pname: 'Solid Waste',
        plant: 'Peliyagoda',
        grade: 15,
        date: '05.06.2017',
        status: ['Succes'],
      },

      {
        key: 2,
        code: 'PR/C20/02',
        pname: 'Domestic',
        plant: 'Jaffna',
        grade: 20,
        date: '05.06.2017',
        status: ['Succes'],
      },

      {
        key: 3,
        code: 'PR/C25/03',
        pname: 'Sierra Piling',
        plant: 'Trincomale',
        grade: 25,
        date: '05.06.2017',
        status: ['Succes'],
      },
    ];

    const data3 = [
      {
        key: '1',
        parameter: 'Strength 7 Days',
        value: 5,
        unit: 'N',
      },
      {
        key: '2',
        parameter: 'Strength 28 Days',
        value: 10,
        unit: 'N',

      },

    ];

    const data4 = [
      {
        key: '1',
        trials: 'Trial1',
        sevdaysStrength: 5,
        twedaysStrength: '6',
        unit: 'N',

      },
      {
        key: '2',
        trials: 'Trial2',
        sevdaysStrength: 10,
        twedaysStrength: '5',
        unit: 'N',
        width: '8%'
      },

    ];



    const expandedRowRender = () => {
      const columns = [
        { title: 'Strength', dataIndex: 'strength', key: 'strength', width: '15%' },
        { title: 'Iteration1', dataIndex: 'Iteration1', key: 'Iteration1', width: '15%' },
        { title: 'Iteration2', dataIndex: 'Iteration2', key: 'Iteration2', width: '15%' },

        { title: 'Iteration3', dataIndex: 'Iteration3', key: 'Iteration3', width: '15%' },

      ];


      const data = [
        {
          key: '1',
          strength: "7Days",
          Iteration1: "20",
          Iteration2: '30',
          Iteration3: '40',
        },
        {
          key: '2',
          strength: "28Days",
          Iteration1: "20",
          Iteration2: '30',
          Iteration3: '40',
        },
      ];
      return <Table columns={columns} dataSource={data} pagination={false} size="small" />;
    };


    const columns1 = [
      { title: '  RawMaterial', dataIndex: 'rawmaterial', key: 'rawmaterial' },

      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
      },
    ];

    const data1 = [
      {
        key: 1,
        rawmaterial: 'Cement',
      },
      {
        key: 2,
        rawmaterial: 'AdMixture',

      },
      {
        key: 3,
        rawmaterial: 'FineAggregate',

      },
    ];


    const expandedRowRender1 = () => {
      const columns2 = [
        { title: 'Paramaeter', dataIndex: 'paramater', key: 'paramaeter', width: '6%' },
        { title: 'Value', dataIndex: 'value', key: 'value', width: '6%' },
        { title: 'Accepted Value', dataIndex: 'acceptedvalue', key: 'acceptedvalue', width: '6%' },
        { title: 'Date', dataIndex: 'date', key: 'date', width: '8%' },
      ];


      const data2 = [
        {
          key: '1',
          paramater: "Temperature",
          value: "20",
          acceptedvalue: '30',
          date: '12-11-2019',
        },
        {
          key: '2',
          paramater: "Strength",
          value: "20",
          acceptedvalue: '30',
          date: '2-6-2019',
        },

      ];
      return <Table columns={columns2} dataSource={data2} pagination={false} size="small" />;
    };



    return (
      <React.Fragment>
        <Breadcrumb style={{
          marginTop: '-40px 0'
        }}>
          <Breadcrumb.Item>Testing</Breadcrumb.Item>
          <Breadcrumb.Item>FP Trial Test</Breadcrumb.Item>
        </Breadcrumb>


        <div
          style={{
            padding: 12,
            background: '#eef6fc',
            minHeight: '500px',
            marginTop: '10px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
          }}>

          <StickyContainer>

            {/* <a href='#/testTrialRawMaterial'>   <Button style={{ marginLeft: '950px' }} ><Icon type="arrow-left" />Back</Button></a> */}
            <br />
            {/* Tap 1 starting Point  */}
            <br />
            <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>

              <TabPane tab="Quality Parameter" key="1" style={{ height: '', fontSize: '10px' }}>


                <FpTestHeader />

                <div

                >
                  <h2 style={{ fontSize: '14px', fontWeight: 'bold' }}>Material Relate Parameter:</h2>

                  <Row >
                    <Col span={8}>
                      <Form.Item label="7 days Strength:" style={{ fontSize: '12px' }}>
                        <Input
                          type='text'
                          value='3'
                          readOnly

                          style={{ width: '100px' }}
                        /><span style={{ marginLeft: '10px' }}>N</span>
                      </Form.Item>

                    </Col>


                    <Col span={8}>
                      <Form.Item label="28 days Strength:" style={{ marginLeft: '-180px', fontSize: '12px' }}>
                        <Input
                          type='text'
                          value='5'
                          readOnly
                          style={{ width: '100px' }}
                        /><span style={{ marginLeft: '10px' }}>N</span>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Divider type="horizontal" style={{
                    margin: '8px 0'
                  }} />

                  <h2 style={{ fontSize: '14px', fontWeight: 'bold' }}>Additional Parameter:</h2>
                  <Row >
                    <Col span={8}>
                      <Form.Item label="7 days Strength:" style={{ fontSize: '12px' }}>
                        <Input

                          style={{ width: '100px' }}
                        /><span style={{ marginLeft: '10px' }}>N</span>
                      </Form.Item>

                    </Col>


                    <Col span={8}>
                      <Form.Item label="28 days Strength:" style={{ marginLeft: '-180px', fontSize: '12px' }}>
                        <Input

                          style={{ width: '100px' }}
                        /><span style={{ marginLeft: '10px' }}>N</span>
                      </Form.Item>
                    </Col>


                    <Col span={8}>

                      <Button type="primary" style={{ marginTop: '40px', marginLeft: '-350px' }} onClick={() => { this.onButtonClick() }}>Find</Button>


                    </Col>
                    <Divider type="horizontal" style={{
                      margin: '8px 0'
                    }} />

                    {this.state.showComponent ?
                      <TestResultParameter /> :
                      null
                    }


                  </Row>





                </div>

              </TabPane>

              {/* Tab 2 Starting Point */}

              <TabPane tab="Raw Material Parameters" key="2" >


                <div>


                  <FpTestHeader />


                  {/* <Divider type="horizontal" style={{
                    margin: '16px 0'
                  }}
                  /> */}
                  <Table
                    columns={columns1}
                    expandedRowRender={expandedRowRender1}
                    dataSource={data1}
                    size="small"
                  />
                </div>
              </TabPane>

              {/* Tab 3 Starting Point */}
              {/* <TabPane tab="Test Parameters" key="3">


                <FpTestHeader />


                <Divider type="horizontal" style={{
                  margin: '16px 0'
                }}
                />
              </TabPane>
 */}


              <TabPane tab="Test Result" key="3">


                <FpTestHeader />




                <h4> Material Parameter</h4>

                <Table columns={columns2} dataSource={data3} size="small" />

                <h4 style={{ marginTop: '-40px' }}> Test Result Value</h4>

                <Table columns={columns3} dataSource={data4} size="small" />

                <h4 style={{ marginTop: '-40px' }}>Average Value</h4>
                <Row >
                  <Col span={8}>
                    <Form.Item label="7 days Strength:" style={{ fontSize: '12px' }}>
                      <Input
                        type='text'



                        style={{ width: '100px' }}
                      /><span style={{ marginLeft: '10px' }}>N</span>
                    </Form.Item>

                  </Col>


                  <Col span={8}>
                    <Form.Item label="28 days Strength:" style={{ marginLeft: '-180px', fontSize: '12px' }}>
                      <Input
                        type='text'


                        style={{ width: '100px' }}
                      /><span style={{ marginLeft: '10px' }}>N</span>
                    </Form.Item>
                  </Col>

                  <Col span={8}>

                    <Button type="primary" style={{ marginTop: '40px', marginLeft: '-350px' }} onClick={() => { this.onButtonClick() }}>Calculate</Button>


                  </Col>

                  <Divider type="horizontal" style={{
                    margin: '8px 0'
                  }} />

                </Row>
                <Row>
                  <Col span={8}>
                    <h4>Status</h4>



                    <Form.Item label="7 Days Strength:" style={{ fontSize: '12px' }}>
                      <Input
                        type='text'

                        style={{ width: '100px' }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="28 Days Strength:" style={{ fontSize: '12px', marginTop: '30px', marginLeft: '-200px' }}>
                      <Input
                        type='text'

                        style={{ width: '100px' }}
                      />
                    </Form.Item>
                  </Col>



                </Row><Row>
                  <Col span={8}>
                    <Button style={{ marginLeft: '10px', borderColor: 'green', color: "green" }}>Pass</Button>
                  </Col>
                  <Col span={8}>
                    <Button style={{ marginLeft: '-270px', borderColor: 'red', color: 'red' }}>Fail</Button>
                  </Col>
                </Row>


                <Row>
                  <Col span={24}>
                    <Form.Item label="Comments">

                      <TextArea
                        style={{ width: '400px' }} />
                    </Form.Item>

                  </Col>
                  <Button type="primary" style={{ marginLeft: '500px' }}>Submit</Button>
                  <Button type="default" style={{ marginLeft: '20px' }}>Proceed</Button>
                </Row>


              </TabPane>


              {/* Tab 4 Starting Point */}

              {/* <TabPane tab="Manage Test Trial" key="4" style={{ fontSize: '10px' }}>



                <div>

                  <FpTestHeader />

                  <Modal
                    visible={visible}
                    title="Add Result"
                    onOk={this.handleOk}
                    width="700px"
                    onCancel={this.handleCancel}
                    footer={[
                      <Button key="back" onClick={this.handleCancel}>
                        Return
                </Button>,
                      <Button
                        key="submit"
                        type="primary"
                        loading={loading}
                        onClick={this.handleOk}
                      >
                        Save
                </Button>
                    ]}
                  >
                    <div  >
                      <div>
                        <h2>Strength Result</h2>
                      </div>

                      <Form layout="inline" onSubmit={this.handleSubmit}>
                        <Row>



                          <Select
                            style={{ width: 300 }}
                            placeholder="Select the Trial"

                          >
                            <Option value="cement">Trial1</Option>
                            <Option value="admixture">  Trial2</Option>
                            <Option value="fineaggregate "> Trial3</Option>
                            <Option value="coarseaggregate">  Trial4</Option>
                            <Option value="concrete">Trial5</Option>


                          </Select>


                        </Row>
                        <Row>
                          <Col span={12} >

                            <Form.Item label=" 7Days: ">


                              <Input
                                placeholder=" Enter 7days result"
                                style={{ width: '300px' }}
                              />
                            </Form.Item>


                          </Col>

                        </Row>

                        <Row>
                          <Col span={12} >

                            <Form.Item label=" 28Days: ">


                              <Input
                                placeholder=" Enter 28days result"
                                style={{ width: '300px' }}
                              />
                            </Form.Item>


                          </Col>

                        </Row>

                      </Form>
                    </div>
                  </Modal>



                  <Table
                    style={{ fontSize: '6px' }}
                    className="components-table-demo-nested"
                    columns={columns}
                    expandedRowRender={expandedRowRender}
                    dataSource={data}
                    size="small" />

                </div>


              </TabPane> */}

            </Tabs>




          </StickyContainer>

        </div>

      </React.Fragment>
    )
  }
}
export default AddFPTest;


