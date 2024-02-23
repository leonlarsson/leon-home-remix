import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";

import "../styles/main-style.css";

export default function MainView() {
  return (
    <div
      className={`min-h-[100svh] bg-gradient-to-bl from-white to-slate-200 text-black dark:from-kinda-black dark:to-kinda-black dark:text-kinda-white`}
    >
      <Header />
      <div className="container mx-auto px-4 pb-28 pt-3 text-center transition-all min-[510px]:pb-10 min-[510px]:pt-0">
        <Outlet />
      </div>
    </div>
  );
}
