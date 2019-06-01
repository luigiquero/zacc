import React from 'react';
import Layout from '../../components/layout/Layout';
import Content from '../../components/content/Content';
import Header from '../../components/header/Header';
import { FormGroup, InputGroup, Button } from '@blueprintjs/core';

const LoginForm = () => {
  return (
    <>
      <FormGroup
        label="Usuário"
        labelFor="text-input"
      >
        <InputGroup id="text-input" placeholder="exemplo@ies.com" />
      </FormGroup>

      <FormGroup
        label="Senha"
        labelFor="text-input"
      >
        <InputGroup id="text-input" placeholder="********" />
      </FormGroup>

      <Button type="button">Login</Button>
    </>
  )
}

const Home = () => {
  return (
    <Layout.Root>
      <Layout.Main>
        <Header>
        </Header>
        <Content>
          <LoginForm/>
        </Content>
      </Layout.Main>
    </Layout.Root>
  )
};

export default Home;
