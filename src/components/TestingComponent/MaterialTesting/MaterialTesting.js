import React from 'react';
import { Modal, Button, Form, Input ,Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';


const { Option } = Select;
export default class Supplier extends React.Component {
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
              Add Material Testing
            </Button>
            <Modal
              visible={visible}
              title="Add Material Testing"
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
              <Form labelCol={{ span: 5 }} wrapperCol={{ span: 16 }} onSubmit={this.handleSubmit}>
                <Form.Item label="Name">
                <Select
              placeholder="Select Material...."
              onChange={this.handleSelectChange}
            >
              <Option value="cement">Cement</Option>
              <Option value="admixture">AdMixture</Option>
              <Option value="fine">Fine</Option>
              <Option value="coarse">Coarse</Option>
              <Option value="Concrete">Concrete</Option>
           
            </Select>
                </Form.Item>
                <Form.Item label="Test Type">
                  <Input />
                </Form.Item>
                <Form.Item label="Accepted Value">
                  <Input />
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
    
    
    