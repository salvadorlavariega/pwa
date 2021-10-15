import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Meta from 'src/components/meta'
import 'src/styles/globals.css'
import 'src/components/PageLayout/page.css'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>
			<Meta />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
