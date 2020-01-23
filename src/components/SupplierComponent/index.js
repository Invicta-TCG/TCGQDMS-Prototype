import React from 'react';
import {
    Breadcrumb
} from 'antd';
import Supplier from '../SupplierComponent/ManageSuppliers';

class ManageSupplier extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount(){
    }

    render() {
        
        return (
            <React.Fragment>
                <Breadcrumb style={{
                    margin: '16px 0',fontSize:'13px'
                }}>
                    <Breadcrumb.Item>ManageSupplier</Breadcrumb.Item>
                    <Breadcrumb.Item>Supplier</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                    padding: 12,
                    background: '#eef6fc',
                    minHeight: '500px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                }}>
              
               <Supplier/>
               
            
                </div>
                
            </React.Fragment>

        );
    }
}

export default ManageSupplier;
