import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'
import './index.css';
import HeaderComponent from '../HeaderComponent';
import SiderComponent from '../SiderComponent';

// Dashboard Components
import SupplierDashboard from '../../DashboardComponent/SupplierDashboard';
import MaterialDashboard from '../../DashboardComponent/MaterialDashboard';

import ManageSupplier from '../../SupplierComponent';
import ManageSupplierSample from '../../SupplierSampleComponent';
import TestSamples from '../../TestingComponent';
import ManageRawMaterials from '../../RawMaterialComponents/ManageRawMaterials';
import ManageMaterialTesting from '../../TestingComponent/MaterialTesting';
import Product from '../../ManageConcreteMix';
import TestConfiguration from '../../TestingComponent';
import MaterialMasterCreation from '../../MaterialMasterCreation/MaterialMasterCreation';
import TestSample from '../../TestingComponent/TestSample';
import ProfileScreen from '../../SettingComponent/ProfileScreen';
// import TestParameterMaster from '../../TestingComponent/TestParameterMaster';
// import TestEquationConfig from '../../TestingComponent/MaterialTesting/TestEquationConfig';
// import TestParameterSpceification from '../../TestingComponent/MaterialTestConfiguration/TestParamatereSpecification';
import FinalTestConfig from '../../TestingComponent';
import TestMaster from '../../TestingComponent/TestMaster';
import TestDash from '../../DashboardComponent/TestDashboard';
import FinalProduct from '../../TestingComponent/FinalProduct';
import WrappedNormalLoginForm from '../Login/index';
import Side from '../../../Assets/side.jpg';
import FinshMix from "../../TestingComponent/FinalProduct/ManageFinshProductMix";
import ManageProduct from '../../TestingComponent/FinalProduct/ManageProduction';
import CompanyPrivileges from '../../PrivilegeComponents/CompanyPrivileges';
import WorkFlow from '../../SettingComponent/WorkFlow';
import AuditLog from '../../SettingComponent/AuditLog';
import ManageBinSamples from '../../BinSampleComponent';
import ManagePlant from '../../MasterComponent/MaangePlantMaster';
import ManageEmployee from '../../MasterComponent/ManageQcStaff';
import AddFPTest from '../../TestingComponent/AddFPTest';
import ViewReport from '../../ReportComponent/ViewReport';
import TestTrailRawMaterial from '../../TestingComponent/TestTrialForRawMaterial/TestTrailRawMaterial';
import AddSupplierSampleRM from '../../TestingComponent/AddSupplierSampleRM';
import ManageFinshProductSample from '../../FinishProductSampleComponent/ManageFinishProductSample';

import TestTrialCard from '../../TestingComponent/TestTrailCard/TestTrialCard';

import ManageCustomer from '../../CustomerComponent/ManageCustomers';
import AddUser from '../../SettingComponent/AddUserComponent/AddUser'
import ManageMixDesign from '../../MaterialMasterCreation/ManageMixDesign';

import ManageCategory from '../../MasterComponent/ManageCategory'

import ViewResult from '../../TestingComponent/FinalResultFP';
import Report1 from '../../ReportComponent/Report1';
import MixDesign from '../../MixDesign';
import TestTrialCardBin from '../../TestingComponent/TestTrailCard/TestTrialCardBin';
import TestTrialCardFP from '../../TestingComponent/TestTrailCard/TestTrialCard';
import AllTestingCard from '../../TestingComponent/TestTrailCard/AllTestingCard';
import FinalProductRoute from '../../TestingComponent/TestTrailCard/FinalProductRoute';
import AdMixtureRoute from '../../TestingComponent/TestTrailCard/AdMixtureRoute';
import ConcreteRoute from '../../TestingComponent/TestTrailCard/ConcreteRoute';
import TestResultNew from '../../TestingComponent/TestResultNew';
import FinalProductTestResults from '../../TestingComponent/FinalProductTestResults';


const { Content, Footer } = Layout;

class Dashboard extends React.Component {

