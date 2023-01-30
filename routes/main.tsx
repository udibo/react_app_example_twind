import { Suspense } from "npm/react";
import { Link, Outlet } from "npm/react-router-dom";
import { Helmet } from "npm/react-helmet-async";
import {
  AppErrorBoundary,
  DefaultErrorFallback,
} from "x/udibo_react_app/app.tsx";

import { Loading } from "../components/loading.tsx";

const navLinks = [
  { label: "Home", to: "/" },
];

export default function Main() {
  return (
    <div className="py-16 px-8 my-16 max-w-screen-md mx-auto w-full bg-slate-200">
      <Helmet
        defaultTitle="Example"
        titleTemplate="Example | %s"
        htmlAttributes={{ lang: "en" }}
      >
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <ul className="grid gap-2">
        {navLinks.map((link) => (
          <li key={link.label} className="border-2">
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Suspense fallback={<Loading />}>
        <AppErrorBoundary FallbackComponent={DefaultErrorFallback}>
          <Outlet />
        </AppErrorBoundary>
      </Suspense>
    </div>
  );
}
