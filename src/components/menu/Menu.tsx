import React from 'react';

import './menu.scss';
import MenuItem from './MenuItem';

const Menu = ({ children }: React.ComponentProps<'div'>) => {
  return (
    <div className="z-menu">
      <MenuItem to="/home" iconName="home" popover="Home" />
      <MenuItem to="/progresso" iconName="dashboard" popover="Progresso" />
      <MenuItem to="/notas" iconName="series-configuration" popover="Notas" />
    </div>
  );
};

export default Menu;
