import { NavLink, useLocation } from "@remix-run/react";
import Icons from "./icons";

export default function HeaderLink({
  content,
  url,
  title,
  newTab = false,
}: {
  content: string | React.ReactNode;
  url: string;
  title?: string;
  newTab?: boolean;
}) {
  const location = useLocation();
  const inProject =
    location.pathname === url ||
    (location.pathname.startsWith("/projects") && url.startsWith("/projects"));

  return (
    <NavLink
      to={url}
      className={`flex h-full items-center text-neutral-600 transition-all hover:text-black dark:text-neutral-400 dark:hover:text-kinda-white ${
        inProject ? "font-bold !text-black dark:!text-kinda-white" : ""
      }`}
      target={newTab ? "_blank" : "_self"}
      rel="noreferrer"
      title={title}
      draggable={false}
    >
      {inProject && location.pathname.split("/")[2] && (
        <Icons.arrowLeft className="me-1" />
      )}
      {content}
    </NavLink>
  );
}
