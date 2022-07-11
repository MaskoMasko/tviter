import axios from "axios";
import React, { createContext, useContext, useMemo, useState } from "react";
import { BASE_URL } from "../../constants";

const AuthContext = createContext({});

interface UserInfo {
  email?: string;
  password?: string;
}

export const AuthContextProvider = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
  });

  const [userToken, setUserToken] = useState<string>("");

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

  const memoizedValues = useMemo(
    () => ({ userInfo, setUserInfo, userToken, login, meInfo, register }),
    [userInfo, setUserInfo, login, register]
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
  userToken: string;
  setUserToken: React.Dispatch<React.SetStateAction<UserInfo>>;
  login: () => Promise<any>;
  meInfo: () => Promise<any>;
  register: () => Promise<any>;
}

export default function useAuth() {
  return useContext<Partial<ContextType>>(AuthContext);
}

export const fetchAllPosts = async (userToken: string) => {
  try {
    const res = await axios({
      method: "get",
      url: BASE_URL + "/posts",
      headers: { Authorization: `Bearer ${userToken}` },
    });
    return res.data;
  } catch (error) {
    return false;
  }
};

export const fetchAllUsers = async (userToken: string) => {
  try {
    const res = await axios({
      method: "get",
      url: BASE_URL + "/users",
      headers: { Authorization: `Bearer ${userToken}` },
    });
    return res.data;
  } catch (error) {
    return false;
  }
};
