import React from 'react';
import {Form ,Input,Select,Divider,Row,Col,Button} from 'antd';

const {Option}=Select;
export default class TestParameterMaster extends React.Component {

    render(){
        return(
            <div><h1>Test Parameter Master</h1>
             <Divider type="horizontal" style={{
                    margin: '16px 0'
                }}
                />
<br/>
                <Form labelAlign="left" labelCol={{ span: 5 }} wrapperCol={{ span: 8 }} onSubmit={this.handleSubmit}>
                <Form.Item label="Code">
                  <Input />
                </Form.Item>
                <Form.Item label="Parameter">
                  <Input />
                </Form.Item>
                <Form.Item label="Unit">
                  <Input />
                </Form.Item>
                <Form.Item label="Entry Level">
                <Select
                        style={{ width: 350 }}
                        placeholder="Select a entry level"
            
                    >
                        <Option value="jack">Test Level</Option>
                        <Option value="lucy">Configuration Level</Option>
                      
                    </Select>
                </Form.Item>
                
              </Form>
              <br/>
<Row>
    <Col span={10}></Col>
    <Col span={2}>
        <Button type="primary">Cancel</Button>
    </Col>
    <Col span={2}> <Button type="primary">Save</Button></Col>
    <Col span={10}></Col>
</Row>
            </div>  
        );
    }
}
