import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import "./Menu.css";
import SearchPage from "./SearchPage/SearchPage";

const Back = styled.div`
  background-color: black;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
`;

const MenuCon = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
`;

const ListItem = styled.li`
  padding-right: 20px;
`;

const User = styled.div`
  color: white;
  padding-right: 10px;
`;
const UserCon = styled.div`
  display: flex;
  align-items: center;
`;
const LogoutBtn = styled.button``;
function Menu() {
  const { activeUser, logout } = useContext(UserContext);
  const navigate = useNavigate()
  return (
    <>
      <SearchPage />
      <Back>
        <MenuCon>
          <List>
            <ListItem>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Home
              </NavLink>
            </ListItem>
            <ListItem>
              {activeUser && (
                <NavLink
                  to="/watchlist"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  Watch List
                </NavLink>
              )}
            </ListItem>
          </List>
          {activeUser && (
            <UserCon>
              <User>hello {activeUser}</User>
              <LogoutBtn onClick={logout}>Logout</LogoutBtn>
            </UserCon>
          )}
          { !activeUser && <LogoutBtn onClick={() =>  navigate('/login')}>Login</LogoutBtn> }
        </MenuCon>
      </Back>
    </>
  );
}

export default Menu;
