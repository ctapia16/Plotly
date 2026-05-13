import Plot from "./Plot";

const PolarBar = () => {
  const data = [
    {
      type: "barpolar",
      r: [1, 2, 3, 4],
      theta: ["N", "E", "S", "W"],
    },
  ];

  const layout = {
    title: "Polar Bar Chart",
  };

  return (
    <Plot
      data={data}
      layout={layout}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default PolarBar;
