import React from 'react';

const Content = ({ children }: React.ComponentProps<'div'>) => {
  return (
    <div className="z-content">
      {children}
    </div>
  );
};

export default Content;
