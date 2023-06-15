import { cssBundleHref } from "@remix-run/css-bundle";
import { LinksFunction, json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import rootCSS from "~/styles/root.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: rootCSS }
];

export const loader = async () => {
  return json({
    storeName: process.env.storeName,
  });
}

export default function App() {
  const { storeName } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css?family=Roboto:500&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css?family=Montserrat:500,800&display=swap"
            rel="stylesheet"
        />
      </head>
      <body>
        <div className="flex justify-between items-center mt-7 mx-20">
          <div>
            <NavLink to="/" className="flex flex-row items-center pb-9">
              {storeName}
            </NavLink>
          </div>
          <div className="font-montserrat font-extrabold text-lg text-[#787878] flex">
            <div className="pb-9 mr-3">
              <NavLink to="/" className={({ isActive }) => isActive ? 'activeMenuItem' : ''}>HOME</NavLink>
            </div>
            <div className="pb-9 mr-3">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'activeMenuItem' : ''}>ABOUT US</NavLink>
            </div>
            <div className="pb-9 mr-3">
              <NavLink to="/products" className={({ isActive }) => isActive ? 'activeMenuItem' : ''}>SHOP</NavLink>
            </div>
            <div className="pb-9 mr-3">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'activeMenuItem' : ''}>CONTACT</NavLink>
            </div>
            <div className="pb-9">

            </div>
          </div>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
