import { gql } from '@apollo/client'

const UPDATE_STATUS_ORDER = gql`
  mutation updateOrder($input: OrderUpdateInput!) {
    updateOrder(input: $input){
      _id
      userId
      totalPrice
      status
      createdAt
      orderItems{
        _id
        color
        size
        quantity
        total
        productName
      }
    }
  }
`

export { UPDATE_STATUS_ORDER }