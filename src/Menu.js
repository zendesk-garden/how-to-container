import React, { createRef } from 'react';
import styled from 'styled-components/macro';
import { useTabs } from '@zendeskgarden/container-tabs';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/16/gear-fill.svg';

import { Other } from './Other';

const icons = [
  SettingsIcon,
  SettingsIcon,
  SettingsIcon,
  SettingsIcon,
  SettingsIcon
];
const tabs = ['Dashboard', 'Connect', 'Accounts', 'Tools', 'Settings'];
const tabRefs = tabs.map(() => createRef(null));

const TabItem = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-left: 12px;
  margin-right: 10px;
  color: rgb(160, 160, 160);
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-top: 0px solid transparent;
  border-bottom: 2px solid transparent;
  outline: none;
  ${props => props.selected && `color: rgb(179, 51, 134);`}
  ${props => props.focused && `border-color: rgb(179, 51, 134);`}
`;

const TabList = styled.div`
  height: 40px;
  opacity: 1;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 0px solid rgb(228, 228, 228);
`;

const TabLabel = styled.span`
  margin-left: 8px;
`;

const TabPanel = styled.div`
  ${props =>
    !props.hidden &&
    `
  display: flex;
  flex-direction: column;
  flex: 1;
  `}
`;

function Tabs() {
  const {
    selectedItem,
    focusedItem,
    getTabProps,
    getTabListProps,
    getTabPanelProps
  } = useTabs();
  const tabComponents = [];
  const tabPanels = [];

  tabs.forEach((tab, index) => {
    const Icon = icons[index];

    tabComponents.push(
      <TabItem
        {...getTabProps({
          item: tab,
          index,
          focusRef: tabRefs[index],
          key: tab,
          selected: tab === selectedItem,
          focused: tab === focusedItem
        })}
      >
        <Icon />
        <TabLabel>{tab}</TabLabel>
      </TabItem>
    );

    tabPanels.push(
      <TabPanel {...getTabPanelProps({ index, item: tab, key: tab })}>
        <Other selectedItem={selectedItem} />
      </TabPanel>
    );
  });

  return (
    <>
      <div
        css={`
          height: 60px;
          opacity: 1;
          background-color: rgb(255, 255, 255);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0px 12px;
          border-top: 0px solid rgb(179, 51, 134);
          overflow: hidden;
        `}
        class="sc-htpNat fTjEIs"
      >
        <span class="sc-ifAKCX gShGAx">Pale Visual - {selectedItem}</span>
      </div>
      <TabList {...getTabListProps()}>{tabComponents}</TabList>
      {tabPanels}
    </>
  );
}

export const Menu = props => {
  return <Tabs />;
};
