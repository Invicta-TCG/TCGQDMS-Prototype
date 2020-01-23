import React, { Component } from 'react';

import { Tabs, Divider, Form, Input, Row, Col, Button, Popconfirm, Table } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import RMTestHeader from './RMTestHeader';
import TextArea from 'antd/lib/input/TextArea';

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);

function confirm(e) {
  console.log(e);
  // message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  // message.error('Click on No');
}



const columns = [
  { title: 'Parameter', dataIndex: 'parameter', key: 'parameter', width: "6%" },
  { title: 'Unit', dataIndex: 'unit', key: 'unit', width: '6%' },
  { title: 'Accept Value', dataIndex: 'value', key: 'value', width: '35%' },

];
const columns1 = [
  { title: 'Iteration', dataIndex: 'iteration', key: 'iteration' },
  { title: 'Parameter', dataIndex: 'parameter', key: 'parameter' },
  { title: 'Unit', dataIndex: 'unit', key: 'unit' },
  { title: 'Result Value', dataIndex: 'value', key: 'value' },
  // { title: 'Status', dataIndex: 'status', key: 'status' },

];

const data = [
  {
    key: '1',
    parameter: 'Moisture',
    value: '5-7',
    unit: 'g',

  },
];
const data1 = [
  {
    key: '1',
    iteration: 1,
    parameter: 'Weight',
    value: 6.2,
    unit: 'g',
    // status: 'pass'
  },
  {
    key: '2',
    iteration: 2,
    parameter: 'Weight',
    value: 7.0,
    unit: 'g',
    // status: 'pass'
  },
  {
    key: '3',
    iteration: 3,
    parameter: 'Weight',
    value: 6.7,
    unit: 'g',
    // status: 'pass'
  },
];



class AddSupplierSampleRM extends React.Component {
  render() {
    return (

      <div
        style={{
          padding: 12,
          background: '#eef6fc',
          minHeight: '500px',
          marginTop: '10px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
        }}>

        <StickyContainer>
          <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
            <TabPane tab="Quality parameter" key="1" >


              <RMTestHeader />

              <Divider type="horizontal" style={{
                margin: '8px 0'
              }} />

              <h4>MaterialParameter with Accepted Value</h4>

              <Row>
                <Col span={24}>
                  <Form.Item label="Moisture:" style={{ fontSize: '12px' }}>
                    <Input
                      type="text"
                      value="5-7"
                      style={{ width: '100px' }}
                    /><span style={{ marginLeft: '10px' }}>g</span>
                  </Form.Item>

                </Col>


              </Row>


              <h4>Equipment Parameter</h4>

              <Row>
                <Col span={24}>
                  <Form.Item label="Weight Of Pan:" style={{ fontSize: '12px' }}>
                    <Input
                      type="text"
                      value="244"
                      style={{ width: '100px' }}
                    /><span style={{ marginLeft: '10px' }}>g</span>
                  </Form.Item>

                </Col>


              </Row>


              <Divider type="horizontal" style={{
                margin: '8px 0'
              }} />

              <h4>Additional Parameter</h4>
              <Row>
                <Col span={6}>
                  <Form.Item label="Weight of dried sample before wash (A) " style={{ fontSize: '12px' }}>
                    <Input

                      style={{ width: '100px' }}
                    /><span style={{ marginLeft: '10px' }}>g</span>
                  </Form.Item>

                </Col>


                <Col span={6}>
                  <Form.Item label="Weight of dried sample after wash (B) " style={{ marginLeft: '10px', fontSize: '12px' }}>
                    <Input

                      style={{ width: '100px' }}
                    /><span style={{ marginLeft: '10px' }}>g</span>
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Form.Item label="Weight of dried sample with Pan (C) " style={{ marginLeft: '20px', fontSize: '12px' }}>
                    <Input

                      style={{ width: '100px' }}
                    /><span style={{ marginLeft: '10px' }}>g</span>
                  </Form.Item>
                </Col>

                <Col span={6}>

                  <Button type="primary" style={{ marginTop: '40px', marginLeft: '50px' }} >Calculate</Button>


                </Col>
              </Row>
              <Divider type="horizontal" style={{
                margin: '8px 0'
              }} />
              <h4>Test Result Parameter</h4>
              <Row>
                <Col span={8}>
                  <Form.Item label="Moisture :" style={{ fontSize: '12px' }}>
                    <Input


                      style={{ width: '100px' }}
                    /><span style={{ marginLeft: '10px' }}>g</span>
                  </Form.Item>

                </Col>

                <Col span={8}>
                  <Popconfirm
                    title="Do You Want to do the Trial Test Again?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >

                    <Button type="primary" style={{ marginTop: '40px', marginLeft: '-200px' }} >Submit</Button>
                  </Popconfirm>

                </Col>


              </Row>

            </TabPane>
            <TabPane tab="Result Value" key="2">

              <RMTestHeader />
              <Divider type="horizontal" style={{
                margin: '8px 0'
              }} />

              <h4>Master Related Parameter</h4>
              <br />
              <Table columns={columns} dataSource={data} size='small' />

              <h4 style={{ marginTop: '-40px' }}>Test Related Parameter</h4>

              <Table columns={columns1} dataSource={data1} size='small' />



              <Row style={{ marginTop: '-40px' }}>
                <Col span={8}>
                  <Form.Item label="Average Value:" style={{ fontSize: '12px' }}>
                    <Input

                      value="6.6"
                      style={{ width: '100px' }}
                    />
                  </Form.Item>

                </Col>

                <Col span={8}>


                  <Button type="primary" style={{ marginTop: '40px', marginLeft: '-200px' }} >Calculate</Button>


                </Col>


              </Row>

              <Divider type="horizontal" style={{
                margin: '8px 0'
              }} />
              <Row>
                <Col span={8}>
                  <Form.Item label='Status'>
                    <Input
                      value="Pass"
                      style={{ width: '100px' }} />
                  </Form.Item>
                </Col>
                <Col span={8}>


                  <Button type="danger" style={{ marginTop: '40px', marginLeft: '-200px' }} >Fail</Button>


                </Col>

                <Col span={8}>


                  <Button style={{ marginTop: '40px', marginLeft: '-480px', background: 'green', color: 'white' }} >Pass</Button>


                </Col>
              </Row>

              <Row>

                <Form.Item label="Comments">
                  <TextArea
                    value="This Sample is in Acceptable Range"
                    style={{ width: '300px' }} />
                </Form.Item>
                <Button type="primary" style={{ marginLeft: '500px' }}>Submit</Button>
                <Button type="default" style={{ marginLeft: '20px' }}>Proceed</Button>
              </Row>


            </TabPane>
           
          </Tabs>
        </StickyContainer>
      </div>

    )
  }
}


export default AddSupplierSampleRM;