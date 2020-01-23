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
  Modal,
  Divider

} from 'antd';
import MaterialTable from 'material-table';

const { Option } = Select;

export default class TestMaster extends React.Component {
  state = {
    columns: [
      { title: 'Code', field: 'code' },
      {title: 'Parameter', field: 'parameter' },

      {
        title: 'Unit',
        field: 'unit',

      },


    ],
    data: [
      {
        code: 'TM/SZ',
        parameter: 'Size',
        unit: "mm"
      },

      {
        code: 'TM/WE',
        parameter: 'Weight',
        unit: "g",
      },
      {
        code: 'TM/PH',
        parameter: 'pH',
        unit: "pH"
      },

      {
        code: 'TM/MO',
        parameter: 'Moisture',
        unit: "g",
      },
      {
        code: 'TM/GR',
        parameter: 'Gravity',
        unit: "N"
      },

      {
        code: 'TM/DE',
        parameter: 'Density',
        unit: "g",
      },
      {
        code: 'TM/FR',
        parameter: 'Force',
        unit: "N",
      },
    ],

  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb style={{
          margin: '16px 0'
        }}>
          <Breadcrumb.Item>Testing</Breadcrumb.Item>
          <Breadcrumb.Item>Test Master Creation</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{
          padding: 16,
          background: '#eef6fc',
          minHeight: '500px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
        }}>
          <div>
            {/* <Button type="primary" onClick={this.showModal}>
    Add Test Master Creation

            </Button> */}
            <Modal
              visible={this.state.visible}
              title=" Add Test Master Creation"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              width="1000px"
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

            </Modal>
          </div>
          <br />
          <MaterialTable
            title="Test Master Creation"
            columns={this.state.columns}
            data={this.state.data}
           size="small"
            editable={{
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    this.setState(prevState => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 100);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      this.setState(prevState => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    this.setState(prevState => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
            }}
            style={{ backgroundColor: '#F2F9F5' }}
         
          />
        </div>
      </React.Fragment>
    )
  }
}
