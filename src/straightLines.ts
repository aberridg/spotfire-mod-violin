// Example JSON string
const jsonString = `
[
    {
        "trellis_panel": "panel1",
        "y_value": 20000,
        "color": "#ff0000",
        "dash_style": "5,5"
    },
    {
        "trellis_panel": "panel2",
        "y_value": 30000,
        "color": "#00ff00",
        "dash_style": "10,10"
    }
]
`;

import { GeneralStylingInfo, ScaleStylingInfo, Tooltip } from "spotfire-api";

// @ts-ignore
import * as d3 from "d3";

import {
  D3_SELECTION,
  Data,
  Options,
  StatisticsConfig,
  SumStatsSettings,
} from "./definitions";
import { Log, LOG_CATEGORIES } from "./log";
import { SumStatsConfig } from "./sumstatsconfig";

// Parse JSON string
const linesConfig = JSON.parse(jsonString);

export function renderStraightLines(
        g: D3_SELECTION,
        config: Partial<Options>,
        plotData: Data,
        margin: any,
        xScale: d3.scale,
        yScale: d3.scale,
        fontClass: string,
        styling: {
          generalStylingInfo: GeneralStylingInfo;
          scales: ScaleStylingInfo;
        },
        tooltip: Tooltip
      ) {

        return;

    // Draw horizontal lines based on configuration
    linesConfig.forEach((lineConfig: { trellis_panel: string, y_value: number, color: string, dash_style: string }) => {
    g.append('line')
        .attr('x1', 0)
        .attr('x2', 800)
        .attr('y1', yScale(lineConfig.y_value))
        .attr('y2', yScale(lineConfig.y_value))
        .attr('stroke', lineConfig.color)
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', lineConfig.dash_style);

}
      }