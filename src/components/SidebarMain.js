import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarMainOption from "./SidebarMainOption";
import BarChartIcon from "@material-ui/icons/BarChart";
import ChatIcon from "@material-ui/icons/Chat";

import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import AddIcon from "@material-ui/icons/Add";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SidebarMain() {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <Sidebar>
      <SidebarTop>
        <SidebarTopInfo>
          <h2>Slack Inc</h2>
          <CreateIcon></CreateIcon>
        </SidebarTopInfo>
        <SidebarInfo>
          <FiberManualRecordIcon></FiberManualRecordIcon>
          <SidebarTopName>{user.displayName}</SidebarTopName>
        </SidebarInfo>
      </SidebarTop>
      <SidebarContainer>
        <SidebarMainOption
          Icon={BarChartIcon}
          title="All unreads"
        ></SidebarMainOption>
        <SidebarMainOption Icon={ChatIcon} title="Threads"></SidebarMainOption>
        <SidebarMainOption
          Icon={AlternateEmailIcon}
          title="Mentions & reactions"
        ></SidebarMainOption>
        <SidebarMainOption
          Icon={ArrowDownwardIcon}
          title="ShowMore"
        ></SidebarMainOption>

        <hr />

        <SidebarMainOption
          Icon={MeetingRoomIcon}
          title="Rooms"
        ></SidebarMainOption>
        <SidebarMainOption
          Icon={AddIcon}
          title="Add Channel"
          addChannelOption
        ></SidebarMainOption>
        <SidebarMainOption title="Room1"></SidebarMainOption>
        <SidebarMainOption title="Room2"></SidebarMainOption>
        {channels?.docs.map((item) => {
          return (
            <SidebarMainOption
              key={item.id}
              id={item.id}
              title={item.data().name}
            ></SidebarMainOption>
          );
        })}
      </SidebarContainer>
    </Sidebar>
  );
}

const Sidebar = styled.div`
  flex: 0.2;
  background-color: #3f0f40;
  max-width: 250px;
  padding-top: 55px;
  height: 100vh;
  height: 100%;
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  border-bottom: 1px solid #fff;

  > h2 {
    font-size: 22px;
    font-weight: 500;
    padding-left: 5px;
    color: #fff;
  }
`;
const SidebarTopInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  > h2 {
    color: #fff;
  }
  > .MuiSvgIcon-root {
    color: #000;
    font-size: 25px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const SidebarInfo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;

  > .MuiSvgIcon-root {
    color: green;
    font-size: 25px;
  }
`;

const SidebarTopName = styled.h3`
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  padding-left: 5px;
`;
const SidebarContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
