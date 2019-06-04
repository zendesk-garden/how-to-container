import React, { createRef, useState } from 'react';
import { useTabs } from '@zendeskgarden/container-tabs';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/16/gear-fill.svg';
import 'styled-components/macro';

import { Other } from './Other';
import { Header } from './Header';
import { Main, TabItem, TabList, TabLabel, TabPanel } from './styled-elements';

const icons = [
  SettingsIcon,
  SettingsIcon,
  SettingsIcon,
  SettingsIcon,
  SettingsIcon
];
const tabs = ['Dashboard', 'Connect', 'Accounts', 'Tools', 'Settings'];
const tabRefs = tabs.map(() => createRef(null));

function Tabs() {
  const [vertical, toggleVertical] = useState(false);
  const {
    selectedItem,
    focusedItem,
    getTabProps,
    getTabListProps,
    getTabPanelProps
  } = useTabs({ vertical });
  const tabComponents = [];
  const tabPanels = [];

  tabs.forEach((tab, index) => {
    const Icon = icons[index];

    tabComponents.push(
      <TabItem
        {...getTabProps({
          item: tab,
          index,
          vertical,
          focusRef: tabRefs[index],
          key: tab,
          selected: tab === selectedItem,
          focused: tab === focusedItem
        })}
      >
        <Icon />
        <TabLabel vertical={vertical}>{tab}</TabLabel>
      </TabItem>
    );

    tabPanels.push(
      <TabPanel {...getTabPanelProps({ index, item: tab, key: tab })}>
        <Other
          selectedItem={selectedItem}
          vertical={vertical}
          toggleVertical={toggleVertical}
        />
      </TabPanel>
    );
  });

  return (
    <Main vertical={vertical}>
      {!vertical && <Header selectedItem={selectedItem} />}
      <TabList {...getTabListProps({ vertical })}>{tabComponents}</TabList>
      <div
        css={`
          display: flex;
          flex-direction: column;
          flex: 1;
        `}
      >
        {tabPanels}
      </div>
    </Main>
  );
}

export const App = props => {
  return <Tabs />;
};
