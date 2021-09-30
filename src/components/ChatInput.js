import React from "react";
import styled from "styled-components";
import { useState } from "react";
import firebase from "firebase";
import { db } from "../firebase";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  console.log(channelId);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });
    setInput("");
  };

  return (
    <ChatInputBox>
      <form action="">
        <input
          type="text"
          placeholder={`Send Message ${channelName}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ChatButton onClick={sendMessage}></ChatButton>
      </form>
    </ChatInputBox>
  );
}

const ChatInputBox = styled.div`
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    width: 30%;
    position: fixed;
    bottom: 25px;
    height: 30px;
    outline: none;
    border: 2px solid #3f0f40;
    border-radius: 8px;
  }
`;

const ChatButton = styled.button`
  display: none;
`;
