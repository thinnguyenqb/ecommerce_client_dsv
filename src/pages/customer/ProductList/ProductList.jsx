import React, {useState, useEffect} from "react";
import { Col, Row, Layout, Divider } from "antd";
import Product from "../../../components/customer/ProductCard/ProductCard";
import Fitler from "../../../components/customer/Filter/Filter";
import FilterCategory from "../../../components/customer/FilterCategory/FilterCategory";
import { Header } from "../../../components/sharedComponent/Header/Header";
import { FooterCustomer } from "../../../components/sharedComponent/Footer/Footer";
import { BreadcrumbMain } from "../../../components/customer/BreadcrumbMain/BreadcrumbMain";
import { SortBy } from "../../../components/customer/SortBy/SortBy";
import { ProductPagination } from "../../../components/customer/ProductPagination/ProductPagination";
import "./ProductList.scss";
// import { useQuery } from '@apollo/client';
// import { GET_ALL_PRODUCT } from "../../../graphql-client/queries";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import axios from "axios";

function ProductList() {
  const { Content } = Layout;
  //const { loading, data, error } = useQuery(GET_ALL_PRODUCT)
  const [itemSubCategory, setItemSubCategory] = useState([])
  const categoryItems = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);
  const [products, setProducts] = useState(product.items)
  const { items } = categoryItems
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const kindCategory = query.get("kind")
  const subCategory = query.get("sub")
  const category = query.get("category")
  const search = query.get("search")
  const sort = query.get("sort")
  const order = query.get("order")

  useEffect(() => {
    // if (loading) return <p>Loading products ...</p>
    // if (error) return <p>Error loading products</p>
    // console.log(data.products)
    // setProducts(data.products)
    const getData = async () => {
      if (!product.items) {
        const res = await axios.get(process.env.REACT_APP_API_URL + '/product')
        setProducts(res.data.products)
      }
      setProducts(product.items)
    }
    getData()
  }, [product.items]);
  
  useEffect(() => {
    const getSubCategory = () => {
      items.forEach(item => {
        item.categoryName === category &&
          item.categoryKind.forEach(element => {
            element.nameKindCategory === kindCategory && setItemSubCategory(element.subCategory)
          })
        })
      }
    getSubCategory()
  },[kindCategory, subCategory, items, category])
    
  return (
    <div className="product-list">
      <Header />

      <Content className="body-page">
        <Row
          className="top-product-list"
          type="flex"
          justify="space-around"
          align="middle"
        >
          <BreadcrumbMain category={category} kindCategory={kindCategory} subCategory={subCategory}/>
        </Row>

        <Row type="flex" align="middle">
          <Col span={4}>
            <p className="header-fitler">Category</p>
          </Col>
          <Col span={5} offset={1}>
            <SortBy kindCategory={kindCategory} subCategory={subCategory} category={category} search={search}/>
          </Col>
          <Col span={5} offset={9}>
            <ProductPagination
              kindCategory={kindCategory}
              subCategory={subCategory}
              category={category}
              search={search}
              sort={sort}
              order={order}
            />
          </Col>
        </Row>

        <Row>
          <Col span={4}>
            <FilterCategory category={category} kindCategory={kindCategory} itemSubCategory={itemSubCategory}/>
            <Divider />
            <p className="header-fitler">Fitler</p>
            <Fitler />
          </Col>

          <Col span={19} offset={1}>
            <Row gutter={20}>
              {products?.map((element) => {
                return (
                  <Col className="col-product" span={5}>
                    <Product key={element.id} product={element} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Row type="flex" align="top">
          <Col span={5} offset={19} type="flex" justify="end" className="pagination-c" >
            <ProductPagination />
          </Col>
        </Row>
      </Content>

      <FooterCustomer />
    </div>
  );
}

export default ProductList;
