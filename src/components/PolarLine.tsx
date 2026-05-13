import Plot from "./Plot";

const PolarLine = () => {
  const data = [
    {
      mode: "lines",
      r: [1, 2, 3, 4, 5, 6, 7, 8],
      theta: [0, 45, 90, 135, 180, 225, 270, 315],
      type: "scatterpolar",
    },
  ];

  const layout = {
    title: "Polar Line Chart",
    polar: {
      angularaxis: { direction: "clockwise", rotation: 90 },
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

export default PolarLine;
