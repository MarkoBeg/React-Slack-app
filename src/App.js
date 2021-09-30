import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SidebarLeft from "./components/SidebarLeft";
import styled from "styled-components";
import SidebarMain from "./components/SidebarMain";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login";
import { auth } from "./firebase";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <LoadingContainer>
        <LoadSpinner>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/slack-1425877-1205068.png"
            alt=""
          />
          <Spinner
            name="line-scale-pulse-out"
            color="#3f0f40"
            fadeIn="none"
          ></Spinner>
        </LoadSpinner>
      </LoadingContainer>
    );
  }

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login></Login>
        ) : (
          <>
            <Header></Header>
            <AppBody>
              <SidebarLeft></SidebarLeft>
              <SidebarMain></SidebarMain>
              <Switch>
                <Route path="/" exact>
                  <Chat></Chat>
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const LoadSpinner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > img {
    height: 300px;
    padding: 30px;
    margin-bottom: 25px;
  }
`;
