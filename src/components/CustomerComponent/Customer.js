import React from 'react';
import { Modal, Button, Form, Input, Row, Col, DatePicker } from 'antd';




function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class Customer extends React.Component {
  state = {
    loading: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal} style={{ fontSize: "13px" }}>
          Add Customer
            </Button>
        <Modal
          visible={visible}
          title="Add Customer"
          onOk={this.handleOk}
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
          <Form onSubmit={this.handleSubmit} style={{ marginTop: '-10px' }}>

            <Row>
              <Col span={8} >

                <Form.Item label=" ID: ">


                  <Input
                    placeholder=" ID"
                    style={{ width: '150px' }}
                  />
                </Form.Item>


              </Col>
              <Col span={8} >

                <Form.Item label=" Customer Name: ">


                  <Input
                    placeholder=" Customer Name"
                    style={{ width: '150px' }}
                  />
                </Form.Item>

              </Col>

              <Col span={8} >

                <Form.Item label=" Address: ">


                  <Input
                    placeholder="Address"
                    style={{ width: '150px' }}
                  />
                </Form.Item>

              </Col>
            </Row>

            <Row>
              <Col span={8} >

                <Form.Item label=" Phone No: ">

                  <Input
                    placeholder=" Phone No"
                    style={{ width: '150px' }}
                  />
                </Form.Item>
              </Col>
              <Col span={8} >

                <Form.Item label=" Email: ">
                  <Input
                    placeholder=" Email"
                    style={{ width: '150px' }}
                  />
                </Form.Item>
              </Col>

              <  Col span={8} >
                <Form.Item label="Date: ">

                  <DatePicker onChange={onChange} style={{ width: '140px' }} />
                </Form.Item>
              </Col>
            </Row>

          </Form>
        </Modal>
      </div>
    );
  }
}


