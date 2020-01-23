import React from 'react';
import {
    Breadcrumb,
    Form,
    Input,
    Button,
    Row,
    Col,
    Text,
    Table,
    Checkbox,
    Select,
    Divider,
    DatePicker,
    Icon

} from 'antd';
import FPparameter from './FpquantityParameter';
const { Option } = Select;


export default class FinalProduct extends React.Component{

     onChange(date, dateString) {
        console.log(date, dateString);
      }
    render(){
        const columns = [
            {
              title: 'ID',
              dataIndex: 'id',
              key: 'id',
             
            },
            {
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
               
              },
              {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
               
              },
              {
                title: 'Unit',
                dataIndex: 'unit',
                key:'unit'
              
              },
              {
                title: 'Value',
                dataIndex: 'Value',
                key: 'Value',
               
              },
             
              {
                title: 'Relevant',
                dataIndex: 'Relevant',
                key: 'Reelvant',
                render: (record,key) => <Checkbox />,
        
              },
              
        
            ];


        const data = [
            {
              key: '1',
              id: 1,
              date:'2019/08/05',
             description:"Size",
             unit:'mm',
              Value:"0.5",
            },
            {
              key: '2',
              id: 2,
              date:'2019/08/05',
             description :"Temperature",
             unit:'k',
             Value:"25",
            },
            {
              key: '3',
              id: 3,
              date:'2019/08/05',
              description:"Moisture",
              unit:'k',
              Value:"20",
            
            },
            {
              key: '4',
              id: 4,
              date:'2019/08/05',
              description:"Gravity",
              unit:'N',
              Value:"15",
            },
            {
              key: '5',
              id: 5,
              date:'2019/08/05',
              description:"Weight",
              unit:'g',
              Value:"5",
            },
            {
              key: '6',
              id: 6,
              date:'2019/08/05',
              description:"Density",
              unit:'g',
              Value:"4",
            },
          ];
          const data1 = [
            {
              key: '1',
              id: 1,
              des:"Cement",
              value:"1",
             unit:"",
            },
            {
              key: '2',
              id: 2,
              des:"AddMixture",
              value:"2",
              unit:"mm",
            },
            {
              key: '3',
              id: 3,
              des:"CoarseAggregate",
              value:"3",
              unit:"g",
            
            },
            {
              key: '4',
              id: 4,
              des:"FineAggregate",
              value:"4",
              unit:"cm",
            },
          ];
        return(
            <div>
 <h3
      >
          Test Configuration For Final Product
      </h3>
      <br/>
  <Divider type="horizontal" style={{
                    margin: '16px 0'
                }}
                />
  <Row>
            
                  <Row>
                      <Col span={8}>
                <Form.Item label=" Code">
                  <Input style={{width:'240px'}}/>
                </Form.Item>
                <Form.Item label="Description">
                  <Input style={{width:'240px'}}/>
                </Form.Item>
                </Col>
                <Col span={16}>
                <Form.Item label=" Prefix">
                  <Input style={{width:'240px'}}/>
                </Form.Item>
                <Select
    showSearch
   
    style={{ width: '250px',marginTop:'40px' }}
    placeholder="Select a Category"
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="Raw Material ">Configuration Level</Option>
    <Option value="Final Product">Testing Level </Option>
  
  </Select>
                </Col>
                </Row>
                <Row>
                    <Col span={4}>

                        
                <Form.Item >
                    <p>
                    Procedure :
                    </p>
                   
                  <textarea style={{width:'600px'}} />
                </Form.Item>
                    </Col>
               
                </Row>
               
                </Row>

                <Divider type="horizontal" style={{
                    margin: '16px 0'
                }}
                />
  <Row>
      <Col span={19}>
      <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a RawMaterial"
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="cement">Cement</Option>
    <Option value="admixture">AdMixture</Option>
    <Option value="fineaggregate">Fine Aggregate</Option>
    <Option value="coarseaggregate">Coarse Aggregate</Option>
    <Option value="concrete">Concrete</Option>
  </Select>
      </Col>
      <Col span={5}>
      <DatePicker onChange={this.onChange} /><Icon type="search" style={{width:'2em',height:'4em'}}/>
      </Col>
  </Row>
  
  <Table columns={columns} dataSource={data} pagination={false}/>
  <br/>

{/* <FPparameter/> */}

            </div>
        );
    }
}