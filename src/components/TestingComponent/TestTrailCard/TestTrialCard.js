import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import Strength from '../../../Assets/strength1.jpg';
import Slump from '../../../Assets/slump-test1.jpg';
import Micron from '../../../Assets/micron1.jpg'
const { Meta } = Card;
class TestTrialCardFP extends Component {
  render() {
    return (
      <div style={{
        padding: 12,
        background: '#eef6fc',
        minHeight: '500px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
    }}>  
        <Row style={{ marginLeft: '25px' }}>
          <Col span={8}>
            {/* <Card style={{height:'100px',width:'230px' ,background:"white" ,marginTop:'30px',borderRadius:'10px' }}>

                    <a href='#/finishProduct'>   <h1 style={{marginTop:'16px',marginLeft:'20px'}}>Strength Test</h1></a> 
                    </Card> */}

            <Card
              hoverable
              style={{ width: 240, marginTop: '20px',backgroundColor:'#80ff80' }}
              cover={<img alt="example" src={Strength} style={{ height: '150px' }} />}
            >
              <a href='#/finishProduct'>  <Meta title="Strength Test " /></a>
            </Card>



          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px',backgroundColor:'#80ff80' }}
              cover={<img alt="example" src={Slump} style={{ height: '150px' }} />}
            >
              <a href='#/finishProduct'>  <Meta title="Slump Test" /></a>
            </Card>
          </Col >
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px',backgroundColor:'#ff8080' }}
              cover={<img alt="example" src={Micron} style={{ height: '150px' }} />}
            >
              <a href='#/finishProduct'>  <Meta title="Moisture Test  " /></a>
            </Card>
          </Col>





        </Row>



      </div>
    );
  }
}

export default TestTrialCardFP;