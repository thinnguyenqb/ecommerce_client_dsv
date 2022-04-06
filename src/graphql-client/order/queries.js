import { gql } from "@apollo/client";

const GET_ALL_ORDER = gql`
  query getOrdersQuery {
    orders {
      _id
      userId
      totalPrice
      status
      createdAt
      orderItems {
        _id
        color
        size
        quantity
        total
        productName
      }
    }
  }
`;

export { GET_ALL_ORDER };
