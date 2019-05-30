import React, { createRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTabs } from '@zendeskgarden/container-tabs';

import LoremIpsum from './LoremIpsum';
import { Settings, Heart, Mic, StyledTabList, Rect } from './styled-elements';
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
    <Rect display="flex" height="100vh" flexDirection="column" className="tabs">
      <StyledTabList {...getTabListProps()}>{tabComponents}</StyledTabList>
      <Rect order={-1} flex="1" padding="24px" overflow="auto">
        {tabPanels}
      </Rect>
    </Rect>
  );
}

function App() {
  return <Tabs />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
