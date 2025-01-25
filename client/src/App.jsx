import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PokemonPage } from "./pages/PokemonPage";
import { PokemonFormPage } from "./pages/PokemonFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="background"></div>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/Pokemon" />} />
          <Route path="/Pokemon" element={<PokemonPage />} />
          <Route path="/Pokemon-create" element={<PokemonFormPage />} />
          <Route path="/Pokemon/:id" element={<PokemonFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
