import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";

charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Skill Analysis of Harry",
    subcaption: "Escala: 0 (mínimo) a 10 (máximo)",
    theme: "fusion",
    showlegend: "0",
    showdivlinevalues: "0",
    showlimits: "0",
    showvalues: "1",
    plotfillalpha: "40",
  },
  categories: [
    {
      category: [
        {
          label: "História"
        },
        {
          label: "Física"
        },
        {
          label: "Biologia"
        },
        {
          label: "Química"
        },
        {
          label: "Matemática"
        },
      ]
    }
  ],
  dataset: [
    {
      seriesname: "User Ratings",
      data: [
        {
          value: "3"
        },
        {
          value: "3"
        },
        {
          value: "4"
        },
        {
          value: "3"
        },
        {
          value: "2"
        },
        {
          value: "4"
        }
      ]
    }
  ]
};

export class RadarChart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="radar"
        width="500"
        height="500"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
