import { LoaderFunction, redirect } from "@remix-run/cloudflare";

export const loader: LoaderFunction = ({ request }) => {
  const { pathname } = new URL(request.url);

  const redirects = [
    {
      source: "/resume",
      destination: "/en/cv",
      permanent: true,
    },
    {
      source: "/cv",
      destination: "/en/cv",
      permanent: true,
    },
    {
      source: "/cv-swe",
      destination: "/se/cv",
      permanent: true,
    },
    {
      source: "/se/cv",
      destination: "/sv/cv",
      permanent: true,
    },
  ];

  const foundRedirect = redirects.find(r => r.source === pathname);

  if (foundRedirect) {
    return redirect(
      foundRedirect.destination,
      foundRedirect.permanent ? 308 : 307,
    );
  }

  // If no redirect is found, redirect to the root
  // This will only catch actual invalid routes
  return redirect("/", 307);
};
