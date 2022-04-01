import React, { useState, useEffect } from "react";
import { Row, Col, Rate, Button, Divider, Radio, Tag} from "antd";
import "./ProductDetail.scss";
import { NumbericUpDown } from "../NumbericUpDown/NumbericUpDown";
import { useCart } from "react-use-cart";
import { useSelector, useDispatch } from 'react-redux';
import { pushAlert } from './../../../redux/actions/alertAction';
import uuid from 'react-uuid'

export function ProductDetail({ productInfo, productId }) {
  const [sizeOption, setSizeOption] = useState("S");
  const [colorOption, setColorOption] = useState("#ff5f6d");
  const [pieceAvailable, setPieceAvailable] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  const placementChange = (e) => {
    setSizeOption(e.target.value);
  };

  const colorChange = (e) => {
    setColorOption(e.target.value);
  };

  const cart = JSON.parse(localStorage.getItem("react-use-cart"))
   
  const handleAddToCart = () => {
    let idSimilar = "";
    cart.items.forEach(element => {
      if (productInfo._id === element.productId) {
        if (
          element.colorOption === colorOption
          && element.sizeOption === sizeOption) {
          //console.log(123)
          idSimilar = element.id
        }
      }
    })

    if (auth.isLogged) {
      addItem({
        id: idSimilar ? idSimilar : uuid(),
        productId: productInfo._id,
        sizeOption: sizeOption, 
        pieceAvailable: pieceAvailable,
        colorOption: colorOption,
        price: productInfo?.productPrice,
        productImg: productInfo?.productImageUrl?.[0],
        productName: productInfo?.productName
      }, quantity)
    } else {
      dispatch(pushAlert("Please login to add the product in to cart!"))
    }
  }

  useEffect(() => {
    const getSum = () => {
      productInfo?.productStock?.forEach(element => {
        element?.size === sizeOption && element?.color === colorOption && setPieceAvailable(element?.sum)
      })
    } 
    getSum()
  }, [productInfo?.productStock, sizeOption, colorOption])

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
        
      </Row>

      <Row className="row-container">
        <Col span={24}>
          <p className="name-props">Color</p>
        </Col>
      </Row>
      <Row>
        <Radio.Group value={colorOption} onChange={colorChange} className="btn-color">
          {productInfo?.productColor?.map((item, index) => (
            <Radio.Button
              key={index}
              value={item}
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
        <Col span={9} className="piece-number">
          <Tag color="default">
            {pieceAvailable + " piece available"}
          </Tag>
        </Col>
      </Row>

      <Row className="row-container">
      {
        pieceAvailable === 0 || quantity > pieceAvailable?
          <Button type="primary" className="btn-add-to-cart-disable" disabled 
            onClick={() => handleAddToCart()}>
            Add to cart
          </Button>
          :
          <Button type="primary" className="btn-add-to-cart"
            onClick={() => handleAddToCart()}>
            Add to cart
          </Button>
      }
      </Row>
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