    render() {
        return (
            <Layout style={{
                minHeight: '100vh'
            }}>

                <Route exact path="/">
                    <SiderComponent />
                </Route>

                <Layout
                    style={{

                        backgroundColor: '#dedee0'

                    }}>

                    <Route path="/">
                        <HeaderComponent />
                    </Route>

                    <Content
                        style={{
                            margin: '24px 16px 0',

                        }}>

                        <Switch>

                            <Route exact path="/login">
                                <WrappedNormalLoginForm />
                            </Route>
                            <Route path='/dashboard/Supplier'>
                                <SupplierDashboard />
                            </Route>

                            <Route path='/dashboard/material'>
                                <MaterialDashboard />
                            </Route>



                            <Route path='/supplier/managesupplier'>
                                <ManageSupplier />
                            </Route>

                            <Route path='/sample/supplierSamples'>
                                <ManageSupplierSample />
                            </Route>

                            <Route path='/rawmaterial/managerawmaterials'>
                                <MaterialMasterCreation />
                            </Route>

                            <Route path='/Material/MaterialconcreteMix'>
                                <FinshMix />
                            </Route>


                            <Route path='/MaterialTesting/managematerialtestings'>
                                <MaterialMasterCreation />
                            </Route>

                            <Route path='/TestConfiguration'>
                                <TestConfiguration />
                            </Route>

                            <Route path='/TestsampleRawMaterial'>
                                <TestSample />
                            </Route>

                            <Route path='/Profile'>
                                <ProfileScreen />
                            </Route>
                            {/* <Route path='/TestParameterMaster'>
                                <TestParameterMaster/>
                            </Route>
                            <Route path='/TestEquationConfig'>
                               <TestEquationConfig/>
                            </Route>
                            <Route path='/TestParamaterSpecification'>
                              <TestParameterSpceification/>
                            </Route>

                            <Route path='/FinalTestConfig'>
                              
                              <FinalTestConfig/>
                            </Route>
                            <Route path='/ProductParamaterMaster'>
                             <ProductParameterMaster/>
                            </Route> */}
                            <Route path='/FinalTestConfig'>
                                <FinalTestConfig />
                            </Route>
                            {/* <Route path='/dashboard/Material'>
                              <MaterialDashboard/>
                            </Route> */}

                            <Route path='/TestMaster'>
                                <TestMaster />
                            </Route>

                            <Route path='/TestDash'>
                                <TestDash />
                            </Route>

                            <Route path='/FinalProduct'>
                                <FinalProduct />
                            </Route>

                            <Route path='/finshmix'>
                                <FinshMix />
                            </Route>

                            <Route path='/manageproduct'>
                                <ManageProduct />
                            </Route>

                            <Route path='/privilage'>
                                <CompanyPrivileges />
                            </Route>

                            <Route path='/workflow'>
                                <WorkFlow />
                            </Route>

                            <Route path='/auditlog'>
                                <AuditLog />
                            </Route>

                            <Route path='/binsamples'>
                                <ManageBinSamples />
                            </Route>

                            <Route path='/plantmaster'>
                                <ManagePlant />
                            </Route>

                            <Route path='/employee'>
                                <ManageEmployee />
                            </Route>

                            <Route path='/finishProduct'>
                                <AddFPTest />
                            </Route>

                            <Route path='/supplierRawMaterial'>
                                <AddSupplierSampleRM />
                            </Route>


                            <Route path='/viewReport'>
                                <ViewReport />
                            </Route>

                            <Route path='/testTrialCard'>
                                <TestTrialCard />
                            </Route>


                            <Route path='/testTrialRawMaterial'>
                                <TestTrailRawMaterial />
                            </Route>

                            <Route path='/finishProductSamples'>
                                <ManageFinshProductSample />
                            </Route>

                            <Route path='/customer/managecustomer'>
                                <ManageCustomer />
                            </Route>

                            <Route path='/addUser'>
                                <AddUser />
                            </Route>

                            <Route path='/mixdesign'>
                                <ManageMixDesign />
                            </Route>

                            <Route path='/viewResult'>
                                <ViewResult />
                            </Route>

                            <Route path='/Report1'>

                                <Report1 />
                            </Route>

                            <Route path='/category'>
                                <ManageCategory />

                            </Route>
                            <Route path='/MixDesigns'>
                               <MixDesign/>

                            </Route>

                            <Route path='/testrialcardbin'>
                            <TestTrialCardBin/>

                            </Route>
                            <Route path='/testtrialfp'>
                            <TestTrialCardFP/>

                            </Route>
                            <Route path='/alltestingcard'>
                          <AllTestingCard/>

                            </Route>

                            <Route path='/finalproductroute'>
                        <FinalProductRoute/>

                            </Route>

                            <Route path='/AdmixtureRoute'>
                       <AdMixtureRoute/>

                            </Route>

                            <Route path='/ConcreteRoute'>
                      <ConcreteRoute/>

                            </Route>

                            <Route path='/TestResultNew'>
                     <TestResultNew/>

                            </Route>

                            <Route path='/finalProductTestResults'>
                     <FinalProductTestResults/>
                            </Route>
                        </Switch>

                    </Content>
                    <br />

                    <Footer
                        style={{
                            textAlign: 'center'
                        }}>
                        Tokyo Cement Group Quality Data Management © 2019
                    </Footer>
                </Layout>
            </Layout>

        );

    }
}

export default Dashboard;
