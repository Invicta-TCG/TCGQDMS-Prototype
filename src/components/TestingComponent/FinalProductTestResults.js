import React  from 'react';
import { Table, Input, Button, Icon,AutoComplete ,Modal,Row,Col,Breadcrumb,Divider} from 'antd';
import Highlighter from 'react-highlight-words';
import ResultsFillter from './ResultsFillter';

const data = [
  {
    key: '1',
    code:'PR/C15/001',
    name: 'Pillar',
    date: '12/05/2019',
    grade: 5,
    plant:'peiyagoda',
    QCM:'Sisiri',
    raw:'',
    test:'',


  },
  {
    key: '2',
    code:'PR/G14/003',
    name: 'Bridge pillar',
    date: '16/6/2019',
    grade: '8',
    plant:'Colombo',
    QCM:'Vimal',
    raw:'',
    test:'',
  },
  {
    key: '3',
    code:'PR/G18/012',
    name: 'House pillar',
    date: '25/11/2019',
    grade: '6',
    plant:'Colombo',
    QCM:'Vimal',
    raw:'',
    test:'',
  },
  {
    key: '4',
    code:'PR/G17/007',
    name: ' pillar',
    date: '30/9/2019',
    grade: '8',
    plant:'Jaffna',
    QCM:'Raja',
    raw:'',
    test:''
  }
];
class FinalProductTestResults extends React.Component{
    state = {
        searchText: '',
        searchedColumn: '',
        visible:false,
        visibleTest:false
      };

      getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text.toString()}
            />
          ) : (
            text
          ),
      });
    
      handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };

    //   Raw Matrials modal part start here -------------------------------------------------------------->

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
    // <------------------------------------------------------------------------------------------------>
    // <--------------------Test Modal start here---------------------------------------------------------->
    showModalTest = () => {
        this.setState({
          visibleTest: true,
        });
      };
    
      handleOkTest = e => {
        console.log(e);
        this.setState({
          visibleTest: false,
        });
      };
    
      handleCancelTest = e => {
        console.log(e);
        this.setState({
          visibleTest: false,
        });
      };
    
    render(){
      
        const columns = [
            {
              title: ' Code',
              dataIndex: 'code',
              key: 'code',
             
              ...this.getColumnSearchProps('code'),
            },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
             
              ...this.getColumnSearchProps('name'),
            },
            {
              title: 'Date',
              dataIndex: 'date',
              key: 'date',
              ...this.getColumnSearchProps('address'),
            },
            {
              title: 'Grade',
              dataIndex: 'grade',
              key: 'grade',
              ...this.getColumnSearchProps('grade'),
            }, 
            {
                title: 'Plant Name',
                dataIndex: 'plant',
                key: 'plant',
                ...this.getColumnSearchProps('plant'),
                
              },
              {
                title: 'QC Manager',
                dataIndex: 'QCM',
                key: 'QCM',
                ...this.getColumnSearchProps('QCM'),
              },
            
            {
              title: 'RawMaterials',
              dataIndex: 'raw',
              key: 'raw',
              render: () => <a onClick={this.showModal}><Icon type="solution" /></a>,
              
            },
            {
              title: 'Tests',
              dataIndex: 'test',
              key: 'raw',
              render: () => <a onClick={this.showModalTest}><Icon type="solution" /></a>,
              
            },


          ];
// <---------------------------------Raw Matrial Table ---------------------------------------------------->
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
      
            },
           
            {
              title: 'Unit',
              dataIndex: 'unit',
              key: 'unit',
      
            }
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
    //   <==================================================================================================>

    // <==========================Test Table=====================================================================>
    const columns2 = [
        {
          title: 'Days',
          dataIndex: 'parameter',
          key: 'parameter'
  
        }
        ,
        {
          title: 'Strength',
          dataIndex: 'value',
          key: 'value',
  
        },
       
        {
          title: 'Unit',
          dataIndex: 'unit',
          key: 'unit',
  
        }
      ]

      const data2 = [{

        key: '1',
        parameter: '7',
        unit: 'N',
        value: '8',
      },
      {
        key: '2',
        parameter: '14',
        unit: 'N',
        value: '6',
      },
      {
        key: '3',
        parameter: '28',
        unit: 'N',
        value: '12',
      }
  ];

        return(

          <React.Fragment>
          <Breadcrumb style={{
              marginTop: '-40px 0'
          }}>
              <Breadcrumb.Item>Testing</Breadcrumb.Item>
              <Breadcrumb.Item>FP Trial Test</Breadcrumb.Item>
          </Breadcrumb>
<Divider  style={{border:"black"}}/>
            <div  style={{
                padding: 12,
                background: '#F2F9F5',
                minHeight: AutoComplete,
                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
            }}>
                <Row>
                    <Col span={22}>

                    </Col>
                    <Col span={2}>
                        <ResultsFillter/>  
                    </Col>
                </Row>
                <br/>

<Table columns={columns} dataSource={data} />
        <Modal
            title="RawMatrial Detail"
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
                  <Table 
                    style={{ width: '450px', marginLeft: '-20px', marginTop: '-20px', height: '50px' }} 
                    columns={columns1} 
                    dataSource={data1} 
                    size="small" 
                  />
                </div>
              </Col>
            </div>

          </Modal>

          {/* <----------------Test Modal----------------------------------------------------------------------> */}

 <Modal
            title="Test Detail"
            visible={this.state.visibleTest}
            onOk={this.handleOkTest}
            onCancel={this.handleCancelTest}
          >
            <div
              style={{
                padding: 24,
                background: '#fff',
                minHeight: '350px',
            }}>
              <Col span={16}>
                <div style={{ width: '200px', minHeight: 'AutoComplete', }}>
                  <Table 
                 title={()=>("Strength Test")}
                    style={{ width: '450px', marginLeft: '-20px', marginTop: '-20px', height: '50px' }} 
                    columns={columns2} 
                    dataSource={data2} 
                    size="small" 
                  />
                </div>
              </Col>
            </div>

          </Modal>
            </div>
            </React.Fragment>
        )
    }
}



export default FinalProductTestResults;