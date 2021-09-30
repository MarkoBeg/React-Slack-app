import React from "react";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import InfoIcon from "@material-ui/icons/Info";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import GamesIcon from "@material-ui/icons/Games";
import Messages from "./Messages";
import logo from "../images/avatar.jpg";
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { db } from "../firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useRef, useEffect } from "react";

export default function Chat() {
  const chatRef = useRef(null);

  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessage, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessage && (
        <>
          <ChatHeader>
            <ChatHeaderLeft>
              <StarIcon></StarIcon>
              <h2>{roomDetails?.data().name}</h2>
              <StarIcon></StarIcon>
            </ChatHeaderLeft>

            <ChatHeaderMid>
              <ThumbUpAltIcon style={{ color: "yellow" }}></ThumbUpAltIcon>
              <EmojiEmotionsIcon
                style={{ color: "#082FE9" }}
              ></EmojiEmotionsIcon>
              <EmojiEventsIcon style={{ color: "yellow" }}></EmojiEventsIcon>
              <GamesIcon style={{ color: "#082FE9" }}></GamesIcon>
            </ChatHeaderMid>

            <ChatHeaderRight>
              <InfoIcon></InfoIcon>
            </ChatHeaderRight>
          </ChatHeader>
          <Messages
            userImage={logo}
            user="Marko"
            time="10pm"
            message="Hello all 🥳 !!!"
          ></Messages>
          {roomMessage?.docs.map((item) => {
            const { message, timestamp, user, userImage } = item.data();
            return (
              <Messages
                key={item.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
              ></Messages>
            );
          })}
          <BottomDiv ref={chatRef}></BottomDiv>
          <ChatInput
            channelId={roomId}
            channelName={roomDetails?.data().name}
          ></ChatInput>
        </>
      )}
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  flex: 0.6;
  flex-grow: 1;
  overflow: scroll;
  margin-top: 50px;
  width: 100%;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: whitesmoke;
  border-bottom: 1px solid gray;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  cursor: pointer;
`;

const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  > .MuiSvgIcon-root {
    color: yellow;
  }
`;
const ChatHeaderMid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > .MuiSvgIcon-root {
    margin: 0 10px;
    font-size: 32px;
  }
`;

const ChatHeaderRight = styled.div`
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    color: gray;
  }
`;

const BottomDiv = styled.div`
  padding-bottom: 150px;
`;
