import React, { Component } from 'react';
import { AutoComplete, Row, Col, Select, Breadcrumb } from 'antd';
import TestTrialCard from '../../TestingComponent/TestTrailCard/TestTrialCard';
import TestTrialCardBin from '../../TestingComponent/TestTrailCard/TestTrialCardBin';
import TestTrialSupplier from '../../TestingComponent/TestTrailCard/TestTrialSupplier';
const { Option } = Select;


class TestTrailRawMaterial extends Component {

    state = {
        tabPosition: 'Select the Category',
    }

    changeTabPosition = value => {
        console.log(value)
        this.setState({ tabPosition: value });
    };
    render() {
        return (
            <React.Fragment>

                <Breadcrumb style={{
                    margin: '16px 0'
                }}>
                    <Breadcrumb.Item>Suppliers</Breadcrumb.Item>
                    <Breadcrumb.Item>Manage Supplier</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 12,
                        background: '#F2F9F5',
                        minHeight: '500px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                    }}>

                    {/* <Row>

                        <Col span={8}>
                            <Select
                                style={{ width: 300, marginTop: '20px', marginLeft: '20px' }}
                                placeholder="Select Category"
                                value={this.state.tabPosition}
                                onChange={this.changeTabPosition}
                                dropdownMatchSelectWidth={false}

                            >
                                <Option value="SupplierSample">Incomming Material Sample</Option>
                                <Option value="BinSample">  Process Sample</Option>
                                <Option value="FinalProduct"> Final Product</Option>



                            </Select>
                        </Col>

                        <Col span={8}>
                            <Select
                                style={{ width: 300, marginTop: '20px', marginLeft: '20px' }}
                                placeholder="Select Sample"  
                               
                                >
                                
                                <Option value="SupplierSample">Sample 001</Option>
                                <Option value="BinSample">Sample 002</Option>
                                <Option value="FinalProduct">Sample 003</Option>
                                <Option value="SupplierSample">Sample 004</Option>
                                <Option value="BinSample">Sample 005</Option>
                                <Option value="FinalProduct">Sample 006</Option>



                            </Select>
                        </Col>


                    </Row> */}
                    <br />
                   
                    

                        <TestTrialCard /> 
                    {this.state.tabPosition == 'BinSample' ?

                        <TestTrialCardBin /> : ''}

                    <br />
                    {this.state.tabPosition == 'SupplierSample' ?

                        <TestTrialSupplier /> : ''}


                        

                </div>
                
            </React.Fragment>
        );
    }
}

export default TestTrailRawMaterial;