import React, { Component } from 'react';
import {
    Tabs,
    Breadcrumb,
    Input,
    DatePicker,
    Form,
    Row,
    Col,
    Select,
    Divider,
    Button,
    Icon,
    Table
    , Modal,
    Popconfirm, message, Popover
} from 'antd';




const { Option } = Select;

function onChange(date, dateString) {
    console.log(date, dateString);
}
class FpTestHeader extends Component {

    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    render() {
        return (
            <div>

                <Row  >
                    <Col span={4} >
                        <Form.Item label=" Test Code" style={{ marginLeft: '17px', fontSize: "12px" }}>
                            <Input
                                value="SAM/SUP/MICR/001"
                                placeholder="Test Code"
                                style={{ width: 150 }}

                            />
                        </Form.Item>

                    </Col>

                    <Col span={3} >
                        <Form.Item label="Sample" style={{ marginLeft: '17px', fontSize: "12px" }}>
                            <Input
                                style={{ width: 150 }}
                                placeholder="Sample"
                                value="SAM/RM/S"

                            >
                            </Input>




                        </Form.Item>

                    </Col>

                    <Col span={3} >
                        <Form.Item label="Material" style={{ marginLeft: '60px', fontSize: "12px" }}>
                            <Input
                                value="M Sand"
                                style={{ width: 150 }}
                                placeholder="Material "
                            >
                            </Input>

                        </Form.Item>

                    </Col>

                    <Col span={3} >
                        <Form.Item label="Plant" style={{ marginLeft: '100px', fontSize: "12px" }}>
                            {/* <Select
                                style={{ width: 150 }}
                                placeholder="Select the Plant"

                            >
                                <Option value="cement">Peliyagoda</Option>
                                <Option value="admixture"> Jaffna</Option>
                                <Option value="fineaggregate ">Trincomale</Option>
                                <Option value="coarseaggregate"> Ratmalana</Option>



                            </Select> */}

                            <Input
                                value="Peliyagoda"
                                style={{ width: 150 }}
                                placeholder="Peliyagoda"
                            >
                            </Input>

                        </Form.Item>

                    </Col>

                    <Col span={3} >
                        <Form.Item label="Date" style={{ marginLeft: '140px', fontSize: "12px" }}>
                            <DatePicker onChange={onChange} style={{ width: '150px' }} />
                        </Form.Item>

                    </Col>

                    <Col span={3} >
                        <Form.Item style={{ marginLeft: '180px', fontSize: "12px" }}>
                            <Popover style={{ width: '200px', height: '200px' }}
                                title="procedure"

                                content="Average weight of initial and final weight"

                            >

                                <a > <Button type="primary" style={{ width: '150px', marginTop: '43px', pointerEvents: 'none' }}   >
                                    Procedure
            </Button></a>

                            </Popover>

                        </Form.Item>

                    </Col>



                </Row>


            </div>
        );
    }
}

export default FpTestHeader;