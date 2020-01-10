import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import withApollo from '../apollo'
import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat);
  body {
    font-family: 'Montserrat', sans-serif;
  }
`

interface Props {
    apollo: any
}

const theme = {
    color: {
        main: '#ff5a5f;',
        secondary: '#5AFFFA;'
    }
}

class MyApp extends App<Props> {
    render() {
        const { Component, pageProps, apollo } = this.props
        return (
            <ApolloProvider client={apollo}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ApolloProvider>
        )
    }
}

export default withApollo(MyApp)