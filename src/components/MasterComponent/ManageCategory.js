import React, { Component } from 'react';
import { Tabs, Breadcrumb, Input, Col, Row, Select, Icon, Divider, Form, Button, Table } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import MaterialTable from 'material-table';
const { TabPane } = Tabs;

const Search = Input.Search;

const { Option } = Select;



class ManageCategory extends Component {


    //Table components 
    state = {

        // Main Category
        columns: [
            { title: 'Code', field: 'code' },
            { title: 'Category', field: 'category' },
        ],
        data: [
            { code: 'CAT/CM', category: 'Cement' },
            { code: 'CAT/AG', category: 'Aggregate', },
            { code: 'CAT/CH', category: 'Admixture' },
            { code: 'CAT/CO', category: 'Concrete', },
        ],

        // Material Nature
        columns1: [
            { title: 'Code', field: 'code' },
            { title: 'Nature', field: 'nature' },
        ],
        data1: [
            { code: 'NA001', nature: 'Finus' },
            { code: 'NA002', nature: 'Blended', },
            { code: 'NA003', nature: 'Crushed' },
            { code: 'NA004', nature: 'Liquid', },
        ],

        //User Roles
        columns2: [
            { title: 'Code', field: 'code' },
            { title: 'User', field: 'user' },
        ],
        data2: [
            { code: 'QC/MA', user: 'QC Manager' },
            { code: 'QC/AM', user: 'QC Assistent Manager', },
            { code: 'QC/ST', user: 'QC staff' },
            { code: 'QC/TE', user: 'QC Technician', },
            { code: 'QC/PM', user: 'Plant manager', },
        ],

        //Material Types
        columns3: [
            { title: 'Code', field: 'code' },
            { title: 'Type', field: 'type' },
        ],
        data3: [

            { code: 'RM', type: 'Raw Material' },
            { code: 'FP', type: 'Finish Product', },
        ],

        //Units
        columns4: [
            { title: 'Code', field: 'code' },
            { title: 'Name', field: 'name' },
            { title: 'Unit', field: 'unit' },
        ],
        data4: [

            { code: '001', name: 'Weight', unit: "g" },
            { code: '002', name: 'Weight', unit: "kg" },
            { code: '003', name: 'Force', unit: "N" },
            { code: '004', name: 'pH', unit: "ph" },
            { code: '005', name: 'Lenght', unit: "mm" },
            { code: '006', name: 'Lenght', unit: "cm" },
            { code: '007', name: 'Day', unit: "day" },
            { code: '008', name: 'Time', unit: "min" },
            { code: '009', name: 'Time', unit: "sec" },
            { code: '010', name: 'Time', unit: "hour" },


        ],

        //Equipments
        columns5: [
            { title: 'Code', field: 'code' },
            { title: 'Equipment', field: 'equipment' },
        ],
        data5: [

            { code: 'L/SS/24', equipment: 'Sieve Shaker' },
            { code: 'L/DB/06', equipment: 'Digital Balance' },
            { code: 'L/AM/48', equipment: 'AIV Test Machine' },
            { code: 'L/PB/49', equipment: 'Phycnometer' },
            { code: 'L/SG/36', equipment: 'Specific Gravity Aparatus' },
            { code: 'L/FI/33', equipment: 'Flakiness Gauge' },
            { code: 'L/pH/17', equipment: 'pH Meter' },
            { code: 'L/GH/22', equipment: 'Glass Hydrometer' },
        ],


        //Sample Category
        columns6: [
            { title: 'Code', field: 'code' },
            { title: 'Sample Category', field: 'sample' },
            { title: 'Description', field: 'description' },
        ],
        data6: [

            { code: 'SAM/INC', sample: 'Incomming Sample', description: "Incomming raw materials" },
            { code: 'SAMP/PRO', sample: 'Process Sample', description: "Raw material prpcess" },
            { code: 'SAMP/FP', sample: 'Finish Product Sample', description: "Finish products" },



        ],
    }
    render() {


        //For tabs-start
        const renderTabBar = (props, DefaultTabBar) => (
            <Sticky bottomOffset={80}>
                {({ style }) => (
                    <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
                )}
            </Sticky>
        );
        //For tabs -end


        //Manage sub category columns and data
        const columns = [
            { title: 'Sub Category Code', dataIndex: 'code', key: 'code' },
            { title: 'Sub Category', dataIndex: 'sub', key: 'sub' },
            { title: 'Main Category', dataIndex: 'main', key: 'main' },
            {
                title: 'Action', key: 'operation', render: () => (
                    <span><a><Icon type="edit" /></a> <Divider type="vertical" />
                        <a><Icon type="delete" /></a></span>)
            }
        ];

        const data = [
            { key: 1, code: 'CAT/AG/FN', sub: 'Fine aggregate', main: 'Aggregate' },
            { width: '10%', key: 2, code: 'CAT/AG/CR', sub: 'Coarse aggregate', main: 'Aggregate' },
            { width: '10%', key: 3, code: 'CAT/CH/AD', sub: 'Chemical', main: 'Admixture' },
            { width: '10%', key: 3, code: 'CAT/CH/AD', sub: 'Mineral', main: 'Admixture' },
            { width: '10%', key: 4, code: 'CAT/CO/GR', sub: 'Grade', main: 'Concrete' },
            { width: '10%', key: 5, code: 'CAT/CM/OPC', sub: 'OPC', main: 'Cement' },
            { width: '10%', key: 6, code: 'CAT/CM/PPC', sub: 'PPC', main: 'Cement', },
            { width: '10%', key: 6, code: 'CAT/CM/SI', sub: 'Silica', main: 'Cement', },
        ];

        //Manage euip parameter columns and data
        const columns2 = [
            { title: 'Parameter Code', dataIndex: 'code', key: 'code' },
            { title: 'Equipement', dataIndex: 'equip', key: 'equip' },
            { title: 'Location', dataIndex: 'location', key: 'location' },
            { title: 'Parameter', dataIndex: 'parameter', key: 'parameter' },
            { title: 'Unit', dataIndex: 'unit', key: 'unit' },
          
            {
                title: 'Action', key: 'operation', render: () => (
                    <span><a><Icon type="edit" /></a> <Divider type="vertical" />
                        <a><Icon type="delete" /></a></span>)
            }
        ];

        const data2 = [
            { key: 1, code: 'PA/0001', equip:'Pan',location: 'Peliyagoda', parameter: 'Weight of Pan', unit: 'g', value: '244' },
            { width: '10%', key: 2, code: 'PA/0002',equip:'Oven', location: 'Peliyagoda', parameter: 'Weight of Oven', unit: 'g', value: '360' },

        ];


        return (
            <React.Fragment>
                <Breadcrumb style={{
                    margin: '10px 0'
                }}>
                    <Breadcrumb.Item>Materials</Breadcrumb.Item>
                    <Breadcrumb.Item>Category</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{
                    padding: 16,
                    background: '#eef6fc',
                    minHeight: '500px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                }}>
                    <div>
                        <StickyContainer>
                            <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                                <TabPane tab="Main Category" key="1" style={{ height: 450 }}>


                                    {/* For Category Table*/}

                                    <MaterialTable
                                        fixedHeader={false} style={{ width: "auto", tableLayout: "auto", size: "small" }}
                                        title="Manage Category"
                                        columns={this.state.columns}
                                        data={this.state.data}

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
                                    />


                                </TabPane>

                                {/* Sub category table tab */}

                                <TabPane tab="Sub Category" key="2">
                                    <div
                                        style={{
                                            padding: 12,
                                            background: '#eef6fc',
                                            minHeight: '500px',
                                            marginTop: '10px',
                                            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                                        }}>

                                        <div>

                                            <Row>

                                                <Col span={5}>
                                                    <Form.Item >
                                                        <Input
                                                            placeholder="Sub category Code"

                                                            style={{ width: 160 }}

                                                        />
                                                    </Form.Item>

                                                </Col>
                                                <Col span={5}>
                                                    <Form.Item >
                                                        <Input
                                                            placeholder="Sub category Name"

                                                            style={{ width: 160 }}

                                                        />
                                                    </Form.Item>

                                                </Col>
                                                <Col span={5}>
                                                    <Form.Item >
                                                        <Select
                                                            style={{ width: 160, }}
                                                            placeholder="Select the Category"

                                                        >
                                                            <Option value="cement">Cement</Option>
                                                            <Option value="chemical"> Chemical</Option>
                                                            <Option value="aggregate ">Aggregate</Option>
                                                            <Option value="concrete"> Concrete</Option>

                                                        </Select>
                                                    </Form.Item>

                                                </Col>

                                                <Col span={5}>
                                                    <a > <Button type="primary"
                                                        style={{ width: 100, pointerEvents: 'none' }}   >
                                                        Add </Button></a>
                                                </Col>

                                                <Col span={5}>
                                                    <Search
                                                        placeholder=" Search ......"
                                                        onSearch={value => console.log(value)}
                                                        style={{ width: 215, marginLeft: '150px', marginTop: '-30px' }}
                                                        enterButton
                                                    />
                                                </Col>
                                            </Row>

                                            <Table
                                                style={{ fontSize: '6px' }}
                                                className="components-table-demo-nested"
                                                columns={columns}

                                                dataSource={data}
                                                size="small" />

                                        </div>

                                    </div>
                                </TabPane>

                                {/* Material Nature table tab */}

                                <TabPane tab="Material Nature" key="3">
                                    <MaterialTable
                                        fixedHeader={false} style={{ width: "auto", tableLayout: "auto", size: "small" }}
                                        title="Manage Category"
                                        columns={this.state.columns1}
                                        data={this.state.data1}

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
                                    />
                                </TabPane>

                                {/* User table tab */}
                                <TabPane tab="User Roles" key="4">
                                    <MaterialTable
                                        fixedHeader={false} style={{ width: "auto", tableLayout: "auto", size: "small" }}
                                        title="Manage Category"
                                        columns={this.state.columns2}
                                        data={this.state.data2}

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
                                    />
                                </TabPane>

                                <TabPane tab="Equipment Based Parameter" key="5">
                                    <div
                                        style={{
                                            padding: 12,
                                            background: '#eef6fc',
                                            minHeight: '500px',
                                            marginTop: '10px',
                                            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                                        }}>

                                        <div>

                                            <Row>

                                                <Col span={4}>
                                                    <Form.Item >
                                                        <Input
                                                            placeholder="Parameter Code"

                                                            style={{ width: 150 }}

                                                        />
                                                    </Form.Item>

                                                </Col>

                                                <Col span={4}>
                                                    <Form.Item >
                                                    <Select
                                                            style={{ width: 150}}
                                                            placeholder="Equipment"

                                                        >
                                                            <Option value="cement">Pan</Option>
                                                            <Option value="chemical"> Oven</Option>
                                                            <Option value="aggregate ">Phycnometer</Option>
                                                           

                                                        </Select>
                                                    </Form.Item>

                                                </Col>

                                                <Col span={4}>
                                                    <Form.Item >
                                                        <Input
                                                            placeholder="Parameter"

                                                            style={{ width: 150 }}

                                                        />
                                                    </Form.Item>

                                                </Col>

                                                <Col span={4}>
                                                    <Form.Item >
                                                        <Select
                                                            style={{ width: 150, }}
                                                            placeholder="Unit"

                                                        >
                                                            <Option value="cement">N</Option>
                                                            <Option value="chemical"> g</Option>
                                                            <Option value="aggregate ">mm</Option>
                                                            <Option value="concrete"> cm</Option>

                                                        </Select>
                                                    </Form.Item>

                                                </Col>
                                                <Col span={4}>
                                                    <Form.Item >
                                                        <Select
                                                            style={{ width: 150, }}
                                                            placeholder="Location"

                                                        >
                                                            <Option value="cement">Peliyagoda</Option>
                                                            <Option value="chemical"> Ratmalana</Option>
                                                            <Option value="aggregate ">Jaffna</Option>
                                                            <Option value="concrete"> Trincomalee</Option>

                                                        </Select>
                                                    </Form.Item>

                                                </Col>

                                                <Col span={4}>
                                                    <a > <Button type="primary"
                                                        style={{ width: 80, pointerEvents: 'none', marginLeft: '30px', marginTop: '5px' }}   >
                                                        Add </Button></a>
                                                </Col>
                                            </Row>

                                            <Table
                                                style={{ fontSize: '6px' }}
                                                className="components-table-demo-nested"
                                                columns={columns2}

                                                dataSource={data2}
                                                size="small" />

                                        </div>

                                    </div>
                                </TabPane>

                                {/* Material Type master */}

                                <TabPane tab="Material Type" key="7" style={{ height: 450 }}>
                                    <MaterialTable
                                        fixedHeader={false} style={{ width: "auto", tableLayout: "auto", size: "small" }}
                                        title="Manage Material Type"
                                        columns={this.state.columns3}
                                        data={this.state.data3}

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
                                    />
                                </TabPane>

                                {/* Unit master */}

                                <TabPane tab="Units" key="8" style={{ height: 450 }}>
                                    <MaterialTable
                                        fixedHeader={false} style={{ width: "auto", tableLayout: "auto", size: "small" }}
                                        title="Manage Units"
                                        columns={this.state.columns4}
                                        data={this.state.data4}

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
                                    />
                                </TabPane>


                                {/* Equipment master */}

                                <TabPane tab="Equipments" key="9" style={{ height: 450 }}>
                                    <MaterialTable
                                        fixedHeader={false} style={{ width: "auto", tableLayout: "auto", size: "small" }}
                                        title="Manage Equipments"
                                        columns={this.state.columns5}
                                        data={this.state.data5}

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
                                    />
                                </TabPane>


                                {/* Sample Category master */}

                                <TabPane tab="Sample Category" key="10" style={{ height: 450 }}>
                                    <MaterialTable
                                        fixedHeader={false} style={{ width: "auto", tableLayout: "auto", size: "small" }}
                                        title="Manage Sample Category"
                                        columns={this.state.columns6}
                                        data={this.state.data6}

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
                                    />
                                </TabPane>
                            </Tabs>
                        </StickyContainer>,
            </div>
                </div>
            </React.Fragment>
        );


    }
}

export default ManageCategory;