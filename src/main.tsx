import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Layout from "./layouts/Layout.tsx";
import OurServices from "./pages/OurServices.tsx";
import SingaporePr from "./pages/SingaporePr.tsx";
import Faq from "./pages/Faq.tsx";
import Resources from "./pages/Resources.tsx";
import Article1 from "./pages/resource-pages/Article1.tsx";
import Citizenship from "./pages/Citizenship.tsx";
import LTVPass from "./pages/LTVPass.tsx";
import BRS from "./pages/BRS.tsx";
import GIP from "./pages/GIP.tsx";
import WorkPass from "./pages/WorkPass.tsx";
import StudentPass from "./pages/StudentPass.tsx";
import Quiz from "./pages/Quiz.tsx";

const router = createBrowserRouter([
  // Root
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  // Singapore PR
  {
    path: "/singapore-pr",
    element: (
      <Layout>
        <SingaporePr />
      </Layout>
    ),
  },
  // Services
  {
    path: "/our-services",
    element: (
      <Layout>
        <OurServices />
      </Layout>
    ),
  },
  // Citizenship
  {
    path: "/singapore-citizenship",
    element: (
      <Layout>
        <Citizenship />
      </Layout>
    ),
  },
  // Work Passes
  {
    path: "/work-passes",
    element: (
      <Layout>
        <WorkPass />
      </Layout>
    ),
  },
  // LTV and Dependent Passes
  {
    path: "/ltv-dependent-pass",
    element: (
      <Layout>
        <LTVPass />
      </Layout>
    ),
  },
  // Student Pass
  {
    path: "/student-pass",
    element: (
      <Layout>
        <StudentPass />
      </Layout>
    ),
  },
  // Global Investor Programme
  {
    path: "/global-investor-programme",
    element: (
      <Layout>
        <GIP />
      </Layout>
    ),
  },
  // Business Relocation Service
  {
    path: "/business-relocation-service",
    element: (
      <Layout>
        <BRS />
      </Layout>
    ),
  },
  // FAQ
  {
    path: "/faq",
    element: (
      <Layout>
        <Faq />
      </Layout>
    ),
  },
  // Resources
  {
    path: "/resources",
    element: (
      <Layout>
        <Resources />
      </Layout>
    ),
  },
  // Article 1
  {
    path: "/resources/article1",
    element: (
      <Layout>
        <Article1 />
      </Layout>
    ),
  },
  // Contact Us
  {
    path: "/contact-us",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  // Quiz
  {
    path: "/quiz",
    element: (
      <Layout>
        <Quiz />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
