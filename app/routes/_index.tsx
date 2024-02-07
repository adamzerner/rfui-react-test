import type { MetaFunction } from "@remix-run/node";
import { Badge } from "@adamzerner/rfui-react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Badge type="danger" size="lg">Example</Badge>
    </div>
  );
}
