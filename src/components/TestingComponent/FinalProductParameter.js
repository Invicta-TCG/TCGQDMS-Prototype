import React from 'react';
import {
  Breadcrumb, AutoComplete
} from 'antd';

import { Form, Input, Icon, Button, Modal, Row, Col, Table, Divider, Select,Checkbox } from 'antd';
import TextArea from 'antd/lib/input/TextArea';


// const { TextArea} = Input;
const { Option } = Select;

export default class FinalProductParameter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: [{ id: "", parameter: "", unit: "", entry: '' }],
      val: '',
      loading: false,
      visible: false,


      //  tabPosition1: 'Select the level ',
      // tabPosition2: 'Enter the Value',


    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  changeTabPosition1 = value => {
    console.log(value)
    this.setState({ tabPosition1: value });
  };

  changeTabPosition2 = value => {
    console.log(value)
    this.setState({ tabPosition2: value });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };


  addClick() {
    this.setState(prevState => ({
      test: [...prevState.test, { id: "", parameter: "", unit: "", entry: '' }]
    }))
  }


  
  createUI() {


    return this.state.test.map((el, i) => (
      <div key={i}>
        <Row>
          <Col span={3}>
            <Input placeholder="Parameter" name="parameter" value={el.parameter || ''} onChange={this.handleChange.bind(this, i)} style={{ width: '100px' }} />
          </Col>
          <Col span={4}>

            <Select
              style={{ width: 150 }}
              placeholder="Select the Unit"

            >
              <Option value="g"> g </Option>
              <Option value="Kg">kg </Option>
              <Option value="mm">mm </Option>
              <Option value="cm">cm </Option>
              <Option value="day">day </Option>
              <Option value="minutes">minutes </Option>
              <Option value="sec">sec </Option>
              <Option value="N">N </Option>
              <Option value="K">K </Option>

            </Select>

          </Col>
          <Col span={4}>
            <Select
              style={{ width: 150 }}
              placeholder="Short Format"

            >
              <Option value="g"> A </Option>
              <Option value="Kg">B </Option>
              <Option value="mm">C </Option>
              <Option value="cm">D </Option>
              <Option value="day">E</Option>
              <Option value="minutes">F </Option>
              <Option value="sec">G </Option>
              <Option value="N">H</Option>
              <Option value="K">I</Option>

            </Select>
          </Col>

          {/* <Col span={4}>
            <Select
              style={{ width: 150 }}
              placeholder="Select the level"
              value={this.state.tabPosition1}
              onChange={this.changeTabPosition1}
              dropdownMatchSelectWidth={false}

            >
              <Option value="equationCreation">Equation Creation  </Option>
              <Option value="TestConfiguration">Test Configuration  </Option>


            </Select>
          </Col> */}

          {/* {this.state.tabPosition1 == "TestConfiguration" ?
            <Col span={4} >


              <Input
                style={{ width: '150px' }}
                placeholder="Enter Value"
                // value={this.state.tabPosition2}
                onChange={this.changeTabPosition2}
                dropdownMatchSelectWidth={false}
              >
              </Input>





            </Col> : ''} */}
          {/* <Col span={5}>
            <Input placeholder="Value" name="value" style={{ width: '100px' }} />
          </Col> */}
          <Col span={5}>
            <Button type='' value='remove' onClick={this.removeClick.bind(this, i)} style={{ width: '75px' }}>Remove</Button>
          </Col>

          <Col span={4}>
            <Button type='primary' value='Sibmit' style={{ width: '75px' ,marginLeft:'-100px'}}>Submit</Button>
          </Col>
        </Row>
        <br />
      </div>
    ))
  }

  handleChange(i, e) {
    console.log("kkkkkkk")
    const { name, value } = e.target;
    let test = [...this.state.test];
    test[i] = { ...test[i], [name]: value };
    this.setState({ test });
  }

  handleOnchangeUnit(i, e) {

    const { value } = e.target;
    let test = [...this.state.test];
    test[i] = { ...test[i], value };
    this.setState({ test });
  }


  removeClick(i) {
    let test = [...this.state.test];
    test.splice(i, 1);
    this.setState({ test });
  }

  handleSubmit = (event) => {
    console.log(this.state.test)

    // alert('A name was submitted: ' + JSON.stringify(this.state.users));
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);

    event.preventDefault();
  }

  


  render() {


    const columns1 = [
      {
        title: 'Id',
        dataIndex: 'parameterid',
        key: 'id',
        render: text => <a>{text}</a>,
        width:'6%'
      },
      {
        title: 'Parameter',
        dataIndex: 'parameter',
        key: 'parameter',
        width:'8%'
      },
      {
        title: 'Unit',
        key: 'units',
        dataIndex: 'units',
        width:'6%'
        // render: (text, record) => (
        //   <span>
        //     <a><Icon type="form" onClick={this.showModal} /></a>
            
        //   </span>
        // ),
      },

      {
        title: 'Short Format',
        key: 'shortformat',
        dataIndex: 'shortformat',
        width:'6%'
      },
      {
        title: 'Action',
        key: 'action',
        width:'10%',
        render: (text, record) => (
          <span>
            <a><Icon type="edit" /></a>
            <Divider type="vertical" />
            <a><Icon type="delete" /></a>
          </span>
        ),
      },
    ];

   

    

    const columns = [
      { title: 'Parameter Code', dataIndex: 'code', key: 'code' },
      { title: 'Location', dataIndex: 'location', key: 'location' },
      { title: 'Parameter', dataIndex: 'parameter', key: 'parameter' },
      { title: 'Unit', dataIndex: 'unit', key: 'unit' },
      // { title: 'Value', dataIndex: 'value', key: 'value' },
    
      {
        title: 'Relevant',
        dataIndex: 'Relevant',
        key: 'Reelvant',
        render: (record, key) => <Checkbox />,

      },
    ]
    const data = [
      { key: 1, code: 'PA/0001', location: 'Peliyagoda', parameter: 'Weight of Pan', unit: 'g', value: '244' },
            { width: '10%', key: 2, code: 'PA/0002', location: 'Peliyagoda', parameter: 'Weight of Oven', unit: 'g', value: '360' },
      ]

      const data1 = [
        {
          key: '1',
          parameterid:'1',
          parameter: 'Weight of the pan ',
          units:'g',
          shortformat: 'A',
          
        },
        {
          key: '2',
          parameterid:'2',
          parameter: 'Weight of the Oven ',
          units:'g',
          shortformat: 'B',
          
        },
      
      ];

    return (
      <div>
        <h3>Add Parameters</h3>
        <div
          style={{
            padding: 12,
            background: '#F2F9F5',
            minHeight: AutoComplete,
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
          }}>

          <br />
          <Form >

            {this.createUI()}
            <br />


            <Row>
              <Col span={3}>
                <Button type='' value='add more' onClick={this.addClick.bind(this)}>Add more</Button>
              </Col>
              {/* <Col span={3}>
              <Button type="primary" value="Submit" onClick={this.handleSubmit}>Submit</Button>
              </Col> */}

            </Row>

          </Form>
          <br/>
          <br/>
          <Table  columns={columns1} dataSource={data1} size="small"/>




        </div>
        <br/>
        <h3>Equipment Level Parameter</h3>
        <div
        style={{
            padding: 12,
            background: '#F2F9F5',
            minHeight: AutoComplete,
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
          }}>

            <br />
          <Table columns={columns} dataSource={data} pagination={false} size="small" />
          <br />
        </div>


      </div>


    )
  }
}
