import React from 'react';
import { Row, Button, Form, Input ,Col,AutoComplete} from 'antd';



export default class ClayAndSiltTest extends React.Component {
    
    
      render() {
       
        return (
          <div
           >
           
          <br/>
          <div
                style={{
                padding: 12,
                background: '#F2F9F5',
                minHeight: AutoComplete,
                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
            }}>
              <Form labelCol={{ span: 10}} labelAlign="left" wrapperCol={{ span: 14 }} onSubmit={this.handleSubmit}>
                <Form.Item label="Weight of oven dired sample in with pan before washing (g)">
                  <Input  style={{width:'300px'}} />
                </Form.Item>
                <Form.Item label="Weight of Pan (g)">
                  <Input style={{width:'300px'}} />
                </Form.Item>
                <Form.Item label="Weight of oven dired sample before washing (g)">
                  <Input style={{width:'300px'}} />
                </Form.Item>
                <Form.Item label="Weight of oven dired sample  with pan After washing (g)">
                  <Input style={{width:'300px'}} />
                </Form.Item>
                 <Form.Item label="Weight of oven dired sample  After washing (g)">
                  <Input style={{width:'300px'}} />
                </Form.Item>
                <Form.Item label="Percentage by mass passing 75 micron B.S Sieve %">
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
        <br/>
          </div>
        );
      }
    }
    
    
    