import React, { useState } from "react";
import { Row, Col, Layout, Button, Tabs } from "antd";
import "./styles.scss";

import { HeaderCustomer } from "./../../../components/headerCustomer/headerCustomer";
import { InfoAccount } from "./infoAccount";
import { FormChangePassword } from "./formChangePassword";
import { FormEditInfo } from "./formEditInfo";

import { FooterCustomer } from "./../../../components/footerCustomer";

function Profile() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  const [currentTabInfo, setCurrentTabInfo] = useState("1");

  const changeTabInfo = (curr) => {
    setCurrentTabInfo(curr);
  };

  return (
    <div className="profile">
      <HeaderCustomer />

      <Content className="body-page">
        <Tabs tabPosition="left" className="tab-profile" defaultActiveKey="1">
          <TabPane tab="My Account" disabled/>
          <TabPane tab="Account setting" key="1">
            <Col span={14} offset={2}>
              <Row className="container-header-profile">
                <Col span={6} className="header-content-tabpane">
                  Information
                </Col>

                <Col span={6} offset={12} className="flex-end">
                  <Button
                    className="btn-edit-info"
                    type="link"
                    onClick={() => changeTabInfo("2")}
                  >
                    Edit
                  </Button>
                </Col>
              </Row>

              <Tabs className="tab-info" activeKey={currentTabInfo}>
                <TabPane key="1">
                  <Row>
                    <InfoAccount />
                  </Row>
                </TabPane>
                <TabPane key="2">
                  <Row>
                    <FormEditInfo changeTabInfo={changeTabInfo} />
                  </Row>
                </TabPane>
              </Tabs>
            </Col>
          </TabPane>

          <TabPane tab="Change password" key="2">
            <Col span={14} offset={2}>
              <Row className="container-header-profile">
                <Col span={24} className="header-content-tabpane">
                  Change password
                </Col>
              </Row>

              <Row>
                <FormChangePassword />
              </Row>
            </Col>
          </TabPane>
        </Tabs>
      </Content>

      <FooterCustomer />
    </div>
  );
}

export default Profile;
