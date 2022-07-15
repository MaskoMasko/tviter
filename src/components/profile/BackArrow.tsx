import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const BackArrow = () => {
  const navigation = useNavigation() as any;
  return (
    <View>
      <AntDesign
        name="arrowleft"
        size={26}
        color="black"
        style={{ marginRight: 15 }}
        onPress={() => navigation.navigate("Posts")}
      />
    </View>
  );
};
