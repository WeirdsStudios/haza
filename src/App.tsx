import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HazaHomePage from "@/pages/HazaHomePage";
import NotFoundPage from "@/pages/NotFoundPage";

/* 
  Haza Munguia — 4 pages only:
  /            → Home
  /sistema     → Products & philosophy (TODO)
  /creaciones  → Collections / demos (TODO)
  /consulta    → AI consultation agent (TODO)
*/

export default function App() {
  return (
    <Routes>
      {/* Home — Header10 (minimal, transparent) + Footer10 (dark) */}
      <Route element={<MainLayout headerStyle={10} footerStyle={10} />}>
        <Route path="/" element={<HazaHomePage />} />
      </Route>

      {/* Sistema — same header/footer */}
      <Route element={<MainLayout headerStyle={10} footerStyle={10} />}>
        <Route path="/sistema" element={<HazaHomePage />} /> {/* placeholder → build next */}
      </Route>

      {/* Creaciones — same header/footer */}
      <Route element={<MainLayout headerStyle={10} footerStyle={10} />}>
        <Route path="/creaciones" element={<HazaHomePage />} /> {/* placeholder → build next */}
      </Route>

      {/* Consulta — no footer (full-screen AI agent) */}
      <Route element={<MainLayout headerStyle={10} footerStyle={10} noFooter />}>
        <Route path="/consulta" element={<HazaHomePage />} /> {/* placeholder → build next */}
      </Route>

      {/* 404 */}
      <Route element={<MainLayout headerStyle={10} footerStyle={10} />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
