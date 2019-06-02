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

import { userActions } from '../../redux/user';

import './report.scss';


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
          <Menu />

          <Content className="performance">
            <div className="performance__first-section">
              <Card className="performance__radar">
                <RadarChart />
              </Card>

              <Card className="performance__line">
                <LineChart />
              </Card>
            </div>
            <PlanoEstudos />
          </Content>
        </Layout.Main>
      </Layout.Root>
    );
  }));

export default Report;
