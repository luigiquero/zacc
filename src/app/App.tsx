import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthRoute from '../components/auth-route/AuthRoute';
import Login from '../pages/login/Login';

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
      </Switch>
    </BrowserRouter>
  );
};

export default App;
