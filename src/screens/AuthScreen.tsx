import React, { useState } from "react";
import { Login } from "../coponents/Login";
import { Reigster } from "../coponents/Register";

export const AuthScreen = () => {
  const [noAccount, setNoAccount] = useState(false);
  return (
    <>
      {!noAccount ? (
        <Login setNoAccount={setNoAccount} />
      ) : (
        <Reigster setNoAccount={setNoAccount} />
      )}
    </>
  );
};
