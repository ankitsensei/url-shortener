import { Routes, Route } from "react-router";
import Hero from "./pages/Hero";
import Pricing from "./pages/Pricing";
import Faqs from "./pages/Faqs";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Hero />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="faqs" element={<Faqs />} />
      </Routes>
    </div>
  );
};

export default App;
