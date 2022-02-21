import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";

const Con = styled.div`
  position: relative;
  top: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentCon = styled.div`
  background-color: gainsboro;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-radius: 13px;
  font-size: 20px;
`;
const Input = styled.input`
  font-size: 17px;
  margin: 9px;
`;
const Error = styled.span`
  font-size: 13px;
  color: red;
  height: 17px;
`;

function LoginPage(props) {
  const {
    activeUser,
    userName,
    setUserName,
    password,
    setPassword,
    login,
    uError,
    pError,
    displayError,
  } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (activeUser) {
      navigate("/");
    }
  }, [activeUser]);
  return (
    <Con>
      <ContentCon>
        <label htmlFor="username">Username</label>
        <Error>{displayError ? uError : " "}</Error>
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          name="username"
          placeholder="Username"
        />
        <label htmlFor="password">Password</label>
        <Error error={displayError}>{displayError ? pError : " "}</Error>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          type="submit"
          onClick={() => {
            login();
          }}
        >
          Login
        </button>
      </ContentCon>
    </Con>
  );
}

export default LoginPage;
