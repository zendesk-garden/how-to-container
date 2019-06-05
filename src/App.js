import React, { createRef, useState } from 'react';
import { useTabs } from '@zendeskgarden/container-tabs';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/16/gear-fill.svg';
import { ReactComponent as ToolsIcon } from '@zendeskgarden/svg-icons/src/16/box-3d-fill.svg';
import { ReactComponent as UserIcon } from '@zendeskgarden/svg-icons/src/16/user-group-fill.svg';
import { ReactComponent as AdjustIcon } from '@zendeskgarden/svg-icons/src/16/adjust-fill.svg';
import { ReactComponent as GridIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-fill.svg';
import 'styled-components/macro';

import { Other } from './Other';
import {
  Main,
  AppHeader,
  TabItem,
  TabList,
  TabLabel,
  TabPanel
} from './styled-elements';

const icons = [GridIcon, AdjustIcon, UserIcon, ToolsIcon, SettingsIcon];
const tabs = ['Dashboard', 'Connect', 'Accounts', 'Tools', 'Settings'];
const tabRefs = tabs.map(() => createRef(null));

function Tabs() {
  const [vertical, toggleVertical] = useState(false);
  const [rtl, toggleRtl] = useState(false);
  const {
    selectedItem,
    focusedItem,
    getTabProps,
    getTabListProps,
    getTabPanelProps
  } = useTabs({ vertical, rtl: vertical ? false : rtl });
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
          rtl={rtl}
          toggleRtl={toggleRtl}
        />
      </TabPanel>
    );
  });

  return (
    <Main vertical={vertical} dir={rtl ? 'rtl' : undefined}>
      {!vertical && (
        <AppHeader>
          <h1>Pale Visual - {selectedItem}</h1>
        </AppHeader>
      )}
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
