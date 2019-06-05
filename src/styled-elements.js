import styled from 'styled-components/macro';

export const TabItem = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: rgb(160, 160, 160);
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0px solid transparent;
  outline: none;
  ${({ vertical }) => {
    if (vertical) {
      return `
        padding: 12px 0;
        border-inline-start: 2px solid transparent;
        width: 100%;
      `;
    } else {
      return `
        height: 100%;
        border-bottom: 2px solid transparent;
        margin-left: 12px;
        margin-right: 10px;
      `;
    }
  }}
  ${props => props.selected && `color: rgb(179, 51, 134);`}
  ${props => props.focused && `border-color: rgb(179, 51, 134);`}
`;

export const TabList = styled.div`
  ${({ vertical }) => {
    if (vertical) {
      return `
        flex-direction: column;
        width: 56px;
        border-inline-end: 1px solid rgb(228, 228, 228);
        padding-top: 10px;
      `;
    } else {
      return `
        height: 40px;
        justify-content: flex-start;
      `;
    }
  }}
  opacity: 1;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  border-bottom: 0px solid rgb(228, 228, 228);
`;

export const TabLabel = styled.span`
  margin-inline-start: 8px;
  ${({ vertical }) =>
    vertical &&
    `
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    width: 1px;
    position: absolute;
  `}
`;

export const TabPanel = styled.div`
  ${props =>
    !props.hidden &&
    `
  display: flex;
  flex-direction: column;
  flex: 1;
  `}
`;

export const AppHeader = styled.header`
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

  h1 {
    font-size: 17px;
    font-weight: 400;
    color: rgb(54, 54, 54);
  }
`;

export const Main = styled.main`
  background-color: rgb(244, 244, 244);
  display: flex;
  ${props => !props.vertical && `flex-direction: column;`}
  flex: 1 1 0%;
`;
