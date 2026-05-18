import { Routes, Route } from "react-router";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Hero />} />
      </Routes>
    </div>
  );
};

export default App;
