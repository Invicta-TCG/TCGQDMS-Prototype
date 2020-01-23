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
                                placeholder="Test Code"
                                type="text"
                                value="STR00000001"
                                style={{ width: 150 }}

                            />
                        </Form.Item>

                    </Col>

                    <Col span={3} >
                        <Form.Item label="Grade" style={{ marginLeft: '17px', fontSize: "12px" }}>
                            {/* <Select
                                style={{ width: 150 }}
                                placeholder="Select the Grade"

                            >
                                <Option value="cement">Grade 15</Option>
                                <Option value="admixture"> Grade 20</Option>
                                <Option value="fineaggregate ">Grade 25</Option>
                                <Option value="coarseaggregate"> Grade 30</Option>
                                <Option value="concrete">Grade 35</Option>


                            </Select> */}

                            <Input
                                placeholder="Grade"
                                type="text"
                                value="Grade 25"
                                style={{ width: 150 }}

                            />
                        </Form.Item>

                    </Col>

                    <Col span={3} >
                        <Form.Item label="Mix Design" style={{ marginLeft: '60px', fontSize: "12px" }}>
                            {/* <Select
                                style={{ width: 150 }}
                                placeholder="Select the Mix Design "

                            >
                                <Option value="cement">PR/C25/001</Option>
                                <Option value="admixture"> PR/C35/002</Option>
                                <Option value="fineaggregate ">PR/C30/003</Option>
                                <Option value="coarseaggregate"> PR/C15/004</Option>
                                <Option value="concrete">PR/C120/005</Option>


                            </Select> */}

                            <Input
                                placeholder="Mix Design"
                                type="text"
                                value="PR/C25/005"
                                style={{ width: 150 }}

                            />
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
                                <Option value="coarseaggregate">Ratmalana</Option>
                                


                            </Select> */}

                            <Input
                                placeholder="Plant"
                                type="text"
                                value="Peliyagoda"
                                style={{ width: 150 }}

                            />
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
                                placement="bottom"

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