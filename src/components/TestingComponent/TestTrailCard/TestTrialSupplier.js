import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import Sieve from '../../../Assets/Sieve-Analysis.jpg';
import Aiv from '../../../Assets/AIV.jpg';

const { Meta } = Card;
class TestTrialCard extends Component {
  render() {
    return (
      <div>
        <Row style={{ marginLeft: '25px' }}>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px',backgroundColor:'#80ff80' }}
            // cover={<img alt="example" src={Sieve} style={{height:'150px'}} />}
            >
              <a href='#/supplierRawMaterial'>  <Meta title="Sieve Test " /></a>
            </Card>



          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px' ,backgroundColor:'#ff8080'}}
            // cover={<img alt="example" src={Aiv} style={{height:'150px'}} />}
            >
              <a href='#/supplierRawMaterial'>  <Meta title="AIV Test " /></a>
            </Card>



          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px',backgroundColor:'#80ff80' }}
            // cover={<img alt="example" src={Sieve} style={{height:'150px'}} />}
            >
              <a href='#/supplierRawMaterial'>  <Meta title="Water Demand Test " /></a>
            </Card>

          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px',backgroundColor:'#80ff80' }}
            // cover={<img alt="example" src={Sieve} style={{height:'150px'}} />}
            >
              <a href='#/supplierRawMaterial'>  <Meta title="75% Micron Test" /></a>
            </Card>

          </Col>




        </Row>

        <Row>
          <Col span={12}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px', marginLeft: '270px',backgroundColor:'#80ff80' }}
            // cover={<img alt="example" src={Sieve} style={{height:'150px'}} />}
            >
              <a href='#/supplierRawMaterial'>  <Meta title="Moisture Test " /></a>
            </Card>




          </Col>
          <Col span={12}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px', marginLeft: '-10px',backgroundColor:'#ff8080' }}
            // cover={<img alt="example" src={Sieve} style={{height:'150px'}} />}
            >
              <a href='#/supplierRawMaterial'>  <Meta title="Sieve Test " /></a>
            </Card>




          </Col>

        </Row>



      </div>
    );
  }
}

export default TestTrialCard;