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
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { productFilter } from "../../../redux/actions/productAction";

function ProductList() {
  const { Content } = Layout;
  //const { loading, data, error } = useQuery(GET_ALL_PRODUCT)
  const [itemSubCategory, setItemSubCategory] = useState([])
  const categoryItems = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);
  const [products, setProducts] = useState(product.items)
  const { items } = categoryItems
  const dispatch = useDispatch()
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const kindCategory = query.get("kind")
  const subCategory = query.get("sub")
  const category = query.get("category")
  const search = query.get("search")
  const sort = query.get("sort")
  const order = query.get("order")
  const page = query.get("page")
  const perPage = query.get("perPage")

  useEffect(() => {
    const getProducts = () => {
      if (products) {
        setProducts(product.items)
      }
    }
    getProducts()
  }, [product.items, products])

  useEffect(() => {
    const getData = async () => {
      if (product.items.length === 0) {
        const data = {
          category,
          kind: kindCategory,
          sub: subCategory,
          search, sort, order, page, perPage
        }
        await dispatch(productFilter(data))
      }
    }
    getData()
  }, [product.items, category, kindCategory, subCategory, search, sort, order, page, perPage, dispatch]);
  
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
  }, [kindCategory, subCategory, items, category])
  
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
          <Col span={6}>
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
            <FilterCategory category={category} kindCategory={kindCategory} subCategory={subCategory} itemSubCategory={itemSubCategory} />
            <div style={{width: '80%'}}>
              <Divider />
            </div>
            <p className="header-fitler">Fitler</p>
            <Fitler />
          </Col>

          <Col span={20}>
            <Row gutter={20}>
              {products?.map((element, index) => {
                return (
                  <Col className="col-product" key={index}>
                    <Product product={element} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Row type="flex" align="top">
          <Col span={5} offset={19} type="flex" justify="end" className="pagination-c" >
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
      </Content>

      <FooterCustomer />
    </div>
  );
}

export default ProductList;
