import * as React from "react";
import "./Filter.scss";
import { Menu, Row, Col, Avatar, Button, Checkbox, Slider } from "antd";
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productFilter } from "../../../redux/actions/productAction";

export default function Fitler() {
  const location = useLocation()
  const dispatch = useDispatch()
  let query = new URLSearchParams(location.search)
  const kindCategory = query.get("kind")
  const subCategory = query.get("sub")
  const category = query.get("category")
  const sort = query.get("sort")
  const order = query.get("order")
  const page = query.get("page")
  const perPage = query.get("perPage")
  const search = query.get("search")


  const { SubMenu } = Menu;
  const styleButtonSize = {
    width: "35px",
    height: "35px",
    marginRight: "5px",
    color: "#202124",
    borderColor: "#808080",
    borderRadius: "0px",
    padding: "0px",
  };

  const styleColor = {
    width: "30px",
    height: "30px",
    backgroundColor: "#ff5f6d",
    margin: "5px",
  };

  const marks = {
    0: "$0",
    100: "$1000",
  };

    
  const onAfterChange = async (value) => {
    const data = {
      category,
      kind: kindCategory,
      sub: subCategory,
      sort,
      order,
      page,
      perPage,
      search,
      price: 0,
      perPrice: value*10
    }
    await dispatch(productFilter(data))
  }

  return (
    <div className="fitler">
      <Menu
        style={{ width: 175 }}
        defaultOpenKeys={["sub1", "sub2", "sub3", "sub4", "sub5"]}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span>Price </span>}>
          <Menu.Item style={{paddingLeft: '0px'}} key="1">
            <Row >
              <Col span={21} >
                <Slider marks={marks} defaultValue={50}  onAfterChange={onAfterChange} />
              </Col>
            </Row>
          </Menu.Item>
        </SubMenu>
        <SubMenu className="size" key="sub2" title={<span>Size </span>}>
          <Menu.Item style={{ paddingLeft: '0px' }} key="2">
            <Row >
              <Col span={8}>
                <Button type="primary" ghost style={styleButtonSize}>
                  S
                </Button>
              </Col>
              <Col span={8}>
                <Button type="primary" ghost style={styleButtonSize}>
                  M
                </Button>
              </Col>
              <Col span={8}>
                <Button type="primary" ghost style={styleButtonSize}>
                  L
                </Button>
              </Col>
            </Row>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub3" title={<span>Color </span>}>
          <Menu.Item style={{ paddingLeft: '0px', height: "100%"}} key="3">
            <Row>
              <Col span={6}>
                <Avatar style={styleColor}></Avatar>
              </Col>
              <Col span={6}>
                <Avatar style={styleColor}></Avatar>
              </Col>
              <Col span={6}>
                <Avatar style={styleColor}></Avatar>
              </Col>
              <Col span={6}>
                <Avatar style={styleColor}></Avatar>
              </Col>
              <Col span={6}>
                <Avatar style={styleColor} ></Avatar>
              </Col>
              <Col span={6}>
                <Avatar style={styleColor}></Avatar>
              </Col>
            </Row>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub4" title={<span>Brand </span>}>
          <Menu.Item style={{ paddingLeft: '0px', height: "100%"}} key="4">
            <Checkbox.Group style={{ width: "100%" }}>
              <Row>
                <Col span={24}>
                  <Checkbox value="Zara" defaultChecked={false}>
                    Zara
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="H&M" defaultChecked={false}>
                    H&M
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="Pull&Bear" defaultChecked={false}>
                    Pull&Bear
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="Dior" defaultChecked={false}>
                    Dior
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="Chanel" defaultChecked={false}>
                    Chanel
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub5" title={<span>Available </span>}>
          <Menu.Item style={{ paddingLeft: '0px', height: "100%"}} key="">
            <Checkbox.Group style={{ width: "100%"}}>
              <Row>
                <Col span={24}>
                  <Checkbox value="In-store">In-store</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="Out of stock">Out of stock</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}