import classNames from 'classnames';
import React from 'react';

import './layout.scss';

const Layout = ({ children, className }: React.ComponentProps<'div'>) => {
  return (
    <div className={classNames('z-layout', className)}>
      {children}
    </div>
  );
};

const Main = ({ children }: React.ComponentProps<'div'>) => {
  return (
    <div className="z-layout__main">
      {children}
    </div>
  );
};

export default {
  Root: Layout,
  Main,
};
