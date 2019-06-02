import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";

charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Média Geral por Matérias",
    theme: "fusion",
    showlegend: "0",
    showdivlinevalues: "0",
    showlimits: "0",
    showvalues: "1",
    plotfillalpha: "40",
    yaxisMaxValue: "10",
    yaxisMinValue: "0",
    yaxisValuesStep: "1",
  },
  categories: [
    {
      category: [
        {
          label: "Português"
        },
        {
          label: "História"
        },
        {
          label: "Geografia"
        },
        {
          label: "Biologia"
        },
        {
          label: "Química"
        },
        {
          label: "Física"
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
          value: "10"
        },
        {
          value: "7"
        },
        {
          value: "6"
        },
        {
          value: "7"
        },
        {
          value: "8"
        },
        {
          value: "8"
        },
        {
          value: "6.5"
        },
        {
          value: "7.5"
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
