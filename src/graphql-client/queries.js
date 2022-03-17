import { gql } from '@apollo/client'

const getProducts = gql`
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

export { getProducts }