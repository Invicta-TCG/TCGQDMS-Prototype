import React from 'react';
import { Row, Button, Form, Input ,Col} from 'antd';



export default class WaterAbsorptionTest extends React.Component {
    
    
      render() {
       
        return (
          <div
           >
           
          <br/>
            
              <Form labelCol={{ span: 10}} labelAlign="left" wrapperCol={{ span: 14 }} onSubmit={this.handleSubmit}>
                <Form.Item label="Weight of  Dry sample in air (g)">
                  <Input  style={{width:'300px'}} />
                </Form.Item>
                <Form.Item label="Weight of oven dried sample in (g)">
                  <Input style={{width:'300px'}} />
                </Form.Item>
                <Form.Item label="Water absorbtion (g)">
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
    
    
    