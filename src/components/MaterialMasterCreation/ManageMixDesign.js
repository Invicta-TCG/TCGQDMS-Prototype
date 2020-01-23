import React, { Component } from 'react';
import {
    Tabs,
    Breadcrumb,
    Input,
    DatePicker,
    Form,
    Row,
    Col,
    Select,
    Divider,
    Button,
    Icon,
    Table
    , Modal,Card

} from 'antd';
import { border } from '@material-ui/system';

const Search = Input.Search;

const { Option } = Select;



class ManageMixDesign extends Component {

    state = {
        tabPosition: 'Suppliers',
        tabPosition1: 'River Sand',
        loading: false,
        visible: false,
        filteredInfo: null,
        sortedInfo: null,
        searchText: '',
        visible: false,

        showComponent: false,

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
    render() {
        const { visible, loading } = this.state;
        const columns = [
            { title: 'Code', dataIndex: 'code', key: 'code' },
            { title: 'Product Name', dataIndex: 'pname', key: 'pname' },
            { title: 'Plant', dataIndex: 'plant', key: 'plant' },
            { title: 'Grade', dataIndex: 'grade', key: 'grade' },
            { title: 'Date', dataIndex: 'date', key: 'date' },
            {
                title: 'Raw Materials', key: 'rwamaterials',
                render: () => <a onClick={this.showModal}><Icon type="solution" /></a>,
                   
                
            },
            {
                title: 'Action', key: 'operation', render: () => (
                    <span>
                        <a><Icon type="edit" /></a>
                        <Divider type="vertical" />
                        <a><Icon type="delete" /></a>
                    </span>
                )
            }
          
        ];

        const data = [
            {
                key: 1,
                code: 'PR/C15/01',
                pname: 'Solid Waste',
                plant: 'Peliyagoda',
                grade: 15,
                date: '05.06.2017',
                status: ['Succes'],
            },

            {
                key: 2,
                code: 'PR/C20/02',
                pname: 'Domestic',
                plant: 'Jaffna',
                grade: 20,
                date: '05.06.2017',
                status: ['Succes'],
            },

            {
                key: 3,
                code: 'PR/C25/03',
                pname: 'Sierra Piling',
                plant: 'Trincomale',
                grade: 25,
                date: '05.06.2017',
                status: ['Succes'],
            },
        ];



        return (

            <React.Fragment>
              


               

                    <div>
                        <Col span={5}>
                            <Search
                                placeholder=" Search ......"
                                onSearch={value => console.log(value)}
                                style={{ width: 215, marginLeft: 800 }}
                                enterButton
                            /></Col>

                        <br />
                        <br />
                        <br />

                        <Table
                            style={{ fontSize: '6px' }}
                            className="components-table-demo-nested"
                            columns={columns}

                            dataSource={data}
                            size="small" />

<Modal
          title="Raw Materials"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
       
        >
          <div
            style={{
              padding: 24,
              background: '#fff',
              minHeight: '100px',

            }}>

<table border = "1">
               <tr >
                   <th style={{width:'200px'}} >Raw Materials</th>
                   <th> Quantity</th>
               </tr>

               <tr>
                   <td >Cement</td>
                   <td> 5</td>
               </tr>

               <tr>
                   <td >AdMixture</td>
                   <td> 7</td>
               </tr>
               </table>

               
          </div>
         

        </Modal>

       
                    </div>

               
            </React.Fragment>
        );
    }
}

export default ManageMixDesign;