import React from 'react';
import { Form, Input, Select, Divider, Row, Col, Button, Breadcrumb } from 'antd';

const { Option } = Select;
export default class ProductParameterMaster extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Breadcrumb style={{
                    margin: '16px 0'
                }}>
                    <Breadcrumb.Item>Testing</Breadcrumb.Item>
                    <Breadcrumb.Item>Test Samples</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 12,
                        background: '#eef6fc',
                        minHeight: '500px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                    }}>
                    <div><h1>Product Parameter Master</h1>
                        <Divider type="horizontal" style={{
                            margin: '16px 0'
                        }}
                        />
                        <br />
                        <Form labelAlign="left" labelCol={{ span: 5 }} wrapperCol={{ span: 8 }} onSubmit={this.handleSubmit}>
                            <Form.Item label="Code">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Description">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Unit">
                                <Input />
                            </Form.Item>
                            {/* <Form.Item label="Entry Level">
                <Select
                        style={{ width: 350 }}
                        placeholder="Select a entry level"
            
                    >
                        <Option value="jack">Test Level</Option>
                        <Option value="lucy">Configuration Level</Option>
                      
                    </Select>
                </Form.Item> */}

                        </Form>
                        <br />
                        <Row>
                            <Col span={10}></Col>
                            <Col span={2}>
                                <Button type="primary">Cancel</Button>
                            </Col>
                            <Col span={2}> <Button type="primary">Save</Button></Col>
                            <Col span={10}></Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
