import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Tiger Gloves" },
    { name: "Online store", content: "Online Store" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-8xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}
