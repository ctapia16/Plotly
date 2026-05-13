import Plot from "./Plot";
import { baseLayout, chartConfig, polarLayout } from "./chartStyle";

const PolarScatter = () => {
  const data = [
    {
      marker: {
        color: ["#0f766e", "#2f80ed", "#f59e0b", "#dc2626", "#7c3aed", "#14b8a6"],
        line: { color: "#ffffff", width: 2 },
        opacity: 0.92,
        size: [18, 22, 16, 26, 19, 21],
      },
      mode: "markers",
      r: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6"],
      theta: ["N", "NNE", "NE", "E", "SE", "S"],
      type: "scatterpolar",
      hovertemplate: "<b>%{theta}</b><br>Band: %{r}<extra></extra>",
    },
  ];

  const layout = {
    ...baseLayout,
    polar: {
      ...polarLayout,
      angularaxis: {
        ...polarLayout.angularaxis,
        categoryarray: [
          "N",
          "NNE",
          "NE",
          "ENE",
          "E",
          "ESE",
          "SE",
          "SSE",
          "S",
          "SSW",
          "SW",
          "WSW",
          "W",
          "WNW",
          "NW",
          "NNW",
        ],
        categoryorder: "array",
      },
      radialaxis: {
        ...polarLayout.radialaxis,
        categoryarray: ["0-1", "1-2", "2-3", "3-4", "4-4", "4-5", "5-6", "6+"],
        categoryorder: "array",
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

export default PolarScatter;
