import { Routes, Route } from "react-router-dom";

import CargoPage from "./ui/pages/CargoPage";
import HomePage from "./ui/pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cargo" element={<CargoPage />} />
    </Routes>
  );
}

export default App;
