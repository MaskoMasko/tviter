import { Instance } from "mobx-state-tree";
import React from "react";
import { FlatList, View } from "react-native";
import { Post } from "~/store/models/post/Post";
import { User } from "~/store/models/user/User";
import { SinglePost } from "./SinglePost";

export const PostsList = ({
  data,
  users,
  rerenderList,
}: {
  data: Instance<typeof Post>[];
  users: Instance<typeof User>[];
  rerenderList: boolean;
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        alignItems: "center",
        flexDirection: "column",
        flexGrow: 0,
        marginVertical: 50,
      }}
      extraData={rerenderList}
      renderItem={({ item: post }) => {
        const foundUser = users.find((user) => user.id === post.user_id);
        if (!foundUser) throw new Error("No foundUser");
        const user = foundUser.name;
        return <SinglePost data={{ post, user }} />;
      }}
      ListFooterComponent={<View style={{ height: 50 }}></View>}
    />
  );
};
