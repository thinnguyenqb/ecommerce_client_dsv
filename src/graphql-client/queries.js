import { gql } from '@apollo/client'

const GET_ALL_PRODUCT = gql`
  query getProductsQuery {
    products{
      id
      productName
      productCategory
      productSubCategory
      productPrice
      productBrand
      productStock {
        S
        M
        L
      }
      productImageUrl
    }
  }
`

const GET_PRODUCT_BY_ID = gql`
  query getProductByIdQuery($id: ID!){
    product(id: $id){
      id
      productName
      productCategory
      productSubCategory
      productPrice
      productBrand
      productStock {
        S
        M
        L
      }
      productImageUrl
    }
  }
`

export {GET_ALL_PRODUCT, GET_PRODUCT_BY_ID}