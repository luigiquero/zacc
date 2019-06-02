import { Alignment, Button, Navbar, NavbarGroup, NavbarHeading } from '@blueprintjs/core';
import React, { useCallback } from 'react';

import './header.scss';
import { RouteComponentProps, withRouter } from 'react-router';

const Header = ({ children, history }: React.ComponentProps<'div'> & RouteComponentProps) => {
  const onClick = useCallback(() => {
    history.push('/home');
  }, []);

  return (
    <Navbar className="z-header">
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <Button minimal large onClick={onClick}>
            Zacc
          </Button>
        </NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        {children}
      </NavbarGroup>
    </Navbar>
  );
};

export default withRouter(Header);
