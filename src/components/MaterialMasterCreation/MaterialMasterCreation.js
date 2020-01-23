import React from 'react';
import {
  Breadcrumb, AutoComplete, Popconfirm
} from 'antd';

import { Form, Input, Icon, Button, Modal, Row, Col, Table, Divider, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { NONAME } from 'dns';
import { element } from 'prop-types';
import AddMaterialMasterCreation from './AddMaterialMasterCreation';
const Search = Input.Search;

// const { TextArea} = Input;
const { Option } = Select;

class MaterialMasterCreation extends React.Component {

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
    const columns = [
      {
        title: 'Material Code',
        dataIndex: 'code',
        key: 'code',
        width: "12%",
        render: text => <a>{text}</a>,
      },
      {
        title: 'Material Name',
        dataIndex: 'material',
        key: 'material',
        width: "12%",
      },
      {
        title: 'Main Category',
        dataIndex: 'main',
        key: 'main',
        width: "12%",
      },
      {
        title: 'Sub Category',
        dataIndex: 'sub',
        key: 'sub',
        width: "12%",
      },
      {
        title: 'Parameters',
        key: 'para',
        width: "12%",
        render: (text, record) => (
          <span>
            <a><Icon type="form" onClick={this.showModal} /></a>

          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        width: "20%",
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
    const columns1 = [
      {
        title: 'Parameter',
        dataIndex: 'parameter',
        key: 'parameter',

      },
     
      {
        title: 'Unit',
        dataIndex: 'unit',
        key: 'unit',

      },
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',

      },
    ]

    const data = [
      {
        key: '1',
        code: 'RM/MS/001',
        material: 'M/S Sand',
        main: 'Aggregate',
        sub:"Fine Aggregate",
        para: '',

      },
      {
        key: '2',
        code: 'RM/RS/001',
        material: 'River Sand',
        main: 'Aggregate',
        sub:"Fine Aggregate",
        para: '',

      },
      {
        key: '3',
        code: 'RM/AM/001',
        material: 'Optima100',
        main: 'Admixture',
        sub:"Chemical",
        para: '',

      },
      {
        key: '4',
        code: 'RM/CA/001',
        material: '0-5mm ',
        main: 'Aggregate',
        sub:"Coarse Aggregate",
        para: '',

      },
      {
        key: '5',
        code: 'RM/CM/001',
        material: 'OPC',
        main: 'Cement',
        sub: '-',
        para: '',

      },

    ];

    const data1 = [{

      key: '1',
      parameter: 'Strength',
      entryLevel: 'Cofiguration Level',
      unit: 'g',
      value: '44',
    },
    {
      key: '2',
      parameter: 'Temperature',
      entryLevel: 'Entry level',
      unit: 'g',
      value: '44',
    }


    ]
    return (
      <React.Fragment>
        <Breadcrumb style={{
          margin: '16px 0'
        }}>
          <Breadcrumb.Item>Master</Breadcrumb.Item>
          <Breadcrumb.Item>Add Material</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 12,
            background: '#eef6fc',
            minHeight: '500px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
          }}>

          <br />
          <Row>

            <Col span={12}>
              <AddMaterialMasterCreation />
            </Col>

            <Col span={12}>
              <Search
                placeholder=" Search ......"
                onSearch={value => console.log(value)}
                style={{ width: 215,marginLeft:250 }}
                enterButton
              /></Col>

          </Row>


          <br />



          <Table columns={columns} dataSource={data} size="small" />

          <Modal
            title="Parameter Detail"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div
              style={{
                padding: 24,
                background: '#fff',
                minHeight: '350px',

              }}>

              <Col span={16}>
                <div style={{ width: '200px', minHeight: 'AutoComplete', }}>

                  <Table style={{ width: '450px', marginLeft: '-20px', marginTop: '-20px', height: '50px' }} columns={columns1} dataSource={data1} size="small" />

                </div>





              </Col>



            </div>

          </Modal>


        </div>

      </React.Fragment>

    );
  }
}

export default MaterialMasterCreation;
