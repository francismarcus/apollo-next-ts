import { NextPageContext } from 'next';
import ApolloClient from 'apollo-client';

export interface withApolloContext<C = any> extends NextPageContext {
    apolloClient: ApolloClient<C>;
  }