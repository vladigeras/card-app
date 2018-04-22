import React from 'react';

export let MenuComponent = () => {
  return (
      <nav>
          <div className="nav-wrapper">
              <a href="#" className="brand-logo menu-logo">React and NodeJS</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li className="active"><a>Cards</a></li>
                  <li><a>Table</a></li>
              </ul>
          </div>
      </nav>
  );
};