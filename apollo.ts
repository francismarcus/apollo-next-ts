import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import gql from 'graphql-tag'

const getMyToken = gql`
{
    myToken @client
}
`
const cache = new InMemoryCache()
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})
const authLink = setContext( async (_, { headers }) => {
    const data: any = await cache.readQuery({
        query: getMyToken
    })
    const { token } = data

    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : ""
        
        }
    }
})

const link = authLink.concat(httpLink)
const client = new ApolloClient({
    cache,
    link
  })