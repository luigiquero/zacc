import _ from 'lodash';
import React from "react";
import { Card, FormGroup, NumericInput } from '@blueprintjs/core';
import { Table, Column, Cell} from '@blueprintjs/table';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import store from "../../redux/Store";
import { widths } from '../../utils/table';

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
    return <Cell>{this.state.data[row].media.toFixed(1)}</Cell>
  }

  private renderStudyHours = (row: number) => {
    const time = this.state.data[row].studyHour;
    const totalMinutes = Math.floor(time * 60);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const message = _.filter([
      hours >= 1 && `${hours.toFixed(0)}h`,
      minutes > 0 && `${(minutes).toFixed()}min`,
      time === 0 && 'N/A',
    ]).join(' ');

    return <Cell>{message}</Cell>
  }

  private SelectHours = () => {
    return (
      <div className="performance__card-title--wrapper">
        <p className="performance__card-title">
          Plano de Estudos
        </p>
        <FormGroup
          label="Quantidade de horas"
          labelFor="numeric-input"
          inline
          className="performance__numberic-input"
        >
          <NumericInput
            id="numeric-input"
            min={0}
            max={100}
            style={{ maxWidth: '100px' }}
            onValueChange={(v) => {
              this.setState({
                totalStudy: v,
                data: this.getStudyPlanData(v),
              });
            }}
            value={this.state.totalStudy}
          />
        </FormGroup>
      </div>
    )
  }

  private StudyHours = () => {
    return (
      <Table
        numRows={this.state.data.length}
        enableRowHeader={false}
        columnWidths={widths(3)}
      >
        <Column name="Matéria" cellRenderer={this.renderMaterias}/>
        <Column name="Média" cellRenderer={this.renderMedia}/>
        <Column name="Horas de Estudos" cellRenderer={this.renderStudyHours}/>
      </Table>
    )
  }

  render() {
    return (
      <div className="performance__study">
        <Card className="study__card">
          <this.SelectHours/>
          <this.StudyHours/>
        </Card>
      </div>
    );
  }
}
