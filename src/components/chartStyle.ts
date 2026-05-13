export const chartConfig = {
  displayModeBar: false,
  responsive: true,
};

export const baseLayout = {
  autosize: true,
  paper_bgcolor: "rgba(0,0,0,0)",
  plot_bgcolor: "rgba(0,0,0,0)",
  margin: { l: 34, r: 34, t: 28, b: 34 },
  font: {
    family: "system-ui, Segoe UI, Roboto, sans-serif",
    color: "#364152",
  },
  showlegend: false,
  hoverlabel: {
    bgcolor: "#102033",
    bordercolor: "#102033",
    font: { color: "#ffffff" },
  },
};

export const polarLayout = {
  bgcolor: "#f8fbfb",
  angularaxis: {
    direction: "clockwise",
    gridcolor: "#dbe7e8",
    linecolor: "#bfd0d4",
    rotation: 90,
    tickfont: { color: "#586575", size: 12 },
  },
  radialaxis: {
    gridcolor: "#dbe7e8",
    linecolor: "#bfd0d4",
    tickfont: { color: "#586575", size: 11 },
  },
};
