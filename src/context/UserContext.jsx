import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { StockContext } from "./StockContext";
export const UserContext = createContext(null);

export default function UserProvider(props) {
  const { clearWatchList } = useContext(StockContext);

  const [activeUser, setActiveUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [uError, setUError] = useState(null);
  const [pError, setPError] = useState(null);
  const [displayError, setDisplayError] = useState(false);

  //let navigate = useNavigate();

  useEffect(
    (text) => {
      if (userName.length < 4 || userName.length > 20) {
        setUError("Must be between 4 and 20 characters");
      } else {
        setUError(null);
      }
      if (password.length < 4 || password.length > 20) {
        setPError("Must be between 4 and 20 characters");
      } else {
        setPError(null);
      }
    },
    [userName, password]
  );

  const login = useCallback(() => {
    setDisplayError(true);
    if (!uError && !pError) {
      setActiveUser(userName);
      setUserName("");
      setPassword("");
      return true;
    }
    return false;
  }, [userName, password, uError, pError]);

  const logout = useCallback(() => {
    setDisplayError(false);
    clearWatchList();
    setActiveUser(null);
  }, []);

  return (
    <UserContext.Provider
      value={{
        activeUser,
        userName,
        setUserName,
        password,
        setPassword,
        login,
        logout,
        uError,
        pError,
        displayError,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
