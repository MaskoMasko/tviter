import React from "react";
import { View } from "react-native";
import { PostListView } from "~/components/profile/PostListView";
import { Username } from "~/components/profile/Username";
import { C } from "~/constants";

export const ProfileScreen = () => {
  return (
    <View style={{ backgroundColor: C.moreYellowThanGreen, flex: 1 }}>
      <Username />
      <PostListView />
    </View>
  );
};
