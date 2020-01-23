import React, { Component } from 'react'
import { Table, Switch, Button, PageHeader} from 'antd';
const columns = [
    {
        title: 'Company Admin Privillages',
        dataIndex: 'name',
        width: '15%',
        render: text => <a href=" ">{text}</a>
    },
    {
        title: 'QAQC Manager',
        width: '10%',
        render: (e, record) => (< Switch defaultChecked={e} />)
    },
    {
        title: 'QAQC Technician',
        width: '10%',
        render: (e, record) => (< Switch defaultChecked={e} />)
    },
    {
        title: 'QAQC Staff',
        width: '25%',
        render: (e, record) => (< Switch defaultChecked={e} />)
    },

];
const data = [
    {
        key: '1',
        name: 'Add Material Master'
    },
    {
        key: '2',
        name: 'Delete Material Master'
    },
    {
        key: '3',
        name: 'Edit Material Master'
    },
    {
        key: '4',
        name: 'View Material Master'
    },
    {
        key: '5',
        name: 'Add Suppliers'
    },
    {
        key: '6',
        name: 'Delete Suppliers'
    },
    {
        key: '7',
        name: 'Edit Suppliers'
    },
    {
        key: '8',
        name: 'View Suppliers'
    },
    {
        key: '9',
        name: 'Add Supplier Samples'
    },
    {
        key: '10',
        name: 'Add Supplier Samples'
    },
    {
        key: '11',
        name: 'Delete Supplier Samples'
    },
    {
        key: '12',
        name: 'Edit Supplier Samples'
    },
    {
        key: '13',
        name: 'View Supplier Samples'
    },
    {
        key: '14',
        name: 'Create Test Configuration'
    },
    {
        key: '15',
        name: 'Create Test Parameter'
    },
    {
        key: '16',
        name: 'Create New Test'
    },
    {
        key: '17',
        name: 'Trial Test Raw Material'
    },
    {
        key: '18',
        name: 'Final Product Parameter Creation'
    },
    {
        key: '19',
        name: 'Final Product Test'
    },
    {
        key: '20',
        name: 'Register New user'
    },
    {
        key: '21',
        name: 'Work Flow'
    },
    {
        key: '22',
        name: 'Manage Employee'
    },
    {
        key: '23',
        name: 'Company Dashboard'
    },
    {
        key: '24',
        name: 'Supplier Dashboard'
    },
    {
        key: '25',
        name: 'Test Dashboard'
    },
    {
        key: '26',
        name: 'Material Dashboard'
    },
    {
        key: '27',
        name: 'Staff Privilage'
    },
    {
        key: '28',
        name: 'Manager Privilage'
    },
    {
        key: '29',
        name: 'Technicial Privilage'
    },
    {
        key: '30',
        name: 'Profile Settings'
    },
 
];

export default class CompanyPrivilege extends Component {
    render() {
        const { handleSwitchChange } = this.props;
        const routes = [{
                path: 'index',
                breadcrumbName: 'Settings',
            },
            {
                path: 'first',
                breadcrumbName: 'Privilege',
            },
            {
                path: 'second',
                breadcrumbName: 'Company Privilege',
            },
        ];
        return (
            <React.Fragment>
                <PageHeader title="Company Privilege" breadcrumb={{ routes }} />
                <div
                    style={{
                    padding: '0 24px 24px 24px',
                    background: '#fff',
                    minHeight: '500px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                }}>
                    <br/>
                <Table columns={columns} dataSource={data} onChange={handleSwitchChange} pagination={{ pageSize: 10 }} size="small"/>
                <p align="right"><Button type="primary">Set Privilages</Button></p>
            </div>
            </React.Fragment>
        )
    }
}