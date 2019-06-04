import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import './styles.css';

function Main() {
  return (
    <div className="App">
      <div className="wrapper">
        <App />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
