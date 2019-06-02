import classNames from 'classnames';
import React from 'react';

import './content.scss';

const Content = ({ children, className }: React.ComponentProps<'div'>) => {
  return (
    <div className={classNames('z-content', className)}>
      {children}
    </div>
  );
};

export default Content;
