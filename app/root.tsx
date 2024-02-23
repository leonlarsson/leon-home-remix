import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { LinksFunction } from "@remix-run/cloudflare";
import "./styles/globals.css";

export const links: LinksFunction = () => {
  const preloadedFonts = [
    "/assets/fonts/InterVariableV3.ttf",
    "/assets/fonts/GeistMonoVariableVF.woff2",
  ];

  return [
    {
      rel: "icon",
      type: "image/png",
      href: "/assets/images/avatar.png",
    },
    ...preloadedFonts.map(font => ({
      rel: "preload",
      as: "font",
      href: font,
      crossOrigin: "anonymous" as const,
    })),
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="overflow-y-scroll">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
