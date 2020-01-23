import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';



export default class RawMaterials extends React.Component {
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
              Add Materials
            </Button>
            <Modal
              visible={visible}
              title="Add RawMaterials"
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
              <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                <Form.Item label="Material Name">
                  <Input />
                </Form.Item>
                <Form.Item label="Type">
                  <Input />
                </Form.Item>
                <Form.Item label="Sub">
                  <TextArea />
                </Form.Item>
                <Form.Item label="Description">
                  <TextArea />
                </Form.Item>
              
              </Form>
            </Modal>
          </div>
        );
      }
    }
    
    
    