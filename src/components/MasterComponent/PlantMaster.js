import React from 'react';
import { Modal, Button, Form, Input, Row, Col } from 'antd';
import TextArea from 'antd/lib/input/TextArea';



export default class PlantMaster extends React.Component {
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
          Add Plant
            </Button>
        <Modal
          visible={visible}
          title="Add Plant"
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
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col span={12} >

                <Form.Item label="  Code: ">


                  <Input
                    placeholder=" Code"
                    style={{ width: '200px' }}
                  />
                </Form.Item>


              </Col>
              <Col span={12} >

                <Form.Item label="Plant Name: ">

                  <Input
                    placeholder=" Plant Name"
                    style={{ width: '200px' }}
                  />

                </Form.Item>

              </Col>

            </Row>
            <Row>
              <Col span={12} >

                <Form.Item label="  Place: ">


                  <Input
                    placeholder=" Palce"
                    style={{ width: '200px' }}
                  />
                </Form.Item>


              </Col>
              <Col span={12} >

                <Form.Item label="Telephone Num: ">

                  <Input
                    placeholder=" Telephone"
                    style={{ width: '200px' }}
                  />

                </Form.Item>

              </Col>

            </Row>

            <Row>
              <Col span={22}>
                <Form.Item label="Description ">

                  <TextArea
                    placeholder=" Description"
                    style={{ width: 540 }}
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


