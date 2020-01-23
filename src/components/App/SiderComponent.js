import React from "react";
import { connect } from "react-redux";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
//import './Dashboard.css';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderComponent extends React.Component {
  logout = () => { };
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.sidebar.isCollapsed}
        width={240}
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          boxShadow: "2px 0 6px rgba(0,21,41,.35)"
        }}
      >

        <div className="logo" >Tokyo Supermix</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
        >
          {/* Dashboard Menu -----------------------------------------------------------------*/}
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="/TestDash">
                <Icon type="tool" /><span>Testing</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to="/dashboard/Supplier">
                <Icon type="team" /><span>Supplier</span>
              </Link>
            </Menu.Item>

          </SubMenu>

          {/* Product Administration Menu -----------------------------------------------------------------*/}


          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="key" />
                <span>Master</span>
              </span>
            }
          >
            <Menu.Item key="19">
              <Link to="/plantmaster">
                <Icon type="bank" /><span> Plant Master</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="20">
              <Link to="/employee">
                <Icon type="user" /><span> QC Employee</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="22">
              <Link to="/supplier/managesupplier">
                <Icon type="team" /><span>Manage Supplier</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="23">
              <Link to="/customer/managecustomer">
                <Icon type="user-add" /><span>Manage Customer</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="30">
              <Link to="/category">
                <Icon type="menu" />
                <span>Category</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="10">
              <Link to="/TestMaster">
                <Icon type="container"></Icon>
                <span>Test Master Creation</span>
              </Link>
            </Menu.Item>




          </SubMenu>



          {/* Company Administration Menu -----------------------------------------------------------------*/}



          {/* Company Menu -----------------------------------------------------------------*/}
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="bars" />
                <span>Materials</span>
              </span>
            }
          >
            <Menu.Item key="7">
              <Link to="/rawmaterial/managerawmaterials">
                <Icon type="profile" />
                <span> Material Master</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="40">
              <Link to="/MixDesigns">
                <Icon type="database" />
                <span> Mix Design</span>
              </Link>
            </Menu.Item>


          </SubMenu>

          <SubMenu
            key="sub3.1"
            title={
              <span>
                <Icon type="appstore" />
                <span> Samples</span>
              </span>
            }
          >


            <Menu.Item key="5">
              <Link to="/sample/supplierSamples">
                <Icon type="solution" /><span> Incomming Material</span></Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/binsamples">
                <Icon type="rest" /><span> Process</span></Link>
            </Menu.Item>
            <Menu.Item key="25">
              <Link to="/finishProductSamples">
                <Icon type="block" /><span> Finish Product</span></Link>
            </Menu.Item>

          </SubMenu>


          {/* Defect Menu -----------------------------------------------------------------*/}
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="alert" />
                <span>Testing</span>

              </span>
            }
          >
            
            <Menu.Item key="11">
              <Link to="/FinalTestConfig">
                <Icon type="cluster"></Icon>
                <span>Test Configuration</span>

              </Link>
            </Menu.Item>

            <Menu.Item key="31">
              <Link to="/alltestingcard">
                <Icon type="monitor"></Icon>
                <span> TestTrial for Materials</span>

              </Link>
            </Menu.Item>
            
            <Menu.Item key="12">
              <Link to="/TestResultNew">
                <Icon type="file-search"></Icon>
                <span> Test Results</span>

              </Link>
            </Menu.Item>

            <Menu.Item key="33">
              <Link to="/finalProductTestResults">
                <Icon type="file-search"></Icon>
                <span> FinalProduct TestResults</span>

              </Link>
            </Menu.Item>


          </SubMenu>



          <SubMenu
            key="sub7"
            title={
              <span>
                <Icon type="printer" />
                <span>Reports</span>
              </span>
            }
          >
           
            <Menu.Item key="21">
              <Link to="/Report1">
                <Icon type="export"></Icon>
                <span> View Reports</span>
              </Link>
            </Menu.Item>


          </SubMenu>

          <SubMenu
            key="sub6"
            title={
              <span>
                <Icon type="setting" />
                <span>Setting</span>
              </span>
            }
          >
            <Menu.Item key="13">

              <Link to="/privilage">
                <Icon type="deployment-unit"></Icon>
                <span>Privileges</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="14">
              <Link to="/profile">

                <Icon type="idcard"></Icon>
                <span>Profile Setting</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="16">
              <Link to="/auditlog">
                <Icon type="menu"></Icon>
                <span>Audit Log</span>

              </Link>
            </Menu.Item>

          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

function mapStateToProps(state) {
  return {
    sidebar: state.isCollapsed
  };
}

export default connect(mapStateToProps)(SiderComponent);