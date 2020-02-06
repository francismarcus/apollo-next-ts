import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import withApollo from 'next-with-apollo';
import gql from 'graphql-tag'

export const getMyToken = gql`
	query myToken {
		myToken @client
	}
`;

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/graphql'
});

const data = {
	myToken:
		''
};

export default withApollo(({ initialState }) => {
	const cache = new InMemoryCache().restore(initialState || {});
	cache.writeData({
		data
	});
	const authLink = setContext(async (_, { headers }) => {
		const store: any = await cache.readQuery({
			query: getMyToken
		});
		const { myToken } = store;
		return {
			headers: {
				...headers,
				authorization: myToken ? `${myToken}` : ''
			}
		};
	});
	const link = authLink.concat(httpLink);
	return new ApolloClient({
		cache,
		link
	});
});
