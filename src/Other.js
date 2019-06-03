import React from 'react';
import styled from 'styled-components/macro';

const Stats = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(54, 54, 54);
  box-shadow: rgba(0, 20, 40, 0.043) 0px 3px 4px 0px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(228, 228, 228);
  border-image: initial;
  border-radius: 1px;
  flex: 1 1 0%;
`;

const StatsItem = props => (
  <div
    css={`
      display: flex;
      flex-direction: column;
      flex: 1 1 0%;
      border-right: 0px solid rgb(228, 228, 228);
      padding: 0px 12px;
    `}
    {...props}
  />
);

const StatsCounter = ({ number, type, label }) => (
  <>
    <div
      css={`
        font-size: 36px;
        font-weight: 400;
        color: rgb(54, 54, 54);
        font-feature-settings: 'lnum';
        letter-spacing: -0.3px;
      `}
    >
      {number}
      <span
        css={`
          font-size: 70%;
          font-weight: 600;
          margin-left: 4px;
          color: rgb(54, 54, 54);
        `}
      >
        {type}
      </span>
    </div>
    <div
      css={`
        text-transform: none;
        font-size: 14px;
        font-weight: 600;
        margin-top: 2px;
        color: rgb(191, 191, 191);
      `}
    >
      {label}
    </div>
  </>
);

const FooterItem = styled.div`
  text-transform: none;
  font-size: 12px;
  font-weight: 400;
  color: rgb(160, 160, 160);
  margin: 0px 10px;
`;

export const Other = props => (
  <>
    <div
      css={`
        flex: 1;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={`
          padding-top: 12px;
          padding-left: 12px;
          padding-right: 12px;
          display: flex;
          border-bottom: 0px solid rgb(228, 228, 228);
        `}
      >
        <Stats>
          <div
            css={`
              text-align: left;
              display: flex;
              flex-direction: row;
              padding: 12px 0px;
            `}
          >
            <StatsItem>
              <StatsCounter number={31.2} type="M" label="Completed" />
            </StatsItem>
            <StatsItem>
              <StatsCounter number={12.2} type="M" label="In Progress" />
            </StatsItem>
            <StatsItem>
              <StatsCounter number={2.3} type="M" label="Inactive" />
            </StatsItem>
            <StatsItem>
              <StatsCounter number={97} type="%" label="Activity Rate" />
            </StatsItem>
          </div>
        </Stats>
      </div>
      <div
        css={`
          padding-top: 12px;
          padding-left: 12px;
          padding-right: 12px;
          display: flex;
          flex: 1 1 0%;
        `}
      >
        <div
          css={`
            background-color: rgb(255, 255, 255);
            color: rgb(54, 54, 54);
            box-shadow: rgba(0, 20, 40, 0.043) 0px 3px 4px 0px;
            font-weight: 400;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-width: 0px;
            border-style: solid;
            border-color: rgb(228, 228, 228);
            border-image: initial;
            border-radius: 1px;
            flex: 1 1 0%;
            padding: 12px;
          `}
        >
          <div
            css={`
              color: rgb(54, 54, 54);
              border-bottom: 0px solid rgb(228, 228, 228);
              flex: 0 1 0%;
            `}
          >
            Your {props.selectedItem}
          </div>
          <div
            css={`
              display: flex;
              flex: 1 1 0%;
            `}
          >
            <div
              css={`
                text-align: left;
                align-self: center;
                display: block;
                width: 100%;
              `}
            >
              <div
                css={`
                  font-size: 14px;
                  line-height: 20.3px;
                  font-weight: 600;
                  color: rgb(191, 191, 191);
                  text-align: left;
                  padding: 8px 0px;
                `}
              >
                No Favorites yet. After you've added some favorites, you'll have
                quick access to them here.
              </div>
            </div>
          </div>
        </div>
        <div
          css={`
            background-color: rgb(255, 255, 255);
            color: rgb(54, 54, 54);
            box-shadow: rgba(0, 20, 40, 0.043) 0px 3px 4px 0px;
            font-weight: 400;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-width: 0px;
            border-style: solid;
            border-color: rgb(228, 228, 228);
            border-image: initial;
            border-radius: 1px;
            flex: 1 1 0%;
            padding: 12px;
            margin-left: 12px;
          `}
        >
          <div
            css={`
              color: rgb(54, 54, 54);
              border-bottom: 0px solid rgb(228, 228, 228);
              flex: 0 1 0%;
            `}
          >
            Active Agents
          </div>
          <div
            css={`
              display: flex;
              flex: 1 1 0%;
            `}
          >
            <div
              css={`
                text-align: left;
                align-self: center;
                display: block;
                width: 100%;
              `}
            >
              <button>Add an agent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      css={`
        height: 40px;
        opacity: 1;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        -webkit-box-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px 12px;
        border-top: 0px solid rgb(228, 228, 228);
        overflow: hidden;
      `}
    >
      <div
        css={`
          margin-left: -10px;
          display: flex;
          flex-direction: row;
          -webkit-box-flex: 1;
          flex-grow: 1;
        `}
      >
        <FooterItem>Home</FooterItem>
        <FooterItem>Careers</FooterItem>
        <FooterItem>Legal &amp; Privacy</FooterItem>
      </div>
      <div
        css={`
          margin-right: -10px;
        `}
      >
        <FooterItem>© 2019 Pale Visual</FooterItem>
      </div>
    </div>
  </>
);
