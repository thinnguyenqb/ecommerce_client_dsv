import React, { useState } from "react";
import { Row, Col, Rate, Button, Divider, Radio } from "antd";
import "./ProductDetail.scss";
import { NumbericUpDown } from "../NumbericUpDown/NumbericUpDown";
import { useCart } from "react-use-cart";

export function ProductDetail({ productInfo, productId }) {
  const [sizeOption, setSizeOption] = useState("S");
  const [colorOption, setColorOption] = useState("#ff5f6d");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();


  const placementChange = (e) => {
    setSizeOption(e.target.value);
  };

  const colorChange = (e) => {
    setColorOption(e.target.value);
  };

  const handleAddToCart = () => {
    addItem({
      id: productInfo._id,
      sizeOption: sizeOption,
      colorOption: colorOption,
      price: productInfo?.productPrice,
      productImg: productInfo?.productImageUrl?.[0],
      productName: productInfo?.productName
    }, quantity)
  }
  return (
    <div className="info-product">
      <Row>
        <Col span={24}>
          <p className="header">{productInfo?.productName}</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p className="price">${productInfo?.productPrice}.00</p>
        </Col>
      </Row>

      <Row type="flex" align="middle">
        <Col span={5}>
          <Rate value={4} disabled style={{ fontSize: "2rem" }} />
        </Col>

        <Col span={6} offset={0}>
          <p className="review">{productInfo?.review?.length} Review</p>
        </Col>
      </Row>

      <Row className="row-container">
        <Col span={24}>
          <p className="name-props">Size</p>
        </Col>
      </Row>

      <Row>
        <Radio.Group value={sizeOption} onChange={placementChange}>
          <Radio.Button value="S" className="btn-size">
            S
          </Radio.Button>
          <Radio.Button value="M" className="btn-size">
            M
          </Radio.Button>
          <Radio.Button value="L" className="btn-size">
            L
          </Radio.Button>
        </Radio.Group>
        {sizeOption === "S"
          ? <>
            {"" + productInfo?.productStock?.S + " product"}
          </>
          : sizeOption === "M" ? productInfo?.productStock?.M + " product"
          : productInfo?.productStock?.L + " product"}
      </Row>

      <Row className="row-container">
        <Col span={24}>
          <p className="name-props">Color</p>
        </Col>
      </Row>
      <Row>
        <Radio.Group value={colorOption} onChange={colorChange}>
          {productInfo?.productColor?.map((item, index) => (
            <Radio.Button
              key={index}
              value={item}
              className="btn-color"
              style={{
                backgroundColor: `${item}`,
              }}
            ></Radio.Button>
          ))}
        </Radio.Group>
      </Row>

      <Row type="flex" align="middle" className="row-container">
        <Col span={5}>
          <p className="name-props">Quantity</p>
        </Col>

        <Col span={10} className="name-props">
          <NumbericUpDown quantity={quantity} setQuantity={setQuantity} />
        </Col>
      </Row>

      <Row className="row-container">
        <Button type="primary" className="btn-add-to-cart"
          onClick={() => handleAddToCart()}>
          Add to cart
        </Button>
      </Row>
      <p>
        {sizeOption}, {colorOption} , {quantity}
      </p>
      <Divider style={{ backgroundColor: "#979797" }} />

      <Row>
        <div className="descripton">
          <p className="header-descripton">Description</p>
          <div className="content-descripton">
            <span
              dangerouslySetInnerHTML={{
                __html: productInfo?.productDescription,
              }}
            />
          </div>
        </div>
      </Row>
    </div>
  );
}

export default ProductDetail;
