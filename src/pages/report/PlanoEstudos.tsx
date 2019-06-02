import _ from 'lodash';
import React from "react";
import { Card, FormGroup, NumericInput } from '@blueprintjs/core';
import { Table, Column, Cell} from '@blueprintjs/table';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import store from "../../redux/Store";

const MAX_SCORE = 10;

export class PlanoEstudos extends React.Component {
  private getStudyPlanData = (totalStudy: number) => {
    const { activities } = store.getState();

    const averages = activities.map((activity) => {
      const sum = activity.provas.reduce((prev: any, { nota }: any) => prev + nota, 0);
      const average = sum/activity.provas.length;

      return { materia: activity.materia, media: average };
    });

    const gradesDiffSum = averages.reduce((prev: any, { media }: any) => {
      return (MAX_SCORE - media) + prev;
    }, 0);

    return averages.map((activity) => ({
      ...activity,
      studyHour: ((MAX_SCORE - activity.media) / gradesDiffSum) * totalStudy,
    }));
  }

  public state = {
    totalStudy: 6,
    data: this.getStudyPlanData(6),
  }

  private renderMaterias = (row: number) => {
    return <Cell>{this.state.data[row].materia}</Cell>
  }
  private renderMedia = (row: number) => {
    return <Cell>{this.state.data[row].media.toFixed(2)}</Cell>
  }

  private renderStudyHours = (row: number) => {
    const time = this.state.data[row].studyHour;

    const decimals = time - Math.floor(time);

    const message = _.filter([
      time >= 1 && `${time.toFixed(0)}h`,
      decimals > 0 && `${(decimals * 60).toFixed()}min`,
      time === 0 && 'N/A',
    ]).join(' ');

    return <Cell>{message}</Cell>
  }

  render() {
    console.log(this.state);
    return (
      <div className="z-study-plan">
        <Card className="z-card">
          <FormGroup
            label="Quantidade de horas que pretendo estudar essa semana"
            labelFor="text-input"
          >
            <NumericInput
              min={0}
              max={100}
              onValueChange={(v) => {
                this.setState({
                  totalStudy: v,
                  data: this.getStudyPlanData(v),
                });
              }}
              value={this.state.totalStudy}
            />
          </FormGroup>
  
          <Table numRows={this.state.data.length}>
            <Column name="Matéria" cellRenderer={this.renderMaterias}/>
            <Column name="Média" cellRenderer={this.renderMedia}/>
            <Column name="Horas de Estudos" cellRenderer={this.renderStudyHours}/>
          </Table>
        </Card>
      </div>
    );
  }
}