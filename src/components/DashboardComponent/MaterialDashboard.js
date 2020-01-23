import React from 'react';
import { Breadcrumb, Statistic, Card, Row, Col, Icon, Timeline, Divider, Progress, Table, Button } from 'antd';
import ChartBar from './assets/ChartBar';
import ChartPolar from './assets/ChartPolar';
//import PrimeReact from './PrimeReact';




class MaterialDashboard extends React.Component {

    //Table Declaration
    state = {
        filteredInfo: null,
        sortedInfo: null,
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

    setIdSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'id',
            },
        });
    };



    componentDidMount() {
    }

    render() {

        return (
            <React.Fragment>
                <Row>
                    <Col span={23}>
                        <Breadcrumb style={{
                            marginBottom: '6px',
                            marginTop: '-10px'
                        }}>

                            <Breadcrumb.Item>Dashboard Component</Breadcrumb.Item>
                            <Breadcrumb.Item>Testing Dashboard</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col span={1} >
                        <div id="components-dropdown-demo-dropdown-button" style={{ marginLeft: "-2.1em" }}>
                            {/* <DashboardConfig /> */}
                        </div>
                    </Col>
                </Row>
 
                <div>



                    <div>
                        <br />
                    </div>

                    <Row style={{ margin: "-20px 0 0 0 " }}>
                        <Col span={12}>
                            <ChartBar />
                        </Col>
                        <Col span={12}>
                            <Card title="Available Materials" style={{ borderRadius: "5px", margin: "0 0 0 5px" }}>
                                <div >
                                    <label>Cement</label>
                                    <Progress
                                        strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#87d068',
                                        }}
                                        percent={70} status="active"
                                    />
                                    <label>Admixture</label>
                                    <Progress
                                        strokeColor={{
                                            '0%': '#eee000',
                                            '100%': '#766766',
                                        }}
                                        percent={20} status="active"
                                    />
                                    <label>River Sand</label>
                                    <Progress
                                        strokeColor={{
                                            '0%': '#11FF00',
                                            '100%': '#91C8F9',
                                        }}
                                        percent={60} status="active"
                                    />
                                    <label>M Sand</label>
                                    <Progress
                                        strokeColor={{
                                            '0%': '#F60C0C',
                                            '100%': '#171515',
                                        }}
                                        percent={25} status="active"
                                    />
                                    <label>Coarse Aggregate</label>
                                    <Progress
                                        strokeColor={{
                                            '0%': '#095725',
                                            '100%': '#B1FF29',
                                        }}
                                        percent={50} status="active"
                                    />
                                    <label>Unwash Sand</label>
                                    <Progress
                                        strokeColor={{
                                            '0%': '#FFF700',
                                            '100%': '#4BF90C',
                                        }}
                                        percent={40} status="active"
                                    />
                                     <label> Fly Ash</label>
                                    <Progress
                                        strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#87d068',
                                        }}
                                        percent={10} status="active"
                                    />
                            
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <div>
                        <br />
                    </div>
                    <Row style={{ margin: "-10px 0 0 0 " }}>
                        <Col span={12}>
                            <ChartPolar />
                        </Col>
                        <Col span={12}>


                            <Card title="Material Testing Stages" style={{ minHeight: '22.4rem', height: '22.4rem', borderRadius: "5px", margin: "0 0 0 5px" }}>
                                <Timeline>
                                    <Timeline.Item color="green">Create New Material Details</Timeline.Item>
                                    <Timeline.Item color="green">Add New New Supplier Details</Timeline.Item>
                                    <Timeline.Item color="red">
                                        Add supplier Sample details
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        Test the supllier Sample materials
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        Get the Observe results
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        Finalized the results to load the materials
                                    </Timeline.Item>
                                </Timeline>
                            </Card>

                        </Col>

                    </Row>

                    <div>
                        <br />
                    </div>

                   
                </div>

            </React.Fragment>

        );
    }
}

export default MaterialDashboard;
