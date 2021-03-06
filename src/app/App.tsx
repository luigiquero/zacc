import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AuthRoute from '../components/auth-route/AuthRoute';
import Login from '../pages/login/Login';
import Report from '../pages/report/Report';
import Home from '../pages/home/Home';
import Scores from '../pages/scores/Scores';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact>
          <AuthRoute>
            <Home />
          </AuthRoute>
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/progresso" exact>
          <AuthRoute>
            <Report/>
          </AuthRoute>
        </Route>

        <Route path="/notas" exact>
          <AuthRoute>
            <Scores/>
          </AuthRoute>
        </Route>

        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
