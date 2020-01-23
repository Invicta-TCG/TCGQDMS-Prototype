import React from 'react';


import { Form, Input, Icon, Button,Modal,Row,Col,Table,Divider,Select} from 'antd';


// const { TextArea} = Input;
const { Option } = Select;

class MaterialMaterParameter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            test: [{id:"",parameter: "", unit: "",entry:''}],
            val:'',
            loading: false,
            visible: false,
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      showModal = () => {
        this.setState({
          visible: true
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };

     

    
      
      
      handleChange(i, e) {
        console.log("kkkkkkk")
         const { name, value } = e.target;
         let test = [...this.state.test];
         test[i] = {...test[i], [name]: value};
         this.setState({ test });
      }
      
   
      removeClick(i){
         let test = [...this.state.test];
         test.splice(i, 1);
         this.setState({ test });
      }
      
      

    render() {

        const columns = [
            {
              title: 'Material Code',
              dataIndex: 'code',
              key: 'code',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Description',
              dataIndex: 'dis',
              key: 'dis',
            },
            {
              title: 'Parameters',
              key: 'para',
              render: (text, record) => (
                <span>
                  <a><Icon type="form" onClick={this.showModal} /></a>
                  
                </span>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a><Icon type="edit" /></a>
                  <Divider type="vertical" />
                  <a><Icon type="delete" /></a>
                </span>
              ),
            },
          ];
          
          const data = [
            {
              key: '1',
              code: 'MS001',
              dis: 'M/S Sand',
              para: '',
              
            },
          
          ];
      
        return (
            
            <div
                style={{
                padding: 12,
                background: '#F2F9F5',
               // minHeight: AutoComplete,
                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
            }}>
<Table columns={columns} dataSource={data} size="small" />


</div>
);
    }
}

export default MaterialMaterParameter;
