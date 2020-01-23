import React from 'react';
import {
  Breadcrumb, AutoComplete, Popconfirm
} from 'antd';

import { Form, Input, Icon, Button, Modal, Row, Col, Table, Divider, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { NONAME } from 'dns';
import { element } from 'prop-types';


// const { TextArea} = Input;
const { Option } = Select;

class AddMaterialMasterCreation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      test: [{ id: "", parameter: "", unit: "", entry: '' }],
      val: '',
      loading: false,
      visible: false,
      showModalView: false,
      visible1: false,

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
  changeTabPosition3 = value => {
    console.log(value)
    this.setState({ tabPosition3: value });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleCancelView = e => {
    console.log(e);
    this.setState({
      showModalView: false,
    });
  };
  handleOkView = e => {
    console.log(e);
    this.setState({
      showModalView: false,
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

  showModalView = () => {
    this.setState({
      showModalView: true,
    });
  };

  handleOk1 = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel1 = () => {
    this.setState({ visible: false });
  };



  addClick() {
    this.setState(prevState => ({
      test: [...prevState.test, { id: "", parameter: "", unit: "", entry: '' }]
    }))
  }

  createUI() {
    return this.state.test.map((el, i) => (
      <div key={i}  >
        <Row>
          <Col span={4}>
            <Input placeholder="Id" name="id" value={el.id || ''} onChange={this.handleChange.bind(this, i)} style={{ width: '95px' }} />
          </Col>
          <Col span={4}>
            <Input placeholder="Parameter" name="parameter" value={el.parameter || ''} onChange={this.handleChange.bind(this, i)} style={{ width: '95px' }} />
          </Col>
          <Col span={4}>
            <Select
              style={{ width: 95 }}
              placeholder="Unit"

            >
              <Option value="g"> g</Option>
              <Option value="Kg">kg </Option>
              <Option value="mm">mm </Option>
              <Option value="cm">cm </Option>
              <Option value="day">day</Option>
              <Option value="minutes">minutes </Option>
              <Option value="sec">sec </Option>
              <Option value="N">N</Option>
              <Option value="K">K</Option>

            </Select>
          </Col>

          <Col span={4}>
            <Input placeholder="Max Value" name="entry" value={el.entry || ''} onChange={this.handleChange.bind(this, i)} style={{ width: '95px' }} />
          </Col>

          <Col span={4}>
            <Input placeholder="Min Value" name="entry" value={el.entry || ''} onChange={this.handleChange.bind(this, i)} style={{ width: '95px' }} />
          </Col>

          <Col span={4}>
            <Button type='' value='remove' onClick={this.removeClick.bind(this, i)} ><Icon type='delete' /></Button>
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
    return (

      <div>
        <Button type="primary" onClick={this.showModal}>
          Add Material
            </Button>
        <Modal
          visible={this.state.visible}
          title=" Add Material"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="800px"
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
                </Button>,
            <Button
              key="submit"
              type="primary"

              onClick={this.handleSubmit}
            >
              Save
                </Button>
          ]}
        >

          <Row>
            <Col span={8} >


              <Form.Item label="Material Code: ">

                <Input
                  placeholder="Material Code"
                  style={{ width: '200px' }} />
              </Form.Item>

            </Col>

            <Col span={8}>
              <Form.Item label="Material Type: ">
                <Select
                  showSearch

                  style={{ width: '200px' }}
                  placeholder="Type"
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value=" rawmarterial"> RawMaterial </Option>
                  <Option value=" finalproduct"> Final Product </Option>

                </Select>
              </Form.Item>
            </Col>

            <Col span={8} >

              <Form.Item label="Category: ">
                <Select
                  style={{ width: 200 }}
                  placeholder=" Category"
                  value={this.state.tabPosition1}
                  onChange={this.changeTabPosition1}
                  dropdownMatchSelectWidth={false}
                >
                  <Option value="cement"> Cement </Option>
                  <Option value=" concrete"> Concrete </Option>
                  <Option value=" Chemical "> Admixture </Option>
                  <Option value=" Aggregate"> Aggregate </Option>

                </Select>
              </Form.Item>
            </Col>




          </Row>
          <Row>

            {/* {this.state.tabPosition1=="cement" ?
      <Col span={8} >
  
           <Form.Item label="SubCategory">
   <Select
          style={{width:'150px'}}
          placeholder="Enter the Subategory"
             value={this.state.tabPosition2}
            onChange={this.changeTabPosition2}
            dropdownMatchSelectWidth={false}
          >

<Option value="flyash"> Fly Ash </Option>
                  <Option value=" Silica"> Silica </Option>
                  <Option value=" opc "> OPC </Option>
                  <Option value=" bpc"> BPC </Option>
            </Select>
          
            </Form.Item> 
        
       
        
      </Col>:''} */}

            <Col span={8}>

              <Form.Item label="Sub Category: ">

                <Select
                  showSearch

                  style={{ width: '200px' }}
                  placeholder="Sub Category"

                >
                  <Option value=" flyash"> Fly Ash </Option>
                  <Option value=" silica"> Silica </Option>
                  <Option value=" opc "> OPC </Option>
                  <Option value=" bpc"> BPC </Option>

                </Select>
              </Form.Item>
            </Col>

            <Col span={8}>

              <Form.Item label="Material Name: ">

                <Input
                  placeholder="Material Name"
                  style={{ width: '200px' }} />
              </Form.Item>
            </Col>


            <Col span={8}>
              <Form.Item label="Nature: ">
                <Select
                  showSearch

                  style={{ width: '200px' }}
                  placeholder="Select the Nature"

                >
                  <Option value=" cement"> Finus </Option>
                  <Option value=" Concrete"> Crushed </Option>
                  <Option value=" Chemical "> Raw </Option>
                  <Option value=" Aggregate"> Liquids </Option>

                </Select>
              </Form.Item>

            </Col>

          </Row>

          <Row>
            <Col span={24}>
              <Form.Item label="Description: ">
                <TextArea
                  placeholder="Description"
                  style={{ width: '540px' }} />
              </Form.Item>
            </Col>
          </Row>

          <p >Add Parameters:</p>
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

        </Modal>


      </div>








    );
  }
}

export default AddMaterialMasterCreation;
