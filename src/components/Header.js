import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Header() {
    
  const [user] = useAuthState(auth);

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <HeaderContainer>
        <HeaderLeft>
          <Avatar
            alt={user?.displayName}
            src={user?.photoURL}
            onClick={signOut}
          ></Avatar>
        </HeaderLeft>

        <HeaderMid>
          <ArrowBackIcon></ArrowBackIcon>
          <ArrowForwardIcon></ArrowForwardIcon>
          <AccessTimeOutlinedIcon></AccessTimeOutlinedIcon>
          <input type="text" placeholder="Search" />
        </HeaderMid>

        <HeaderRight>
          <HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>
        </HeaderRight>
      </HeaderContainer>
    </div>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 5px 15px;
  background-color: #3f0f40;
  cursor: pointer;
  border-bottom: 1px solid gray;
`;
const HeaderLeft = styled(Avatar)`
  :hover {
    opacity: 0.7;
    border: 2px solid #000;
  }
`;

const HeaderMid = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  cursor: pointer;

  > .MuiSvgIcon-root {
    object-fit: contain;
    align-items: center;
    color: #fff;
    margin: 0 15px;
  }
  > input {
    width: 55%;
    margin-left: 45px;
    text-align: center;
    height: 30px;
    border: none;
    outline: none;
    border: 1px solid gray;
    border-radius: 6px;
  }
`;

const HeaderRight = styled.div`
  > .MuiSvgIcon-root {
    color: #fff;
  }
`;
