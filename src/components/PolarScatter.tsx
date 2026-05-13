import Plot from "./Plot";

const PolarScatter = () => {
  const data = [
    {
      mode: "markers",
      r: ["0-1", "1-2", "2-3"],
      theta: ["N", "NNE", "NE"],
      type: "scatterpolar",
    },
  ];

  const layout = {
    title: "Polar Scatter Chart",
    polar: {
      angularaxis: {
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
        direction: "clockwise",
        rotation: 90,
      },
      radialaxis: {
        categoryarray: ["0-1", "1-2", "2-3", "3-4", "4-4", "4-5", "5-6", "6+"],
        categoryorder: "array",
      },
    },
  };

  return (
    <Plot
      data={data}
      layout={layout}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default PolarScatter;
