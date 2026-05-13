import { useState } from "react";
import "./App.css";

import PolarBar from "./components/PolarBar";
import PolarLine from "./components/PolarLine";
import PolarScatter from "./components/PolarScatter";

function App() {

  const [chart, setChart] = useState("polar");

  return (
    <div className="container">

      <h1>Climate Data Dashboard</h1>

      <div className="menu">

        <button onClick={() => setChart("polar")}>
          Polar Chart
        </button>

        <button onClick={() => setChart("chart2")}>
          Chart 2
        </button>

        <button onClick={() => setChart("chart3")}>
          Chart 3
        </button>

      </div>

      <div className="chart-container">

        {chart === "polar" && <PolarBar />}
        {chart === "chart2" && <PolarLine />}
        {chart === "chart3" && <PolarScatter />}

      </div>

    </div>
  );
}

export default App;