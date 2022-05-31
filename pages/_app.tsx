import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import defaultTheme from 'styles/theme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuItems from 'data/menuItems'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header items={MenuItems} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
