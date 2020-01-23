import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {Form,Row,Col,Button,Select,Divider,Checkbox,Table} from 'antd';

const {Option}=Select;

export default class TestEquationConfig extends React.Component {

    render(){

      const dataSource = [
        {
          key: '1',
          name: 'Mike',
         
        }
       
      ];
      
      const columns = [
        {
          title: 'Material Related Parameters',
          align:'center',
          dataIndex: 'name',
          key: 'name',
          render:()=><Table dataSource={dataSource1} columns={columns1} pagination={false} showHeader={false} bordered={false} />
        },
        {
          title: 'Test Related Parameters',
          align:'center',
          dataIndex: 'age',
          key: 'age',
          render:()=><Table dataSource={dataSource1} columns={columns1} pagination={false} showHeader={false} />
        },
        {
          title: 'Other parameters',
          align:'center',
          dataIndex: 'address',
          key: 'address',
          render:()=><Table dataSource={dataSource1} columns={columns1} pagination={false} showHeader={false} bordered={false} />
        },
      ];
      
      const dataSource1 = [
        {
          key: '1',
          name: 'Weight',
          
        },
        {
          key: '2',
          name: 'Size',
       
        },
      ];
      
      const columns1 = [
        {
          title: '',
         
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '',
          dataIndex:'ckeck',
        render:()=>
            <Checkbox/>
        
        }
      ];
      
      
        return(
            <div>
{/* <TextareaAutosize aria-label="minimum height" rows={3} placeholder="Minimum 3 rows" /> */}

<h3>Equation Configuration</h3>  

                <br/>
                <div
        style={{
        padding: 12,
        background: '#F2F9F5',
        minHeight: '200px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
    }}>
{/* <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a Matiral"
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select> */}
<Row>
<Table dataSource={dataSource} columns={columns}  pagination={false}  bordered />;
</Row>

  <br/>
<br/>
<Form.Item >
                   
                  <textarea style={{width:'600px'}} />
                </Form.Item>

<Row>
    <Col span={11}>

    </Col>
    <Col span={4}>
        <Button type="primary">Set Equation</Button>
        </Col>
</Row>
</div>
            </div>
        )
    }
}
