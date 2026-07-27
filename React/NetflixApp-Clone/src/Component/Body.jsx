import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function Body() {
  return <RouterProvider router={router} />;
}