import { gql } from '@apollo/client'

const GET_ALL_PRODUCT = gql`
  query getProductsQuery {
    products{
      id
      productName
      productCategory
      productKindCategory
      productSubCategory
      productPrice
      productBrand
      productImageUrl
      quantity
      soldQuantity
      updatedAt
    }
  }
`

const GET_PRODUCT_BY_ID = gql`
  query getProductByIdQuery($id: ID!){
    product(id: $id){
      id
      productName
      productCategory
      productKindCategory
      productSubCategory
      productPrice
      productBrand
      productImageUrl
      quantity
      soldQuantity
      updatedAt
    }
  }
`

export {GET_ALL_PRODUCT, GET_PRODUCT_BY_ID}