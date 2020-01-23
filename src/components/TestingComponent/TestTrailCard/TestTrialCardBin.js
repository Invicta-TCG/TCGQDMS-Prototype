import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
const { Meta } = Card;

class TestTrialCardBin extends Component {
  render() {
    return (
      <div   style={{
        padding: 12,
        background: '#eef6fc',
        minHeight: '500px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
    }}>
        <Row style={{ marginLeft: '25px' }}>
          <Col span={8}>
           <a  href='#/supplierRawMaterial'> <Card
              hoverable
             
              style={{ width: 240, marginTop: '20px',backgroundColor:'#ff8080' }}
            // cover={<img alt="example" src={Sieve} style={{height:'150px'}} />}
            >
              <div>
              <a >  <Meta title="Sieve Test "  style={{marginTop:'-20px'}}/></a>
              </div>
              <div 
              hoverable style={{background:'white',height:'100px',marginTop:'30px',marginLeft:'-25px',width:'240px'}}>
{/* Date: 12-09-2019
<br/>
Test Iteration: Iteration1
<br/>
Tested By : something
<br/>
Current Status: Pass */}
              </div>
            
             
            </Card></a>



          </Col>
          <Col span={8}>
          <a  href='#/supplierRawMaterial'> <Card
              hoverable
             
              style={{ width: 240, marginTop: '20px',backgroundColor:'#ff8080' }}
            // cover={<img alt="example" src={Sieve} style={{height:'150px'}} />}
            >
              <div>
              <a >  <Meta title="AIV Test "  style={{marginTop:'-20px'}}/></a>
              </div>
              <div 
              hoverable style={{background:'white',height:'100px',marginTop:'30px',marginLeft:'-25px',width:'240px'}}>
{/* Date: 12-09-2019
<br/>
Test Iteration: Iteration1
<br/>
Tested By : something
<br/>
Current Status: Pass */}
              </div>
            
             
            </Card></a>



          </Col>
          <Col span={8}>
          <a  href='#/supplierRawMaterial'> <Card
              hoverable
             
              style={{ width: 240, marginTop: '20px',backgroundColor:'#80ff80' }}
            // cover={<img alt="example" src={Sieve} style={{height:'150px'}} />}
            >
              <div>
              <a >  <Meta title="Water Demand Test  "  style={{marginTop:'-20px'}}/></a>
              </div>
              <div 
              hoverable style={{background:'white',height:'100px',marginTop:'30px',marginLeft:'-25px',width:'240px'}}>
Date: 12-09-2019
<br/>
Test Iteration: Iteration1
<br/>
Tested By : something
<br/>
Current Status: Pass
              </div>
            
             
            </Card></a>

          </Col>
        



        </Row>

        <Row>
          <Col span={12}>
            {/* <Card
              hoverable
              style={{ width: 240, marginTop: '20px', marginLeft: '270px' ,backgroundColor:'#80ff80'}}
            // cover={<img alt="example" src={Sieve} style={{height:'150px'}} />}
            >
              <a href='#/supplierRawMaterial'>  <Meta title="Moisture Test " /></a>
            </Card> */}

<a  href='#/supplierRawMaterial'> <Card
              hoverable
             
              style={{ width: 240, marginTop: '30px', marginLeft: '200px' ,backgroundColor:'#80ff80'}}
            // cover={<img alt="example" src={Sieve} style={{height:'150px'}} />}
            >
              <div>
              <a >  <Meta title="Moisture Test"  style={{marginTop:'-20px'}}/></a>
              </div>
              <div 
              hoverable style={{background:'white',height:'100px',marginTop:'30px',marginLeft:'-25px',width:'240px'}}>
Date: 24-10-2019
<br/>
Test Iteration: Iteration2
<br/>
Tested By : something
<br/>
Current Status: Pass
              </div>
            
             
            </Card></a>



          </Col>

          <Col span={6}>
          <a  href='#/supplierRawMaterial'> <Card
              hoverable
             
              style={{ width: 240, marginTop: '30px',backgroundColor:'#80ff80',marginLeft:'30px' }}
            // cover={<img alt="example" src={Sieve} style={{height:'150px'}} />}
            >
              <div>
              <a >  <Meta title="75% Micron Test "  style={{marginTop:'-20px'}}/></a>
              </div>
              <div 
              hoverable style={{background:'white',height:'100px',marginTop:'30px',marginLeft:'-25px',width:'240px'}}>
Date: 24-10-2019
<br/>
Test Iteration: Iteration2
<br/>
Tested By : something
<br/>
Current Status: Pass
              </div>
            
             
            </Card></a>

          </Col>

          {/* <Col span={12}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px', marginLeft: '-10px',backgroundColor:'#80ff80' }}
            // cover={<img alt="example" src={Sieve} style={{height:'150px'}} />}
            >
              <a href='#/supplierRawMaterial'>  <Meta title="Sieve Test " /></a>
            </Card>




          </Col> */}

        </Row>



      </div>
    );
  }
}

export default TestTrialCardBin;