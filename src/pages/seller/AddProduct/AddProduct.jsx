import React, { useState } from "react";
import {
  Input, Layout, Col, Row, Button, Upload, Modal, Select, Form
} from "antd";
import HeaderSeller from "../../../components/seller/HeaderSeller/HeaderSeller";
import SideNav from "../../../components/seller/SiderLeft/SiderLeft";
import "./AddProduct.scss";
import { PlusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import InputCategory from "../../../components/seller/InputCategory/InputCategory";
import InputSubCategory from "../../../components/seller/InputSubCategory/InputSubCategory";
import InputSCQ from './../../../components/seller/InputSCQ/InputSCQ';
import axios from 'axios';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function ProductAdd() {
  const { Content } = Layout;
  const { TextArea } = Input;
  const { Option } = Select;
  const {token} = localStorage.getItem("access_token")
  const initialInputValue = {
    nameValue: "",
    categoryValue: "",
    kindCategoryValue: "",
    subCategoryValue: [],
    brandValue: "",
    priceValue: 1,
    stockValue: {},
    descriptionValue: "",
  };

  const category = useSelector((state) => state.category);
  //const [nameValue, setNameValue] = useState("")
  const [optionCategory, setOptionCategory] = useState({})
  const [optionSubCategory, setOptionSubCategory] = useState([])
  const [stock, setStock] = useState([])
  
  const [previewImage, setPreviewImage] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false)
  const [inputValue, setInputValue] = useState(initialInputValue);

  const {
    nameValue,
    categoryValue,
    kindCategoryValue,
  //  subCategoryValue,
    brandValue,
    priceValue,
    descriptionValue,
  } = inputValue;

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
  const handleFormSubmit = async (e) => {
    console.log()
  };
  const handleOnChangeSelectBrand = (key) => {
    setInputValue((prevState) => ({ ...prevState, brandValue: key }));
  };
  const handleOnChangePrice = (e) => {
    const { name, value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      setInputValue({ ...inputValue, [name]: value })
    }
  };
  const handleChangeInput = e => {
    const {name, value} = e.target;
    setInputValue({...inputValue, [name]:value})
  }
  
  const handleCreateProduct = async() => {
    const data = {
      productName: nameValue,
      productCategory: categoryValue,
      productKindCategory: kindCategoryValue,
      productSubCategory: optionSubCategory,
      productBrand: brandValue,
      productStock: stock,
      productDescription: descriptionValue,
      productPrice: priceValue
    }

    const res = await axios.post(process.env.REACT_APP_API_URL + '/product/create', data, {
        headers: {Authorization: token} 
      }
    )
    console.log(res.data)
  }

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
            <HeaderSeller namePage="container-header" title={"Add product"} subTitle={"Products / Add product"}/>

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
                      value={nameValue}
                      name="nameValue"
                      onChange={handleChangeInput}
                    />
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item className="container-select">
                <InputCategory category={category} inputValue={inputValue} setInputValue={setInputValue} setOptionCategory={setOptionCategory} />
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
                      <Option value="Zara">Zara</Option>
                      <Option value="H&M">H&M</Option>
                      <Option value="Dior">Dior</Option>
                      <Option value="Chanel">Chanel</Option>
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
                      placeholder="Enter price product..."
                      value={priceValue}
                      name="priceValue"
                      onChange={handleOnChangePrice}
                    />
                  </Col>
                </Row>
              </Form.Item>
              

              <Form.Item className="container-select">
                <Row>
                  <Col className="name-props" span={3}>
                    <p>STOCK</p>
                  </Col>
                  <Col span={20} offset={1}>
                    <Button type="primary" onClick={() => setShowDrawer(true)} icon={<PlusOutlined />}>
                      Create Product Stock
                    </Button>
                    <InputSCQ showDrawer={showDrawer} setShowDrawer={setShowDrawer} stock={stock} setStock={setStock} />
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
                      name="descriptionValue"
                      placeholder="Enter description product..."
                      onChange={handleChangeInput}
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
                      onClick={handleCreateProduct}
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
