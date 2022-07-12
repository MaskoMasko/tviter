import React from "react";
import { FlatList } from "react-native";
import { SinglePost } from "./SinglePost";

export const PostsList = ({ data, users, rerenderList }: any) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        alignItems: "center",
        flexDirection: "column-reverse",
      }}
      style={{ height: 600 }}
      extraData={rerenderList}
      renderItem={({ item: post }) => {
        const user = users.find((user: any) => user.id === post.user_id).name;
        return <SinglePost data={{ post, user }} />;
      }}
    />
  );
};
