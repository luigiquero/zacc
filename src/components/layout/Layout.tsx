import React from 'react';

const Layout = ({ children }: React.ComponentProps<'div'>) => {
  return (
    <div className="z-layout">
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
