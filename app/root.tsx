import type { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./app.css";
import Header from "./components/Header";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          as="font"
          href="/assets/fonts/InterVariable.ttf"
          crossOrigin="anonymous"
        />
        <Meta />
        <Links />
      </head>

      <body className="overflow-y-scroll">
        <div
          className={`min-h-[100svh] bg-gradient-to-bl from-white to-slate-200 text-black dark:from-kinda-black dark:to-kinda-black dark:text-kinda-white`}
        >
          <Header />
          <div className="container mx-auto px-4 pb-28 pt-3 text-center transition-all min-[510px]:pb-10 min-[510px]:pt-0">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
