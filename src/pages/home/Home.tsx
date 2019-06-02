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
import { Cell, Column, Table } from '@blueprintjs/table';

const vocations = [
  { curso: 'Matemática', faculdade: 'Usp', turno: 'Matutino', notaDeCorte: 643.0, cidade: 'São Paulo, SP' },
  { curso: 'Engenharia Civil', faculdade: 'Ufscar', turno: 'Noturno', notaDeCorte: 643.0, cidade: 'São Carlos, SP' },
  { curso: 'Engenharia de Produção', faculdade: 'Unicamp', turno: 'Noturno', notaDeCorte: 643.0, cidade: 'Campinas, SP' },
];

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
            <MenuItem to="/progresso" iconName="dashboard" popover="Progresso" />
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

              <Table numRows={vocations.length}>
                <Column name="Curso" cellRenderer={(rowIndex) => <Cell>{vocations[rowIndex].curso}</Cell>}/>
                <Column name="Faculdade" cellRenderer={(rowIndex) => <Cell>{vocations[rowIndex].faculdade}</Cell>}/>
                <Column name="Turno" cellRenderer={(rowIndex) => <Cell>{vocations[rowIndex].turno}</Cell>}/>
                <Column name="Nota de Corte" cellRenderer={(rowIndex) => <Cell>{vocations[rowIndex].notaDeCorte}</Cell>}/>
                <Column name="Cidade" cellRenderer={(rowIndex) => <Cell>{vocations[rowIndex].cidade}</Cell>}/>
              </Table>

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
