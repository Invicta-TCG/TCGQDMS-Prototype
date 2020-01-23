import React from 'react';
import { Modal, Button, Form, Input, Select, Col, Row } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

export default class QcStaff extends React.Component {
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
        <Button type="primary" onClick={this.showModal}>
          Add QC Employee
            </Button>
        <Modal
          visible={visible}
          title="Add QC Employee"
          onOk={this.handleOk}
          width="800px"
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
              Register
                </Button>
          ]}
        >
          <Form onSubmit={this.handleSubmit}>

            <Row style={{ marginLeft: '20px', paddingTop: '20px' }}>


              <Col span={12} >

                <Form.Item label=" First Name: ">
                  <Input
                    placeholder=" Full Name"
                    style={{ width: '300px' }}
                  />
                </Form.Item>



              </Col>

              <Col span={12} >

                <Form.Item label="LastName: ">


                  <Input
                    placeholder="lastname"
                    style={{ width: '300px' }}
                  />
                </Form.Item>

              </Col>
            </Row>
            <Row style={{ marginLeft: '20px' }}>


              <Col span={12} >

                <Form.Item label="Address: ">


                  <Input
                    placeholder=" Address"
                    style={{ width: '300px' }}
                  />
                </Form.Item>

              </Col>

              <Col span={12} >

                <Form.Item label="Phone Number: ">


                  <Input
                    placeholder=" Phone Number"
                    style={{ width: '300px' }}
                  />
                </Form.Item>

              </Col>
            </Row>
            <Row style={{ marginLeft: '20px' }}>
              <Col span={12} >

                <Form.Item label="Plant">
                  <Select
                    style={{ width: '300px' }}
                    placeholder="Select the Plant"

                  >
                    <Option value="top">Peliyagoda</Option>
                    <Option value="bottom">Jaffna</Option>
                    <Option value="left">Trincomale</Option>
                    <Option value="right">Ratmalana</Option>
                  </Select>
                </Form.Item>

              </Col>
              <Col span={12} >

                <Form.Item label="User Role">
                  <Select
                    style={{ width: '300px' }}
                    placeholder="Select the Role"

                  >
                    <Option value="top">QC Manager</Option>
                    <Option value="bottom">QC Assistant Manager</Option>
                    <Option value="left">QC staff</Option>
                    <Option value="right">QC Technician</Option>
                    <Option value="right">QC Tester</Option>
                  </Select>
                </Form.Item>

              </Col>

            </Row>

            <Row style={{ marginLeft: '20px' }}>
              <Col span={12} >

                <Form.Item label="User Name: ">


                  <Input
                    placeholder="User Name"
                    style={{ width: '300px' }}
                  />
                </Form.Item>


              </Col>
              <Col span={12} >

                <Form.Item label="Email: ">


                  <Input
                    placeholder=" Email"
                    style={{ width: '300px' }}
                  />
                </Form.Item>

              </Col>

            </Row>
          </Form>
        </Modal>
      </div>
    );
  }
}


