import Plot from "./Plot";
import { baseLayout, chartConfig, polarLayout } from "./chartStyle";

const PolarLine = () => {
  const data = [
    {
      fill: "toself",
      fillcolor: "rgba(20, 184, 166, 0.14)",
      line: { color: "#0f766e", shape: "spline", width: 4 },
      marker: { color: "#ffffff", line: { color: "#0f766e", width: 2 }, size: 7 },
      mode: "lines",
      r: [2.1, 3.4, 4.2, 3.7, 5.1, 6.4, 7.2, 5.8],
      theta: [0, 45, 90, 135, 180, 225, 270, 315],
      type: "scatterpolar",
      hovertemplate: "Bearing: %{theta}°<br>Radius: %{r:.1f}<extra></extra>",
    },
  ];

  const layout = {
    ...baseLayout,
    polar: {
      ...polarLayout,
      radialaxis: {
        ...polarLayout.radialaxis,
        range: [0, 8],
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

export default PolarLine;
