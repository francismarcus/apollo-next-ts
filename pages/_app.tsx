import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../apollo';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat);
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

const themes = {
	light: {
		type: 'light',
		bgColor: 'white',
		color: '#ff5a5f'
	},
	dark: {
		type: 'dark',
		bgColor: '#1F2933',
		color: '#5AFFFA'
	}
};

class MyApp extends App<Props> {
	state = {
		theme: true
	}

	changeTheme = () => {
		this.setState((state: any)=> ({
			theme: !state.theme
		}))
	}
	render() {
		const { Component, pageProps, apollo } = this.props;
		const { theme } = this.state
		return (
			<ApolloProvider client={apollo}>
				<ThemeProvider theme={theme === true ? themes.light : themes.dark}>
					<GlobalStyles />
					<Component {...pageProps} changeTheme={this.changeTheme} />
				</ThemeProvider>
			</ApolloProvider>
		);
	}
}

export default withApollo(MyApp);
