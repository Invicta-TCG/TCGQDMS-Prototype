import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;
class AllTestingCard extends Component {
  render() {
    return (
      <div style={{
        padding: 12,
        background: '#eef6fc',
        minHeight: '500px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
    }}>  
        <Row style={{ marginLeft: '25px',marginTop:'20px' }}>
          <Col span={8}>
            {/* <Card style={{height:'100px',width:'230px' ,background:"white" ,marginTop:'30px',borderRadius:'10px' }}>

                    <a href='#/finishProduct'>   <h1 style={{marginTop:'16px',marginLeft:'20px'}}>Strength Test</h1></a> 
                    </Card> */}

            <Card
              hoverable
              style={{ width: 240, marginTop: '20px' }}
              
            >
              <a  href="#/finalproductroute">  <Meta title="Sieve Test " /></a>
            </Card>



          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px' }}
            //   cover={<img alt="example" src={Slump} style={{ height: '150px' }} />}
            >
              <a href="#/ConcreteRoute">  <Meta title="Strength Test" /></a>
            </Card>
          </Col >
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px' }}
            //   cover={<img alt="example" src={Micron} style={{ height: '150px' }} />}
            >
              <a  href="#/AdmixtureRoute">  <Meta title="pH Test  " /></a>
            </Card>
          </Col>





        </Row>

        <Row style={{ marginLeft: '25px',marginTop:'20px'  }}>
          <Col span={8}>
            {/* <Card style={{height:'100px',width:'230px' ,background:"white" ,marginTop:'30px',borderRadius:'10px' }}>

                    <a href='#/finishProduct'>   <h1 style={{marginTop:'16px',marginLeft:'20px'}}>Strength Test</h1></a> 
                    </Card> */}

            <Card
              hoverable
              style={{ width: 240, marginTop: '20px'}}
              
            >
               <a  href="#/finalproductroute">  <Meta title="Water Demand Test " /></a>
            </Card>



          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px' }}
            //   cover={<img alt="example" src={Slump} style={{ height: '150px' }} />}
            >
              <a  href="#/ConcreteRoute">  <Meta title="Water Content Test" /></a>
            </Card>
          </Col >
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px' }}
            //   cover={<img alt="example" src={Micron} style={{ height: '150px' }} />}
            >
              <a  href="#/AdmixtureRoute">  <Meta title="Gravity Test " /></a>
            </Card>
          </Col>





        </Row>
        <Row style={{ marginLeft: '25px',marginTop:'20px'  }}>
          <Col span={8}>
            {/* <Card style={{height:'100px',width:'230px' ,background:"white" ,marginTop:'30px',borderRadius:'10px' }}>

                    <a href='#/finishProduct'>   <h1 style={{marginTop:'16px',marginLeft:'20px'}}>Strength Test</h1></a> 
                    </Card> */}

            <Card
              hoverable
              style={{ width: 240, marginTop: '20px' }}
              
            >
            <a  href="#/finalproductroute">  <Meta title="75% Micron Test " /></a>
            </Card>



          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px' }}
            //   cover={<img alt="example" src={Slump} style={{ height: '150px' }} />}
            >
              <a href="#/ConcreteRoute">  <Meta title="Slump Test" /></a>
            </Card>
          </Col >
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px' }}
            //   cover={<img alt="example" src={Micron} style={{ height: '150px' }} />}
            >
              <a href="#/AdmixtureRoute">  <Meta title="Marsh Cone Test" /></a>
            </Card>
          </Col>





        </Row>



      </div>
    );
  }
}



export default AllTestingCard;