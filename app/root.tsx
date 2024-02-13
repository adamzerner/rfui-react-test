import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { getStylesheetUrl } from "@adamzerner/rfui-react";

export const links: LinksFunction = () => {
  const theLinks = [{ rel: "stylesheet", href: getStylesheetUrl() }];

  if (cssBundleHref) {
    theLinks.push({ rel: "stylesheet", href: cssBundleHref });
  }

  return theLinks;
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
