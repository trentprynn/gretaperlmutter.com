import "./App.scss";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { HomePage } from "./pages/home-page";
import { Layout } from "./components/layout";
import { PerformancePage } from "./pages/performance-page";
import { CareerPage } from "./pages/career-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/performance" element={<PerformancePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
