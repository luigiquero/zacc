import React from 'react';
import Layout from '../../components/layout/Layout';
import Content from '../../components/content/Content';
import { InputGroup, Button, Card, H1, Intent, FormGroup } from '@blueprintjs/core';

import './login-page.scss';

const LoginForm = () => {
  const error = false;

  const intent = error ? Intent.DANGER : Intent.NONE;
  const helperText = error && 'Usuário ou senha incorretos';

  return (
    <div className="login-page__positioner">
      <div className="login-page__background" />
      <Card
        elevation={2}
        className="login-page__card"
      >
        <H1>Bem Vindo!</H1>

        <FormGroup
          intent={intent}
          helperText={helperText}
        >
          <InputGroup
            intent={intent}
            leftIcon="user"
            className="margin-bottom"
            placeholder="Usuário"
          />
          <InputGroup
            intent={intent}
            leftIcon="key"
            placeholder="Senha"
          />
        </FormGroup>

        <Button type="button" large intent={Intent.PRIMARY}>
          Entrar
        </Button>
      </Card>
    </div>
  );
};

const Home = () => {
  return (
    <Layout.Root>
      <Layout.Main>
        <Content>
          <LoginForm />
        </Content>
      </Layout.Main>
    </Layout.Root>
  );
};

export default Home;
