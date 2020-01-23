import React from 'react'
import { Form, Icon, Input, Button, Checkbox,Row,Col,Select } from 'antd';
import './index.css';
import Img from '../../../Assets/images1.jpg';
import { width } from '@material-ui/system';
import {Link} from 'react-router-dom';
import Logo from '../../../Assets/tokyocement1.jpg'


const{Option}= Select;
class Login extends React.Component {
        handleSubmit = e => {
          e.preventDefault();
          this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
            }
          });
        };
      
        render() {
          const { getFieldDecorator } = this.props.form;
          return ( 
         <div >
           <Row>
           <Col span={12}>
           <img src={Img} alt="Logo" style={{width:'800px',height:'630px',boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.75)"}} />
</Col>
             <Col span={12}>
           {/* <style>{'body { background-color: #eef6fc; }'}</style> */}
           <div className="login-bg">
            <div className="logd">
           {/* <h1 className="h1" style={{fontFamily: '',color:'#1CB5E0',marginLeft:'130px'}}>Tokyo Cement Group </h1>  */}
           
           <img src={Logo} alt="Logo" style={{height:'80px',width:'400px',marginLeft:'150px',marginTop:'-50px'}} />
           {/* <div>
           <span style={{marginLeft:'280px',fontWeight:'bold',fontSize:'20px',fontFamily: 'fantasy,serif'}}>Tokyo Cement Group</span>
           </div> */}
           
                <div className="login-card" style={{width:'450px',height:'350px',marginLeft:'130px',paddingLeft:'50px', boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.75)",marginTop:'20px',background: '#F2F9F5',}}>
                 
                  <Form onSubmit={this.handleSubmit} className="login-form">
                 
                <br/>
                  {/* <Icon type="user" style={{ color: 'black' ,paddingLeft:'170px',fontSize:'30px'}} /> */}
          <h3 className="h1" style={{color:'black',marginTop:'-50px'}}>Log in to your account</h3>
          <div style={{marginTop:'30px'}}>
                    <Form.Item>
                      {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                      })(
                        <Input
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Username"
                        />,
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                      })(
                        <Input
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="password"
                          placeholder="Password"/>,
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('plant', {
                        rules: [{ required: true, message: 'Please input your Plant!' }],
                      })(
                        <Select prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="Plant"
                        placeholder="Select the Plant">
                          
                          <Option value="cement">peliyagoda</Option>
                          <Option value="admixture"> Trincomale</Option>
                          <Option value="riverSand ">Jaffna</Option>
                          <Option value="riverSand ">Ratmalana</Option>
                         
                          </Select>
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })
                       (<Checkbox>Remember me</Checkbox>)
                      }
                      <a  href=""className="login-form-forgot" 
                      >
                        Forgot password?
                      </a>
                     <Link to="TestDash"> <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                      </Button></Link>
                   
                    </Form.Item>
                    </div>
                  
                 
                  </Form>

                
           
               
          
                </div>

             
               
            </div>
            <div style={{marginLeft:'310px',marginTop:'-60px'}}>
                  <a className="fa fa-facebook" style={{ background: '#55ACEE',
  color: 'white',width:'35px',textAlign:'center',height:'35px',borderRadius:'20px',paddingTop:'10px',marginTop:'80px',marginLeft:'20px'}}></a>
 <a className="fa fa-twitter" style={{ background: '#55ACEE',
  color: 'white',width:'35px',textAlign:'center',height:'35px',borderRadius:'20px',paddingTop:'10px',marginLeft:'25px'}}></a>
   <a className="fa fa-linkedin" style={{ background: '#55ACEE',
  color: 'white',width:'35px',textAlign:'center',height:'35px',borderRadius:'20px',paddingTop:'10px',marginLeft:'25px'}}></a>
                  </div>
            </div>
            </Col>
           
            </Row>
         </div>
          );
        }
      }
      const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

      export default WrappedNormalLoginForm;