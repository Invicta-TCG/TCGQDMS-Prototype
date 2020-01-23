
import React from 'react';
import ReactDOM from 'react-dom';
import GravityTest from './GravityTest';
import WaterAbsorptionTest from './WaterAbsorptionTest';
import ClayAndSiltTest from './ClayAndSiltTest';
import AivTest from './AivTest';
import { Steps, Button, message ,Form,Divider,Row, Input } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'SieveTest',
    content: 'First-content',
  },
  {
    title: 'GravityTest',
    content: <GravityTest/>,
  },
  {
    title: 'WaterAbsorptionTest',
    content: <WaterAbsorptionTest/>,
  },
   {
    title: 'ClaySilitdust Test',
    content: <ClayAndSiltTest/>,
  },
  {
    title: 'Aiv Test',
    content: <AivTest/>
  },
];

export default class CoarseAggregateTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          <br/>
          {/* <br/>

<h3>Raw Material Data</h3>

<Divider type="horizontal" style={{
          margin: '16px 0'
      }}
      />
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
          <Input style={{width:'300px'}} />
        </Row>     
      </Form.Item>
    </Form>
    <br/> */}

    
      
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}


          