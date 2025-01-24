import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PokemonPage } from "./pages/PokemonPage";
import { PokemonFormPage } from "./pages/PokemonFormPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/Pokemon" />} />
        <Route path="/Pokemon" element={<PokemonPage />} />
        <Route path="/Pokemon-create" element={<PokemonFormPage />} />
        <Route path="/Pokemon/:id" element={<PokemonFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
