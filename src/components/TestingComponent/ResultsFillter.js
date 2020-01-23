import React  from 'react';
import { Drawer, Button,Select ,AutoComplete,Input,Row,Col,InputNumber,Table,Checkbox} from 'antd';

const { Option } = Select;
const InputGroup = Input.Group;

export default class ResultsFillter extends React.Component{
    state = {
       visible: false ,
        gradeType:'',
        strengthType:2,
        fillterType:'grade',
        checkStatus:false,
        
      };

      onChangeCheckBox=(e) =>{
        console.log(e.target.checked);
        this.setState({checkStatus:e.target.checked})
      }


    onChange=(value) =>{
        console.log(`selected ${value}`);
        this.setState({fillterType:value})
      }

      onChangeGrade=(value)=>{
        console.log( value)
        this.setState({gradeType:value})
      }




    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
  // <===================================================Strength Wise===================================>
  onChangeStrenth=(value)=>{
    console.log(value)
    this.setState({strengthType:value})

  }


  // <======================================================== Quantity Mix Wise =============================>





  // <=================================================Render fillter ========================================>

   renderComponents = () => {
  //   const rowSelection = {
  //     onChange: (selectedRowKeys, selectedRows) => {
  //       console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  //     },
  //     getCheckboxProps: (record) => ({
  //       disabled: record.name === 'Disabled User', // Column configuration not to be checked
  //       name: record.name,
  //     }),
  //   };

    const columns1 = [
      {
        title: 'Raw Matrials',
        dataIndex: 'parameter',
        key: 'parameter',
    
      }
      ,
      {
        title: 'Quantity',
        dataIndex: 'value',
        key: 'value',
        render: () => <a ><Input   style={{width:"60px"}}/></a>,
    
      },
     
      {
        title: 'Unit',
        dataIndex: 'unit',
        key: 'unit',
        render: () => <a > <Select defaultValue="2" style={{width:"60px"}}>
                              <Option value="1">Kg</Option>
                                <Option value="2">g</Option>
                                <Option value="3"> N</Option>
                                <Option value="3"> mm</Option>
                              </Select></a>,
      },
      {
        title: 'Select',
        dataIndex: 'check',
        key: 'check',
        render: () => <a ><Checkbox onChange={this.onChangeCheckBox}/></a>,
    
      },
    ]
    
    const data1 = [{
    
      key: '1',
      parameter: 'Cement',
      unit: 'Kg',
      value: '8',
    },
    {
      key: '2',
      parameter: 'Msand',
      unit: 'Kg',
      value: '10',
    },
    {
      key: '3',
      parameter: 'Optimal100',
      unit: 'ml',
      value: '6',
    },
    {
      key: '4',
      parameter: '0-5',
      unit: 'mm',
      value: '5',
    }
    ];
    
if(this.state.fillterType==="grade"){
  return(
    <div 
    style={{
     padding: 12,
     background: '#F2F9F5',
     minHeight: AutoComplete,
     boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
 }}>

<InputGroup compact>

<Select defaultValue="2"
onChange={this.onChangeGrade}
>
 <Option value="1">Between</Option>
 <Option value="2">Accurate</Option>
</Select>
&nbsp;  &nbsp;
{ this.state.gradeType==1  ?

<div>
<Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
<Input
 style={{
   width: 30,
   borderLeft: 0,
   pointerEvents: 'none',
   backgroundColor: '#fff',
 }}
 placeholder="~"
 disabled
/>
<Input style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />
</div>
:

<Input 
style={{ width: 200, textAlign: 'center' }} 
placeholder="Grade" />
}
&nbsp;&nbsp;
&nbsp;&nbsp;
<Button type="primary" onClick={this.Find}>
 Search
</Button>

</InputGroup>
   </div>
  );
}else if(this.state.fillterType==='strength'){
  return(
    <div 
    style={{
     padding: 12,
     background: '#F2F9F5',
     minHeight: AutoComplete,
     boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
 }}>

<InputGroup compact>

<Select defaultValue="2"
  onChange={this.onChangeStrenth}
>
<Option value="1">Between</Option>
 <Option value="2">Accurate</Option>
 <Option value="3"> Using Graph</Option>
</Select>
<br/>
<br/>
<Row >

<Col span={9}>

<Input style={{ width: '50%' }} placeholder="Duration" />
&nbsp;&nbsp;

<Select defaultValue="days"
 placeholder="value"
 style={{width:"70px"}}
>
 <Option value="day">Days</Option>
 <Option value="month">Months</Option>
 <Option value="year">Years</Option>
</Select>
</Col>
<Col span={12}>

<Row>
<Col span={16}>

{ this.state.strengthType==2 ?
<Input style={{ width:"160px"}} placeholder="Value"/>:

<div>


<Input style={{ width: 60, textAlign: 'center' }} placeholder="Minimum" />
<Input
style={{
width: 30,
borderLeft: 0,
pointerEvents: 'none',
backgroundColor: '#fff',
}}
placeholder="~"
disabled
/>
<Input style={{ width: 60, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />

</div>
}
</Col>
<Col span={6}>
<Select defaultValue="N" style={{width:"80px"}}>
 <Option value="N/mm">N</Option>
 <Option value="N/mm²">N/mm²</Option>
 <Option value="M/Pa">M/Pa</Option>
 
</Select>
  </Col>


</Row>
</Col>
<Col span={2}>
<Button type="primary" onClick={this.Find}>
 Search
</Button>
</Col>

</Row>
</InputGroup>

</div>
  );
}else if(this.state.fillterType==="quantity"){
  return(
    <div 
    style={{
     padding: 12,
     background: '#F2F9F5',
     minHeight: AutoComplete,
     boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
 }}>

     <Table 
         // style={{ width: '450px', marginLeft: '-20px', marginTop: '-20px', height: '50px' }} 
         columns={columns1} 
         dataSource={data1} 
         size="small" 
         pagination={false}
        //  rowSelection={rowSelection}
         footer={()=>
           <Row>
             <Col span={20}>

             </Col>
             <Col span={4}>
             <Button type="primary" style={{height:'22px',marginRight:'100px'}} >Search</Button>
               </Col>
           </Row>
        
       }
       />
   </div>

  );
}

  }


    render() {

     
      return (
        <div>
          <Button type="primary" onClick={this.showDrawer}>
            Fillter
          </Button>
          <br/>
          <Drawer
            title="Customize Fillter"
            placement="right"
            closable={false}
            onClose={this.onClose}
            width="580px"
            visible={this.state.visible}
          >
           <div>

           <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Fillter By"
    optionFilterProp="children"
    onChange={this.onChange}
    
    // onSearch={onSearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="grade">Grade Wise</Option>
    <Option value="strength">Strength Wise</Option>
    <Option value="quantity">Quantity Wise</Option>
  </Select>
              </div> 
<br/>
{/* <=============================================== Strength Wise ==========================================> */}

           {this.renderComponents()}
            
             
{/* <==========================================================Quantity Mix Wise==============================> */}
       
          </Drawer>
        </div>
      );
    }
  }
  