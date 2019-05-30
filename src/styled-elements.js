import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import { ReactComponent as HeartIcon } from '@zendeskgarden/svg-icons/src/16/heart-stroke.svg';
import { ReactComponent as MicIcon } from '@zendeskgarden/svg-icons/src/16/microphone-on-stroke.svg';

import { cssProps, camelCaseToDash } from './cssProps';

const Tab = styled.button`
  border: none;
  background: transparent;
  padding: 4px;
  width: 26px;
  height: 26px;
  margin: 0;
  outline: none;
  border-radius: 50%;
  &:focus {
    box-shadow: 0 0 0 3px green;
  }
`;

const StyledTab = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <Tab {...props} ref={ref}>
      {children}
    </Tab>
  );
});

export const Settings = React.forwardRef((props, ref) => {
  return (
    <StyledTab {...props} ref={ref}>
      <SettingsIcon />
    </StyledTab>
  );
});

export const Heart = React.forwardRef((props, ref) => {
  return (
    <StyledTab {...props} ref={ref}>
      <HeartIcon />
    </StyledTab>
  );
});

export const Mic = React.forwardRef((props, ref) => {
  return (
    <StyledTab {...props} ref={ref}>
      <MicIcon />
    </StyledTab>
  );
});

export const StyledTabList = styled.div`
  border-radius: 4px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  background: #f0f0f0;
  box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.1);
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledRect = styled.div`
  ${({ css }) => css}
`;

export const Rect = ({ as, ref, ...props }) => {
  const css = Object.entries(props).reduce((acc, item) => {
    const [prop, val] = item;

    if (cssProps.indexOf(prop) !== -1) {
      acc += `${camelCaseToDash(prop)}: ${val};`;
    }

    return acc;
  }, '');

  return <StyledRect as={as} ref={ref} css={css} {...props} />;
};
