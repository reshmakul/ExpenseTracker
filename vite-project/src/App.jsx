// import Home from "./components/Home";
// import OverviewComponent from "./components/OverviewComponent";
// import { Routes, Route } from "react-router-dom";
import Tracker from "./components/Tracker";
function App() {
  let budget = 550;
  let totalExpenses = 300;
  let balance = budget - totalExpenses;

  return (
    <>
      <h1 className="font-main bg-bg-800 text-white">HELLO </h1>

      <Tracker
        balance={balance}
        totalExpenses={totalExpenses}
        budget={budget}
      />
      {/* <Routes>
        <Route to='/' element={<Home />} />
        <Route to='/Overveiw' element={<OverviewComponent />} />
      </Routes> */}
    </>
  );
}

export default App;
