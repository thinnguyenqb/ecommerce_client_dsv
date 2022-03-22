import React, { useState, useEffect } from "react";
import { Row, Col, Layout, Button, Tabs } from "antd";
import "./Profile.scss";
import { Header } from "../../../components/sharedComponent/Header/Header";
import { InfoAccount } from "../../../components/customer/AccountInfo/AccountInfo";
import { FormChangePassword } from "../../../components/customer/FormChangePassword/FormChangePassword";
import { AccountEdit } from "../../../components/customer/AccountEdit/AccountEdit";
import { FooterCustomer } from "../../../components/sharedComponent/Footer/Footer";
import { useSelector } from 'react-redux';

function Profile() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  const [currentTabInfo, setCurrentTabInfo] = useState("1");
  const auth = useSelector((status) => status.auth);
  const { user } = auth;

  const [userInfo, setUserInfo] = useState({})
  const [nameUser, setNameUser] = useState("")

  useEffect(() => {
    setUserInfo(user)
    setNameUser(user.name)
  }, [user]);

  const changeTabInfo = (curr) => {
    setCurrentTabInfo(curr);
  };

  return (
    <div className="profile">
      <Header />

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
                    <InfoAccount nameUser={nameUser} userInfo={userInfo}/>
                  </Row>
                </TabPane>
                <TabPane key="2">
                  <Row>
                    <AccountEdit
                      userInfo={userInfo}
                      nameUserState={[nameUser, setNameUser]}
                      changeTabInfo={changeTabInfo}
                    />
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
