declare module "react-plotly.js" {
  import type { ComponentType, CSSProperties } from "react";

  export interface PlotParams {
    data: Record<string, unknown>[];
    layout?: Record<string, unknown>;
    config?: Record<string, unknown>;
    style?: CSSProperties;
    className?: string;
    useResizeHandler?: boolean;
  }

  const Plot: ComponentType<PlotParams>;

  export default Plot;
}

declare module "react-plotly.js/factory" {
  import type { ComponentType, CSSProperties } from "react";

  export interface PlotParams {
    data: Record<string, unknown>[];
    layout?: Record<string, unknown>;
    config?: Record<string, unknown>;
    style?: CSSProperties;
    className?: string;
    useResizeHandler?: boolean;
  }

  const createPlotlyComponent: (plotly: unknown) => ComponentType<PlotParams>;

  export default createPlotlyComponent;
}

declare module "plotly.js/dist/plotly" {
  const Plotly: unknown;

  export default Plotly;
}
