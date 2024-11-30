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
import ResourcesOne from "./pages/ResourcesOne.tsx";
import Article1 from "./pages/resource-pages/Article1.tsx";
import Citizenship from "./pages/Citizenship.tsx";
import LTVPass from "./pages/LTVPass.tsx";
import BRS from "./pages/BRS.tsx";
import GIP from "./pages/GIP.tsx";
import WorkPass from "./pages/WorkPass.tsx";
import StudentPass from "./pages/StudentPass.tsx";
import Article2 from "./pages/resource-pages/Article2.tsx";
import Article3 from "./pages/resource-pages/Article3.tsx";
import Article4 from "./pages/resource-pages/Article4.tsx";
import Article5 from "./pages/resource-pages/Article5.tsx";
import EpPr from "./pages/singapore-pr-pages/EpPr.tsx";
import ParentPr from "./pages/singapore-pr-pages/ParentPr.tsx";
import PrRejection from "./pages/singapore-pr-pages/PrRejection.tsx";
import SpPr from "./pages/singapore-pr-pages/SpPr.tsx";
import SpousePr from "./pages/singapore-pr-pages/SpousePr.tsx";
import StudentPr from "./pages/singapore-pr-pages/StudentPr.tsx";
import Article10 from "./pages/resource-pages/Article10.tsx";
import Article11 from "./pages/resource-pages/Article11.tsx";
import Article12 from "./pages/resource-pages/Article12.tsx";
import Article6 from "./pages/resource-pages/Article6.tsx";
import Article7 from "./pages/resource-pages/Article7.tsx";
import Article8 from "./pages/resource-pages/Article8.tsx";
import Article9 from "./pages/resource-pages/Article9.tsx";
import Article13 from "./pages/resource-pages/Article13.tsx";
import Article14 from "./pages/resource-pages/Article14.tsx";
import Article15 from "./pages/resource-pages/Article15.tsx";
import Article16 from "./pages/resource-pages/Article16.tsx";
import Article17 from "./pages/resource-pages/Article17.tsx";
import Article18 from "./pages/resource-pages/Article18.tsx";
import Article19 from "./pages/resource-pages/Article19.tsx";
import Article20 from "./pages/resource-pages/Article20.tsx";
import Article21 from "./pages/resource-pages/Article21.tsx";
import Article22 from "./pages/resource-pages/Article22.tsx";
import ResourcesTwo from "./pages/ResourcesTwo.tsx";

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
  // PR Rejection
  {
    path: "/pr-application-rejection",
    element: (
      <Layout>
        <PrRejection />
      </Layout>
    ),
  },
  // Spouse PR
  {
    path: "/spouse-pr-application",
    element: (
      <Layout>
        <SpousePr />
      </Layout>
    ),
  },
  // Parent PR
  {
    path: "/parent-pr-application",
    element: (
      <Layout>
        <ParentPr />
      </Layout>
    ),
  },
  // EP PR
  {
    path: "/ep-holder-pr-application",
    element: (
      <Layout>
        <EpPr />
      </Layout>
    ),
  },
  // SP PR
  {
    path: "/sp-holder-pr-application",
    element: (
      <Layout>
        <SpPr />
      </Layout>
    ),
  },
  // Student PR
  {
    path: "/student-pr-application",
    element: (
      <Layout>
        <StudentPr />
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
    path: "/resources/1",
    element: (
      <Layout>
        <ResourcesOne />
      </Layout>
    ),
  },
  // Resources
  {
    path: "/resources/2",
    element: (
      <Layout>
        <ResourcesTwo />
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
  // Article 2
  {
    path: "/resources/article2",
    element: (
      <Layout>
        <Article2 />
      </Layout>
    ),
  },
  // Article 3
  {
    path: "/resources/article3",
    element: (
      <Layout>
        <Article3 />
      </Layout>
    ),
  },
  // Article 4
  {
    path: "/resources/article4",
    element: (
      <Layout>
        <Article4 />
      </Layout>
    ),
  },
  // Article 5
  {
    path: "/resources/article5",
    element: (
      <Layout>
        <Article5 />
      </Layout>
    ),
  },
  // Article 6
  {
    path: "/resources/article6",
    element: (
      <Layout>
        <Article6 />
      </Layout>
    ),
  },
  // Article 7
  {
    path: "/resources/article7",
    element: (
      <Layout>
        <Article7 />
      </Layout>
    ),
  },
  // Article 8
  {
    path: "/resources/article8",
    element: (
      <Layout>
        <Article8 />
      </Layout>
    ),
  },
  // Article 9
  {
    path: "/resources/article9",
    element: (
      <Layout>
        <Article9 />
      </Layout>
    ),
  },
  // Article 10
  {
    path: "/resources/article10",
    element: (
      <Layout>
        <Article10 />
      </Layout>
    ),
  },
  // Article 11
  {
    path: "/resources/article11",
    element: (
      <Layout>
        <Article11 />
      </Layout>
    ),
  },
  // Article 12
  {
    path: "/resources/article12",
    element: (
      <Layout>
        <Article12 />
      </Layout>
    ),
  },
  // Article 13
  {
    path: "/resources/article13",
    element: (
      <Layout>
        <Article13 />
      </Layout>
    ),
  },
  // Article 14
  {
    path: "/resources/article14",
    element: (
      <Layout>
        <Article14 />
      </Layout>
    ),
  },
  // Article 15
  {
    path: "/resources/article15",
    element: (
      <Layout>
        <Article15 />
      </Layout>
    ),
  },
  // Article 16
  {
    path: "/resources/article16",
    element: (
      <Layout>
        <Article16 />
      </Layout>
    ),
  },
  // Article 17
  {
    path: "/resources/article17",
    element: (
      <Layout>
        <Article17 />
      </Layout>
    ),
  },
  // Article 18
  {
    path: "/resources/article18",
    element: (
      <Layout>
        <Article18 />
      </Layout>
    ),
  },
  // Article 19
  {
    path: "/resources/article19",
    element: (
      <Layout>
        <Article19 />
      </Layout>
    ),
  },
  // Article 20
  {
    path: "/resources/article20",
    element: (
      <Layout>
        <Article20 />
      </Layout>
    ),
  },
  // Article 21
  {
    path: "/resources/article21",
    element: (
      <Layout>
        <Article21 />
      </Layout>
    ),
  },
  // Article 22
  {
    path: "/resources/article22",
    element: (
      <Layout>
        <Article22 />
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
