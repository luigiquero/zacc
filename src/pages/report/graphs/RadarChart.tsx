import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";
import store from "../../../redux/Store";
import { Colors } from '@blueprintjs/core';
charts(FusionCharts);

export class RadarChart extends React.Component<any> {
  private getMateriasData() {
    return store.getState().activities.map((activity) => {
      return {
        label: activity.materia
      }
    })
  }

  private getAverageData() {
    return store.getState().activities.map((activity) => {
      let average = 0;
      let sum = 0;

      activity.provas.forEach((prova: { nota: number; }) => {
        sum+= prova.nota;
      })

      average = sum/activity.provas.length;

      return {
        value: average
      }
    })
  }


  private dataSource = {
    chart: {
      caption: this.props.title || "Desempenho por Matérias",
      theme: "fusion",
      showlegend: "1",
      showdivlinevalues: "0",
      showlimits: "0",
      plotfillalpha: "40",
      yaxisMaxValue: "10",
      yaxisMinValue: "0",
      yaxisValuesStep: "1",
    },
    categories: [
      {
        category: this.getMateriasData(),
      }
    ],
    dataset: [
      {
        seriesname: "Nota do Aluno",
        showvalues: "1",
        data: this.getAverageData(),
      },
      {
        seriesname: "Media Nacional",
        showvalues: "0",
        showPlotBorder: "1",
        plotBorderColor: Colors.COBALT3,
        plotBorderThickness: "2",
        plotBorderAlpha: "40",
        alpha: "0",
        data: [
          {
            value: "6"
          },
          {
            value: "6"
          },
          {
            value: "4"
          },
          {
            value: "6"
          },
          {
            value: "5"
          },
          {
            value: "6"
          },
          {
            value: "7"
          },
        ],
      }
    ]
  };

  render() {
    return (
      <ReactFusioncharts
        type="radar"
        width={this.props.width}
        height={this.props.width}
        dataFormat="JSON"
        dataSource={this.dataSource}
      />
    );
  }
}
