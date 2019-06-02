import React from "react";
import { Card, FormGroup, NumericInput } from '@blueprintjs/core';
import { Table, Column, Cell} from '@blueprintjs/table';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";

export class PlanoEstudos extends React.Component {

  private data = [
    {
      materia: 'Portugues',
      media: 8,
      studyHour: 3
    },
    {
      materia: 'História',
      media: 7,
      studyHour: 2
    },
    {
      materia: 'Geografia',
      media: 5.9,
      studyHour: 6
    },
    {
      materia: 'Física',
      media: 8.3,
      studyHour: 1.2
    }
  ];

  private renderMaterias = (row: number) => {
    return <Cell>{this.data[row].materia}</Cell>
  }
  private renderMedia = (row: number) => {
    return <Cell>{this.data[row].media}</Cell>
  }

  private renderStudyHours = (row: number) => {
    return <Cell>{this.data[row].studyHour} hora(s)</Cell>
  }

  render() {
    return (
      <div className="z-study-plan">
        <Card className="z-card">
          <FormGroup
            label="Quantidade de horas que pretendo estudar essa semana"
            labelFor="text-input"
          >
            <NumericInput min={0} max={100} value={6}/>
          </FormGroup>
  
          <Table numRows={this.data.length}>
            <Column name="Matéria" cellRenderer={this.renderMaterias}/>
            <Column name="Média" cellRenderer={this.renderMedia}/>
            <Column name="Horas de Estudos" cellRenderer={this.renderStudyHours}/>
          </Table>
        </Card>
      </div>
    );
  }
}
