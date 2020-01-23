import React from 'react';
import {
    Breadcrumb, Row, Col, Progress, Icon, Button, Menu, message, Dropdown, Timeline, Card
} from 'antd';


import { Chart } from 'primereact/chart';
import ChartBar from './assets/ChartBar';

import './index.css';

// doughnut data
const doughnutData = {
    labels: ['Pending Status', 'Checked Status', 'Rejected Status'],
    datasets: [
        {
            data: [100, 17, 20],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};

// data for line chart
const lineChartData = {
    labels: ['First Week', '2nd week', '3rd Week', '4th Week'],
    datasets: [
        {
            label: 'Tested Sample',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#e41749',
            borderColor: '#e41749'
        },
        {
            label: 'Pending Test',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#004d61',
            borderColor: '#004d61'
        }
    ]
};

// handling the menu for filter
function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
}


// filter icon specs
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <Icon type="user" />
            Type 1
      </Menu.Item>
        <Menu.Item key="2">
            <Icon type="user" />
            Type 2
      </Menu.Item>
        <Menu.Item key="3">
            <Icon type="user" />
            Type 3
      </Menu.Item>
    </Menu>
);


class SupplierDashboard extends React.Component {
    state = {
        percent: 70
    };
    /*
    Author: 
    Last Updated: dd/MM/YYYY

    Note: Please do necessary commenting and follow code standard.
      */
    // constructor(props) {
    //     super(props);
    // }



    componentWillMount() {
    }



    render() {


        return (
            <React.Fragment>

                {/* BreadCrumbs */}

                <Row>
                    <Col span={23}>
                        <Breadcrumb style={{
                            marginBottom: '6px',
                            marginTop: '-10px'
                        }}>
                            <Breadcrumb.Item>Dashboard Component</Breadcrumb.Item>
                            <Breadcrumb.Item>Supplier Dashboard </Breadcrumb.Item>

                        </Breadcrumb>
                    </Col>
                    <Col span={1}>
                        <div id="components-dropdown-demo-dropdown-button" style={{ marginLeft: "-2.1em" }}>

                        </div>
                    </Col>
                </Row>


                {/* dashboard starts here  */}
                <div className="gutter-example" style={{ textAlign: "center" }}>

                    {/* the embedded and seperatd row  - row1 */}
                    <Row gutter={25}>

                        {/* opened defects box */}
                        <Col className="gutter-row" span={6} style={{ minHeight: "4em" }}>

                            {/* opened defects box */}
                            <div className="gutter-box">
                                <div
                                    style={{
                                        padding: "10px 0 10px 0",
                                        background: '#fff',
                                        minHeight: '80%',
                                        textShadow: " 1px 6px 7px #c0c1c4",
                                        border: "#605877",
                                        zIndex: "5000",
                                        borderRadius: "0.2em",
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                                    }} className="res">
                                    <div>
                                        <h1>Total Samples</h1>
                                        <br></br>
                                        <div>
                                            <Progress strokeColor="454d66" type="dashboard" percent="60" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* fixed defects box */}
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                <div
                                    style={{
                                        padding: "10px 0 10px 0",
                                        background: '#fff',
                                        textShadow: " 1px 6px 7px #c0c1c4",
                                        border: "#605877",
                                        zIndex: "5000",
                                        borderRadius: "0.2em",
                                        minHeight: '80%',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                                    }}>
                                    <div>
                                        <h1>Tested Samples</h1>
                                        <br></br>
                                        <div>
                                            <Progress strokeColor="ff8a5c" type="dashboard" percent="20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* reopened defects box */}
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                <div
                                    style={{
                                        padding: "10px 0 10px 0",
                                        background: '#fff',
                                        border: "#605877",
                                        textShadow: " 1px 6px 7px #c0c1c4",
                                        zIndex: "5000",
                                        borderRadius: "0.2em",
                                        minHeight: '80%',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                                    }}>
                                    <div>
                                        <h1>Pending Samples</h1>
                                        <br></br>
                                        <div>
                                            <Progress strokeColor="58b368" type="dashboard" percent="30" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Rejected defects box */}
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                <div
                                    style={{
                                        padding: "10px 0 10px 0",
                                        background: '#fff',
                                        border: "#605877",
                                        textShadow: " 1px 6px 7px #c0c1c4",
                                        zIndex: "5000",
                                        borderRadius: "0.2em",
                                        minHeight: '80%',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                                    }}>
                                    <div>
                                        <h1>Accepted Samples</h1>
                                        <br></br>
                                        <div>
                                            <Progress strokeColor="e41749" type="dashboard" percent="20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
                <br />

                <Row>
                    <Col span={12}>
                        <ChartBar />
                    </Col>

                    <Col span={12}>


                        <Card title="Material Testing Stages" style={{ minHeight: '22.4rem', height: '25rem', borderRadius: "5px", margin: "0 0 0 5px" }}>
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




            </React.Fragment >

        );
    }
}

export default SupplierDashboard;
