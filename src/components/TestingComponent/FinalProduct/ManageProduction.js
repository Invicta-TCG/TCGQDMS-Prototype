import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Badge, Menu, Select, Icon, Breadcrumb, AutoComplete, Checkbox, Divider, Row, Col, Form, Input, DatePicker, Button, Modal } from 'antd';

const { Option } = Select;
const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);
const data = [
  {
    key: '1',
    id: 1,
    RawMaterial: "Cement",
    Value: "5.2",
  },
  {
    key: '2',
    id: 2,
    RawMaterial: "AddMixture",
    Value: "6",
  },
  {
    key: '3',
    id: 3,
    RawMaterial: "CoarseAggregate",
    Value: "7",

  },
  {
    key: '4',
    id: 4,
    RawMaterial: "FineAggregate",
    Value: "8",
  },
];


const raw = [];

export default class ManageProduct extends React.Component {

  state = {
    grade: ''
  }

  onChange = (value) => {
    console.log(`selected ${value}`);
    this.setState({
      grade: value
    })
  }
  showModal = () => {
    this.setState({
      visible: true,
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

  componentDidMount() {

    this.setState({
      Data: data
    })
  }
  onChange1 = (record) => {
    console.log(record);
    raw.push(record);
  }

  submit = () => {
    var _this = this;

    let input = raw.map((post, index) => {
      return <tr>
        <td>{post.RawMaterial}</td>
        <td><Input style={{ width: '200px' }} /></td>

      </tr>



    })



    _this.setState({
      input: input,
      visible: true
    })
    console.log(raw)
  }

  render() {
    const expandedRowRender = () => {
      const columns = [
        { title: 'Parameter Name', dataIndex: 'name', key: 'name' },
        { title: 'Last Tested Date', dataIndex: 'date', key: 'date' },

        { title: 'Value', dataIndex: 'value', key: 'value' },
        { title: 'Unit', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          render: (record, key) => <Checkbox onChange={this.onChange1.bind(this, key)} />,
        },
      ];

      const data = [
        {
          key: 1,
          date: '2014-12-24 23:12:00',
          name: 'Water Content',
          value: '5',
          upgradeNum: 'g',
        },
        {
          key: 2,
          date: '2014-12-24 23:12:00',
          name: 'pH',
          value: '5',
          upgradeNum: 'pH',
        },
        {
          key: 3,
          date: '2014-12-24 23:12:00',
          name: 'Weight',
          value: '5',
          upgradeNum: 'g',
        },
        {
          key: 4,
          date: '2014-12-24 23:12:00',
          name: 'Size',
          value: '5',
          upgradeNum: 'g',
        },

      ];

      return <div
      >
        <Table columns={columns} dataSource={data} pagination={false} size="small" /></div>;
    };

    const columns = [
      { title: 'Raw Material', dataIndex: 'name', key: 'name' },
      { title: 'Value', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
      { title: 'Action', key: 'operation', render: () => <Checkbox /> },
    ];

    const data = [
      {
        key: 1,
        name: 'River Sand',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
      },
      {
        key: 2,
        name: 'Admixture',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
      },
      {
        key: 3,
        name: 'Coarse Aggregate',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
      },
      {
        key: 4,
        name: 'Cement',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
      }
    ];


    return (
      <React.Fragment>
        <Row>

          <div
            style={{
              padding: 12,
              background: '#F2F9F5',
              minHeight: 'AutoComplete',
              boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
            }}>
            <Form labelAlign='left' labelCol={{ span: 8 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
              <Row>
                <Col span={12}>

                  <Form.Item label=" Code">
                    <Input 
                     placeholder="Code"
                    style={{ width: '300px' }} />
                  </Form.Item>

                </Col>
                <Col span={12}>
                  <Form.Item label="Grade">
                    <Select style={{ width: 300 }} placeholder="Select a Grade" onChange={this.onChange} >
                      <Option value="70">70</Option>
                      <Option value="50">50</Option>
                      <Option value="30">30</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>

                  <Form.Item label="Product Name"

                   >
                    <Input 
                     placeholder="Production Name"
                    style={{ width: '300px' }} />
                  </Form.Item>

                </Col>
                <Col span={12}>
                  <Form.Item label="Date of production">

                    <DatePicker style={{ width: '300px' }} />
                  </Form.Item>
                </Col>
              </Row>
              <Row>

                <Col span={12}>
                  <Form.Item label="Plant">
                    <Select style={{ width: 300 }} placeholder="Plant" onChange={this.onChange} >
                      <Option value="70">Peliyagoda</Option>
                      <Option value="50">Jaffna</Option>
                      <Option value="30">Ratmalana</Option>
                    </Select>
                  </Form.Item>
                </Col>

              </Row>
            </Form>
          </div>

        </Row>
        <br />
        <Row>


          <h3>RawMaterials Parameters</h3>
          <Table
            className="components-table-demo-nested"
            columns={columns}
            expandedRowRender={expandedRowRender}
            dataSource={data}
            size="small"
          />

        </Row>

        <br />
        <Row>
          <Col span={22}>

          </Col>
          <Col span={2}>
            <Button type='Primary' onClick={this.submit}>Submit</Button>
          </Col>
        </Row>

        <Modal
          visible={this.state.visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <table>
            <thead>
              <tr>
                <th>
                  Name
  </th>
                <th>
                  value
  </th>
              </tr>
            </thead>
            <tbody>
              {this.state.input}
            </tbody>
          </table>


        </Modal>

      </React.Fragment>
    );

  }
}