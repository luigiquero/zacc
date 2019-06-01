import React from 'react';

import './header.scss';

const Header = ({ children }: React.ComponentProps<'div'>) => {
  return (
    <div className="z-header">
      {children}
    </div>
  );
};

export default Header;
