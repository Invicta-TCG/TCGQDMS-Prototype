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
  DatePicker


} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
//import TableEdit from './TableEdit';

const { Option } = Select;

class TestConfiguration extends React.Component {

  /*
  Author: 
  Last Updated: dd/MM/YYYY

  Note: Please do necessary commenting and follow code standard.
    */
  constructor(props) {
    super(props);
  }

  state = {
    type: ''
  }
  onChange = (value) => {
    this.setState({ type: value })
    this.props.config(value);
    console.log(value)
  }
  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',

      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',

      },
      {
        title: 'Unit',
        dataIndex: 'unit',
        key: 'unit'

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
        render: (record, key) => <Checkbox />,

      },


    ];
    const columns1 = [
      {
        title: 'Code',
        dataIndex: 'id',
        key: 'id',

      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'

      },
      {
        title: 'Unit',
        dataIndex: 'unit',
        key: 'unit',

      },

      {
        title: 'Value',
        dataIndex: 'Value',
        key: 'Value',


      },


    ];
    const columns2 = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',

      },
      {
        title: 'Parameter',
        dataIndex: 'parameter',
        key: 'parameter',

      },
      {
        title: 'Unit',
        dataIndex: 'unit',
        key: 'unit'

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
        render: (record, key) => <Checkbox />,

      },


    ];

    const data = [
      {
        key: '1',
        id: 1,
        description: "Size",
        unit: 'mm',
        Value: "0.5",
      },
      {
        key: '2',
        id: 2,
        description: "Temperature",
        unit: 'k',
        Value: "25",
      },
      {
        key: '3',
        id: 3,
        description: "Moisture",
        unit: 'k',
        Value: "20",

      },
      {
        key: '4',
        id: 4,
        description: "Gravity",
        unit: 'N',
        Value: "15",
      },
      {
        key: '5',
        id: 5,
        description: "Weight",
        unit: 'g',
        Value: "5",
      },
      {
        key: '6',
        id: 6,
        description: "Density",
        unit: 'g',
        Value: "4",
      },
    ];
    const data1 = [
      {
        key: '1',
        id: 1,
        parameter: "Strength",
        Value: "1",
        unit: "N",
      },
      {
        key: '2',
        id: 2,
        parameter: "Weight",
        Value: "2",
        unit: "g",
      },
      {
        key: '3',
        id: 3,
        parameter: "Water Demand",
        Value: "3",
        unit: "g",

      },
      {
        key: '4',
        id: 4,
        parameter: "Gravity",
        Value: "4",
        unit: "N",
      },
    ];
    return (
      <div>
        <div>
          <h3
          >
            Test Configuration For Material
      </h3>
          <br />

          <div
            style={{
              padding: 12,
              background: '#F2F9F5',
              minHeight: '300px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
            }}>
            <Row>
              <Col span={6}>
                <Form.Item label=" Code">
                  <Input
                    type="text "
                    value="0001"
                    style={{ width: '200px' }} />
                </Form.Item>

              </Col>
              <Col span={6}>
                <Form.Item label=" Prefix">
                  <Input
                    type="text "
                    value="MICR"
                    style={{ width: '200px' }} />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item label=" Test Name">
                  <Input
                    type="text"
                    value="75 Microne Test"
                    style={{ width: '200px' }} />
                </Form.Item>
              </Col>
              <Form.Item label="Type">
                <Select
                  showSearch
                  onChange={this.onChange}
                  style={{ width: '200px' }}
                  placeholder="Select a Type"

                >
                  <Option value="RawMaterial"> Raw Material</Option>
                  <Option value="FinalProduct"> Finished Product </Option>

                </Select>
              </Form.Item>

            </Row>
            <Row>
              <Col span={12}>


                <Form.Item label="Description" >


                  <TextArea style={{ width: '450px', height: '100px' }} />
                </Form.Item  >
              </Col>



              <Col span={12}>


                <Form.Item label="Procedure">


                  <TextArea style={{ width: '450px', height: '100px' }} />
                </Form.Item>
              </Col>


            </Row>


          </div>
        </div>
        <Divider type="horizontal" style={{
          margin: '16px 0'
        }}
        />

        {this.state.type == 'RawMaterial' ? <div
          style={{
            padding: 12,
            background: '#F2F9F5',
            minHeight: '400px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
          }}>
            <br/>
            <h3>Material Related Parameter</h3>
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
          <br />
          <br />
          <Table columns={columns} dataSource={data} pagination={false} size="small" />
          <br />
          <Divider type="horizontal" style={{
            margin: '16px 0'
          }}
          />


        </div> : ''}

        {this.state.type == 'FinalProduct' ? <div
          style={{
            padding: 12,
            background: '#F2F9F5',
            minHeight: '400px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
          }}>

          <h3>
            Finished Product Material Parameter
  </h3>
          <br />
          <Table columns={columns2} dataSource={data1} pagination={false} size="small" />


        </div> : ''}
      </div>

    );
  }
}

export default TestConfiguration;
