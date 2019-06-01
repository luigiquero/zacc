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
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Matemática",
      data: [
        {
          value: "62"
        },
        {
          value: "64"
        },
        {
          value: "64"
        },
        {
          value: "66"
        },
        {
          value: "78"
        }
      ]
    },
    {
      seriesname: "História",
      data: [
        {
          value: "16"
        },
        {
          value: "28"
        },
        {
          value: "34"
        },
        {
          value: "42"
        },
        {
          value: "54"
        }
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
        {
          value: "7"
        }
      ]
    },
    {
      seriesname: "Inglês",
      data: [
        {
          value: "18"
        },
        {
          value: "19"
        },
        {
          value: "21"
        },
        {
          value: "21"
        },
        {
          value: "24"
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
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
