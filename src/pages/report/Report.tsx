import React from 'react';
import Layout from '../../components/layout/Layout';
import Content from '../../components/content/Content';
import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import { RadarChart } from './graphs/RadarChart';
import { LineChart } from './graphs/LineChart';
import { Card } from '@blueprintjs/core';
import { PlanoEstudos } from './PlanoEstudos';

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
          <PlanoEstudos/>
        </Content>
      </Layout.Main>
    </Layout.Root>
  )
};

export default Report;
