import React from 'react';
import { Table, AutoComplete, Icon, Divider, Popconfirm } from 'antd';

const columns = [
  {
    title: 'Materials',
    dataIndex: 'material',
    key: 'material',
    width:'20%',
  },
  {
    title: 'Test Name',
    dataIndex: 'testname',
    key: 'testname',
    width:'20%',

  },
  {
    title: 'Test Prameter ',
    dataIndex: 'testparameter',

    key: 'testparameter',
    width:'20%',
  },
  {
    title: 'Value ',
    dataIndex: 'value',

    key: 'value',
    width:'20%',
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
    key: 1,
    material: 'Cement',
    children: [
      {
        key: 1,
        testname: 'Fines Test',
        testparameter: "Size",
        value: '2.3',
      },
      {
        key: 2,
        testname: 'Water Demand Test',
        testparameter: "Weight",
        value: '2.3',
      },


    ],
  },
  {
    key: 2,
    material: 'Coarse Aggregate',
    children: [
      {
        key: 1,
        testname: 'Seive Test',
        testparameter: "Weight",
        value: 2.5,
      },
      {
        key: 2,
        testname: 'Specific Gravity',
        testparameter: "Gravity",
        value: 1.6,
      },
      {
        key: 3,
        testname: 'AIV',
        testparameter: "Weight",
        value: 5.6,
      },
      {
        key: 4,
        testname: 'Clay & Slit',
        testparameter: "Weight",
        value: 1.8,
      },
      {
        key: 5,
        testname: 'Water Demand',
        testparameter: "Weight",
        value: 1.7,
      },


    ],
  },
  {
    key: 3,
    material: 'Fine Aggregate',
    children: [
      {
        key: 1,
        testname: 'Seive Test',
        testparameter: "Weight",
        value: 2.5,
      },
      {
        key: 2,
        testname: 'Specific Gravity',
        testparameter: "Gravity",
        value: 1.6,
      },
      {
        key: 3,
        testname: '75 Microne Test',
        testparameter: "Weight",
        value: 1.8,
      },
      { 
        key: 4,
        testname: 'Water Demand',
        testparameter: "Weight",
        value: 1.7,
      },


    ],
  },

  {
    key: 4,
    material: 'Concrete',
    children: [
      {
        key: 1,
        testname: 'Strength Test',
        testparameter: 'Force',
        value: 1.5,
      },
      {
        key: 2,
        testname: 'Slump Test',
        testparameter: 'Height',
        value: 1.5,
      },
      {
        key: 3,
        testname: 'Water Demand',
        testparameter: 'Weight',
        value: 1.5,
      },


    ],
  },

];

class ManageTestConfiguration extends React.Component {
  render() {
    return (

      <div
        style={{
          padding: 12,
          background: '#F2F9F5',
          minHeight: AutoComplete,
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
        }}>

        <Table columns={columns} dataSource={data} size="small" />,

            </div>


    );

  }


}

export default ManageTestConfiguration;

