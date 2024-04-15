import Home from "./components/Home";
import OverviewComponent from "./components/OverviewComponent";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [budget, setBudget] = useState("");
  return (
    <>
      {/* <h1 className="font-main bg-bg-800 text-white">HELLO </h1> */}

      <Routes>
        <Route
          path="/"
          element={<Home budget={budget} setBudget={setBudget} />}
        />
        <Route
          path="/overview"
          element={<OverviewComponent budget={budget} />}
        />
      </Routes>
    </>
  );
}

export default App;
