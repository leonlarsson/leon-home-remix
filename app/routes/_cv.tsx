import { Outlet } from "@remix-run/react";

import "../styles/cv-style.css";

export default function CVView() {
  return (
    <div className="container mx-auto min-h-[100svh] max-w-3xl px-4 pb-10 pt-2 lg:pt-10">
      <Outlet />
    </div>
  );
}
