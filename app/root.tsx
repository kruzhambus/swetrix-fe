import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { store } from 'redux/store'
import { Provider } from 'react-redux'

import Footer from './components/Footer'
import Header from './components/Header'

import tailwindCss from './css/tailwind.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindCss },
]

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
