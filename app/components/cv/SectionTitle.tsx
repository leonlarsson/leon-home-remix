import { Link } from "@remix-run/react";

// Takes a string and returns a title with an optional url
export default function SectionTitle({
  title,
  url,
}: {
  title: string;
  url?: string;
}) {
  return url ? (
    <Link
      to={url}
      target="_blank"
      rel="noreferrer"
      className="link w-fit text-xl font-bold"
    >
      {title}
    </Link>
  ) : (
    <h2 className="text-xl font-bold">{title}</h2>
  );
}
