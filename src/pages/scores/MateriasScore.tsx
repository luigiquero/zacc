import React from 'react';
import { Card, Colors } from '@blueprintjs/core';
import store from '../../redux/Store';
import { Table, Column, Cell } from '@blueprintjs/table';
import { widths } from '../../utils/table';

import './materias-score.scss';

export class MateriasScore extends React.Component<any> {
  private activities = store.getState().activities;

  render() {

    return this.activities.map((_a, index, arr) => {
      const i = index * 2;

      if (i >= arr.length) {
        return null;
      }

      if (i === arr.length - 1) { // odd numbers
        return (
          <div className="materia__first-section" key={this.activities[i].materia}>
            <Card elevation={2} key={this.activities[i].materia} className="materia__card materia__card--table">
              <p className="materia__text--table">
                {this.activities[i].materia}
              </p>

              <div>
                <Table
                  columnWidths={widths(2, 390)}
                  numRows={this.activities[i].provas.length}
                  enableRowHeader={false}
                  defaultRowHeight={40}
                >
                  <Column
                    name="Prova"
                    cellRenderer={(rowIndex) => (
                      <Cell style={{ color: Colors.TURQUOISE3, fontWeight: 'bold' }}>
                        {this.activities[i].provas[rowIndex].name}
                      </Cell>
                    )}
                  />
                  <Column name="Nota" cellRenderer={(rowIndex) =>
                    <Cell>{this.activities[i].provas[rowIndex].nota.toFixed(1)}</Cell>} />
                </Table>
              </div>
            </Card>
          </div>
        );
      }

      return (
        <div className="materia__first-section" key={this.activities[i].materia}>
          <Card elevation={2} key={this.activities[i].materia} className="materia__card materia__card--table">
            <p className="materia__text--table">
              {this.activities[i].materia}
            </p>

            <div>
              <Table
                columnWidths={widths(2, 390)}
                numRows={this.activities[i].provas.length}
                enableRowHeader={false}
                defaultRowHeight={40}
              >
                <Column name="Prova"
                        cellRenderer={(rowIndex) => <Cell style={{ color: Colors.TURQUOISE3, fontWeight: 'bold' }}>{this.activities[i].provas[rowIndex].name}</Cell>} />
                <Column name="Nota" cellRenderer={(rowIndex) =>
                  <Cell>{this.activities[i].provas[rowIndex].nota.toFixed(1)}</Cell>} />
              </Table>
            </div>
          </Card>

          <Card elevation={2} key={this.activities[i + 1].materia} className="materia__card materia__card--table">
            <p className="materia__text--table">
              {this.activities[i + 1].materia}
            </p>

            <div>
              <Table
                columnWidths={widths(2, 390)}
                numRows={this.activities[i + 1].provas.length}
                enableRowHeader={false}
                defaultRowHeight={40}
              >
                <Column name="Prova"
                        cellRenderer={(rowIndex) => <Cell style={{ color: Colors.TURQUOISE3, fontWeight: 'bold' }}>{this.activities[i + 1].provas[rowIndex].name}</Cell>} />
                <Column name="Nota" cellRenderer={(rowIndex) =>
                  <Cell>{this.activities[i + 1].provas[rowIndex].nota.toFixed(1)}</Cell>} />
              </Table>
            </div>
          </Card>
        </div>
      );
    });

  }
}
