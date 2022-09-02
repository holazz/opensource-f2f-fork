import 'uno.css'
import '@unocss/reset/tailwind.css'
import '../styles/index.css'

import Layout from '../components/Layout'

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
