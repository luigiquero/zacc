import classNames from 'classnames';
import React from 'react';

import './menu-item.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Colors, Icon, Intent, Popover, PopoverInteractionKind } from '@blueprintjs/core';

type MenuItemProps = RouteComponentProps
  & {
  to: string,
  iconName: any,
  popover: any,
};

const MenuItem = ({ location, to, iconName, popover }: MenuItemProps) => {
  const isHere = location.pathname === to;
  const className = classNames(
    'z-menu-item',
    isHere && 'z-menu-item--active'
  );

  return (
    <Link to={to}>
      <div className={className}>
        <Popover
          interactionKind={PopoverInteractionKind.HOVER}
          content={<div>{popover}</div>}
          hoverOpenDelay={0}
          hoverCloseDelay={0}
        >
          <Icon
            icon={iconName}
            iconSize={27}
            intent={isHere ? Intent.PRIMARY : Intent.NONE}
            color={isHere ? Colors.TURQUOISE3 : Colors.GRAY3}
          />
        </Popover>
      </div>
    </Link>
  );
};

export default withRouter(MenuItem);
