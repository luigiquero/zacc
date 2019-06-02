import React, { useState } from 'react';
import { InputGroup, Button, Card, H1, Intent, FormGroup, Text, Colors } from '@blueprintjs/core';

import LOGIN_SVG from '../../assets/images/login.svg';
import './login-page.scss';
import { userService } from '../../utils/requests';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import { userActions } from '../../redux/user';
import { connect } from 'react-redux';
import { AppState } from '../../redux/Store';

const LoginForm = connect(({ user: { logged } }: AppState) => ({ logged }), { setLogged: userActions.setLogged })(
  withRouter(({ history, setLogged, logged }: RouteComponentProps & { setLogged: typeof userActions.setLogged, logged: boolean }) => {
    if (logged) {
      return <Redirect to="/home" />;
    }
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

        <p className="z-header__logo">
          Z<span className="z-header__logo--dot">.</span>
        </p>

        <div className="login-page__background">
          <img
            src={LOGIN_SVG}
            alt="mulher sentada"
            className="login-page__image"
          />
        </div>

        <form>
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
              className="z-login-btn"
              type="submit"
              loading={loading}
              large
              intent={Intent.PRIMARY}
              onClick={submitLogin}
            >
              Entrar
            </Button>
            <p className="z-register-text">Ainda não está cadastrado? <a>Registre-se aqui</a></p>
          </Card>
        </form>
      </div>
    );
  }));

const Login = () => {
  return (
    <LoginForm />
  );
};

export default Login;
