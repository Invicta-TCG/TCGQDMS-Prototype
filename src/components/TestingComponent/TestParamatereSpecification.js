import React from 'react'
import { Table, Divider, Tag, Checkbox, Button, Modal, Card, Col, Avatar, Row, Pagination, Form } from 'antd';
import { height } from '@material-ui/system';
import { array } from 'prop-types';



const arr = [true, false, false, false, true, false]
const columns = [
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',

  },
  {
    title: 'Parameter',
    dataIndex: 'parameter',
    key: 'parameter',
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
    key: 'unit',
  },

  {
    title: 'Relevant',
    key: 'relevant',

    render: (text, record) => (
      <Checkbox />
    ),
  },

  {
    title: 'Action',
    key: 'action',


    render: () => <a ><Button type="solution" onClick={this.showModal}>Calculation</Button></a>,


  },
];

const data = [
  {
    key: '1',

    code: 'TP001',
    parameter: 'force',

    unit: 'N',

  },
  {
    key: '2',
    code: 'TP002',
    parameter: 'Weight',

    unit: 'g',

  },
  {
    key: '3',
    code: 'TP003',
    parameter: 'PH',

    unit: 'Ph',

  },
  {
    key: '4',
    code: 'TP004',
    parameter: 'Mositure',

    unit: 'g',

  },
  {
    key: '5',
    code: 'TP005',
    parameter: 'Gravity',

    unit: 'N',

  },
];

class TestParameterSpceification extends React.Component {

  onChange = (record, e) => {
    console.log(record)
    console.log(e.target.checked);
    //console.log(`checked=${e.target.checked}`);
  }
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


  render() {


    const dataSource = [
      {
        key: '1',
        name: 'Mike',

      }

    ];
    const columns = [
      {
        title: 'Code',
        dataIndex: 'code',
        key: 'code',

      },
      {
        title: 'Parameter',
        dataIndex: 'parameter',
        key: 'parameter',
      },
      {
        title: 'Unit',
        dataIndex: 'unit',
        key: 'unit',
      },

      {
        title: 'Relevant',
        key: 'relevant',

        render: (text, record) => (
          <Checkbox
            onChange={this.onChange.bind(this, record)}
            checked={arr[record.key]}

          />
        ),
      },

      {
        title: 'Action',
        key: 'action',


        render: () => <a ><Button type='primary' onClick={this.showModal}>Calculation</Button></a>,


      },
    ];

    const data = [
      {
        key: '1',

        code: 'TP001',
        parameter: 'Force',

        unit: 'N',

      },
      {
        key: '2',
        code: 'TP002',
        parameter: 'Weight',

        unit: 'g',

      },
      {
        key: '3',
        code: 'TP003',
        parameter: 'PH',

        unit: 'Ph',

      },
      {
        key: '4',
        code: 'TP004',
        parameter: 'Mositure',

        unit: 'g',

      },
      {
        key: '5',
        code: 'TP005',
        parameter: 'Gravity',

        unit: 'N',

      },
    ];


    const columns1 = [
      {
        title: 'Material Related Parameters',
        align: 'center',
        dataIndex: 'name',
        key: 'name',
        render: () => <Table dataSource={dataSource1} columns={columns2} pagination={false} showHeader={false} bordered={false} />
      },
      {
        title: 'Additional Parameter',
        align: 'center',
        dataIndex: 'age',
        key: 'age',
        render: () => <Table dataSource={dataSource2} columns={columns2} pagination={false} showHeader={false} />
      },

      {
        title: 'Equipment Parameter',
        align: 'center',
        dataIndex: 'age',
        key: 'age',
        render: () => <Table dataSource={dataSource3} columns={columns2} pagination={false} showHeader={false} />
      },

    ];
    // const columns3 = [
    //   {
    //     title: 'Calculator',
    //     align: 'center',
    //     dataIndex: 'address',
    //     key: 'address',
    //     render: () => <Table dataSource={dataSource2} pagination={false} showHeader={false} bordered={false} />
    //   },

    // ]


    const dataSource1 = [
      {
        key: '1',
        name: 'Moisture',

      },

    ];

    const dataSource3= [
      {
        key: '1',
        name: 'Weigh of Pan',

      },

    ];
    const dataSource2 = [
      {
        key: '1',
        name: 'Weight of dried sample before wash  [A]',

      },
      {
        key: '2',
        name: 'Weight of dried sample after wash  [B]',

      },
      {
        key: '3',
        name: 'Weight of dried sample with Pan [C]',

      },
    ]
    const columns2 = [
      {
        title: '',

        dataIndex: 'name',
        key: 'name',
      },
      
      {
        title: '',
        dataIndex: 'check',
        render: () =>
          <Checkbox />

      }
    ]


    return (
      <div>
        <Table columns={columns} dataSource={data} size='small'></Table>

        <Modal
          title="Calculation"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width='900px'
        >
          <div
            style={{
              padding: 24,
              background: '#fff',
              minHeight: '300px',


            }}>


            <Row>
              <Table
                dataSource={dataSource}
                columns={columns1}
                pagination={false} bordered
                style={{ marginLeft: '-20px', marginTop: '-20px', height: '300px' }}
                size='small' />
            </Row>
            <br />
            <Row>
              {/* <Table 
   dataSource={dataSource2} 
   columns={columns2} 
    pagination={false}  bordered
    
     
  size='small' style={{marginTop:'-150px',marginLeft:'-20PX'}}/> */}

              <Card style={{ marginTop: '-55px', width: '625px', marginLeft: '-20px', height: '100px' }}  >

                <h4 style={{ marginTop: '-20px' }}>Operations</h4>
                <Divider type="horizontal" style={{
                  margin: '8px 0'
                }} />
                <Row>
                  <Col span={2}>
                    <Button>+</Button>
                  </Col>
                  <Col span={2}>
                    <Button>-</Button>
                  </Col>
                  <Col span={2}>
                    <Button>*</Button>
                  </Col>
                  <Col span={2}>
                    <Button>/</Button>
                  </Col>
                  <Col span={2}>
                    <Button>(</Button>
                  </Col>
                  <Col span={2}>
                    <Button>)</Button>
                  </Col>
                  <Col span={2}>
                    <Button>.</Button>
                  </Col>
                  <Col span={2}>
                    <Button>=</Button>
                  </Col>
                  <Col span={2}>
                    <Button>%</Button>
                  </Col>
                  <Col span={2}>
                    <Button>0</Button>
                  </Col>
                </Row>

              </Card>



            </Row>
            <br />
            <Row>

              <Form.Item>

                <textarea style={{ width: '550px', marginLeft: '-20px'}}
                  value="A - B"
                />

              </Form.Item>

              {/* <div style={{ width: '100px', marginLeft: '-20px', marginTop: '-40px',border:"black" }}>
               
                </div> */}



            </Row>


            <Row>

              <Col span={4}>
                <Button style={{ marginLeft: '400px' }} type="primary">Set Equation</Button>
              </Col>
            </Row>



          </div>

        </Modal>

      </div>
    )
  }
}



export default TestParameterSpceification;