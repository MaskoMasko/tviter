import React, { createContext, useContext, useMemo, useState } from "react";

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

  const memoizedValues = useMemo(
    () => ({ userInfo, setUserInfo }),
    [userInfo, setUserInfo]
  );

  return (
    <AuthContext.Provider value={memoizedValues}>
      {children}
    </AuthContext.Provider>
  );
};

interface ContextType {
  userInfo?: UserInfo;
  setUserInfo?: React.Dispatch<React.SetStateAction<UserInfo>>;
}

export default function useAuth() {
  return useContext<ContextType>(AuthContext);
}
