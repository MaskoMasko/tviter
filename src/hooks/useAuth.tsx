import axios from "axios";
import React, { createContext, useContext, useMemo, useState } from "react";
import { BASE_URL } from "../../constants";

const AuthContext = createContext<ContextType | undefined>(undefined);

interface UserInfo {
  email?: string;
  password?: string;
}

export const AuthContextProvider = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
  });

  const [userToken, setUserToken] = useState<string | undefined>(undefined);

  const login = async () => {
    try {
      const res = await axios({
        method: "post",
        url: BASE_URL + "/auth/login",
        data: {
          email: "leonlav77@gmail.com",
          password: "password",
        },
      });
      setUserToken(res.data.token);
      return res.data.token;
    } catch (error) {
      return false;
    }
  };

  const register = async () => {
    try {
      const res = await axios({
        method: "post",
        url: BASE_URL + "/auth/register",
        data: {
          name: "leon",
          email: "leonlav778@gmail.com",
          password: "password",
          password_confirmation: "password",
        },
      });
      setUserToken(res.data.token);
      return res.data.token;
    } catch (error) {
      return false;
    }
  };

  const meInfo = async () => {
    try {
      const res = await axios({
        method: "get",
        url: BASE_URL + "/auth/me",
        headers: { Authorization: `Bearer ${userToken}` },
      });
      return res.data;
    } catch (error) {
      return false;
    }
  };

  const isLoggedIn = userToken !== undefined;

  const memoizedValues = useMemo(
    () => ({
      userInfo,
      setUserInfo,
      userToken,
      login,
      meInfo,
      register,
      isLoggedIn,
      setUserToken,
    }),
    [userInfo, setUserInfo, login, register, isLoggedIn]
  );

  return (
    <AuthContext.Provider value={memoizedValues}>
      {children}
    </AuthContext.Provider>
  );
};

interface ContextType {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  userToken: string | undefined;
  setUserToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  login: () => Promise<any>;
  meInfo: () => Promise<any>;
  register: () => Promise<any>;
  isLoggedIn: boolean;
}

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("Tried using useAuth without AuthContextProvider");

  return context;
}
