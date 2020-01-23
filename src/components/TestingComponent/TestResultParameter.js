import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, message, Popconfirm } from 'antd';


function confirm(e) {
  console.log(e);
  // message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  // message.error('Click on No');
}


class TestResultParameter extends Component {


  render() {
    return (
      <div>
        <h2 style={{ fontSize: '14px', fontWeight: 'bold' }}>Test Result Parameter</h2>
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
            <Popconfirm
              title="Do You Want to do the Trial Test Again?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >

              <Button type="primary" style={{ marginTop: '40px', marginLeft: '-350px' }}> <a style={{ color: 'white' }} >Submit</a></Button>

            </Popconfirm>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TestResultParameter;