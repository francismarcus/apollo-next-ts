import React from 'react'
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode'

const fz = {
	micro: "8px", // 8
	small: "14px", // 18
	regular: "17px", // 22
	large: "19px", // 24
	t3: "24px", // 28
	t2: "32px", // 36
	t1: "44px", // 56
}
const spacing = {
	tiny: "8px",
	small: "16px",
	base: "24px",
	large: "48px",
	xlarge: "64px"
}

const shared = {
	spacing,
	fz
}
const themes = {
	light: {
		type: 'light',
		bgColor: 'white',
		color: '#ff5a5f',
		primaryText: '#484848',
		...shared
	},

	dark: {
		type: 'dark',
		bgColor: '#1F2933',
		color: '#ff5a5f',
		primaryText: 'white',
		...shared
		
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

