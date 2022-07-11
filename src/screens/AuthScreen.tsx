import React, { useState } from "react";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import { Login } from "../coponents/Login";
import { Reigster } from "../coponents/Register";

export const AuthScreen = () => {
  const [noAccount, setNoAccount] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/login-image.jpg")}
        imageStyle={{ backgroundColor: "red", width: "100%", height: "100%" }}
      >
        {!noAccount ? (
          <Login setNoAccount={setNoAccount} />
        ) : (
          <Reigster setNoAccount={setNoAccount} />
        )}
      </ImageBackground>
    </View>
  );
};
