import React from 'react';
import {
    Breadcrumb, Row, Col, Button, Input, Icon, Divider, Form,Select
} from 'antd';
const { TextArea } = Input;

const { Option } = Select;
class AddUser extends React.Component {
    render() {
        return (
            <div>

                <Row gutter={12}>
                    <Col span={12}>

                        <br />
                        <div style={{ width: '750px', height: '700px', background: 'white',borderRadius:'10px' }}>




                            <h4 style={{ paddingTop: '20px', marginLeft: '20px', fontSize: '26px' }}>
                                Register New User
               </h4>

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

                                    <Form.Item label="Password: ">


                                        <Input
                                            placeholder=" Password"
                                            style={{ width: '300px' }}
                                        />
                                    </Form.Item>

                                </Col>

                            </Row>

                            <Row style={{ marginLeft: '20px' }}>


                                <Col span={24} >

                                    <Form.Item label="About Me: ">


                                        <TextArea
                                            placeholder=" About Me"
                                            style={{ width: '700px', height: '80px' }}
                                        />
                                    </Form.Item>

                                </Col>
                            </Row>
                            <Row>
                                <Button type="primary " style={{ marginLeft: '600px', marginTop: '10px' }}>Register </Button>
                            </Row>





                        </div>
                    </Col>





                </Row>
            </div>
        );
    }
}

export default AddUser;