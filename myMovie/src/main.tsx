import React from "react";
import { createRoot } from "react-dom/client";
import MainLayout from "./components/templates/MainLayout";
import MainPage from "./pages/MainPage";
import "./index.css";
import "swiper/swiper-bundle.css";


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainLayout>
      <MainPage />
    </MainLayout>
  </React.StrictMode>
);
