import React from "react";
import { Card } from "@blueprintjs/core";
import store from "../../redux/Store";
import './materias-score.scss';
import { Table, Column, Cell } from "@blueprintjs/table";

export class MateriasScore extends React.Component<any> {
  private activities = store.getState().activities;
  render() {
    return this.activities.map( (activity) => {
      return (
        <Card elevation={2} className="home__card home__card--table">
          <p className="home__text--table">
            {activity.materia}
          </p>
  
          <Table
            numRows={activity.provas.length}
            enableRowHeader={false}
          >
            <Column name="Prova" cellRenderer={(rowIndex) => <Cell>{activity.provas[rowIndex].name}</Cell>}/>
            <Column name="Nota" cellRenderer={(rowIndex) => <Cell>{activity.provas[rowIndex].nota.toFixed(2)}</Cell>}/>
          </Table>
        </Card>
      );
    })
    
  }
}
