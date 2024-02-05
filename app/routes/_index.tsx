import type { MetaFunction } from "@remix-run/node";
import {Button} from "@adamzerner/rfui-react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Button />
    </div>
  );
}
