import { useState } from "react";
import "./App.css";

import PolarBar from "./components/PolarBar";
import PolarLine from "./components/PolarLine";
import PolarScatter from "./components/PolarScatter";

type ChartId = "bar" | "line" | "scatter";

const charts: Array<{
  id: ChartId;
  label: string;
  kicker: string;
  title: string;
  description: string;
  summary: string;
}> = [
  {
    id: "bar",
    label: "Polar Bar",
    kicker: "Wind rose",
    title: "Directional intensity",
    description: "Compare values by cardinal direction with a compact polar bar view.",
    summary: "Strongest sector: W",
  },
  {
    id: "line",
    label: "Polar Line",
    kicker: "Cycle path",
    title: "Radial trend",
    description: "Trace the progression around the compass to spot directional shifts.",
    summary: "Peak radius: 8",
  },
  {
    id: "scatter",
    label: "Polar Scatter",
    kicker: "Samples",
    title: "Directional observations",
    description: "Inspect individual readings against ordered bearing and range bands.",
    summary: "Samples: 3",
  },
];

const stats = [
  { label: "Stations", value: "12" },
  { label: "Readings", value: "8.4k" },
  { label: "Coverage", value: "360°" },
];

function App() {
  const [chart, setChart] = useState<ChartId>("bar");
  const activeChart = charts.find((item) => item.id === chart) ?? charts[0];

  const renderChart = () => {
    if (chart === "line") return <PolarLine />;
    if (chart === "scatter") return <PolarScatter />;

    return <PolarBar />;
  };

  return (
    <main className="dashboard">
      <section className="dashboard-hero">
        <div>
          <p className="eyebrow">Climate Analytics</p>
          <h1>Polar climate dashboard</h1>
          <p className="hero-copy">
            Directional climate readings with fast switching between polar views.
          </p>
        </div>

        <div className="stat-strip" aria-label="Dashboard summary">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-grid">
        <aside className="chart-sidebar" aria-label="Chart selector">
          <div className="section-heading">
            <span>Views</span>
            <strong>Polar charts</strong>
          </div>

          <div className="menu">
            {charts.map((item) => (
              <button
                className={chart === item.id ? "chart-button active" : "chart-button"}
                key={item.id}
                onClick={() => setChart(item.id)}
                type="button"
              >
                <span>{item.kicker}</span>
                <strong>{item.label}</strong>
              </button>
            ))}
          </div>

          <div className="insight-panel">
            <span>Current insight</span>
            <strong>{activeChart.summary}</strong>
            <p>{activeChart.description}</p>
          </div>
        </aside>

        <section className="chart-panel">
          <div className="chart-header">
            <div>
              <p className="eyebrow">{activeChart.kicker}</p>
              <h2>{activeChart.title}</h2>
            </div>
            <span className="status-pill">Live preview</span>
          </div>

          <div className="chart-container">
            {renderChart()}
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
