import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_COUNTRY_API_URI,
  cache: new InMemoryCache(),
});

export default apolloClient;
