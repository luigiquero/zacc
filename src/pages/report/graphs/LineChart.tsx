import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";
import FusionCharts from "fusioncharts";
import store from "../../../redux/Store";
import { Colors } from "@blueprintjs/core";

// Resolves charts dependancy
charts(FusionCharts);

const MEDIA_PRA_PASSAR = 6;

export class LineChart extends React.Component {
  private getMateriasData() {
    return store.getState().activities.map((activity, index) => {
      return {
        seriesname: activity.materia,
        visible: index == 0 ? "1" : "0",
        data: activity.provas.map((prova: { nota: any; }) => {
          return {
            value: prova.nota
          }
        })
      }
    })
  }
  
  private dataSource = {
    chart: {
      paletteColors: `${Colors.ROSE3}, ${Colors.VIOLET3}, ${Colors.INDIGO3}, ${Colors.COBALT3}, ${Colors.TURQUOISE3}, ${Colors.FOREST3}, ${Colors.LIME3}`,
      caption: "Evolução das notas",
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
    dataset: this.getMateriasData(),
    trendlines: [
      {
        line: [
          {
            "startvalue": MEDIA_PRA_PASSAR,
            "color": Colors.GRAY3,
            "valueOnRight": "1",
            "displayvalue": "Média"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ReactFusioncharts
        type="msline"
        width="400"
        height="400"
        dataFormat="JSON"
        dataSource={this.dataSource}
      />
    );
  }
}
