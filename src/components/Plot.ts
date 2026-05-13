import type { ComponentType, CSSProperties } from "react";
import * as createPlotlyComponentModule from "react-plotly.js/factory";
import * as PlotlyModule from "plotly.js/dist/plotly";

interface PlotParams {
  data: Record<string, unknown>[];
  layout?: Record<string, unknown>;
  config?: Record<string, unknown>;
  style?: CSSProperties;
  className?: string;
  useResizeHandler?: boolean;
}

const unwrapDefault = <T,>(module: unknown): T => {
  const firstDefault = (module as { default?: unknown }).default ?? module;

  return ((firstDefault as { default?: unknown }).default ?? firstDefault) as T;
};

const createPlotlyComponent = unwrapDefault<
  (plotly: unknown) => ComponentType<PlotParams>
>(createPlotlyComponentModule);
const Plotly = unwrapDefault<unknown>(PlotlyModule);
const Plot = createPlotlyComponent(Plotly);

export default Plot;
