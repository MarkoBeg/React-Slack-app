import React from "react";
import styled from "styled-components";

export default function Messages({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="user-img" />
      <MessageOutput>
        <h3>
          {user}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h3>
        <p>{message}</p>
      </MessageOutput>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  padding-left: 10px;

  > img {
    width: 45px;
    border-radius: 10px;
    border: 2px solid purple;
  }
`;

const MessageOutput = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    padding-left: 8px;
    font-size: 20px;

    > span {
      padding-left: 10px;
      font-size: 14px;
      font-weight: 400;
    }
  }

  > p {
    padding-left: 8px;
    color: #000;
    font-size: 16px;
    font-weight: 400;
  }
`;
