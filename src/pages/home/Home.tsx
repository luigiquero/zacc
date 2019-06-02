import React from 'react';
import Layout from '../../components/layout/Layout';
import Content from '../../components/content/Content';
import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import { Button, Card, NavbarHeading, Text } from '@blueprintjs/core';
import MenuItem from '../../components/menu/MenuItem';
import { userActions } from '../../redux/user';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import './home.scss';
import SuggestionCard from './SuggestionCard';

const Home = connect(null, { setLogged: userActions.setLogged })(
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
            <MenuItem to="/como-estou" iconName="dashboard" popover="Como estou" />
            <MenuItem to="/historico" iconName="series-configuration" popover="Dashboard" />
          </Menu>

          <Content className="home">
            <div className="home__first-section">
              <Card elevation={2} className="home__card">
                <div className="home__svg home__svg--superhero">
                  svg placeholder
                </div>
                <p className="home__text home__text--congrats">
                  Parabéns você está entre os 7%
                  melhores do Brasil em Matemática
                </p>
              </Card>

              <Card elevation={2} className="home__card">
                <p className="home__text home__text--performance">
                  Desempenho
                </p>
              </Card>
            </div>

            <SuggestionCard />

            <Card elevation={2} className="home__card home__card--table">
              <p className="home__text--table">
                Sugestões Vocacionais
              </p>
              <div>
                 a table comes here
              </div>
              <p className="home__text--more">
                Veja Mais
              </p>
            </Card>
          </Content>
        </Layout.Main>
      </Layout.Root>
    );
  }));

export default Home;
