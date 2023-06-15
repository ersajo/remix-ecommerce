import { LinksFunction, V2_MetaFunction, json } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import styles from "~/styles/products/products.css";
import linesBg from "~/images/vector-1.svg";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Tiger Gloves" },
    { name: "Online store", content: "Online Store" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
]

export const loader = async () => {
  return json({
    storeName: process.env.storeName,
  });
}

export default function Index() {
  const { storeName } = useLoaderData<typeof loader>();
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }} className="relative">
      <img src={linesBg} className="absolute h-full w-2/5 z-0 left-0 rotate-45 opacity-70"/>
      <img src={linesBg} className="absolute h-full w-3/5 z-0 right-0 opacity-50"/>
      <div className="w-full rounded-t-[2rem] bg-gradient-to-l from-[#EFAFBC] to-[#C3E3FA] p-20">
        <div className="grid grid-cols-12">
          <div className="col-span-6 z-10">
            <div className="font-medium text-white leading-7 font-roboto tracking-widest mb-6">
              PRODUCTOS ESTRELLA
            </div>
            <div className="font-montserrat font-extrabold text-6xl leading-[5.5rem] mb-6 text-[#444444]">
              {storeName}
            </div>
            <div className="font-monserrat font-medium text-sm text-[#656565] leading-7 w-2/3 mb-10">
              Consectetur adipiscing elit. Cursus condimentum donec non dictum. Id et sed ac mauris, adipiscing tincidunt amet vel at. Quis lobortis id. consectetur adipiscing elit. 
            </div>
            <NavLink to="/products" className="py-4 px-12 bg-white w-fit rounded-full text-[#79BCCF] flex items-center cursor-pointer font-montserrat font-bold text-lg">
              <span>Comprar ahora</span>
              <ChevronRightIcon className="ml-2 w-6 font-bold stroke" />
            </NavLink>
          </div>
          <div className="col-span-6 h-96">
            derecha
          </div>
        </div>
      </div>
    </div>
  );
}
