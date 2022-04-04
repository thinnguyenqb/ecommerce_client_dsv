import { gql } from '@apollo/client'

const GET_ALL_ORDER = gql`
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


export {GET_ALL_ORDER}