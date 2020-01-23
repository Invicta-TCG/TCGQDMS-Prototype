import React from 'react';
import { Tabs, AutoComplete, Breadcrumb } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import MangeMixDesign from '../MaterialMasterCreation/ManageMixDesign';
import ManageProduct from '../TestingComponent/FinalProduct/ManageProduction';

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);

class MixDesign extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb style={{
          marginTop: '-40px 0'
        }}>
          <Breadcrumb.Item>Testing</Breadcrumb.Item>
          <Breadcrumb.Item>FP Trial Test</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 12,
            background: '#F2F9F5',
            minHeight: 'AutoComplete',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
          }}>
          <StickyContainer>
            <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
              <TabPane tab="Add Mix Design " key="1" style={{ height: "800px" }}>
                <ManageProduct />
              </TabPane>
              <TabPane tab="Manage Mix Design " key="2">

                <MangeMixDesign />
              </TabPane>
             
            </Tabs>
          </StickyContainer>
        </div>
      </React.Fragment>
    )

  }
}
export default MixDesign;



