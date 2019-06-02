import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";
import FusionCharts from "fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Performance de notas",
    showhovereffect: "1",
    drawcrossline: "1",
    theme: "fusion",
    yaxisMaxValue: "10",
    yaxisMinValue: "0",
  },
  categories: [
    {
      category: [
        {
          label: "P1"
        },
        {
          label: "P2"
        },
        {
          label: "P3"
        },
        {
          label: "P4"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Matemática",
      data: [
        {
          value: "7.8"
        },
        {
          value: "8.5"
        },
        {
          value: "9"
        },
        {
          value: "6"
        },
      ]
    },
    {
      seriesname: "História",
      data: [
        {
          value: "9"
        },
        {
          value: "8"
        },
        {
          value: "7"
        },
        {
          value: "4.5"
        },
      ]
    },
    {
      seriesname: "Geografia",
      data: [
        {
          value: "5"
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
      ]
    },
    {
      seriesname: "Inglês",
      data: [
        {
          value: "8"
        },
        {
          value: "5"
        },
        {
          value: "8"
        },
        {
          value: "3"
        },
      ]
    }
  ],
  trendlines: [
    {
      line: [
        {
          "startvalue": "6",
          "color": "#cccc",
          "valueOnRight": "1",
          "displayvalue": "Média"
        }
      ]
    }
]
};

export class LineChart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="msline"
        width="400"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
