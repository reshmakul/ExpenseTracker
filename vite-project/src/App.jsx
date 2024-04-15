import AddTransaction from "./components/AddTransaction";
import Home from "./components/Home";
import OverviewComponent from "./components/OverviewComponent";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="font-main bg-bg-800 text-white">HELLO </h1>
      <br />
      <AddTransaction />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OverviewComponent" element={<OverviewComponent />} />
      </Routes>
    </>
  );
}

export default App;
