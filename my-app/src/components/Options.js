import React, {useState} from 'react';

const MenuOptions = ({click, options, aClass}) => {
  const [line, setLine] = useState(true)
  return (
    <li  className="nav-item" onClick={click} style={{textDecoration: !line ? "underline" : "" }}>
      <a data-testid={options} className={aClass} data-toggle="tab" href="#" role="tab" onChange={() => line ? setLine(false) : setLine(true)}>{options}</a>
    </li>
  )
};

export default MenuOptions;