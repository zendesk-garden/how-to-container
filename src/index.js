import React, { createRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTabs } from '@zendeskgarden/container-tabs';

import LoremIpsum from './LoremIpsum';
import './styles.css';

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
const tabRefs = tabs.map(() => createRef(null));

function Tabs() {
  const {
    selectedItem,
    getTabProps,
    getTabListProps,
    getTabPanelProps
  } = useTabs();
  const tabComponents = [];
  const tabPanels = [];

  tabs.forEach((tab, index) => {
    tabComponents.push(
      <button
        {...getTabProps({
          item: tab,
          index,
          focusRef: tabRefs[index],
          key: tab,
          className: tab === selectedItem && 'selected'
        })}
      >
        {tab}
      </button>
    );

    tabPanels.push(
      <div {...getTabPanelProps({ index, item: tab, key: tab })}>
        [{tab}]
        <LoremIpsum section={index} />
      </div>
    );
  });

  return (
    <div className="tabs">
      <div {...getTabListProps()}>{tabComponents}</div>
      {tabPanels}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Tabs />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
