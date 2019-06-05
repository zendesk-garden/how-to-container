import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useTooltip } from '@zendeskgarden/container-tooltip';

import './styles.css';

function App() {
  const tooltipRef = useRef(null);

  const { isVisible, getTooltipProps, getTriggerProps } = useTooltip({
    tooltipRef
  });

  const styles = {
    visibility: isVisible ? 'visible' : 'hidden',
    background: '#1f73b7',
    padding: '10px',
    margin: '6px 0',
    color: '#fff'
  };

  return (
    <div>
      <button {...getTriggerProps({ onMouseEnter: e => e.preventDefault() })}>
        Focus or click
      </button>
      <div
        {...getTooltipProps({
          ref: tooltipRef,
          style: styles
        })}
      >
        Tooltip
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
