import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import Layout from '../../components/layout/Layout';
import Content from '../../components/content/Content';
import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import { Button, Card, NavbarHeading, Text } from '@blueprintjs/core';

import { userActions } from '../../redux/user';

import './scores.scss';
import { MateriasScore } from './MateriasScore';


const Scores = connect(null, { setLogged: userActions.setLogged })(
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
            <MateriasScore/>
          </Content>
        </Layout.Main>
      </Layout.Root>
    );
  }));

export default Scores;
