import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const { API_BASE_URL } = process.env;
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: API_BASE_URL
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

export default { apolloClient };
