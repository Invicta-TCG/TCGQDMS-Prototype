import React from 'react';
// import CompanyEmployee from './CompanyEmployee';
import {
    Breadcrumb
} from 'antd';
import SupplierSample from '../SupplierSampleComponent/ManageSupplierSamples';

class ManageSupplierSample extends React.Component {

    /*
    Author: 
    Last Updated: dd/MM/YYYY

    Note: Please do necessary commenting and follow code standard.
      */
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
                    margin: '16px 0'
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
               <SupplierSample/>
               
            
                </div>
                
            </React.Fragment>

        );
    }
}

export default ManageSupplierSample;
