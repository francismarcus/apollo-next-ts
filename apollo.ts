
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import gql from 'graphql-tag';
import withApollo from 'next-with-apollo';

const getMyToken = gql`
	{
		myToken @client
	}
`;

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/graphql'
});


const data = {
    myToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTA3YzA5YmFmZTg3NjM4NTBhZDdlNjgiLCJpYXQiOjE1Nzc3NDI3MTd9.Hd1Y64VebxAu45dxt73vBuPEc1N1RR2lglVVPTYIs-k"
}

export default withApollo(
    ({ initialState }) => {
        const cache = new InMemoryCache().restore(initialState || {})
        cache.writeData({
            data
        })
        const authLink = setContext(async (_, { headers }) => {
            const store: any = await cache.readQuery({
                query: getMyToken
            });
            const { myToken } = store
            return {
                headers: {
                    ...headers,
                    authorization: myToken ? `${myToken}` : ""
                }
            };
        })
        const link = authLink.concat(httpLink);
        return new ApolloClient({
            cache,
			link
		})
    }
    
		
);
