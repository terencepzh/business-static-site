import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Layout from "./layouts/Layout.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <Layout>
          <Contact />
        </Layout>
      ),
    },
  ],
  { basename: "/business-static-site/" } // for development only
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
