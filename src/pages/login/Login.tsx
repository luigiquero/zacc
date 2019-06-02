import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Content from '../../components/content/Content';
import { InputGroup, Button, Card, H1, Intent, FormGroup } from '@blueprintjs/core';

import './login-page.scss';
import { userService } from '../../utils/requests';
import { RouteComponentProps, withRouter } from 'react-router';
import { userActions } from '../../redux/user';
import { connect } from 'react-redux';

const LoginForm = connect(null, { setLogged: userActions.setLogged })(
  withRouter(({ history, setLogged }: RouteComponentProps & { setLogged: typeof userActions.setLogged }) => {
  const [{ loading, error }, setState] = useState({ loading: false, error: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async () => {
    setState({ loading: true, error: '' });
    try {
      await userService.login({ email, password });
      setState({ loading: false, error: '' });
      setLogged();
      history.push('/home');
    } catch (err) {
      setState({ loading: false, error: err.message });
    }
  };

  const intent = error ? Intent.DANGER : Intent.NONE;

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
          helperText={error}
        >
          <InputGroup
            disabled={loading}
            intent={intent}
            leftIcon="user"
            className="margin-bottom"
            placeholder="Usuário"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <InputGroup
            disabled={loading}
            type="password"
            intent={intent}
            leftIcon="key"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </FormGroup>

        <Button
          type="button"
          loading={loading}
          large intent={Intent.PRIMARY}
          onClick={submitLogin}
        >
          Entrar
        </Button>
      </Card>
    </div>
  );
}));

const Login = () => {
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

export default Login;
