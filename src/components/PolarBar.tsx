import Plot from "./Plot";
import { baseLayout, chartConfig, polarLayout } from "./chartStyle";

const PolarBar = () => {
  const data = [
    {
      type: "barpolar",
      r: [2.2, 3.8, 2.9, 4.6, 3.2, 2.4, 3.7, 5.1],
      theta: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
      marker: {
        color: ["#0f766e", "#14b8a6", "#2f80ed", "#7c3aed", "#f59e0b", "#ef6c00", "#dc2626", "#64748b"],
        line: { color: "#ffffff", width: 2 },
        opacity: 0.88,
      },
      hovertemplate: "<b>%{theta}</b><br>Intensity: %{r:.1f}<extra></extra>",
    },
  ];

  const layout = {
    ...baseLayout,
    polar: {
      ...polarLayout,
      radialaxis: {
        ...polarLayout.radialaxis,
        range: [0, 5.8],
      },
    },
  };

  return (
    <Plot
      config={chartConfig}
      data={data}
      layout={layout}
      style={{ width: "100%", height: "100%" }}
      useResizeHandler
    />
  );
};

export default PolarBar;
