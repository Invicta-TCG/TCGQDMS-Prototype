import React from 'react';
import { Modal, Button, Form, Input,Row,Col,Select,Breadcrumb} from 'antd';
import FineAggregateTest from './FineAggregateTest/FineAggregateTest';
import CoarseAggregateTest from './CoarseAggregateTest/CoarseAggregateTest';

const { Option } = Select;

export default class TestSample extends React.Component {
     state = {
    tabPosition: 'Select Sample',
    tabPosition1: 'Select Raw Materials',
     tabPosition2: 'Select Type',
      tabPosition3: '',
      tabPosition4: 'Select Bin',
     
  };
       changeTabPosition = value => {
           console.log(value)
     this.setState({ tabPosition:value });
  };
  
       changeTabPosition1 = value => {
            console.log(value)
    this.setState({ tabPosition1:value });
  };
    changeTabPosition2 = value => {
            console.log(value)
    this.setState({ tabPosition2:value });
  };
   changeTabPosition3 = value => {
            console.log(value)
    this.setState({ tabPosition3:value });
  };
      render() {
       
        return (
          <React.Fragment>
            <Breadcrumb style={{
        margin: '16px 0'
    }}>
        <Breadcrumb.Item>Testing</Breadcrumb.Item>
        <Breadcrumb.Item>Test Sample</Breadcrumb.Item>
    </Breadcrumb>
          <div  style={{
            padding: 12,
            background: '#eef6fc',
            minHeight: '500px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
        }}>
              <div>
             <Row>
              
   <Col span={8} >  
   <Form.Item label = "Sample : ">
            
            <Select
             style={{width:'200px'}}
             defaultValue="Select Sample"
              placeholder="Select Sample"
               value={this.state.tabPosition}
               onChange={this.changeTabPosition}
               dropdownMatchSelectWidth={false}
             >
               <Option value="top">Supplier Sample</Option>
               <Option value="bottom">Bin Sample</Option>
               
             </Select>
           
           </Form.Item>
       
   </Col>
   <Col span={8} >
   <Form.Item label = "RawMaterials: ">
            
   <Select
          style={{width:'200px'}}
           placeholder="Select RawMaterials"
            value={this.state.tabPosition1}
            onChange={this.changeTabPosition1}
            dropdownMatchSelectWidth={false}
          >
            <Option value="Cement">Cement</Option>
            <Option value="AddMixture">AddMixture</Option>
            <Option value="CoarseAggregate">Coarse Aggregate</Option>
            <Option value="FineAggregate">Fine Aggregate</Option>
          </Select>
        </Form.Item>
        
      </Col>
      {this.state.tabPosition1=="FineAggregate" ?
      <Col span={8} >
   <Form.Item label = "FineAggregate Type ">
            
   <Select
          style={{width:'200px'}}
          placeholder="Select Type"
            value={this.state.tabPosition2}
            onChange={this.changeTabPosition2}
            dropdownMatchSelectWidth={false}
          >
            <Option value="m/s wash">M/S wash</Option>
            <Option value="m/s unwash">M/S UnWash</Option>
            <Option value="RiverSans">RiverSand</Option>
            
          </Select>
        </Form.Item>
        
      </Col>:''}
      {this.state.tabPosition1=='CoarseAggregate'?
      <Col span={8} >
   <Form.Item label = "CoarseAggregate Type">
            
   <Select
          style={{width:'200px'}}
           placeholder="Select Type"
            value={this.state.tabPosition3}
            onChange={this.changeTabPosition3}
            dropdownMatchSelectWidth={false}
          >
            <Option value="m/s wash">5-20 mm</Option>
            <Option value="m/s unwash">5-14 mm</Option>
            <Option value="coarse aggregate">14-20 mm</Option>
          
          </Select>
        </Form.Item>
        
      </Col>:''}
            </Row>
          </div>
          <br></br>
          {this.state.tabPosition1=='FineAggregate' ? 
          <FineAggregateTest/>:''}

{this.state.tabPosition1=='CoarseAggregate' ? 
          <CoarseAggregateTest/>:''}
          </div>
          </React.Fragment>
        );
      }
    }
    
    
    