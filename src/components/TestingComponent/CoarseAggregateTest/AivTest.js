import React from 'react';
import { Row, Button, Form, Input ,Col} from 'antd';



export default class AivTest extends React.Component {
    
    
      render() {
       
        return (
          <div
           >
           
          <br/>
            
              <Form labelCol={{ span: 10}} labelAlign="left" wrapperCol={{ span: 14 }} onSubmit={this.handleSubmit}>
                <Form.Item label="Weight of the dried sample with mould before test (g)">
                  <Input  style={{width:'300px'}} />
                </Form.Item>
                <Form.Item label="Weight of the Mould (g)">
                  <Input style={{width:'300px'}} />
                </Form.Item>
                <Form.Item label="Weight of the dried sample before test (g) (A)">
                  <Input style={{width:'300px'}} />
                </Form.Item>
                <Form.Item label="Weight of passing from 2.36mm after test(g) (B)">
                  <Row>
                    <Input style={{width:'300px'}} /><Button>Find</Button>
                  </Row>     
                </Form.Item>
              </Form>
              <Row>
                <Col span={6}>

                </Col>
                <Col span={14}>
                  
                </Col>
                <Col span={2}>
                  <Button>continue</Button>
                </Col>
                <Col span={2}>
                  <Button type='primary'>Submit</Button>
                </Col>
              </Row>
        
          </div>
        );
      }
    }
    
    
    