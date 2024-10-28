import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Layout from "./layouts/Layout.tsx";
import OurServices from "./pages/OurServices.tsx";
import SingaporePr from "./pages/SingaporePR.tsx";
import Faq from "./pages/Faq.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/singapore-pr",
    element: (
      <Layout>
        <SingaporePr />
      </Layout>
    ),
  },
  {
    path: "/our-services",
    element: (
      <Layout>
        <OurServices />
      </Layout>
    ),
  },
  {
    path: "/faq",
    element: (
      <Layout>
        <Faq />
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
