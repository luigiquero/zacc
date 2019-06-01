import React from 'react';

const Menu = ({ children }: React.ComponentProps<'div'>) => {
  return (
    <div className="z-menu">
      {children}
    </div>
  );
};

export default Menu;
