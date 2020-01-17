import React from 'react'
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode'


const themes = {
	light: {
		type: 'light',
		bgColor: 'white',
		color: '#ff5a5f'
	},
	dark: {
		type: 'dark',
		bgColor: '#1F2933',
		color: '#ff5a5f'
	}
};

export default ({ children }: { children: any }) => {
	const { value, toggle } = useDarkMode(false)
	const theme = value ? themes.dark : themes.light

	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setMounted(true)
	}, [])

	const body =
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>

	// prevents ssr flash for mismatched dark mode
	if (!mounted) {
		return <div style={{ visibility: 'hidden' }}>{body}</div>
	}

	return body
}

