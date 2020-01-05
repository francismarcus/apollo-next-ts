import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import withApollo from '../apollo'

interface Props {
    apollo: any
}

class MyApp extends App<Props> {
    render() {
        const { Component, pageProps, apollo } = this.props
        return (
            <ApolloProvider client={apollo}>
                <Component {...pageProps} />
            </ApolloProvider>
        )
    }
}

export default withApollo(MyApp)