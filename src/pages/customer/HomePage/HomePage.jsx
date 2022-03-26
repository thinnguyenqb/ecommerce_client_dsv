import React from "react";
import { Layout, Row, Col } from "antd";
import "./HomePage.scss";
import IntroCarousel from "../../../components/customer/IntroCarousel/IntroCarousel";
import IntroProduct from "../../../components/customer/IntroProduct/IntroProduct";
import { FooterCustomer } from "../../../components/sharedComponent/Footer/Footer";
import { Header } from "../../../components/sharedComponent/Header/Header";
const categoryList = [
  {
    categoryName: "Men",
    categoryImage: "https://i.pinimg.com/originals/c6/97/3c/c6973c623df9bb5356d7d51bec5b056c.jpg"
  },
  {
    categoryName: "Ladies",
    categoryImage: "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1700/v1/i/588b11ad_6b84.jpg"
  },
  {
    categoryName: "Boys",
    categoryImage: "https://i.pinimg.com/originals/7e/a5/07/7ea507a6c818c6d1bb22a9e3085c3d35.jpg"
  },
  {
    categoryName: "Girls",
    categoryImage: "https://static.zara.net/photos///2022/V/0/3/p/1044/115/401/104/w/199/1044115401_1_1_1.jpg?ts=1641904856439"
  },
]
export function HomePage() {
  const { Content } = Layout;

  return (
    <div className="home-page">
      <Header />

      <Content className="body-page">
        <Row>
          <Col span={24}>
            <IntroCarousel />
          </Col>
        </Row>

        <Row className="container-intro-product" gutter={20}>
          {
            categoryList?.map((item, index) => (
              <Col span={6} key={index}>
                <IntroProduct item={item}/>
              </Col>
            ))
          }
        </Row>
      </Content>

      <FooterCustomer />
    </div>
  );
}

export default HomePage;
