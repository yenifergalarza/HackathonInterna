import React from 'react';

const MenuOptions = ({click, options, aClass}) => {
  return (
      <a onClick={click} data-testid={options} class={aClass} id="nav-home-tab" data-toggle="tab" href="#" role="tab">{options}</a>
  )
};

export default MenuOptions;