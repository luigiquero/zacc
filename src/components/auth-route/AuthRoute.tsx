import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from '../../redux/Store';
import userReducer from '../../redux/user';

const mapStateToProps = ({ user: { logged } }: AppState) => ({ logged });
type AuthRouteProps = RouteComponentProps
  & Pick<ReturnType<typeof userReducer>, 'logged'>
  & { children: any };

const AuthRoute = ({ children, history, logged }: AuthRouteProps) => {
  // useEffect(() => {
  //   if (!logged) {
  //     history.push('/login');
  //   }
  // }, [logged]);

  // if (!logged) return null;

  return children;
};

export default connect(mapStateToProps)(withRouter(AuthRoute));
