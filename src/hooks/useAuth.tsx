import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useMemo, useState } from "react";
import { axiosInstance } from "~/service/axiosInstance";

const AuthContext = createContext<ContextType | undefined>(undefined);

interface UserInfo {
  email?: string;
  password?: string;
  password_confirmation?: string;
}

export const AuthContextProvider = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [hasAcc, setHasAcc] = useState(true);
  const [userToken, setUserToken] = useState<string | undefined>(undefined);

  const login = async () => {
    await AsyncStorage.clear();
    try {
      const res = await axiosInstance({
        method: "post",
        url: "/auth/login",
        data: {
          email: "leonlav77@gmail.com",
          password: "password",
        },
      });
      await AsyncStorage.setItem("token", res.data.token);
      return res.data.token;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const register = async () => {
    try {
      const res = await axiosInstance({
        method: "post",
        url: "/auth/register",
        data: {
          name: "leon",
          email: "leonlav778@gmail.com",
          password: "password",
          password_confirmation: "password",
        },
      });
      await AsyncStorage.setItem("token", res.data.token);
      return res.data.token;
    } catch (error) {
      return error;
    }
  };

  const isLoggedIn = userToken !== undefined;

  const memoizedValues = useMemo(
    () => ({
      userInfo,
      setUserInfo,
      userToken,
      login,
      register,
      isLoggedIn,
      setUserToken,
      hasAcc,
      setHasAcc,
    }),
    [userInfo, setUserInfo, login, register, isLoggedIn, hasAcc]
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
  register: () => Promise<any>;
  isLoggedIn: boolean;
  hasAcc: boolean;
  setHasAcc: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("Tried using useAuth without AuthContextProvider");

  return context;
}
