import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ViewHeight } from "./pages/VH/index.tsx";
import { ViewWidth } from "./pages/VW/index.tsx";
import { RemConvert } from "./pages/REM/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/viewHeight" element={<ViewHeight />} />
        <Route path="/viewWidth" element={<ViewWidth />} />
        <Route path="/rem" element={<RemConvert />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);