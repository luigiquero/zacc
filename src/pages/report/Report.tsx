import React from 'react';
import Layout from '../../components/layout/Layout';
import Content from '../../components/content/Content';
import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import { RadarChart } from './graphs/RadarChart';
import { LineChart } from './graphs/LineChart';
import { Card, FormGroup, NumericInput } from '@blueprintjs/core';
import { Table, Column, Cell } from '@blueprintjs/table';

import './report.scss';

const ChartPerformance = () => {
  return (
    <div className="z-performance">
      <Card className="z-card">
        <RadarChart/>
      </Card>
      <Card className="z-card">
        <LineChart/>
      </Card>
    </div>
  )
}

const StudyPlan = () => {
  return (
    <div className="z-study-plan">
      <Card className="z-card">
        <FormGroup
          label="Quantidade de horas que pretendo estudar essa semana"
          labelFor="text-input"
        >
          <NumericInput min={0} max={100} value={6}/>
        </FormGroup>

        <div>Insira Aqui a sugestao de estudos</div>
      </Card>
    </div>
  )
}

const Report = () => {
  return (
    <Layout.Root>
      <Menu>
      </Menu>
      <Layout.Main>
        <Header>
        </Header>
        <Content>
          <ChartPerformance/>
          <StudyPlan/>
        </Content>
      </Layout.Main>
    </Layout.Root>
  )
};

export default Report;
