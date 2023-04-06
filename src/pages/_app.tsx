import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/components/index.store'
import {Router, useRouter} from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
 <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
 
  )
}
