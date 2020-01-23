import React from 'react';
import { Table ,Row ,Input ,Col } from 'antd';

import AddMaterialTesting from './MaterialTesting';

const Search = Input.Search;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    Action:'dfdf'
  },
  {
    title: 'Accepted Value',
    dataIndex: 'acceptedValue',
    key: 'acceptedValue',
    width: '12%',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    width: '30%',
    key: 'description',
  },
];

const data = [
  {
    key: 1,
    name: 'Cement',

    children: [
      {
        key: 11,
        name: 'Water Demand Testing',
        acceptedValue: 42,
        description: 'Lorem Ipsum is simply dummy text',
        
      },
      {
        key: 12,
        name: 'Finess Testing',
        acceptedValue: 42,
        description: 'Lorem Ipsum is simply dummy text',
      },
     
      
    ],
  },
  {
    key: 2,
    name: 'Admixture',

    children: [
      {
        key: 13,
        name: 'PH Testing ',
        acceptedValue: 42,
        description: 'Lorem Ipsum is simply dummy text',
      },
      {
        key: 14,
        name: 'Gravity Testing ',
        acceptedValue: 42,
        description: 'Lorem Ipsum is simply dummy text',
      },
      {
        key: 15,
        name: 'Marsh Cone Testing ',
        acceptedValue: 42,
        description: 'Lorem Ipsum is simply dummy text',
      },
     
      
    ],
  },
  {
    key: 3,
    name: 'Fine Agrregate',
    children: [
      {
        key: 16,
        name: 'Sieve Testing  ',
        acceptedValueage: 42,
        description: 'Lorem Ipsum is simply dummy text',
      },
      {
        key: 17,
        name: 'Gravity Testing  ',
        acceptedValue: 42,
        description: 'Lorem Ipsum is simply dummy text',
      },
      {
        key: 18,
        name: '75% MicroOven Testing  ',
        acceptedValue: 42,
        description: 'Lorem Ipsum is simply dummy text',
      },
      {
        key: 19,
        name: 'Water Abasorbtion Testing  ',
        acceptedValueage: 42,
        description: 'Lorem Ipsum is simply dummy text',
      },
     
      
    ],
  },
  {
    key: 4,
    name: 'Concrete',

    children: [
      {
        key: 20,
        name: 'Strength Testing  ',
        acceptedValue: 42,
        description: 'Lorem Ipsum is simply dummy text',
        
            },
      {
        key: 21,
        name: 'Water Content Testing  ',
        acceptedValue: 42,
        description: 'Lorem Ipsum is simply dummy text',
      },
      {
        key: 22,
        name: 'MicroOven Testing   ',
        acceptedValue: 42,
        description: 'Lorem Ipsum is simply dummy text',
      },
      {
        key: 23,
        name: 'Slump Testing  ',
        acceptedValue: 42,
        description: 'Lorem Ipsum is simply dummy text',
      },
     
     
      
    ],
  },
];



class MangeMaterialTesting extends React.Component{

  state = {
    filteredInfo: null,
    sortedInfo: null,
    searchText: '',
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }
  render(){
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    
    return(
      <div>

      <div className="table-operations">
        <Row>
          <Col span={19}>



            <Col span={4}>
              <AddMaterialTesting />

            </Col>
            <Col span={4}>
         
            </Col>

         

          </Col>
          <Col span={5}>
            <Search
              placeholder=" search ......"
              onSearch={value => console.log(value)}
              style={{ width: 215 }}
              enterButton
            /></Col>

        </Row>
      </div>
      <br>
      </br>
      <Table columns={columns} dataSource={data} onChange={this.handleChange} />

    
    </div>
      
    )
  }
}
 
  
export default MangeMaterialTesting;