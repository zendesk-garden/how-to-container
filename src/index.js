import React, { createRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { Menu } from './Menu';
import { Other } from './Other';
import './styles.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <div className="flexColumn">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
