import { Chart } from "react-google-charts";
import React from "react";

export const data = [
    ['Character', 'Ki', { role: "style" }],
    ['Goku', 1000, "#ff751a"],
    ['Vegueta', 800, "blue"], // English color name
    ['Gohan', 400, "#ffc299"],
    ['Picoro', 500, "green"], // CSS-style declaration
    ['Freezer', 900, "color: #6600ff"],
];


export default function Gcharts() {
    return(
    <Chart chartType="PieChart" width="100%" height="400px" data={data} />
  );
{/* <Chart
  chartType="ScatterChart"
  data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
  width="100%"
  height="400px"
  legendToggle
/> */}


}

