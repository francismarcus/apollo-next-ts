import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../apollo';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode'
import Darkmode from 'components/Darkmode'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Alata&display=swap');
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.color};
	height: 100vh;
	width: 100%;
  }
`;

interface Props {
	apollo: any;
}



class MyApp extends App<Props> {

	render() {
		const { Component, pageProps, apollo } = this.props;
		return (
			<ApolloProvider client={apollo}>

				<Darkmode>
					<GlobalStyles />
					<Component {...pageProps} />

				</Darkmode>
			</ApolloProvider>
		);
	}
}

export default withApollo(MyApp);

