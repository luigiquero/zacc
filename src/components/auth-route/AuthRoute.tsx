import React from 'react';

class AuthRoute extends React.Component {

  public render() {
    // @ts-ignore
    // if (!this.props.logged) {
    //   this.props.history.push('/login');
    //   return null;
    // }

    return this.props.children;
  }
}

export default AuthRoute;
