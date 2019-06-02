import React from 'react';
import Layout from '../../components/layout/Layout';
import Content from '../../components/content/Content';
import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import { Button, Card, NavbarHeading, Text, Colors } from '@blueprintjs/core';
import { userActions } from '../../redux/user';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import SUPER_SVG from '../../assets/images/super.svg';

import './home.scss';
import SuggestionCard from './SuggestionCard';
import { Cell, Column, Table, ColumnHeaderCell } from '@blueprintjs/table';
import { RadarChart } from '../report/graphs/RadarChart';
import { widths } from '../../utils/table';

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
          <Menu />

          <Content className="home">
            <div className="home__first-section">
              <Card elevation={2} className="home__card">
                <img src={SUPER_SVG} alt="super heroi" className="home__svg home__svg--superhero"/>
                <p className="home__text home__text--congrats">
                  Parabéns você está entre os <span style={{color: Colors.GOLD4}}>7%
                  melhores do Brasil</span> em Matemática
                </p>
              </Card>

              <Card elevation={2} className="home__card home__card--performance">
                <RadarChart title="Desempenho"/>
              </Card>
            </div>

            <SuggestionCard />

            <Card elevation={2} className="home__card home__card--table">
              <p className="home__text--table">
                Orientação Vocacional
              </p>

              <Table
                numRows={vocations.length}
                enableRowHeader={false}
                columnWidths={widths(5)}
                defaultRowHeight={40}
              >
                <Column name="Curso" cellRenderer={(rowIndex) => <Cell style={{ color: Colors.TURQUOISE3 }}>{vocations[rowIndex].curso}</Cell>}/>
                <Column name="Faculdade" cellRenderer={(rowIndex) => <Cell>{vocations[rowIndex].faculdade}</Cell>}/>
                <Column name="Turno" cellRenderer={(rowIndex) => <Cell>{vocations[rowIndex].turno}</Cell>}/>
                <Column columnHeaderCellRenderer={()=> 
                  <ColumnHeaderCell
                    style={{ backgroundColor: Colors.TURQUOISE4 }}
                    name="Nota de Corte" />}
                  cellRenderer={(rowIndex) => <Cell style={{ backgroundColor: Colors.TURQUOISE4, color: Colors.WHITE }}>{vocations[rowIndex].notaDeCorte}</Cell>}/>
                <Column name="Cidade" cellRenderer={(rowIndex) => <Cell>{vocations[rowIndex].cidade}</Cell>}/>
              </Table>

              <p className="see__more">
                Veja Mais
              </p>
            </Card>
          </Content>
        </Layout.Main>
      </Layout.Root>
    );
  }));

export default Home;
