import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import Layout from '../../components/layout/Layout';
import Content from '../../components/content/Content';
import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import { RadarChart } from './graphs/RadarChart';
import { LineChart } from './graphs/LineChart';
import { Button, Card, NavbarHeading, Text } from '@blueprintjs/core';
import { PlanoEstudos } from './PlanoEstudos';

import MenuItem from '../../components/menu/MenuItem';
import { userActions } from '../../redux/user';

import './report.scss';

const ChartPerformance = () => {
  return (
    <div className="z-performance">
      <Card className="z-radar">
        <RadarChart />
      </Card>

      <Card className="z-line">
        <LineChart />
      </Card>
    </div>
  );
};

const Report = connect(null, { setLogged: userActions.setLogged })(
  withRouter(({ setLogged, history }: { setLogged: typeof userActions.setLogged } & RouteComponentProps) => {
    const onClick = () => {
      setLogged(false);
      history.push('/login');
    };

    return (
      <Layout.Root>
        <Header>
          <NavbarHeading>
            <Button minimal large onClick={onClick}>
              <Text className="z-text--gray">
                Sair
              </Text>
            </Button>
          </NavbarHeading>
        </Header>

        <Layout.Main>
          <Menu>
            <MenuItem to="/home" iconName="home" popover="Home" />
            <MenuItem to="/progresso" iconName="dashboard" popover="Progresso" />
          </Menu>
          <Content>

            <ChartPerformance />

            <PlanoEstudos />

          </Content>
        </Layout.Main>
      </Layout.Root>
    );
  }));

export default Report;
