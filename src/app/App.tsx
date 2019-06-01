import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthRoute from '../components/auth-route/AuthRoute';
import Login from '../pages/login/Login';
import Report from '../pages/report/Report';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <AuthRoute>
            <div>
              Home
            </div>
          </AuthRoute>
        </Route>
        <Route path="/report" exact>
          <AuthRoute>
            <Report/>
          </AuthRoute>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
