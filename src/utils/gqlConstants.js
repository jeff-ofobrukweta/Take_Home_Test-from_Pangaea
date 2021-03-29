import gql from "graphql-tag";

const GET_PRODUCT_QUERY = (currency) => gql`
query {
  products {
    image_url
    title
    price(currency: ${currency})
  }
}
`;
const GET_CURRENCY_QUERY = () => gql`
query {
  currency
}
`;

export {
  GET_PRODUCT_QUERY,
  GET_CURRENCY_QUERY
};
