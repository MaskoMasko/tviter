import React from "react";
import { View } from "react-native";
import { BackArrow } from "~/components/profile/BackArrow";
import { PostListView } from "~/components/profile/PostListView";
import { Username } from "~/components/profile/Username";
import { C } from "~/constants";

export const ProfileScreen = () => {
  return (
    <View style={{ backgroundColor: C.moreYellowThanGreen, flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 50,
          marginHorizontal: 20,
          marginBottom: 15,
        }}
      >
        <BackArrow />
        <Username />
      </View>
      <PostListView />
    </View>
  );
};
