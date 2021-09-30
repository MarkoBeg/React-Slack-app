import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "../Main.css";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

export default function SidebarMainOption({
  Icon,
  title,
  addChannelOption,
  id,
}) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Please enter a channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  const [select, setSelect] = useState(true);

  const selected = () => {
    {
      select ? setSelect(false) : setSelect(true);
    }
    console.log(select);
  };
  return (
    <SidebarContainer onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon></Icon>}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel
          className={select ? "dinamic" : "static"}
          onClick={selected}
        >
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
  padding: 10px 0;

  :hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  > .MuiSvgIcon-root {
    color: #fff;
    font-size: 24px;
    margin-left: 10px;
    margin: 5px 0;
  }
  > h3 {
    color: #fff;
    padding: 0px 5px;
    font-weight: 200;
    font-size: 16px;
  }
`;

const SidebarOptionChannel = styled.div`
  align-items: center;
  display: flex;
  color: ${({ title }) => `#fff`};
  font-size: ${({ title }) => `14px`};
  cursor: ${({ title }) => `pointer`};
  font-weight: ${({ title }) => `bold`};

  > span {
    color: #fff;
    font-size: 22px;
    padding-left: 10px;
    padding-right: 5px;
    cursor: pointer;
  }
`;
