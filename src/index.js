import React, { createRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTabs } from '@zendeskgarden/container-tabs';

import LoremIpsum from './LoremIpsum';
import {
  Settings,
  Heart,
  Mic,
  StyledTabList,
  Flex,
  Order
} from './styled-elements';
import './styles.css';

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
const tabRefs = tabs.map(() => createRef(null));

const icons = [Settings, Heart, Mic];

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
    const TabComponent = icons[index];

    tabComponents.push(
      <TabComponent
        {...getTabProps({
          item: tab,
          index,
          focusRef: tabRefs[index],
          key: tab,
          className: tab === selectedItem && 'selected'
        })}
      >
        {tab}
      </TabComponent>
    );

    tabPanels.push(
      <div {...getTabPanelProps({ index, item: tab, key: tab })}>
        [{tab}]
        <LoremIpsum section={index} />
      </div>
    );
  });

  return (
    <Flex direction="column" className="tabs">
      <StyledTabList {...getTabListProps()}>{tabComponents}</StyledTabList>
      <Order order={-1}>{tabPanels}</Order>
    </Flex>
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
