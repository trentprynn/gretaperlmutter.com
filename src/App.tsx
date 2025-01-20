import "./App.scss";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { HomePage } from "./pages/home";
import ProfessionalPage from "./pages/professional";
import { Layout } from "./components/layout";
import { PerformancePage } from "./pages/performance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/performance" element={<PerformancePage />} />
          <Route path="/professional" element={<ProfessionalPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
