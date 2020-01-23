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

//   function handleMenuClick(e) {
//     message.info('Click on menu item.');
//     console.log('click', e);
//   }

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default class AddSupplierSamples extends React.Component {

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
          Add Sample
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

                  <Form.Item label="Supplier Name: ">


                    <Select
                      style={{ width: '150px' }}
                      value={this.state.tabPosition}
                      onChange={this.changeTabPosition}
                      dropdownMatchSelectWidth={false}
                    >
                      <Option value="top">Supplier1</Option>
                      <Option value="bottom">Supplier2</Option>
                      <Option value="left">Supplier3</Option>
                      <Option value="right">Supplier4</Option>
                    </Select>

                  </Form.Item>

                </Col>

                <Col span={8} >




                  <Form.Item label="Raw Material:">
                    <Select
                      style={{ width: 150 }}
                      placeholder="Select the Raw Material"

                    >
                      <Option value="cement">Cement</Option>
                      <Option value="admixture"> Optima100</Option>
                      <Option value="riverSand ">RiverSand</Option>
                      <Option value="sand ">M|S Sand</Option>
                      <Option value="coarseaggregate"> 0-5mm </Option>


                    </Select>
                  </Form.Item>

                </Col>
              </Row>

              <Row>

                <Col span={12} >

                  <Form.Item label="Delivered Date: ">

                    <DatePicker onChange={onChange} style={{ width: '240px' }} />
                  </Form.Item>
                </Col>


                <  Col span={12} >
                  <Form.Item label=" Vechical No: ">


                    <Input
                      placeholder="Vechical No"
                      style={{ width: '240px' }}
                    />
                  </Form.Item>

                </Col>
              </Row>


              <Row>

                <  Col span={24} >


                </Col>
                <Col span={12} >


                  <Form.Item label=" Description: ">


                    <TextArea
                      placeholder=" Description"
                      style={{ width: '520px' }}
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