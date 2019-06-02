import React from 'react';
import Layout from '../../components/layout/Layout';
import Content from '../../components/content/Content';
import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import { Colors, Icon, Intent } from '@blueprintjs/core';
import MenuItem from '../../components/menu/MenuItem';

const Home = () => {
  return (
    <Layout.Root>
      <Header>

      </Header>

      <Layout.Main>
        <Menu>
          <MenuItem to="/home" iconName="home" popover="Home"/>
          <MenuItem to="/como-estou" iconName="dashboard" popover="Como estou" />
          <MenuItem to="/historico" iconName="series-configuration" popover="Dashboard"/>
        </Menu>

        <Content>

        </Content>
      </Layout.Main>
    </Layout.Root>
  )
};

export default Home;
