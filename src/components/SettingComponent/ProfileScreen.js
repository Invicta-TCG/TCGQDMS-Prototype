import React from 'react';
import {
    Breadcrumb, Row, Col, Button, Input, Icon, Divider, Form
} from 'antd';
import UserIcon from '../../Assets/user3.png';
import '../SettingComponent/Profile.css';


const { TextArea } = Input;
class ProfileScreen extends React.Component {

    state = {
        user: "U",
        color: "tomato",
        size: "10px"
    }


    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {

        return (

            <div>

                <Row gutter={12}>
                    <Col span={12}>

                        <br />
                        <div style={{ boxShadow: ' 0px 4px 5px 0px rgba(0,0,0,0.75)', width: '750px', height: '700px', background: 'white', borderRadius: '18px' }}>




                            <h4 style={{ paddingTop: '20px', marginLeft: '20px', fontSize: '26px' }}>
                                Profile
               </h4>

                            <Row style={{ marginLeft: '20px', paddingTop: '20px' }}>


                                <Col span={8} >

                                    <Form.Item label=" First Name: ">


                                        <Input
                                            placeholder=" First Name"
                                            style={{ width: '200px' }}
                                        />
                                    </Form.Item>


                                </Col>
                                <Col span={8} >

                                    <Form.Item label=" Last Name: ">


                                        <Input
                                            placeholder=" Last Name"
                                            style={{ width: '200px' }}
                                        />
                                    </Form.Item>

                                </Col>
                                <Col span={8} >

                                    <Form.Item label="Email Address: ">


                                        <Input
                                            placeholder="Email Address"
                                            style={{ width: '200px' }}
                                        />
                                    </Form.Item>

                                </Col>
                            </Row>
                            <Row style={{ marginLeft: '20px' }}>


                                <Col span={12} >

                                    <Form.Item label="Address: ">


                                        <Input
                                            placeholder=" Address"
                                            style={{ width: '300px' }}
                                        />
                                    </Form.Item>

                                </Col>

                                <Col span={12} >

                                    <Form.Item label="Phone Number: ">


                                        <Input
                                            placeholder=" Phone Number"
                                            style={{ width: '300px' }}
                                        />
                                    </Form.Item>

                                </Col>
                            </Row>
                            <Row style={{ marginLeft: '20px' }}>
                                <Col span={12} >

                                    <Form.Item label=" City: ">


                                        <Input
                                            placeholder=" City"
                                            style={{ width: '300px' }}
                                        />
                                    </Form.Item>


                                </Col>
                                <Col span={12} >

                                    <Form.Item label="Country: ">


                                        <Input
                                            placeholder=" Country"
                                            style={{ width: '300px' }}
                                        />
                                    </Form.Item>

                                </Col>

                            </Row>

                            <Row style={{ marginLeft: '20px' }}>


                                <Col span={24} >

                                    <Form.Item label="About Me: ">


                                        <TextArea
                                            placeholder=" About Me"
                                            style={{ width: '700px', height: '80px' }}
                                        />
                                    </Form.Item>

                                </Col>
                            </Row>
                            <Row>
                                <Button type="primary " style={{ marginLeft: '600px', marginTop: '20px' }}>Update Profile</Button>
                            </Row>





                        </div>
                    </Col>


                    <Col span={12}>

                        <br />


                        <div className='profile'>
                            <div className="card-background">
                                <img src={UserIcon} className="card-image" />

                            </div>
                            <div className="card-info">
                                <h1 className="username">User Name</h1>
                                <br />
                                <p className="heading">  Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            </div>

                            <div className="card-social-icon"  >
                                <i className="fa fa-instagram" style={{
                                    color: 'grey',
                                    fontSize: '24px'
                                    , padding: '15px', cursor: 'pointer'
                                }}></i>
                                <i className="fa fa-facebook-square" style={{
                                    color: 'grey',
                                    fontSize: '24px'
                                    , padding: '15px', cursor: 'pointer'
                                }}></i>
                                <i className="fa fa-youtube" style={{
                                    color: 'grey',
                                    fontSize: '24px'
                                    , padding: '15px', cursor: 'pointer'
                                }}></i>

                            </div>

                        </div>




                    </Col>


                </Row>
            </div>



        );
    }
}

export default ProfileScreen;