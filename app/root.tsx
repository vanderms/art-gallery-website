import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';
import type { LinksFunction } from 'remix';
import indexCSS from './styles/index.css';
import { LeafletCDN } from './components/ui/map/leaflet-map';

export const meta: MetaFunction = () => {
  return { title: 'Frontend Mentor | Art Gallery Website' };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/assets/favicon-32x32.png',
    },
    {
      rel: 'stylesheet',
      href: indexCSS,
      'data-map': '',
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <LeafletCDN />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
