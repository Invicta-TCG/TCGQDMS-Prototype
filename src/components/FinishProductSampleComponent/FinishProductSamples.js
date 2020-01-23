import React from 'react';
import { Form, Icon, Input, Button, DatePicker, Modal, message, Menu, Row, Col, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';


const { Option } = Select;

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}



function handleChange(value) {
  console.log(`selected ${value}`);
}

export default class FinishProductSamples extends React.Component {

  state = {
    tabPosition: 'Suppliers',
    tabPosition1: 'River Sand',
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


  changeTabPosition = tabPosition => {
    this.setState({ tabPosition });
  };


  render() {
    const { visible, loading } = this.state;
    const menu = (
      <Menu >
        <Menu.Item key="1">
          <Icon type="user" />
          yes
          </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          NO
          </Menu.Item>

      </Menu>
    );

    return (
      <div>



        <Button type="primary" onClick={this.showModal} style={{ fontSize: '13px' }}>
          Add Finish Product Samples
            </Button>
        <Modal
          visible={visible}
          title="Add Sample"
          onOk={this.handleOk}
          width="600px"
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


            <Form layout="inline" onSubmit={this.handleSubmit}>
              <Row>
                <Col span={8} >

                  <Form.Item label=" Sample Code: ">


                    <Input
                      placeholder=" Sample Code"
                      style={{ width: '150px' }}
                    />
                  </Form.Item>


                </Col>
                <Col span={8} >

                  <Form.Item label="Customer Name">


                    <Select
                      style={{ width: '150px' }}
                      placeholder="Customer Name"
                    >
                      <Option value="top">Mr.Perera</Option>
                      <Option value="bottom">Mr.Nuwan</Option>
                      <Option value="left">Mr.Lakmal</Option>
                      <Option value="right">Mr.Sunil</Option>
                    </Select>

                  </Form.Item>

                </Col>

                <Col span={8} >

                  <Form.Item label="Delivered Date: ">

                    <DatePicker onChange={onChange} style={{ width: '150px' }} />
                  </Form.Item>

                </Col>
              </Row>

              <Row>

                <Col span={8} >

                  <Form.Item label="Finish Product Code ">


                    <Select
                      style={{ width: '150px' }}
                      placeholder="Finish Product Code"
                    >
                      <Option value="top">PR/C25/001</Option>
                      <Option value="bottom">PR/C30/001</Option>
                      <Option value="left">PR/C35/001</Option>
                      <Option value="right">PR/C40/001</Option>
                    </Select>

                  </Form.Item>
                </Col>


                <  Col span={8} >
                  <Form.Item label="Grade :">
                    <Select
                      style={{ width: 150 }}
                      placeholder="Select Grade"

                    >
                      <Option value="cement">Grade 20</Option>
                      <Option value="admixture"> Grade 25</Option>
                      <Option value="fineaggregate ">Grade 30</Option>
                      <Option value="coarseaggregate">Grade 35</Option>
                      <Option value="concrete">Grade 40</Option>


                    </Select>
                  </Form.Item>
                </Col>

                <  Col span={8} >
                  <Form.Item label="Plant :">
                    <Select
                      style={{ width: 150 }}
                      placeholder="Select Plant"

                    >
                      <Option value="cement">Peliyagoda</Option>
                      <Option value="admixture">Jaffna</Option>
                      <Option value="fineaggregate ">Ratmalana</Option>
                      <Option value="coarseaggregate">Kandy</Option>
                    
                    </Select>
                  </Form.Item>

                </Col>
              </Row>


              <Row>

                <Col span={12} >
                  <Form.Item label=" Sample Size: ">
                  <TextArea
                      placeholder=" Sample Size"
                      style={{ width: '240px' }}
                    />
                  </Form.Item>
                </Col>

                <Col span={12} >

                  <Form.Item label=" Description: ">
                    <TextArea
                      placeholder=" Description"
                      style={{ width: '240px' }}
                    />
                  </Form.Item>
                </Col>

                

              </Row>

            </Form>
          </div>
        </Modal>
      </div>

    );
  }
}