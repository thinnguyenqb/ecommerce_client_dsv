import React, { useState } from "react";
import {
  Input, Layout, Col, Row, Button, Upload, Modal, Select, Form
} from "antd";
import HeaderSeller from "../../../components/seller/HeaderSeller/HeaderSeller";
import SideNav from "../../../components/seller/SiderLeft/SiderLeft";
import "./AddProduct.scss";
import { PlusCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import InputCategory from "../../../components/seller/InputCategory/InputCategory";
import InputSubCategory from "../../../components/seller/InputSubCategory/InputSubCategory";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function ProductAdd({ seller, product, brand, createProduct, getListBrand, getListCategory, logout }) {
  const { Content } = Layout;
  const { TextArea } = Input;
  const { Option } = Select;
  const initialInputValue = {
    nameValue: "",
    categoryValue: "",
    subCategoryValue: "",
    brandValue: "",
    priceValue: 1.0,
    sizeValue: ["S"],
    colorValue: [
      {
        code: "#ff5f6d",
        name: "Pink",
      },
    ],
    quantityValue: 1,
    descriptionValue: "No decription",
  };
  const keyMessage = "updatable";

  const category = useSelector((state) => state.category);
  const [optionCategory, setOptionCategory] = useState({})
  const [optionSubCategory, setOptionSubCategory] = useState([])
  console.log(optionSubCategory)
  const [sizes, setSizes] = useState(["S", "M", "L"]);
  const [colors, setColors] = useState([
    {
      code: "#ff5f6d",
      name: "Pink",
    },
    {
      code: "rgba(255, 195, 113, 0.5)",
      name: "Pale yellow",
    },
    {
      code: "rgba(95, 109, 255, 0.5)",
      name: "Pale blue",
    },
    {
      code: "rgba(255, 161, 95, 0.5)",
      name: "Orange",
    },
    {
      code: "rgba(61, 61, 63, 0.5)",
      name: "Pale black",
    },
  ]);
  const [previewImage, setPreviewImage] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [
    {
      nameValue,
      categoryValue,
      subCategoryValue,
      brandValue,
      priceValue,
      sizeValue,
      colorValue,
      quantityValue,
      descriptionValue,
    },
    setInputValue,
  ] = useState(initialInputValue);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleUploadFile = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnChangeSelectBrand = (key) => {
    setInputValue((prevState) => ({ ...prevState, brandValue: key }));
  };

  const handleFormSubmit = async (e) => {
    
  };


  return (
    <div className="product-add-page">
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>

      <Content className="body-page">
        <Row>
          <Col span={4} className="container-side-nav">
            <SideNav selectDefault="4" />
          </Col>

          <Col span={20} className="container-content">
            <HeaderSeller logout={logout} namePage="container-header" />

            <Form onSubmit={handleFormSubmit} encType="multipart/form-data" className="container-props">
              <Form.Item className="container-photos">
                <Row>
                  <Col className="name-props photos" span={3}>
                    <p>PHOTOS</p>
                  </Col>
                  <Col span={20} offset={1}>
                    <Upload
                      customRequest={handleUploadFile}
                      accept=".jpg"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                      multiple={true}
                    >
                      {fileList.length >= 4 ? null : (
                        <div>
                          <PlusCircleOutlined />
                          <div className="ant-upload-text">Upload</div>
                        </div>
                      )}
                    </Upload>

                    <p className="note">
                      You can add up to 4 photos. The 1st photo will be set as
                      cover (main photo).
                    </p>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item className="container-input">
                <Row>
                  <Col className="name-props" span={3}>
                    <p>NAME</p>
                  </Col>
                  <Col span={20} offset={1}>
                    <Input
                      className="input"
                      placeholder="Enter name product..."
                      // value={nameValue}
                      name="nameValue"
                      // onChange={handleOnChangeInput}
                    />
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item className="container-select">
                <InputCategory category={category} setOptionCategory={setOptionCategory}/>
              </Form.Item>

              <Form.Item className="container-select">
                <InputSubCategory category={category} optionCategory={optionCategory} setOptionSubCategory={setOptionSubCategory} />
              </Form.Item>
              <Form.Item className="container-select">
                <Row>
                  <Col className="name-props" span={3}>
                    <p>BRAND</p>
                  </Col>
                  <Col span={20} offset={1}>
                    <Select
                      className="select"
                      placeholder="Please select brand"
                      name="brandValue"
                      onChange={handleOnChangeSelectBrand}
                    >
                      <Option value=".com">Zara</Option>
                      <Option value=".jp">H&M</Option>
                      <Option value=".cn">Dior</Option>
                      <Option value=".org">Chanel</Option>
                    </Select>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item className="container-input">
                <Row>
                  <Col className="name-props" span={3}>
                    <p>PRICE($)</p>
                  </Col>
                  <Col span={20} offset={1}>
                    <Input
                      className="input"
                      value={priceValue}
                      name="priceValue"
                      placeholder="Enter price product..."
                      onChange={handleOnChangeInput}
                    />
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item className="container-select">
                <Row>
                  <Col className="name-props" span={3}>
                    <p>SIZE</p>
                  </Col>
                  <Col span={20} offset={1}>
                    <Select
                      className="select"
                      mode="multiple"
                      placeholder="Please select size"
                      name="sizeValue"
                      // onChange={handleOnChangeSelectMutiSize}
                    >
                      {sizes.map((item, index) => {
                        return <Option key={index}>{item}</Option>;
                      })}
                    </Select>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item className="container-select">
                <Row>
                  <Col className="name-props" span={3}>
                    <p>COLORS</p>
                  </Col>
                  <Col span={20} offset={1}>
                    <Select
                      className="select"
                      mode="multiple"
                      placeholder="Please select colors"
                      name="colorValue"
                      // onChange={handleOnChangeSelectMutiColor}
                    >
                      {colors.map((item, index) => {
                        return <Option key={index}>{item.name}</Option>;
                      })}
                    </Select>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item className="container-input">
                <Row>
                  <Col className="name-props" span={3}>
                    <p>QUANTITY</p>
                  </Col>
                  <Col span={20} offset={1}>
                    <Input
                      className="input"
                      value={1}
                      name="quantityValue"
                      //value={quantityValue}
                      placeholder="Enter quantity product..."
                      // onChange={handleOnChangeInput}
                    />
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item className="container-text-area">
                <Row>
                  <Col className="name-props" span={3}>
                    <p>DESCRIPTION</p>
                  </Col>
                  <Col span={20} offset={1}>
                    <TextArea
                      className="text-area"
                      rows={4}
                      value={descriptionValue}
                      name="decriptionValue"
                      placeholder="Enter description product..."
                      // onChange={handleOnChangeInput}
                    />
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item className="container-btn">
                <Row>
                  <Col span={4} offset={15}>
                    <Button className="btn-secondary" type="primary">
                      Cancel
                    </Button>
                  </Col>
                  <Col span={4} offset={1}>
                    <Button
                      className="btn-primary"
                      type="primary"
                      htmlType="submit"
                    >
                      Complete
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
    </div>
  );
}

export default ProductAdd;
