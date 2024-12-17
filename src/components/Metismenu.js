import React from 'react';
import MetisMenu from '@metismenu/react';

const MyMenuComponent = () => {
  return (
    <MetisMenu className="metismenu"
  toggle={true}>
      <ul className="metismenu">
        <li>
          <a href="#" aria-expanded="false">Item 1</a>
          <ul aria-expanded="false">
            <li><a href="#">Subitem 1</a></li>
            <li><a href="#">Subitem 2</a></li>
          </ul>
        </li>
        <li>
          <a href="#" aria-expanded="false">Item 2</a>
          <ul aria-expanded="false">
            <li><a href="#">Subitem 1</a></li>
            <li><a href="#">Subitem 2</a></li>
          </ul>
        </li>
      </ul>
    </MetisMenu>
  );
};

export default MyMenuComponent;
