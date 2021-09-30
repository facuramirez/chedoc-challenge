import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  return <Component {...pageProps} />
}
export default MyApp
