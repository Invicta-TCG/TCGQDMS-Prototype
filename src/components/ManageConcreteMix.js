import React from 'react';
import { Table, Button, Input, Icon, Modal, Row, Col, AutoComplete, Form, Checkbox, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';



const Search = Input.Search;

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
export default class Product extends React.Component {
  state = {
    Data: '',
    visible: false,
  };

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
  onChange = (record) => {
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
    console.log(raw)
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',

      },
      {
        title: 'RawMatrial',
        dataIndex: 'RawMaterial',
        key: 'RawMaterial'

      },
      {
        title: 'Value',
        dataIndex: 'Value',
        key: 'Value',

      },

      {
        title: 'Action',
        dataIndex: 'Action',
        key: 'Action',
        render: (record, key) => <Checkbox onChange={this.onChange.bind(this, key)} />,

      },

    ];
    return (
      <React.Fragment>
        <Breadcrumb style={{
          margin: '16px 0'
        }}>
          <Breadcrumb.Item>Material</Breadcrumb.Item>
          <Breadcrumb.Item>Manage Concrete Mix</Breadcrumb.Item>
        </Breadcrumb>

        <div style={{
          padding: 12,
          background: '#eef6fc',
          minHeight: '500px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
        }}>

          <div className="table-operations">
            <Row>
              <Col span={19}><Col span={4}>
              </Col>
                <Col span={4}>

                </Col> </Col>
              <Col span={5}>
                <Search
                  placeholder=" Search ......"
                  onSearch={value => console.log(value)}
                  style={{ width: 215 }}
                  enterButton
                /></Col>

            </Row>
          </div>
          <br>
          </br>
          <div
            style={{
              padding: 12,
              background: '#F2F9F5',
              minHeight: AutoComplete,
              boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
            }}>
            <Table columns={columns} dataSource={data} pagination={false} size="small" /></div>
          <br />
          <Row>
            <Col span={22}></Col>
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
        </div>
      </React.Fragment>
    );
  }
}