import React from 'react';
import Layout from '../../components/layout/Layout';
import Content from '../../components/content/Content';
import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <Layout.Root>
      <Menu>

      </Menu>
      <Layout.Main>
        <Header>

        </Header>
        <Content>

        </Content>
      </Layout.Main>
    </Layout.Root>
  )
};

export default connect()(Home);
