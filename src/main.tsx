import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.scss";
import { RouterProvider } from "react-router";
import { ROUTES } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={ROUTES} />
  </StrictMode>
);
