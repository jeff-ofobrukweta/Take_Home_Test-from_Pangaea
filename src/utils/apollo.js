import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const { API_BASE_URL } = process.env;

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://pangaea-interviews.now.sh/api/graphql" || API_BASE_URL
});

// export the cache init variables
export const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

const getQuery = async (Qparam) => {
  const { data } = await apolloClient.query({ query: Qparam });
  return data;
};

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export { apolloProvider, getQuery };
