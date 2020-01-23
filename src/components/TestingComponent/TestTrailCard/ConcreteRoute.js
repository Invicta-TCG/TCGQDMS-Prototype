import React, { Component } from 'react';
import {
    Tabs,
    Breadcrumb,
    Input,
    DatePicker,
    Form,
    Row,
    Col,
    Select,
    Divider,
    Button,
    Icon,
    Table
    , Modal,
    Popconfirm, message, Popover
} from 'antd';




const { Option } = Select;

function onChange(date, dateString) {
    console.log(date, dateString);
}
class ConcreteRoute extends Component {

    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    render() {
        const columns = [
            {
              title: 'Sample Code',
              dataIndex: 'samplecode',
              key: 'samplecode',
              width:'15%',
            },
            {
              title: 'Sample Type',
              dataIndex: 'sampletype',
              key: 'sampletype',
              width:'15%',
          
            },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              width:'15%',
          
            },
            {
                title: 'Raw Materials',
                dataIndex: 'rawmaterial',
                key: 'sampletype',
                width:'15%',
            
              },
              {
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
                width:'15%',
            
              },
              {
                title: 'Test',
                dataIndex: 'test',
                key: 'test',
                width:'15%',
                render: () => <a  href="#/finishProduct"><Button ><Icon type="check"></Icon></Button></a>,

            
              },
           
          
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a><Icon type="edit" /></a>
                  <Divider type="vertical" />
                  <a><Popconfirm
                    title="Are you sure you want to Delete this?"
                    icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                  >
                    <a href="#"><Icon type="delete"></Icon></a>
                  </Popconfirm></a>
                </span>
              ),
            },
          ];

          const data = [
            {
              key: '1',
              samplecode: "Samp001",
              sampletype:"Incoming Sample",
              name: 'John Brown',
              date:"2018/05/8",
              rawmaterial:'M Sand',
              
            },
            {
              key: '2',
              samplecode: "Samp002",
              date:"2018/05/8",
              name: 'Jim Green',
              sampletype: 'Process Sample',
              rawmaterial:'Cement',
              email: 'AdMixture',
            },
            {
              key: '3',
              samplecode: "Samp003",
              date:"2018/05/8",
              name: 'Joe Black',
              sampletype: 'Process Sample',
              rawmaterial:'0-5mm',
              email: 'AdMixture',
            },
            {
              key: '4',
              samplecode: "Samp004",
              date:"2019/04/7",
              name: 'Jim Red',
              sampletype: 'Incoming Sample',
              rawmaterial:'River Sand',
              email: 'AdMixture',
            },
          ];
        return (
            <div
              
            style={{
                padding: 12,
                background: '#F2F9F5',
                minHeight: '500px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
              }}>

<div
              
              style={{
                  padding: 12,
                  background: '#F2F9F5',
                  minHeight: '100px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                }}>
                <Row  >
                   

                    <Col span={4} >
                    <Button  type="primary" style={{marginTop:'30px',width:'150px'}}>Concrete </Button>

                    </Col>

                 
                



                </Row>
                </div>
                <br/>
                <br/>
                <Table  columns={columns}  dataSource={data}  size="small"  />


            </div>
        );
    }
}

export default ConcreteRoute;