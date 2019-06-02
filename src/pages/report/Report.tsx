import React from 'react';
import Layout from '../../components/layout/Layout';
import Content from '../../components/content/Content';
import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import { RadarChart } from './graphs/RadarChart';
import { LineChart } from './graphs/LineChart';
import { Card, FormGroup, NumericInput } from '@blueprintjs/core';
import { Table, Column, Cell} from '@blueprintjs/table';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";

import './report.scss';

const ChartPerformance = () => {
  return (
    <div className="z-performance">
      <Card className="z-radar">
        <RadarChart/>
      </Card>
      <Card className="z-line">
        <LineChart/>
      </Card>
    </div>
  )
}

const StudyPlan = () => {
  const data = [
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

  const renderMaterias = (row: number) => {
    return <Cell>{data[row].materia}</Cell>
  }
  const renderMedia = (row: number) => {
    return <Cell>{data[row].media}</Cell>
  }

  const renderStudyHours = (row: number) => {
    return <Cell>{data[row].studyHour} hora(s)</Cell>
  }

  return (
    <div className="z-study-plan">
      <Card className="z-card">
        <FormGroup
          label="Quantidade de horas que pretendo estudar essa semana"
          labelFor="text-input"
        >
          <NumericInput min={0} max={100} value={6}/>
        </FormGroup>

        <Table numRows={data.length}>
          <Column name="Matéria" cellRenderer={renderMaterias}/>
          <Column name="Média" cellRenderer={renderMedia}/>
          <Column name="Horas de Estudos" cellRenderer={renderStudyHours}/>
        </Table>
      </Card>
    </div>
  )
}

const Report = () => {
  return (
    <Layout.Root>
      <Header>
      </Header>
      <Layout.Main>
        <Menu>
        </Menu>
        <Content>
          <ChartPerformance/>
          <StudyPlan/>
        </Content>
      </Layout.Main>
    </Layout.Root>
  )
};

export default Report;
