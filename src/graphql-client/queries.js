import { gql } from '@apollo/client'

const GET_PRODUCTS = gql`
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

export {GET_PRODUCTS}