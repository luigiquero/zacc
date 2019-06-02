import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";
import store from "../../../redux/Store";

charts(FusionCharts);

export class RadarChart extends React.Component {
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
        category: this.getMateriasData(),
      }
    ],
    dataset: [
      {
        seriesname: "User Ratings",
        data: this.getAverageData(),
      }
    ]
  };
  
  render() {
    return (
      <ReactFusioncharts
        type="radar"
        width="500"
        height="500"
        dataFormat="JSON"
        dataSource={this.dataSource}
      />
    );
  }
}
