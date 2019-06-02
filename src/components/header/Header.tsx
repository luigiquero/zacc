import { Alignment, Button, Navbar, NavbarGroup, NavbarHeading } from '@blueprintjs/core';
import React, { useCallback } from 'react';

import './header.scss';
import { RouteComponentProps, withRouter } from 'react-router';

const Header = ({ children, history }: React.ComponentProps<'div'> & RouteComponentProps) => {
  const onClick = useCallback(() => {
    history.push('/home');
  }, [history]);

  return (
    <Navbar className="z-header">
      <NavbarGroup align={Alignment.LEFT} className="z-header__group">
        <NavbarHeading>
          <Button minimal large onClick={onClick}>
            <p className="z-header__logo">
              Z<span className="z-header__logo--dot">.</span>
            </p>
          </Button>
        </NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT} className="z-header__group">
        {children}
      </NavbarGroup>
    </Navbar>
  );
};

export default withRouter(Header);
