import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { provider } from "../firebase";
import { auth } from "../firebase";

export default function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://cdn.iconscout.com/icon/free/png-512/slack-1425878-1205069.png"></img>
        <h1>Sign in to Slack</h1>
        <p>Slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  padding: 100px;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 4px 3px 3px 6px rgba(0, 0, 0, 0.45);

  > h1 {
    font-size: 24px;
    padding: 15px 0;
    color: #3f0f40;
  }
  > p {
    color: #3f0f40;
    font-size: 16px;
    font-weight: 500;
  }

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > Button {
    margin-top: 10px;
    background-color: #3f0f40;
    color: #fff;

    :hover {
      background-color: #3f0f40;
    }
  }
`;
