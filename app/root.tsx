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
import { ArrowUturnLeftIcon, BuildingStorefrontIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import stylesheet from "~/tailwind.css";
import rootCSS from "~/styles/root.css";
import face404Page from "~/images/404-face.png";

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
        <div className="flex justify-between items-center pt-7 px-20 z-30 bg-slate-50 sticky top-0">
          <div className="font-montserrat font-semibold text-4xl text-[#5F5F5F] cursor-pointer">
            <NavLink to="/" className="flex flex-row items-center">
              <BuildingStorefrontIcon className="w-12 mr-3 text-[#79BCCF] stroke-2"></BuildingStorefrontIcon>
              <span className="cursor-pointer">{storeName}</span>
            </NavLink>
          </div>
          <div className="font-montserrat font-extrabold text-lg text-[#787878] flex">
            <div className="pb-9 mr-6">
              <NavLink to="/" className={({ isActive }) => isActive ? 'activeMenuItem' : ''}>HOME</NavLink>
            </div>
            <div className="pb-9 mr-6">
              <NavLink to="/products" className={({ isActive }) => isActive ? 'activeMenuItem' : ''}>SHOP</NavLink>
            </div>
            <div className="pb-9 mr-6">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'activeMenuItem' : ''}>CONTACT</NavLink>
            </div>
            <div className="pb-9">
              <ShoppingCartIcon className="w-8 stroke-2"></ShoppingCartIcon>
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

export function ErrorBoundary() {
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-400">
        <div className="w-screen h-screen relative">
          <div className="flex absolute w-screen justify-center top-20">
            <span className="font-black text-6xl">404</span>
          </div>
          <div className="flex justify-center items-center w-screen h-screen absolute">
            <img src={face404Page} />
          </div>
          <div className="flex absolute w-screen justify-center bottom-32">
            <div className="flex flex-col">
              <span className="font-black text-6xl mb-4">No encontramos lo que buscabas</span>
              <NavLink to="/" className="flex self-center border-b-black border-b-2">
                <ArrowUturnLeftIcon className="w-6 mr-3 mb-1"></ArrowUturnLeftIcon>
                <span>Volver al inicio</span>
              </NavLink>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}