import Socialised from 'pages/Auth/Socialised'
import type { V2_MetaFunction } from '@remix-run/node'
import type { SitemapFunction } from 'remix-sitemap'

export const sitemap: SitemapFunction = () => ({
  exclude: true
})

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Socialised' }, { name: 'description', content: 'Socialised' }]
}

export default function Index() {
  return <Socialised />
}